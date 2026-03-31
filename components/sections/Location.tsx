"use client";
import { MapPin, Clock, Mail, Phone } from "lucide-react";
export function Location() {
  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      "Consulta - Alimentos Tropicales Argentinos",
    );
    window.location.href = `mailto:gerencialaloma@gmail.com?subject=${subject}`;
  };

  return (
    <section
      id="location"
      className="py-20 bg-muted/20 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* MAPA INTERACTIVO */}
          <div className="order-2 lg:order-1 h-[450px] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/50 relative group">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.450045037129!2d-64.1154233!3d-23.226704699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x940fe5cb218942d9%3A0x6332d72821e8d044!2sALTA%20S.A.!5e0!3m2!1ses-419!2sar!4v1771009584352!5m2!1ses-419!2sar"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Planta"
              className="grayscale-[0.2] contrast-[1.1] transition-all duration-700 group-hover:grayscale-0"
            ></iframe>
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-bold tracking-wider uppercase">
              Ubicación Estratégica
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl drop-shadow-sm">
              Nuestra Planta Industrial
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Situados en el corazón del Norte Argentino (Salta), contamos con
              acceso directo a las principales rutas de producción, optimizando
              la logística y garantizando la frescura de nuestra materia prima.
            </p>

            <div className="space-y-6 pt-4">
              <div className="flex items-start gap-4 group">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-[0_0_15px_rgba(34,193,195,0.4)]">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-800">
                    Dirección Planta
                  </h3>
                  <p className="text-muted-foreground leading-snug">
                    Ruta Nacional N°34, Km 1344
                    <br />
                    Embarcación, Salta, Argentina
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="w-full">
                  <h3 className="font-semibold text-lg mb-3">
                    Horarios de Carga
                  </h3>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-3 bg-white/50 backdrop-blur-sm border border-black/5 p-4 rounded-xl w-full">
                    <div className="font-bold text-xs md:text-sm text-foreground uppercase tracking-wide border-b border-black/5 pb-2">
                      Lunes a Viernes
                    </div>
                    <div className="font-bold text-xs md:text-sm text-foreground uppercase tracking-wide border-b border-black/5 pb-2">
                      Sábados
                    </div>

                    {/* Fila 1: Turno 1 */}
                    <div className="text-muted-foreground text-sm font-medium flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                      08:00 - 12:00 hs
                    </div>
                    <div className="text-muted-foreground text-sm font-medium flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                      08:00 - 12:00 hs
                    </div>

                    {/* Fila 2: Turno 2 */}
                    <div className="text-muted-foreground text-sm font-medium flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/70"></div>
                      14:00 - 20:00 hs
                    </div>
                    <div className="text-muted-foreground text-sm font-medium flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/70"></div>
                      14:00 - 19:00 hs
                    </div>
                  </div>
                  {/* --- CONTACTO DIRECTO (Teléfono y Correo) --- */}
                  <div className="flex flex-col sm:flex-row gap-8 mt-8 pt-8 border-t border-black/10">
                    <a
                      href="tel:+5493878406666"
                      className="flex items-start gap-3 group cursor-pointer touch-manipulation"
                    >
                      <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <Phone className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                          Teléfono
                        </h4>
                        <p className="text-sm text-gray-600 mt-1">
                          +54 9 3878 40-6666
                        </p>
                      </div>
                    </a>

                    <button
                      onClick={handleEmailClick}
                      className="flex items-start text-left gap-3 group cursor-pointer touch-manipulation outline-none"
                    >
                      <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <Mail className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                          Correo Electrónico
                        </h4>
                        <p className="text-sm text-gray-600 mt-1 break-all">
                          gerencialaloma@gmail.com
                        </p>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
