"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowLeft, Facebook, Twitter, Linkedin, Link as LinkIcon, MessageCircle, Share2 } from "lucide-react"
import ReactMarkdown from "react-markdown"

import { doc, getDoc, collection, getDocs, query, orderBy, limit } from "firebase/firestore"
import { db } from "@/lib/firebase"
// INTERFACE PARA TIPEAR LOS DATOS DE LAS NOTICIAS (BLOG POSTS) OBTENIDOS DESDE FIREBASE
interface BlogPost {
    id: string; title: string; subtitle?: string; excerpt: string;
    content: string; date: string; category: string; imageUrl: string;
}

export default function BlogPostDetail() {
    const params = useParams()
    const router = useRouter()
    const [post, setPost] = useState<BlogPost | null>(null)
    const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [currentUrl, setCurrentUrl] = useState("")

    useEffect(() => {
        // Obtenemos la URL de forma segura (evita errores de hidratación en SSR)
        setCurrentUrl(window.location.href)

        const fetchPostData = async () => {
            try {
                // 1. Buscamos la noticia específica en Firebase
                const postId = params.id as string;
                const docRef = doc(db, "posts", postId);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setPost({ id: docSnap.id, ...docSnap.data() } as BlogPost);

                    // 2. Buscamos noticias relacionadas (las 4 más recientes para mostrar 3)
                    const q = query(collection(db, "posts"), orderBy("date", "desc"), limit(4));
                    const querySnapshot = await getDocs(q);
                    
                    const fetchedRelated = querySnapshot.docs
                        .map(d => ({ id: d.id, ...d.data() } as BlogPost))
                        .filter(p => p.id !== postId) // Excluimos la noticia actual
                        .slice(0, 3); // Nos quedamos solo con 3
                    
                    setRelatedPosts(fetchedRelated);
                } else {
                    setPost(null);
                }
            } catch (error) {
                console.error("Error cargando la noticia desde Firebase:", error);
                setPost(null);
            } finally {
                setIsLoading(false);
            }
        };

        if (params.id) {
            fetchPostData();
        }
    }, [params.id])

    // COMPONENTES UI: Botones de Compartir (Share Intents)

