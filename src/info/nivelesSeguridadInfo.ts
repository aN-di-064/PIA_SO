import type { TemaData } from "../componentes/PlantillaTema";

export const nivelesSeguridadData: TemaData = {
  id: "nivelesSeguridad",
  titulo: "4.10 Niveles de seguridad según el entorno",
  bloques: [
    {
      tipo: "lista",
      contenido: [
        "Usuario: Identidad individual y hábitos de navegación. Mecanismos: Contraseñas robustas, PIN local, 2SV (llaves de seguridad), Navegación Segura.",
        "Red: Integridad y cifrado del tráfico. Mecanismos: WPA3 / 802.1X, túneles VPN, DoH, TLS 1.3, filtrado de puertos.",
        "Empresa: Gobernanza centralizada y políticas de flota. Mecanismos: Consola Google Admin, borrado remoto, listas de extensiones, enrolamiento forzado.",
      ],
    },
    {
      tipo: "subtitulo",
      contenido: "4.10.1 Nivel de usuario",
    },
    {
      tipo: "texto",
      contenido: "Este nivel se enfoca en las medidas que controla directamente quien usa el equipo para proteger su identidad y sus hábitos de uso:",
    },
    {
      tipo: "lista",
      contenido: [
        "Seguridad de la cuenta: Crear contraseñas complejas y únicas, sin reutilizar credenciales entre plataformas externas y la cuenta principal del sistema.",
        "Contraseña / PIN y biometría: Usar un PIN numérico con restricciones aplicadas por hardware para desbloquear la pantalla rápidamente, y dejar la contraseña completa para los inicios de sesión en frío o después de reiniciar el sistema.",
        "Verificación en dos pasos (2SV / MFA): Configurar factores de autenticación adicionales, dando prioridad a los estándares resistentes al phishing, como las llaves de seguridad físicas FIDO2/WebAuthn (por ejemplo, Titan Security Key o YubiKey) o las confirmaciones prompt en dispositivos móviles.",
        "Navegación segura: Activar voluntariamente la Protección Mejorada en los ajustes del navegador para permitir el análisis predictivo de descargas y la telemetría de sitios en tiempo real.",
      ],
    },
    {
      tipo: "subtitulo",
      contenido: "4.10.2 Nivel de red",
    },
    {
      tipo: "texto",
      contenido: "Aquí el objetivo es asegurar el canal de comunicación y proteger al equipo de atacantes que estén en la misma topología de red:",
    },
    {
      tipo: "lista",
      contenido: [
        "Seguridad Wi-Fi: Usar siempre cifrados robustos como WPA2-Enterprise o WPA3-SAE y evitar las redes abiertas o sin cifrado de enlace (Open / WEP).",
        "Uso de VPN: Emplear túneles cifrados en redes corporativas remotas o en conexiones poco confiables, para que todo el tráfico IP viaje encapsulado.",
        "HTTPS y TLS estricto: Comprobar que haya certificados digitales válidos en cada sesión web y rechazar de inmediato las excepciones de seguridad cuando haya errores en la validación de las autoridades emisoras.",
        "Control de conexiones: Configurar DNS sobre HTTPS (DoH) para proteger la resolución de nombres, y aislar puertos, de modo que el Chromebook no exponga servicios locales a la red de área local (LAN).",
        "Protección contra ataques de red: Resistencia pasiva ante técnicas como el envenenamiento ARP (ARP Spoofing), la manipulación de MTU o los intentos de secuestro de sesión, gracias al cifrado de extremo a extremo.",
      ],
    },
    {
      tipo: "subtitulo",
      contenido: "4.10.3 Nivel de empresa",
    },
    {
      tipo: "texto",
      contenido: "Este nivel se centra en controlar de manera centralizada flotas de dispositivos con herramientas empresariales (Chrome Enterprise):",
    },
    {
      tipo: "lista",
      contenido: [
        "Administración centralizada: Aplicar directivas desde la Consola de Administración de Google Workspace a miles de equipos sin tener que tocarlos físicamente.",
        "Políticas de seguridad: Forzar el bloqueo automático por inactividad, deshabilitar el modo invitado, bloquear la descarga de ciertos tipos de archivo y restringir el modo desarrollador.",
        "Control de usuarios y dispositivos: Limitar el inicio de sesión a cuentas del dominio institucional para que no se pueda entrar con cuentas personales de Gmail.",
        "Aplicación de políticas de red: Distribuir de forma automática perfiles de conexión Wi-Fi corporativos con autenticación 802.1X EAP-TLS, usando certificados digitales de cliente instalados de forma remota en el TPM.",
        "Actualizaciones y controles de seguridad: Definir los canales de actualización (Canal Estable y Canal de Soporte Extendido, LTC), retener versiones específicas para validar la compatibilidad y monitorear el inventario de vulnerabilidades.",
      ],
    },
  ],
};
