import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";

export function Hero() {
  return (
    <div className="bg-[#FDF4D6]">
      <section className="relative h-[120vh] flex items-center justify-center overflow-hidden rounded-b-[3rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] z-40 bg-zinc-950">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("/images/BG1.webp")' }}
        >
          <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
        </div>

        <div className="container relative z-10 px-4 md:px-6 text-center text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 drop-shadow-md">
            Alimentos Tropicales <br className="hidden md:block" /> Argentinos
          </h1>

          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6 text-gray-100 drop-shadow-sm">
            Procesamos legumbres y oleaginosas con excelencia. Uniendo la
            riqueza de nuestra tierra con los más altos estándares de inocuidad
            y calidad.
          </p>

          <div className="flex justify-center mb-8">
            <Link
              href="/#location"
              className="inline-flex items-center gap-2 text-white/90 hover:text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full transition-all duration-300 border border-white/20 hover:border-white/40 group cursor-pointer pointer-events-auto"
            >
              <MapPin className="h-5 w-5 text-accent animate-bounce" />
              <span className="font-medium tracking-wide">
                Embarcación, Salta, Argentina
              </span>
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pointer-events-auto">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white border-none shadow-lg z-20"
            >
              <Link href="/#order-request">Solicitar Orden</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-white/10 backdrop-blur-sm border-white/50 text-white hover:bg-white/20 border-2 z-20"
            >
              <Link href="/#process" className="flex items-center gap-2">
                Conozca el Proceso <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
