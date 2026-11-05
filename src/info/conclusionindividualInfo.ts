import type { TemaData } from "../componentes/PlantillaTema";

export const conclusionindividualData: TemaData = {
    id: "conclusion individual",
  titulo: "Conclusión individual",
  bloques: [
    {
      tipo: "texto",
      contenido: "Las redes seguras son la base de un sistema como ChromeOS, que trabaja constantemente con servicios en la nube y en el que casi todo lo que hace el usuario viaja por una red. Por eso el sistema cifra el tráfico con TLS 1.3, resuelve los nombres de dominio con DNS sobre HTTPS, valida los certificados digitales en cada conexión y permite usar una VPN cuando la red no es de confianza. Sin estas protecciones, incluso un sistema operativo muy bien blindado quedaría expuesto a la intercepción del tráfico y a la suplantación de sitios en cuanto se conecta a una red pública."
    },
    {
      tipo: "texto",
      contenido: "Más allá de la red, ChromeOS se apoya en varias capas que se respaldan entre sí. El chip de seguridad y el arranque verificado (Verified Boot) comprueban desde el inicio que el sistema no haya sido alterado; el sistema de archivos de solo lectura y las actualizaciones automáticas con particiones A/B reducen la posibilidad de que una amenaza se quede de forma persistente; y el sandboxing, el aislamiento de sitios y las máquinas virtuales para Android y Linux evitan que un fallo en una aplicación o en una pestaña llegue al resto del equipo. Es esta defensa en profundidad, y no un solo mecanismo, lo que le da a ChromeOS su nivel de seguridad."
    },
    {
      tipo: "texto",
      contenido: "Aun así, ninguna de estas defensas puede impedir que una persona entregue por voluntad propia su contraseña en una página de phishing o instale una extensión con permisos excesivos. Por eso la participación del usuario es indispensable: mantener el equipo actualizado, usar contraseñas únicas, activar la verificación en dos pasos (de preferencia con llaves de seguridad físicas), evitar las redes Wi-Fi desconocidas, revisar con cuidado los sitios y los permisos que se conceden, y bloquear el dispositivo cada vez que se deja solo. La tecnología reduce el riesgo, pero los hábitos de quien la usa deciden en buena medida si esa protección realmente funciona."
    },
    {
      tipo: "texto",
      contenido: "Finalmente, la seguridad se aplica de forma distinta según el entorno. En un equipo personal depende sobre todo de las decisiones del usuario, como el cuidado de su cuenta, sus contraseñas y su forma de navegar. En un entorno empresarial o educativo, en cambio, se suma el control centralizado desde la Consola de Administración de Google: políticas para toda la flota, restricción de cuentas al dominio institucional, bloqueo y borrado remoto e inscripción forzada. Ambos entornos aprovechan la misma arquitectura, pero los equipos administrados tienen una ventaja clara, siempre que los administradores configuren bien las políticas, ya que un error de configuración también se multiplica en toda la flota."
    },
],
}