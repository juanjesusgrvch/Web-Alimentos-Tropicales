import Link from "next/link"
import { Leaf, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export function Footer() {
    return (
        <footer
            className="border-t pt-16 pb-8 w-full flex flex-col items-center border-white/20"
            style={{
                backgroundImage: 'linear-gradient(180deg, rgb(190, 247, 188) 0%, rgba(232, 255, 207, 1) 40%, rgba(227, 255, 251, 1) 100%)',
                backgroundColor: '#f7efbc'
            }}
        >
                <div className="container px-4 md:px-6 mx-auto flex flex-col items-center">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 w-full place-items-center mb-12">

                    {/* Columna 1: Logo y Descripción */}
                    <div className="col-span-1 flex flex-col items-center text-center">
                        <Link href="/" className="flex items-center justify-center gap-2 font-bold text-xl text-primary mb-4">
                            <img
                                src="/images/logoalta.svg"
                                alt="Logo ALTA"
                                className="h-24 w-auto object-contain"
                            />
                        </Link>
                        <p className="text-sm text-muted-foreground">
                            <span className="text-xl font-bold text-primary tracking-tight">ALTA S.A.</span><br />
                            Alimentos Tropicales Argentinos S.A. <br />
                            Compromiso con la calidad y el futuro del agro.
                        </p>
                    </div>

                    {/* Columna 2: Secciones */}
                    <div className="flex flex-col items-center text-center w-full">
                        <h3 className="font-semibold mb-4 text-foreground">Secciones</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground flex flex-col items-center">
                            <li><Link href="/" className="hover:text-primary transition-colors">Inicio</Link></li>
                            <li><Link href="/#about" className="hover:text-primary transition-colors">Nosotros</Link></li>
                            <li><Link href="/#process" className="hover:text-primary transition-colors">Procesos</Link></li>
                            <li><Link href="/#blog" className="hover:text-primary transition-colors">Novedades</Link></li>
                        </ul>
                    </div>

                    {/* Columna 3: Legal */}
                    <div className="flex flex-col items-center text-center w-full">
                        <h3 className="font-semibold mb-4 text-foreground">Legal</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground flex flex-col items-center">
                            <li><Link href="/politica-de-privacidad" className="hover:text-primary transition-colors">Política de Privacidad</Link></li>
                            <li><Link href="/terminos-y-condiciones" className="hover:text-primary transition-colors">Términos y Condiciones</Link></li>
                            <li><Link href="/admin" className="hover:text-primary transition-colors">Acceso Administrativo</Link></li>
                        </ul>
                    </div>

                    {/* Columna 4: Redes Sociales */}
                    <div className="flex flex-col items-center text-center w-full">
                        <h3 className="font-semibold mb-4 text-foreground">Síguenos</h3>
                        <div className="flex justify-center space-x-5">
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Facebook className="h-5 w-5" />
                                <span className="sr-only">Facebook</span>
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Twitter className="h-5 w-5" />
                                <span className="sr-only">Twitter</span>
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Linkedin className="h-5 w-5" />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Instagram className="h-5 w-5" />
                                <span className="sr-only">Instagram</span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="w-full max-w-4xl border-t border-border pt-8 text-center text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} Alimentos Tropicales Argentinos. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    )
}