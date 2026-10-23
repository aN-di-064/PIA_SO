import type { TemaData } from "../componentes/PlantillaTema";

export const problemaSeleccionData: TemaData = {
  id: "problema-seleccion",
  titulo:
    "2.3. El Problema Fundamental de la Concurrencia y la Sección Crítica",
  bloques: [
    {
      tipo: "texto",
      contenido:
        "Cuando múltiples hilos o procesos se ejecutan de forma concurrente y comparten el acceso a variables, archivos o estructuras de datos comunes, surgen problemas críticos de integridad si el acceso a dichos recursos no está debidamente sincronizado.",
    },
    {
      tipo: "subtitulo",
      contenido: "2.3.1 Condiciones de Carrera (Race Conditions)",
    },
    {
      tipo: "texto",
      contenido:
        "Una condición de carrera ocurre cuando dos o más procesos leen y escriben en un dato compartido de manera concurrente, y el resultado final de la operación depende del orden exacto en que se intercalen las ejecuciones del procesador. Como la sincronización de las instrucciones a nivel de hardware depende de interrupciones impredecibles, el comportamiento del programa se vuelve no determinista y propenso a fallos erráticos e imposibles de replicar fácilmente.",
    },
    {
      tipo: "subtitulo",
      contenido: "2.3.2. La Sección Crítica",
    },
    {
      tipo: "texto",
      contenido:
        "Para prevenir las condiciones de carrera, se delimita conceptualmente la sección crítica. Esta es la porción de código dentro de un programa donde un proceso accede o modifica recursos compartidos (como variables globales, tablas o bases de datos en memoria).",
    },
    {
      tipo: "texto",
      contenido:
        "Para que cualquier sistema de concurrencia funcione de manera robusta, debe garantizar el cumplimiento estricto de cuatro condiciones fundamentales propuestas en la teoría de sistemas operativos:",
    },
    {
      tipo: "lista",
      contenido: [
        "Exclusión Mutua: Si un proceso se encuentra ejecutando su sección crítica, ningún otro proceso puede tener permiso para entrar en su propia sección crítica respecto al mismo recurso compartido.",
        "Progreso: Si ningún proceso está ejecutando su sección crítica y existen procesos que desean entrar, solo aquellos procesos que no estén ejecutando su sección de salida pueden participar en la decisión de quién entrará a continuación, y esta selección no puede posponerse indefinidamente.",
        "Espera Acotada (Ausencia de Inanición): Debe existir un límite estricto en el número de veces que otros procesos pueden entrar a sus secciones críticas después de que un proceso haya solicitado el acceso, asegurando que ningún hilo quede atrapado en una espera infinita.",
        "Independencia de Velocidad: Las soluciones no deben depender de suposiciones sobre las velocidades relativas de los procesadores físicos involucrados.",
      ],
    },
  ],
};
