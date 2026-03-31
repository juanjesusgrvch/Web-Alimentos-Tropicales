import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug } from "@/lib/data/products";
import { ArrowLeft } from "lucide-react";

// INTERFACE PARA LOS PARAMS DE LA RUTA DINÁMICA (slug)
interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

const Divider = () => (
  <div className="flex items-center justify-center gap-4 w-full opacity-50 py-4">
    <div className="h-[1px] w-16 md:w-32 bg-slate-300 rounded-full" />
    <div className="w-1.5 h-1.5 rounded-full bg-[#3a5a40]" />
    <div className="h-[1px] w-16 md:w-32 bg-slate-300 rounded-full" />
  </div>
);
// PÁGINA PRINCIPAL DE CADA PRODUCTO: RUTA DINÁMICA [slug]
export default async function ProductPage({ params }: ProductPageProps) {
  const resolvedParams = await params;
  const product = getProductBySlug(resolvedParams.slug);

  if (!product) {
    notFound();
  }
  
   const imageMap: Record<string, string> = {
    "poroto-negro": "/images/productos/NEGRO.webp",
    "poroto-mungo": "/images/productos/mungo.webp",
    "poroto-cranberry": "/images/productos/CRANBERRY.webp",
    "poroto-alubia": "/images/productos/ALUBIA.webp",
    "garbanzo": "/images/productos/GARBANZO.webp",
    "poroto-azuki": "/images/productos/AZUKI.webp",
    "chia": "/images/productos/CHIA.webp",
    "sesamo": "/images/productos/SESAMO.webp",
    "poroto-colorado-drk": "/images/productos/COLORADO_DRK.webp",
    "poroto-colorado-lgt": "/images/productos/COLORADO_LIGHT.webp",
  };

  const productImage = imageMap[resolvedParams.slug] || "/images/productos/ALUBIA.webp";

  const nutritionRows = [
    { label: "Valor Energético", value: product.nutrition?.calories || "341 kcal" },
    { label: "Carbohidratos", value: product.nutrition?.carbs || "62.4 g" },
    { label: "Proteínas", value: product.nutrition?.protein || "21.6 g" },
    { label: "Grasas Totales", value: product.nutrition?.fat || "1.4 g" },
    { label: "Fibra Alimentaria", value: product.nutrition?.fiber || "15.5 g" },
    { label: "Fósforo", value: product.nutrition?.phosphorus || "0.3 g" },
    { label: "Hierro", value: product.nutrition?.iron || "0.0 g" },
    { label: "Calcio", value: product.nutrition?.calcium || "5 mg" },
    { label: "Magnesio", value: product.nutrition?.magnesium || "5.1 mg" },
    { label: "Potasio", value: product.nutrition?.potassium || "113 mg" },
    { label: "Zinc", value: product.nutrition?.zinc || "1483 mg" },
  ];

  return (
    <main className="min-h-screen pt-40 pb-12 bg-[#fafafa]">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">

        <Link href="/#Productos" className="inline-flex items-center text-sm font-bold text-slate-500 hover:text-[#3a5a40] transition-colors mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver a Productos
        </Link>

       {/* COVER / HERO PERFIL */}
        <header 
          className="relative w-full rounded-[2rem] overflow-hidden mb-5 shadow-sm border border-black/5 p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center md:items-center justify-start gap-8 md:gap-20 lg:gap-32"
          style={{
            background: 'linear-gradient(172deg, rgba(148, 187, 233, 0.4) 10%, rgba(195, 247, 214, 0.4) 59%, rgba(224, 176, 207, 0.4) 95%, rgba(238, 174, 202, 0.4) 100%)'
          }}
        >
          {/* Círculo de la Imagen */}
          <div className="relative flex shrink-0 items-center justify-center w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-white shadow-xl bg-white">
             <Image 
                src={productImage} 
                alt={`Imagen de ${product.name}`} 
                width={300} 
                height={300} 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                unoptimized
                priority 
             />
          </div>

          {/*Textos (Título y Especie) */}
          <div className="flex flex-col justify-center text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 tracking-tight uppercase drop-shadow-sm mb-2 md:mb-4">
              {product.name}
            </h1>
            
            {/* Subtítulo para la especie */}
            <p className="text-lg md:text-2xl text-[#3a5a40] font-extrabold tracking-widest uppercase opacity-90">
              {product.species || "Phaseolus vulgaris"}
            </p>
          </div>
        </header>
          {/* 2. CUERPO PRINCIPAL */}
        <div className="flex flex-col gap-12">
        <div className="bg-white rounded-[2rem] shadow-sm border border-slate-100 p-8 md:p-14">
            
            {/* --- SECCIÓN 1: GENERALIDADES --- */}
            <section>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-4 flex items-center gap-3">
                <span className="w-2 h-6 bg-[#3a5a40] rounded-full inline-block" />Generalidades
              </h2>
              <div className="flex flex-col gap-2">
                
                <div className="grid md:grid-cols-[200px_1fr] gap-2 md:gap-8 items-start border-b border-slate-50 pb-4">
                  <h3 className="font-bold text-sm md:text-base text-slate-900 uppercase tracking-wider mt-1">Descripción</h3>
                  <div className="text-base md:text-lg text-slate-600 font-medium leading-relaxed">
                    {product.description || "Descripción detallada de la legumbre seleccionada."}
                  </div>
                </div>
                
                <div className="grid md:grid-cols-[200px_1fr] gap-2 md:gap-8 items-start border-b border-slate-50 pb-4">
                  <h3 className="font-bold text-sm md:text-base text-slate-900 uppercase tracking-wider mt-1">Características</h3>
                  <div className="text-base md:text-lg text-slate-600 font-medium leading-relaxed">
                    {Array.isArray(product.characteristicsText) ? (
                      <ul className="list-none space-y-2">
                        {product.characteristicsText.map((uso, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-[#3a5a40] mr-2 mt-1">•</span> 
                            <span>{uso}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <div>{product.characteristicsText}</div>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-[200px_1fr] gap-2 md:gap-8 items-start border-b border-slate-50 pb-4">
                  <h3 className="font-bold text-sm md:text-base text-slate-900 uppercase tracking-wider mt-1">Conservación</h3>
                  <div className="text-base md:text-lg text-slate-600 font-medium leading-relaxed">
                    {Array.isArray(product.conservation) ? (
                      <ul className="list-none space-y-2">
                        {product.conservation.map((uso, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-[#3a5a40] mr-2 mt-1">•</span> 
                            <span>{uso}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <div>{product.conservation}</div>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-[200px_1fr] gap-2 md:gap-8 items-start border-b border-slate-50 pb-4">
                  <h3 className="font-bold text-sm md:text-base text-slate-900 uppercase tracking-wider mt-1">Vida Útil</h3>
                  <div className="text-base md:text-lg text-slate-600 font-medium leading-relaxed">
                    {Array.isArray(product.shelfLife) ? (
                      <ul className="list-none space-y-2">
                        {product.shelfLife.map((uso, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-[#3a5a40] mr-2 mt-1">•</span> 
                            <span>{uso}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <div>{product.shelfLife}</div>
                    )}
                  </div>
                </div>
              </div>
            </section>

            <Divider />

            {/* --- SECCIÓN 2: DESTINO Y MODO DE USO --- */}
            <section>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-2 flex items-center gap-3">
                <span className="w-2 h-12 bg-[#3a5a40] rounded-full inline-block" />Destino y Modo de Uso
              </h2>
              <div className="flex flex-col gap-4">

                <div className="grid md:grid-cols-[200px_1fr] gap-2 md:gap-8 items-start border-b border-slate-50 pb-4">
                  <h3 className="font-bold text-sm md:text-base text-slate-900 uppercase tracking-wider mt-1">Posibles Usos</h3>
                  <div className="text-base md:text-lg text-slate-600 font-medium leading-relaxed">
                    {Array.isArray(product.possibleUses) ? (
                      <ul className="list-none space-y-2">
                        {product.possibleUses.map((uso, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-[#3a5a40] mr-2 mt-1">•</span> 
                            <span>{uso}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <div>{product.possibleUses}</div>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-[200px_1fr] gap-2 md:gap-8 items-start border-b border-slate-50 pb-4">
                  <h3 className="font-bold text-sm md:text-base text-slate-900 uppercase tracking-wider mt-1">Métodos de Uso</h3>
                  <div className="text-base md:text-lg text-slate-600 font-medium leading-relaxed">
                    {Array.isArray(product.usageModes) ? (
                      <ul className="list-none space-y-2">
                        {product.usageModes.map((uso, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-[#3a5a40] mr-2 mt-1">•</span> 
                            <span>{uso}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <div className="text-slate-600">{product.usageModes}</div>
                    )}
                  </div>
                </div>
              </div>
            </section>

            <Divider />

            {/* --- SECCIÓN 3: CALIDAD --- */}
            <section>
               <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-2 flex items-center gap-3">
                <span className="w-2 h-12 bg-[#3a5a40] rounded-full inline-block" />Calidad
              </h2>
              <div className="flex flex-col gap-6">
                
                <div className="grid md:grid-cols-[200px_1fr] gap-2 md:gap-8 items-start border-b border-slate-50 pb-4">
                  <h3 className="font-bold text-sm md:text-base text-slate-900 uppercase tracking-wider mt-1">Requisitos Generales</h3>
                  <div className="text-base md:text-lg text-slate-600 font-medium leading-relaxed">
                    {Array.isArray(product.generalReqs) ? (
                      <ul className="list-none space-y-2">
                        {product.generalReqs.map((uso, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-[#3a5a40] mr-2 mt-1">•</span> 
                            <span>{uso}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <div className="text-slate-600">{product.generalReqs}</div>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-[200px_1fr] gap-2 md:gap-8 items-start border-b border-slate-50 pb-4">
                  <h3 className="font-bold text-sm md:text-base text-slate-900 uppercase tracking-wider mt-1">Requisitos Específicos</h3>
                  <div className="text-base md:text-lg text-slate-600 font-medium leading-relaxed">
                    {Array.isArray(product.specificReqs) ? (
                      <ul className="list-none space-y-2">
                        {product.specificReqs.map((uso, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-[#3a5a40] mr-2 mt-1">•</span> 
                            <span>{uso}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <div>{product.specificReqs}</div>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-[200px_1fr] gap-2 md:gap-4 items-start">
                  <h3 className="font-bold text-sm md:text-base text-slate-900 uppercase tracking-wider mt-2">Tamaño</h3>
                  <div className="text-base md:text-lg text-slate-600 font-medium leading-relaxed">
                    {product.size || "Calibre homogéneo (mm) según lote de exportación."}
                  </div>
                </div>

              </div>
            </section>
          </div>

          {/* --- SECCIÓN 4: EMPAQUE Y PRESENTACIÓN (Tu código original integrado estéticamente) --- */}
          <section className="rounded-[2rem] overflow-hidden shadow-sm border border-black/5">
            <div
              className="w-full py-16"
              style={{
                backgroundColor: '#E3FFFB',
                backgroundImage: 'linear-gradient(0deg, #FFFFFF 0%, #E3FFFB 7%, #E8FFCF 47%, #F7EFBC 92%, #FDF4D6 100%)'
              }}
            >
              <div className="px-4">
                <h3 className="text-center text-xl md:text-2xl text-[#3a5a40] font-extrabold tracking-[0.15em] uppercase mb-12">
                  4. Nuestras Presentaciones
                </h3>

               <div className="flex flex-wrap justify-center items-end gap-8 md:gap-16 lg:gap-24">
                  
                  {/* Bolsa 25kg */}
                  <div tabIndex={0} className="flex flex-col items-center group cursor-pointer touch-manipulation outline-none">
                    <div className="w-32 h-44 md:w-40 md:h-52 pt-8 pb-2 mb-2">
                      <img 
                        src="/images/25KG.webp" 
                        alt="Bolsa 25kg" 
                        className="w-full h-full object-contain object-bottom origin-bottom transition-transform duration-500 ease-out group-hover:scale-110 group-hover:[filter:drop-shadow(0_0_15px_#fff)_drop-shadow(0_0_30px_#a3c4a8)]" 
                      />
                    </div>
                    <span className="text-slate-800 font-extrabold text-base md:text-xl tracking-wider transition-colors group-hover:text-[#3a5a40]">BOLSA</span>
                    <span className="text-slate-600 text-sm md:text-base font-bold mt-1 text-center">25 kg</span>
                  </div>

                  {/* Bolsa 50kg */}
                  <div tabIndex={0} className="flex flex-col items-center group cursor-pointer touch-manipulation outline-none">
                    <div className="w-32 h-36 md:w-40 md:h-48 pt-8 pb-2 mb-2">
                      <img 
                        src="/images/50KG.webp" 
                        alt="Bolsa 50kg" 
                        className="w-full h-full object-contain object-bottom origin-bottom transition-transform duration-500 ease-out group-hover:scale-110 group-hover:[filter:drop-shadow(0_0_15px_#fff)_drop-shadow(0_0_30px_#a3c4a8)]" 
                      />
                    </div>
                    <span className="text-slate-800 font-extrabold text-base md:text-xl tracking-wider transition-colors group-hover:text-[#3a5a40]">BOLSA</span>
                    <span className="text-slate-600 text-sm md:text-base font-bold mt-1 text-center">50 kg</span>
                  </div>

                  {/* Bolsones 1000kg */}
                  <div tabIndex={0} className="flex flex-col items-center group cursor-pointer touch-manipulation outline-none">
                    <div className="w-40 h-36 md:w-56 md:h-48 pt-8 pb-2 mb-2">
                      <img 
                        src="/images/1000KG.webp" 
                        alt="Bolsones" 
                        className="w-full h-full object-contain object-bottom origin-bottom transition-transform duration-500 ease-out group-hover:scale-110 group-hover:[filter:drop-shadow(0_0_15px_#fff)_drop-shadow(0_0_30px_#a3c4a8)]" 
                      />
                    </div>
                    <span className="text-slate-800 font-extrabold text-base md:text-xl tracking-wider transition-colors group-hover:text-[#3a5a40]">BOLSONES</span>
                    <span className="text-slate-600 text-sm md:text-base font-bold mt-1 text-center whitespace-nowrap">1.000 a 1.200 kg</span>
                  </div>
                  
                </div>
              </div>
            </div>
          </section>

            {/* --- SECCIÓN 5: TABLA DE VALORES NUTRICIONALES --- */}
          <section className="bg-white rounded-[2rem] shadow-sm border border-slate-100 p-8 md:p-12 lg:p-14 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#3a5a40] to-[#a3c4a8]" />

            {/* ENCABEZADO */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 border-b-2 border-slate-800 pb-6 mb-4">
              <h2 className="text-2xl md:text-4xl font-bold text-slate-900 tracking-tight uppercase">
                Valores Nutricionales
              </h2>
              <p className="text-xs md:text-sm text-slate-500 font-bold md:text-right max-w-sm uppercase tracking-wider">
                Porción de 100gr de producto crudo
              </p>
            </div>

            {/* CUERPO DE DATOS */}
            <div className="flex flex-col">
              {nutritionRows.map((row, index) => (
                <div 
                  key={index} 
                  className={`group flex justify-between items-center transition-all duration-300 hover:bg-[#3a5a40]/5 -mx-4 px-4 rounded-xl cursor-default
                    ${index === 0 
                      ? 'py-6 border-b-4 border-slate-800 mb-2'
                      : 'py-3 md:py-4 border-b border-dashed border-slate-200'
                    }
                  `}
                >
                  {/* Etiqueta (Izquierda) */}
                  <span className={`transition-colors duration-300 group-hover:text-[#3a5a40]
                    ${index === 0 
                      ? 'font-black text-slate-900 text-lg md:text-xl uppercase tracking-widest' 
                      : 'font-bold text-slate-600 text-sm md:text-base'
                    }
                  `}>
                    {row.label}
                  </span>
                  
                  {/* Valor (Derecha) */}
                  <span className={`transition-colors duration-300 group-hover:text-[#3a5a40] tabular-nums
                    ${index === 0 
                      ? 'font-black text-slate-900 text-xl md:text-2xl' 
                      : 'font-extrabold text-slate-800 text-sm md:text-base'
                    }
                  `}>
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
            
          </section>

        </div>
      </div>
    </main>
  );
}