import type { TemaData } from "../componentes/PlantillaTema";

export const disenoSistemasData: TemaData = {
  id: "diseno-sistemas",
  titulo: "1.1. Diseño de Sistemas Operativos Modernos",
  bloques: [
    {
      tipo: "texto",
      contenido:
        "Cuando analizamos el software que hace funcionar una computadora, solemos pensar en sistemas tradicionales instalados por completo en el almacenamiento local, los cuales actúan como la capa de abstracción definitiva entre el hardware físico y las aplicaciones del usuario. Sin embargo, con la evolución de la tecnología hacia la informática en la nube y la necesidad de equipos más ligeros para entornos educativos y empresariales, han surgido arquitecturas especializadas como ChromeOS.",
    },
    {
      tipo: "subtitulo",
      contenido: "El enfoque minimalista de ChromeOS",
    },
    {
      tipo: "texto",
      contenido:
        "Este sistema fue desarrollado por Google bajo una idea muy clara: apostar por un diseño minimalista donde el navegador web funciona como la interfaz principal. En lugar de saturar el hardware con programas pesados que se ejecutan de manera local, la plataforma prioriza la conectividad y el uso de la nube para almacenar los archivos del usuario, reduciendo drásticamente la carga sobre los componentes físicos del equipo.",
    },
    {
      tipo: "texto",
      contenido:
        "Gracias a esto, una laptop con especificaciones modestas puede arrancar en cuestión de segundos y consumir una cantidad mínima de recursos de memoria RAM y procesamiento. Lejos de buscar las mismas funciones que un sistema de escritorio clásico, ChromeOS reestructura sus capas internas para mantener la velocidad, simplificar el mantenimiento rutinario y proteger la información mediante un aislamiento estricto de procesos, un arranque verificado y un uso sumamente eficiente del hardware.",
    },
  ],
};
