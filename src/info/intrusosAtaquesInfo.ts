import type { TemaData } from "../componentes/PlantillaTema";

export const intrusosAtaquesData: TemaData = {
  id: "intrusosAtaques",
  titulo: "4.4 Tipos de intrusos y ataques",
  bloques: [
    {
      tipo: "subtitulo",
      contenido: "4.4.1 Intrusos externos.",
    },
    {
      tipo: "texto",
      contenido: "Son personas que intentan entrar al equipo o a la cuenta desde internet sin tener ninguna relación con el usuario. La mayoría de las protecciones de ChromeOS, como el sandboxing y las actualizaciones, están pensadas para este tipo de ataques masivos que buscan cualquier equipo vulnerable.",
    },
    {
      tipo: "subtitulo",
      contenido: "4.4.2 Usuarios no autorizados.",
    },
    {
      tipo: "texto",
      contenido: "Son personas que tienen el equipo físicamente, por ejemplo, alguien que toma el dispositivo sin permiso. Para esto sirven el bloqueo de pantalla y el cifrado de los datos de cada cuenta, que evitan que otra persona use la sesión o lea los archivos. Si el equipo es de una escuela o empresa, también se puede restringir qué cuentas pueden iniciar sesión.",
    },
    {
      tipo: "subtitulo",
      contenido: "4.4.3 Ataques a cuentas. ",
    },
    {
      tipo: "texto",
      contenido: "Buscan quedarse con la cuenta de Google del usuario, que en ChromeOS es la llave para entrar al equipo y a casi todos los servicios. Se evitan con contraseñas seguras, la verificación en dos pasos y llaves de seguridad.",
    },
    {
      tipo: "subtitulo",
      contenido: "4.4.4 Ataques de red. ",
    },
    {
      tipo: "texto",
      contenido: "Incluyen interceptar el tráfico, crear redes falsas o modificar las consultas DNS para llevar al usuario a sitios falsos. ChromeOS responde con conexiones cifradas, revisión de certificados y DNS seguro.",
    },
    {
      tipo: "subtitulo",
      contenido: "4.4.5 Ataques mediante credenciales. ",
    },
    {
      tipo: "texto",
      contenido: "Consisten en probar contraseñas robadas o muy comunes en distintas cuentas. Por eso es importante no repetir la misma contraseña, y ChromeOS limita los intentos fallidos con ayuda de un chip de seguridad para dificultar que alguien adivine un PIN probando combinaciones.",
    },
    {
      tipo: "subtitulo",
      contenido: "4.4.6 Explotación de vulnerabilidades. ",
    },
    {
      tipo: "texto",
      contenido: "Es cuando un atacante aprovecha un error en el software para meter código malicioso. Las defensas son el aislamiento de procesos, las actualizaciones rápidas y la revisión constante de fallas por parte de Google.",
    },
    {
      tipo: "subtitulo",
      contenido: "4.4.7 Ataques dirigidos al usuario. ",
    },
    {
      tipo: "texto",
      contenido: "Son los que se enfocan en engañar a la persona, como el phishing o la ingeniería social. Como no dependen de una falla técnica, la mejor defensa es combinar las advertencias del navegador con el sentido común del usuario: desconfiar de mensajes urgentes y revisar siempre la dirección de los sitios.",
    },
  ],
};
