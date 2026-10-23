import type { TemaData } from "../componentes/PlantillaTema";

export const componentesPrincipalesData: TemaData = {
  id: "componentes-principales",
  titulo: "1.3. Componentes Principales y Gestión del Sistema",
  bloques: [
    {
      tipo: "subtitulo",
      contenido: "1.3.1. Gestión del Procesador (CPU)",
    },
    {
      tipo: "texto",
      contenido:
        "Para organizar el trabajo de la computadora, ChromeOS utiliza el planificador de procesos del núcleo de Linux. Este componente se encarga de repartir el tiempo de procesamiento entre las distintas tareas de forma equitativa y eficiente.",
    },
    {
      tipo: "texto",
      contenido:
        "El sistema aplica una estrategia clara para no desperdiciar energía ni ralentizar el equipo:",
    },
    {
      tipo: "lista",
      contenido: [
        "Tareas prioritarias (Primer plano): La pestaña del navegador que el usuario tiene abierta en pantalla o la aplicación que está utilizando en ese instante reciben la mayor cantidad de potencia del procesador.",
        "Tareas secundarias (Segundo plano): Las pestañas inactivas, descargas o procesos del sistema se mueven a grupos con cuotas de tiempo limitadas. Esto evita que un proceso oculto consuma recursos de más y permite reducir el gasto de batería.",
      ],
    },
    {
      tipo: "subtitulo",
      contenido: "1.3.2. Gestión de Memoria Principal y Virtual",
    },
    {
      tipo: "texto",
      contenido:
        "Muchos equipos Chromebook se fabrican con configuraciones de memoria sencillas como, por ejemplo, 4 o 8 GB de RAM. Por ello, la gestión de memoria es una de las partes más trabajadas del sistema:",
    },
    {
      tipo: "lista",
      contenido: [
        "Paginación: La memoria RAM se organiza en bloques de tamaño fijo llamados marcos, mientras que los programas se dividen en páginas. Esto permite cargar las aplicaciones en espacios de memoria no continuos.",
        "zRAM (Compresión en RAM): Cuando la memoria física comienza a llenarse, los sistemas tradicionales guardan datos en el disco de almacenamiento. ChromeOS evita esto porque escribir constantemente en memorias flash genera desgaste. En su lugar, utiliza zRAM, un mecanismo que toma las páginas de memoria poco usadas, las comprime y las mantiene dentro de la propia memoria RAM para recuperar espacio libre de inmediato.",
        "Suspensión de pestañas: Si el consumo de RAM llega a niveles críticos, el servicio encargado de los recursos suspende de forma automática las pestañas que no se han consultado en mucho tiempo, manteniendo guardado el estado de la página para cuando el usuario regrese.",
      ],
    },
    {
      tipo: "subtitulo",
      contenido: "1.3.3. Sistema de Archivos y Almacenamiento Persistente",
    },
    {
      tipo: "texto",
      contenido:
        "Para asegurar la estabilidad del equipo y proteger los archivos del usuario, el subsistema de almacenamiento de ChromeOS implementa una estructura especializada sobre el núcleo de Linux, utilizando sistemas de archivos optimizados como ext4 y f2fs.",
    },
    {
      tipo: "texto",
      contenido:
        "La persistencia de los datos y la seguridad del sistema se basan en tres principios fundamentales:",
    },
    {
      tipo: "lista",
      contenido: [
        "Particiones Duales (A/B): El disco se divide en dos secciones idénticas para el sistema operativo. Mientras el equipo funciona utilizando la partición activa (en modo estricto de solo lectura), la partición inactiva recibe las actualizaciones en segundo plano. Al reiniciar, el gestor de arranque cambia de partición de manera transparente.",
        "Integridad por Bloques (dm-verity): Cada vez que el sistema lee un archivo del disco hacia la RAM, el kernel calcula y verifica un árbol de firmas criptográficas. Si un solo bit de los archivos del sistema ha sido alterado, la lectura se bloquea al instante.",
        "Aislamiento de Datos de Usuario (Cryptohome): La información personal del usuario no se mezcla con los archivos del sistema. Cada cuenta se almacena en una partición independiente y totalmente cifrada mediante claves vinculadas al chip de seguridad físico del equipo (como el módulo TPM o el chip Titan).",
      ],
    },
  ],
};
