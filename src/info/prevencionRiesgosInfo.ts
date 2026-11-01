import type { TemaData } from "../componentes/PlantillaTema";

export const prevencionRiesgosData: TemaData = {
  id: "prevencionRiesgos",
  titulo: "4.11 Prevención y administración de riesgos",
  bloques: [
    {
      tipo: "subtitulo",
      contenido: "4.11.1 Identificación de amenazas y evaluación de riesgos",
    },
    {
      tipo: "texto",
      contenido: "Para prevenir, primero hay que identificar las posibles fuentes de daño contra los sistemas y valorar qué impacto tendrían:",
    },
    {
      tipo: "lista",
      contenido: [
        "Identificación de amenazas: Reconocer los vectores que están activos, como las campañas masivas de phishing, la filtración de credenciales corporativas en bases de datos externas, las extensiones del navegador modificadas con código malicioso o los intentos de acceso físico a dispositivos extraviados.",
        "Evaluación de riesgos: Se pondera con una matriz de probabilidad contra impacto:",
        "Alto impacto / Alta probabilidad: Robo de credenciales por medio de páginas web suplantadas (phishing).",
        "Bajo impacto / Baja probabilidad: Infección del núcleo del sistema operativo con malware persistente (muy mitigada por Verified Boot y por el sistema de archivos de solo lectura).",
      ],
    },
    {
      tipo: "subtitulo",
      contenido: "4.11.2 Medidas preventivas y actualizaciones de seguridad",
    },
    {
      tipo: "lista",
      contenido: [
        "Defensa en profundidad (Defense in Depth): Se aplican controles superpuestos. Si un ataque pasa el filtro de red (por ejemplo, el usuario entra a un sitio malicioso), el aislamiento de procesos evita que el código escape hacia la máquina host; y si ese código intenta quedarse, el arranque verificado lo elimina en el siguiente reinicio.",
        "Ciclo de parches y parches de día cero (Zero-Day): Se da seguimiento al ciclo quincenal de actualizaciones menores y a los despliegues urgentes (hotfixes) cuando se descubren vulnerabilidades críticas en el motor V8 o en componentes de Chromium.",
      ],
    },
    {
      tipo: "subtitulo",
      contenido: "4.11.3 Buenas prácticas del usuario y seguridad en redes",
    },
    {
      tipo: "lista",
      contenido: [
        "Capacitación del factor humano: Entrenar a las personas para que identifiquen dominios sospechosos, verifiquen a los remitentes de correo y no autoricen permisos anormales en el navegador (como acceso al portapapeles, la cámara o notificaciones persistentes).",
        "Segmentación de red: Conectar los dispositivos a redes VLAN corporativas o a redes de invitados que estén separadas de los servidores con datos críticos o de los controladores de dominio.",
      ],
    },
    {
      tipo: "subtitulo",
      contenido: "4.11.4 Respuesta ante incidentes",
    },
    {
      tipo: "texto",
      contenido: "Esta es la metodología para seguir cuando se sospecha o se confirma una brecha de seguridad:",
    },
    {
      tipo: "lista",
      contenido: [
        "Detección y contención: Identificar tráfico anómalo o recibir el reporte de una credencial comprometida, y desconectar de inmediato la interfaz de red (apagar el Wi-Fi o desconectar el cable Ethernet).",
        "Erradicación (a nivel de cuenta): Cambiar la contraseña de Google, revocar los tokens de sesión activos y forzar el cierre de sesión en todos los clientes web desde la consola de seguridad.",
        "Erradicación (a nivel de dispositivo): Ejecutar un Powerwash (restablecimiento de fábrica) para borrar cualquier archivo local o perfil residual del almacenamiento del equipo.",
        "Recuperación: Volver a autenticarse con credenciales nuevas y restaurar el perfil limpio sincronizado desde la nube.",
        "Análisis posterior (Post-Mortem): Determinar de dónde vino el compromiso (un sitio visitado, una extensión instalada) y aplicar directivas en la consola para bloquear ese vector de forma global.",
      ],
    },
  ],
};