const ShareButtons = () => {
        if (!post) return null
        const encodedUrl = encodeURIComponent(currentUrl)
        const encodedTitle = encodeURIComponent(post.title)

        const handleCopyLink = () => {
            navigator.clipboard.writeText(currentUrl)
            alert("¡Enlace copiado al portapapeles!")
        }

        return (
            <div className="my-10 w-full bg-gradient-to-br from-slate-50 to-white border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6 transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                <div className="flex items-center gap-4 text-center sm:text-left">
                    <div className="hidden sm:flex h-12 w-12 bg-primary/10 rounded-full items-center justify-center text-primary shrink-0">
                        <Share2 className="w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="font-extrabold text-slate-800 text-lg">¿Te resultó interesante?</h4>
                        <p className="text-sm text-slate-500 font-medium mt-0.5">Compártela con tu red de contactos y colegas.</p>
                    </div>
                </div>
                
                {/* Redes Sociales */}
                <div className="flex flex-wrap items-center justify-center gap-3">
                    
                    {/* WhatsApp */}
                    <a href={`https://api.whatsapp.com/send?text=${encodedTitle} - ${encodedUrl}`} target="_blank" rel="noopener noreferrer" 
                       className="p-3 bg-[#25D366] text-white rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(37,211,102,0.4)]" title="Compartir en WhatsApp">
                        <MessageCircle className="w-5 h-5" />
                    </a>
                    
                    {/* Facebook */}
                    <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`} target="_blank" rel="noopener noreferrer"
                       className="p-3 bg-[#1877F2] text-white rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(24,119,242,0.4)]" title="Compartir en Facebook">
                        <Facebook className="w-5 h-5" />
                    </a>

                    {/* X / Twitter */}
                    <a href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`} target="_blank" rel="noopener noreferrer"
                       className="p-3 bg-black text-white rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,0,0,0.3)]" title="Compartir en X (Twitter)">
                        <Twitter className="w-5 h-5" />
                    </a>

                    {/* LinkedIn */}
                    <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`} target="_blank" rel="noopener noreferrer"
                       className="p-3 bg-[#0A66C2] text-white rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(10,102,194,0.4)]" title="Compartir en LinkedIn">
                        <Linkedin className="w-5 h-5" />
                    </a>

                    {/* Divisor */}
                    <div className="h-8 w-px bg-slate-200 mx-1"></div>

                    {/* Copiar Enlace */}
                    <button onClick={handleCopyLink} className="p-3 bg-slate-100 text-slate-600 rounded-full transition-all duration-300 hover:bg-white hover:text-primary hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,0,0,0.1)] border border-transparent hover:border-slate-200" title="Copiar enlace">
                        <LinkIcon className="w-5 h-5" />
                    </button>
                </div>
            </div>
        )
    }

    if (isLoading) return <div className="min-h-screen pt-32 text-center text-primary font-bold text-2xl flex items-center justify-center">Cargando noticia...</div>

    if (!post) return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold mb-4">Noticia no encontrada</h1>
            <button onClick={() => router.push('/')} className="text-primary hover:underline flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" /> Volver al inicio
            </button>
        </div>
    )

    return (
        <main className="flex-grow pt-24 pb-16 bg-background min-h-screen">
            {/* HERO DEL POST */}
            <div className="w-full bg-slate-900 text-white py-16 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: `url(${post.imageUrl})` }} />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-900" />

                <div className="container mx-auto max-w-4xl relative z-10 text-center">
                    <Badge className="bg-primary hover:bg-primary/90 text-white mb-6 px-4 py-1.5 text-sm">{post.category}</Badge>
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight drop-shadow-lg">{post.title}</h1>
                    {post.subtitle && <p className="text-xl md:text-2xl text-slate-300 font-light mb-6">{post.subtitle}</p>}
                    <div className="flex items-center justify-center text-slate-400 font-medium">
                        <Calendar className="w-5 h-5 mr-2" />
                        {post.date}
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 mt-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* CUERPO PRINCIPAL DEL POST */}
                    <article className="lg:col-span-2 bg-white p-6 md:p-10 rounded-2xl shadow-sm border">
                        <ShareButtons />

                        <img src={post.imageUrl} alt={post.title} className="w-full h-auto max-h-[500px] object-cover rounded-xl mb-10 shadow-md" />

                        <div className="text-gray-800 leading-relaxed text-lg">
                            <ReactMarkdown
                                components={{
                                    h1: ({ node, ...props }) => <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-10 mb-6" {...props} />,
                                    h2: ({ node, ...props }) => <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-8 mb-4 border-b pb-2" {...props} />,
                                    p: ({ node, ...props }) => <p className="mb-6" {...props} />,
                                    ul: ({ node, ...props }) => <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-700" {...props} />,
                                    strong: ({ node, ...props }) => <strong className="font-bold text-slate-900" {...props} />,
                                    img: ({ node, ...props }) => <img className="rounded-xl shadow-lg my-8 mx-auto max-h-[400px] object-contain" {...props} alt={props.alt || "Imagen insertada"} />
                                }}
                            >
                                {post.content}
                            </ReactMarkdown>
                        </div>

                        <div className="mt-12">
                            <ShareButtons />
                        </div>
                    </article>

                    {/* SIDEBAR CON RELACIONADOS */}
                    <aside className="lg:col-span-1">
                        <div className="sticky top-28 bg-slate-50 p-6 rounded-2xl border">
                            <h3 className="text-xl font-bold mb-6 border-b pb-4 text-slate-900">Últimas Novedades</h3>

                            <div className="space-y-6">
                                {relatedPosts.length === 0 ? (
                                    <p className="text-sm text-muted-foreground">No hay otras noticias publicadas aún.</p>
                                ) : (
                                    relatedPosts.map(rel => (
                                        <a key={rel.id} href={`/blog/${rel.id}`} className="group flex flex-col gap-3">
                                            <div className="w-full h-32 rounded-lg overflow-hidden relative">
                                                <img src={rel.imageUrl} alt={rel.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-900 group-hover:text-primary transition-colors line-clamp-2">{rel.title}</h4>
                                                <p className="text-xs text-slate-500 mt-1">{rel.date}</p>
                                            </div>
                                        </a>
                                    ))
                                )}
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </main>
    )
}