import type { TemaData } from "../componentes/PlantillaTema";

export const buenasPracticasData: TemaData = {
  id: "buenasPracticas",
  titulo: "4.13 Soluciones y buenas prácticas",
  bloques: [
    {
      tipo: "lista",
      contenido: [
        "Mantener ChromeOS actualizado: Aplicar de inmediato los reinicios que pida el sistema en cuanto avise que hay una actualización descargada. También conviene revisar de vez en cuando, en Configuración > Información de ChromeOS, que el equipo no haya llegado a su fecha de expiración de actualizaciones (AUE).",
        "Utilizar contraseñas seguras: Definir contraseñas robustas para la cuenta de Google (mínimo 12 caracteres, alfanuméricas y con caracteres especiales) que no se compartan con ningún otro servicio web. Ayuda apoyarse en el Gestor de Contraseñas de Google para crear y revisar credenciales únicas.",
        "Activar la verificación en dos pasos (2SV): Configurar la verificación en dos fases en la cuenta de Google de manera obligatoria, dando prioridad a las llaves de seguridad físicas (FIDO2/WebAuthn) o a los códigos de aplicaciones autenticadoras, y evitar el envío de códigos por SMS porque es vulnerable a ataques de SIM Swapping.",
        "Evitar redes Wi-Fi públicas y desconocidas: No conectarse a redes inalámbricas sin contraseña o que usen protocolos de cifrado obsoletos (WEP / WPA). Si no queda otra opción en un lugar público, no entrar a servicios financieros ni a transacciones críticas.",
        "Utilizar VPN en redes abiertas o externas: Activar un túnel VPN verificado y de confianza antes de intercambiar cualquier información sensible en redes que no estén bajo el control directo del usuario o de su organización.",
        "Restringir la instalación de extensiones: Instalar solo las extensiones esenciales, desarrolladas por organizaciones verificadas en la Chrome Web Store. Revisar con cuidado los permisos que piden y desinstalar enseguida las que ya no se necesiten.",
        "Verificar bien los sitios web antes de escribir credenciales: Revisar siempre la barra de direcciones para confirmar que el dominio esté escrito exactamente bien, que use HTTPS y que no haya advertencias de certificados inválidos.",
        "Mantener el dispositivo bloqueado al alejarse: Bloquear la pantalla manualmente con Buscar + L al levantarse del lugar de trabajo, configurar tiempos de inactividad cortos (máximo 5 minutos) para la suspensión automática y no dejar el equipo sin vigilancia en espacios públicos o compartidos.",
      ],
    },
  ],
};
