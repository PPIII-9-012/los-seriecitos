# Changelog — Historial de Modificaciones del Sitio

Este documento detalla cronológicamente todos los cambios realizados en el sitio web de **Voladuras San Luis S.R.L.** (Procesamiento y Molienda de Minerales no Metalíferos) durante la sesión actual de desarrollo.

## [v1.6.0] — 2026-07-08 / 2026-07-09 (Sesión Actual)

### 🌾 Rediseño Compacto y Profesional de Sección Mallas
* **Sidebar Compacta y Fija:**
  * Se configuró la barra lateral de mallas en [style.css](file:///c:/Users/HuGOD777/proyectos%20practica/los-seriecitos/style.css) a un ancho fijo de `180px` para evitar variaciones de tamaño.
  * Se eliminaron los micrones (`.mb-size`) de los botones de selección en [app.js](file:///c:/Users/HuGOD777/proyectos%20practica/los-seriecitos/app.js) para lograr un listado mucho más limpio y uniforme (ej. `#400`, `#325`, etc.).
  * El botón activo se resalta mediante un elegante borde izquierdo dorado de precisión (`border-left: 3px solid var(--gold);`) y un fondo oscuro integrado (`var(--bg-deep)`).
* **Marco Protector de Contenido (No Flotante):**
  * Se dotó a la sección de detalles `.mallas-detail` en [style.css](file:///c:/Users/HuGOD777/proyectos%20practica/los-seriecitos/style.css) de un marco con fondo gris oscuro (`var(--bg-alt)`) y un borde fino de 1px (`var(--border-strong)`) con un padding de `32px` (`20px` en móviles). Esto enmarca la información técnica y evita que los elementos se sientan flotando en el vacío del fondo.
  * Se configuró el fondo de las tarjetas de aplicación `.malla-industry-card` y los chips `.malla-badge` al tono oscuro profundo (`var(--bg-deep)`) para asegurar una correcta relación de contraste y profundidad visual.
* **Detalles Reestructurados en 2 Columnas:**
  * Se modificó el panel de información en [app.js](file:///c:/Users/HuGOD777/proyectos%20practica/los-seriecitos/app.js) y se dividió en una grilla responsiva de dos columnas (aplicaciones B2B a la izquierda en tarjetas y minerales disponibles a la derecha como chips independientes).
  * Se compactó el tamaño de la tipografía gigante del número de malla (`.mi-num`) a `40px` de alto para optimizar el espacio vertical.
* **Integración del Catálogo en la Nube (Google Sheets):**
  * Se agregó un botón de acción `.malla-btn-action` al final de la barra lateral que dice **"VER TODO"** (sin emojis) y enlaza directamente al catálogo con especificaciones detalladas en Google Sheets.
* **Adaptabilidad Móvil Responsiva:**
  * Se añadieron overrides en la media query de [style.css](file:///c:/Users/HuGOD777/proyectos%20practica/los-seriecitos/style.css) para que la malla activa use un borde inferior dorado (`border-bottom: 3px solid var(--gold);`) en lugar de izquierdo, y el botón "Ver todo" se muestre ordenadamente como una pestaña horizontal deslizable.

### 🏠 Rediseño Integral de la Página Principal (Inicio)
* **Animación de Scroll en el Hero:**
  * Se añadió un movimiento sutil de resorte vertical (`scroll-bounce`) en el indicador de scroll para invitar a la navegación hacia abajo en [style.css](file:///c:/Users/HuGOD777/proyectos%20practica/los-seriecitos/style.css).
* **Métricas de Estadísticas de Alta Densidad:**
  * Se compactó la sección de estadísticas en [app.js](file:///c:/Users/HuGOD777/proyectos%20practica/los-seriecitos/app.js) removiendo los iconos ilustrativos.
  * Se añadieron etiquetas doradas (`.stat-kicker`) y se redujo el relleno general de las tarjetas a `24px 20px` en [style.css](file:///c:/Users/HuGOD777/proyectos%20practica/los-seriecitos/style.css) para una presentación sobria y moderna.
* **Galería Fotográfica de Cantera y Planta:**
  * Se modificó el título a *"Galería Fotográfica de Cantera y Planta"* y se eliminó la etiqueta superior redundante.
  * Se optimizó la galería para mostrar inicialmente solo **3 fotos destacadas** de operación, ocultando las **17 fotos restantes** del total de 20 recursos de `assets/`.
  * Se incorporó el botón dinámico **"Ver todas las fotos"** para expandir y colapsar la galería de forma instantánea.
  * Se eliminó el bloque de imagen roto correspondiente a `laboratorio-espectrofotometro.jpg` (archivo inexistente) y se verificaron los 20 recursos restantes.
* **Ubicación y Mapa Satelital Persistente (Caché SPA):**
  * Se reestructuró la sección de ubicación en Inicio utilizando la grilla responsiva `.contact-grid` (información a la izquierda, mapa a la derecha).
  * **Estilo Satelital y Zoom:** Se configuró el mapa en vista satelital (`t=k`) con un nivel de zoom balanceado (`z=16`) para visualizar tanto las naves de la planta como el entorno geográfico de acceso.
  * **Caché Persistente en SPA (Sin Recargas):** Se reprogramó la carga del mapa en [app.js](file:///c:/Users/HuGOD777/proyectos%20practica/los-seriecitos/app.js) para crearlo dinámicamente y preservarlo en memoria (`persistent-map-holder`) al cambiar de sección, evitando parpadeos o recargas.
  * **Pre-carga en Segundo Plano:** Inicialización inmediata al dispararse `DOMContentLoaded`.
* **Imagen del Apartado de Contacto:**
  * Se reemplazó la foto de la pala cargadora en la vista de Contacto por `assets/instalaciones-planta.jpg` (Instalaciones de Planta Voladuras San Luis), ofreciendo una imagen mucho más representativa de las oficinas y planta de molienda principal.

* **Reemplazo de Imágenes de Marcador "?" (Placeholders):**
  * Se sustituyeron todos los marcadores SVG temporales (`?`) por imágenes operativas reales y únicas de la cantera y planta, asegurando que ninguna imagen se repita en las secciones internas:
    * **Sobre Nosotros (Nosotros View):** Se implementó `yacimiento-reservas.jpeg` (Reservas de Explotación) y `yacimiento-calizo.jpeg` (Yacimiento Calizo).
    * **Equipos y Maquinaria (Equipos View):** Se implementó `flota-pesada-cargadoras.jpg` (Flota Pesada de Cargadoras).
    * **Mallas y Granulometría (Mallas View):** Se implementó `silos-clasificacion.jpg` (Silos de Clasificación).

### 👣 Rediseño Profesional y Responsivo del Footer
* **Estructura Depurada de 2 Columnas:**
  * Se rediseñó el footer en [index.html](file:///c:/Users/HuGOD777/proyectos%20practica/los-seriecitos/index.html) a una distribución de 2 columnas limpias.
  * **Columna de Marca:** Contiene el logo textual con realce dorado de marca y un botón dinámico de **"Más información"** enlazado con la vista `?view=nosotros` usando el enrutamiento SPA (sin recargas de página).
  * **Columna de Contacto B2B:** Concentra la información de contacto clave de la planta de Villa de Praga: dirección enlazada a Google Maps, número enlazado a chat de WhatsApp e email de consultas y ventas con enlaces `mailto:`.
* **Diseño Adaptable y Estilización:**
  * Se implementó CSS Grid en [style.css](file:///c:/Users/HuGOD777/proyectos%20practica/los-seriecitos/style.css) para el posicionamiento y la adaptabilidad responsiva (pasa a 1 columna vertical en pantallas de móviles y tabletas).
  * Se configuraron efectos hover y transiciones fluidas de color y transformaciones para los enlaces interactivos.
  * Se utilizaron variables del Design System para asegurar que los elementos cambien y se adapten automáticamente entre temas claro y oscuro.

### 💎 Rediseño Compacto y Unificación de Yacimientos
* **Unificación del Catálogo:**
  * Se unificaron las secciones de *"Yacimientos Propios"* y *"Capacidad de Procesamiento"* en una única grilla continua en [app.js](file:///c:/Users/HuGOD777/proyectos%20practica/los-seriecitos/app.js).
  * Se removieron las descripciones largas de las tarjetas en la vista principal para eliminar la fatiga visual, conservando la información técnica detallada para la ficha individual.
* **Tarjeta Especial de Cierre ("¿Busca otro mineral?"):**
  * Se incorporó una tarjeta de cierre interactiva con el botón **`CONTACTAR →`** para consultas de molienda o prospección a medida.
  * Se configuró para expandirse y ocupar **2 columnas en pantallas de escritorio**, rellenando de forma simétrica el espacio vacío en el diseño de 3 columnas.
  * Se estilizó con un borde dashed gris-azul (`var(--border-strong)`) y signo de pregunta (`?`) gris que transicionan suavemente a dorado (`var(--gold)`) únicamente en estado hover.
  * Se desactivó explícitamente la justificación del texto descriptivo interno mediante alineación centrada.
* **Hover Profesional y Sutil:**
  * Se reemplazó el borde dorado brillante del hover de tarjetas por un tono gris-azul sobrio (`var(--border-strong)`) para mantener un perfil corporativo serio.
  * Se eliminó el fondo dorado en hover y se ajustó a una opacidad blanca imperceptible (`rgba(255, 255, 255, 0.02)`).
* **Simplificación de Textos de Cabecera:**
  * Se redujo el texto de presentación de la sección en [app.js](file:///c:/Users/HuGOD777/proyectos%20practica/los-seriecitos/app.js) a un único párrafo directo y conciso de 3 líneas.
* **Actualización de Kickers:**
  * Se cambió la etiqueta de los minerales procesados a maquila de `Molienda & Logística` a `Otros Yacimientos`.

---

## [v1.5.0] — 2026-07-08

### 🛠️ Redefinición de Servicios y Eliminación de Proyectos Históricos
* **Actualización de Servicios:**
  * Se redefinieron los servicios principales en la pestaña correspondiente a: **Molienda de Minerales** (con `assets/planta-molienda.jpg`), **Trituración de Minerales** (con `assets/naves-trituracion.jpg`) y **Servicios de Fletes** (con `assets/operacion-cargadora.jpg`).
  * Se redactaron descripciones B2B cortas, simples y claras enfocadas en la capacidad operativa de la planta y flota.
  * Se actualizó el subtítulo de la sección por un enfoque específico en molienda analítica, trituración y fletes B2B.
* **Eliminación Completa de la Línea de Tiempo:**
  * Se removió por completo la sección *"Nuestra Historia de Proyectos"* (línea de tiempo de proyectos históricos) del código y de todas las páginas del sitio para resguardar de forma estricta la confidencialidad de la cartera de clientes.

---

## [v1.4.0] — 2026-07-08

### 📱 Ajustes de Layout, Justificación y Rediseño de WhatsApp
* **Rediseño del Botón de WhatsApp:**
  * Se reubicó al extremo inferior izquierdo (`left: 24px; bottom: 24px` en escritorio y `left: 16px; bottom: 16px` en móviles).
  * Se convirtió en un botón flotante circular y compacto de `52px` (`48px` en móviles) ocultando el texto `"WhatsApp"`.
  * Se añadieron micro-animaciones interactivas de zoom y sombra resplandeciente en hover.
* **Corrección de Ancho en Mallas y Calidad:**
  * Se ajustaron los apartados de **Mallas** y **Calidad** en [app.js](file:///c:/Users/HuGOD777/proyectos%20practica/los-seriecitos/app.js) envolviéndolos con `<section class="section-view">`. Ahora cuentan con el mismo ancho máximo (`1200px`) y márgenes simétricos que el resto de las vistas.
* **Alineación de Textos (Justificación):**
  * Se aplicó la alineación justificada (`text-align: justify;`) a todos los párrafos de texto largo en [style.css](file:///c:/Users/HuGOD777/proyectos%20practica/los-seriecitos/style.css) para mejorar la estética y orden editorial.
  * Se definieron excepciones en CSS para ignorar la justificación en títulos, héroes, pies de página, pies de foto muy cortos y badges.
  * Se configuró un reset a alineación izquierda en pantallas de móviles pequeños (`< 576px`) para evitar espacios desiguales entre palabras.
* **Integración y Estilo de Mapas Interactivos:**
  * Se agregaron minimapas interactivos de Google Maps de la planta de Villa de Praga en el footer de Inicio y en la columna de Contacto.
  * Se envolvieron en un componente de tarjeta (`.map-card`) con una barra inferior que muestra la dirección física e incluye un enlace directo para abrir en la app de Google Maps.
  * Se aplicó un filtro CSS dinámico de inversión en modo oscuro (`filter: invert(90%)`) que transiciona suavemente a estado normal cuando el usuario cambia al tema claro.

---

## [v1.3.0] — 2026-06-07

### 🚀 Mejoras Visuales de Interacción
* **Pulsación de Botón "Ver detalles":** Se cambió el texto del CTA en todas las tarjetas de mineral de `"Ver ficha técnica →"` a `"Ver detalles →"` para un diseño más limpio y directo.
* **Alineación Vertical en Grid:** Se configuró `.mineral-card` en flex y dirección columna para que el botón `"Ver detalles"` se posicione automáticamente al fondo de la tarjeta (`margin-top: auto;`). Esto logra una alineación vertical perfecta y simétrica de los botones a lo largo de toda la grilla de minerales, sin importar la longitud del texto descriptivo.
* **Remasterización del Hover:** Al posar el mouse sobre una tarjeta de mineral:
  * La tarjeta se eleva sutilmente `3px` hacia arriba (`translateY`).
  * Se proyecta una sombra más profunda y suave (`box-shadow`), dando sensación de volumen físico.
  * El fondo cambia sutilmente a un tono dorado con opacidad muy baja (`rgba(234, 179, 8, 0.03)`).
  * La flecha dorada de `"Ver detalles →"` se desplaza levemente hacia la derecha (`4px`) mediante una transición animada de `0.15s`.

---

## [v1.2.0] — 2026-06-07

### 🛠️ Corrección de Estilo en Tarjetas de Minerales
* **Contención de Imágenes:** Se removieron estilos inline de las imágenes dentro de la grilla de yacimientos en `app.js` (`object-fit: cover` con alturas forzadas). El renderizado volvió al control de `.mineral-card-img` en `style.css` (`object-fit: contain`), logrando que las imágenes se contengan y centren perfectamente dentro del recuadro gris sin recortarse.
* **Eliminación de Botones Duplicados:** Se eliminaron los pseudo-elementos `.mineral-card::after` y `.mineral-card:hover::after` del CSS que generaban una segunda etiqueta flotante de `"Ficha Técnica"` en hover. Ahora solo se muestra el botón inline de la tarjeta.

---

## [v1.1.0] — 2026-06-07

### 🌐 Reorganización a "Yacimientos" y Enfoque en Molienda
* **Renombrado General:** Se cambió el término `"Minerales"` por `"Yacimientos"` en la navegación de escritorio y móvil en `index.html`. La ruta de navegación ahora es `?view=yacimientos`.
* **Incorporación de la Fluorita:** Se agregó la **Fluorita** ($CaF_2$) al catálogo de yacimientos propios activos, vinculando la imagen `assets/mineral-fluorita.png` y configurando una ficha técnica simplificada enfocada en sus aplicaciones y destinos industriales prácticos en lugar de análisis químicos rigurosos.
* **Propuesta de Molienda customizada y Sourcing:**
  * Se reescribió el texto de presentación en la solapa de Yacimientos para destacar la gran versatilidad técnica de la planta al ofrecer molienda a maquila (toll milling) para **cualquier tipo de yacimiento o mineral industrial** no listado.
  * Se incorporó la capacidad de búsqueda y explotación a demanda de minerales específicos si un cliente B2B lo requiere.
* **Organización del Catálogo:** Se dividió la sección en dos zonas visualmente diferenciadas:
  1. *Yacimientos Propios Activos:* Cuarzo, Feldespato y Fluorita (con tarjetas de ficha técnica completas).
  2. *Capacidad de Procesamiento de otros Minerales:* Albita, Pirofilita, Baritina y Chamote (mostrados como muestra de versatilidad operativa).

---

## [v1.0.0] — 2026-06-07

### 🧹 Limpieza Operativa y Marcadores de Posición
* **Filtro de la Galería Principal (Inicio):** Se removieron por completo de la página de Inicio las fotos indicadas por el usuario:
  * *Flota Cargadora Pesada*
  * *Canteras Reservas*
  * *Pizarra Mineral*
  * *Silos de Clasificación*
  * *Yacimiento Calcio/Sal*
  * *Ensayos Geológicos*
* **Marcador de Posición para Fotos Faltantes:** En las demás vistas internas del sitio (Nosotros, Servicios, Equipos, Mallas, Calidad), las imágenes borradas se reemplazaron por un marcador SVG inline gris oscuro con un signo **"?"** en el centro:
  ```html
  data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'><rect width='100%' height='100%' fill='%23222' stroke='%23333' stroke-width='2'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='48' font-weight='bold' fill='%23666'>?</text></svg>
  ```
  Esto conserva la simetría de las tarjetas de servicios, grillas de fotos y banners del sitio, informando visualmente que hay un espacio destinado a una nueva imagen.
* **Actualización de Pies de Foto:** En la página de Inicio se actualizaron dos leyendas de la galería:
  * *"Perforadora Sandvik"* → Cambiado a *"Pala cargadora"*
  * *"Rampa de Transporte"* → Cambiado a *"Zaranda"*
