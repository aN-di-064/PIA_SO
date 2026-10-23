import type { TemaData } from "../componentes/PlantillaTema";

export const anomaliasData: TemaData = {
  id: "anomalias",
  titulo:
    "2.6. Anomalías Críticas de la Concurrencia: Interbloqueo e Inanición",
  bloques: [
    {
      tipo: "texto",
      contenido:
        "A pesar de la implementación de mecanismos de sincronización avanzados, la programación concurrente introduce riesgos sistémicos severos si los recursos no se administran con precisión milimétrica.",
    },
    {
      tipo: "subtitulo",
      contenido: "2.6.1. Interbloqueo (Deadlock)",
    },
    {
      tipo: "texto",
      contenido:
        "El interbloqueo es una situación permanente en la cual un conjunto de procesos se encuentra bloqueado debido a que cada proceso retiene un recurso y, simultáneamente, espera adquirir otro recurso que está en posesión de otro miembro del mismo grupo. Para que ocurra un interbloqueo en un sistema operativo, deben cumplirse simultáneamente cuatro condiciones necesarias descritas por Edward G. Coffman:",
    },
    {
      tipo: "lista",
      contenido: [
        "Exclusión Mutua: Al menos un recurso debe mantenerse en un modo no compartible (solo un proceso puede usarlo a la vez).",
        "Retención y Espera: Un proceso debe estar reteniendo al menos un recurso y esperando adquirir recursos adicionales que están siendo retenidos por otros procesos.",
        "No Expropiación: Los recursos no pueden ser arrebatados a la fuerza; un recurso solo puede ser liberado voluntariamente por el proceso que lo retiene después de que este haya completado su tarea.",
      ],
    },
    {
      tipo: "texto",
      contenido:
        "Los sistemas operativos modernos gestionan el interbloqueo mediante tres enfoques principales: la prevención (diseñar el sistema para invalidar estructuralmente al menos una de las cuatro condiciones de Coffman), la evitación (evaluar dinámicamente las solicitudes de recursos mediante algoritmos matemáticos como el Algoritmo del Banquero para garantizar que el sistema permanezca siempre en un estado seguro), y la detección y recuperación (permitir que ocurra el interbloqueo para luego detectarlo mediante grafos de asignación y recuperar el sistema abortando procesos o expropiando recursos).",
    },
    {
      tipo: "subtitulo",
      contenido: "2.6.2 Inanición (Starvation)",
    },
    {
      tipo: "texto",
      contenido:
        "A diferencia del interbloqueo, la inanición ocurre cuando un proceso individual espera indefinidamente para acceder a un recurso porque otros procesos de mayor prioridad acaparan continuamente el procesador o los canales de E/S. La estrategia estándar para mitigar este fenómeno en los planificadores modernos es el envejecimiento (aging), una técnica que incrementa progresivamente la prioridad de un proceso a medida que este pasa más tiempo esperando en la cola, garantizando eventualmente su acceso a los recursos del sistema.",
    },
  ],
};
