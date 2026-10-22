import type { TemaData } from "../componentes/PlantillaTema";

export const historiaData: TemaData = {
  id: "historia",
  titulo: "Historia de los Sistemas Operativos",
  bloques: [
    { 
      tipo: "texto", 
      contenido: "Los primeros ordenadores no disponían de sistemas operativos. En la década de 1950, los programas interactuaban directamente con el hardware mediante tarjetas perforadas o tableros de conexiones." 
    },
    { 
      tipo: "imagen", 
      contenido: "https://via.placeholder.com/400x200" 
    },
    { 
      tipo: "subtitulo", 
      contenido: "Evolución hacia los Sistemas Modernos" 
    },
    { 
      tipo: "texto", 
      contenido: "Con el paso del tiempo, surgió la necesidad de automatizar la ejecución de tareas consecutivas, dando origen a los sistemas de procesamiento por lotes y posteriormente a la multiprogramación y tiempo compartido." 
    },
    { 
      tipo: "subtitulo", 
      contenido: "¿Cuál fue el impacto de Unix y C?"
    },
    { 
      tipo: "texto", 
      contenido: "La reescritura de Unix en lenguaje C a principios de los años 70 permitió que el sistema operativo fuera portable entre diferentes arquitecturas de hardware, estableciendo los cimientos de la informática moderna." 
    }
  ]
};