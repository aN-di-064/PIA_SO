import type { TemaData } from "../componentes/PlantillaTema";

export const gestionData: TemaData = {
  id: "gestion",
  titulo: "Gestión de Memoria",
  bloques: [
     { 
      tipo: "texto", 
      contenido: "La memoria es el recurso que más condiciona el desempeño de un equipo con Chrome OS. Estos equipos suelen venderse con 4 u 8 GB de RAM, pero quien los usa espera tener decenas de pestañas abiertas, aplicaciones de Android y, si quiere, un entorno Linux funcionando al mismo tiempo. En este apartado se explica cómo administra Chrome OS su memoria principal y su memoria virtual, y se responden las preguntas de la Actividad Fundamental 3: por qué es importante esta administración, qué debe hacer el sistema operativo para llevar el control de los espacios libres y ocupados, y cuáles son los problemas más frecuentes. Como Chrome OS está construido sobre el núcleo de Linux, hereda sus mecanismos de paginación y de memoria virtual. Lo que lo distingue es qué hace cuando la memoria se acaba: en lugar de mandar páginas al disco, como lo haría un sistema tradicional, comprime páginas dentro de la propia RAM y, si eso no alcanza, descarta pestañas y cierra aplicaciones de baja prioridad. " 
    },
    { 
      tipo: "subtitulo", 
      contenido: "Importancia de la administración de memoria en Chrome OS" 
    },
    { 
      tipo: "texto", 
      contenido: "En un sistema que ejecuta varios procesos a la vez, la memoria tiene que repartirse con cuidado. Si en la RAM caben pocos procesos, casi todos terminan esperando operaciones de entrada y salida y el procesador pasa mucho tiempo sin hacer nada. Por eso el sistema debe asignar la memoria de manera que siempre haya procesos listos para usar la CPU. En Chrome OS esto pesa todavía más por estas razones:"
    },
    {
     tipo: "lista",
     contenido: [
    "Cantidad de procesos: Cada sitio web, extensión, proceso gráfico, servicio del sistema y máquina virtual (Android y Linux) consume memoria por separado. Con unas 15 pestañas abiertas ya puede haber decenas de procesos activos. ",
    "Hardware modesto: Los Chromebook se diseñan para ser económicos. Los primeros modelos tenían apenas 1 o 2 GB de RAM y no usaban swap, así que cualquier desperdicio de memoria se notaba de inmediato en la fluidez. ",
    "Seguridad: El aislamiento de procesos (sandboxing) que se describió en la sección 4.8 depende de que cada proceso tenga su propio espacio de direcciones. Una mala administración de memoria no solo vuelve lento el equipo; también puede debilitar ese aislamiento. "
     ]
    },
]
};