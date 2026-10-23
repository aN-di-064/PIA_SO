import type { TemaData } from "../componentes/PlantillaTema";

export const introduccionConcurrenciaData: TemaData = {
  id: "introduccion-concurrencia",
  titulo: "Introducción a la Concurrencia",
  bloques: [
    {
      tipo: "texto",
      contenido:
        "La evolución de los sistemas informáticos ha estado marcada por la necesidad imperativa de maximizar la utilización de los recursos de hardware, especialmente la Unidad Central de Procesamiento (CPU). En los albores de la computación, los sistemas operativos ejecutaban un único programa de forma secuencial. Bajo este esquema primitivo, cuando un trabajo requería realizar una operación de entrada/salida (E/S) la CPU permanecía completamente inactiva, desperdiciando ciclos de procesamiento valiosos.",
    },
    {
      tipo: "subtitulo",
      contenido: "De la Multiprogramación a la Multitarea",
    },
    {
      tipo: "texto",
      contenido:
        "Para superar esta ineficiencia, surgió el concepto de multiprogramación, diseñado para mantener múltiples trabajos en la memoria principal de manera simultánea. Cuando un trabajo debía esperar por una operación de E/S, el sistema operativo le retiraba el control de la CPU y se lo asignaba a otro programa que estuviera listo para ejecutarse. De este concepto fundamental evolucionó la multitarea moderna, donde la alternancia de tareas ocurre a una velocidad imperceptible para el usuario, generando la ilusión de simultaneidad absoluta incluso en arquitecturas de un solo núcleo.",
    },
    {
      tipo: "subtitulo",
      contenido: "Desafíos de la Ejecución Paralela",
    },
    {
      tipo: "texto",
      contenido:
        "En los sistemas multiprocesador y multicorte actuales, la concurrencia deja de ser una mera ilusión de alternancia y se convierte en una realidad de ejecución paralela. Sin embargo, este avance introduce desafíos colosales en términos de diseño de software. Múltiples hilos de ejecución compiten constantemente por acceder a estructuras de datos compartidas, dispositivos de E/S y zonas de memoria principal. Sin mecanismos estrictos de control de concurrencia, los sistemas operativos colapsarían debido a corrupciones de datos, condiciones de carrera e interbloqueos catastróficos.",
    },
  ],
};
