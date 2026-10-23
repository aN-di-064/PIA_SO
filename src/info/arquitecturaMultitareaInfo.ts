import type { TemaData } from "../componentes/PlantillaTema";

export const arquitecturaMultitareaData: TemaData = {
  id: "arquitectura-multitarea",
  titulo:
    "2.1. Arquitectura de la Multitarea: Procesos, Hilos y Cambio de Contexto",
  bloques: [
    {
      tipo: "texto",
      contenido:
        "Para comprender cómo un sistema operativo administra múltiples cargas de trabajo, es indispensable distinguir entre los conceptos fundamentales de proceso e hilo.",
    },
    {
      tipo: "subtitulo",
      contenido: "2.1.1 Procesos y Bloques de Control de Proceso (PCB)",
    },
    {
      tipo: "texto",
      contenido:
        "Un proceso se define formalmente como un programa en ejecución. No es meramente el código binario almacenado en disco, sino una entidad activa que incluye el contador de programa, los registros del procesador, la pila de ejecución, la sección de datos con variables globales y la sección de código.",
    },
    {
      tipo: "texto",
      contenido:
        "El núcleo del sistema operativo gestiona cada proceso mediante una estructura de datos especializada conocida como Bloque de Control de Proceso o descriptor de proceso. El PCB almacena toda la información crítica asociada con un proceso específico, entre la que destaca:",
    },
    {
      tipo: "lista",
      contenido: [
        "Identificador del proceso (PID): Un número único que distingue al proceso dentro del sistema.",
        "Estado del procesador: Los valores actuales de los registros de la CPU cuando el proceso es interrumpido.",
        "Información de planificación de CPU: Prioridades, punteros a colas de planificación y parámetros de tiempo.",
        "Información de gestión de memoria: Tablas de páginas, límites de segmentos y mapas de memoria asignados.",
        "Información de estado de E/S: Dispositivos asignados al proceso y lista de archivos abiertos.",
      ],
    },
    {
      tipo: "subtitulo",
      contenido: "2.1.2 Hilos (Threads) y Multihilos",
    },
    {
      tipo: "texto",
      contenido:
        "A medida que las aplicaciones se volvieron más complejas, el modelo tradicional de procesos pesados demostró ser ineficiente. Crear, destruir y cambiar entre procesos implica una sobrecarga computacional elevada debido al aislamiento estricto de sus espacios de memoria.",
    },
    {
      tipo: "texto",
      contenido:
        "Como solución, se introdujo el concepto de hilo de ejecución (o thread), a menudo denominado proceso ligero. Un hilo comparte con otros hilos de su mismo proceso el espacio de direcciones de memoria, los archivos abiertos y las variables globales, pero mantiene su propia pila de ejecución, sus registros de CPU y su contador de programa independiente. Esto permite que múltiples actividades coexistan dentro de una misma aplicación, compartiendo datos de forma instantánea sin necesidad de mecanismos complejos de comunicación entre procesos (IPC).",
    },
    {
      tipo: "subtitulo",
      contenido: "2.1.3 El Cambio de Contexto (Context Switch)",
    },
    {
      tipo: "texto",
      contenido:
        "El cambio de contexto es el mecanismo fundamental que hace posible la multitarea. Ocurre cuando el sistema operativo suspende la ejecución de un proceso o hilo actualmente en marcha para cargar y ejecutar otro distinto. Las fases de este proceso implican:",
    },
    {
      tipo: "lista",
      contenido: [
        "Interrumpir la ejecución del proceso actual (mediante una interrupción de hardware, un fallo de página o una llamada al sistema).",
        "Guardar el estado actual de los registros de la CPU y el contador de programa dentro del PCB del proceso saliente.",
        "Actualizar el estado del PCB.",
        "Seleccionar el siguiente proceso a ejecutar mediante el algoritmo de planificación (scheduler).",
        "Cargar el contexto almacenado en el PCB del nuevo proceso hacia los registros de la CPU.",
        "Transferir el control de ejecución al nuevo contador de programa.",
      ],
    },
  ],
};
