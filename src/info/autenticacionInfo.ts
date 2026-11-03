import type { TemaData } from "../componentes/PlantillaTema";

export const autenticacionData: TemaData = {
  id: "autenticacion",
  titulo: "4.5 Autenticación y control de acceso",
  bloques: [
    {
      tipo: "subtitulo",
      contenido: "4.5.1 Inicio de sesión en ChromeOS y cuenta de Google",
    },
    {
      tipo: "texto",
      contenido: "Para usar un Chromebook normalmente se inicia sesión con una cuenta de Google, que puede ser personal, de la escuela o de trabajo. También existe el modo invitado, que no guarda información al cerrar la sesión. El inicio de sesión es importante porque además de identificar al usuario sirve para descifrar sus datos: ChromeOS guarda la información de cada persona cifrada y solo la abre cuando se inicia sesión correctamente. Las llaves de cifrado se protegen con la combinación de lo que el usuario escribe (contraseña o PIN) y un chip de seguridad del equipo, así que hacen falta ambas cosas para abrir los datos. ",
    },
    {
      tipo: "subtitulo",
      contenido: "4.5.2 Contraseñas",
    },
    {
      tipo: "texto",
      contenido: "La contraseña de la cuenta sigue siendo la protección básica. Una buena contraseña debe ser larga, diferente para cada servicio y difícil de adivinar. Chrome incluye un administrador de contraseñas que ayuda a guardarlas y a avisar si alguna fue encontrada en una filtración de datos. ChromeOS también protege la contraseña con un chip de seguridad para evitar ataques de fuerza bruta, que consisten en probar muchas combinaciones.",
    },
    {
      tipo: "subtitulo",
      contenido: "4.5.3 PIN",
    },
    {
      tipo: "texto",
      contenido: "El PIN es una forma más rápida de iniciar sesión o desbloquear el equipo. Como suele ser más corto que una contraseña, ChromeOS limita el número de intentos fallidos: si se pasan, el PIN se bloquea y hay que usar la contraseña. En los equipos que tienen lector de huellas también se puede desbloquear con la huella; esos datos se procesan en un componente seguro, se quedan en el dispositivo y no se envían a la nube.",
    },
    {
      tipo: "subtitulo",
      contenido: "4.5.4 Bloqueo de pantalla",
    },
    {
      tipo: "texto",
      contenido: "El bloqueo de pantalla evita que otra persona use la sesión abierta cuando el usuario se levanta. Se puede activar al cerrar la tapa, al suspender el equipo o después de un rato sin usarlo, y se desbloquea con contraseña, PIN o huella. Es una medida sencilla, pero muy útil, porque muchos accesos no autorizados ocurren simplemente por descuido.",
    },
    {
      tipo: "subtitulo",
      contenido: "4.5.5 Verificación en dos pasos y llaves de seguridad",
    },
    {
      tipo: "texto",
      contenido: "La verificación en dos pasos agrega una segunda comprobación al iniciar sesión, como un código, una notificación en el celular o una llave de seguridad física. Así, aunque alguien robe la contraseña, no puede entrar sin el segundo paso. Las llaves de seguridad son de las opciones más fuertes porque solo funcionan con el sitio real para el que fueron registradas, lo que las hace resistentes al phishing: aunque el usuario entre a una página falsa, la llave no entrega la autenticación. ChromeOS las soporta para iniciar sesión en servicios web y el sistema está preparado para usarlas también como método de acceso al equipo.",
    },
     {
      tipo:"imagen",
      contenido:require('../../assets/images/tabIcons/4.4.png')
    },
    {
      tipo: "subtitulo",
      contenido: "4.5.6 Control de acceso a redes",
    },
    {
      tipo: "texto",
      contenido: "También se controla quién puede entrar a una red. En escuelas y empresas se usa la autenticación 802.1X con usuario y contraseña o certificados, de forma que solo equipos y personas autorizadas se conecten, y los administradores pueden distribuir certificados, permitir solo ciertas redes y obligar el uso de una VPN, En casa, el equivalente es proteger el router con una contraseña segura, usar cifrado WPA2 o WPA3 y cambiar la clave que trae de fábrica.",
    },
  ],
};