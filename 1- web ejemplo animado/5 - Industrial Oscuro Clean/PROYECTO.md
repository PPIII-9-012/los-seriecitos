# Proyecto: Voladuras San Luis S.R.L.

> Sitio web corporativo para empresa minera de San Luis, Argentina.
> Repositorio de diseño, maquetas y documentación del proyecto.

---

## 📋 Datos de la empresa

| Dato | Valor |
|------|-------|
| **Razón social** | Voladuras San Luis S.R.L. |
| **Ubicación** | Villa Praga, Dpto. Libertador Gral. San Martín, San Luis, Argentina |
| **Actividad principal** | Molienda de minerales y servicios de voladuras |
| **Años de actividad** | 40+ (desde 1984) |
| **Minerales que procesan** | Feldespato potásico, albita, cuarzo, fluorita, baritina, pirofilita, chamote |
| **Aplicaciones** | Cerámica, porcelanato, sanitarios, pinturas, esmaltes, vajilla, vidrio, refractarios |
| **Servicios** | Molienda, voladuras controladas, exploración minera, perforación |
| **Clientes** | LIPAR, Molinos Alianza S.R.L., Roar Naschel, Piedra Grande S.A. |
| **Equipos destacados** | Perforadoras Sandvik Ranger 500/DX 680/DX 800, Furukawa HCR 910 DS, flota Toyota Hilux, camiones SCANIA/IVECO/FORD, motoniveladora Caterpillar, retroexcavadoras Komatsu/John Deere |
| **Autorizaciones** | Transporte de cargas peligrosas, polvorín tipo B (detonadores), polvorín tipo C (explosivos) |

### Textos clave extraídos del sitio original

> "El establecimiento VOLADURAS SAN LUIS SRL está ubicado al sureste de la localidad de Villa Praga, en el Departamento Libertador General San Martín, provincia de San Luis."
>
> "La actividad principal se centra en la molienda de minerales como feldespato potásico, albita, cuarzo y fluorita. Nuestros productos se emplean en la fabricación de cerámicos, porcelanatos, sanitarios, así como en pinturas, esmaltes, vajilla, aparatos eléctricos y otros usos."
>
> "Somos una empresa dedicada a la molienda de minerales, con mayor incidencia en obras viales y de ingeniería, destacándose por su vasta y reconocida experiencia en ofrecer servicios de voladuras."
>
> "El establecimiento lleva a cabo todas las medidas de seguridad, prevención y mitigación de los impactos ambientales producidos por la actividad."

---

## 📁 Estructura del proyecto

```
modelo pagina/
│
├── AGENTS.md                          # Reglas globales para agentes de IA
├── PROYECTO.md                        # Este archivo — contexto completo
├── opencode.json                      # Configuración de OpenCode (MCPs, providers)
│
├── .opencode/                         # Skills, agentes, comandos y contexto para IA
│   ├── skills/   (42 skills)          # Three.js, GSAP, motion-framer, frontend-design, etc.
│   ├── agent/    (25 agentes)         # frontend-developer, 3d-web-architect, etc.
│   ├── command/  (75 comandos)        # /enhance, /debug, /seo, /review, /clean, etc.
│   ├── context/                       # Base de conocimiento: core, development, project, ui
│   ├── instructions/                  # Preferencias del agente (respuestas, tooling)
│   ├── superpowers/                   # Workflows meta (brainstorming, debugging, TDD)
│   └── plugin/                        # Plugins de OpenCode
│
├── 0 - pagina oficial/                # Web original scrapeada (WordPress + Elementor)
│   └── index.html                     # Página "Molienda — Voladuras San Luis"
│
├── 1 - Industrial Oscuro/             # Concepto: dark + yellow, look minero
│   └── index.html
│
├── 2 - Clean Corporativo/             # Concepto: blanco + azul petróleo, profesional
│   └── index.html
│
├── 3 - Herencia & Trayectoria/        # Concepto: tonos tierra, timeline, vintage
│   └── index.html
│
├── 4 - Materia Prima - Natural/       # Concepto: verde oliva, minerales, orgánico
│   └── index.html
│
└── 5 - Industrial Oscuro Clean/       # Página completa — versión final propuesta
    └── index.html                     # Hero + Stats + Nosotros + Servicios + Minerales
```

---

## 🎨 Conceptos de diseño (maquetas)

