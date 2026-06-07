# Changelog — Historial de Modificaciones del Sitio

Este documento detalla cronológicamente todos los cambios realizados en el sitio web de **Voladuras San Luis S.R.L.** (Procesamiento y Molienda de Minerales no Metalíferos) durante la sesión actual de desarrollo.

---

## [v1.3.0] — 2026-06-07 (Sesión Actual)

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
