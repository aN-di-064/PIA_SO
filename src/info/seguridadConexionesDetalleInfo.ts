import type { TemaData } from "../componentes/PlantillaTema";

export const seguridadConexionesDetalleData: TemaData = {
  id: "seguridadConexionesDetalle",
  titulo: "4.7 Seguridad de las conexiones",
  bloques: [
    {
      tipo: "subtitulo",
      contenido: "4.7.1 HTTPS y certificados digitales",
    },
    {
      tipo: "texto",
      contenido: "HTTPS (Hypertext Transfer Protocol Secure) es el protocolo HTTP funcionando sobre una capa de transporte cifrada con TLS (Transport Layer Security). Su objetivo principal es asegurar tres cosas en la comunicación entre el cliente y el servidor:",
    },
    {
      tipo: "lista",
      contenido: [
        "Confidencialidad: Los datos que viajan entre ChromeOS y el servidor web no pueden ser leídos por terceros que estén en medio del trayecto.",
        "Integridad: Usa algoritmos de autenticación de mensajes (como HMAC o modos AEAD como AES-GCM) para comprobar que la información no se modificó ni se cortó durante el camino.",
        "Autenticación: Confirma que el servidor es quien dice ser, a través de certificados digitales emitidos por una Autoridad de Certificación (Certificate Authority, CA) de confianza.",
      ],
    },
    {
      tipo: "texto",
      contenido: "Un certificado digital relaciona una clave pública con una entidad o dominio web específico, siguiendo el estándar X.509. ChromeOS cuenta con un almacén raíz de certificados de confianza (Root CA Store) que administra Chrome. Durante el protocolo de enlace TLS (TLS Handshake), el sistema revisa la cadena de confianza, la vigencia, los nombres de dominio alternativos (SAN) y si el certificado fue revocado, para lo cual usa protocolos como CRL u OCSP Stapling. Cuando la validación falla (por ejemplo, con un certificado autofirmado que no se reconoce, vencido o alterado), ChromeOS corta la conexión y muestra una advertencia de seguridad que impide continuar, con el fin de evitar ataques de interceptación.",
    },
    {
      tipo: "subtitulo",
      contenido: "4.7.2 Cifrado de comunicaciones y protección de datos durante la transmisión",
    },
    {
      tipo: "texto",
      contenido: "En ChromeOS el tráfico de red se protege tanto en la capa de red como en la de aplicación, para reducir la intercepción pasiva y la activa:",
    },
    {
      tipo: "lista",
      contenido: [
        "Cifrado de capa de enlace e inalámbrica: Las conexiones que usan WPA2-AES o WPA3-SAE cifran las tramas de datos entre la tarjeta de red del dispositivo y el punto de acceso (Access Point).",
        "Cifrado punto a punto en aplicaciones: Toda la interacción nativa con servicios en la nube (como Google Workspace, Google Drive o las API REST) se hace únicamente con TLS 1.3. Además, se limitan los conjuntos de cifrado (cipher suites) a los que implementan Secreto Perfecto hacia Adelante (Perfect Forward Secrecy, PFS), de modo que, si en el futuro se compromete la clave de un servidor, las sesiones anteriores sigan protegidas.",
        "DNS sobre HTTPS (DoH): ChromeOS integra DNS seguro, que envía las consultas de resolución de nombres por conexiones HTTPS cifradas en el puerto 443. Así, ni los proveedores de servicios de internet (ISP) ni personas malintencionadas dentro de la red local pueden ver qué dominios consulta el usuario, ni suplantar sitios mediante envenenamiento DNS (DNS Poisoning).",
        "Aleatorización de direcciones MAC: En redes inalámbricas no administradas, el subsistema de red de ChromeOS (shill) puede ir cambiando la dirección MAC con la que se asocia al punto de acceso. Esto evita que el equipo sea rastreado en redes públicas, tanto por su ubicación como a lo largo del tiempo.",
      ],
    },
    {
      tipo: "subtitulo",
      contenido: "4.7.3 Redes privadas virtuales (VPN)",
    },
    {
      tipo: "texto",
      contenido: "Una VPN crea un túnel lógico cifrado sobre una red que no es de confianza: encapsula los paquetes IP completos y los envía a un concentrador o pasarela remota. En ChromeOS la VPN se soporta de estas formas:",
    },
    {
      tipo: "lista",
      contenido: [
        "Integración nativa del sistema: Es compatible con protocolos de túnel estándar como L2TP/IPsec, con autenticación mediante claves precompartidas (PSK) o certificados X.509, y también con OpenVPN.",
        "Soporte mediante contenedor o máquina virtual: Con la capa de Android (ARCVM), ChromeOS puede ejecutar aplicaciones VPN de terceros que usan la API VpnService de Linux/Android y capturan todo el tráfico del equipo a nivel de la interfaz de túnel (tun/tap).",
        "Enrutamiento forzado y Kill Switch: En entornos administrados, las políticas pueden exigir que la VPN esté siempre activa (Always-on VPN). Si el túnel cifrado se cae, se bloquea de forma automática todo el tráfico directo a internet hasta que la conexión segura vuelva.",
      ],
    },
    {
      tipo: "subtitulo",
      contenido: "4.7.4 Seguridad en redes Wi-Fi públicas y navegación segura",
    },
    {
      tipo: "texto",
      contenido: "Las redes Wi-Fi abiertas son un punto crítico de ataque por dos razones: no cifran la capa física/enlace (cualquiera con un receptor de radio puede leer el tráfico abierto) y es común que usen portales cautivos. Para esto, ChromeOS aplica las siguientes contramedidas:",
    },
    {
      tipo: "lista",
      contenido: [
        "Detección de portales cautivos: El gestor de red detecta cuando las primeras peticiones HTTP/HTTPS se redirigen a un portal cautivo local. En ese caso abre una ventana de navegación aislada y temporal para completar la autorización, sin exponer la sesión principal del usuario ni pasar las cookies del perfil.",
        "Aislamiento del entorno público: ChromeOS no ejecuta servicios de red locales con puertos de escucha abiertos (por defecto no hay daemons SSH, SMB o RPC activos para accesos entrantes), por lo que la superficie de ataque ante escaneos de puertos en la red local es mínima.",
        "Navegación segura (Google Safe Browsing): El navegador compara las URI que se solicitan con listas locales y con consultas en la nube de sitios catalogados con malware, páginas clonadas (phishing) o descargas fraudulentas. Con la Protección Mejorada, además hace análisis heurísticos predictivos en tiempo real y usa telemetría de extensiones para cortar la navegación antes de que se ejecuten scripts maliciosos.",
      ],
    },
  ],
};
