import type { TemaData } from "../componentes/PlantillaTema";

export const perdidaRoboData: TemaData = {
  id: "perdidaRobo",
  titulo: "4.9 Seguridad del dispositivo frente a pérdida o robo",
  bloques: [
    {
      tipo: "subtitulo",
      contenido: "4.9.1 Bloqueo del dispositivo y cierre de sesión",
    },
    {
      tipo: "texto",
      contenido: "El control de acceso físico inmediato protege al equipo ante una exposición accidental o un robo directo:",
    },
    {
      tipo: "lista",
      contenido: [
        "Políticas de bloqueo de pantalla: ChromeOS permite bloquear la pantalla al instante con una combinación de teclas (Buscar + L), al cerrar la tapa del equipo o después de un periodo de inactividad que se puede configurar.",
        "Suspensión segura: Cuando el equipo entra en suspensión o se bloquea, el sistema desasocia los descriptores de la sesión gráfica y pide volver a autenticarse con la contraseña principal de la cuenta, el PIN o datos biométricos (el sensor de huellas se procesa en un controlador integrado, sin salida a la red).",
        "Cierre de sesión total: Al terminar la sesión se cierran todos los procesos de ese usuario y las claves temporales de descifrado se eliminan de la memoria RAM del sistema.",
      ],
    },
    {
      tipo: "subtitulo",
      contenido: "4.9.2 Protección de la cuenta y de las credenciales",
    },
    {
      tipo: "texto",
      contenido: "La seguridad de acceso al dispositivo se centraliza en la identidad de Google o en la del proveedor de identidad federado (SAML/IdP):",
    },
    {
      tipo: "lista",
      contenido: [
        "Vinculación criptográfica local: Los identificadores locales no se almacenan en el disco como hashes convencionales sin protección, sino que están ligados al enclave del chip de seguridad. Sin una autenticación válida, las credenciales no se pueden extraer del dispositivo.",
        "Revocación de tokens desde la nube: Si el usuario pierde el equipo, puede entrar desde otro dispositivo a la consola de seguridad de su cuenta de Google y revocar la sesión activa del Chromebook. Con eso se invalidan los tokens OAuth y las cookies de autenticación, y el Chromebook tendrá que pedir de nuevo las credenciales completas la próxima vez que intente conectarse.",
      ],
    },
    {
      tipo: "subtitulo",
      contenido: "4.9.3 Administración de dispositivos perdidos",
    },
    {
      tipo: "texto",
      contenido: "Estas medidas sirven tanto para cuentas personales como para entornos corporativos:",
    },
    {
      tipo: "lista",
      contenido: [
        "Imposibilidad de inicio de sesión sin credenciales: El modo invitado se puede desactivar desde la configuración global, así una persona no autorizada no puede usar el equipo ni siquiera para navegar de forma temporal.",
        "Lista blanca de usuarios: Se puede limitar el inicio de sesión a cuentas específicas y autorizadas, lo que bloquea el uso de otras cuentas de Google que un atacante pudiera crear.",
      ],
    },
    {
      tipo: "subtitulo",
      contenido: "4.9.4 Bloqueo y borrado remoto en entornos administrados",
    },
    {
      tipo: "texto",
      contenido: "En los dispositivos gestionados con Chrome Enterprise Upgrade o Google Workspace for Education, los administradores tienen herramientas avanzadas a través de la Consola de Administración de Google:",
    },
    {
      tipo: "lista",
      contenido: [
        "Inhabilitación remota (Remote Disable): El administrador puede marcar un equipo como extraviado o robado. En cuanto el dispositivo se conecta a cualquier red, recibe la instrucción y se bloquea por completo: en pantalla fija aparece un mensaje institucional con datos de contacto para devolverlo, y el equipo queda inservible para cualquier usuario.",
        "Borrado remoto (Remote Wipe): Envía una orden que provoca un restablecimiento total de fábrica (Powerwash), con lo que se eliminan todas las particiones de usuario, los perfiles locales, los certificados y las claves de descifrado guardadas en el chip de seguridad.",
        "Inscripción forzada (Forced Re-enrollment): Aunque un ladrón formatee físicamente el almacenamiento o recupere todo el sistema operativo desde una memoria USB externa, durante la configuración inicial el hardware consulta a los servidores de Google y vuelve a inscribir el equipo automáticamente en el dominio institucional. De esta forma no puede reutilizarse como un Chromebook comercial o personal.",
      ],
    },
    // Agregar cuando se tenga una URL válida para la imagen (Ilustración 32: Pantalla de inhabilitación remota (Remote Disable)):
    // {
    //   tipo: "imagen",
    //   contenido: "URL_DE_LA_IMAGEN",
    // },
  ],
};
