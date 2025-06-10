# 🚀 Template de Landing Page - Astro + Tailwind

## 📝 Descripción

Este es un template genérico para crear landing pages de alta conversión usando Astro y Tailwind CSS. Está diseñado para ser fácilmente personalizable y mantiene el idioma español.

## 🛠️ Tecnologías

- **Astro** - Framework web moderno
- **Tailwind CSS v4** - Framework de CSS
- **React** - Para componentes interactivos
- **TypeScript** - Tipado estático

## 📋 Instrucciones de Personalización

### 1. Configuración Inicial

Reemplaza los siguientes placeholders en todos los archivos:

- `[TU EMPRESA]` - Nombre de tu empresa
- `[TU NEGOCIO]` - Nombre de tu negocio/marca
- `[TU_FACEBOOK_PIXEL_ID]` - ID de tu píxel de Facebook

### 2. Contenido Principal (src/components/Home.astro y HomeB.astro)

Reemplaza estos placeholders:

- `[NÚMERO]` - Cantidad de clientes/usuarios
- `[TIPO DE CLIENTE]` - Tu público objetivo (ej: "profesores de yoga")
- `[RESULTADO PRINCIPAL]` - El resultado principal que ofreces
- `[NÚMERO ESPECÍFICO]` - Números específicos de resultados
- `[TU SERVICIO]` - Tu servicio o producto
- `[MÉTODO]` - Tu método o sistema
- `[LLAMADA A LA ACCIÓN]` - Tu botón de llamada a la acción
- `[MENSAJE DE URGENCIA]` - Mensaje de escasez o urgencia

### 3. Testimonios (src/components/Testimonios.astro)

Reemplaza en el array FEATURED y TESTIMONIALS:

- `[NOMBRE CLIENTE X]` - Nombres reales de tus clientes
- `[UBICACIÓN], [PAÍS]` - Ubicaciones de tus clientes
- `[RESULTADO ESPECÍFICO OBTENIDO CON TU SERVICIO]` - Resultados específicos
- `[TESTIMONIO DETALLADO DEL CLIENTE]` - Testimonios completos

### 4. Contenido de la Masterclass (src/components/Content.astro)

Reemplaza en el array CONTENIDOS:

- `[TÍTULO CONTENIDO X]` - Títulos de cada sección de contenido
- `[DESCRIPCIÓN DETALLADA...]` - Descripciones específicas de tu contenido
- `[TU PÚBLICO OBJETIVO]` - Tu audiencia específica
- `[TU REGIÓN]` - Tu región geográfica

### 5. Beneficios (src/components/Benefits.astro)

Reemplaza en el array BENEFICTS:

- `[BENEFICIO PRINCIPAL X]` - Títulos de beneficios
- `[DESCRIPCIÓN DEL X BENEFICIO...]` - Descripciones de cada beneficio
- `[TÍTULO DE LA SECCIÓN DE BENEFICIOS]` - Título principal de la sección

### 6. FAQs (src/components/Faqs.astro)

Reemplaza en el array faqs:

- `[PREGUNTA FRECUENTE X...]` - Preguntas específicas de tu negocio
- `[RESPUESTA...]` - Respuestas que resuelvan objeciones

### 7. Página de Gracias (src/components/Thankyou.astro)

Reemplaza:

- `[MENSAJE DE CONFIRMACIÓN DE REGISTRO]` - Mensaje de confirmación
- `[TÍTULO DE SECCIÓN DE CASOS DE ÉXITO]` - Título para casos de éxito
- `[URL_VIDEO_TESTIMONIO_X]` - URLs de tus videos testimoniales
- `[TÍTULO DE CASO DE ÉXITO DESTACADO]` - Título del caso principal
- `[URL_VIDEO_CASO_EXITO_PRINCIPAL]` - URL del video principal

## 🖼️ Imágenes a Reemplazar

### Logos y Branding

- `/images/logo.png` - Tu logo principal
- `/images/banderas.webp` - Banderas de tus países objetivo (opcional)

### Testimonios y Clientes

- `/images/cliente-1.jpg` a `/images/cliente-4.jpg` - Fotos de clientes destacados
- `/images/testimonio-1.jpg` a `/images/testimonio-10.jpg` - Fotos de testimonios

### Contenido

- `/images/contenido-1.webp` a `/images/contenido-4.webp` - Imágenes de contenido
- `/images/icono-1.svg` a `/images/icono-6.svg` - Iconos de beneficios

## 🎨 Personalización de Colores

Los colores principales están definidos en el CSS. Para cambiarlos:

1. **Color primario naranja**: `#FF904D` - Botones principales
2. **Color secundario azul**: `#0c7eff` - Elementos de acento
3. **Fondo oscuro**: `#00041a` - Fondo principal
4. **Tarjetas**: `#151F57` - Fondo de tarjetas

Busca estos colores en los archivos y cámbialos por tu paleta de marca.

## 📱 Componentes Principales

### Layout Principal

- `src/layouts/Layout.astro` - Layout base con meta tags

### Páginas

- `src/pages/index.astro` - Página principal
- `src/pages/thankyou.astro` - Página de gracias

### Componentes

- `Home.astro` / `HomeB.astro` - Hero sections
- `Testimonios.astro` - Sección de testimonios
- `Content.astro` - Contenido de la masterclass
- `Benefits.astro` - Beneficios del servicio
- `Faqs.astro` - Preguntas frecuentes
- `VideoEmbed.astro` - Embed de video
- `Thankyou.astro` - Página de confirmación

## 🚀 Instalación y Desarrollo

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa de producción
npm run preview
```

## 📝 Notas Importantes

1. **Mantén el idioma español** - Todo el contenido está en español
2. **Videos testimoniales** - Actualiza todas las URLs de videos
3. **Facebook Pixel** - No olvides cambiar el ID del píxel
4. **Imágenes optimizadas** - Usa formatos WebP para mejor rendimiento
5. **Responsive** - El diseño es completamente responsive

## 🔧 Personalización Avanzada

### Modificar Estilos

Los estilos están en `src/styles/global.css` y usando clases de Tailwind CSS.

### Agregar Nuevas Secciones

Crea nuevos componentes en `src/components/` y impórtalos en las páginas.

### Integrar Formularios

El template incluye estructura para formularios. Conecta con tu servicio preferido (Webhooks, Calendly, etc.).

## 📞 Soporte

Si necesitas ayuda con la personalización, revisa la documentación de Astro y Tailwind CSS.

---

¡Listo para crear tu landing page de alta conversión! 🚀
