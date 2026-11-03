import type { TemaData } from "../componentes/PlantillaTema";

export const sistemasArchivosData: TemaData = {
  id: "sistemas-archivos",
  titulo: "3.5 Sistemas de Archivos: Estructura e Implementación en Chrome OS",
  bloques: [
    {
      tipo: "texto",
      contenido:
        "El sistema de archivos es la capa de abstracción entre los dispositivos de bloques sin procesar y la visión lógica de datos que demandan el usuario y los entornos de ejecución.",
    },
    {
      tipo: "subtitulo",
      contenido: "3.5.1 Métodos de asignación de bloques",
    },
    {
      tipo: "imagen",
      contenido: require("../../assets/images/tabIcons/3.5.1.png"),
    },
    {
      tipo: "subtitulo",
      contenido: "3.5.2 ext4 y f2fs en Chrome OS",
    },
    {
      tipo: "texto",
      contenido:
        "Chrome OS usa sistemas de archivos de alto rendimiento sobre el núcleo de Linux:",
    },
    {
      tipo: "lista",
      contenido: [
        "ext4: sus inodos mapean desde archivos pequeños hasta volúmenes extensos mediante punteros directos, indirectos simples, dobles y triples. Además usa extensiones, que registran rangos de bloques contiguos con muy pocos metadatos.",
        "f2fs: se usa en ciertos dispositivos. Es un sistema estructurado en registros que agrupa las escrituras en flujos secuenciales y contiguos. Estos coinciden con la geometría de los bloques de borrado de la flash y reducen al mínimo la amplificación de escritura.",
      ],
    },
    {
      tipo: "texto",
      contenido:
        "La persistencia de Chrome OS va más allá de un sistema de archivos estándar y se apoya en tres mecanismos de seguridad, estructura e integridad.",
    },
    {
      tipo: "subtitulo",
      contenido: "3.5.3 Inmutabilidad y particiones A/B",
    },
    {
      tipo: "texto",
      contenido:
        "El almacenamiento tiene dos copias completas del sistema base:",
    },
    {
      tipo: "lista",
      contenido: [
        "Conjunto A: partición de kernel y partición raíz (rootfs).",
        "Conjunto B: réplica idéntica de A.",
      ],
    },
    {
      tipo: "texto",
      contenido: "Funciona así:",
    },
    {
      tipo: "lista",
      contenido: [
        "Operación normal: el sistema arranca desde un solo conjunto, montado en solo lectura. Ninguna modificación accidental, proceso o código malicioso puede alterar el kernel ni las bibliotecas.",
        "Actualización: el servicio detecta una nueva compilación en los servidores de Google y la instala en silencio en el conjunto inactivo.",
        "Validación y cambio: al validarse las firmas digitales, el gestor de arranque cambia el indicador para que el siguiente inicio cargue la partición actualizada.",
        "Reversión: si la nueva versión falla al arrancar o entra en un ciclo de reinicios, el firmware y el cargador vuelven automáticamente a la partición anterior.",
        "Protección anti-regresión: contadores anti-rollback, gestionados por el chip de seguridad, impiden volver a versiones vulnerables.",
      ],
    },
    {
      tipo: "subtitulo",
      contenido: "3.5.4 Integridad, partición de estado y Cryptohome",
    },
    {
      tipo: "texto",
      contenido:
        "Para combinar el sistema inmutable con datos que sí cambian, Chrome OS separa físicamente la información dinámica en una partición de estado independiente. Allí residen:",
    },
    {
      tipo: "lista",
      contenido: [
        "Los perfiles de usuario.",
        "Las cachés locales.",
        "Los registros de aplicaciones.",
        "Los archivos temporales.",
      ],
    },
    {
      tipo: "texto",
      contenido:
        "El servicio Cryptohome protege esta partición con cifrado a nivel de directorio, individual para cada usuario:",
    },
    {
      tipo: "lista",
      contenido: [
        "Raíz de confianza: el chip de seguridad Titan C, Titan C2 o un procesador compatible con TPM 2.0.",
        "Llaves: claves simétricas AES de 256 bits que nunca se guardan en claro en el disco. Están encapsuladas en el chip y solo se liberan a la memoria tras autenticarse con contraseña, biometría o PIN.",
        "Resultado: los datos son inaccesibles para otros usuarios del equipo y para quien extraiga físicamente el chip de almacenamiento.",
        "Defensa contra fuerza bruta: el chip impone esperas exponenciales a los intentos fallidos.",
      ],
    },
    {
      tipo: "subtitulo",
      contenido: "3.5.5 Sincronización transparente con la nube",
    },
    {
      tipo: "texto",
      contenido: "Chrome OS minimiza la dependencia del almacenamiento local:",
    },
    {
      tipo: "lista",
      contenido: [
        "El explorador de archivos integra el almacenamiento local con Google Drive como si fuera un solo árbol de directorios.",
        "Los archivos se guardan y sincronizan automáticamente en centros de datos remotos.",
        "Perder, romper o restablecer de fábrica el equipo no compromete la integridad ni la disponibilidad de los documentos.",
      ],
    },
    {
      tipo: "imagen",
      contenido: require("../../assets/images/tabIcons/3.5.5.png"),
    },
  ],
};
