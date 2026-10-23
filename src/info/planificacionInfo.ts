import type { TemaData } from "../componentes/PlantillaTema";

export const planificacionData: TemaData = {
  id: "planificacion",
  titulo: "2.2. Planificación de la CPU (CPU Scheduling)",
  bloques: [
    {
      tipo: "texto",
      contenido:
        "La gestión eficiente de la multitarea recae directamente sobre el planificador del sistema operativo, el cual determina qué proceso de la cola de listos (ready queue) debe utilizar la CPU a continuación.",
    },
    {
      tipo: "subtitulo",
      contenido: "2.2.1. Tipos de Planificación",
    },
    {
      tipo: "lista",
      contenido: [
        "Planificación Apropiativa (Preemptive): El sistema operativo puede forzar la interrupción y desalojo de un proceso que está utilizando la CPU antes de que este finalice su ráfaga de trabajo voluntariamente. Es el modelo universal en sistemas multitarea modernos porque garantiza la equidad y previene que un programa acapare el procesador.",
        "Planificación No Apropiativa (Non-preemptive / Cooperativa): Una vez que se le asigna la CPU a un proceso, este la retiene de manera exclusiva hasta que finaliza su ejecución o pasa voluntariamente a un estado de espera (por una operación de E/S).",
      ],
    },
    {
      tipo: "subtitulo",
      contenido: "2.2.2 Criterios de Optimización",
    },
    {
      tipo: "texto",
      contenido:
        "Para evaluar la efectividad de los algoritmos de planificación, los diseñadores de sistemas operativos analizan métricas clave:",
    },
    {
      tipo: "lista",
      contenido: [
        "Utilización de la CPU: Mantener la CPU ocupada el mayor porcentaje de tiempo posible.",
        "Rendimiento (Throughput): Cantidad de procesos completados por unidad de tiempo.",
        "Tiempo de Retorno (Turnaround Time): El intervalo total transcurrido desde el momento en que se solicita un proceso hasta su finalización completa.",
        "Tiempo de Espera: El tiempo acumulado que un proceso pasa esperando en la cola de listos.",
        "Tiempo de Respuesta: El tiempo que transcurre desde que se envía una solicitud hasta que se produce la primera respuesta (fundamental en sistemas interactivos).",
      ],
    },
  ],
};
