import type { TemaData } from "../componentes/PlantillaTema";

export const arquitecturaInternaData: TemaData = {
  id: "arquitectura-interna",
  titulo: "1.2. Arquitectura Interna del Sistema Operativo",
  bloques: [
    {
      tipo: "subtitulo",
      contenido: "1.2.1 El Núcleo y los Niveles de Privilegio",
    },
    {
      tipo: "texto",
      contenido:
        "Para entender cómo funciona ChromeOS, es necesario revisar su base interna. El sistema utiliza una versión adaptada del núcleo monolítico de Linux. Esta elección le proporciona un gran estabilidad, compatibilidad directa con múltiples componentes de hardware y un manejo de tareas sumamente firme.",
    },
    {
      tipo: "texto",
      contenido:
        "A nivel de ejecución, el hardware de la computadora organiza el software en anillos de protección o niveles de privilegio:",
    },
    {
      tipo: "lista",
      contenido: [
        "Modo Núcleo (Ring 0): En esta capa se ejecuta el kernel de Linux. Aquí residen los controladores esenciales se usan para administrar la pantalla, el Wi-Fi o los discos de almacenamiento, y los gestores de memoria. Tienen acceso total a los componentes físicos de la máquina.",
        "Modo Usuario (Ring 3): Es donde corren las aplicaciones cotidianas, la interfaz gráfica del sistema y el propio navegador. A diferencia del modo núcleo, este nivel no puede comunicarse directamente con el hardware sin antes pasar por las reglas del kernel.",
      ],
    },
    {
      tipo: "subtitulo",
      contenido: "1.2.2. Capa de Servicios del Sistema",
    },
    {
      tipo: "texto",
      contenido:
        "En lugar de cargar servicios pesados en la memoria, ChromeOS utiliza pequeños programas en segundo plano que son conocidos como demonios o daemons. Estos programas se encargan de tareas específicas y se comunican entre sí utilizando un canal de mensajes interno del sistema llamado D-Bus.",
    },
  ],
};
