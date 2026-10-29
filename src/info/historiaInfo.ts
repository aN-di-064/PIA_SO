import { EventoHistoria } from "../componentes/PlantillaLineaTiempo";

export const historiaEventos: EventoHistoria[] = [
  {
    id: "1",
    anio: "1940s",
    titulo: "Primera Generación: Sin Sistema Operativo",
    descripcion:
      "Las primeras computadoras programables funcionaban directamente sobre el hardware con lenguaje máquina. No existían los sistemas operativos; el programador interactuaba mediante paneles de conmutadores.",
  },
  {
    id: "2",
    anio: "1950s",
    titulo: "Procesamiento por Lotes (Batch Processing)",
    descripcion:
      "Surgieron los primeros monitores residentes que agrupaban trabajos similares en cintas magnéticas para ejecutarlos en secuencia, reduciendo el tiempo desperdiciado entre programa y programa.",
  },
  {
    id: "3",
    anio: "1960s",
    titulo: "Multiprogramación y Tiempo Compartido",
    descripcion:
      "Nace la capacidad de cargar múltiples programas en memoria al mismo tiempo. Aparecen proyectos pioneros como CTSS y MULTICS, sentando las bases para el acceso multiusuario.",
  },
  {
    id: "4",
    anio: "1970s",
    titulo: "Surgimiento de UNIX y Lenguaje C",
    descripcion:
      "Ken Thompson y Dennis Ritchie desarrollan UNIX en Bell Labs reescribiéndolo en C, lo que le otorgó una portabilidad sin precedentes y definió la filosofía de diseño modular de software.",
  },
  {
    id: "5",
    anio: "1980s",
    titulo: "Computadoras Personales y GUIs",
    descripcion:
      "Llegan sistemas operativos para consumo personal como MS-DOS, Apple Macintosh System Software y Windows, introduciendo las interfaces gráficas con ventanas y ratón.",
  },
  {
    id: "6",
    anio: "1990s",
    titulo: "Linux y la Era de Internet",
    descripcion:
      "Linus Torvalds crea el núcleo Linux. Las redes y los protocolos TCP/IP se vuelven estándar dentro del núcleo de todos los sistemas operativos comerciales y libres.",
  },
  {
    id: "7",
    anio: "2010s+",
    titulo: "Sistemas Móviles y basados en la Nube",
    descripcion:
      "Android, iOS y ChromeOS redefinen el mercado enfocándose en contenedores, seguridad criptográfica por hardware y sincronización continua con la nube.",
  },
];
