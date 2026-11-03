import type { TemaData } from "../componentes/PlantillaTema";

export const evolucionData: TemaData = {
  id: "evolucion",
  titulo: "4. Evolución e hitos de maduración ",
  bloques: [
     {
      tipo: "texto",
      contenido:
        "A pesar de los retos iniciales, Google continuó iterando sobre el sistema operativo, transformándolo gradualmente desde un navegador glorificado hasta un sistema operativo híbrido y robusto capaz de competir en los sectores educativo, corporativo y de consumo general.",
    },
    {
      tipo: "subtitulo",
      contenido: "4.1 La transición hacia el modo sin conexión (Offline)",
    },
    {
        tipo: "texto",
        contenido:"Para solucionar la principal limitación de sus primeros años, Google implementó progresivamente capacidades de trabajo sin conexión. Mediante el almacenamiento en caché local y tecnologías web avanzadas, herramientas como Google Docs, Sheets y Gmail permitieron a los usuarios redactar documentos, gestionar correos y hojear hojas de cálculo sin estar conectados, sincronizando los cambios automáticamente al restablecerse la conexión a internet."
    },
     {
      tipo: "subtitulo",
      contenido: "4.2 Integración de aplicaciones de Android",
    },
      {
        tipo: "texto",
        contenido:"Uno de los puntos de inflexión más importantes en la historia de Chrome OS ocurrió en 2016, cuando Google anunció la integración gradual de Google Play Store en el sistema operativo."
    },
    {
        tipo:"lista",
        contenido:[
           "Esta actualización permitió a los usuarios descargar y ejecutar millones de aplicaciones móviles diseñadas originalmente para Android de forma nativa en sus Chromebooks.",
           "Con esto, el ecosistema de software se multiplicó exponencialmente, resolviendo la falta de herramientas de productividad offline, editores multimedia y videojuegos sin necesidad de recurrir exclusivamente a la web."
        ]
    },
     {
      tipo: "subtitulo",
      contenido: "4.3 Soporte para contenedores Linux - Proyecto Crostini )",
    },
     {
        tipo: "texto",
        contenido: "En su búsqueda por capturar la atención de desarrolladores, estudiantes de ingeniería y usuarios avanzados, Google introdujo en 2018 soporte nativo para ejecutar aplicaciones de Linux dentro de un contenedor seguro (conocido como Crostini)."
    },
     {
        tipo: "texto",
        contenido: "Esto abrió las puertas para que los usuarios instalaran entornos de desarrollo integrados (IDEs), herramientas de línea de comandos, compiladores y software científico directamente en Chrome OS, dotando al sistema de una versatilidad profesional sin precedentes."
     },
    
    ]
}