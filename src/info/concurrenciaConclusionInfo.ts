import type { TemaData } from "../componentes/PlantillaTema";

export const concurrenciaConclusionData: TemaData = {
  id: "concurrencia-conclusion",
  titulo: "Conclusión",
  bloques: [
    {
      tipo: "texto",
      contenido:
        "El análisis de la concurrencia y la gestión de procesos demuestra que la ejecución simultánea de múltiples tareas requiere de mecanismos precisos de control y sincronización. Desde la planificación de la CPU y la prevención de anomalías como condiciones de carrera y bloqueos mutuos, hasta el uso de primitivas de sincronización y soluciones clásicas, el sistema operativo garantiza que los hilos y procesos colaboren de manera segura, ordenada y eficiente sin comprometer la integridad de los datos.",
    },
  ],
};
