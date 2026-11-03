import type { TemaData } from "../componentes/PlantillaTema";

export const conectividadRedData: TemaData = {
  id: "conectividadRed",
  titulo: "4.1 Conectividad de red en ChromeOS",
  bloques: [
    {
      tipo: "subtitulo",
      contenido: "4.1.1 Conexiones Wi-Fi",
    },
    {
      tipo: "texto",
      contenido: "El Wi-Fi es la forma de conexión que más usada. El usuario abre el panel de configuración rápida, elige una red, escribe la contraseña y el sistema la recuerda para la próxima vez. ChromeOS funciona con los tipos de seguridad actuales para redes inalámbricas, incluido WPA3 en los equipos que lo soportan. También funciona con redes de escuelas y empresas que piden usuario y certificado para entrar, y en ese caso el Chromebook revisa que el servidor de la red sea el correcto antes de conectarse, para no caer en una red falsa.",
    },
    {
      tipo: "subtitulo",
      contenido: "4.1.2 Conexiones Ethernet",
    },
    {
      tipo: "texto",
      contenido: "Ethernet es una conexión de red mediante cable. Generalmente ofrece una conexión estable y, a diferencia del Wi-Fi, requiere una conexión física con la infraestructura de red. En los dispositivos con ChromeOS puede utilizarse mediante un adaptador USB o una base de conexión. En redes de escuelas y empresas también puede requerirse autenticación para permitir el acceso únicamente a usuarios o dispositivos autorizados.",
    },
    {
      tipo: "subtitulo",
      contenido: "4.1.3 Bluetooth como conexión inalámbrica",
    },
    {
      tipo: "texto",
      contenido: "El Bluetooth permite conectar dispositivos cercanos, como audífonos, ratones, teclados, bocinas o teléfonos. Aunque no se utiliza principalmente para acceder a Internet, sigue siendo una forma de comunicación inalámbrica y, por lo tanto, debe utilizarse de manera segura. Para establecer una conexión es necesario realizar un proceso de emparejamiento y el Bluetooth puede desactivarse desde la configuración del sistema cuando no se necesita. Como medida de seguridad, es recomendable desactivarlo cuando no esté en uso y eliminar dispositivos que ya no sean necesarios.",
    },
    {
      tipo: "subtitulo",
      contenido: "4.1.4 Configuración y administración de redes",
    },
    {
      tipo: "texto",
      contenido: "El usuario puede administrar las conexiones de red desde la configuración de ChromeOS. Desde ahí es posible activar o desactivar el Wi-Fi, agregar redes, configurar DNS, utilizar un proxy o establecer una conexión VPN. En escuelas y empresas, la administración puede realizarse desde la consola de administración de Google. Desde ella es posible configurar redes Wi-Fi, Ethernet y VPN, instalar certificados y establecer qué usuarios o dispositivos pueden utilizarlas. Google indica, por ejemplo, que cada unidad organizativa puede tener hasta 300 redes      Wi-Fi preconfiguradas.",
    },
    {
      tipo:"imagen",
      contenido:require('../../assets/images/tabIcons/4.1.png')
    },
    {
      tipo: "subtitulo",
      contenido: "4.1.5 Redes públicas y privadas",
    },
    {
      tipo: "texto",
      contenido: "Una red privada es aquella que se encuentra bajo el control de una persona, familia, escuela o empresa, mientras que una red pública puede encontrarse en lugares como cafeterías, aeropuertos o centros comerciales. Las redes públicas pueden representar un mayor riesgo porque el usuario no tiene control sobre quién administra la red ni sobre los demás dispositivos conectados.",
    },
    {
      tipo: "texto",
      contenido: "Por eso, aunque ChromeOS cuenta con diferentes mecanismos de protección, es recomendable tener precaución al utilizar redes públicas, especialmente al ingresar contraseñas o información sensible. Cuando una red pública requiere aceptar términos o iniciar sesión mediante una página web, conocida como portal cautivo, ChromeOS puede detectar esta situación y mostrar al usuario la página necesaria para completar la conexión.",
    },
  ],
};