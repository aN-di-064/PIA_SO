import type { TemaData } from "../componentes/PlantillaTema";

export const controlEspaciosData: TemaData = {
  id: "control-espacios",
  titulo: "3.2 Control de Espacios Disponibles y Ocupados",
  bloques: [
    {
      tipo: "texto",
      contenido:
        "Para saber en todo momento qué parte de la memoria está libre y cuál ocupada, el sistema operativo realiza varias tareas. En Chrome OS se llevan a cabo de la siguiente manera:",
    },
    {
      tipo: "lista",
      contenido: [
        "Llevar la lista de marcos libres y ocupados: El kernel conserva las listas del sistema buddy, ordenadas por tamaño de grupo de marcos.",
        "Saber dónde está cada página: Cada proceso tiene su tabla de páginas multinivel, que registra el marco donde está cada página y, mediante bits de control, si la página está presente en RAM o si fue modificada. La MMU y la TLB usan esa información en cada acceso.",
        "Medir cuánta memoria hay disponible: El servicio resourced expone la cantidad de memoria disponible y los umbrales de presión moderada y crítica, para que otros componentes del sistema reaccionen.",
        "Priorizar procesos: Cada proceso recibe una puntuación (oom_score_adj): los servicios críticos tienen valores muy bajos y nunca se eliminan, mientras que los procesos de las pestañas tienen valores altos y son los primeros en sacrificarse si hace falta.",
        "Recuperar memoria cuando falta: Se recuperan páginas poco usadas, se comprimen en zram, se descartan pestañas y se cierran aplicaciones de Android de baja prioridad.",
        "Mostrar el estado al usuario: El Administrador de tareas (Shift + Esc) y las páginas chrome://discards y chrome://system permiten ver el consumo de memoria y el orden de descarte.",
      ],
    },
  ],
};
