import type { TemaData } from "../componentes/PlantillaTema";

export const conclusionesData: TemaData = {
  id: "conclusion",
  titulo: "Conclusión",
  bloques: [
    {
      tipo: "boton_enlace",
      contenido: {
        textoBoton: "Conclusión General",
        url: "https://drive.google.com/file/d/1inzTPV7ZAUkqw783QtIff_TOq4o0SiMW/view?usp=sharing",
      },
    },
    {
      tipo: "boton_enlace",
      contenido: {
        textoBoton: "Conclusiones individuales",
        url: "https://drive.google.com/file/d/1HL1ujfMR-Ieje2FfFP_42Er8st7v2815/view?usp=drive_link",
      },
    },
  ],
};
