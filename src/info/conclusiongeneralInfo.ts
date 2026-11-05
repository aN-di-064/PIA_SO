import type { TemaData } from "../componentes/PlantillaTema";

export const conclusiongeneralData: TemaData = {
  id: "conclusiongeneral",
  titulo: "Conclusión general",
  bloques: [
    {
      tipo: "texto",
      contenido:
        "El desarrollo de esta aplicación permitió aplicar de manera práctica los conocimientos adquiridos durante el semestre mediante la creación de una herramienta móvil enfocada en la consulta de información de Chrome OS. A lo largo del proyecto se integraron conceptos de programación, diseño de interfaces, organización de información y navegación entre pantallas.\n\nComo resultado, se obtuvo una aplicación funcional que sirve como apoyo académico.",
    },
    {
      tipo: "boton_enlace",
      contenido: {
        textoBoton: "Conclusión general en PDF",
        url: "https://drive.google.com/file/d/19_tzbrO8UmbX_WXLDjJLbquL8tGbzX_J/view?usp=sharing",
      },
    },
  ],
};
