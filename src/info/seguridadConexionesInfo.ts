import type { TemaData } from "../componentes/PlantillaTema";

export const seguridadConexionesData: TemaData = {
  id: "seguridadConexiones",
  titulo: "4.6 Seguridad de las conexiones",
  bloques: [
    {
      tipo: "subtitulo",
      contenido: "4.6.1 HTTPS y certificados digitales",
    },
    {
      tipo: "texto",
      contenido: "HTTPS es la versión segura del protocolo con el que funcionan las páginas web. Cifra la información que se envía entre el navegador y el sitio, de modo que si alguien la intercepta no puede entenderla. Para saber que el sitio es verdadero se usan los certificados digitales, que son documentos emitidos por entidades de confianza que comprueban que una página pertenece a quien dice ser. Cuando un certificado está vencido, no coincide con el sitio o no es confiable, Chrome muestra una pantalla de advertencia antes de continuar. Esto ayuda a frenar tanto sitios falsos como ataques de intermediario.",
    },
     {
      tipo:"imagen",
      contenido:require('../../assets/images/tabIcons/HTTPS.png')
    },
    {
      tipo: "subtitulo",
      contenido: "4.6.2 Cifrado de comunicaciones y protección de datos durante la transmisión",
    },
    {
      tipo: "texto",
      contenido: "El cifrado ocurre en varios niveles: el Wi-Fi protegido con WPA2 o WPA3 cifra la conexión entre el dispositivo y el router; HTTPS cifra la comunicación entre el navegador y el sitio; y la VPN cifra todo el tráfico hacia un servidor de confianza. Los servicios de Google, como Gmail o Drive, también protegen la información mientras viaja y cuando está guardada.",
    },
    {
      tipo: "texto",
      contenido: "Otra herramienta es el DNS seguro. El DNS es el sistema que convierte el nombre de una página en su dirección numérica, y si no está cifrado, alguien podría ver o alterar esas consultas. El DNS sobre HTTPS cifra la comunicación entre el navegador y el proveedor de DNS, y ayuda a evitar ataques sobre las búsquedas de direcciones. Se puede activar en la configuración de seguridad de Chrome.",
    },
    {
      tipo: "texto",
      contenido: "Google ha desarrollado la aleatorización de la dirección MAC para redes Wi-Fi no administradas. La dirección MAC es el identificador de la tarjeta de red y se transmite sin cifrar, por lo que, si siempre es la misma, un punto de acceso podría reconocer el equipo en distintos lugares. Al usar una diferente por red se dificulta ese rastreo. Esta función puede variar según la versión de ChromeOS.",
    },
    {
      tipo: "subtitulo",
      contenido: "4.6.3 VPN",
    },
    {
      tipo: "texto",
      contenido: "Una VPN (red privada virtual) crea un túnel cifrado entre el dispositivo y un servidor, para que quien controla la red local no pueda ver lo que hace el usuario. ChromeOS la tiene integrada: puede usar VPN de tipo L2TP/IPsec, extensiones de Chrome que ofrecen VPN y aplicaciones de VPN de Android. Las organizaciones pueden configurarla y exigirla a sus usuarios. Los especialistas recomiendan usarla sobre todo en redes públicas, junto con HTTPS, porque así es mucho más difícil que un atacante intercepte la comunicación.",
    },
    {
      tipo: "subtitulo",
      contenido: "4.6.4 Seguridad en redes Wi-Fi públicas y navegación segura",
    },
    {
      tipo: "texto",
      contenido: "Para usar redes públicas de forma más segura se recomienda: confirmar el nombre real de la red con el establecimiento, evitar sitios que pidan contraseñas o datos bancarios si no hay VPN, desactivar la conexión automática a redes abiertas para decidir manualmente a cuál conectarse, mantener el equipo actualizado y olvidar la red cuando ya no se use. ChromeOS ayuda con HTTPS, advertencias de certificado, DNS seguro y soporte de VPN, pero la decisión final sigue siendo del usuario.",
    },
    {
      tipo: "texto",
      contenido: "Por último, la Navegación segura de Chrome revisa en tiempo real si las páginas y descargas están en listas de amenazas conocidas y avisa de posibles casos de phishing o malware. En su modo de protección mejorada hace análisis más profundos de las descargas y de las extensiones.",
    },
  ],
};
