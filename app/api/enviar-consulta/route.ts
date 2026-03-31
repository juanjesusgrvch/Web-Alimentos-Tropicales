import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // 1. EXTRAER LOS DATOS Y EL TOKEN DE SEGURIDAD
    // Asumimos que el frontend envía el token bajo el nombre 'recaptchaToken' o 'turnstileToken'
    const { recaptchaToken, asunto, cuerpo } = data;

    // Si no hay token, rechazamos la petición inmediatamente
    if (!recaptchaToken) {
      return NextResponse.json(
        { success: false, error: "Falta el token de seguridad." },
        { status: 400 },
      );
    }

    // 2. VERIFICAR EL TOKEN CON CLOUDFLARE TURNSTILE
    const secretKey = process.env.TURNSTILE_SECRET_KEY;

    if (!secretKey) {
      console.error(
        "⚠️ Falta TURNSTILE_SECRET_KEY en las variables de entorno.",
      );
      return NextResponse.json(
        { success: false, error: "Error de configuración del servidor." },
        { status: 500 },
      );
    }

    // Preparamos los datos para preguntarle a Cloudflare
    const verifyFormData = new FormData();
    verifyFormData.append("secret", secretKey);
    verifyFormData.append("response", recaptchaToken);

    // Hacemos la petición a la API de Cloudflare
    const turnstileResponse = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        body: verifyFormData,
      },
    );

    const turnstileData = await turnstileResponse.json();

    // Si Cloudflare dice que NO es humano, bloqueamos el envío
    if (!turnstileData.success) {
      console.warn(
        "🛑 Consulta bloqueada por Cloudflare Turnstile:",
        turnstileData,
      );
      return NextResponse.json(
        {
          success: false,
          error: "Validación de seguridad fallida. Tráfico sospechoso.",
        },
        { status: 403 },
      );
    }

    // 3. SI ES HUMANO, ENVIAR EL CORREO CON NODEMAILER
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "lalomaprocesadora@gmail.com", // Correo EMISOR
        pass: "effr rhzw hgwv oycc", // Considera mover esto al .env.local también por seguridad
      },
    });

    const mailOptions = {
      from: "lalomaprocesadora@gmail.com",
      // CORREOS RECEPTORES DE CONSULTAS EXCLUSIVOS DE GERENCIA / COMERCIAL
      to: "gerencialaloma@gmail.com, digiaudemba@gmail.com, mariamiras@gmail.com",
      subject: asunto || data.asunto,
      text: cuerpo || data.cuerpo,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Consulta enviada" });
  } catch (error) {
    console.error("Error en la API de consultas:", error);
    return NextResponse.json(
      { success: false, error: "Error interno al enviar consulta" },
      { status: 500 },
    );
  }
}
