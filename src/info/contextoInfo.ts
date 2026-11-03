import type { TemaData } from "../componentes/PlantillaTema";

export const contextoData: TemaData = {
  id: "contexto",
  titulo: "1. Introducción y Contexto Tecnológico",
  bloques: [{
    tipo: "subtitulo",
    contenido: "Introducción y Contexto Tecnológico",
  },
  {
    tipo: "texto",
    contenido: "El desarrollo de los sistemas operativos modernos ha estado históricamente condicionado por la evolución del hardware y la infraestructura de redes. Durante décadas, la computación personal se basó en el paradigma de la \"aplicación de escritorio local\", donde cada programa requería una instalación directa en el disco duro del equipo, consumiendo recursos locales masivos de procesamiento y almacenamiento. A finales de la década de 2000, este panorama comenzó a transformarse drásticamente gracias a la expansión global de la banda ancha, la maduración de las tecnologías web y el surgimiento del concepto de computación en la nube.",
  },
  {
    tipo:"texto",
    contenido: "En este contexto de transformación digital, Google conceptualizó un sistema operativo radicalmente diferente. Lejos de competir directamente con los gigantes tradicionales del software de escritorio mediante la acumulación de funciones locales complejas, la compañía apostó por un sistema ligero, rápido y centrado en la web. Así nació Chrome OS, un sistema operativo diseñado originalmente para redefinir la forma en que los usuarios interactúan con la información, priorizando la conectividad permanente, la seguridad multicapa y la simplicidad operativa.",
  },
  ]
}