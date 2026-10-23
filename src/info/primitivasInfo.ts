import type { TemaData } from "../componentes/PlantillaTema";

export const primitivasData: TemaData = {
  id: "primitivas",
  titulo: "2.5. Primitivas de Sincronización en Sistemas Operativos Modernos",
  bloques: [
    {
      tipo: "texto",
      contenido:
        "Para evitar el desperdicio de recursos provocado por la espera activa y simplificar la programación concurrente, los sistemas operativos modernos proveen herramientas de sincronización avanzadas integradas directamente en el núcleo.",
    },
    {
      tipo: "subtitulo",
      contenido: "2.5.1 Semáforos",
    },
    {
      tipo: "texto",
      contenido:
        "Inventados por Edsger Dijkstra, los semáforos son variables enteras protegidas que actúan como mecanismos de control de acceso a recursos compartidos. A diferencia de las simples banderas booleanas, un semáforo solo puede ser modificado mediante dos operaciones atómicas estándar e indivisibles:",
    },
    {
      tipo: "lista",
      contenido: [
        "wait() (originalmente denominada P): Decrementa el valor del semáforo. Si el valor resultante es menor que cero, el proceso que ejecuta la operación se bloquea automáticamente y se inserta en la cola de espera asociada al semáforo, liberando la CPU para otras tareas útiles.",
        "signal() (originalmente denominada V): Incrementa el valor del semáforo. Si hay procesos bloqueados en la cola de espera, se despierta a uno de ellos mediante un cambio de estado hacia la cola de listos.",
      ],
    },
    {
      tipo: "texto",
      contenido:
        "Dependiendo de su valor inicial, los semáforos se clasifican en binarios (cuyo funcionamiento es equivalente a un candado o mutex, permitiendo el acceso de un solo hilo a la vez) y contadores (que permiten gestionar el acceso concurrente a un recurso finito compuesto por múltiples instancias idénticas).",
    },
    {
      tipo: "subtitulo",
      contenido: "2.5.2. Mutex (Exclusión Mutua)",
    },
    {
      tipo: "texto",
      contenido:
        "Un Mutex es un mecanismo de sincronización diseñado específicamente para garantizar la exclusión mutua sobre un recurso compartido. A diferencia de un semáforo general, el mutex posee un concepto de propiedad: solo el hilo que ha bloqueado exitosamente el mutex tiene el derecho de desbloquearlo. Esto previene errores comunes de programación donde un hilo diferente intenta liberar un recurso que no le pertenece.",
    },
    {
      tipo: "subtitulo",
      contenido: "2.5.3 Monitores",
    },
    {
      tipo: "texto",
      contenido:
        "Los monitores representan un constructo de programación de alto nivel soportado por lenguajes orientados a objetos (como Java o C#). Un monitor encapsula las variables compartidas, los procedimientos que operan sobre ellas y los mecanismos de sincronización dentro de una estructura modular abstracta. El compilador o el entorno de ejecución garantizan automáticamente que solo un hilo pueda estar activo dentro del monitor en un momento dado, eliminando gran parte de la complejidad y el riesgo de error humano inherente al uso manual de semáforos y mutexes.",
    },
  ],
};
