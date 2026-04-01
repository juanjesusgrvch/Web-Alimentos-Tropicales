"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { CheckCircle2, X } from "lucide-react";
// 1. IMPORTAMOS CLOUDFLARE TURNSTILE
import { Turnstile, TurnstileInstance } from "@marsidev/react-turnstile";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const turnstileSiteKey =
    process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ||
    "0x4AAAAAACyJhxAdaIE03gSM";

  // 2. ESTADOS PARA EL TOKEN DE SEGURIDAD
  const [turnstileToken, setTurnstileToken] = useState<string>("");
  const turnstileRef = useRef<TurnstileInstance>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 3. VALIDAMOS QUE CLOUDFLARE HAYA TERMINADO
    if (!turnstileToken) {
      alert(
        "Por favor, espera un segundo a que finalice la verificación de seguridad.",
      );
      return;
    }

    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Extraemos los datos del formulario
    const nombre = formData.get("name") as string;
    const empresa = formData.get("company") as string;
    const email = formData.get("email") as string;
    const mensaje = formData.get("message") as string;

    // Asunto y el Cuerpo del correo
    const asunto = `Nueva consulta web de ${nombre} - Alimentos Tropicales`;
    const cuerpo =
      `Has recibido un nuevo mensaje desde el formulario de contacto web:\n\n` +
      `• Nombre: ${nombre}\n` +
      `• Empresa: ${empresa}\n` +
      `• Correo del Cliente: ${email}\n` +
      `-------------------------------------\n` +
      `• Mensaje:\n${mensaje}\n` +
      `-------------------------------------`;

    try {
      // 4. LLAMAMOS AL BACKEND CORRECTO (/api/enviar-consulta)
      const response = await fetch("/api/enviar-consulta", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          asunto: asunto,
          cuerpo: cuerpo,
          recaptchaToken: turnstileToken, // 🔒 Enviamos el token de seguridad
        }),
      });

      if (response.ok) {
        setShowModal(true); // Abre el Modal de éxito
        form.reset(); // Limpia los campos

        // Reiniciamos el widget de seguridad por si quiere mandar otro mensaje
        turnstileRef.current?.reset();
        setTurnstileToken("");
      } else {
        alert(
          "Hubo un error de seguridad o en el servidor al enviar el mensaje. Por favor, contáctanos por WhatsApp.",
        );
        turnstileRef.current?.reset();
        setTurnstileToken("");
      }
    } catch (error) {
      console.error(error);
      alert("Hubo un problema de conexión. Por favor, inténtalo más tarde.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 w-full relative"
      style={{
        backgroundColor: "#fdfdfd",
        backgroundImage:
          "linear-gradient(0deg, #F0FDFB 0%, #E3FFFB 20%, #E8FFCF 50%, #FDF6CD 100%)",
      }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Contáctenos
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl">
            Estamos listos para atender sus consultas comerciales o técnicas.
            Complete el formulario y nuestro equipo comercial se pondrá en
            contacto a la brevedad.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="backdrop-blur-sm bg-white/60 shadow-xl border-white/40">
            <CardHeader>
              <CardTitle>Formulario de Contacto</CardTitle>
              <CardDescription>
                Todos los campos son obligatorios.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="contact-name"
                      className="text-sm font-medium leading-none"
                    >
                      Nombre Completo
                    </label>
                    <Input
                      id="contact-name"
                      name="name"
                      autoComplete="name"
                      placeholder="Ej: Juan Pérez"
                      required
                      className="bg-white/80"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="contact-company"
                      className="text-sm font-medium leading-none"
                    >
                      Empresa
                    </label>
                    <Input
                      id="contact-company"
                      name="company"
                      autoComplete="organization"
                      placeholder="Ej: Agro S.A."
                      required
                      className="bg-white/80"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="contact-email"
                    className="text-sm font-medium leading-none"
                  >
                    Correo Electrónico
                  </label>
                  <Input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="juan@ejemplo.com"
                    required
                    className="bg-white/80"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="contact-message"
                    className="text-sm font-medium leading-none"
                  >
                    Mensaje
                  </label>
                  <Textarea
                    id="contact-message"
                    name="message"
                    autoComplete="off"
                    placeholder="Escriba su consulta aquí..."
                    className="min-h-[120px] bg-white/80 resize-none"
                    required
                  />
                </div>

                {/* 5. EL WIDGET DE CLOUDFLARE TURNSTILE */}
                <div className="flex justify-center py-2">
                  <Turnstile
                    ref={turnstileRef}
                    siteKey={turnstileSiteKey}
                    onSuccess={(token) => setTurnstileToken(token)}
                    onExpire={() => setTurnstileToken("")}
                    onError={() => setTurnstileToken("")}
                    options={{
                      theme: "light",
                    }}
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <Button
                    type="submit"
                    disabled={isSubmitting || !turnstileToken} // Deshabilita si no hay token
                    className="w-full sm:w-1/2 disabled:opacity-70"
                  >
                    {isSubmitting ? "Enviando..." : "Enviar Correo"}
                  </Button>

                  <Button
                    asChild
                    type="button"
                    className="w-full sm:w-1/2 bg-[#25D366] hover:bg-[#128C7E] text-white shadow-md transition-all hover:scale-105"
                  >
                    <a
                      href="https://wa.me/5493878406666?text=Hola%20Alimentos%20Tropicales,%20me%20gustaría%20hacer%20una%20consulta."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/images/whatsappp.svg"
                        alt="WhatsApp"
                        width={20}
                        height={20}
                        className="mr-2 h-5 w-5"
                      />
                      Enviar WhatsApp
                    </a>
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* MODAL DE ÉXITO */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 relative animate-in zoom-in-95 duration-300">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="flex flex-col items-center text-center space-y-4">
              <div className="h-16 w-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-2">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                ¡Mensaje Enviado!
              </h3>
              <p className="text-gray-600">
                Gracias por escribirnos. Hemos recibido tu mensaje y nuestro
                equipo te responderá pronto.
              </p>
              <Button
                onClick={() => setShowModal(false)}
                className="w-full mt-4 bg-primary text-white"
              >
                Entendido
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
