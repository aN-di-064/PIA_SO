import type { TemaData } from "../componentes/PlantillaTema";

export const almacenamientoSecData: TemaData = {
  id: "almacenamiento-secundario",
  titulo: "3.4 Almacenamiento Secundario y Tecnologías de Persistencia",
  bloques: [
    {
      tipo: "texto",
      contenido:
        "El almacenamiento secundario guarda de forma permanente las instrucciones del sistema operativo, las bibliotecas compartidas y los datos de las aplicaciones. La memoria RAM, en cambio, es volátil y pierde su contenido al apagar el equipo.",
    },
    {
      tipo: "subtitulo",
      contenido: "3.4.1 Discos duros (HDD)",
    },
    {
      tipo: "texto",
      contenido:
        "Los discos magnéticos son dispositivos electromecánicos, y esa estructura limita su tiempo de respuesta. Acceder a un dato suma tres tiempos:",
    },
    {
      tipo: "lista",
      contenido: [
        "Tiempo de búsqueda: mover el brazo mecánico hasta la pista correspondiente.",
        "Latencia rotacional: esperar a que el sector buscado pase bajo el cabezal.",
        "Tiempo de transferencia: pasar los datos al búfer del controlador.",
      ],
    },
     {
      tipo:"imagen",
      contenido:require('../../assets/images/tabIcons/hdd3.4.jpg')
    },
    {
      tipo: "subtitulo",
      contenido: "3.4.2 Planificación de disco",
    },
    {
      tipo: "texto",
      contenido:
        "Para reducir estos cuellos de botella, los núcleos clásicos usan algoritmos que ordenan las peticiones:",
    },
    {
      tipo: "lista",
      contenido: [
        "SSTF: atiende primero la petición más cercana a la posición actual del cabezal.",
        "SCAN: el cabezal se mueve en un sentido atendiendo peticiones y luego regresa en sentido contrario, como un elevador.",
        "C-SCAN: recorre el disco en un solo sentido y, al llegar al final, regresa rápidamente al inicio sin atender peticiones intermedias. Esto asegura un tiempo de espera más uniforme.",
      ],
    },
    {
      tipo: "subtitulo",
      contenido: "3.4.3 Almacenamiento de estado sólido",
    },
    {
      tipo: "texto",
      contenido:
        "Chrome OS y los Chromebook prescinden de componentes mecánicos y usan únicamente memorias de estado sólido basadas en silicio:",
    },
    {
      tipo: "lista",
      contenido: [
        "Dispositivos: chips eMMC y unidades SSD con interfaz NVMe.",
        "Tecnología: celdas flash NAND, que pueden ser SLC, MLC, TLC o QLC.",
        "Ventaja principal: tiempos de acceso casi planos y uniformes, sin importar dónde esté el bloque lógico solicitado.",
      ],
    },
     {
      tipo:"imagen",
      contenido:require('../../assets/images/tabIcons/ssd3.4.png')
    },
    {
      tipo: "subtitulo",
      contenido: "3.4.4 Restricciones físicas de la flash",
    },
    {
      tipo: "texto",
      contenido:
        "Aunque la flash ofrece mejor rendimiento de lectura y escritura, impone restricciones que el subsistema de E/S debe coordinar:",
    },
    {
      tipo: "lista",
      contenido: [
        "Asimetría de operaciones: leer y escribir se hace por páginas individuales, pero borrar exige borrar bloques completos de decenas o cientos de páginas.",
        "Amplificación de escritura: reescribir un dato pequeño obliga a reubicar y reescribir bloques contiguos completos.",
        "Desgaste: los ciclos continuos de borrado y escritura degradan electroquímicamente el silicio.",
      ],
    },
    {
      tipo: "subtitulo",
      contenido: "3.4.5 Nivelación de desgaste",
    },
    {
      tipo: "texto",
      contenido:
        "Para evitar el desgaste prematuro, los microcontroladores internos de la unidad reparten las escrituras de forma balanceada entre todas las celdas físicas. Existen dos modalidades: la nivelación dinámica y la nivelación estática.",
    },
    {
      tipo: "subtitulo",
      contenido: "3.4.6 El comando TRIM",
    },
    {
      tipo: "texto",
      contenido:
        "Cuando se borra un archivo, el sistema de archivos solo marca los bloques como libres en sus estructuras de control. La información física sigue en el soporte. TRIM resuelve esto en tres pasos:",
    },
    {
      tipo: "lista",
      contenido: [
        "1. El kernel notifica al controlador de la flash qué bloques lógicos ya no contienen datos válidos.",
        "2. La recolección de basura de la unidad limpia y pre-borra esos bloques durante los periodos de inactividad.",
        "3. Las escrituras posteriores encuentran bloques listos, sin penalización de latencia.",
      ],
    },
  ],
};
