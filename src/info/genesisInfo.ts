import type { TemaData } from "../componentes/PlantillaTema";

export const genesisData: TemaData = {
  id: "genesis",
  titulo: "2. Génesis y Anuncio Oficial ",
  bloques: [
     {
      tipo: "texto",
      contenido:
        "Google anunció formalmente el proyecto Chrome OS el 7 de julio de 2009. En su presentación inicial, la compañía dejó claro que el sistema no estaba concebido como un reemplazo inmediato para todos los sistemas operativos existentes, sino como una respuesta específica al auge de las netbooks y los dispositivos portátiles económicos utilizados principalmente para navegar por internet.",
    },
    {
      tipo: "subtitulo",
      contenido: "2.1 Los pilares fundamentales del diseño inicial:",
    },
    {
        tipo:"lista",
        contenido:[
            "Velocidad y Ligereza: El sistema fue optimizado para arrancar en cuestión de segundos y reanudar la actividad de forma instantánea, eliminando los tiempos muertos asociados a los sistemas tradicionales.",
            "El navegador como núcleo: La premisa arquitectónica central establecía que \"la ventana principal de trabajo es el navegador web\". En sus primeros años, prácticamente todas las tareas debían realizarse a través de Google Chrome y aplicaciones web basadas en estándares abiertos como HTML5.",
            "Seguridad por diseño: Al depender fundamentalmente de la web y ejecutar las pestañas del navegador en entornos aislados, se reducía de manera drástica la vulnerabilidad frente a virus informáticos y programas maliciosos tradicionales."
        ]
    },
    ]
}