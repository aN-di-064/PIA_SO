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
            "Saber dónde está cada página: Cada proceso tiene su tabla de páginas multinivel, que registra el marco donde está cada página y, mediante bits de control, si la página está presente en RAM o si fue modificada. La MMU y la TLB usan esa información en cada acceso.",
            "Medir cuánta memoria hay disponible: El servicio resourced expone la cantidad de memoria disponible y los umbrales de presión moderada y crítica, para que otros componentes del sistema reaccionen.",
            "Priorizar procesos: Cada proceso recibe una puntuación (oom_score_adj): los servicios críticos tienen valores muy bajos y nunca se eliminan, mientras que los procesos de las pestañas tienen valores altos y son los primeros en sacrificarse si hace falta.",
            "Recuperar memoria cuando falta: Se recuperan páginas poco usadas, se comprimen en zram, se descartan pestañas y se cierran aplicaciones de Android de baja prioridad.",
            "Mostrar el estado al usuario: El Administrador de tareas (Shift + Esc) y las páginas chrome://discards y chrome://system permiten ver el consumo de memoria y el orden de descarte.",
        ]    
        },
    {
        tipo: "subtitulo",
        contenido: "Memoria virtual"
    },
    {
        tipo: "texto",
        contenido: "La memoria virtual permite que un proceso se ejecute, aunque solo una parte de él esté en la memoria principal. La parte que realmente está en RAM se llama conjunto residente; la memoria que ve el programa es la virtual, y la RAM física es la memoria real. Esto trae dos ventajas: caben más procesos a la vez y un proceso puede ser más grande que la memoria física. Funciona gracias al principio de proximidad: en un lapso corto, un proceso tiende a usar solo unas cuantas de sus páginas."
    },
    {
        tipo: "subtitulo",
        contenido: "Fallo de página y paginación por demanda"
    },
    {
        tipo: "texto",
        contenido: "Cuando el procesador intenta usar una página que no está en RAM ocurre un fallo de página. El proceso pasa a estado bloqueado, el sistema pide traer la página faltante y, cuando la lectura termina, el proceso vuelve a estado listo. En Chrome OS esa página puede venir de tres lugares: del código ejecutable del sistema, que se lee del almacenamiento y se verifica con dm-verity bloque por bloque (como se explica en secciones posteriores); de una zona comprimida en zram; o de un archivo del usuario. Cuando solo se traen las páginas en el momento en que se necesitan se habla de política de lectura por demanda, que es la base de Linux, aunque con archivos también puede leer por adelantado páginas contiguas."
    },
    {
        tipo: "subtitulo",
        contenido: "Zram: el “swap” de Chrome OS"
    },
    {
        tipo: "texto",
        contenido: "En un sistema clásico, cuando la RAM se llena, las páginas menos usadas se mandan al disco (swap). Chrome OS no hace swap hacia el almacenamiento por defecto. Según la documentación de diseño del sistema, hay tres motivos: las escrituras constantes desgastarían la memoria flash o el SSD, cifrar el swap para proteger los datos gastaría procesador y batería, y se busca que el sistema se mantenga rápido hasta que realmente se agote la memoria. En su lugar usa zram, un módulo del kernel que crea un dispositivo de bloques dentro de la RAM donde los datos se guardan comprimidos. Se configura como área de swap, así que las páginas que salen de la memoria normal se comprimen y se quedan en la RAM. Con una compresión de alrededor de 2 a 1, cada página comprimida libera aproximadamente la mitad de su espacio. El script de inicialización de Chrome OS calcula el tamaño de zram a partir de la RAM total: 1.5 veces la RAM en la mayoría de los equipos y 1 vez en los de arquitectura ARM, donde la memoria gráfica no es recuperable. También define los márgenes de memoria baja (alrededor del 5.2 % de la RAM para el nivel crítico y del 40 % para el moderado) y una cantidad mínima de caché de archivos que debe conservarse. El script incluye una ruta para swap en disco cifrado pensada para un modelo muy específico de NVMe, pero en el código revisado esa opción está desactivada. Dicho con los términos de la teoría, zram funciona como una “memoria secundaria” que en realidad es más rápida, porque vive en RAM."
    },
    {
        tipo: "subtitulo",
        contenido: "Políticas de memoria virtual en Linux y Chrome OS"
    },
    {
        tipo: "texto",
        contenido: "Las decisiones de diseño de la memoria virtual suelen agruparse en políticas. Así se aplican en Linux y Chrome OS:"
    },
    {
        tipo: "lista",
        contenido: [
            "Lectura: Define cuándo traer una página a la RAM. Se hace por demanda, con lectura anticipada de archivos.",
            "Reemplazo. Define qué página sacar cuando no quedan marcos libres. Linux usa una variante de LRU (la página usada menos recientemente), y los kernels recientes de Chrome OS emplean LRU multigeneracional (MGLRU), cuyas estadísticas de antigüedad también sirven para repartir la caché entre el sistema y las máquinas virtuales.",
            "Conjunto residente. Define cuántos marcos recibe cada proceso. El reemplazo es global: el kernel reparte la memoria según el uso reciente, sin cuotas fijas por proceso.",
            "Limpieza. Define cuándo se escriben las páginas modificadas. Las páginas anónimas modificadas van a zram y las de archivos se escriben al almacenamiento en segundo plano.",
            "Control de carga. Define cuántos procesos mantener en memoria. En lugar de suspender procesos, Chrome OS descarta pestañas, cierra apps con el low memory killer de Android y, al final, recurre al OOM killer del kernel."
        ]    
    },
    {
        tipo: "subtitulo",
        contenido: "Presión de memoria y descarte de pestañas"
    },
    {
        tipo: "texto",
        contenido: "Cuando zram y el reclamo de páginas no bastan, entra una segunda línea de defensa: descartar datos que se pueden volver a generar. Según la documentación de diseño, antes se dependía del OOM killer del kernel, que eliminaba un proceso renderizador y podía cerrar varias pestañas a la vez, incluso la que el usuario estaba viendo. Por eso se diseñó un esquema que cierra pestañas una por una y deja el exterminio de procesos como último recurso. El orden de descarte descrito es: páginas internas, pestañas seleccionadas hace mucho, pestañas seleccionadas recientemente, pestañas con audio, apps en ventana, pestañas fijadas y, al final, la pestaña actual. Al volver a una pestaña descartada, la página se recarga. La función Memory Saver de Chrome hace algo parecido de forma proactiva con pestañas inactivas, y lo único que se conserva es el estado que el sitio ya hubiera guardado."
    },
    {
        tipo: "subtitulo",
        contenido: "Android y Linux dentro de máquinas virtuales"
    },
    {
        tipo: "texto",
        contenido: "Las apps de Android (ARCVM) y las de Linux corren en máquinas virtuales, por lo que Chrome OS debe repartir la RAM entre el sistema anfitrión y esos “invitados”. Para ello usa virtio-balloon, un dispositivo que quita o devuelve memoria a la máquina virtual, controlado por un servicio llamado VMMMS que decide cuánta memoria mover según la presión general del sistema. Con presión baja reparte la caché de páginas de forma justa; con presión alta ajusta el balón para proteger lo de mayor prioridad (la app o pestaña en uso) y deja que el low memory killer de Android o el descarte de pestañas eliminen lo de menor prioridad. Google reporta que con estas mejoras los descartes de pestañas bajaron 50 % sin que murieran apps de Android; es una cifra del propio fabricante."
    },
    {
        tipo: "subtitulo",
        contenido: "Problemas frecuentes en la administración de memoria"
    },
    {
        tipo: "texto",
        contenido: "Estos son los problemas más comunes y cómo aparecen o se reducen en Chrome OS:"
    },
    {
        tipo:"lista",
        contenido: [
            "Fragmentación interna: Es el espacio desperdiciado dentro de un bloque asignado porque el proceso no lo llena. Con paginación solo ocurre en la última página de cada región y es pequeña.",
            "Fragmentación externa: Son huecos pequeños entre bloques que no sirven para nuevos procesos y obligan a compactar. La paginación la elimina para los procesos y el sistema buddy la reduce en las asignaciones contiguas del kernel.",
            "Thrashing: El sistema pasa más tiempo moviendo páginas que ejecutando instrucciones. Chrome OS lo reduce usando zram, mucho más rápido que un disco, y descartando pestañas antes de que la RAM se agote por completo.",
            "Exceso de fallos de página: Un conjunto residente demasiado pequeño provoca fallos continuos. Con muy poca RAM se nota como lentitud y recarga frecuente de pestañas.",
            "Falta total de memoria (OOM) Ya no quedan marcos libres ni páginas que reemplazar. El kernel elimina procesos según su puntuación y la pestaña afectada muestra un error y se recarga.",
            "Fugas y exceso de consumo: Hay programas que reservan memoria y no la liberan; en Chrome OS suelen ser pestañas o extensiones, y se detectan con el Administrador de tareas.",
        ]
    },
    {
        tipo:"texto",
        contenido: "En la práctica, el problema más visible para el usuario es el último: el sistema no se congela, pero una pestaña vuelve a cargarse al regresar a ella. Es el costo de haber elegido no usar swap en disco; Chrome OS prefiere perder una pestaña inactiva a volver lento todo el equipo. Para reducirlo conviene cerrar pestañas y extensiones que consumen mucha memoria, fijar las pestañas importantes para que sean de las últimas en descartarse y mantener el sistema actualizado."
    },
    {
        tipo: "subtitulo",
        contenido: "Conclusión del apartado"
    },
    {
        tipo: "texto",
        contenido: "Chrome OS aplica los principios clásicos de administración de memoria (reubicación, protección, compartición y organización lógica y física) usando la paginación con memoria virtual del kernel de Linux. Su principal diferencia está en la estrategia ante la escasez, en vez de mandar páginas al disco, comprime memoria en RAM con zram, avisa a los subsistemas mediante umbrales de presión y descarta pestañas o aplicaciones de baja prioridad, dejando al OOM killer como último recurso. Esto protege la vida útil del almacenamiento flash y la velocidad del sistema, a cambio de que algunas pestañas deban recargarse. Para el usuario, entender esto ayuda a explicar por qué un Chromebook con poca RAM descarta pestañas más pronto que uno con más memoria."
    }
]
};