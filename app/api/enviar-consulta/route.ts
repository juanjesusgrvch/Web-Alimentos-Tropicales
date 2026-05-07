import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // 1. EXTRAER LOS DATOS Y EL TOKEN
    const { recaptchaToken, asunto, cuerpo } = data;

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
        "Falta TURNSTILE_SECRET_KEY en las variables de entorno del servidor.",
      );
      return NextResponse.json(
        { success: false, error: "Error de configuracion del servidor." },
        { status: 500 },
      );
    }

    const verifyFormData = new FormData();
    verifyFormData.append("secret", secretKey);
    verifyFormData.append("response", recaptchaToken);

    const turnstileResponse = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        body: verifyFormData,
      },
    );

    const turnstileData = await turnstileResponse.json();

    if (!turnstileData.success) {
      console.warn("Consulta bloqueada por Cloudflare Turnstile:", turnstileData);
      return NextResponse.json(
        {
          success: false,
          error: "Validacion de seguridad fallida. Trafico sospechoso.",
        },
        { status: 403 },
      );
    }

    // 3. SI ES HUMANO, ENVIAR EL CORREO CON NODEMAILER
    const emailPassProcesadora = process.env.EMAIL_PASS_PROCESADORA;
    if (!emailPassProcesadora) {
      console.error(
        "Falta EMAIL_PASS_PROCESADORA en las variables de entorno del servidor.",
      );
      return NextResponse.json(
        { success: false, error: "Error de configuracion del servidor." },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "lalomaprocesadora@gmail.com",
        pass: emailPassProcesadora,
      },
    });

    const mailOptions = {
      from: "lalomaprocesadora@gmail.com",
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
