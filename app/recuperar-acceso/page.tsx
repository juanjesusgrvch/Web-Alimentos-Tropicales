"use client";

import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";

import { auth } from "@/lib/firebase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function RecuperarAccesoPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [mensaje, setMensaje] = useState("");

  const handleRecuperar = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setMensaje("Por favor, ingresa tu correo electronico.");
      return;
    }

    setLoading(true);
    setMensaje("");

    try {
      await sendPasswordResetEmail(auth, email);
      setMensaje(
        "Si el correo existe en el sistema, recibiras un enlace para restablecer tu contrasena.",
      );
      setEmail("");
    } catch (error) {
      console.error("Error al enviar recuperacion:", error);
      setMensaje(
        "Si el correo existe en el sistema, recibiras un enlace para restablecer tu contrasena.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">
          Recuperar Acceso
        </h2>

        <form onSubmit={handleRecuperar} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Correo del Operador
            </label>
            <Input
              id="email"
              type="email"
              placeholder="operador@ejemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700"
            disabled={loading}
          >
            {loading ? "Enviando..." : "Enviar enlace de recuperacion"}
          </Button>

          {mensaje && (
            <div className="mt-4 rounded bg-blue-50 p-3 text-center text-sm text-blue-800">
              {mensaje}
            </div>
          )}
        </form>

        <div className="mt-6 text-center">
          <a href="/admin" className="text-sm text-green-600 hover:underline">
            Volver al inicio de sesion
          </a>
        </div>
      </div>
    </div>
  );
}
