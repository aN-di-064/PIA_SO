import type { TemaData } from "../componentes/PlantillaTema";

export const utileriasData: TemaData = {
  id: "utilerias",
  titulo: "1.5. Utilerías del Sistema y Diagnóstico Interno",
  bloques: [
    {
      tipo: "texto",
      contenido:
        "Al igual que otros sistemas operativos modernos orientados a la informática profesional y educativa, ChromeOS incluye herramientas integradas diseñadas específicamente para el monitoreo de recursos, la solución de problemas y la supervisión del estado del hardware. Estas utilerías permiten al usuario y al administrador conocer el comportamiento interno del equipo sin necesidad de instalar software externo.",
    },
    {
      tipo: "lista",
      contenido: [
        "Chrome Shell (Crosh): Es una interfaz de línea de comandos minimalista a la que se puede acceder presionando las teclas Ctrl + Alt + T. Desde esta consola, los usuarios avanzados y administradores pueden ejecutar comandos de diagnóstico de red, pruebas de rendimiento de memoria, verificar el estado de los componentes y revisar los registros del sistema operativo.",
        "Administrador de Tareas Nativo (Shift + Esc): A diferencia de los administradores tradicionales, esta herramienta supervisa de manera transparente y detallada el consumo exacto de memoria RAM, porcentaje de CPU, uso de red y procesos activos de cada pestaña del navegador, cada extensión instalada y cada contenedor virtual, facilitando el cierre inmediato de procesos que consuman demasiados recursos.",
      ],
    },
  ],
};
