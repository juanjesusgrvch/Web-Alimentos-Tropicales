import { ReactNode } from "react";

//INTERFACE
export interface Product {
  slug: string;
  name: string;
  species?: string;
  image?: string;
  coverImage?: string;

  description?: ReactNode;
  characteristicsText?: ReactNode | ReactNode[];
  conservation?: ReactNode;
  shelfLife?: ReactNode;

  possibleUses?: ReactNode | ReactNode[];
  usageModes?: ReactNode;

  generalReqs?: ReactNode;
  specificReqs?: ReactNode;
  size?: ReactNode;

  nutrition?: {
    calories?: string;
    carbs?: string;
    protein?: string;
    fat?: string;
    phosphorus?: string;
    zinc?: string;
    fiber?: string;
    sodium?: string;
    iron?: string;
    calcium?: string;
    magnesium?: string;
    potassium?: string;
  };
}

// LA BASE DE DATOS MOCK DE PRODUCT
export const productsData: Product[] = [
  {
    slug: "poroto-negro",
    name: "Poroto Negro",
    species: "Phaseolus vulgaris",
    image: "/images/productos/NEGRO.webp",

    // GENERALIDADES
    description:
      "El poroto negro (Phaseolus vulgaris) es una leguminosa perteneciente a la familia de las fabáceas, originaria del continente americano y consolidada como un alimento básico en diversas culturas gastronómicas del mundo. Desde el punto de vista nutricional, destaca por su alta densidad de proteínas de origen vegetal, fibra dietética y carbohidratos complejos. Su característico color oscuro se debe a la alta concentración de antocianinas, potentes antioxidantes que combaten el estrés oxidativo en el organismo. Además, es una fuente excelente de micronutrientes esenciales como hierro, folato, magnesio y potasio.",
    characteristicsText: [
      <span key="1">
        {" "}
        <strong className="text-slate-900 font-bold">Morfología:</strong>{" "}
        Presenta una forma ovalada a arriñonada, con un tamaño que oscila entre
        pequeño y mediano.
      </span>,
      <span key="2">
        {" "}
        <strong className="text-slate-900 font-bold">
          Anatomía de la semilla:
        </strong>{" "}
        Cuenta con una cubierta seminal (testa) de color negro brillante y opaco
        según la variedad, y un interior (cotiledones) de color blanco cremoso.
      </span>,
      <span key="3">
        {" "}
        <strong className="text-slate-900 font-bold">
          Propiedades organolépticas:
        </strong>{" "}
        Una vez cocido, desarrolla una textura densa, carnosa y suave que
        mantiene bien su forma. Su perfil de sabor es terroso, ligeramente dulce
        y con sutiles notas que recuerdan a las setas o los champiñones.
      </span>,
      <span key="4">
        {" "}
        <strong className="text-slate-900 font-bold">
          Comportamiento culinario:
        </strong>{" "}
        Posee una excelente capacidad de absorción de sabores, lo que lo
        convierte en un ingrediente ideal para caldos y guisos especiados. Su
        caldo de cocción tiende a teñirse de un tono violáceo oscuro o negro.
      </span>,
    ],

    // CONSERVACIÓN
    conservation: [
      <span key="1">
        {" "}
        Se recomienda el uso de envases herméticos (preferentemente de vidrio o
        plástico de grado alimentario)
      </span>,
      <span key="2">
        {" "}
        Para proteger el producto de la humedad ambiental y prevenir la
        proliferación de hongos.
      </span>,
      <span key="3">
        {" "}
        Prevención de plagas: El envasado hermético también es fundamental para
        evitar la infestación por insectos propios de los granos almacenados,
        como los gorgojos.
      </span>,
    ],

    // VIDA UTIL
    shelfLife: [
      <span key="1">
        {" "}
        <strong className="text-slate-900 font-bold">Grano Seco:</strong> En
        condiciones óptimas de almacenamiento, el poroto negro tiene una vida
        útil de 12 a 24 meses. Pasado este tiempo, el grano sigue siendo seguro
        para el consumo, pero experimenta un endurecimiento estructural que
        prolongará significativamente los tiempos de cocción y mermará la
        calidad de su textura.
      </span>,
      <span key="2">
        {" "}
        <strong className="text-slate-900 font-bold">Grano Cocido:</strong> Una
        vez preparado, puede conservarse en refrigeración (entre 2 °C y 4 °C)
        durante 3 a 5 días, o en el congelador (-18 °C) hasta por 6 meses.
      </span>,
    ],

    // DESTINO Y MODO DE USO
    possibleUses: [
      <span key="1">
        {" "}
        <strong className="text-slate-900 font-bold">
          Platos tradicionales y guisos:
        </strong>{" "}
        Es el protagonista de recetas icónicas como la feijoada, el pabellón
        criollo, la sopa de frijol negro o la bandeja paisa.
      </span>,
      <span key="2">
        {" "}
        <strong className="text-slate-900 font-bold">
          Guarniciones y pastas:
        </strong>{" "}
        Ideal para elaborar "frijoles refritos" o pastas untables (como el
        hummus de poroto negro).
      </span>,
      <span key="3">
        {" "}
        <strong className="text-slate-900 font-bold">
          Alternativas Plant-Based:
        </strong>{" "}
        Por su textura densa, es una base excelente para la formulación de
        hamburguesas vegetales, albóndigas y rellenos sin carne.
      </span>,
      <span key="4">
        {" "}
        <strong className="text-slate-900 font-bold">
          Ensaladas y bowls:
        </strong>{" "}
        Aporta volumen, color y saciedad en preparaciones frías.
      </span>,
      <span key="5">
        {" "}
        <strong className="text-slate-900 font-bold">
          Repostería saludable:
        </strong>{" "}
        Gracias a su humedad y sabor neutro al combinarse con cacao, se utiliza
        frecuentemente en la elaboración de masas dulces como brownies sin
        harina.
      </span>,
    ],

    // MODO DE USO
    usageModes: (
      <div className="flex flex-col gap-2">
        <p className="mb-4">
          {" "}
          Producto semielaborado para industrias elaboradoras de productos
          alimenticios.{" "}
          <strong className="text-slate-900 font-bold">
            {" "}
            No es de consumo directo.
          </strong>
        </p>

        <ul className="list-disc ml-4 space-y-2 mt-2">
          <li key="1">
            <strong className="text-slate-900 font-bold">
              Remojo previo (Hidratación):
            </strong>{" "}
            Es altamente recomendable someter el grano a un remojo de 8 a 12
            horas antes de la cocción. Este proceso no solo reduce el tiempo en
            el fuego, sino que desactiva antinutrientes (como el ácido fítico) y
            disuelve los oligosacáridos, mejorando drásticamente su
            digestibilidad.
          </li>

          <li key="2">
            <strong className="text-slate-900 font-bold">Cocción:</strong> Puede
            realizarse por hervido tradicional (aprox. 60-90 minutos) o mediante
            olla a presión (aprox. 20-30 minutos). Se sugiere añadir la sal y
            los elementos ácidos (como tomate o limón) hacia el final de la
            cocción para evitar que la piel del grano se endurezca.
          </li>
        </ul>
      </div>
    ),

    // 3. CALIDAD
    generalReqs: (
      <div className="flex flex-col gap-2">
        <p className="mb-4">
          {" "}
          <strong className="text-slate-900">
            ► Resolución SENASA N° 228/21 - Anexo III
          </strong>{" "}
          (IF-2021-37591987-APN-DNIYCA#SENASA)
        </p>

        <ul className="list-disc ml-4 space-y-2 mt-2">
          <li key="1">
            <strong className="text-slate-900 font-bold">
              Humedad Máxima:
            </strong>{" "}
            15%
          </li>

          <li key="2">
            <strong className="text-slate-900 font-bold">
              Libre de insectos y/o aracnidos vivos
            </strong>
          </li>

          <li key="3">
            <strong className="text-slate-900 font-bold">
              Porotos Contrastantes Máximo:
            </strong>{" "}
            2%
          </li>

          <li key="4">
            <strong className="text-slate-900 font-bold">
              Porotos de Otras Variedades Máximo:
            </strong>{" "}
            5%
          </li>
        </ul>
      </div>
    ),

    specificReqs: [
      <span key="1">
        {" "}
        <strong className="text-slate-900 font-bold">
          Cuerpos Extraños y/o Incomestibles Máximo:
        </strong>{" "}
        1%
      </span>,
      <span key="2">
        {" "}
        <strong className="text-slate-900 font-bold">
          Granos Manchados Máximo:
        </strong>{" "}
        1%
      </span>,
      <span key="3">
        {" "}
        <strong className="text-slate-900 font-bold">
          Granos Ligeramente Manchados Máximo:
        </strong>{" "}
        3%
      </span>,
    ],

    size: "Calidad Exportación: 95% sobre zaranda de 4 mm o superior. Los calibres de 3 mm o 3.5 mm se consideran granos pequeños o bajo zaranda y se destinan a mercados menos exigentes o industria.",

    // 5. NUTRICIÓN
    nutrition: {
      calories: "341 kcal",
      carbs: "62.4 g",
      protein: "21.6 g",
      fat: "1.4 g",
      fiber: "15.5 g",
      phosphorus: "352 mg",
      iron: "5.1 mg",
      calcium: "123 mg",
      magnesium: "171 mg",
      potassium: "1483 mg",
      sodium: "5 mg",
      zinc: "3.65 mg",
    },
  },
  {
    slug: "poroto-mungo",
    name: "Poroto Mungo",
    species: "Vigna Radiata",
    image: "/images/productos/mungo.webp",

    // GENERALIDADES
    description:
      "Leguminosa originaria del subcontinente indio. Se destaca excepcionalmente por su alta digestibilidad y su bajo índice de producción de flatulencias en comparación con otras legumbres. Nutricionalmente, ofrece un perfil sobresaliente: es rico en proteínas de fácil asimilación, fibra, vitaminas del complejo B (especialmente ácido fólico) y minerales esenciales como hierro, magnesio y manganeso. Es un cultivo fundamental tanto para la nutrición humana como para sistemas agrícolas regenerativos.",
    characteristicsText: [
      <span key="1">
        {" "}
        <strong className="text-slate-900 font-bold">Morfología:</strong> Es un
        grano de tamaño muy pequeño, con una forma que varía de esférica a
        ligeramente ovalada.
      </span>,
      <span key="2">
        {" "}
        <strong className="text-slate-900 font-bold">
          Anatomía de la semilla:
        </strong>{" "}
        Su rasgo más distintivo es su cubierta seminal (testa) de color verde
        oliva brillante, que encierra unos cotiledones de color amarillo pálido.
      </span>,
      <span key="3">
        {" "}
        <strong className="text-slate-900 font-bold">
          Propiedades organolépticas:
        </strong>{" "}
        Ofrece una textura tierna y un perfil de sabor sumamente suave,
        ligeramente dulce y con sutiles notas a nuez.
      </span>,
      <span key="4">
        {" "}
        <strong className="text-slate-900 font-bold">
          Comportamiento culinario:
        </strong>{" "}
        Debido a su tamaño reducido y a la delgadez de su piel, presenta tiempos
        de cocción notablemente inferiores a los de otras legumbres y tiende a
        deshacerse con facilidad si se sobrecuece, lo cual es ideal para espesar
        preparaciones.
      </span>,
    ],

    // CONSERVACIÓN
    conservation: [
      <span key="1">
        {" "}
        Utilizar envases con cierre hermético para bloquear la entrada de
        humedad ambiental, lo cual podría desencadenar germinaciones indeseadas
        o el desarrollo de micotoxinas.
      </span>,
      <span key="2">
        {" "}
        Almacenar en un espacio fresco, seco y oscuro, alejado de fuentes de
        calor o luz solar directa.
      </span>,
      <span key="3">
        {" "}
        Mantener el producto aislado previene el ataque de insectos de granos
        almacenados.
      </span>,
    ],

    // VIDA UTIL
    shelfLife: [
      <span key="1">
        {" "}
        <strong className="text-slate-900 font-bold">Grano Seco:</strong> En
        condiciones de almacenamiento hermético y fresco, conserva su calidad
        óptima durante 12 a 24 meses. Pasado este periodo, su poder germinativo
        disminuye drásticamente y el grano requerirá mayor tiempo de cocción.
      </span>,
      <span key="2">
        {" "}
        <strong className="text-slate-900 font-bold">Grano Cocido:</strong>{" "}
        Refrigerado (2 °C a 4 °C), se mantiene en buen estado por 3 a 5 días.
      </span>,
    ],

    // DESTINO Y MODO DE USO
    possibleUses: [
      <span key="1">
        {" "}
        <strong className="text-slate-900 font-bold">Guisos y Sopas:</strong> Su
        rápida cocción y textura suave lo hacen ideal para enriquecer caldos,
        cremas y guisos especiados, aportando cuerpo sin necesidad de largas
        cocciones.
      </span>,
      <span key="2">
        {" "}
        <strong className="text-slate-900 font-bold">
          Pures y pastas:
        </strong>{" "}
        Perfecto para elaborar purés cremosos o pastas untables, como el hummus
        de poroto mungo, gracias a su textura que se deshace fácilmente al
        cocinarse.
      </span>,
      <span key="3">
        {" "}
        <strong className="text-slate-900 font-bold">
          Repostería Asiática:
        </strong>{" "}
        En la gastronomía asiática, es un ingrediente tradicional en la
        elaboración de dulces y postres, como los famosos "mochi" o pasteles de
        arroz rellenos de pasta de poroto mungo dulce.
      </span>,
      <span key="4">
        {" "}
        <strong className="text-slate-900 font-bold">
          Ensaladas y bowls:
        </strong>{" "}
        Aporta volumen, color y saciedad en preparaciones frías.
      </span>,
      <span key="5">
        {" "}
        <strong className="text-slate-900 font-bold">Brotes Frescos:</strong> El
        poroto mungo es una de las pocas legumbres que se consume masivamente en
        forma de brote, el cual es altamente valorado por su textura crujiente y
        su sabor fresco, ligeramente dulce y con un toque a nuez, ideal para
        ensaladas, salteados y como guarnición en platos asiáticos.
      </span>,
    ],

    // MODO DE USO
    usageModes: (
      <div className="flex flex-col gap-2">
        <p className="mb-4">
          {" "}
          El poroto mungo es excepcionalmente versátil y destaca por ser una de
          las pocas legumbres que se consume masivamente en forma de brote.
          Producto semielaborado para industrias elaboradoras de productos
          alimenticios.{" "}
          <strong className="text-slate-900 font-bold">
            {" "}
            No es de consumo directo.
          </strong>
        </p>

        <ul className="list-disc ml-4 space-y-2 mt-2">
          <li key="1">
            <strong className="text-slate-900 font-bold">
              Brotes de Poroto Mungo:
            </strong>{" "}
            El proceso de germinación se inicia con un remojo de 8 a 12 horas,
            seguido de un período de incubación en condiciones de humedad,
            oscuridad y temperatura controladas durante 3 a 5 días hasta que
            desarrollan los brotes y alcanzan una longitud óptima (entre 2 y 5
            cm) para su consumo, momento en el cual se cosechan, se lavan y se
            refrigeran para mantener su frescura. Este proceso multiplica
            exponencialmente su contenido de vitamina C y enzimas vivas.
          </li>

          <li key="2">
            <strong className="text-slate-900 font-bold">
              Remojo previo (Hidratación):
            </strong>{" "}
            Es altamente recomendable someter el grano a un remojo de 8 a 12
            horas antes de la cocción. Este proceso no solo reduce el tiempo en
            el fuego, sino que desactiva antinutrientes (como el ácido fítico) y
            disuelve los oligosacáridos, mejorando drásticamente su
            digestibilidad.
          </li>

          <li key="3">
            <strong className="text-slate-900 font-bold">Cocción:</strong> Puede
            realizarse por hervido tradicional (aprox. 30-45 minutos) o mediante
            olla a presión (aprox. 10-15 minutos).
          </li>
        </ul>
      </div>
    ),

    // 3. CALIDAD
    generalReqs: (
      <div className="flex flex-col gap-2">
        <p className="mb-4">
          {" "}
          <strong className="text-slate-900">
            ► Resolución SENASA N° 228/21 - Anexo III
          </strong>{" "}
          (IF-2021-37591987-APN-DNIYCA#SENASA)
        </p>

        <ul className="list-disc ml-4 space-y-2 mt-2">
          <li key="1">
            <strong className="text-slate-900 font-bold">
              Humedad Máxima:
            </strong>{" "}
            15%
          </li>

          <li key="2">
            <strong className="text-slate-900 font-bold">
              Libre de insectos y/o aracnidos vivos
            </strong>
          </li>

          <li key="3">
            <strong className="text-slate-900 font-bold">
              Porotos Contrastantes Máximo:
            </strong>{" "}
            2%
          </li>

          <li key="4">
            <strong className="text-slate-900 font-bold">
              Porotos de Otras Variedades Máximo:
            </strong>{" "}
            5%
          </li>
        </ul>
      </div>
    ),

    specificReqs: [
      <span key="1">
        {" "}
        <strong className="text-slate-900 font-bold">
          Cuerpos Extraños y/o Incomestibles Máximo:
        </strong>{" "}
        1%
      </span>,
      <span key="2">
        {" "}
        <strong className="text-slate-900 font-bold">
          Granos Manchados Máximo:
        </strong>{" "}
        1%
      </span>,
      <span key="3">
        {" "}
        <strong className="text-slate-900 font-bold">
          Granos Ligeramente Manchados Máximo:
        </strong>{" "}
        3%
      </span>,
    ],

    size: "Calidad Exportación: 95% sobre zaranda de 3.50 mm o superior. El estandar exige desde 3.00 mm a 4.00 mm.",

    // 5. NUTRICIÓN
    nutrition: {
      calories: "341 kcal",
      carbs: "62.6 g",
      protein: "23.9 g",
      fat: "1.2 g",
      fiber: "16.3 g",
      phosphorus: "367 mg",
      iron: "6.7 mg",
      calcium: "132 mg",
      magnesium: "189 mg",
      potassium: "1246 mg",
      sodium: "15 mg",
      zinc: "2.7 mg",
    },
  },
  {
    slug: "poroto-alubia",
    name: "Poroto Alubia",
    species: "Phaseolus vulgaris",
    image: "/images/productos/ALUBIA.webp",

    // GENERALIDADES
    description:
      "Leguminosa de alto valor comercial y nutricional. Desde el punto de vista agronómico, es un cultivo exigente y altamente valorado en el mercado internacional por su pureza varietal y su color inmaculado. Nutricionalmente, es una fuente extraordinaria de carbohidratos complejos (almidones), proteínas vegetales, fibra soluble e insoluble. Destaca por su bajísimo contenido lipídico y su aporte significativo de minerales como potasio, fósforo, hierro y calcio, lo que lo convierte en un pilar dietético para la prevención de enfermedades cardiovasculares y el control de la glucemia.",
    characteristicsText: [
      <span key="1">
        {" "}
        <strong className="text-slate-900 font-bold">Morfología:</strong> Es un
        grano de calibre mediano a grande, con una forma clásicamente arriñonada
        (arriñonado largo o corto) a ovalada, y un peso de los 1000 granos (PMG)
        que denota su robustez.
      </span>,
      <span key="2">
        {" "}
        <strong className="text-slate-900 font-bold">
          Anatomía de la semilla:
        </strong>{" "}
        Su característica más crítica es la cubierta seminal (testa) de color
        blanco puro, liso y brillante. Sus cotiledones son internamente de un
        blanco cremoso.
      </span>,
      <span key="3">
        {" "}
        <strong className="text-slate-900 font-bold">
          Propiedades organolépticas:
        </strong>{" "}
        Una vez sometido a cocción, adquiere una textura extremadamente
        mantecosa y suave, deshaciéndose en el paladar. Su sabor es delicado,
        neutro y muy refinado.
      </span>,
      <span key="4">
        {" "}
        <strong className="text-slate-900 font-bold">
          Comportamiento culinario:
        </strong>{" "}
        Es altamente higroscópico (absorbe mucha agua) y, debido a la liberación
        de sus almidones durante la cocción, tiene una capacidad natural para
        espesar caldos y salsas. Su piel es fina pero, si se hidrata
        correctamente, mantiene la integridad del grano sin desarmarse de
        inmediato.
      </span>,
    ],

    // CONSERVACIÓN
    conservation: [
      <span key="1">
        {" "}
        Requiere un entorno estrictamente fresco, seco y oscuro. La exposición a
        la luz solar directa, las altas temperaturas o la humedad elevada
        provocan la oxidación y el oscurecimiento de la testa (amarilleo), lo
        que deprecia drásticamente el producto.
      </span>,
      <span key="2">
        {" "}
        En la industria, se maneja en silos aireados o silobolsas; para escala
        menor o doméstica, son imperativos los envases herméticos opacos o
        almacenados en alacenas cerradas.
      </span>,
      <span key="3">
        {" "}
        Es vital protegerlo de plagas de almacén (como el gorgojo del poroto,
        Acanthoscelides obtectus) mediante el aislamiento hermético o el control
        de temperatura.
      </span>,
    ],

    // VIDA UTIL
    shelfLife: [
      <span key="1">
        {" "}
        <strong className="text-slate-900 font-bold">Grano Seco:</strong> En
        condiciones óptimas, mantiene su viabilidad y calidad culinaria durante
        12 a 18 meses. Un almacenamiento prolongado en condiciones inadecuadas
        desencadena el fenómeno conocido técnicamente como Hard-to-Cook (HTC o
        endurecimiento del grano), lo que hace que el poroto no se ablande sin
        importar cuánto tiempo se hierva.
      </span>,
      <span key="2">
        {" "}
        <strong className="text-slate-900 font-bold">Grano Cocido:</strong>{" "}
        Refrigerado en recipientes cerrados (2 °C a 4 °C), se conserva de 3 a 5
        días. Admite perfectamente la congelación (-18 °C) por un periodo de
        hasta 6 meses sin perder su textura mantecosa.
      </span>,
    ],

    // DESTINO Y MODO DE USO
    possibleUses: [
      <span key="1">
        {" "}
        <strong className="text-slate-900 font-bold">
          Guisos y Sopas:
        </strong>{" "}
        Ingrediente estelar en guisos pesados y de cocción lenta, como la fabada
        asturiana, el locro, el cassoulet francés o la feijoada blanca.
      </span>,
      <span key="2">
        {" "}
        <strong className="text-slate-900 font-bold">Pures y Cremas:</strong> Su
        textura mantecosa permite licuarlo o procesarlo para obtener bases
        cremosas, sopas espesas y untables (como el hummus de alubia).
      </span>,
      <span key="3">
        {" "}
        <strong className="text-slate-900 font-bold">
          Harinas y extrusados:
        </strong>{" "}
        En la industria de ingredientes, se muele para obtener harinas ricas en
        proteínas, libres de gluten (Sin TACC), utilizadas en panificados y
        pastas aptas para celíacos.
      </span>,
      <span key="4">
        {" "}
        <strong className="text-slate-900 font-bold">
          Industria Conservera:
        </strong>{" "}
        Es el grano por excelencia para la elaboración de enlatados, precocidos
        y los famosos baked beans (porotos horneados con salsa de tomate o
        melaza), gracias a su capacidad de absorber salsas sin perder la forma
        estructural.
      </span>,
      <span key="5">
        {" "}
        <strong className="text-slate-900 font-bold">
          Proteína para Animales:
        </strong>{" "}
        La dieta animal es otro destino importante, especialmente para la
        alimentación de ganado bovino, porcino y aviar, donde se utiliza como
        fuente de proteína vegetal de alta calidad en formulaciones balanceadas.
      </span>,
    ],

    // MODO DE USO
    usageModes: (
      <div className="flex flex-col gap-2">
        <p className="mb-4">
          {" "}
          Esta variedad es una de las más demandadas tanto por la industria
          alimentaria como por la gastronomía tradicional debido a su
          versatilidad y calibre. Producto semielaborado para industrias
          elaboradoras de productos alimenticios.{" "}
          <strong className="text-slate-900 font-bold">
            {" "}
            No es de consumo directo.
          </strong>
        </p>

        <ul className="list-disc ml-4 space-y-2 mt-2">
          <li key="1">
            <strong className="text-slate-900 font-bold">
              Remojo previo (Hidratación):
            </strong>{" "}
            Es un paso crítico e innegociable. Requiere un remojo profundo de 12
            a 16 horas en agua fría. Una hidratación dispareja resultará en
            granos que estallan durante la cocción o que quedan con centros
            duros.
          </li>

          <li key="2">
            <strong className="text-slate-900 font-bold">Cocción:</strong> Por
            hervido tradicional a fuego lento, demanda entre 60 y 120 minutos,
            dependiendo de la dureza del agua y la frescura de la cosecha. En
            olla a presión, el tiempo se reduce a 25 o 40 minutos. Se debe
            espumar (retirar la espuma blanca superficial) durante los primeros
            hervores para eliminar impurezas y mejorar la digestibilidad.
          </li>
        </ul>
      </div>
    ),

    // 3. CALIDAD
    generalReqs: (
      <div className="flex flex-col gap-2">
        <p className="mb-4">
          {" "}
          <strong className="text-slate-900">
            ► Resolución SENASA N° 1075/94 - Norma XVI - Anexo III
          </strong>{" "}
          (IF-2021-37591987-APN-DNIYCA#SENASA)
        </p>

        <ul className="list-disc ml-4 space-y-2 mt-2">
          <li key="1">
            <strong className="text-slate-900 font-bold">
              Humedad Máxima:
            </strong>{" "}
            15%
          </li>

          <li key="2">
            <strong className="text-slate-900 font-bold">
              Libre de insectos y/o aracnidos vivos
            </strong>
          </li>

          <li key="3">
            <strong className="text-slate-900 font-bold">
              Porotos Contrastantes Máximo:
            </strong>{" "}
            1%
          </li>

          <li key="4">
            <strong className="text-slate-900 font-bold">
              Porotos Blancos de Otras Clases Máximo:
            </strong>{" "}
            5%
          </li>
        </ul>
      </div>
    ),

    specificReqs: [
      <span key="1">
        {" "}
        <strong className="text-slate-900 font-bold">
          Cuerpos Extraños y/o Incomestibles Máximo:
        </strong>{" "}
        1%
      </span>,
      <span key="2">
        {" "}
        <strong className="text-slate-900 font-bold">
          Granos Manchados Máximo:
        </strong>{" "}
        1%
      </span>,
      <span key="3">
        {" "}
        <strong className="text-slate-900 font-bold">
          Granos Ligeramente Manchados Máximo:
        </strong>{" "}
        3%
      </span>,
    ],

    size: [
      <span key="1">
        {" "}
        <strong className="text-slate-900 font-bold">
          {" "}
          Calibres grandes/Premium:
        </strong>{" "}
        160-180 granos / 100g
      </span>,
      <span key="2">
        {" "}
        <strong className="text-slate-900 font-bold">
          Calibres medios:
        </strong>{" "}
        180-200 o 200-220 granos / 100g
      </span>,
      <span key="3">
        {" "}
        <strong className="text-slate-900 font-bold">
          Calibres chicos:
        </strong>{" "}
        240-260 hasta más de 300 granos / 100g.
      </span>,
    ],

    // 5. NUTRICIÓN
    nutrition: {
      calories: "333 kcal",
      carbs: "60.27 g",
      protein: "23.36 g",
      fat: "0.85 g",
      fiber: "15.20 g",
      phosphorus: "301 mg",
      iron: "10.44 mg",
      calcium: "240 mg",
      magnesium: "190 mg",
      potassium: "1795 mg",
      sodium: "16 mg",
      zinc: "3.65 mg",
    },
  },
  {
    slug: "poroto-cranberry",
    name: "Poroto Cranberry",
    species: "Phaseolus vulgaris",
    image: "/images/productos/CRANBERRY.webp",

    // GENERALIDADES
    description:
      "Conocido en diversas regiones como borlotti, cargamanto o frijol romano, es una leguminosa de altísimo valor gastronómico y comercial, muy demandada en mercados europeos (especialmente Italia y España) y americanos. Destaca visualmente por su atractivo patrón de pigmentación, y nutricionalmente es una potencia: aporta una excelente cantidad de proteína vegetal, fibra dietética (ideal para la salud intestinal y cardiovascular), ácido fólico, hierro y carbohidratos de asimilación lenta. Su cultivo requiere un manejo agronómico preciso para asegurar que el grano desarrolle correctamente su característico veteado, el cual es un indicador directo de calidad para el consumidor.",
    characteristicsText: [
      <span key="1">
        {" "}
        <strong className="text-slate-900 font-bold">Morfología:</strong> Es un
        grano de calibre mediano a grande, con una forma ovalada a ligeramente
        arriñonada, presentando un aspecto robusto y redondeado.
      </span>,
      <span key="2">
        {" "}
        <strong className="text-slate-900 font-bold">
          Anatomía de la semilla:
        </strong>{" "}
        Su rasgo comercial más distintivo es su cubierta seminal (testa).
        Presenta un fondo de color crema o beige claro, profusamente jaspeado,
        moteado o veteado con manchas de un tono rojo intenso, granate o
        arándano (de ahí su nombre Cranberry). Sus cotiledones son de un tono
        claro y uniforme.
      </span>,
      <span key="3">
        {" "}
        <strong className="text-slate-900 font-bold">
          Propiedades organolépticas:
        </strong>{" "}
        Una de sus mayores virtudes es su textura culinaria: una vez cocido,
        resulta extraordinariamente cremoso, suave y aterciopelado. Su sabor es
        rico, con matices terrosos y notas dulces que recuerdan sutilmente a las
        castañas o nueces.
      </span>,
      <span key="4">
        {" "}
        <strong className="text-slate-900 font-bold">
          Comportamiento culinario:
        </strong>{" "}
        Dato fundamental para el consumidor: durante el proceso de cocción, el
        grano pierde sus características manchas rojas y adquiere un color
        uniforme marrón claro o rosado oscuro. Tiene una excelente capacidad
        para absorber los sabores del medio de cocción y produce un caldo denso
        y sabroso, ideal para espesar preparaciones.
      </span>,
    ],

    // CONSERVACIÓN
    conservation: [
      <span key="1">
        {" "}
        Debe almacenarse en un lugar fresco, estrictamente seco y oscuro. La
        exposición a la luz y al calor sostenido provoca la oxidación de sus
        pigmentos, oscureciendo el fondo crema y restando contraste a sus
        manchas, lo que deprecia su apariencia.
      </span>,
      <span key="2">
        {" "}
        Se exige el uso de envases herméticos para aislar el producto de los
        cambios de humedad relativa del ambiente.
      </span>,
      <span key="3">
        {" "}
        El aislamiento es indispensable para evitar la infestación por insectos
        perforadores de granos y el desarrollo de carga fúngica.
      </span>,
    ],

    // VIDA UTIL
    shelfLife: [
      <span key="1">
        {" "}
        <strong className="text-slate-900 font-bold">Grano Seco:</strong> Bajo
        condiciones de almacenamiento óptimas, mantiene su viabilidad y terneza
        durante 12 a 18 meses. Si se expone a altas temperaturas y humedad,
        desarrolla rápidamente el fenómeno de endurecimiento (HTC -
        Hard-to-Cook), volviéndose inviable para la cocción normal.
      </span>,
      <span key="2">
        {" "}
        <strong className="text-slate-900 font-bold">Grano Cocido:</strong> En
        refrigeración (2 °C a 4 °C) dentro de un recipiente hermético, se
        conserva perfectamente de 3 a 5 días. Es apto para congelación (-18 °C)
        por hasta 6 meses, manteniendo muy bien su estructura si se congela
        junto con un poco de su caldo.
      </span>,
    ],

    // DESTINO Y MODO DE USO
    possibleUses: [
      <span key="1">
        {" "}
        <strong className="text-slate-900 font-bold">
          Guisos y Sopas:
        </strong>{" "}
        Ideal para estofados densos donde se busca que la legumbre aporte cuerpo
        y textura al caldo.
      </span>,
      <span key="2">
        {" "}
        <strong className="text-slate-900 font-bold">
          Pastas y Cremas:
        </strong>{" "}
        Es el ingrediente original e insustituible del clásico Minestrone
        italiano y la Pasta e fagioli (pasta con porotos).
      </span>,
      <span key="3">
        {" "}
        <strong className="text-slate-900 font-bold">Ensaladas:</strong> Al
        enfriarse, retiene una mordida firme en el exterior y cremosa en el
        interior, combinando a la perfección con aderezos ácidos (vinagretas),
        cebolla morada y hierbas frescas.
      </span>,
      <span key="4">
        {" "}
        <strong className="text-slate-900 font-bold">
          Pures y Guarniciones:
        </strong>{" "}
        Procesado o pisado rústicamente, funciona como una excelente cama o
        guarnición para carnes asadas y pescados, similar a la polenta o el puré
        de papas.
      </span>,
      <span key="5">
        {" "}
        <strong className="text-slate-900 font-bold">
          Proteína para Animales:
        </strong>{" "}
        La dieta animal es otro destino importante, especialmente para la
        alimentación de ganado bovino, porcino y aviar, donde se utiliza como
        fuente de proteína vegetal de alta calidad en formulaciones balanceadas.
      </span>,
    ],

    // MODO DE USO
    usageModes: (
      <div className="flex flex-col gap-2">
        <p className="mb-4">
          {" "}
          Esta variedad es considerada "de especialidad", por lo que su destino
          principal es el consumo humano directo en preparaciones donde su
          textura cremosa sea la protagonista. Producto semielaborado para
          industrias elaboradoras de productos alimenticios.{" "}
          <strong className="text-slate-900 font-bold">
            {" "}
            No es de consumo directo.
          </strong>
        </p>

        <ul className="list-disc ml-4 space-y-2 mt-2">
          <li key="1">
            <strong className="text-slate-900 font-bold">
              Remojo previo (Hidratación):
            </strong>{" "}
            Requiere un remojo profundo y obligatorio de 8 a 12 horas en
            abundante agua a temperatura ambiente. Este proceso garantiza una
            rehidratación uniforme del cotiledón, reduce los tiempos de fuego y
            mejora la asimilación de sus nutrientes.
          </li>

          <li key="2">
            <strong className="text-slate-900 font-bold">Cocción:</strong> Por
            hervor tradicional a fuego lento, el tiempo estimado es de 60 a 90
            minutos. En olla a presión, se reduce a un rango de 20 a 30 minutos.
            Se recomienda una cocción suave para evitar que la piel, que es
            relativamente fina, se desprenda y el grano se desarme antes de
            tiempo.
          </li>
        </ul>
      </div>
    ),

    // 3. CALIDAD
    generalReqs: (
      <div className="flex flex-col gap-2">
        <p className="mb-4">
          {" "}
          <strong className="text-slate-900">
            ► Resolución SENASA N° 228/21 - Anexo III
          </strong>{" "}
          (IF-2021-37591987-APN-DNIYCA#SENASA)
        </p>

        <ul className="list-disc ml-4 space-y-2 mt-2">
          <li key="1">
            <strong className="text-slate-900 font-bold">
              Humedad Máxima:
            </strong>{" "}
            15%
          </li>

          <li key="2">
            <strong className="text-slate-900 font-bold">
              Libre de insectos y/o aracnidos vivos
            </strong>
          </li>

          <li key="3">
            <strong className="text-slate-900 font-bold">
              Porotos Contrastantes Máximo:
            </strong>{" "}
            2%
          </li>

          <li key="4">
            <strong className="text-slate-900 font-bold">
              Porotos de Otras Clases Máximo:
            </strong>{" "}
            5%
          </li>
        </ul>
      </div>
    ),

    specificReqs: [
      <span key="1">
        {" "}
        <strong className="text-slate-900 font-bold">
          Cuerpos Extraños y/o Incomestibles Máximo:
        </strong>{" "}
        1%
      </span>,
      <span key="2">
        {" "}
        <strong className="text-slate-900 font-bold">
          Granos Manchados Máximo:
        </strong>{" "}
        1%
      </span>,
      <span key="3">
        {" "}
        <strong className="text-slate-900 font-bold">
          Granos Ligeramente Manchados Máximo:
        </strong>{" "}
        3%
      </span>,
    ],

    size: "Calibre Grande: 160 - 200 granos / 100g. Calibre Medio: 180-300 granos / 100g. dependiendo del lote y la cosecha.",

    // 5. NUTRICIÓN
    nutrition: {
      calories: "335 kcal",
      carbs: "60.05 g",
      protein: "23.03 g",
      fat: "1.23 g",
      fiber: "24.70 g",
      phosphorus: "372 mg",
      iron: "5.0 mg",
      calcium: "127 mg",
      magnesium: "156 mg",
      potassium: "1332 mg",
      sodium: "6 mg",
      zinc: "3.63 mg",
    },
  },
  {
    slug: "poroto-colorado-drk",
    name: "Poroto Colorado DRK",
    species: "Phaseolus vulgaris",
    image: "/images/productos/COLORADO_DRK.webp",

    // GENERALIDADES
    description:
      "Dark Red Kidney (por sus siglas en inglés) es una variedad premium de Phaseolus vulgaris de altísima demanda global. Nutricionalmente, es un alimento sumamente denso: aporta niveles excepcionales de proteína de origen vegetal, fibra dietética, hierro, potasio y carbohidratos complejos. Su rasgo más sobresaliente es la altísima concentración de antocianinas y polifenoles en su tegumento (lo que le confiere su color característico), actuando como potentes antioxidantes. Es un cultivo fundamental en la agroindustria, destinado principalmente a mercados de alto poder adquisitivo que exigen estándares visuales y estructurales perfectos.",
    characteristicsText: [
      <span key="1">
        {" "}
        <strong className="text-slate-900 font-bold">Morfología:</strong> Posee
        una marcada e inconfundible forma de riñón (kidney), siendo un grano
        largo, ancho y de extremos redondeados.
      </span>,
      <span key="2">
        {" "}
        <strong className="text-slate-900 font-bold">
          Anatomía de la semilla:
        </strong>{" "}
        Su cubierta seminal (testa) es de un color rojo oscuro profundo (caoba),
        liso y muy brillante. Su interior (cotiledones) contrasta fuertemente al
        ser de un color blanco-cremoso.
      </span>,
      <span key="3">
        {" "}
        <strong className="text-slate-900 font-bold">
          Propiedades organolépticas:
        </strong>{" "}
        Tiene un sabor robusto, ligeramente terroso y profundo. Su cualidad más
        valorada es su textura: tiene una piel gruesa que protege un interior
        firme pero harinoso.
      </span>,
      <span key="4">
        {" "}
        <strong className="text-slate-900 font-bold">
          Comportamiento culinario:
        </strong>{" "}
        Es el "rey de la retención de forma". A diferencia de otras legumbres
        que se desarman al cocerse, el DRK mantiene su estructura intacta
        incluso bajo procesos de cocción industrial intensos, absorbiendo los
        sabores de salsas y especias sin desintegrarse.
      </span>,
    ],

    // CONSERVACIÓN
    conservation: [
      <span key="1">
        {" "}
        Es un grano altamente sensible a la fotodegradación. Requiere
        almacenamiento en instalaciones estrictamente oscuras, secas y frescas.
        La luz solar o artificial constante oxida la testa, transformando el
        rojo oscuro vibrante en un tono marrón opaco, lo cual deprecia
        automáticamente la mercadería.
      </span>,
      <span key="2">
        {" "}
        A nivel mayorista se maneja en bolsas de polipropileno o silos cerrados;
        para el consumidor o retail, exige envases opacos o almacenamiento en
        alacenas cerradas, protegido de la humedad.
      </span>,
    ],

    // VIDA UTIL
    shelfLife: [
      <span key="1">
        {" "}
        <strong className="text-slate-900 font-bold">Grano Seco:</strong>{" "}
        Mantiene su calidad comercial de 12 a 18 meses si se controla la
        temperatura y humedad. El almacenamiento deficiente provoca el
        endurecimiento del cotiledón (Hard-to-Cook).
      </span>,
      <span key="2">
        {" "}
        <strong className="text-slate-900 font-bold">Grano Cocido:</strong>{" "}
        Refrigerado adecuadamente (2 °C a 4 °C), se conserva de 3 a 5 días. Es
        ideal para congelación (-18 °C) por hasta 6 meses, ya que su piel gruesa
        evita que se rompa al descongelarse.
      </span>,
    ],

    // DESTINO Y MODO DE USO
    possibleUses: [
      <span key="1">
        {" "}
        <strong className="text-slate-900 font-bold">
          Industria Conservera:
        </strong>{" "}
        Es el grano número uno a nivel mundial para el enlatado (canning).
        Soporta el autoclave industrial sin reventarse ni perder la piel.
      </span>,
      <span key="2">
        {" "}
        <strong className="text-slate-900 font-bold">
          Gastronomía Tex-Mex:
        </strong>{" "}
        Es el ingrediente base e indiscutible del clásico Chili con carne, así
        como del famoso plato Red Beans and Rice de Luisiana.
      </span>,
      <span key="3">
        {" "}
        <strong className="text-slate-900 font-bold">Ensaladas:</strong> Al
        enfriarse, su textura firme lo hace perfecto para ensaladas mixtas (como
        la clásica ensalada de tres frijoles), aportando un contraste de color
        espectacular.
      </span>,
      <span key="4">
        {" "}
        <strong className="text-slate-900 font-bold">
          Riesgo para Animales:
        </strong>{" "}
        De todas las variedades de Phaseolus, los porotos Kidney (especialmente
        el rojo) tienen la mayor concentración de fitohemaglutinina (PHA), una
        lectina altamente tóxica si se consume cruda, capaz de causar necrosis
        intestinal en monogástricos (cerdos y aves).
      </span>,
    ],

    // MODO DE USO
    usageModes: (
      <div className="flex flex-col gap-2">
        <p className="mb-4">
          {" "}
          Su resistencia estructural lo hace el favorito absoluto de ciertas
          industrias y gastronomías. Producto semielaborado para industrias
          elaboradoras de productos alimenticios.{" "}
          <strong className="text-slate-900 font-bold">
            {" "}
            No es de consumo directo.
          </strong>
        </p>

        <ul className="list-disc ml-4 space-y-2 mt-2">
          <li key="1">
            <strong className="text-slate-900 font-bold">
              Remojo previo (Hidratación):
            </strong>{" "}
            Obligatorio. Requiere de 8 a 12 horas de remojo en agua abundante.
          </li>

          <li key="2">
            <strong className="text-slate-900 font-bold">Cocción:</strong>{" "}
            Hervir el DRK a ebullición fuerte durante los primeros 10 a 15
            minutos para destruir completamente la toxina PHA. Luego, se baja el
            fuego y se cocina a fuego lento por 60 a 90 minutos adicionales. En
            olla a presión, luego de la ebullición inicial, toma unos 25 a 35
            minutos.
          </li>
        </ul>
      </div>
    ),

    // 3. CALIDAD
    generalReqs: (
      <div className="flex flex-col gap-2">
        <p className="mb-4">
          {" "}
          <strong className="text-slate-900">
            ► Resolución SENASA N° 228/21 - Anexo III
          </strong>{" "}
          (IF-2021-37591987-APN-DNIYCA#SENASA)
        </p>

        <ul className="list-disc ml-4 space-y-2 mt-2">
          <li key="1">
            <strong className="text-slate-900 font-bold">
              Humedad Máxima:
            </strong>{" "}
            15%
          </li>

          <li key="2">
            <strong className="text-slate-900 font-bold">
              Libre de insectos y/o aracnidos vivos
            </strong>
          </li>

          <li key="3">
            <strong className="text-slate-900 font-bold">
              Porotos Contrastantes Máximo:
            </strong>{" "}
            2%
          </li>

          <li key="4">
            <strong className="text-slate-900 font-bold">
              Porotos de Otras Clases Máximo:
            </strong>{" "}
            5%
          </li>
        </ul>
      </div>
    ),

    specificReqs: [
      <span key="1">
        {" "}
        <strong className="text-slate-900 font-bold">
          Cuerpos Extraños y/o Incomestibles Máximo:
        </strong>{" "}
        1%
      </span>,
      <span key="2">
        {" "}
        <strong className="text-slate-900 font-bold">
          Granos Manchados Máximo:
        </strong>{" "}
        1%
      </span>,
      <span key="3">
        {" "}
        <strong className="text-slate-900 font-bold">
          Granos Ligeramente Manchados Máximo:
        </strong>{" "}
        3%
      </span>,
    ],

    size: "El estándar comercial internacional suele exigir calibres de 180-240 granos por cada 100 gramos para calidades superiores, aunque pueden alcanzar los 250-300 granos/100g.",

    // 5. NUTRICIÓN
    nutrition: {
      calories: "333 kcal",
      carbs: "60.01 g",
      protein: "23.58 g",
      fat: "0.83 g",
      fiber: "24.90 g",
      phosphorus: "407 mg",
      iron: "8.20 mg",
      calcium: "143 mg",
      magnesium: "140 mg",
      potassium: "1406 mg",
      sodium: "24 mg",
      zinc: "2.79 mg",
    },
  },
  {
    slug: "poroto-colorado-lgt",
    name: "Poroto Colorado LIGHT",
    species: "Phaseolus vulgaris",
    image: "/images/productos/COLORADO_LIGHT.webp",

    // GENERALIDADES
    description:
      "Light Red Kidney (por sus siglas en inglés) pertenece a la misma familia genética que el DRK, pero se distingue por una menor pigmentación en su tegumento. Es un cultivo de alto valor comercial, con una demanda internacional fuertemente arraigada en el Caribe, Centroamérica y el sur de Europa. (De hecho, zonas agroecológicas como el Noroeste Argentino son polos fundamentales para la producción y exportación de este tipo de especialidades). Nutricionalmente, comparte el mismo perfil de excelencia que su variante oscura: es una fuente formidable de proteína vegetal, fibra, hierro, ácido fólico y carbohidratos de bajo índice glucémico, siendo un pilar para dietas que buscan saciedad y control metabólico.",
    characteristicsText: [
      <span key="1">
        {" "}
        <strong className="text-slate-900 font-bold">Morfología:</strong>{" "}
        Mantiene la clásica e inconfundible forma arriñonada (kidney), siendo un
        grano largo, ancho y algo aplanado en los laterales.
      </span>,
      <span key="2">
        {" "}
        <strong className="text-slate-900 font-bold">
          Anatomía de la semilla:
        </strong>{" "}
        La gran diferencia radica en su cubierta seminal (testa), que presenta
        un color rojo claro, rosado intenso o terracota pálido, liso y
        medianamente brillante. El interior (cotiledones) es crema o
        blanquecino.
      </span>,
      <span key="3">
        {" "}
        <strong className="text-slate-900 font-bold">
          Propiedades organolépticas:
        </strong>{" "}
        Su piel es marginalmente más fina que la del DRK, lo que le otorga una
        textura en boca ligeramente más suave y un interior notablemente más
        cremoso y harinoso una vez cocido. Su sabor es más sutil y menos terroso
        que el de la variante oscura.
      </span>,
      <span key="4">
        {" "}
        <strong className="text-slate-900 font-bold">
          Comportamiento culinario:
        </strong>{" "}
        Aunque retiene muy bien su forma estructural durante la cocción, libera
        un poco más de almidón que el DRK. Esto lo hace excepcional para espesar
        los caldos de cocción de manera natural, creando salsas densas y
        aterciopeladas.
      </span>,
    ],

    // CONSERVACIÓN
    conservation: [
      <span key="1">
        {" "}
        Es un grano altamente sensible a la fotodegradación. Requiere
        almacenamiento en instalaciones estrictamente oscuras, secas y frescas.
        La luz solar o artificial constante oxida la testa, transformando el
        rojo oscuro vibrante en un tono marrón opaco, lo cual deprecia
        automáticamente la mercadería.
      </span>,
      <span key="2">
        {" "}
        A nivel mayorista se maneja en bolsas de polipropileno o silos cerrados;
        para el consumidor o retail, exige envases opacos o almacenamiento en
        alacenas cerradas, protegido de la humedad.
      </span>,
    ],

    // VIDA UTIL
    shelfLife: [
      <span key="1">
        {" "}
        <strong className="text-slate-900 font-bold">Grano Seco:</strong>{" "}
        Mantiene su calidad comercial de 12 a 18 meses si se controla la
        temperatura y humedad. El almacenamiento deficiente provoca el
        endurecimiento del cotiledón (Hard-to-Cook).
      </span>,
      <span key="2">
        {" "}
        <strong className="text-slate-900 font-bold">Grano Cocido:</strong>{" "}
        Refrigerado adecuadamente (2 °C a 4 °C), se conserva de 3 a 5 días. Es
        ideal para congelación (-18 °C) por hasta 6 meses, ya que su piel gruesa
        evita que se rompa al descongelarse.
      </span>,
    ],

    // DESTINO Y MODO DE USO
    possibleUses: [
      <span key="1">
        {" "}
        <strong className="text-slate-900 font-bold">
          Industria Conservera:
        </strong>{" "}
        el LRK se enlata masivamente para los mercados hispanos, a menudo
        precocido en salsas a base de tomate y sofrito.
      </span>,
      <span key="2">
        {" "}
        <strong className="text-slate-900 font-bold">
          Gastronomía Caribeña:
        </strong>{" "}
        Es el alma de las clásicas "habichuelas guisadas" dominicanas y
        puertorriqueñas, y del famoso "Gallo Pinto" centroamericano (cuando no
        se hace con poroto negro).
      </span>,
      <span key="3">
        {" "}
        <strong className="text-slate-900 font-bold">
          Guisos y Sopas:
        </strong>{" "}
        Excelente para recetas de cocción lenta donde se busca que el poroto
        aporte cremosidad al plato final.
      </span>,
      <span key="4">
        {" "}
        <strong className="text-slate-900 font-bold">
          Riesgo para Animales:
        </strong>{" "}
        De todas las variedades de Phaseolus, los porotos Kidney (especialmente
        el rojo) tienen la mayor concentración de fitohemaglutinina (PHA), una
        lectina altamente tóxica si se consume cruda, capaz de causar necrosis
        intestinal en monogástricos (cerdos y aves).
      </span>,
    ],

    // MODO DE USO
    usageModes: (
      <div className="flex flex-col gap-2">
        <p className="mb-4">
          {" "}
          Es el favorito indiscutible de la cocina caribeña y latinoamericana,
          donde se busca un equilibrio entre un grano que mantenga su forma y un
          caldo que espese bien.{" "}
          <strong className="text-slate-900 font-bold">
            {" "}
            No es de consumo directo.
          </strong>
        </p>

        <ul className="list-disc ml-4 space-y-2 mt-2">
          <li key="1">
            <strong className="text-slate-900 font-bold">
              Remojo previo (Hidratación):
            </strong>{" "}
            Obligatorio. Requiere de 8 a 12 horas de remojo en agua abundante.
          </li>

          <li key="2">
            <strong className="text-slate-900 font-bold">Cocción:</strong>{" "}
            Hervir el Light a ebullición fuerte durante los primeros 10 a 15
            minutos para destruir completamente la toxina PHA. Luego, se baja el
            fuego y se cocina a fuego lento por 60 a 90 minutos adicionales. En
            olla a presión, luego de la ebullición inicial, toma unos 25 a 35
            minutos.
          </li>
        </ul>
      </div>
    ),

    // 3. CALIDAD
    generalReqs: (
      <div className="flex flex-col gap-2">
        <p className="mb-4">
          {" "}
          <strong className="text-slate-900">
            ► Resolución SENASA N° 228/21 - Anexo III
          </strong>{" "}
          (IF-2021-37591987-APN-DNIYCA#SENASA)
        </p>

        <ul className="list-disc ml-4 space-y-2 mt-2">
          <li key="1">
            <strong className="text-slate-900 font-bold">
              Humedad Máxima:
            </strong>{" "}
            15%
          </li>

          <li key="2">
            <strong className="text-slate-900 font-bold">
              Libre de insectos y/o aracnidos vivos
            </strong>
          </li>

          <li key="3">
            <strong className="text-slate-900 font-bold">
              Porotos Contrastantes Máximo:
            </strong>{" "}
            2%
          </li>

          <li key="4">
            <strong className="text-slate-900 font-bold">
              Porotos de Otras Clases Máximo:
            </strong>{" "}
            5%
          </li>
        </ul>
      </div>
    ),

    specificReqs: [
      <span key="1">
        {" "}
        <strong className="text-slate-900 font-bold">
          Cuerpos Extraños y/o Incomestibles Máximo:
        </strong>{" "}
        1%
      </span>,
      <span key="2">
        {" "}
        <strong className="text-slate-900 font-bold">
          Granos Manchados Máximo:
        </strong>{" "}
        1%
      </span>,
      <span key="3">
        {" "}
        <strong className="text-slate-900 font-bold">
          Granos Ligeramente Manchados Máximo:
        </strong>{" "}
        3%
      </span>,
    ],

    size: "Se aplican las mismas exigencias comerciales: los calibres de exportación rondan los 180-240 granos por cada 100 gramos para calidades superiores, aunque pueden alcanzar los 250-300 granos/100g.",

    // 5. NUTRICIÓN
    nutrition: {
      calories: "337 kcal",
      carbs: "60.29 g",
      protein: "23.53 g",
      fat: "1.06 g",
      fiber: "24.40 g",
      phosphorus: "406 mg",
      iron: "6.69 mg",
      calcium: "83 mg",
      magnesium: "138 mg",
      potassium: "1359 mg",
      sodium: "12 mg",
      zinc: "2.79 mg",
    },
  },
  {
    slug: "poroto-azuki",
    name: "Poroto Azuki",
    species: "Vigna Angularis",
    image: "/images/productos/AZUKI.webp",

    // GENERALIDADES
    description:
      "El poroto azuki (Vigna angularis), a veces escrito como adzuki, es una leguminosa originaria de Asia Oriental y fundamental en la dieta y cultura de países como Japón, China y Corea. Nutricionalmente, es una de las legumbres más nobles y de más fácil digestión. Destaca por su elevadísimo aporte de carbohidratos complejos, fibra soluble, proteínas de alta calidad y un perfil mineral rico en potasio, magnesio y zinc. Además, su coloración rojiza es indicativa de una gran concentración de antioxidantes, haciendo de este pequeño grano un superalimento altamente cotizado tanto en la gastronomía tradicional asiática como en las dietas macrobióticas y saludables de occidente.",
    characteristicsText: [
      <span key="1">
        {" "}
        <strong className="text-slate-900 font-bold">Morfología:</strong> Es un
        grano de tamaño pequeño a muy pequeño, de forma ovalada a casi
        cilíndrica, con bordes redondeados.
      </span>,
      <span key="2">
        {" "}
        <strong className="text-slate-900 font-bold">
          Anatomía de la semilla:
        </strong>{" "}
        Su cubierta seminal (testa) es de un color rojo oscuro brillante,
        granate o burdeos, y su rasgo más distintivo es una marcada línea blanca
        en el borde (el hilo) que contrasta fuertemente con el resto del grano.
        Sus cotiledones son de un tono claro y muy harinosos.
      </span>,
      <span key="3">
        {" "}
        <strong className="text-slate-900 font-bold">
          Propiedades organolépticas:
        </strong>{" "}
        Es famoso por su perfil de sabor único: marcadamente dulce, con notas
        pronunciadas a nuez y castaña. Su textura, una vez cocido, es sumamente
        suave y cremosa.
      </span>,
      <span key="4">
        {" "}
        <strong className="text-slate-900 font-bold">
          Comportamiento culinario:
        </strong>{" "}
        A diferencia de la mayoría de los porotos, el azuki tiene una tendencia
        natural a deshacerse suavemente si se prolonga la cocción, formando
        pastas densas y dulces con mucha facilidad.
      </span>,
    ],

    // CONSERVACIÓN
    conservation: [
      <span key="1">
        {" "}
        Requiere almacenamiento en instalaciones frescas, secas y alejadas de la
        luz directa. La humedad alta es su principal enemigo, ya que al ser un
        grano pequeño y con piel fina, puede absorber humedad rápidamente y
        desarrollar hongos.
      </span>,
      <span key="2">
        {" "}
        Idealmente conservado en envases herméticos si es para el consumidor
        final, asegurando un aislamiento total de los cambios de temperatura.
      </span>,
    ],

    // VIDA UTIL
    shelfLife: [
      <span key="1">
        {" "}
        <strong className="text-slate-900 font-bold">Grano Seco:</strong> En
        condiciones óptimas de acopio, mantiene su poder germinativo y su
        textura tierna durante 12 a 24 meses.
      </span>,
      <span key="2">
        {" "}
        <strong className="text-slate-900 font-bold">Grano Cocido:</strong>{" "}
        Refrigerado (2 °C a 4 °C), se conserva de 3 a 5 días. Las pastas dulces
        elaboradas con azuki pueden durar hasta una semana en la heladera, o
        congelarse perfectamente (-18 °C) por hasta 6 meses.
      </span>,
    ],

    // DESTINO Y MODO DE USO
    possibleUses: [
      <span key="1">
        {" "}
        <strong className="text-slate-900 font-bold">
          Repostería Asiática:
        </strong>{" "}
        Es el ingrediente base para elaborar Anko (pasta dulce de poroto rojo),
        utilizada para rellenar postres tradicionales japoneses y chinos como
        dorayakis, mochis, taiyakis y panes dulces al vapor.
      </span>,
      <span key="2">
        {" "}
        <strong className="text-slate-900 font-bold">
          Dietas Macrobióticas:
        </strong>{" "}
        Se consume habitualmente hervido junto con arroz integral (plato
        conocido como Sekihan en Japón) por su equilibrio perfecto entre yin y
        yang nutricional.
      </span>,
      <span key="3">
        {" "}
        <strong className="text-slate-900 font-bold">Guisos y Sopas:</strong> En
        occidente se utiliza mucho en guisados veganos, sopas densas o combinado
        con calabaza y algas (como la kombu), destacando por ser muy amigable
        con el sistema digestivo y no generar flatulencias.
      </span>,
      <span key="4">
        {" "}
        <strong className="text-slate-900 font-bold">
          Dieta para Animales:
        </strong>{" "}
        El descarte de la clasificación del poroto azuki (granos partidos,
        chuzos, manchados o bajo zaranda) representa una excelente fuente de
        energía y proteína para la industria de nutrición animal, aunque es un
        volumen menor frente a otras leguminosas de consumo masivo.
      </span>,
    ],

    // MODO DE USO
    usageModes: (
      <div className="flex flex-col gap-2">
        <p className="mb-4">
          {" "}
          Es el favorito indiscutible de la cocina caribeña y latinoamericana,
          donde se busca un equilibrio entre un grano que mantenga su forma y un
          caldo que espese bien.{" "}
          <strong className="text-slate-900 font-bold">
            {" "}
            No es de consumo directo.
          </strong>
        </p>

        <ul className="list-disc ml-4 space-y-2 mt-2">
          <li key="1">
            <strong className="text-slate-900 font-bold">
              Remojo previo (Hidratación):
            </strong>{" "}
            Obligatorio. Requiere de 8 a 12 horas de remojo en agua abundante.
          </li>

          <li key="2">
            <strong className="text-slate-900 font-bold">Cocción:</strong>{" "}
            Hervir el Light a ebullición fuerte durante los primeros 10 a 15
            minutos para destruir completamente la toxina PHA. Luego, se baja el
            fuego y se cocina a fuego lento por 60 a 90 minutos adicionales. En
            olla a presión, luego de la ebullición inicial, toma unos 25 a 35
            minutos.
          </li>
        </ul>
      </div>
    ),

    // 3. CALIDAD
    generalReqs: (
      <div className="flex flex-col gap-2">
        <p className="mb-4">
          {" "}
          <strong className="text-slate-900">
            ► Resolución SENASA N° 228/21 - Anexo III
          </strong>{" "}
          (IF-2021-37591987-APN-DNIYCA#SENASA)
        </p>

        <ul className="list-disc ml-4 space-y-2 mt-2">
          <li key="1">
            <strong className="text-slate-900 font-bold">
              Humedad Máxima:
            </strong>{" "}
            15%
          </li>

          <li key="2">
            <strong className="text-slate-900 font-bold">
              Libre de insectos y/o aracnidos vivos
            </strong>
          </li>

          <li key="3">
            <strong className="text-slate-900 font-bold">
              Porotos Contrastantes Máximo:
            </strong>{" "}
            2%
          </li>

          <li key="4">
            <strong className="text-slate-900 font-bold">
              Porotos de Otras Clases Máximo:
            </strong>{" "}
            5%
          </li>
        </ul>
      </div>
    ),

    specificReqs: [
      <span key="1">
        {" "}
        <strong className="text-slate-900 font-bold">
          Cuerpos Extraños y/o Incomestibles Máximo:
        </strong>{" "}
        1%
      </span>,
      <span key="2">
        {" "}
        <strong className="text-slate-900 font-bold">
          Granos Manchados Máximo:
        </strong>{" "}
        1%
      </span>,
      <span key="3">
        {" "}
        <strong className="text-slate-900 font-bold">
          Granos Ligeramente Manchados Máximo:
        </strong>{" "}
        3%
      </span>,
    ],

    size: "La mercadería de exportación de primera calidad suele retenerse sobre zarandas de 3 mm a 5 mm (95% sobre zaranda). Los granos que pasan por debajo de 3 mm se consideran descarte o industria. Al ser tan pequeño, el conteo por gramaje es alto. Lotes de buena calidad comercial pueden rondar los 500 a 600 granos por cada 100 gramos.",

    // 5. NUTRICIÓN
    nutrition: {
      calories: "329 kcal",
      carbs: "60.90 g",
      protein: "19.87 g",
      fat: "0.53 g",
      fiber: "12.70 g",
      phosphorus: "381 mg",
      iron: "4.98 mg",
      calcium: "66 mg",
      magnesium: "127 mg",
      potassium: "1254 mg",
      sodium: "5 mg",
      zinc: "5.04 mg",
    },
  },
  {
    slug: "garbanzo",
    name: "Garbanzo",
    species: "Cicer Arietinum",
    image: "/images/productos/GARBANZO.webp",

    // GENERALIDADES
    description:
      "leguminosa de invierno de enorme importancia global, originaria del Mediterráneo y Medio Oriente. Agronómicamente, es un cultivo rústico y una excelente alternativa para la rotación de siembras. Desde el punto de vista nutricional, se distingue del resto de las legumbres por tener un mayor porcentaje de lípidos (grasas saludables), además de ser una fuente excepcional de proteínas, carbohidratos de asimilación lenta, fibra dietética y folato. Comercialmente, se divide en dos grandes biotipos: el Kabuli (grano grande, claro, destinado al consumo humano y exportación premium) y el Desi (grano pequeño, oscuro y rugoso, de uso más local en Asia o forrajero).",
    characteristicsText: [
      <span key="1">
        {" "}
        <strong className="text-slate-900 font-bold">Morfología:</strong>{" "}
        Presenta una forma esférica o globular, pero con una característica
        protuberancia en un extremo que le da un aspecto similar a un "pico" o a
        la cabeza de un carnero (de ahí su nombre arietinum).
      </span>,
      <span key="2">
        {" "}
        <strong className="text-slate-900 font-bold">
          Anatomía de la semilla:
        </strong>{" "}
        En el biotipo comercial Kabuli, la cubierta seminal (testa) es de color
        crema, beige claro o amarillento, con una superficie que presenta
        arrugas o surcos superficiales. Sus gruesos cotiledones son de un
        amarillo pálido.
      </span>,
      <span key="3">
        {" "}
        <strong className="text-slate-900 font-bold">
          Propiedades organolépticas:
        </strong>{" "}
        Una vez cocido, desarrolla una textura carnosa, mantecosa y densa, pero
        mantiene una firmeza estructural excelente. Su perfil de sabor es
        inconfundible: rústico, profundo y con marcadas notas a nuez.
      </span>,
      <span key="4">
        {" "}
        <strong className="text-slate-900 font-bold">
          Comportamiento culinario:
        </strong>{" "}
        Es un grano de paredes celulares muy fuertes. A diferencia de los
        porotos que pueden deshacerse en un guiso, el garbanzo requiere tiempos
        precisos para ablandarse, pero una vez logrado, no se desintegra
        fácilmente, lo que lo hace ideal para cocciones prolongadas. Su líquido
        de cocción, rico en proteínas y almidones, se conoce como aquafaba y es
        un espesante y emulsionante natural de alto valor en la industria
        plant-based.
      </span>,
    ],

    // CONSERVACIÓN
    conservation: [
      <span key="1">
        {" "}
        Requiere almacenamiento en instalaciones frescas, secas y bien
        ventiladas. La humedad es crítica: si el grano se guarda con más del
        12-13% de humedad, corre alto riesgo de desarrollar hongos o de
        oscurecerse (pardeamiento enzimático), bajando su categoría comercial.
      </span>,
      <span key="2">
        {" "}
        A granel se acopia en silos aireados o silobolsas. Para el consumidor,
        en envases herméticos.
      </span>,
      <span key="3">
        {" "}
        Es la legumbre más atacada por el gorgojo del garbanzo (Callosobruchus
        maculatus). Es mandatorio el control de plagas y el uso de envases
        seguros, ya que este insecto perfora el grano y lo vacía desde adentro.
      </span>,
    ],

    // VIDA UTIL
    shelfLife: [
      <span key="1">
        {" "}
        <strong className="text-slate-900 font-bold">Grano Seco:</strong>{" "}
        Almacenado correctamente, mantiene su calidad culinaria y viabilidad de
        12 a 24 meses. Un garbanzo viejo requiere muchísimo más tiempo de fuego
        para ablandarse (fenómeno Hard-to-Cook).
      </span>,
      <span key="2">
        {" "}
        <strong className="text-slate-900 font-bold">Grano Cocido:</strong>{" "}
        Refrigerado en recipientes cerrados (2 °C a 4 °C), se conserva de 3 a 5
        días. Permite la congelación (-18 °C) por hasta 6 meses, manteniendo muy
        bien su textura si se congela inmerso en su líquido de cocción.
      </span>,
    ],

    // DESTINO Y MODO DE USO
    possibleUses: [
      <span key="1">
        {" "}
        <strong className="text-slate-900 font-bold">Hummus:</strong> Es la base
        indiscutida del Hummus (puré de garbanzo con tahini, limón y ajo).
      </span>,
      <span key="2">
        {" "}
        <strong className="text-slate-900 font-bold">Frituras:</strong> Es el
        ingrediente principal del Falafel, el cual tiene la particularidad de
        prepararse moliendo el garbanzo crudo pero hidratado (nunca hervido),
        que luego se condimenta y se fríe.
      </span>,
      <span key="3">
        {" "}
        <strong className="text-slate-900 font-bold">
          Guisos y Sopas:
        </strong>{" "}
        Usado para el tradicional "Cocido Madrileño", mondongos y potajes de
        invierno.
      </span>,
      <span key="4">
        {" "}
        <strong className="text-slate-900 font-bold">
          Dieta para Animales:
        </strong>{" "}
        El descarte de la clasificación del garbanzo (granos partidos, picados,
        manchados o bajo zaranda) representa una excelente fuente de energía y
        proteína para la industria de nutrición animal, En rumiantes, puede
        suministrarse crudo o simplemente partido. Para aves y cerdos, aunque
        presenta factores antinutricionales, un leve tratamiento térmico
        maximiza la digestibilidad de su proteína.
      </span>,
      <span key="5">
        {" "}
        <strong className="text-slate-900 font-bold">
          Harinas (Sin TACC):
        </strong>{" "}
        Al moler el grano seco y crudo se obtiene la "harina de garbanzo",
        fundamental en la cocina india (conocida como Besan) y en el Río de la
        Plata para la elaboración de la clásica Fainá.
      </span>,
      <span key="6">
        {" "}
        <strong className="text-slate-900 font-bold">Snacks:</strong> Tostados o
        fritos, se consumen como aperitivos crujientes altamente proteicos.
      </span>,
    ],

    // MODO DE USO
    usageModes: (
      <div className="flex flex-col gap-2">
        <p className="mb-4">
          {" "}
          Es el favorito de la cocina de Medio Oriente y Mediterraneo{" "}
          <strong className="text-slate-900 font-bold">
            {" "}
            No es de consumo directo.
          </strong>
        </p>

        <ul className="list-disc ml-4 space-y-2 mt-2">
          <li key="1">
            <strong className="text-slate-900 font-bold">
              Remojo previo (Hidratación):
            </strong>{" "}
            Obligatorio y prolongado. Requiere de 12 a 24 horas en abundante
            agua. En zonas de aguas muy "duras" (con alto contenido de calcio y
            magnesio), se suele agregar una pizca de bicarbonato de sodio al
            agua de remojo para ayudar a debilitar la pectina de la piel y
            asegurar un ablandamiento parejo.
          </li>
          <li key="2">
            <strong className="text-slate-900 font-bold">Cocción:</strong> Por
            hervido tradicional a fuego lento, puede tomar entre 90 y 120
            minutos. En olla a presión, el tiempo se reduce a unos 35 a 45
            minutos.
          </li>
        </ul>
      </div>
    ),

    // 3. CALIDAD
    generalReqs: (
      <div className="flex flex-col gap-2">
        <p className="mb-4">
          {" "}
          <strong className="text-slate-900">
            ► Resolución Resolución SAGyP N° 48/2025
          </strong>
        </p>

        <ul className="list-disc ml-4 space-y-2 mt-2">
          <li key="1">
            <strong className="text-slate-900 font-bold">
              Humedad Máxima:
            </strong>{" "}
            13%
          </li>

          <li key="2">
            <strong className="text-slate-900 font-bold">
              Libre de insectos y/o aracnidos vivos
            </strong>
          </li>

          <li key="3">
            <strong className="text-slate-900 font-bold">
              Contrastantes/Otras Clases Máximo:
            </strong>{" "}
            2%
          </li>
        </ul>
      </div>
    ),

    specificReqs: [
      <span key="1">
        {" "}
        <strong className="text-slate-900 font-bold">
          Cuerpos Extraños y/o Incomestibles Máximo:
        </strong>{" "}
        2%
      </span>,
      <span key="2">
        {" "}
        <strong className="text-slate-900 font-bold">
          Defectos y Manchados Máximo:
        </strong>{" "}
        3%
      </span>,
      <span key="3">
        {" "}
        <strong className="text-slate-900 font-bold">
          Granos Verdes Máximo:
        </strong>{" "}
        2%
      </span>,
    ],

    size: "el garbanzo se comercializa casi universalmente por su retención en zarandas de 4.5 mm a 7 mm, dependiendo del mercado destino. Para exportación premium, se exige que al menos el 95% de los granos retengan sobre zaranda de 5 mm. En algunos casos los calibres aún mayores (8-10 mm) son destinados al mercado interno o al nicho gourmet.",

    // 5. NUTRICIÓN
    nutrition: {
      calories: "378 kcal",
      carbs: "62.95 g",
      protein: "20.47 g",
      fat: "6.04 g",
      fiber: "12.20 g",
      phosphorus: "252 mg",
      iron: "4.31 mg",
      calcium: "57 mg",
      magnesium: "79 mg",
      potassium: "718 mg",
      sodium: "24 mg",
      zinc: "2.76 mg",
    },
  },
  {
    slug: "chia",
    name: "Chía",
    species: "Salvia hispanica",
    image: "/images/productos/CHIA.webp",

    // GENERALIDADES
    description:
      "semilla oleaginosa originaria de América Central que ha experimentado un auge explosivo a nivel global por su estatus de superalimento. Es la mayor fuente vegetal conocida de ácidos grasos esenciales Omega-3 (ácido alfa-linolénico), además de aportar un altísimo porcentaje de fibra dietética, antioxidantes y proteínas de alto valor biológico. Agronómicamente, es un cultivo de ciclo estival muy bien adaptado a las condiciones de la región del NOA argentino, el cual se ha consolidado como un polo productivo y exportador de excelente calidad.",
    characteristicsText: [
      <span key="1">
        {" "}
        <strong className="text-slate-900 font-bold">Morfología:</strong> Es una
        semilla minúscula, de forma ovalada y ligeramente aplanada, con un
        tamaño que ronda los 2 milímetros de largo.
      </span>,
      <span key="2">
        {" "}
        <strong className="text-slate-900 font-bold">
          Anatomía de la semilla:
        </strong>{" "}
        Su cubierta seminal presenta un patrón jaspeado o moteado
        característico. Dependiendo de la variedad y la pureza genética, los
        colores varían entre el gris oscuro, negro, marrón y blanco.
        Comercialmente, la chía negra/grisácea y la chía blanca tienen el mismo
        perfil nutricional, aunque la blanca a veces alcanza un sobreprecio por
        cuestiones meramente estéticas en la industria alimentaria.
      </span>,
      <span key="3">
        {" "}
        <strong className="text-slate-900 font-bold">
          Propiedades organolépticas:
        </strong>{" "}
        En crudo tiene un sabor suave y una textura ligeramente crujiente. Su
        potencial se desata al ser tostado, desarrollando un aroma profundo y un
        marcado sabor a nuez tostada, perdiendo cualquier rasgo de amargor
        propio de la cáscara.
      </span>,
    ],

    // CONSERVACIÓN
    conservation: [
      <span key="1">
        {" "}
        Exige acopio en instalaciones muy frescas, estrictamente secas y
        protegidas de la luz solar directa. Las altas temperaturas oxidan sus
        ácidos grasos rápidamente.
      </span>,
      <span key="2">
        {" "}
        A granel requiere silos con estricto control de humedad (debe
        almacenarse por debajo del 6% de humedad). Para comercialización
        minorista, son vitales los envases laminados o bolsas herméticas.
      </span>,
    ],

    // VIDA UTIL
    shelfLife: [
      <span key="1">
        {" "}
        <strong className="text-slate-900 font-bold">Semilla Seca:</strong>{" "}
        Conservada en condiciones óptimas, mantiene su viabilidad y sabor de 12
        a 18 meses.
      </span>,
      <span key="2">
        {" "}
        <strong className="text-slate-900 font-bold">
          Semilla Descortezada o Tostada:
        </strong>{" "}
        Al perder su capa protectora o someter sus aceites al calor, la vida
        útil cae drásticamente. Debe consumirse idealmente dentro de los 3 a 6
        meses y requiere refrigeración o envasado al vacío para evitar la
        oxidación.
      </span>,
    ],

    // DESTINO Y MODO DE USO
    possibleUses: [
      <span key="1">
        {" "}
        <strong className="text-slate-900 font-bold">
          Pastas Untables:
        </strong>{" "}
        Es el único ingrediente del Tahini (pasta de sésamo tostado y molido),
        fundamental para la elaboración del hummus de garbanzo y el babaganoush.
      </span>,
      <span key="2">
        {" "}
        <strong className="text-slate-900 font-bold">
          Repostería y Panificación:
        </strong>{" "}
        Uso masivo como cobertura (topping) en panes de hamburguesa, grisines,
        galletas y panes integrales.
      </span>,
      <span key="3">
        {" "}
        <strong className="text-slate-900 font-bold">
          Gastronomía Asiática:
        </strong>{" "}
        Indispensable en el sushi (como cobertura de los rolls uramaki),
        ensaladas, salteados al wok y para la extracción de aceite de sésamo
        tostado (un condimento premium).
      </span>,
      <span key="4">
        {" "}
        <strong className="text-slate-900 font-bold">
          Dieta para Animales:
        </strong>{" "}
        La industria forrajera aprovecha principalmente el expeller de sésamo
        (sobrante tras la extracción mecánica de su aceite para uso culinario) o
        bien, el descarte de zaranda (semillas fuera de calibre o manchadas).
      </span>,
      <span key="5">
        {" "}
        <strong className="text-slate-900 font-bold">
          Dulces Tradicionales:
        </strong>{" "}
        Base para la elaboración del Halva (turrón de Medio Oriente) y golosinas
        aglutinadas con miel o caramelo.
      </span>,
    ],

    // MODO DE USO
    usageModes: (
      <div className="flex flex-col gap-2">
        <p className="mb-4">
          {" "}
          Es un pilar tanto en la industria panadera occidental como en la
          gastronomía asiática y de Medio Oriente.{" "}
          <strong className="text-slate-900 font-bold">
            {" "}
            Materia prima de grado alimenticio apta para consumo directo, o para
            su integración como ingrediente.
          </strong>
        </p>

        <ul className="list-disc ml-4 space-y-2 mt-2">
          <li key="1">
            <strong className="text-slate-900 font-bold">
              Activación (Hidratación):
            </strong>{" "}
            Es el método más recomendado. Consiste en mezclar la chía con agua,
            leche o jugos y dejarla reposar de 15 a 30 minutos (o toda la noche)
            para que libere su mucílago. Esto maximiza la absorción de
            nutrientes en el tracto digestivo.
          </li>
          <li key="2">
            <strong className="text-slate-900 font-bold">Molienda:</strong>{" "}
            Consumirla molida (harina de chía) es la única forma de garantizar
            que el cuerpo asimile sus ácidos grasos Omega-3, ya que la semilla
            entera muchas veces pasa intacta por el sistema digestivo.
          </li>
        </ul>
      </div>
    ),

    // 3. CALIDAD
    generalReqs: (
      <div className="flex flex-col gap-2">
        <p className="mb-4">
          {" "}
          <strong className="text-slate-900">
            ► Codigo Alimentario de la Republica Argentina (CAA) Capítulo XI |
            Art 918. Resolución Conjunta SPRel N°169/2013 y SAGyP N° 230/2013
          </strong>
        </p>

        <ul className="list-disc ml-4 space-y-2 mt-2">
          <li key="1">
            <strong className="text-slate-900 font-bold">
              Humedad Máxima:
            </strong>{" "}
            7%
          </li>

          <li key="2">
            <strong className="text-slate-900 font-bold">
              Libre de insectos y/o aracnidos vivos
            </strong>
          </li>
        </ul>
      </div>
    ),

    specificReqs: [
      <span key="1">
        {" "}
        <strong className="text-slate-900 font-bold">
          Cuerpos Extraños y/o Incomestibles Máximo:
        </strong>{" "}
        1%
      </span>,
      <span key="2">
        {" "}
        <strong className="text-slate-900 font-bold">
          Semillas Dañadas Máximo:
        </strong>{" "}
        0.5%
      </span>,
      <span key="3">
        {" "}
        <strong className="text-slate-900 font-bold">
          Materia Grasa Mínima:
        </strong>{" "}
        33%
      </span>,
    ],

    size: "La semilla mide entre 2 a 3 milímetros de largo y aproximadamente 1.5 milímetros de ancho. Se utilizan zarandas de orificios redondos de 1.5 mm a 2.0 mm. Las semillas que quedan por debajo de este calibre (chuzas o vanas) se descartan. Al igual que la chía, el mercado de exportación y consumo humano no se rige por gramaje, sino por pureza, exigiendo lotes con un 99.9% de pureza.",

    // 5. NUTRICIÓN
    nutrition: {
      calories: "486 kcal",
      carbs: "42.12 g",
      protein: "16.54 g",
      fat: "30.74 g",
      fiber: "34.40 g",
      phosphorus: "860 mg",
      iron: "7.72 mg",
      calcium: "631 mg",
      magnesium: "335 mg",
      potassium: "407 mg",
      sodium: "16 mg",
      zinc: "4.58 mg",
    },
  },
  {
    slug: "sesamo",
    name: "Sésamo",
    species: "Sesamum indicum",
    image: "/images/productos/SESAMO.webp",

    // GENERALIDADES
    description:
      "El sésamo o ajonjolí es una de las semillas oleaginosas más antiguas cultivadas por la humanidad. Agronómicamente, es un cultivo estival de gran rusticidad y excelente tolerancia a la sequía, consolidándose como una alternativa productiva estratégica y de alto valor en regiones cálidas como el NOA argentino. Desde el punto de vista nutricional y agroindustrial, es un producto excepcional: contiene cerca de un 50% de aceites de altísima calidad (ricos en ácidos grasos oleico y linoleico), además de aportar un 20-25% de proteína vegetal, altos niveles de calcio, hierro y lignanos antioxidantes exclusivos como la sesamina y el sesamol.",
    characteristicsText: [
      <span key="1">
        {" "}
        <strong className="text-slate-900 font-bold">Morfología:</strong> Es una
        semilla minúscula, aplanada y con una distintiva forma de lágrima o
        gota.
      </span>,
      <span key="2">
        {" "}
        <strong className="text-slate-900 font-bold">
          Anatomía de la semilla:
        </strong>{" "}
        Su coloración exterior depende de la variedad genética. El mercado
        domina con el sésamo blanco/crema (el más cotizado para panadería), pero
        también existen variedades de sésamo negro, marrón y rojizo.
        Comercialmente se presenta en dos formas: integral (con su cutícula
        exterior) o descortezado/pelado (se retira la fina piel para lograr un
        color blanco puro y un sabor más suave).
      </span>,
      <span key="3">
        {" "}
        <strong className="text-slate-900 font-bold">
          Propiedades organolépticas:
        </strong>{" "}
        En seco, es crujiente y de sabor sumamente neutro, con ligeras notas a
        nuez.
      </span>,
      <span key="4">
        {" "}
        <strong className="text-slate-900 font-bold">
          Comportamiento culinario:
        </strong>{" "}
        Su rasgo físico-químico más extraordinario es su capacidad hidrofílica.
        Al entrar en contacto con líquidos, la fibra soluble de su capa exterior
        absorbe hasta 12 veces su peso en agua, formando rápidamente un gel
        denso y translúcido conocido como mucílago.
      </span>,
    ],

    // CONSERVACIÓN
    conservation: [
      <span key="1">
        {" "}
        Al ser una semilla con casi un 30% de aceite en su interior (altamente
        insaturado), es muy susceptible a la oxidación y al enranciamiento.
        Exige almacenamiento en lugares muy frescos, estrictamente secos y al
        resguardo total de la luz solar.
      </span>,
      <span key="2">
        {" "}
        A nivel industrial se acopia en silos controlados. Para comercialización
        fraccionada, son ideales los envases laminados o bolsas de polietileno
        de alta densidad.
      </span>,
    ],

    // VIDA UTIL
    shelfLife: [
      <span key="1">
        {" "}
        <strong className="text-slate-900 font-bold">Semilla Seca:</strong>{" "}
        Gracias a su altísimo nivel natural de antioxidantes (como el ácido
        clorogénico y cafeico), la semilla entera protege sus propios aceites,
        logrando una vida útil de 2 a 3 años en condiciones óptimas.
      </span>,
      <span key="2">
        {" "}
        <strong className="text-slate-900 font-bold">
          Semilla Molida o Hidratada:
        </strong>{" "}
        Una vez molida (rompiendo su cápsula protectora), sus aceites se oxidan
        rápidamente; debe consumirse en pocas semanas y guardarse refrigerada.
        El gel de chía (hidratado) dura apenas 3 a 5 días en la heladera.
      </span>,
    ],

    // DESTINO Y MODO DE USO
    possibleUses: [
      <span key="1">
        {" "}
        <strong className="text-slate-900 font-bold">
          Bebidas y Desayunos:
        </strong>{" "}
        Base de los populares puddings de chía, batidos energéticos y yogures.
      </span>,
      <span key="2">
        {" "}
        <strong className="text-slate-900 font-bold">
          Repostería y Panificación:
        </strong>{" "}
        Se incorpora entera en masas de pan multicereal para aportar textura
        crujiente.
      </span>,
      <span key="3">
        {" "}
        <strong className="text-slate-900 font-bold">
          Sustituto Vegano del Huevo:
        </strong>{" "}
        Gracias a su mucílago, la mezcla de 1 cucharada de chía molida con 3
        cucharadas de agua (reposada 15 minutos) aglutina las masas de la misma
        manera que lo hace un huevo, siendo ideal para galletas y budines
        plant-based.
      </span>,
      <span key="4">
        {" "}
        <strong className="text-slate-900 font-bold">
          Dieta para Animales:
        </strong>{" "}
        Generalmente se utiliza el expeller de chía (el subproducto sólido que
        queda tras la extracción mecánica de su aceite) o lotes de semilla de
        descarte que no alcanzan el 99% de pureza comercial.
      </span>,
    ],

    // MODO DE USO
    usageModes: (
      <div className="flex flex-col gap-2">
        <p className="mb-4">
          {" "}
          La versatilidad de la chía le permite integrarse en casi cualquier
          preparación sin alterar los sabores originales del plato.{" "}
          <strong className="text-slate-900 font-bold">
            {" "}
            Materia prima de grado alimenticio apta para consumo directo, o para
            su integración como ingrediente.
          </strong>
        </p>

        <ul className="list-disc ml-4 space-y-2 mt-2">
          <li key="1">
            <strong className="text-slate-900 font-bold">
              Activación (Hidratación):
            </strong>{" "}
            Es el método más recomendado. Consiste en mezclar la chía con agua,
            leche o jugos y dejarla reposar de 15 a 30 minutos (o toda la noche)
            para que libere su mucílago. Esto maximiza la absorción de
            nutrientes en el tracto digestivo.
          </li>
          <li key="2">
            <strong className="text-slate-900 font-bold">Molienda:</strong>{" "}
            Consumirla molida (harina de chía) es la única forma de garantizar
            que el cuerpo asimile sus ácidos grasos Omega-3, ya que la semilla
            entera muchas veces pasa intacta por el sistema digestivo.
          </li>
        </ul>
      </div>
    ),

    // 3. CALIDAD
    generalReqs: (
      <div className="flex flex-col gap-2">
        <p className="mb-4">
          {" "}
          <strong className="text-slate-900">
            ► Codigo Alimentario de la Republica Argentina (CAA) Capítulo XI |
            Art 917. Resolución Conjunta N°31/2023 (emitida por SCS y SAGyP)
          </strong>
        </p>

        <ul className="list-disc ml-4 space-y-2 mt-2">
          <li key="1">
            <strong className="text-slate-900 font-bold">
              Humedad Máxima:
            </strong>{" "}
            7%
          </li>

          <li key="2">
            <strong className="text-slate-900 font-bold">
              Libre de insectos y/o aracnidos vivos
            </strong>
          </li>
        </ul>
      </div>
    ),

    specificReqs: [
      <span key="1">
        {" "}
        <strong className="text-slate-900 font-bold">
          Cuerpos Extraños y/o Incomestibles Máximo:
        </strong>{" "}
        1%
      </span>,
      <span key="2">
        {" "}
        <strong className="text-slate-900 font-bold">
          Semillas Dañadas Máximo:
        </strong>{" "}
        0.5%
      </span>,
      <span key="3">
        {" "}
        <strong className="text-slate-900 font-bold">
          Materia Grasa Mínima:
        </strong>{" "}
        33%
      </span>,
    ],

    size: "Para la limpieza, clasificación y estandarización del lote se utilizan zarandas de orificios redondos de 1 a 1,5 mm. A través de este riguroso proceso de zarandeo (y posterior paso por mesas densimétricas), se logran las calidades de Exportación o Premium, alcanzando una pureza de la semilla que ronda entre el 98.9% y el 99.9%.",

    // 5. NUTRICIÓN
    nutrition: {
      calories: "573 kcal",
      carbs: "23.45 g",
      protein: "17.73 g",
      fat: "49.67 g",
      fiber: "11.80 g",
      phosphorus: "629 mg",
      iron: "14.55 mg",
      calcium: "975 mg",
      magnesium: "351 mg",
      potassium: "468 mg",
      sodium: "11 mg",
      zinc: "7.75 mg",
    },
  },
];

export function getProductBySlug(slug: string) {
  return productsData.find(
    (product) => product.slug.toLowerCase() === slug.toLowerCase(),
  );
}
