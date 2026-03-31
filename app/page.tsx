import { Hero } from "@/components/sections/Hero";
import { OrderRequest } from "@/components/sections/OrderRequest";
import { About } from "@/components/sections/About";
import { Process } from "@/components/sections/Process";
import { LegumesGallery } from "@/components/sections/LegumesGallery";
import { BlogGrid } from "@/components/sections/BlogGrid";
import { Location } from "@/components/sections/Location";
import { Contact } from "@/components/sections/Contact";
// COMPONENTES 
export default function Home() {
  return (
<main className="w-full flex min-h-screen flex-col overflow-hidden">      
      <Hero />
      <OrderRequest />
      <About />
      <Process />
      <LegumesGallery />
      <BlogGrid />
      <Location />
      <Contact />
    </main>
  );
}