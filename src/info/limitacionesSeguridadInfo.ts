import type { TemaData } from "../componentes/PlantillaTema";

export const limitacionesSeguridadData: TemaData = {
  id: "limitacionesSeguridad",
  titulo: "4.12 Problemas y limitaciones de seguridad",
  bloques: [
    {
      tipo: "subtitulo",
      contenido: "4.12.1 Vulnerabilidades de software y dependencia de actualizaciones",
    },
    {
      tipo: "texto",
      contenido: "Fallos en motores de navegación: El motor Blink y el compilador V8 de JavaScript tienen millones de líneas de código complejo. Todavía se siguen descubriendo vulnerabilidades de corrupción de memoria (como Use-After-Free) que pueden permitir la ejecución remota de código dentro de los límites del sandbox antes de que exista un parche.",
    },
    {
      tipo: "subtitulo",
      contenido: "4.12.2 Riesgos centrados en el factor humano e ingeniería social (Phishing)",
    },
    {
      tipo: "lista",
      contenido: [
        "Inmunidad nula frente al engaño directo: Las defensas de la arquitectura del sistema operativo no pueden evitar que un usuario escriba por su cuenta su usuario, contraseña o datos bancarios en un formulario alojado en una página de phishing sofisticada que Safe Browsing todavía no haya catalogado.",
        "Notificaciones web fraudulentas: Los usuarios que dan permiso de notificaciones a sitios dudosos reciben una lluvia de alertas engañosas, hechas para simular infecciones que no existen y llevarlos a pagar o a llamar a números de soporte falsos.",
      ],
    },
    {
      tipo: "subtitulo",
      contenido: "4.12.3 Extensiones maliciosas y abuso de permisos",
    },
    {
      tipo: "lista",
      contenido: [
        "Superficie de ataque en la Chrome Web Store: Aunque Google hace escaneos automáticos y manuales de las extensiones, hay actores maliciosos que compran extensiones legítimas y populares y luego las actualizan con código espía (supply chain attack en extensiones).",
        "Amplitud de permisos: Una extensión con el permiso “read and change all your data on the websites you visit” puede leer el texto que se escribe en los formularios, interceptar tokens de autenticación y modificar elementos visuales de la página sin necesidad de vulnerar el sistema operativo.",
      ],
    },
     {
      tipo:"imagen",
      contenido:require('../../assets/images/tabIcons/4.11.png')
    },
    {
      tipo: "subtitulo",
      contenido: "4.12.4 Redes inseguras y ataques de capa 2",
    },
    {
      tipo: "lista",
      contenido: [
        "Portales cautivos maliciosos y redes gemelas (Evil Twin): Un punto de acceso falso con el mismo SSID que una red pública legítima puede obligar a los usuarios a navegar por proxies maliciosos, o interceptar tráfico HTTP sin protección si el usuario ignora las advertencias de certificados.",
        "Ataques fuera del alcance del sistema operativo: Aunque ChromeOS proteja el contenido de los paquetes con TLS, los metadatos del tráfico (direcciones IP de destino, tiempos de transmisión, volumen de datos) siguen expuestos a inspección en redes no cifradas, a menos que se use una VPN.",
      ],
    },
    {
      tipo: "subtitulo",
      contenido: "4.12.5 Riesgos en dispositivos administrados vs. no administrados",
    },
    {
      tipo: "lista",
      contenido: [
        "Dispositivos no administrados (personales): No tienen supervisión técnica externa, así que dependen al 100 % del cuidado del usuario para aplicar los reinicios pendientes de actualización, mantener contraseñas seguras y no instalar software riesgoso.",
        "Dispositivos administrados: Aunque tienen un nivel de seguridad bastante mayor, los errores de configuración de los administradores de sistemas (como políticas de contraseñas laxas, excepciones indebidas de certificados SSL o la falta de listas blancas de extensiones) exponen a toda la flota corporativa a la vez.",
      ],
    },
  ],
};
