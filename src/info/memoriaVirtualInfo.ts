import type { TemaData } from "../componentes/PlantillaTema";

export const memoriaVirtualData: TemaData = {
  id: "memoria-virtual",
  titulo: "3.3Memoria Virtual",
  bloques: [
    {
      tipo: "texto",
      contenido:
        "La memoria virtual permite que un proceso se ejecute, aunque solo una parte de él esté en la memoria principal. La parte que realmente está en RAM se llama conjunto residente; la memoria que ve el programa es la virtual, y la RAM física es la memoria real. Esto trae dos ventajas: caben más procesos a la vez y un proceso puede ser más grande que la memoria física. Funciona gracias al principio de proximidad: en un lapso corto, un proceso tiende a usar solo unas cuantas de sus páginas.",
    },
    {
      tipo: "imagen",
      contenido: require("../../assets/images/tabIcons/3.3.png"),
    },
    {
      tipo: "subtitulo",
      contenido: "3.3.1. Fallo de página y paginación por demanda",
    },
    {
      tipo: "texto",
      contenido:
        "Cuando el procesador intenta usar una página que no está en RAM ocurre un fallo de página. El proceso pasa a estado bloqueado, el sistema pide traer la página faltante y, cuando la lectura termina, el proceso vuelve a estado listo. En Chrome OS esa página puede venir de tres lugares: del código ejecutable del sistema, que se lee del almacenamiento y se verifica con dm-verity bloque por bloque (como se explica en la sección 4.8.1); de una zona comprimida en zram; o de un archivo del usuario. Cuando solo se traen las páginas en el momento en que se necesitan se habla de política de lectura por demanda, que es la base de Linux, aunque con archivos también puede leer por adelantado páginas contiguas.",
    },
    {
      tipo: "subtitulo",
      contenido: "3.3.2. Zram: el “swap” de Chrome OS",
    },
    {
      tipo: "texto",
      contenido:
        "En un sistema clásico, cuando la RAM se llena, las páginas menos usadas se mandan al disco (swap). Chrome OS no hace swap hacia el almacenamiento por defecto. Según la documentación de diseño del sistema, hay tres motivos: las escrituras constantes desgastarían la memoria flash o el SSD, cifrar el swap para proteger los datos gastaría procesador y batería, y se busca que el sistema se mantenga rápido hasta que realmente se agote la memoria. En su lugar usa zram, un módulo del kernel que crea un dispositivo de bloques dentro de la RAM donde los datos se guardan comprimidos. Se configura como área de swap, así que las páginas que salen de la memoria normal se comprimen y se quedan en la RAM. Con una compresión de alrededor de 2 a 1, cada página comprimida libera aproximadamente la mitad de su espacio.",
    },
    {
      tipo: "imagen",
      contenido: require("../../assets/images/tabIcons/3.3.2.png"),
    },
    {
      tipo: "texto",
      contenido:
        "El script de inicialización de Chrome OS calcula el tamaño de zram a partir de la RAM total: 1.5 veces la RAM en la mayoría de los equipos y 1 vez en los de arquitectura ARM, donde la memoria gráfica no es recuperable. También define los márgenes de memoria baja (alrededor del 5.2 % de la RAM para el nivel crítico y del 40 % para el moderado) y una cantidad mínima de caché de archivos que debe conservarse. El script incluye una ruta para swap en disco cifrado pensada para un modelo muy específico de NVMe, pero en el código revisado esa opción está desactivada. Dicho con los términos de la teoría, zram funciona como una “memoria secundaria” que en realidad es más rápida, porque vive en RAM.",
    },
    {
      tipo: "subtitulo",
      contenido: "3.3.3. Políticas de memoria virtual en Linux y Chrome OS",
    },
    {
      tipo: "texto",
      contenido:
        "Las decisiones de diseño de la memoria virtual suelen agruparse en políticas. Así se aplican en Linux y Chrome OS:",
    },
    {
      tipo: "lista",
      contenido: [
        "Lectura: Define cuándo traer una página a la RAM. Se hace por demanda, con lectura anticipada de archivos.",
        "Reemplazo: Define qué página sacar cuando no quedan marcos libres. Linux usa una variante de LRU (la página usada menos recientemente), y los kernels recientes de Chrome OS emplean LRU multigeneracional (MGLRU), cuyas estadísticas de antigüedad también sirven para repartir la caché entre el sistema y las máquinas virtuales.",
        "Conjunto residente: Define cuántos marcos recibe cada proceso. El reemplazo es global: el kernel reparte la memoria según el uso reciente, sin cuotas fijas por proceso.",
        "Limpieza: Define cuándo se escriben las páginas modificadas. Las páginas anónimas modificadas van a zram y las de archivos se escriben al almacenamiento en segundo plano.",
        "Control de carga: Define cuántos procesos mantener en memoria. En lugar de suspender procesos, Chrome OS descarta pestañas, cierra apps con el low memory killer de Android y, al final, recurre al OOM killer del kernel.",
      ],
    },
    {
      tipo: "subtitulo",
      contenido: "3.3.4. Presión de memoria y descarte de pestañas",
    },
    {
      tipo: "texto",
      contenido:
        "Cuando zram y el reclamo de páginas no bastan, entra una segunda línea de defensa: descartar datos que se pueden volver a generar. Según la documentación de diseño, antes se dependía del OOM killer del kernel, que eliminaba un proceso renderizador y podía cerrar varias pestañas a la vez, incluso la que el usuario estaba viendo. Por eso se diseñó un esquema que cierra pestañas una por una y deja el exterminio de procesos como último recurso. El orden de descarte descrito es: páginas internas, pestañas seleccionadas hace mucho, pestañas seleccionadas recientemente, pestañas con audio, apps en ventana, pestañas fijadas y, al final, la pestaña actual. Al volver a una pestaña descartada, la página se recarga. La función Memory Saver de Chrome hace algo parecido de forma proactiva con pestañas inactivas, y lo único que se conserva es el estado que el sitio ya hubiera guardado.",
    },
    {
      tipo: "subtitulo",
      contenido: "3.3.5. Android y Linux dentro de máquinas virtuales",
    },
    {
      tipo: "texto",
      contenido:
        "Las apps de Android (ARCVM) y las de Linux corren en máquinas virtuales, por lo que Chrome OS debe repartir la RAM entre el sistema anfitrión y esos “invitados”. Para ello usa virtio-balloon, un dispositivo que quita o devuelve memoria a la máquina virtual, controlado por un servicio llamado VMMMS que decide cuánta memoria mover según la presión general del sistema. Con presión baja reparte la caché de páginas de forma justa; con presión alta ajusta el balón para proteger lo de mayor prioridad (la app o pestaña en uso) y deja que el low memory killer de Android o el descarte de pestañas eliminen lo de menor prioridad. Google reporta que con estas mejoras los descartes de pestañas bajaron 50 % sin que murieran apps de Android; es una cifra del propio fabricante.",
    },
    {
      tipo: "subtitulo",
      contenido: "3.3.6. Problemas frecuentes en la administración de memoria",
    },
    {
      tipo: "texto",
      contenido:
        "Estos são los problemas más comunes y cómo aparecen o se reducen en Chrome OS:",
    },
    {
      tipo: "lista",
      contenido: [
        "Fragmentación interna: Es el espacio desperdiciado dentro de un bloque asignado porque el proceso no lo llena. Con paginación solo ocurre en la última página de cada región y es pequeña.",
        "Fragmentación externa: Son huecos pequeños entre bloques que no sirven para nuevos procesos y obligan a compactar. La paginación la elimina para los procesos y el sistema buddy la reduce en las asignaciones contiguas del kernel.",
        "Trasiego (thrashing): El sistema pasa más tiempo moviendo páginas que ejecutando instrucciones. Chrome OS lo reduce usando zram, mucho más rápido que un disco, y descartando pestañas antes de que la RAM se agote por completo.",
        "Exceso de fallos de página: Un conjunto residente demasiado pequeño provoca fallos continuos. Con muy poca RAM se nota como lentitud y recarga frecuente de pestañas.",
        "Falta total de memoria (OOM): Ya no quedan marcos libres ni páginas que reemplazar. El kernel elimina procesos según su puntuación y la pestaña afectada muestra un error y se recarga.",
        "Fugas y exceso de consumo: Hay programas que reservan memoria y no la liberan; en Chrome OS suelen ser pestañas o extensiones, y se detectan con el Administrador de tareas.",
        "Pérdida de estado: Es el efecto secundario del descarte: lo que no se guardó (formularios, avance) se pierde al recargar la pestaña.",
      ],
    },
    {
      tipo: "texto",
      contenido:
        "En la práctica, el problema más visible para el usuario es el último: el sistema no se congela, pero una pestaña vuelve a cargarse al regresar a ella. Es el costo de haber elegido no usar swap en disco; Chrome OS prefiere perder una pestaña inactiva a volver lento todo el equipo. Para reducirlo conviene cerrar pestañas y extensiones que consumen mucha memoria, fijar las pestañas importantes para que sean de las últimas en descartarse y mantener el sistema actualizado.",
    },
  ],
};