### 1 — Industrial Oscuro
- **Estilo:** Dark, amarillo minería (#eab308), bold
- **Estructura:** Hero background image + grid overlay + 3 servicios + stats
- **Target:** Cliente industrial, sensación de potencia y minería

### 2 — Clean Corporativo
- **Estilo:** Blanco, azul petróleo (#1a3a5c), serif (DM Serif Display)
- **Estructura:** Hero con overlay azul + logo + grid servicios + about row
- **Target:** Cliente profesional, serio, estable

### 3 — Herencia & Trayectoria
- **Estilo:** Tonos tierra (#5c4a3a, #8b7b6b), Playfair Display serif, vintage
- **Estructura:** Hero tipográfico + timeline vertical + bio block
- **Target:** Cliente que valora la historia y la trayectoria de 40+ años

### 4 — Materia Prima - Natural
- **Estilo:** Verde oliva (#2d3f2a), orgánico, curvo, minerales protagónicos
- **Estructura:** Hero gradiente verde + grid de minerales con fotos + quote block
- **Target:** Cliente enfocado en el producto, la calidad del mineral

### 5 — Industrial Oscuro Clean (página completa)
- **Estilo:** Dark refinado, acentos amarillos, clean industrial
- **Estructura:** Hero + Stats + Nosotros + Servicios + Minerales + Galería + Equipos + Timeline + Contacto
- **Animaciones:** Scroll reveal (IntersectionObserver), contadores progresivos, stagger, hover effects
- **Nota:** Es la maqueta más completa. Pensada como base para la versión final

---

## 🛠️ Skills disponibles (para agentes de IA)

### Frontend & UI
| Skill | Cuándo usarla |
|-------|---------------|
| `use_skill("frontend-design")` | **Siempre** al comenzar cualquier trabajo frontend (obligatorio) |
| `use_skill("frontend-ui-animator")` | Para planificar animaciones UI antes de implementar |
| `use_skill("modern-web-design")` | Para patrones responsive, container queries, clamp(), grid |
| `use_skill("ui-ux-pro-max")` | Para search de paletas, tipografías, estilos UI |
| `use_skill("shadcn-management")` | Si se usa shadcn/ui en el proyecto |

### Animación
| Skill | Cuándo usarla |
|-------|---------------|
| `use_skill("motion-framer")` | Animaciones React con Framer Motion |
| `use_skill("gsap-scrolltrigger")` | Scroll animations, timelines complejas |
| `use_skill("react-spring-physics")` | Animaciones físicas con React Spring |
| `use_skill("animejs")` | Animaciones JS ligeras, SVG morphing |
| `use_skill("lottie-animations")` | Animaciones Lottie/After Effects |
| `use_skill("scroll-reveal-libraries")` | AOS, ScrollReveal.js |

### 3D
| Skill | Cuándo usarla |
|-------|---------------|
| `use_skill("threejs-webgl")` | Escenas Three.js puras |
| `use_skill("react-three-fiber")` | R3F + Drei en React |
| `use_skill("babylonjs-engine")` | Babylon.js (alternativa a Three.js) |
| `use_skill("web3d-integration-patterns")` | Integrar 3D con scroll/animaciones |

### Otros
| Skill | Cuándo usarla |
|-------|---------------|
| `use_skill("code-review")` | Para revisar código antes de entregar |
| `use_skill("code-refactoring")` | Para refactorizar código existente |
| `use_skill("javascript-typescript")` | Desarrollo JS/TS general |
| `use_skill("browser")` | Automatización con Chrome DevTools Protocol |

---

## ⚙️ Workflows recomendados

### Workflow: Crear una nueva página/componente

1. `use_skill("frontend-design")`
2. Leer `PROYECTO.md` para entender el proyecto y la empresa
3. Revisar la carpeta `5 - Industrial Oscuro Clean/` como referencia de estilo
4. Planificar estructura (hero, secciones, responsive)
5. Implementar en HTML + CSS inline (sin frameworks a menos que se especifique)
6. Verificar responsive (320px, 768px, 1024px, 1440px)
7. Verificar `prefers-reduced-motion`
8. Ejecutar `use_skill("code-review")` antes de finalizar

### Workflow: Añadir animaciones a una página existente

1. `use_skill("frontend-ui-animator")`
2. Identificar elementos clave (hero, cards, contadores, galería)
3. Priorizar CSS-only primero
4. Si se necesita más: IntersectionObserver para scroll reveal
5. Solo si es muy complejo: `use_skill("gsap-scrolltrigger")`
6. Verificar rendimiento (no jank, transform/opacity only)
7. Verificar `prefers-reduced-motion`

### Workflow: Debuggear un bug visual

1. `use_skill("code-review")`
2. Usar `chrome-devtools` (disponible en MCP) para inspeccionar
3. Identificar el problema (CSS, responsive, imágenes rotas)
4. Arreglar y verificar en múltiples tamaños
5. Verificar que no se rompió otra cosa

### Workflow: Preparar para entrevista con cliente

1. Repasar `PROYECTO.md` (datos empresa, conceptos de diseño)
2. Abrir cada maqueta (1-5) y evaluar cuál se alinea mejor con lo que el cliente pide
3. Preparar preguntas clave:
   - ¿Qué tono prefieren? (industrial oscuro vs corporativo claro)
   - ¿Qué secciones son prioritarias? (servicios, galería, timeline, contacto)
   - ¿Quieren fotos de sus operaciones?
   - ¿Qué colores/marca tienen?
4. Documentar respuestas y actualizar este archivo

---

## 🎯 Paleta de colores (usada en maquetas)

| Color | Hex | Uso |
|-------|-----|-----|
| Dark base | `#0a0a0a` | Fondo principal (estilo industrial) |
| Dark card | `#0d0d0d` | Fondos de tarjetas |
| Dark border | `#1a1a1a` | Bordes y separadores |
| Yellow accent | `#eab308` | Acentos, hover, números |
| Yellow hover | `#facc15` | Hover de botones |
| Text primary | `#fff` | Títulos |
| Text secondary | `#999` / `#777` | Cuerpo de texto |
| Text muted | `#555` / `#444` | Metadatos, etiquetas |
| Blue corporativo | `#1a3a5c` | Alternativa clean (ejemplo 2) |
| Verde natural | `#2d3f2a` / `#4a5f3a` | Alternativa natural (ejemplo 4) |

---

## 📐 Guías de estilo frontend

- **Tipografía:** Inter (sans) para industrial, DM Serif Display para corporativo, JetBrains Mono para técnico, Playfair Display para heritage
- **Imágenes:** Siempre con filtro grayscale + brightness .25-.35 sobre fondo dark. Efecto de sobreposición con gradient linear
- **Animaciones:** CSS keyframes + IntersectionObserver para scroll reveal. Preferir transform/opacity. Duración 600-800ms para entradas
- **Responsive:** Breakpoints a 992px y 600px. Mobile-first donde sea posible
- **Botones:** Uppercase + letter-spacing. Hover con translateY(-2px) + shadow
- **Cards:** Borde 1px #1a1a1a, hover cambia a #333. Transiciones de 300-400ms
- **No se usa:** Emojis como íconos (usar SVG), imágenes placeholder (solo fotos reales), librerías externas sin need real

---

## 🔧 MCPs configurados (en opencode.json)

| MCP | Estado | Uso |
|-----|--------|-----|
| `next-devtools` | ✅ Activo | Depuración Next.js |
| `chrome-devtools` | ✅ Activo | Inspección de navegador Chromium |
| `thorium-devtools` | ✅ Activo | DevTools con Thorium |
| `firefox-devtools` | ✅ Activo | DevTools con Firefox |
| `shadcn` | ✅ Activo | Componentes shadcn/ui |
| `nuxt-mcp-dev` | ✅ Activo | Depuración Nuxt |
| `zai-mcp-server` | ⏸️ Desactivado | Requiere API key |
| `context7` | ⏸️ Desactivado | Documentación de librerías (gratis sin key) |
| `Ref` | ⏸️ Desactivado | Requiere API key |
| `exa` | ⏸️ Desactivado | Búsqueda web |
| `firecrawl-mcp` | ⏸️ Desactivado | Web scraping |
| `morph-mcp` | ⏸️ Desactivado | Editor de código IA |
| `n8n` | ⏸️ Desactivado | Automatización |

---

## 📝 Notas para el agente

- **Siempre** leer `AGENTS.md` al inicio de cada sesión
- **Siempre** invocar `use_skill("frontend-design")` antes de cualquier trabajo frontend
- **Nunca** inventar datos de la empresa — usar la info de este archivo o preguntar
- **Nunca** generar URLs de imagen falsas — usar las fotos reales en `0 - pagina oficial/`
- Preferir CSS vanilla sin frameworks a menos que se especifique lo contrario
- Código en español (contenido visible) e inglés (código técnico: clases, variables)
- Mantener compatibilidad con navegadores modernos (Chrome, Firefox, Edge)
