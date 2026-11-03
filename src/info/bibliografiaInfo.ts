import type { TemaData } from "../componentes/PlantillaTema";

export const bibliografiaData: TemaData = {
  id: "bibliografia",
  titulo: "Bibliografía",
  bloques: [
      {
      tipo: "subtitulo",
      contenido: "Unidad 1. Arquitectura, desempeño y tipo de un sistema operativo",
    },
    {
      tipo: "lista",
      contenido: [
       "Espeso, P. (2010, 8 diciembre). Chrome OS cada vez más cerca: nuevos datos del sistema operativo de Google. Xataka. https://www.xataka.com/otros/chrome-os-cada-vez-mas-cerca-nuevos-datos-del-sistema-operativo-de-google",
       "Chromium OS Documentation. (s. f.). Verified Boot. The Chromium Projects. https://www.chromium.org/chromium-os/chromiumos-design-docs/verified-boot/"
    ]
    },
        {
      tipo: "subtitulo",
      contenido: "Unidad 2. Multitarea: control de concurrencia",
    },
    {
      tipo: "lista",
      contenido: [
       "The Chromium Projects. (s. f.-a). Multi-process Architecture. Chromium Documentation. https://www.chromium.org/developers/design-documents/multi-process-architecture/",
       "Silberschatz, A., Galvin, P. B., y Gagne, G. (2018). Fundamentos de sistemas operativos (9.ª ed.). McGraw-Hill.",
       "The Chromium Projects. (s. f.-b). Process Models. Chromium Documentation. https://www.chromium.org/developers/design-documents/process-models/"
    ]
    },

]
}