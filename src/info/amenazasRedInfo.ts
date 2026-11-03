import type { TemaData } from "../componentes/PlantillaTema";

export const amenazasRedData: TemaData = {
  id: "amenazasRed",
  titulo: "4.2 Amenazas de seguridad en redes",
  bloques: [
    {
      tipo: "subtitulo",
      contenido: "4.2.1 Phishing",
    },
    {
      tipo: "texto",
      contenido: "El phishing es la suplantación de otra entidad con la finalidad de convencer al usuario para que revele sus credenciales privadas. Normalmente llega por correo, mensajes o páginas falsas que parecen ser de un banco, de Google o de una red social. Es de los ataques más comunes porque no necesita \"hackear\" nada: engaña a la persona para que ella misma entregue su contraseña.",
    },
    {
      tipo: "subtitulo",
      contenido: "4.2.2 Ataques de intermediario (Man-in-the-Middle)",
    },
    {
      tipo: "texto",
      contenido: "En este ataque el delincuente se coloca en medio de la comunicación entre el usuario y el sitio que visita, y de esa forma puede ver o modificar los datos mientras viajan. Es difícil de detectar porque la información se intercepta a mitad del camino, entre el dispositivo y el router, sin que la víctima lo note.",
    },
    {
      tipo:"imagen",
      contenido:require('../../assets/images/tabIcons/4.2.png')
    },
    {
      tipo: "subtitulo",
      contenido: "4.2.3 Redes Wi-Fi maliciosas",
    },
    {
      tipo: "texto",
      contenido: "Son redes falsas que se hacen pasar por una red conocida, por ejemplo, con el nombre de una cafetería o un hotel. Una variante es el evil twin (gemelo malvado), donde el atacante copia el nombre de la red legítima para que los dispositivos se conecten a la falsa. Una recomendación común es preguntar al establecimiento cuál es el nombre exacto de su red antes de conectarse.",
    },
    {
      tipo: "subtitulo",
      contenido: "4.2.4 Robo de credenciales",
    },
    {
      tipo: "texto",
      contenido: "Es cuando alguien obtiene el usuario y la contraseña de una persona, ya sea por phishing, por sitios falsos, por programas espía o por una filtración de datos. Con esas credenciales el atacante puede entrar a las cuentas sin tener que atacar el equipo.",
    },
    {
      tipo: "subtitulo",
      contenido: "4.2.5 Ataques de ingeniería social",
    },
    {
      tipo: "texto",
      contenido: "Estos ataques se aprovechan de la confianza o el miedo de las personas más que de fallas técnicas: mensajes de \"su equipo tiene un virus\", llamadas falsas de soporte técnico o premios inesperados. Son comunes los avisos falsos de virus, que en realidad son estafas para que el usuario instale algo o llame a un número.",
    },
    {
      tipo: "subtitulo",
      contenido: "4.2.6 Sitios web maliciosos",
    },
    {
      tipo: "texto",
      contenido: "Son páginas creadas para infectar, engañar o robar datos mediante descargas falsas, anuncios engañosos o formularios que imitan a otros sitios. El navegador Chrome compara las direcciones con listas de sitios peligrosos y muestra una advertencia antes de dejar entrar al usuario.",
    },
    {
      tipo: "subtitulo",
      contenido: "4.2.7 Intercepción de comunicaciones",
    },
    {
      tipo: "texto",
      contenido: "Sucede cuando alguien captura información que viaja por la red, sobre todo si no está cifrada. También se pueden observar datos que no se ven tan importantes, como las consultas DNS o la dirección MAC del dispositivo, que sirven para rastrear qué sitios se visitan o dónde se encuentra el equipo.",
    },
  ],
};
