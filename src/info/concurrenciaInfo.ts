import type { TemaData } from "../componentes/PlantillaTema";

export const concurrenciaData: TemaData = {
  id: "concurrencia",
  titulo: "Control de Concurrencia",
  bloques: [
    {
      tipo: "texto",
      contenido:
        "Cuando múltiples hilos o procesos se ejecutan al mismo tiempo y necesitan leer o modificar la misma memoria compartida, pueden ocurrir errores graves de consistencia si no se coordinan adecuadamente.",
    },
    {
      tipo: "imagen",
      contenido: "https://via.placeholder.com/400x200",
    },
    {
      tipo: "subtitulo",
      contenido: "Riesgos de la Concurrencia",
    },
    {
      tipo: "texto",
      contenido:
        "Interbloqueo (Deadlock): Ocurre cuando un grupo de procesos se queda bloqueado de forma permanente. Cada proceso retiene un recurso y, al mismo tiempo, está esperando indefinidamente a que otro proceso del mismo grupo libere el recurso que necesita para continuar.",
    },
    {
      tipo: "texto",
      contenido:
        "Inanición (Starvation): Se da cuando el planificador del sistema operativo nunca le otorga tiempo de CPU o acceso a un recurso a un proceso específico (generalmente de baja prioridad) porque siempre hay otros procesos acaparando los recursos.",
    },
  ],
};
