import type { TemaData } from "../componentes/PlantillaTema";

export const clasificacionEstructuralData: TemaData = {
  id: "clasificacion-estructural",
  titulo: "1.4. Clasificación Estructural del Sistema Operativo",
  bloques: [
    {
      tipo: "texto",
      contenido:
        "Para comprender y evaluar formalmente a ChromeOS dentro de los conceptos teóricos de la ingeniería de sistemas operativos, es necesario clasificarlo de acuerdo con su estructura interna, la administración de usuarios, el manejo de tareas y la compatibilidad con procesadores:",
    },
    {
      tipo: "lista",
      contenido: [
        "Por su Estructura Interna (Sistema Híbrido Modificado): Aunque el núcleo de Linux mantiene una base monolítica para garantizar un alto rendimiento en el acceso al hardware, ChromeOS separa las aplicaciones del núcleo mediante contenedores y máquinas virtuales.",
        "Por el Número de Usuarios (Multiusuario): Está diseñado como un sistema multiusuario a nivel de cuentas independientes. Permite configurar múltiples perfiles de Google en un mismo equipo, manteniendo las contraseñas, configuraciones y documentos de cada persona estrictamente separados y privados mediante cifrado por hardware.",
        "Por el Número de Tareas (Multitarea Preventiva): Emplea un esquema de multitarea preventiva. El planificador del núcleo interrumpe y gestiona las ráfagas de procesamiento de manera automática, asegurando que la interfaz gráfica y la pestaña activa del usuario no pierdan fluidez ante procesos pesados en segundo plano.",
        "Por el Número de Procesadores (Multiprocesamiento Simétrico - SMP): Es compatible con arquitecturas de múltiples núcleos, distribuyendo los hilos de ejecución de manera equilibrada entre los distintos núcleos físicos y lógicos de la computadora.",
      ],
    },
  ],
};
