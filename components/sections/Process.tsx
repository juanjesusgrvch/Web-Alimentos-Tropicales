"use client"

import { useState, useRef, useEffect } from "react"
import {
    Factory, ClipboardCheck, Wind, Layers, Waves, Sparkles, ScanEye, ShieldCheck, Warehouse,
    Package,
    X,
    ArrowLeftRight
} from 'lucide-react';
import { motion, useMotionValue } from "framer-motion"
// PROCESOS
const processes = [
    {
        icon: Factory,
        title: "Tecnología y ALTA Calidad en Cada Etapa",
        desc: "Procesamos legumbres y semillas mediante un sistema integral que combina tecnología avanzada, control permanente y trazabilidad completa. Cada etapa está diseñada para garantizar un producto seguro, homogéneo y de alta calidad, cumpliendo con los estándares del mercado nacional e internacional.",
        img: "/images/process/process0.webp",
        color: "from-primary"
    },
    {
        icon: ClipboardCheck,
        title: "1. Recepción y Control Inicial",
        desc: "El proceso comienza con la recepción de la mercadería, donde cada lote es identificado y registrado para asegurar su trazabilidad desde el origen. \n • Descarga monitoreada \n • Control inicial de calidad \n • Identificación y seguimiento del producto.",
        img: "/images/process/process01.webp",
        color: "from-slate-500"
    },
    {
        icon: Wind,
        title: "2. Limpieza Profunda",
        desc: "Las legumbres y semillas pasan por una prelimpieza y una limpieza profunda destinada a eliminar impurezas y materiales extraños, protegiendo tanto el producto como el proceso posterior. Se eliminan: \n • Polvo y tierra \n • Piedras y materiales pesados \n • Restos vegetales y partículas metálicas",
        img: "/images/process/process02.webp",
        color: "from-sky-500"
    },
    {
        icon: Layers,
        title: "3. Clasificación y Selección",
        desc: "Mediante equipos especializados, el producto se clasifica cuidadosamente para lograr una Uniformidad Total y adaptarse a los requerimientos técnicos y comerciales específicos de cada cliente.",
        img: "/images/process/process03.webp",
        color: "from-amber-500"
    },
    {
        icon: Waves,
        title: "4. Selección por Densidad",
        desc: "Utilizamos sistemas vibratorios para la separación por peso específico. Este método permite descartar granos vanos o dañados y homogeneizar el lote, garantizando que solo las semillas con la densidad y calidad adecuada avancen en el proceso.",
        img: "/images/process/process04.webp",
        color: "from-orange-500"
    },
    {
        icon: Sparkles,
        title: "5. Lustrado",
        desc: "El producto atraviesa sistemas de vibrado y lustrado diseñados para mejorar su limpieza superficial y presentación estética. Este tratamiento resalta las características naturales del grano, logrando una terminación óptima y brillante que destaca en el mercado internacional.",
        img: "/images/process/process05.webp",
        color: "from-yellow-500"
    },
    {
        icon: ScanEye,
        title: "6. Selección Electrónica Óptica",
        desc: "Implementamos tecnología de selección por color y forma para detectar y retirar granos defectuosos o fuera de estándar. Este sistema de alta precisión garantiza un producto final visualmente perfecto, uniforme y confiable, cumpliendo con las normas de calidad más exigentes.",
        img: "/images/process/process06.webp",
        color: "from-indigo-500"
    },
    {
        icon: ShieldCheck,
        title: "7. Control de Metales y Seguridad",
        desc: "La seguridad es nuestra prioridad. Contamos con equipos de detección magnética y tecnología avanzada para separar partículas ferrosas y terrones. Todo el producto final es inspeccionado con un detector de metales antes, durante y posterior a su acondicionamiento, asegurando un consumo 100% seguro.",
        img: "/images/process/process07.webp",
        color: "from-red-500"
    },
    {
        icon: Warehouse,
        title: "8. Almacenamiento Controlado",
        desc: "Preservamos la calidad bajo condiciones monitoreadas de humedad y temperatura. Contamos con un Plan Integral de Plagas e inspecciones periódicas que aseguran la frescura del producto hasta el despacho, manteniendo intactas sus propiedades organolépticas y nutricionales.",
        img: "/images/process/process08.webp",
        color: "from-emerald-500"
    },
    {
        icon: Package,
        title: "9. Envasado y Despacho",
        desc: "Acondicionamos el producto según las necesidades comerciales de cada cliente, manteniendo la trazabilidad del lote. Ofrecemos presentaciones versátiles listas para su distrubición globlal y facilitar la logística.",
        img: "/images/process/process09.webp",
        color: "from-brown-500"
    },
]
// FUNCION PRINCIPAL
export function Process() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const scrollTrackRef = useRef<HTMLDivElement>(null);
    const [scrollWidth, setScrollWidth] = useState(0);
    const [trackWidth, setTrackWidth] = useState(0);

    const [isDragging, setIsDragging] = useState(false);
    const isDraggingRef = useRef(false);

    const x = useMotionValue(0);

    useEffect(() => {
        const updateDimensions = () => {
            if (scrollContainerRef.current && scrollTrackRef.current) {
                setScrollWidth(Math.max(0, scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth));
                setTrackWidth(Math.max(0, scrollTrackRef.current.clientWidth - 48));            }
        };

        updateDimensions();
        setTimeout(updateDimensions, 200);
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    const handleDrag = () => {
        if (scrollContainerRef.current && trackWidth > 0) {
            const progress = Math.max(0, Math.min(1, x.get() / trackWidth));

            if (scrollWidth > 0) {
                scrollContainerRef.current.scrollLeft = progress * scrollWidth;
            }

            const currentCardIndex = Math.round(progress * (processes.length - 1));
            if (activeIndex !== currentCardIndex) {
                setActiveIndex(currentCardIndex);
            }
        }
    };

    const handleScroll = () => {
        if (scrollContainerRef.current && trackWidth > 0 && scrollWidth > 0 && !isDraggingRef.current) {
            const progress = scrollContainerRef.current.scrollLeft / scrollWidth;
            x.set(progress * trackWidth);
        }
    };

    return (
        <section id="process" className="relative z-10 overflow-hidden flex flex-col justify-between min-h-screen pt-10">
            <div className="flex-grow">
                <div className="container px-4 md:px-6 mx-auto mb-12">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary mb-6 drop-shadow-lg">
                            Nuestro Proceso Productivo
                        </h2>
                    </div>
                </div>

                {/* Contenedor de Galería */}
                <div
                    ref={scrollContainerRef}
                    onScroll={handleScroll}
                    className={`w-full flex overflow-x-auto gap-6 px-4 md:px-12 pb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] ${isDragging ? '' : 'snap-x snap-mandatory'}`}
                >
                    {processes.map((proc, index) => {
                        const isActive = activeIndex === index;

                        return (
                            <div
                                key={index}
                                onClick={() => setActiveIndex(isActive ? null : index)}
                                className="relative w-[85vw] md:w-[350px] h-[450px] shrink-0 snap-center rounded-[2.5rem] overflow-hidden cursor-pointer group shadow-2xl transition-all duration-500 border border-white/10 hover:border-white/30"
                            >
                                <div
                                    className={`absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out ${isActive ? 'scale-110' : 'group-hover:scale-105'}`}
                                    style={{ backgroundImage: `url(${proc.img}), linear-gradient(to bottom, rgb(3, 51, 14), #5a5a5aff)` }}
                                />

                                <div
                                    className={`absolute inset-0 flex flex-col justify-end p-8 transition-opacity duration-500 bg-gradient-to-t from-black/90 via-black/40 to-transparent ${isActive ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`p-3 rounded-xl bg-gradient-to-br ${proc.color} to-black/50 backdrop-blur-sm border border-white/20 shadow-lg`}>
                                            <proc.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white tracking-wide">{proc.title}</h3>
                                    </div>
                                </div>
                                <div
                                    className={`absolute inset-0 bg-black/80 backdrop-blur-xl p-6 md:p-8 flex flex-col justify-center transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
                                >
                                    <button
                                        onClick={(e) => { e.stopPropagation(); setActiveIndex(null); }}
                                        className="absolute top-4 right-4 md:top-6 md:right-6 text-white/50 hover:text-white transition-colors z-10 p-2"
                                        aria-label="Cerrar detalles"
                                    >
                                        <X className="w-6 h-6" />
                                    </button>

                                    <div className="overflow-y-auto pt-6 md:pt-4 pr-2 pb-2 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/20 [&::-webkit-scrollbar-thumb]:rounded-full flex-1 flex flex-col justify-center">

                                        <div className="mb-4">
                                            <h3 className="text-xl md:text-2xl font-bold text-white drop-shadow-md leading-tight mb-2">
                                                {proc.title}
                                            </h3>
                                            <div className={`h-1 w-12 rounded-full bg-gradient-to-r ${proc.color} to-transparent opacity-80`}></div>
                                        </div>

                                        <p className="text-gray-200 text-sm md:text-base leading-relaxed font-medium whitespace-pre-line">
                                            {proc.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    <div className="w-[1px] shrink-0" />
                </div>

                {/*  Scrollbar */}
                <div className="container mx-auto px-4 mt-4 flex flex-col items-center pb-12">
                    <div
                        ref={scrollTrackRef}
                        className="relative w-full max-w-md h-2 bg-primary/20 rounded-full overflow-visible shadow-inner mb-6"
                    >
                        <motion.div
                            drag="x"
                            dragConstraints={{ left: 0, right: trackWidth }}
                            dragElastic={0}
                            dragMomentum={false}
                            style={{ x }}
                            onDragStart={() => {
                                isDraggingRef.current = true;
                                setIsDragging(true);
                            }}
                            onDragEnd={() => {
                                isDraggingRef.current = false;
                                setIsDragging(false);
                            }}
                            onDrag={handleDrag}
                            className="absolute top-1/2 -translate-y-1/2 left-0 w-12 h-8 rounded-full bg-primary shadow-md cursor-grab active:cursor-grabbing border-2 border-white z-20 flex items-center justify-center transition-transform hover:scale-110 active:scale-95"
                        >
                        <ArrowLeftRight className="w-5 h-5 text-white drop-shadow-sm" />
                        </motion.div>
                    </div>
                    
                    <p className="text-slate-500 text-sm font-medium text-center max-w-md px-4">
                        Deslice para explorar cada etapa. Use la barra para navegar y descubrir los Procesos dentro de Nuestra Empresa.
                    </p>
                </div>
            </div>

            {/* PRESENTACIONES Y CERTIFICACIONES */}
            <div
                className="w-full py-10 mt-6 border-t border-white/40 shadow-inner"
                style={{
                    backgroundColor: '#E3FFFB',
                    backgroundImage: 'linear-gradient(0deg, #FFFFFF 0%, #E3FFFB 7%, #E8FFCF 47%, #F7EFBC 92%, #FDF4D6 100%)'
                }}
            >
                <div className="container mx-auto px-4">

                    {/* --- 1. PRESENTACIONES --- */}
                    <div className="mb-10">
                        <h3 className="text-center text-lg md:text-2xl text-primary font-extrabold tracking-[0.15em] uppercase mb-8">
                            Nuestras Presentaciones
                        </h3>

                        <div className="flex flex-wrap justify-center items-end gap-12 md:gap-24">

                            {/* Bolsa 25kg */}
                            <div tabIndex={0} className="flex flex-col items-center group cursor-pointer touch-manipulation outline-none">
                                <div className="relative p-6">
                                    <img
                                        src="/images/25KG.webp"
                                        alt="Bolsa 25kg"
                                        className="h-24 md:h-32 object-contain transition-all duration-500 ease-out 
                                        scale-100 group-hover:scale-110 group-focus:scale-110 group-active:scale-110"
                                        style={{ filter: 'drop-shadow(0 0 0px rgba(255,255,255,0))' }}
                                        onMouseEnter={(e) => e.currentTarget.style.filter = 'drop-shadow(0 0 15px #fff) drop-shadow(0 0 30px #f3a7a7)'}
                                        onMouseLeave={(e) => e.currentTarget.style.filter = 'drop-shadow(0 0 0px rgba(255,255,255,0))'}
                                    />
                                </div>
                                <span className="text-slate-800 font-extrabold text-base md:text-xl tracking-wider transition-colors group-hover:text-primary group-focus:text-primary">BOLSA</span>
                                <span className="text-slate-600 text-sm md:text-base font-medium">25 kg</span>
                            </div>

                            {/* Bolsa 50kg */}
                            <div tabIndex={0} className="flex flex-col items-center group cursor-pointer touch-manipulation outline-none">
                                <div className="relative p-6">
                                    <img
                                        src="/images/50KG.webp"
                                        alt="Bolsa 50kg"
                                        className="h-28 md:h-40 object-contain transition-all duration-500 ease-out 
                                        scale-100 group-hover:scale-110 group-focus:scale-110 group-active:scale-110"
                                        onMouseEnter={(e) => e.currentTarget.style.filter = 'drop-shadow(0 0 15px #fff) drop-shadow(0 0 30px #f3a7a7)'}
                                        onMouseLeave={(e) => e.currentTarget.style.filter = 'drop-shadow(0 0 0px rgba(255,255,255,0))'}
                                    />
                                </div>
                                <span className="text-slate-800 font-extrabold text-base md:text-xl tracking-wider transition-colors group-hover:text-primary group-focus:text-primary">BOLSA</span>
                                <span className="text-slate-600 text-sm md:text-base font-medium">50 kg</span>
                            </div>

                            {/* Bolsones */}
                            <div tabIndex={0} className="flex flex-col items-center group cursor-pointer touch-manipulation outline-none">
                                <div className="relative p-6">
                                    <img
                                        src="/images/1000KG.webp"
                                        alt="Bolsones"
                                        className="h-32 md:h-48 object-contain transition-all duration-500 ease-out 
                                        scale-100 group-hover:scale-110 group-focus:scale-110 group-active:scale-110"
                                        onMouseEnter={(e) => e.currentTarget.style.filter = 'drop-shadow(0 0 15px #fff) drop-shadow(0 0 30px #f3a7a7)'}
                                        onMouseLeave={(e) => e.currentTarget.style.filter = 'drop-shadow(0 0 0px rgba(255,255,255,0))'}
                                    />
                                </div>
                                <span className="text-slate-800 font-extrabold text-base md:text-xl tracking-wider transition-colors group-hover:text-primary group-focus:text-primary">BOLSONES</span>
                                <span className="text-slate-600 text-sm md:text-base font-medium">1.000 a 1.200 kg</span>
                            </div>
                        </div>
                    </div>

                    <div className="w-2/3 md:w-1/3 mx-auto h-[1px] bg-primary/20 mb-10 rounded-full"></div>

                    {/* --- 2. CERTIFICACIONES --- */}
                    <div>
                        <h3 className="text-center text-lg md:text-2xl text-primary font-extrabold tracking-[0.15em] uppercase mb-8">
                            Certificaciones de Calidad e Inocuidad
                        </h3>

                        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">

                            {/* Certificación BPM */}
                            <div tabIndex={0} className="relative group cursor-pointer touch-manipulation outline-none p-4">
                                <img
                                    src="/images/BPM.webp"
                                    alt="Certificación BPM"
                                    className="h-28 w-28 md:h-40 md:w-40 object-contain transition-all duration-500 ease-out 
                                    scale-100 group-hover:scale-110 group-focus:scale-110 group-active:scale-110"
                                    onMouseEnter={(e) => e.currentTarget.style.filter = 'drop-shadow(0 0 20px #fbbf24)'}
                                    onMouseLeave={(e) => e.currentTarget.style.filter = 'drop-shadow(0 0 0px rgba(250,191,36,0))'}
                                />
                            </div>

                            {/* Certificación HACCP */}
                            <div tabIndex={0} className="relative group cursor-pointer touch-manipulation outline-none p-4">
                                <img
                                    src="/images/HACCP.webp"
                                    alt="Certificación HACCP"
                                    className="h-28 w-28 md:h-40 md:w-40 object-contain transition-all duration-500 ease-out 
                                    scale-100 group-hover:scale-110 group-focus:scale-110 group-active:scale-110"
                                    onMouseEnter={(e) => e.currentTarget.style.filter = 'drop-shadow(0 0 40px #fbbf24)'}
                                    onMouseLeave={(e) => e.currentTarget.style.filter = 'drop-shadow(0 0 0px rgba(250,191,36,0))'}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       </section>
    )
}