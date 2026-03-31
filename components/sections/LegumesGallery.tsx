"use client";

import Link from "next/link";
import { productsData } from "@/lib/data/products";

function ProductCard({ item }: { item: typeof productsData[0] }) {
  return (
    <Link 
      href={`/productos/${item.slug}`}
      className="group flex flex-col items-center justify-start gap-3 md:gap-4 p-2 w-full outline-none"
    >
      {/* TAMAÑOS RESPONSIVOS: 
          w-28 h-28 (112px) para móviles.
          md:w-36 md:h-36 (144px) para tablets.
          lg:w-40 lg:h-40 (160px) para monitores grandes.
          
      */}
      <div className="relative w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full overflow-hidden shadow-md border-4 border-white bg-[#dad7cd] shrink-0 mx-auto transition-all duration-500 ease-out group-hover:scale-110 group-hover:shadow-xl group-hover:-translate-y-1">
        
        {/* IMAGEN */}
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover block"
        />
        
      </div>

      {/* TEXTO */}
      <h3 className="text-sm md:text-base font-bold text-[#1f2937] text-center transition-colors group-hover:text-[#3a5a40] line-clamp-2">
        {item.name}
      </h3>
    </Link>
  );
}

export function LegumesGallery() {
  return (
    <section 
      id="Productos" 
      className="py-16 md:py-24 w-full bg-[#fdfdfd] bg-[linear-gradient(0deg,#F0FDFB_0%,#E3FFFB_20%,#E8FFCF_50%,#FDF6CD_100%)] overflow-hidden"
    >
      <div className="container px-4 md:px-6 mx-auto">
        
        <header className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-[#1f2937] mb-4">
            Nuestros Productos
          </h2>
          <div className="w-24 h-1.5 bg-[#3a5a40] mx-auto rounded-full mb-6" />
        </header>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-10 md:gap-8">
          {productsData.map((item) => (
            <ProductCard key={item.slug} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
}