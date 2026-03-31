import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos y Condiciones | Alimentos Tropicales Argentinos",
  description: "Términos y condiciones de uso de nuestro sitio web y servicios.",
};

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-background py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-12">
        {/* Cabecera */}
        <header className="space-y-4 border-b border-border pb-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Términos y Condiciones
          </h1>
          <p className="text-lg text-muted-foreground">
            Última actualización: {new Date().toLocaleDateString('es-AR', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </header>

        {/* Contenido Legal */}
        <article className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-muted-foreground">
          
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">1. Aceptación de los Términos</h2>
            <p>
              Al acceder y utilizar este sitio web, usted acepta estar sujeto a estos Términos y Condiciones de uso, 
              todas las leyes y regulaciones aplicables, y acepta que es responsable del cumplimiento de las leyes locales aplicables. 
              Si no está de acuerdo con alguno de estos términos, tiene prohibido utilizar o acceder a este sitio.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">2. Uso del Sitio</h2>
            <p>
              Se concede permiso para descargar temporalmente una copia de los materiales (información o software) en el sitio web 
              solo para visualización transitoria personal y no comercial. Esta es la concesión de una licencia, no una transferencia de título, 
              y bajo esta licencia usted no puede:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Modificar o copiar los materiales.</li>
              <li>Utilizar los materiales para cualquier propósito comercial, o para cualquier exhibición pública.</li>
              <li>Intentar descompilar o aplicar ingeniería inversa a cualquier software contenido en el sitio web.</li>
              <li>Eliminar cualquier derecho de autor u otras anotaciones de propiedad de los materiales.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">3. Productos, Presupuestos y Pedidos</h2>
            <p>
              Las especificaciones de los productos, presentaciones (ej. 25KG, 50KG, Big Bags) y cotizaciones proporcionadas 
              a través de este sitio web están sujetas a disponibilidad y confirmación por parte de nuestro equipo comercial. 
              El envío de un formulario de pedido o solicitud de presupuesto no constituye un contrato vinculante de venta 
              hasta que sea expresamente confirmado por nosotros por escrito.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">4. Propiedad Intelectual</h2>
            <p>
              Todos los logotipos, marcas comerciales, textos, imágenes, gráficos y demás contenidos de este sitio web son 
              propiedad exclusiva de nuestra empresa o de sus respectivos licenciantes, y están protegidos por las leyes de 
              propiedad intelectual aplicables.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">5. Limitación de Responsabilidad</h2>
            <p>
              En ningún caso nuestra empresa o sus proveedores serán responsables de ningún daño (incluyendo, sin limitación, 
              daños por pérdida de datos o beneficios, o debido a interrupción del negocio) que surjan del uso o la incapacidad 
              de utilizar los materiales en nuestro sitio web, incluso si hemos sido notificados verbalmente o por escrito de la 
              posibilidad de tal daño.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">6. Modificaciones de los Términos</h2>
            <p>
              Podemos revisar y actualizar estos términos de uso para su sitio web en cualquier momento sin previo aviso. 
              Al utilizar este sitio web, usted acepta estar sujeto a la versión actual de estos Términos y Condiciones.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">7. Ley Aplicable y Jurisdicción</h2>
            <p>
              Estos términos y condiciones se rigen e interpretan de acuerdo con las leyes de Argentina. 
              Usted se somete irrevocablemente a la jurisdicción exclusiva de los tribunales en esta ubicación.
            </p>
          </section>

        </article>
      </div>
    </main>
  );
}