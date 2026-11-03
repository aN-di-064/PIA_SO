import type { TemaData } from "../componentes/PlantillaTema";

export const mecanismosChromeOSData: TemaData = {
  id: "mecanismosChromeOS",
  titulo: "4.8 Mecanismos de seguridad de ChromeOS",
  bloques: [
     {
      tipo:"imagen",
      contenido:require('../../assets/images/tabIcons/tab4.png')
    },
    {
      tipo: "subtitulo",
      contenido: "4.8.1 Arranque verificado (Verified Boot)",
    },
    {
      tipo: "texto",
      contenido: "Verified Boot es el mecanismo que garantiza, mediante criptografía, que ningún componente del sistema operativo se alteró ni se dañó antes de ejecutarse. Lo hace con una cadena de confianza en varios escalones:",
    },
    {
      tipo: "lista",
      contenido: [
        "Punto de anclaje de hardware: El equipo arranca desde una memoria ROM de solo lectura integrada físicamente en la placa base (Read-Only Firmware). El software no puede modificarla, ni tampoco se puede cambiar con un flasheo remoto.",
        "Validación del cargador de arranque y del kernel: La ROM guarda la clave pública de Google y con ella verifica la firma digital del firmware de lectura/escritura y del kernel de Linux. Si la firma no es válida, el inicio se detiene de inmediato.",
        "Validación de la raíz del sistema de archivos (dm-verity): El kernel usa el módulo dm-verity de Linux para revisar el sistema de archivos raíz bloque por bloque, apoyándose en un árbol de hashes criptográficos (árbol de Merkle). Cada vez que se lee un bloque del disco, se calcula su hash y se compara con la raíz del árbol, que está firmada criptográficamente. Si cambió aunque sea un solo bit, la lectura falla a nivel de bloque y el código modificado no llega a cargarse en la memoria RAM.",
        "Autorrecuperación: Si se detecta una corrupción o una modificación no autorizada, el sistema se niega a arrancar y avisa al usuario para pasar al modo de recuperación automática o restaurar el equipo desde una partición de respaldo limpia.",
      ],
    },
    {
      tipo: "subtitulo",
      contenido: "4.8.2 Sandboxing",
    },
    {
      tipo: "texto",
      contenido: "El sandboxing es una técnica de aislamiento que mantiene la ejecución de los procesos dentro de límites estrictos de recursos y privilegios, bajo el principio de menor privilegio (least privilege).",
    },
    {
      tipo: "lista",
      contenido: [
        "Aislamiento de renderizado web: Cada pestaña, iframe o sitio web corre en su propio proceso de renderizado (renderer process). Estos procesos no tienen acceso directo al sistema de archivos local, a los dispositivos de entrada/salida ni a las interfaces de red.",
        "Mecanismos de contención del kernel: ChromeOS emplea primitivas avanzadas del kernel de Linux para reforzar el sandbox:",
        "Filtros seccomp-BPF (Secure Computing Mode): Bloquean las llamadas al sistema (syscalls) innecesarias o peligrosas. Si un proceso comprometido intenta usar una que no está permitida, el kernel lo termina al instante.",
        "Namespaces de Linux: Aíslan el árbol de procesos (PID), las interfaces de red (NET), los montajes del sistema de archivos (MNT) y la comunicación entre procesos (IPC), así un proceso no puede observar ni interactuar con el entorno de los demás.",
        "cgroups (Control Groups): Limitan el consumo de CPU, memoria y ancho de banda para evitar ataques locales de denegación de servicio.",
      ],
    },
     {
      tipo:"imagen",
      contenido:require('../../assets/images/tabIcons/4.7.png')
    },

    {
      tipo: "subtitulo",
      contenido: "4.8.3 Actualizaciones automáticas de seguridad",
    },
    {
      tipo: "texto",
      contenido: "ChromeOS maneja un esquema de actualización simétrica, con particiones redundantes A/B en el almacenamiento local:",
    },
    {
      tipo: "lista",
      contenido: [
        "Esquema de particiones dobles: El disco guarda dos copias idénticas del sistema base: el conjunto A (Kernel A y Rootfs A) y el conjunto B (Kernel B y Rootfs B). Mientras el usuario trabaja sobre el conjunto A, las actualizaciones se descargan e instalan en segundo plano en el conjunto B, que está inactivo.",
        "Transición atómica: Cuando la instalación en el conjunto B termina y se valida criptográficamente, el sistema lo marca como activo para el siguiente reinicio. Al reiniciar, el equipo arranca directamente en la nueva versión en cuestión de segundos, sin largas esperas por la instalación.",
        "Reversión instantánea (Rollback Protection): Si la nueva partición falla en la verificación criptográfica del arranque o cae en un ciclo de fallos de inicio (boot loop), el hardware y el bootloader regresan automáticamente a la partición anterior que sí funcionaba (A). Además, el chip de seguridad impide volver a versiones vulnerables más viejas gracias a contadores de versión anti-rollback por hardware.",
      ],
    },
     {
      tipo:"imagen",
      contenido:require('../../assets/images/tabIcons/4.8.png')
    },
    {
      tipo: "subtitulo",
      contenido: "4.8.4 Navegación segura (Safe Browsing)",
    },
    {
      tipo: "texto",
      contenido: "La arquitectura de seguridad de red del navegador Chrome en ChromeOS funciona como un filtro preventivo frente a las amenazas web:",
    },
    {
      tipo: "lista",
      contenido: [
        "Listas de hashes de amenazas: El sistema sincroniza cada cierto tiempo listas compactas de prefijos de hash SHA-256 de URL que Google clasifica como maliciosas (distribución de malware, exploit kits y portales de credenciales falsas).",
        "Inspección en tiempo de ejecución: Antes de enviar una petición web, se calcula el hash del destino y se compara de forma local. Si coincide con algún prefijo, se hace una consulta puntual a los servidores de Safe Browsing para verificar la URL completa; en el modo estándar esto se hace sin revelar la dirección completa.",
        "Protección contra descargas sospechosas: Analiza los metadatos y los binarios de los archivos descargados, y alerta o bloquea ejecutables con firmas o comportamientos anómalos antes de que el usuario intente abrirlos.",
      ],
    },
    {
      tipo: "subtitulo",
      contenido: "4.8.5 Aislamiento de procesos y aplicaciones",
    },
    {
      tipo: "texto",
      contenido: "El aislamiento no se queda en las pestañas del navegador; también cubre los distintos entornos de ejecución que admite el sistema:",
    },
    {
      tipo: "lista",
      contenido: [
        "Aislamiento de sitios (Site Isolation): Asegura que las páginas de orígenes distintos (origins web diferentes) siempre se alojen en procesos separados del sistema operativo. Esto protege datos sensibles (como cookies de sesión, tokens de autenticación o el DOM) frente a vulnerabilidades del microprocesador basadas en canales laterales de ejecución especulativa (como Spectre y Meltdown).",
        "Entorno Android (ARCVM): A diferencia de las arquitecturas anteriores, basadas en contenedores compartidos, las aplicaciones de Android corren dentro de una máquina virtual ligera administrada por crosvm (un monitor de máquinas virtuales basado en KVM y escrito en Rust). Esto significa que Android tiene su propio kernel de Linux aislado, y que si una app de Android se compromete, no obtiene acceso al kernel principal de ChromeOS.",
        "Entorno de desarrollo Linux (Crostini): Se ejecuta dentro de una máquina virtual aparte (Termina) que contiene un contenedor LXC. No tiene privilegios directos sobre el hardware ni acceso no autorizado al almacenamiento del host de ChromeOS.",
      ],
    },
    {
      tipo: "subtitulo",
      contenido: "4.8.6 Protección frente a modificaciones no autorizadas",
    },
    {
      tipo: "texto",
      contenido: "La estructura del sistema operativo está pensada para resistir a las amenazas que buscan quedarse de forma persistente:",
    },
    {
      tipo: "lista",
      contenido: [
        "Sistema de archivos raíz inmutable (solo lectura): Las particiones / y los directorios de binarios del sistema (/bin, /sbin, /usr) se montan en modo de solo lectura estricto (ro). Durante el uso normal del sistema, ningún script, proceso ni usuario puede escribir o modificar esos directorios.",
        "Segregación del estado de usuario (/home y Cryptohome): Los datos que genera el usuario se guardan únicamente en particiones de estado independientes (/stateful_partition), separadas del código operativo del sistema.",
        "Modo de desarrollador y borrado de estado: Si el usuario activa de manera voluntaria el “Modo Desarrollador” estando físicamente frente al equipo, para saltarse el arranque verificado o modificar el sistema, el chip de seguridad y el firmware obligan a borrar por completo y de forma irreversible todas las claves y datos locales del usuario (Powerwash forzado). Así se impide el acceso a credenciales que ya existían.",
      ],
    },
    {
      tipo: "subtitulo",
      contenido: "4.8.7 Chip de seguridad y hardware de confianza",
    },
    {
      tipo: "texto",
      contenido: "Los dispositivos ChromeOS incluyen un microcontrolador de seguridad dedicado. Puede ser un chip propio de Google (como Titan C o Titan C2) o uno compatible con el estándar TPM 2.0 (Trusted Platform Module):",
    },
    {
      tipo: "lista",
      contenido: [
        "Raíz de confianza de hardware (Hardware Root of Trust): Ofrece un almacenamiento aislado para secretos criptográficos que nunca pasan por la memoria RAM principal del procesador.",
        "Cifrado de claves de usuario: Las llaves criptográficas del sistema de archivos del usuario (cryptohome) se derivan combinando la contraseña o el PIN con un secreto generado dentro del chip de seguridad. Por eso los datos solo se pueden descifrar en ese dispositivo físico en particular y después de validar la autenticación.",
        "Protección contra ataques de fuerza bruta: El chip lleva por hardware el conteo de intentos fallidos de contraseña y PIN. Si detecta varios intentos incorrectos seguidos, impone retrasos temporales que crecen de forma exponencial (rate limiting) o bloquea ese método de acceso, con lo que los ataques automatizados de diccionario dejan de ser efectivos.",
      ],
    },
     {
      tipo:"imagen",
      contenido:require('../../assets/images/tabIcons/4.9.png')
    },
  ],
};
