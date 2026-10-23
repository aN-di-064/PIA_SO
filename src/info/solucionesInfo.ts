import type { TemaData } from "../componentes/PlantillaTema";

export const solucionesData: TemaData = {
  id: "soluciones",
  titulo: "2.4. Soluciones Históricas y Teóricas al Control de Concurrencia",
  bloques: [
    {
      tipo: "texto",
      contenido:
        "Antes de que el hardware y los sistemas operativos modernos proveyeran primitivas estandarizadas de sincronización, los científicos de la computación desarrollaron algoritmos basados pura y exclusivamente en software.",
    },
    {
      tipo: "subtitulo",
      contenido: "2.4.1. Soluciones por Software: Dekker y Peterson",
    },
    {
      tipo: "texto",
      contenido:
        "El Algoritmo de Dekker representó uno de los primeros intentos exitosos de resolver el problema de la exclusión mutua para dos procesos utilizando únicamente memoria compartida y sin requerir instrucciones atómicas especiales de hardware. A través de la combinación de variables de estado (señales de interés) y una variable de turno para romper empates, Dekker logró garantizar la exclusión mutua, aunque su estructura de control resultaba compleja y difícil de escalar a múltiples procesos.",
    },
    {
      tipo: "texto",
      contenido:
        "El matemático Gary Peterson desarrolló el Algoritmo de Peterson, una solución notablemente más simple y elegante para dos procesos. Peterson combinó un arreglo booleano para indicar el interés de cada proceso en ingresar a la sección crítica y una variable entera de turno para ceder la prioridad en caso de conflicto. Este algoritmo cumple formalmente con la exclusión mutua, previene el interbloqueo y evita la inanición de manera directa. Las soluciones puramente basadas en software sufren de un inconveniente crítico en procesadores modernos: dependen de la espera activa, consumiendo ciclos de CPU de manera improductiva mientras el hilo evalúa repetidamente una condición en un bucle.",
    },
  ],
};
