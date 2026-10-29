import type { TemaData } from "../componentes/PlantillaTema";

export const sistemasArchivosData: TemaData = {
  id: "sistArchivos",
  titulo: "Sistemas de Archivos, Estructura e Implementación en Chrome OS",
  bloques: [
    {
      tipo: "texto",
      contenido: "El sistema de archivos actúa como la capa de abstracción mas completa entre los dispositivos de bloques sin procesar y la visión lógica de datos que demandan el usuario y los entornos de ejecución. A nivel teórico de sistemas operativos, existen tres metodologías fundamentales para asignar bloques a los archivos en disco: la asignación contigua, la asignación enlazada y la asignación indexada. La asignación contigua ubica los datos en sectores estrictamente adyacentes, lo cual proporciona una velocidad de lectura secuencial óptima pero produce fragmentación externa severa y complica el crecimiento dinámico de los archivos. Por su parte, la asignación enlazada conecta cada bloque con el siguiente a través de punteros integrados en los propios datos, eliminando la fragmentación externa pero degradando drásticamente el acceso aleatorio y elevando la vulnerabilidad ante la corrupción de un único puntero. La asignación indexada subsana las carencias anteriores reuniendo todas las referencias a los bloques de datos en un registro específico llamado inodo. "
    },
    {
      tipo: "texto",
      contenido: "En Chrome OS, el subsistema de almacenamiento adopta una implementación especializada y endurecida construida sobre la madurez del núcleo Linux, utilizando sistemas de archivos de alto rendimiento como ext4 y f2fs. En este entorno, el uso de inodos dentro de ext4 permite mapear tanto archivos reducidos como volúmenes extensos mediante punteros directos, indirectos simples, dobles y triples, complementados con la técnica de extensiones para registrar rangos de bloques continuos con una sobrecarga mínima de metadatos. Adicionalmente, el despliegue de f2fs en determinados dispositivos optimiza la persistencia al tratarse de un sistema estructurado en registros, el cual agrupa todas las escrituras en flujos contiguos y secuenciales que coinciden exactamente con la geometría interna de los bloques de borrado en memorias flash, reduciendo al mínimo la amplificación de escritura. "
    },
    {
      tipo: "texto",
      contenido: "La arquitectura de persistencia de Chrome OS va más allá de un sistema de archivos estándar, pues se estructura alrededor de un diseño estricto de seguridad, estructura e integridad que comprende los siguientes mecanismos fundamentales"
    },
    {
        tipo:"subtitulo",
        contenido:"Inmutabilidad y Esquema de Particiones A/B"
    },
    {
        tipo: "texto",
        contenido: "Para asegurar la máxima disponibilidad y permitir actualizaciones del sistema sin interrumpir la operatividad del usuario, el almacenamiento se organiza bajo un esquema de particiones simétricas A/B. El medio contiene dos copias completas del entorno base del sistema operativo: el conjunto A (compuesto por su correspondiente partición de kernel y su partición raíz de sistema de archivos o rootfs) y el conjunto B (que replica de forma idéntica dicha estructura). Durante la operación ordinaria, el sistema arranca y ejecuta de forma exclusiva uno de los conjuntos montado con banderas estrictas de solo lectura, lo que impide que cualquier modificación accidental, proceso en ejecución o código malicioso pueda alterar los archivos binarios del núcleo o las bibliotecas del sistema."
    },
    {
        tipo:"texto",
        contenido:"Cuando el servicio de actualización detecta una nueva compilación en los servidores de Google, el sistema operativo descarga e instala silenciosamente los paquetes en el conjunto de particiones inactivo. Al completarse el proceso y validarse las firmas digitales, el gestor de arranque conmuta el indicador de estado para que el siguiente inicio del equipo cargue de inmediato la partición actualizada. En caso de que la nueva versión presente inconsistencias de arranque o caiga en un ciclo de reinicios fallidos, el firmware y el cargador de arranque ejecutan una reversión automática hacia la partición previa funcional. Esta protección contra regresiones maliciosas se refuerza a nivel de silicio mediante contadores anti-rollback gestionados por el chip de seguridad del dispositivo."
    },
    {
        tipo:"subtitulo",
        contenido:"Integridad de Bloques con dm-verity"
    },
    {
        tipo:"texto",
        contenido:"Para conciliar la inmutabilidad de los ejecutables del sistema con la necesidad de almacenar datos modificables, Chrome OS segrega físicamente la información dinámica en una partición de estado independiente montada bajo el directorio de estado. En esta partición residen los perfiles de los usuarios, las memorias caché locales, los registros de aplicaciones y los archivos temporales. La seguridad de esta área mutable está gobernada por el subsistema criptográfico Cryptohome, el cual implementa cifrado a nivel de directorio individual para cada usuario que inicia sesión en el equipo. "
    },
    {
        tipo:"texto",
        contenido:"Cryptohome se apoya directamente en la raíz de hardware de confianza del dispositivo, ya sea el chip de seguridad Titan C, Titan C2 o un procesador criptográfico compatible con el estándar TPM 2.0. Las llaves simétricas AES de 256 bits necesarias para descifrar el directorio personal del usuario nunca se guardan en texto claro en el disco. Por el contrario, estas llaves se encuentran encapsuladas criptográficamente dentro del chip de seguridad y solo se liberan a la memoria principal tras una autenticación exitosa mediante la contraseña, clave biométrica o PIN del usuario. De este modo, los datos permanecen completamente inaccesibles para otros usuarios del mismo equipo o para terceros que extraigan físicamente el chip de almacenamiento. Adicionalmente, el chip de seguridad impone restricciones de tiempo exponenciales sobre los intentos fallidos, bloqueando con efectividad los ataques de fuerza bruta o diccionario automatizado."
    },
    {
        tipo:"subtitulo",
        contenido:"Segregación de Estado y Cifrado con Cryptohome"
    },
    {
        tipo:"texto",
        contenido:"La información mutable del usuario y las configuraciones locales no se mezclan con los binarios del sistema, sino que se aíslan dentro de una partición de estado independiente. Dentro de este espacio, el servicio Cryptohome administra el cifrado a nivel de directorio para cada cuenta registrada. Cada carpeta de usuario se cifra individualmente empleando claves criptográficas protegidas y derivadas mediante el chip de hardware Titan C o el módulo TPM del equipo. De este modo, aunque el medio físico de almacenamiento sea extraído o inspeccionado externamente, los datos locales permanecen totalmente inaccesibles sin las credenciales del usuario y la validación física del hardware del equipo."
    },
    {
        tipo:"subtitulo",
        contenido:"Sincronización Transparente con la Nube"
    },
    {
        tipo:"texto",
        contenido:"Chrome OS minimiza la dependencia del almacenamiento local persistente. El explorador de archivos integra el almacenamiento físico local con la infraestructura de almacenamiento en la nube de Google Drive como si formara parte del mismo árbol de directorios. Los archivos generados se guardan y sincronizan automáticamente en centros de datos remotos, permitiendo que la pérdida, rotura o restablecimiento completo de fábrica del equipo no comprometa la integridad ni la disponibilidad de los documentos del usuario."
    }
  ]
}