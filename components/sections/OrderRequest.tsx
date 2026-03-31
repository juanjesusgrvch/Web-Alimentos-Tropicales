"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Button } from "@/components/ui/button";
import {
  FileText,
  Truck,
  ShieldCheck,
  Loader2,
  X,
  AlertCircle,
} from "lucide-react";
import { Turnstile } from "@marsidev/react-turnstile";

// 🚀 Opciones Inmutables (Fuera del componente para máxima estabilidad)
const turnstileOptions = {
  theme: "light" as const,
  size: "normal" as const,
};

// --- UI DEL MODAL AUTÓNOMO ---
// Ahora el modal controla su propio ciclo de vida y su propia validación.
function SeguridadModalUI({
  targetUrl,
  onClose,
}: {
  targetUrl: string;
  onClose: () => void;
}) {
  const [status, setStatus] = useState<"verifying" | "success" | "error">(
    "verifying",
  );
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    // Timeout de seguridad: Si Cloudflare no responde en 10s, mostramos error
    timeoutRef.current = setTimeout(() => {
      setStatus("error");
    }, 10000);

    return () => {
      document.body.style.overflow = "unset";
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleSuccess = (token: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    if (token) {
      setStatus("success");
      // Damos 800ms para que el usuario vea el escudo verde de éxito
      setTimeout(() => {
        window.location.href = targetUrl;
      }, 800);
    }
  };

  const handleError = (error?: any) => {
    const errorMsg = String(error);
    // Ignoramos el falso positivo del primer desmontaje de React Strict Mode
    if (errorMsg.includes("600010")) return;

    console.error("Turnstile falló:", errorMsg);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setStatus("error");
  };

  return (
    <div
      className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center animate-in fade-in duration-200 shadow-2xl overflow-y-auto pt-10 pb-10"
      style={{ zIndex: 100000 }}
    >
      <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-sm w-full mx-4 text-center transform animate-in zoom-in-95 duration-200 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        <div
          className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-6 ${status === "error" ? "bg-red-50" : "bg-green-50"}`}
        >
          {status === "error" ? (
            <AlertCircle className="h-8 w-8 text-red-600" />
          ) : status === "verifying" ? (
            <Loader2 className="h-8 w-8 text-green-600 animate-spin" />
          ) : (
            <ShieldCheck className="h-8 w-8 text-green-600" />
          )}
        </div>

        <h3 className="text-xl font-bold text-slate-800 mb-2">
          {status === "error"
            ? "Error de Conexión"
            : status === "verifying"
              ? "Verificando Seguridad"
              : "¡Entorno Seguro!"}
        </h3>

        <p className="text-slate-500 text-sm mb-6">
          {status === "error"
            ? "No pudimos validar tu conexión segura. Por favor, inténtalo de nuevo."
            : status === "verifying"
              ? "Cloudflare está comprobando tu navegador..."
              : "Redirigiendo a la plataforma..."}
        </p>

        {status === "error" && (
          <Button
            onClick={onClose}
            className="w-full bg-slate-800 hover:bg-slate-700 text-white"
          >
            Cerrar y Reintentar
          </Button>
        )}

        {/* 🛡️ WIDGET NATIVO PREMIUM */}
        {status === "verifying" && (
          <div className="flex flex-col items-center mt-6 animate-in slide-in-from-bottom-2 duration-300">
            <div className="p-1.5 bg-slate-50/50 border border-slate-200 rounded-[1rem] shadow-sm inline-block ring-1 ring-slate-900/5 transition-all">
              <Turnstile
                // ¡ATENCIÓN A CONTINUACIÓN!
                // Vuelve a poner tu llave real (process.env...) o usa la de prueba si sigues en local
                siteKey={
                  process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ||
                  "0x4AAAAAACyJhxAdaIE03gSM"
                }
                onSuccess={handleSuccess}
                onError={handleError}
                options={{
                  theme: "light",
                  size: "normal", // Lo mantenemos visible porque mejora la percepción de seguridad
                }}
              />
            </div>
            <p className="text-[10px] text-slate-400 mt-3 flex items-center gap-1 font-medium tracking-wide">
              PROTEGIDO POR CLOUDFLARE
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
// --- SECCIÓN PRINCIPAL (Extremadamente limpia) ---
export function OrderRequest() {
  const [modalState, setModalState] = useState({
    isOpen: false,
    targetUrl: "",
  });

  return (
    <section id="order-request" className="py-12 relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-white/40 backdrop-blur-md rounded-3xl py-16 px-8 md:py-24 border border-white/20 shadow-lg flex flex-col justify-center min-h-[400px]">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary tracking-tight">
            SOLICITAR ORDEN
          </h2>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center max-w-4xl mx-auto">
            <Button
              onClick={() =>
                setModalState({
                  isOpen: true,
                  targetUrl: "/solicitar-Descarga",
                })
              }
              className="w-full md:w-[320px] h-[140px] text-lg flex flex-col items-center justify-center gap-4 bg-primary hover:bg-primary/90 shadow-lg transition-all hover:scale-105 text-white cursor-pointer"
            >
              <div className="flex flex-col items-center gap-3">
                <Truck className="h-10 w-10" />
                <span>Solicitud de Descarga</span>
              </div>
            </Button>

            <Button
              onClick={() =>
                setModalState({
                  isOpen: true,
                  targetUrl: "/solicitar-carga.html",
                })
              }
              variant="secondary"
              className="w-full md:w-[320px] h-[140px] text-lg flex flex-col items-center justify-center gap-4 bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-lg transition-all hover:scale-105 border border-primary/10 cursor-pointer"
            >
              <div className="flex flex-col items-center gap-3">
                <FileText className="h-10 w-10" />
                <span>Solicitar Orden de Carga</span>
              </div>
            </Button>
          </div>
        </div>
      </div>

      {/* PORTAL DEL MODAL */}
      {modalState.isOpen &&
        typeof document !== "undefined" &&
        createPortal(
          <SeguridadModalUI
            targetUrl={modalState.targetUrl}
            onClose={() => setModalState({ isOpen: false, targetUrl: "" })}
          />,
          document.body,
        )}
    </section>
  );
}
