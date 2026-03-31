"use client";

import { useEffect, useState, useRef } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  imageUrl: string;
}

export function BlogGrid() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Carga de posts desde Firebase Firestore
    const fetchPosts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "posts"));
        const fetchedPosts = querySnapshot.docs.map(
          (doc) => ({ id: doc.id, ...doc.data() }) as BlogPost,
        );

        if (fetchedPosts.length > 0) {
          fetchedPosts.sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
          );
          setPosts(fetchedPosts);
        }
      } catch (error) {
        console.error("Error al obtener las noticias de Firebase:", error);
      }
    };

    fetchPosts();
  }, []);
  // MOTOR DEL CARRUSEL AUTOMÁTICO
  useEffect(() => {
    if (isHovered || posts.length === 0) return;

    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } =
          scrollContainerRef.current;

        if (scrollLeft + clientWidth >= scrollWidth - 20) {
          scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollContainerRef.current.scrollBy({
            left: 350,
            behavior: "smooth",
          });
        }
      }
    }, 2000); // Avanza cada 4 segundos

    return () => clearInterval(interval);
  }, [isHovered, posts.length]);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -350 : 350;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  if (posts.length === 0) return null;

  const carouselPosts = [...posts, ...posts, ...posts];

  return (
    <section id="blog" className="py-24 bg-transparent overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto mb-12">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl mb-4">
            Novedades
          </h2>
          <p className="text-muted-foreground text-lg">
            Últimas noticias y actualizaciones de nuestra empresa.
          </p>
        </div>
      </div>

      <div
        className="relative w-full max-w-[1600px] mx-auto group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-primary text-white p-3 rounded-full backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 transform shadow-lg"
          aria-label="Noticias anteriores"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={() => scroll("right")}
          className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-primary text-white p-3 rounded-full backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 transform shadow-lg"
          aria-label="Siguientes noticias"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto px-4 md:px-16 pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
        >
          {carouselPosts.map((post, index) => (
            <a
              key={`${post.id}-${index}`}
              // Redirige a la página dinámica
              href={`/blog/${post.id}`}
              target="_blank" // Abre en pestaña nueva
              rel="noopener noreferrer"
              className="flex flex-col md:flex-row items-center bg-card/90 backdrop-blur-md p-5 border border-border/60 rounded-[2rem] shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-primary/40 transition-all duration-300 w-[85vw] md:w-[650px] shrink-0 snap-center"
            >
              {/* IMAGEN DE LA TARJETA */}
              <div className="relative w-full md:w-56 h-60 md:h-full rounded-[1.5rem] overflow-hidden shrink-0 mb-5 md:mb-0 group/img">
                <img
                  className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover/img:scale-110"
                  src={post.imageUrl || "/placeholder.svg"}
                  alt={post.title}
                />
                <div className="absolute top-3 left-3">
                  <Badge
                    variant="secondary"
                    className="bg-black/60 text-white backdrop-blur-md border-none font-medium"
                  >
                    {post.category}
                  </Badge>
                </div>
              </div>

              {/* CONTENIDO DE LA TARJETA */}
              <div className="flex flex-col justify-between h-full p-2 md:pl-8 leading-normal w-full">
                <div>
                  <div className="flex items-center text-xs text-muted-foreground mb-3 font-semibold tracking-wide uppercase">
                    <Calendar className="mr-1.5 h-4 w-4 text-primary" />
                    {post.date}
                  </div>
                  <h5 className="mb-3 text-2xl font-bold tracking-tight text-foreground line-clamp-2 leading-tight">
                    {post.title}
                  </h5>
                  <p className="mb-6 text-muted-foreground text-base line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
                <div className="mt-auto">
                  <span className="inline-flex items-center text-primary font-bold text-sm hover:text-primary/80 transition-colors group/btn">
                    Leer noticia completa
                    <ExternalLink className="w-4 h-4 ml-1.5 transition-transform group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="absolute inset-y-0 left-0 w-8 md:w-24 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-8 md:w-24 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
}
