import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Alimentos Tropicales Argentinos | ALTA SA",
  description:
    "Procesamiento de oleaginosas y legumbres con los más altos estándares de calidad e inocuidad.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        {/* 🚀 CSP INYECTADO DIRECTAMENTE EN EL HTML (Actualizado para el celular) */}
        <meta
          httpEquiv="Content-Security-Policy"
          content="script-src 'self' 'unsafe-inline' 'unsafe-eval' https://challenges.cloudflare.com https://apis.google.com https://www.gstatic.com https://*.firebaseapp.com https://cdnjs.cloudflare.com https://www.google.com https://www.gstatic.com; frame-src 'self' https://challenges.cloudflare.com https://*.firebaseapp.com https://www.google.com; worker-src 'self' blob:; connect-src 'self' https://challenges.cloudflare.com https://*.googleapis.com https://*.firebaseio.com wss://*.firebaseio.com https://www.gstatic.com;"
        />
      </head>
      <body
        className={cn(
          "min-h-screen font-sans antialiased relative",
          inter.variable,
        )}
      >
        <div
          className="fixed inset-0 z-[-1] pointer-events-none bg-center bg-cover bg-no-repeat"
          style={{
            background:
              "linear-gradient(172deg,rgba(148, 187, 233, 1) 10%, rgba(148, 187, 233, 1) 23%, rgba(195, 247, 214, 1) 59%, rgba(176, 224, 176, 1) 95%)",
            filter: "blur(10px) opacity(0.25)",
          }}
        />

        <div className="relative z-0">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
