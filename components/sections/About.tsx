import {
  BookCopy,
  Smile,
  Sprout,
  Handshake,
  TrendingUp,
  BarChartBig,
} from "lucide-react";

// NUESTROS VALORES
const values = [
  {
    icon: BookCopy,
    title: "Formación para el Trabajo",
    description:
      "Confiamos en las personas, su capacidad y deseos de evolucionar. Fomentando el crecimiento personal a través de la Formación para el Trabajo. ",
    color: "text-blue-500 bg-blue-500/20 group-hover:bg-blue-500",
  },
  {
    icon: Smile,
    title: "Satisfacción del cliente",
    description:
      "Sirviendo con calidad, efectividad, excelencia y respeto. Priorizamos la responsabilidad hacia nuestros clientes y colaboradores.",
    color: "text-amber-500 bg-amber-500/20 group-hover:bg-amber-500",
  },
  {
    icon: Sprout,
    title: "Responsabilidad Ambiental",
    description:
      "Cumplimos con la obligación de realizar acciones que protejan y preserven el medio ambiente y el bienestar de nuestra tierra querida.",
    color: "text-emerald-500 bg-emerald-500/20 group-hover:bg-emerald-500",
  },
  {
    icon: Handshake,
    title: "Union, Integridad y Trabajo en Equipo",
    description:
      "Quienes participan, integran y trabajan en equipo son los que hacen posible lograr los objetivos propuestos.",
    color: "text-purple-500 bg-purple-500/20 group-hover:bg-purple-500",
  },
  {
    icon: TrendingUp,
    title: "Cambios y Mejora Continua",
    description:
      "La perseverancia frente al cambio y la mejora continua, gradual y ordenada son fundamentales para lograr resultados positivos.",
    color: "text-green-500 bg-green-500/20 group-hover:bg-green-500",
  },
  {
    icon: BarChartBig,
    title: "Inversión en Crecimiento Empresarial",
    description:
      "Centrando esfuerzos en mejorar la productividad, la creación de nuevas oportunidades y la innovación.",
    color: "text-cyan-500 bg-cyan-500/20 group-hover:bg-cyan-500",
  },
];

export function About() {
  return (
    <section className="py-12 bg-transparent relative z-10" id="about">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-4xl mx-auto mb-16 bg-primary dark:bg-black/50 backdrop-blur-lg p-8 md:p-12 rounded-3xl border border-white/30 shadow-xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4 drop-shadow-sm">
            Nuestros Valores
          </h2>
          <p className="text-foreground/90 font-medium text-white max-w-2xl mx-auto">
            En Alimentos Tropicales Argentinos, nos dedicamos al procesamiento
            responsable de oleaginosas y legumbres. Nuestra identidad se forja
            en seis pilares fundamentales que guían cada decisión y proceso.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((item, index) => (
            <div
              key={index}
              className="group h-64 w-full [perspective:1000px] cursor-pointer"
            >
              <div className="relative h-full w-full rounded-2xl bg-card border border-border/50 shadow-sm transition-all duration-500 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateX(6deg)_rotateY(-8deg)] group-hover:shadow-xl group-hover:border-primary/20">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 p-6 flex flex-col justify-center [transform:translateZ(40px)]">
                  <div
                    className={`h-12 w-12 rounded-lg flex items-center justify-center mb-4 transition-colors group-hover:text-white group-hover:scale-110 duration-300 ${item.color}`}
                  >
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2 drop-shadow-sm">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground font-medium group-hover:text-foreground/80 transition-colors">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
