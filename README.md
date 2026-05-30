# DOCUMENTACIÓN DEL PROYECTO

## Voladuras San Luis S.R.L. — Sitio Web Corporativo

---

## Índice

1. [Resumen del Proyecto](#1-resumen-del-proyecto)
2. [Objetivos](#2-objetivos)
3. [Herramientas y Tecnologías Utilizadas](#3-herramientas-y-tecnologías-utilizadas)
4. [Arquitectura del Sitio](#4-arquitectura-del-sitio)
5. [Estructura de Archivos](#5-estructura-de-archivos)
6. [Diseño y Estilo](#6-diseño-y-estilo)
7. [Funcionamiento Detallado](#7-funcionamiento-detallado)
8. [Responsive Design](#8-responsive-design)
9. [Rendimiento y Optimización](#9-rendimiento-y-optimización)
10. [Mantenimiento](#10-mantenimiento)
11. [Créditos](#11-créditos)

---

## 1. Resumen del Proyecto

**Cliente:** Voladuras San Luis S.R.L.
**Rubro:** Minería, voladuras controladas, molienda de minerales e ingeniería.
**Ubicación:** Rivadavia 250, La Toma, San Luis, Argentina.
**Sitio original:** https://www.voladurassanluis.com.ar (WordPress)
**Proyecto:** Rediseño y modernización del sitio web corporativo.

Se realizó un análisis completo del sitio web original (desarrollado en WordPress con Elementor) y se construyó una versión mejorada desde cero utilizando tecnologías web modernas, con un enfoque en:

- Diseño visual impactante y profesional.
- Experiencia de usuario fluida y atractiva.
- Total adaptabilidad a dispositivos móviles, tablets y computadoras.
- Velocidad de carga optimizada.
- Mantenimiento sencillo sin depender de CMS.

---

## 2. Objetivos

### 2.1 Objetivo General
Crear un sitio web corporativo moderno, visualmente impactante y completamente funcional que represente la experiencia y profesionalismo de Voladuras San Luis S.R.L., superando ampliamente al sitio original en términos de diseño, usabilidad y rendimiento.

### 2.2 Objetivos Específicos
- Migrar de WordPress/Elementor a HTML/CSS/JS puro para mejor rendimiento.
- Implementar un diseño oscuro (dark mode) premium acorde a la industria minera.
- Utilizar las imágenes reales de la empresa (proporcionadas en carpeta "Nueva carpeta").
- Lograr que el usuario se sienta atraído a explorar y quedarse en el sitio.
- Facilitar el contacto inmediato a través de WhatsApp y formulario.
- Mostrar de forma clara los servicios de Voladuras y Molienda.
- Exhibir el equipamiento, clientes y trabajos realizados como carta de presentación.
- Ser totalmente responsive: funcionar perfectamente en móvil, tablet y escritorio.

---

## 3. Herramientas y Tecnologías Utilizadas

### 3.1 Lenguajes

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| HTML5 | — | Estructura semántica del sitio |
| CSS3 | — | Estilos, animaciones, diseño responsive |
| JavaScript (Vanilla) | ES2022 | Interactividad, animaciones, lógica del frontend |

No se utilizó ningún framework de JavaScript (React, Vue, Angular) ni librerías CSS pesadas (Bootstrap, Tailwind). Todo el código es 100% artesanal para maximizar rendimiento y personalización.

### 3.2 Recursos Externos

| Recurso | Propósito |
|---------|-----------|
| Google Fonts (Inter + Playfair Display) | Tipografía moderna y elegante |
| Font Awesome 6.5.1 | Íconos vectoriales escalables |
| Google Maps | Enlace a ubicación física |
| WhatsApp API (wa.link) | Enlace directo a chat de WhatsApp |

### 3.3 Herramientas de Desarrollo

| Herramienta | Propósito |
|-------------|-----------|
| Visual Studio Code | Editor de código |
| PowerShell (Windows) | Gestión de archivos y automatización |
| Git | Control de versiones |
| GitHub | Repositorio remoto |
| Google Chrome DevTools | Depuración y pruebas responsive |
| Figma | Diseño y prototipado visual (referencia) |
| Lighthouse | Evaluación de rendimiento y accesibilidad |

### 3.4 Imágenes y Activos

Las imágenes utilizadas provienen de la carpeta **"Nueva carpeta/5 - Industrial Oscuro Clean"** proporcionada por el cliente, la cual contiene:

- `logo.png` — Logotipo de la empresa
- `molienda-01.jpg` a `molienda-11.jpg` — Fotografías de operaciones mineras y planta
- `capacidad-operativa.jpg` — Imagen de equipamiento
- `baritina.png`, `cuarzo.png`, `chamote.png`, `feldespato-*.png`, `pirofilita.png` — Íconos de minerales
- `svg-experiencia.svg`, `svg-ingenieria.svg`, `svg-mineria.svg` — Iconos vectoriales SVG

---

## 4. Arquitectura del Sitio

### 4.1 Mapa de Navegación

```
[Landing Page] index.html
│
├── Sección Hero Split
│   ├── [Voladuras] ──────────────→ voladuras.html
│   └── [Molienda]  ──────────────→ molienda.html
│
├── Quiénes Somos (About)
├── Contadores de Experiencia
├── Departamentos (Servicios)
├── Clientes
├── Contacto (Formulario + Info)
└── Footer
```

### 4.2 Flujo del Usuario

1. **Entrada:** El usuario llega a `index.html` y ve el hero split con dos grandes opciones: Voladuras o Molienda.
2. **Exploración:** Al hacer hover sobre cada opción, la imagen se agranda y el overlay se aclara, invitando al click.
3. **Navegación interna:** El menú superior fijo permite acceder a cualquier sección en cualquier momento.
4. **Servicios específicos:** Al elegir Voladuras o Molienda, se despliega toda la información detallada de cada servicio.
5. **Conversión:** El formulario de contacto y el botón de WhatsApp están siempre visibles para facilitar la comunicación.
6. **Cierre:** Footer con enlaces útiles, datos de contacto y créditos.

### 4.3 Tipos de Páginas

| Página | Descripción |
|--------|-------------|
| `index.html` | Landing page principal. Hero split (Voladuras / Molienda), about, contadores, departamentos, clientes, contacto. |
| `voladuras.html` | Página detalle de servicios de voladuras. Áreas, equipamiento, timeline de proyectos, galería. |
| `molienda.html` | Página detalle de molienda. Descripción de planta, proceso productivo, minerales, equipamiento, galería. |

---

## 5. Estructura de Archivos

```
prototipo/
│
├── index.html              # Landing page principal
├── voladuras.html           # Página de servicios de voladuras
├── molienda.html            # Página de servicios de molienda
├── DOCUMENTACION.md         # Este documento
│
├── css/
│   └── style.css            # Hoja de estilos principal (36 KB)
│
├── js/
│   └── main.js              # JavaScript principal (3.8 KB)
│
├── images/                  # Imágenes del sitio
│   ├── logo.png
│   ├── baritina.png
│   ├── capacidad-operativa.jpg
│   ├── chamote.png
│   ├── cuarzo.png
│   ├── feldespato-potosico.png
│   ├── feldespato-potosico-mezcla.png
│   ├── feldespato-sodico.png
│   ├── molienda-01-950x534.jpg
│   ├── molienda-02.jpg  →  molienda-11.jpg
│   ├── pirofilita.png
│   ├── svg-experiencia.svg
│   ├── svg-ingenieria.svg
│   └── svg-mineria.svg
│
└── assets/                  # Carpeta para futuros activos
```

---

## 6. Diseño y Estilo

### 6.1 Paleta de Colores

| Color | Código HEX | Uso |
|-------|-----------|-----|
| Rojo principal | `#f52c0b` | Botones, acentos, hover states |
| Rojo oscuro | `#c8200a` | Gradientes, hover de botones |
| Fondo principal | `#030303` | Background del sitio |
| Fondo secundario | `#0a0a0a` | Secciones alternadas |
| Fondo terciario | `#111` | Cards, footer |
| Texto principal | `#e8e8e8` | Texto general |
| Texto secundario | `#888` | Texto de apoyo, párrafos |
| Borde sutil | `rgba(255,255,255,0.04)` | Bordes de cards y secciones |

### 6.2 Tipografía

| Fuente | Peso | Uso |
|--------|------|-----|
| **Playfair Display** | 700, 800, 900 | Títulos principales (h1, h2) |
| **Inter** | 300, 400, 500, 600, 700, 800, 900 | Texto general, botones, navegación |

### 6.3 Componentes de Diseño Clave

#### Header Glassmorphism
```css
header.scrolled {
  background: rgba(3, 3, 3, 0.85);
  backdrop-filter: blur(24px) saturate(1.5);
}
```
El header comienza transparente y al hacer scroll se convierte en un efecto de vidrio esmerilado con blur.

#### Hero Split
La landing page presenta dos mitades iguales ocupando toda la pantalla. Cada mitad representa un servicio principal (Voladuras / Molienda). Al hacer hover:
- La imagen de fondo se escala 1.1x
- El overlay oscuro se aclara
- El contenido se desliza hacia arriba
- El ícono cambia de color

#### Tarjetas con Efecto 3D
Todas las cards (`service-card`, `step-card`, `dept-card`, `mineral-card`) tienen:
- Borde superior rojo que se revela con hover
- Sombra progresiva
- Elevación en Y
- Transiciones suaves cubic-bezier

#### Timeline Interactiva
Línea vertical central con dots rojos que tienen glow. Los items alternan izquierda/derecha en desktop y se apilan en mobile.

#### Orbes Animados de Fondo
```css
.animated-bg .orb {
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.3;
  animation: orbFloat 15s ease-in-out infinite;
}
```
Tres esferas de colores rojo/naranja flotan lentamente en el fondo de secciones específicas, creando profundidad.

#### Contadores con Gradiente
```css
.number-item .num {
  background: linear-gradient(135deg, var(--white), rgba(255,255,255,0.5));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

---

## 7. Funcionamiento Detallado

### 7.1 JavaScript — Archivo `main.js`

El archivo JavaScript (3.8 KB) contiene toda la lógica del frontend sin dependencias externas. Funcionalidades:

#### Preloader
```javascript
const preloader = document.getElementById('preloader');
setTimeout(() => preloader.classList.add('hidden'), 800);
```
Muestra un spinner animado al cargar la página y lo oculta después de 800ms con transición suave.

#### Menú Mobile
```javascript
toggle.addEventListener('click', () => {
  toggle.classList.toggle('active');
  nav.classList.toggle('open');
  document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
});
```
En dispositivos móviles (< 768px), el menú de navegación se convierte en un overlay fullscreen con blur background. El botón hamburguesa se anima a una X. El scroll del body se bloquea mientras el menú está abierto.

#### Header Scroll Effect
```javascript
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });
```
Cuando el usuario scrollea más de 60px, el header cambia de transparente a glassmorphism. Usa `passive: true` para mejor rendimiento.

#### Contadores Animados
```javascript
function animateCounter(el) {
  const target = parseInt(el.dataset.target);
  let current = 0;
  const step = Math.max(1, Math.floor(target / (duration / 16)));
  const timer = setInterval(() => {
    current += step;
    if (current >= target) { current = target; clearInterval(timer); }
    el.textContent = current;
  }, 16);
}
```
Los números (40+ años, 300+ trabajos, etc.) se animan desde 0 hasta su valor final cuando la sección entra en el viewport. Usa `IntersectionObserver` para dispararse solo una vez.

#### Scroll Reveal
```javascript
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
```
Cada elemento con clase `.reveal` aparece con una animación de desplazamiento hacia arriba cuando entra al viewport. Los delays (`.reveal-delay-1` a `.reveal-delay-5`) escalonan las animaciones.

#### Parallax Mouse Move en Hero Split
```javascript
item.addEventListener('mousemove', (e) => {
  const x = (e.clientX - rect.left) / rect.width - 0.5;
  const y = (e.clientY - rect.top) / rect.height - 0.5;
  bg.style.transform = `translate(${x * 20}px, ${y * 20}px) scale(1.05)`;
});
```
Al mover el mouse sobre los paneles del hero split, la imagen de fondo se desplaza sutilmente siguiendo el cursor, creando un efecto de profundidad 3D.

#### Smooth Scroll
```javascript
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
```
Todos los enlaces internos (anclas) realizan scroll suave hacia la sección destino.

#### Scroll to Top
```javascript
scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
```
Botón flotante que aparece al scrollear hacia abajo y lleva suavemente al inicio de la página.

### 7.2 CSS — Archivo `style.css`

El archivo CSS (36 KB) está organizado en las siguientes secciones:

1. **Variables CSS** — Paleta de colores, fuentes, radios de borde, sombras
2. **Reset** — Normalización de estilos cross-browser
3. **Preloader** — Estilos del spinner de carga
4. **Header & Navigation** — Header glassmorphism, navegación, menú mobile
5. **Hero Split** — Diseño de dos paneles con overlay y hover effects
6. **Secciones** — Estilos comunes de sección
7. **About** — Grid de dos columnas con imagen y texto
8. **Services** — Cards de servicios con hover elevación
9. **Counters** — Grid de 4 columnas con números animados
10. **Departments** — Cards con barra lateral roja
11. **Process Steps** — Timeline de proceso de molienda
12. **Minerals** — Grid de minerales con hover
13. **Equipment** — Categorías de equipamiento
14. **Clients** — Logos de clientes
15. **Timeline** — Línea de tiempo vertical
16. **Gallery** — Grid masonry de imágenes
17. **Contact** — Formulario e información
18. **Footer** — Grid de 4 columnas
19. **Scroll Top** — Botón flotante
20. **Animations** — Keyframes y scroll reveal
21. **Responsive** — Media queries para 1024px, 768px, 480px

### 7.3 Navegación entre Páginas

El sitio tiene 3 páginas HTML que se navegan mediante enlaces en el header y footer. No es una SPA (Single Page Application), por lo que cada página se carga completamente al navegar.

Los enlaces activos se marcan con la clase `.active` para indicar al usuario en qué página se encuentra.

---

## 8. Responsive Design

El sitio está diseñado con **mobile-first** adaptándose a 3 breakpoints principales:

### 8.1 Desktop (> 1024px)
- Hero split con dos paneles lado a lado
- Grid de 3-4 columnas para servicios, equipamiento, galería
- Timeline alternante izquierda/derecha
- Navegación horizontal completa

### 8.2 Tablet (768px — 1024px)
- Hero split se apila verticalmente (60vh cada panel)
- Grids pasan a 2 columnas
- Footer a 2 columnas
- Contadores a 2 columnas

### 8.3 Mobile (< 768px)
- Menú hamburguesa con overlay fullscreen
- Todas las grids a 1 columna
- Hero actions apilados verticalmente
- Timeline con línea a la izquierda y contenido apilado
- Botones width 100%
- Padding reducido en container (16px vs 24px)
- Formulario e info de contacto apilados

### 8.4 Mobile pequeño (< 480px)
- Galería a 1 columna
- Contadores a 1 columna
- Footer a 1 columna
- Navegación centrada

---

## 9. Rendimiento y Optimización

### 9.1 Buenas Prácticas Implementadas

- **Sin dependencias pesadas:** No se usan frameworks JS ni librerías CSS.
- **Imágenes optimizadas:** Se usan imágenes en formato web-friendly (jpg/png) con dimensiones adecuadas.
- **Google Fonts optimizadas:** Solo se cargan 2 familias tipográficas con los pesos necesarios.
- **Font Awesome CDN:** Se carga desde CDN con caché del navegador.
- **Passive scroll listeners:** Los event listeners de scroll usan `{ passive: true }` para no bloquear el thread principal.
- **IntersectionObserver:** En lugar de escuchar scroll para animaciones, se usa la API nativa más eficiente.
- **CSS personalizado:** Sin estilos inline excesivos, todo centralizado en `style.css`.
- **Sin render blocking:** El JS carga al final del body.
- **Transiciones GPU aceleradas:** Se usan `transform` y `opacity` para animaciones (propiedades que acelera la GPU).

### 9.2 Métricas Objetivo

| Métrica | Objetivo |
|---------|----------|
| First Contentful Paint (FCP) | < 1.5s |
| Largest Contentful Paint (LCP) | < 2.5s |
| Time to Interactive (TTI) | < 3s |
| Lighthouse Performance | > 90 |
| Lighthouse Accessibility | > 85 |

---

## 10. Mantenimiento

### 10.1 Cómo Agregar una Nueva Página

1. Crear un archivo `.html` en la raíz de `prototipo/`.
2. Copiar la estructura del `<header>` y `<footer>` de una página existente.
3. Agregar el enlace en el menú de navegación (`<nav class="nav">`).
4. Agregar el enlace en el footer si es necesario.

### 10.2 Cómo Agregar Imágenes

1. Colocar la imagen en `prototipo/images/`.
2. Referenciarla en HTML como `images/mi-imagen.jpg`.
3. Usar formatos modernos: WebP cuando sea posible, JPG para fotos, PNG para transparencias.

### 10.3 Cómo Modificar Estilos

- Colores y variables globales: Editar `:root` en `css/style.css`.
- Tipografía: Cambiar Google Fonts link y variables `--font` y `--display`.
- Espaciados: Modificar padding/margin en las secciones correspondientes.

### 10.4 Despliegue

Para subir el sitio a producción:

1. **Opción A — Hosting tradicional:** Subir todo el contenido de `prototipo/` por FTP a cualquier hosting que soporte HTML estático.
2. **Opción B — GitHub Pages:**
   ```bash
   git add .
   git commit -m "feat: nueva versión del sitio"
   git push origin main
   ```
   Luego ir a Settings > Pages y seleccionar la rama `main` con carpeta `/prototipo`.
3. **Opción C — Netlify/Vercel:** Arrastrar la carpeta `prototipo/` a la interfaz de deploy.

---

## 11. Créditos

### 11.1 Equipo de Desarrollo

| Rol | Nombre |
|-----|--------|
| Diseñador UX/UI | Matías Fuentes |
| Desarrollador Frontend | Hugo Olguin |
| Dirección de Proyecto | Hugo Olguin |

### 11.2 Cliente

**Voladuras San Luis S.R.L.**
- Gerente: Leonardo J. López
- Dirección: Rivadavia 250, La Toma, San Luis, Argentina
- Teléfono: (+54) 03547 420338
- WhatsApp: (+54) 9 3547 520869
- Email: voladurassanluis@gmail.com

### 11.3 Recursos

| Recurso | Fuente |
|---------|--------|
| Imágenes mineras | Propiedad del cliente |
| Logo corporativo | Propiedad del cliente |
| Font Awesome | https://fontawesome.com |
| Google Fonts | https://fonts.google.com |

---

## Anexos

### A. Diagrama de Navegación

```
                    ┌──────────────────┐
                    │   index.html     │
                    │  (Landing Page)  │
                    └────────┬─────────┘
                             │
              ┌──────────────┼──────────────┐
              ▼              ▼              ▼
       ┌──────────┐  ┌──────────┐  ┌──────────┐
       │Voladuras │  │ Molienda │  │ Contacto │
       │ .html    │  │ .html    │  │ (#ancla) │
       └──────────┘  └──────────┘  └──────────┘
```

### B. Estructura del CSS

```
style.css
├── Variables ( :root )
├── Reset & Base
├── Preloader
├── Header & Navigation
│   ├── Header
│   ├── Nav
│   ├── Mobile Toggle
│   └── Responsive Nav
├── Hero
│   ├── Hero Full
│   └── Hero Split
├── Sections
├── Components
│   ├── Glass Card
│   ├── About
│   ├── Services
│   ├── Numbers/Counters
│   ├── Departments
│   ├── Process Steps
│   ├── Minerals
│   ├── Equipment
│   ├── Clients
│   ├── Timeline
│   ├── Gallery
│   ├── Contact
│   └── Footer
├── Utilities
│   ├── Scroll Top
│   ├── Scrollbar
│   └── Animations
└── Responsive
    ├── 1024px
    ├── 768px
    └── 480px
```

### C. Funciones JavaScript

```
main.js
├── Preloader
├── Mobile Menu Toggle
├── Header Scroll Effect
├── Scroll to Top
├── Counter Animation
│   ├── animateCounter()
│   └── IntersectionObserver
├── Scroll Reveal
│   └── IntersectionObserver
├── Smooth Scroll (anchors)
└── Parallax (hero split mouse move)
```

---

*Documentación generada el 30 de Mayo de 2026.*
*Versión del proyecto: 2.0.0*
