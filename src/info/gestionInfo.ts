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
    { 
      tipo: "texto", 
      contenido: "Un administrador de memoria debe cumplir cinco requisitos básicos. Así se reflejan en Chrome OS: "
    },
    {
     tipo: "lista",
     contenido: [
        "Reubicación: Un proceso puede cargarse en distintas zonas de la RAM, o salir y volver a entrar en otra, sin que el programa lo note. Chrome OS lo logra con direcciones virtuales que la unidad de gestión de memoria (MMU) traduce a direcciones físicas usando las tablas de páginas del kernel. ",
        "Protección: Ningún proceso debe leer o escribir la memoria de otro sin permiso, y esa revisión la hace el hardware en cada acceso, porque el sistema operativo no podría anticipar todas las referencias de un programa. En Chrome OS cada pestaña o sitio corre en un proceso con su propio espacio de direcciones, reforzado con seccomp, namespaces y cgroups.",
        "Compartición. Debe poder compartirse memoria de forma controlada, por ejemplo, el código común. Las bibliotecas y el código de Chrome se cargan una sola vez y sus páginas se comparten entre procesos.",
        "Organización lógica. Los programas se ven como módulos (código, datos, pila) con permisos distintos: el código es de solo lectura y ejecución, y los datos son modificables.",
     ]
    },
    {
        tipo: "subtitulo",
        contenido: "Memoria principal (Memoria de Acesso Aleatorio, RAM)"
    },
    {
        tipo: "texto",
        contenido: "La memoria principal (RAM) es el nivel rápido pero volátil de la jerarquía de memoria: guarda los programas y datos en uso y se pierde al apagar el equipo. El almacenamiento secundario (eMMC o SSD, que se trata en la sección 3.2) es más lento pero permanente. En muchos Chromebook con procesador ARM, la memoria de video sale de la misma RAM y no se puede recuperar, y el sistema lo toma en cuenta al configurar su memoria."
    },
    {
        tipo: "subtitulo",
        contenido: "Esquemas de asignación y su evolución"
    },
    {
        tipo: "texto",
        contenido: "Los sistemas antiguos dividían la RAM en particiones fijas, sencillas de implementar, pero con fragmentación interna porque un proceso pequeño ocupaba una partición completa, o en particiones dinámicas, donde cada proceso recibe justo lo que necesita, pero van quedando huecos pequeños dispersos (fragmentación externa) que obligan a compactar la memoria, una operación costosa. Para elegir en qué hueco colocar un proceso se usaban estrategias como mejor ajuste, primer ajuste y siguiente ajuste. Hoy ningún sistema operativo importante usa estos esquemas de forma pura; Chrome OS, igual que Linux, usa paginación.  En la paginación la RAM se divide en bloques de tamaño fijo llamados marcos, y cada proceso se divide en páginas del mismo tamaño. Las páginas de un proceso pueden quedar en marcos que no son contiguos, y el sistema guarda una tabla de páginas por proceso que indica en qué marco está cada una. Así desaparece la fragmentación externa y solo queda una pequeña fragmentación interna en la última página de cada proceso. Una dirección virtual se compone de un número de página y un desplazamiento dentro de ella. La segmentación pura, en cambio, casi no se usa hoy, y Chrome OS tampoco la emplea. "
    },
    {
        tipo: "subtitulo",
        contenido: "Tablas de páginas multinivel y TLB"
    },
    {
        tipo: "texto",
        contenido: "Un espacio de direcciones de 64 bits necesitaría una tabla de páginas enorme si fuera de un solo nivel, por lo que Linux la organiza en varios: una estructura clásica de tres niveles (directorio de páginas, directorio intermedio y tabla de páginas), que en los kernels actuales para 64 bits se amplía a cuatro o cinco. Solo se crean las partes que el proceso realmente usa. Para no consultar la tabla en memoria en cada acceso, el procesador guarda las traducciones recientes en una caché especial llamada TLB (translation lookaside buffer); si la traducción está ahí, el acceso es mucho más rápido."
    },
    {
        tipo: "subtitulo",
        contenido: "Control de espacios disponibles y ocupados"
    },
    {
        tipo: "texto",
        contenido: "Para saber en todo momento qué parte de la memoria está libre y cuál ocupada, el sistema operativo realiza varias tareas, y en Chrome OS se llevan a cabo así:"
    },
    {
        tipo: "lista",
        contenido: [
            "Llevar la lista de marcos libres y ocupados: El kernel conserva las listas del sistema buddy, ordenadas por tamaño de grupo de marcos.",
            "Saber dónde está cada página:Cada proceso tiene su tabla de páginas multinivel, que registra el marco donde está cada página y, mediante bits de control, si la página está presente en RAM o si fue modificada. La MMU y la TLB usan esa información en cada acceso.",
            "Medir cuánta memoria hay disponible: El servicio resourced expone la cantidad de memoria disponible y los umbrales de presión moderada y crítica, para que otros componentes del sistema reaccionen.",
            "Priorizar procesos. Cada proceso recibe una puntuación (oom_score_adj): los servicios críticos tienen valores muy bajos y nunca se eliminan, mientras que los procesos de las pestañas tienen valores altos y son los primeros en sacrificarse si hace falta.",
            "Recuperar memoria cuando falta: Se recuperan páginas poco usadas, se comprimen en zram, se descartan pestañas y se cierran aplicaciones de Android de baja prioridad.",
            "Mostrar el estado al usuario: El Administrador de tareas (Shift + Esc) y las páginas chrome://discards y chrome://system permiten ver el consumo de memoria y el orden de descarte.",
        ]    
        },
]
};