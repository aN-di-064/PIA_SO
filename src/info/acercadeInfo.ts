import type { TemaData } from "../componentes/PlantillaTema";

export const acercadeData: TemaData = {
  id: "acerca de",
  titulo: "Acerca de este Proyecto",
  bloques: [
    {
      tipo: 'subtitulo',
      contenido: 'Objetivo del Proyecto (PIA)'
    },
    {
      tipo: 'texto',
      contenido: 'Esta aplicación móvil fue desarrollada como Producto Integrador de Aprendizaje (PIA) para la unidad de aprendizaje de Sistemas Operativos. Su propósito es presentar un análisis interactivo y estructurado sobre la arquitectura, gestión de procesos, memoria y seguridad del sistema operativo de Google.'
    },
    {
      tipo: 'subtitulo',
      contenido: 'Especificaciones Técnicas'
    },
    {
      tipo: 'lista',
      contenido: [
        'Sistema analizado: Chrome OS Flex (Versión 130 Estable)',
        'Framework de desarrollo: React Native (Expo Router)',
        'Lenguaje: TypeScript',
        'Arquitectura: Interfaz dinámica renderizada mediante componentes y módulos JSON'
      ]
    },
    {
      tipo: 'subtitulo',
      contenido: 'Contexto Académico'
    },
    {
      tipo: 'lista',
      contenido: [
        'Institución: Universidad Autónoma de Nuevo León (UANL)',
        'Facultad: Facultad de Ingeniería Mecánica y Eléctrica (FIME)',
        'Catedrático: Dra. Norma Edith Marín Martínez',
        'Equipo: 3 | Grupo: 006 | Frecuencia: LMV M6'
      ]
    },
    {
      tipo: 'subtitulo',
      contenido: 'Aviso Legal y Académico'
    },
    {
      tipo: 'texto',
      contenido: 'Aplicación desarrollada exclusivamente con fines de investigación académica e ilustración educativa. Las marcas, logotipos y nombres comerciales como "Chrome OS", "Google" y "Linux" pertenecen a sus respectivos propietarios.'
    }
  ]
};