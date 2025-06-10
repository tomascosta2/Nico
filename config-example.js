// Archivo de configuración de ejemplo
// Copia este archivo como 'config.js' y personaliza los valores

export const CONFIG = {
  // Información de la empresa
  empresa: {
    nombre: "Tu Empresa",
    negocio: "Tu Negocio",
    año: "2025",
    logoUrl: "/images/logo.png",
  },

  // Pixel de Facebook
  facebookPixelId: "TU_FACEBOOK_PIXEL_ID",

  // Contenido principal
  hero: {
    numeroClientes: "100+",
    tipoCliente: "emprendedores",
    resultadoPrincipal: "Aumentamos tus ventas",
    numeroEspecifico: "50-100%",
    tuServicio: "tu negocio online",
    metodo: "Marketing Digital",
    llamadaAccion: "Reserva tu consulta gratis",
    mensajeUrgencia: "¡Solo quedan 3 cupos esta semana!",
  },

  // Testimonios destacados
  testimoniosDestacados: [
    {
      nombre: "María García",
      ubicacion: "Madrid, España",
      foto: "/images/cliente-1.jpg",
      resultado: "Aumentó sus ventas en un 200% en 3 meses",
    },
    {
      nombre: "Carlos López",
      ubicacion: "Barcelona, España",
      foto: "/images/cliente-2.jpg",
      resultado: "Consiguió 50 nuevos clientes en 2 meses",
    },
    // Agregar más testimonios...
  ],

  // Contenido de la masterclass/servicio
  contenidos: [
    {
      titulo: "Fundamentos del Éxito Online",
      descripcion:
        "Aprende los pilares fundamentales para construir un negocio exitoso en internet...",
      imagen: "/images/contenido-1.webp",
    },
    {
      titulo: "Estrategias de Marketing Digital",
      descripcion:
        "Descubre las estrategias más efectivas para atraer clientes...",
      imagen: "/images/contenido-2.webp",
    },
    // Agregar más contenidos...
  ],

  // Beneficios principales
  beneficios: [
    {
      titulo: "Más clientes automáticamente",
      descripcion: "Sistema automatizado para atraer clientes ideales",
      icono: "/images/icono-1.svg",
    },
    {
      titulo: "Estrategia clara y probada",
      descripcion: "Metodología paso a paso testada con cientos de clientes",
      icono: "/images/icono-2.svg",
    },
    // Agregar más beneficios...
  ],

  // Preguntas frecuentes
  faqs: [
    {
      pregunta: "¿Cuánto tiempo lleva ver resultados?",
      respuesta:
        "Los primeros resultados suelen verse en las primeras 2-4 semanas...",
    },
    {
      pregunta: "¿Necesito experiencia previa?",
      respuesta: "No, nuestro sistema está diseñado para principiantes...",
    },
    // Agregar más FAQs...
  ],

  // Videos
  videos: {
    principal: "URL_DEL_VIDEO_PRINCIPAL",
    testimoniales: [
      "URL_VIDEO_TESTIMONIO_1",
      "URL_VIDEO_TESTIMONIO_2",
      // Agregar más URLs...
    ],
    casoExitoPrincipal: "URL_VIDEO_CASO_EXITO",
  },

  // Configuración regional
  regional: {
    publicoObjetivo: "emprendedores digitales",
    region: "España y Latinoamérica",
    paises: ["España", "México", "Argentina", "Chile", "Colombia"],
  },
};

// Instrucciones de uso:
// 1. Copia este archivo como 'config.js'
// 2. Personaliza todos los valores según tu negocio
// 3. Importa y usa la configuración en tus componentes
// 4. Ejemplo: import { CONFIG } from './config.js'
