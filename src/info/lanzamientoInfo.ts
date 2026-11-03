import type { TemaData } from "../componentes/PlantillaTema";

export const lanzamientoData: TemaData = {
  id: "lanzamiento",
  titulo: "3. Lanzamiento Comercial y la Primera Generación de Chromebooks ",
  bloques: [
    {
      tipo: "texto",
      contenido: "Tras dos años de desarrollo abierto y pruebas con la comunidad de código abierto, los primeros dispositivos comerciales equipados con Chrome OS oficialmente denominados Chromebook salieron al mercado a mediados de 2011. Fabricados por socios estratégicos como Acer y Samsung, estos equipos se comercializaron inicialmente bajo un modelo de distribución basado en la nube y la suscripción educativa o empresarial."
    },
    {
      tipo: "texto",
      contenido: "Sin embargo, las primeras reacciones del mercado reflejaron ciertos desafíos estructurales:"
    },
    {
        tipo:"lista",
        contenido:[
            "Dependencia crítica de la conectividad: Al carecer de un almacenamiento local amplio y de aplicaciones nativas potentes, la experiencia del usuario se degradaba severamente cuando no se disponía de una conexión a internet activa.",
            "Escepticismo inicial: Los críticos y usuarios tradicionales cuestionaban la viabilidad de un ordenador que dependía casi en su totalidad de la nube, en una época donde las redes móviles e inalámbricas no contaban con la cobertura ni la velocidad actuales."
        ]

    },
]
}