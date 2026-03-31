import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // 1. EXTRAER LOS DATOS Y EL TOKEN
    const { recaptchaToken, id, asunto, cuerpo, pdfBase64 } = data;

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
      console.warn("🛑 Bloqueado por Cloudflare Turnstile:", turnstileData);
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
        user: "logisticalaloma@gmail.com", // Correo EMISOR
        pass: "lvfo znza mrhk uzwc", // Nota: Considera mover esta contraseña a tu .env.local por seguridad
      },
    });

    const mailOptions = {
      from: "logisticalaloma@gmail.com",
      // CORREO RECEPTOR EXCLUSIVO DE LOGISTICA
      to: "gerencialaloma@gmail.com, digiaudemba@gmail.com, mariamiras@gmail.com",
      subject: asunto,
      text: cuerpo,
      // ADJUNTO:
      attachments: pdfBase64
        ? [
            {
              filename: `Orden_Carga_ALTA_${id || ""}.pdf`,
              content: pdfBase64.split("base64,")[1],
              encoding: "base64",
            },
          ]
        : [],
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: "Email enviado con adjunto",
    });
  } catch (error) {
    console.error("Error en la API de correos:", error);
    return NextResponse.json(
      { success: false, error: "Error interno al enviar" },
      { status: 500 },
    );
  }
}
