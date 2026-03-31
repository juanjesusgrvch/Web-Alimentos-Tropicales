import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad | Alimentos Tropicales Argentinos",
  description: "Conoce cómo recopilamos, usamos y protegemos tus datos personales.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-12">
        {/* Cabecera */}
        <header className="space-y-4 border-b border-border pb-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Política de Privacidad
          </h1>
          <p className="text-lg text-muted-foreground">
            Última actualización: {new Date().toLocaleDateString('es-AR', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </header>

        {/* Contenido Legal */}
        <article className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-muted-foreground">
          
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">1. Introducción</h2>
            <p>
              En esta Política de Privacidad explicamos cómo recopilamos, utilizamos, compartimos y protegemos su información personal 
              cuando visita nuestro sitio web y utiliza nuestros servicios. Su privacidad es de suma importancia para nosotros, 
              y nos comprometemos a proteger sus datos en cumplimiento con las leyes de protección de datos vigentes.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">2. Información que recopilamos</h2>
            <p>Podemos recopilar los siguientes tipos de información:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-foreground">Información de contacto:</strong> Nombre, dirección de correo electrónico y empresa, proporcionados a través de nuestros formularios de contacto o solicitudes de presupuesto.
              </li>
              <li>
                <strong className="text-foreground">Datos de navegación (Cookies):</strong> Información sobre su comportamiento en el sitio, 
                dirección IP, tipo de navegador y dispositivo, con el fin de mejorar la experiencia del usuario y analizar el tráfico.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">3. Cómo utilizamos su información</h2>
            <p>Los datos que recopilamos son utilizados exclusivamente para:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Procesar sus solicitudes de información, pedidos o presupuestos.</li>
              <li>Mejorar nuestro sitio web y la calidad de nuestros servicios y productos.</li>
              <li>Comunicarnos con usted respecto a novedades, actualizaciones o información relevante del sector.</li>
              <li>Cumplir con obligaciones legales y normativas aplicables.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">4. Protección y Seguridad de los Datos</h2>
            <p>
              Implementamos medidas de seguridad técnicas y organizativas de nivel empresarial para proteger su información personal 
              contra el acceso no autorizado, la alteración, divulgación o destrucción. Sin embargo, ninguna transmisión por Internet 
              es 100% segura, por lo que no podemos garantizar una seguridad absoluta.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">5. Compartir información con terceros</h2>
            <p>
              <strong className="text-foreground">No vendemos ni comercializamos su información personal.</strong> Solo podemos compartir 
              sus datos con proveedores de servicios de confianza que nos asisten en la operación de nuestro sitio web o negocio 
              (por ejemplo, servicios de alojamiento web o analítica), siempre bajo estrictos acuerdos de confidencialidad.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">6. Sus Derechos</h2>
            <p>
              Usted tiene el derecho de solicitar el acceso, rectificación, actualización o eliminación de sus datos personales 
              almacenados en nuestros sistemas. Para ejercer estos derechos, póngase en contacto con nosotros utilizando los canales 
              mencionados a continuación.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">7. Contacto</h2>
            <p>
              Si tiene alguna pregunta, inquietud o solicitud relacionada con esta Política de Privacidad, no dude en contactarnos:
            </p>
            <ul className="list-none space-y-2 mt-4 bg-muted/50 p-6 rounded-lg border border-border">
              <li><strong className="text-foreground">Email:</strong> lalomaprocesadora@gmail.com</li>
              <li><strong className="text-foreground">Teléfono:</strong> +54 9 3878 406666</li>
              <li><strong className="text-foreground">Ubicación:</strong> [Ruta Nacional N°34, km. 1344 | Embarcación, Salta, Argentina]</li>
            </ul>
          </section>

        </article>
      </div>
    </main>
  );
}