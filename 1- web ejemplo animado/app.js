/**
 * Voladuras San Luis S.R.L. — Dynamic Parametric Routing Engine
 * Reads ?view= and ?mineral= from URL, renders independent views dynamically
 * Uses history.pushState for instant sub-page navigation. 
 * Animation-free and emoji-free version. Optimized with massive prototype imagery.
 */

'use strict';

// Initialize theme from storage immediately to prevent visual flash
(function() {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
})();

/* ============================================================
   DATA
   ============================================================ */

const MINERALS = {
  cuarzo: {
    name: 'Cuarzo',
    formula: 'SiO₂',
    img: '5 - Industrial Oscuro Clean/cuarzo.png',
    description: 'Mineral industrial de alta pureza. Su dureza Mohs 7 y resistencia química lo posicionan como materia prima esencial en industrias de alto valor técnico.',
    specs: [
      { param: 'Pureza (SiO₂)', value: '> 99.5%' },
      { param: 'Fe₂O₃', value: '< 0.015%' },
      { param: 'Blancura', value: '> 92° ISO' },
      { param: 'Dureza Mohs', value: '7' },
      { param: 'Granulometría', value: '#30 a #400 Tyler' },
      { param: 'Origen', value: 'Villa de Praga, San Luis' },
    ],
    industries: ['Cerámica sanitaria y técnica', 'Vidrio plano y especial', 'Fundición y revestimientos', 'Filtros industriales', 'Abrasivos'],
    tags: ['Alta pureza', 'Bajo Fe₂O₃', 'Multiproceso'],
  },
  feldespato_potosico: {
    name: 'Feldespato Potásico',
    formula: 'KAlSi₃O₈',
    img: '5 - Industrial Oscuro Clean/feldespato-potosico.png',
    description: 'Fundente potásico de primera línea. Aporta gran vitrificación, resistencia mecánica y blancura a pastas cerámicas, esmaltes y porcelanatos sanitarios.',
    specs: [
      { param: 'K₂O', value: '> 10.5%' },
      { param: 'Fe₂O₃', value: '< 0.12%' },
      { param: 'Al₂O₃', value: '18 – 20%' },
      { param: 'Blancura', value: '> 85° ISO' },
      { param: 'Granulometría', value: '#100 a #325 Tyler' },
      { param: 'Proceso', value: 'Molienda seca + clasificación' },
    ],
    industries: ['Sanitarios y vajilla', 'Esmaltes y fritas', 'Porcelana técnica', 'Vidrio óptico'],
    tags: ['Fundente', 'Potásico', 'Cerámico'],
  },
  albita: {
    name: 'Albita (Feldespato Sódico)',
    formula: 'NaAlSi₃O₈',
    img: '5 - Industrial Oscuro Clean/feldespato-sodico.png',
    description: 'Feldespato sódico de alta pureza. Reduce la temperatura de sinterización y mejora la vitrificación de la masa en pastas y esmaltes.',
    specs: [
      { param: 'Na₂O', value: '> 8.5%' },
      { param: 'Fe₂O₃', value: '< 0.15%' },
      { param: 'Al₂O₃', value: '16 – 18%' },
      { param: 'Blancura', value: '> 82° ISO' },
      { param: 'Granulometría', value: '#200 a #325 Tyler' },
      { param: 'Proceso', value: 'Molienda seca + clasificación magnética' },
    ],
    industries: ['Pastas cerámicas de gres', 'Esmaltes de vajilla', 'Vidrio industrial de envases'],
    tags: ['Vitrificante', 'Sódico', 'Baja fusión'],
  },
  pirofilita: {
    name: 'Pirofilita',
    formula: 'Al₂Si₄O₁₀(OH)₂',
    img: '5 - Industrial Oscuro Clean/pirofilita.png',
    description: 'Filosilicato laminar con excelentes propiedades refractarias, lubricantes y dieléctricas. Utilizada en revestimientos de alta temperatura y porcelana eléctrica.',
    specs: [
      { param: 'Al₂O₃', value: '> 28%' },
      { param: 'SiO₂', value: '65 – 70%' },
      { param: 'Fe₂O₃', value: '< 0.5%' },
      { param: 'Blancura tras calcinación', value: '> 88° ISO' },
      { param: 'Granulometría', value: '#200 a #400 Tyler' },
      { param: 'Temperatura refractaria', value: '> 1580°C' },
    ],
    industries: ['Cerámicas refractarias', 'Porcelana eléctrica', 'Recubrimientos industriales', 'Agroquímicos'],
    tags: ['Refractario', 'Dieléctrico', 'Laminar'],
  },
  baritina: {
    name: 'Baritina',
    formula: 'BaSO₄',
    img: '5 - Industrial Oscuro Clean/baritina.png',
    description: 'Sulfato de bario natural de alta densidad específica. Utilizado como agente densificante en fluidos de perforación y formulación de pinturas.',
    specs: [
      { param: 'BaSO₄', value: '> 92%' },
      { param: 'Densidad específica', value: '4.20 – 4.35 g/cm³' },
      { param: 'Fe₂O₃', value: '< 0.20%' },
      { param: 'Blancura', value: '> 80° ISO' },
      { param: 'Granulometría', value: '#200 a #400 Tyler' },
      { param: 'Solubilidad', value: 'Insoluble en agua' },
    ],
    industries: ['Fluidos de perforación petrolera', 'Industria de pinturas y plásticos', 'Protección radiológica'],
    tags: ['Alta densidad', 'Inerte químico', 'Densificante'],
  },
  chamote: {
    name: 'Chamote',
    formula: 'Al₂O₃ · 2SiO₂',
    img: '5 - Industrial Oscuro Clean/chamote.png',
    description: 'Material cerámico refractario obtenido por calcinación previa de arcillas. Aporta estabilidad dimensional en piezas cerámicas de gran formato y refractarios.',
    specs: [
      { param: 'Al₂O₃', value: '35 – 38%' },
      { param: 'Fe₂O₃', value: '< 1.5%' },
      { param: 'Porosidad aparente', value: '12 – 18%' },
      { param: 'Refractariedad', value: '> 1650°C' },
      { param: 'Granulometría', value: '#8/20 a #200 Tyler' },
      { param: 'Contracción térmica', value: 'Mínima / Nula' },
    ],
    industries: ['Ladrillos refractarios', 'Crisoles e instrumental de fundición', 'Masas cerámicas estructurales'],
    tags: ['Anti-contracción', 'Estabilidad térmica', 'Refractariedad alta'],
  },
  feldespato_potosico_mezcla: {
    name: 'Feldespato Potásico Mezcla',
    formula: 'KAlSi₃O₈ (Mezcla)',
    img: '5 - Industrial Oscuro Clean/feldespato-potosico-mezcla.png',
    description: 'Mezcla balanceada de feldespato potásico y cuarzo. Diseñada específicamente para optimizar la vitrificación, blancura y contracción dimensional en pastas de sanitarios B2B.',
    specs: [
      { param: 'K₂O + Na₂O', value: '> 9.5%' },
      { param: 'Fe₂O₃', value: '< 0.15%' },
      { param: 'Al₂O₃', value: '15 – 17%' },
      { param: 'SiO₂ Libre', value: '18 – 22%' },
      { param: 'Granulometría', value: '#200 a #325 Tyler' },
    ],
    industries: ['Vajilla fina y sanitarios', 'Porcelanato', 'Esmaltes cerámicos'],
    tags: ['Sanitarios', 'Vitrificante', 'Especialidad'],
  },
};


/* ============================================================
   ROUTER & ENGINE
   ============================================================ */

function navigate(path) {
  // Use relative page state parameter navigation to avoid breaking file:// protocol
  history.pushState({}, '', path);
  window.scrollTo({ top: 0, behavior: 'instant' });
  render();
}

function render() {
  const params = new URLSearchParams(window.location.search);
  const view = params.get('view');
  const mineral = params.get('mineral');

  const container = document.getElementById('dynamic-content');
  const navLinks = document.querySelectorAll('#topbar nav a[data-view]');

  // Fallback checks: If URL is just "/" or empty view search parameters, default to "inicio"
  const activeView = view || (mineral ? '' : 'inicio');

  // Update active nav link indicator
  navLinks.forEach(link => {
    link.classList.toggle('active', link.dataset.view === activeView);
  });

  // Dynamic routing triggers
  if (mineral && MINERALS[mineral]) {
    renderMineralDetail(container, mineral);
  } else {
    switch (activeView) {
      case 'nosotros':
        renderNosotros(container);
        break;
      case 'servicios':
        renderServicios(container);
        break;
      case 'minerales':
        renderMinerales(container);
        break;
      case 'equipos':
        renderEquipos(container);
        break;
      case 'contacto':
        renderContacto(container);
        break;
      case 'inicio':
      default:
        renderHome(container);
        break;
    }
  }

  // Set visual states statically
  initDynamicBehaviors(container);
}

function initDynamicBehaviors(container) {
  const el = container.querySelector('.view-container');
  if (el) {
    el.classList.add('visible');
  }

  const counters = container.querySelectorAll('[data-count]');
  counters.forEach(el => {
    el.textContent = el.dataset.count;
  });

  const tlItems = container.querySelectorAll('.tl-item');
  tlItems.forEach(el => {
    el.classList.add('active');
  });
}

/* ============================================================
   VIEW: INICIO (HOME)
   ============================================================ */
function renderHome(container) {
  container.innerHTML = `
    <div class="view-container">
      <!-- HERO -->
      <section class="hero">
        <div class="bg">
          <img src="fotos del lugar/frente.jpeg" alt="Frente de cantera Voladuras San Luis">
          <div class="overlay"></div>
          <div class="grid-overlay"></div>
          <div class="accent-line"></div>
        </div>
        <div class="hero-content">
          <div class="tag">San Luis · Argentina</div>
          <h1>
            Molienda &amp; Voladuras<br>
            <span>de Minerales</span>
            <span class="thin">40+ años de precisión en procesamiento de no metalíferos</span>
          </h1>
          <p>
            Procesamiento analítico de feldespato, cuarzo, albita y pirofilita en granulometrías certificadas. 
            Servicio integral de voladuras controladas para minería y obras viales de alta complejidad.
          </p>
          <div class="hero-buttons">
            <a href="?view=servicios" onclick="event.preventDefault(); window.navigate('?view=servicios')" class="btn btn-primary">Nuestros servicios</a>
            <a href="?view=contacto" onclick="event.preventDefault(); window.navigate('?view=contacto')" class="btn btn-outline">Contacto técnico</a>
          </div>
        </div>
        <div class="hero-scroll"><span></span></div>
      </section>

      <!-- STATS -->
      <section class="stats-section">
        <div class="stats-grid">
          <div class="stat-card">
            <div class="icon"><img src="svg-experiencia.svg" alt="Experiencia"></div>
            <div class="number-row">
              <span class="number" data-count="40">40</span><span class="suffix">+</span>
            </div>
            <div class="label">Años de Trayectoria</div>
          </div>
          <div class="stat-card">
            <div class="icon"><img src="svg-mineria.svg" alt="Perforación"></div>
            <div class="number-row">
              <span class="number" data-count="10">10</span><span class="suffix">+</span>
            </div>
            <div class="label">Perforadoras Activas</div>
          </div>
          <div class="stat-card">
            <div class="icon"><img src="svg-ingenieria.svg" alt="Vehículos"></div>
            <div class="number-row">
              <span class="number" data-count="12">12</span>
            </div>
            <div class="label">Vehículos en Flota</div>
          </div>
          <div class="stat-card">
            <div class="icon"><img src="svg-experiencia.svg" alt="Clientes"></div>
            <div class="number-row">
              <span class="number" data-count="5">5</span><span class="suffix">+</span>
            </div>
            <div class="label">Clientes B2B Activos</div>
          </div>
        </div>
      </section>

      <!-- NUESTROS MATERIALES (SHOWCASE COMPLETO) -->
      <section class="section-view" style="border-top: 1px solid var(--border); padding-top: 60px;">
        <span class="view-kicker">Materias Primas Críticas</span>
        <div class="view-header">
          <h2>Nuestros <span>Materiales y Minerales</span></h2>
          <p>Extraídos de yacimientos propios en San Luis y procesados bajo normas analíticas de granulometría y pureza.</p>
        </div>
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(250px, 1fr)); gap:20px;">
          <div style="background:var(--bg-alt); border:1px solid var(--border); padding:24px; text-align:center;">
            <img src="5 - Industrial Oscuro Clean/cuarzo.png" alt="Cuarzo" style="height:120px; width:100%; object-fit:contain; background:var(--bg-mineral-img); padding:8px; margin-bottom:16px; border:1px solid var(--border-mineral-img);">
            <h3 style="font-size:18px; color:var(--text-white); margin-bottom:8px; font-weight:700;">Cuarzo Grado A</h3>
            <p style="font-size:13px; color:var(--text-gray); line-height:1.5;">SiO₂ de alta pureza (&gt;99.5%) and ultra bajo hierro para vidrio técnico y vitrocerámica.</p>
          </div>
          <div style="background:var(--bg-alt); border:1px solid var(--border); padding:24px; text-align:center;">
            <img src="5 - Industrial Oscuro Clean/feldespato-potosico.png" alt="Feldespato Potásico" style="height:120px; width:100%; object-fit:contain; background:var(--bg-mineral-img); padding:8px; margin-bottom:16px; border:1px solid var(--border-mineral-img);">
            <h3 style="font-size:18px; color:var(--text-white); margin-bottom:8px; font-weight:700;">Feldespato Potásico</h3>
            <p style="font-size:13px; color:var(--text-gray); line-height:1.5;">Fundente potásico KAlSi₃O₈ para esmaltes, porcelanatos y sanitarios.</p>
          </div>
          <div style="background:var(--bg-alt); border:1px solid var(--border); padding:24px; text-align:center;">
            <img src="5 - Industrial Oscuro Clean/feldespato-sodico.png" alt="Feldespato Sódico" style="height:120px; width:100%; object-fit:contain; background:var(--bg-mineral-img); padding:8px; margin-bottom:16px; border:1px solid var(--border-mineral-img);">
            <h3 style="font-size:18px; color:var(--text-white); margin-bottom:8px; font-weight:700;">Albita (Feldespato Sódico)</h3>
            <p style="font-size:13px; color:var(--text-gray); line-height:1.5;">NaAlSi₃O₈ de baja temperatura de fusión que optimiza la sinterización de pastas.</p>
          </div>
          <div style="background:var(--bg-alt); border:1px solid var(--border); padding:24px; text-align:center;">
            <img src="5 - Industrial Oscuro Clean/feldespato-potosico-mezcla.png" alt="Feldespato Potásico Mezcla" style="height:120px; width:100%; object-fit:contain; background:var(--bg-mineral-img); padding:8px; margin-bottom:16px; border:1px solid var(--border-mineral-img);">
            <h3 style="font-size:18px; color:var(--text-white); margin-bottom:8px; font-weight:700;">Feldespato Potásico Mezcla</h3>
            <p style="font-size:13px; color:var(--text-gray); line-height:1.5;">Fórmula pre-mezclada óptima para pastas sanitarias B2B de gran blancura.</p>
          </div>
          <div style="background:var(--bg-alt); border:1px solid var(--border); padding:24px; text-align:center;">
            <img src="5 - Industrial Oscuro Clean/pirofilita.png" alt="Pirofilita" style="height:120px; width:100%; object-fit:contain; background:var(--bg-mineral-img); padding:8px; margin-bottom:16px; border:1px solid var(--border-mineral-img);">
            <h3 style="font-size:18px; color:var(--text-white); margin-bottom:8px; font-weight:700;">Pirofilita</h3>
            <p style="font-size:13px; color:var(--text-gray); line-height:1.5;">Filosilicato refractario ideal para cerámicas refractarias y porcelana eléctrica.</p>
          </div>
          <div style="background:var(--bg-alt); border:1px solid var(--border); padding:24px; text-align:center;">
            <img src="5 - Industrial Oscuro Clean/baritina.png" alt="Baritina" style="height:120px; width:100%; object-fit:contain; background:var(--bg-mineral-img); padding:8px; margin-bottom:16px; border:1px solid var(--border-mineral-img);">
            <h3 style="font-size:18px; color:var(--text-white); margin-bottom:8px; font-weight:700;">Baritina</h3>
            <p style="font-size:13px; color:var(--text-gray); line-height:1.5;">BaSO₄ de alta densidad específico (4.2+) para lodos de perforación y pinturas.</p>
          </div>
          <div style="background:var(--bg-alt); border:1px solid var(--border); padding:24px; text-align:center;">
            <img src="5 - Industrial Oscuro Clean/chamote.png" alt="Chamote" style="height:120px; width:100%; object-fit:contain; background:var(--bg-mineral-img); padding:8px; margin-bottom:16px; border:1px solid var(--border-mineral-img);">
            <h3 style="font-size:18px; color:var(--text-white); margin-bottom:8px; font-weight:700;">Chamote</h3>
            <p style="font-size:13px; color:var(--text-gray); line-height:1.5;">Estabilizador dimensional cerámico refractario para ladrillos y crisoles.</p>
          </div>
        </div>
      </section>

      <!-- PROTOTYPE GALLERY GRID (MASSIVE IMAGES OPTIMIZATION) -->
      <section class="section-view">
        <span class="view-kicker">Galería de Operación (Prototipo)</span>
        <div class="view-header">
          <h2>Infraestructura <span>y Maquinaria en Detalle</span></h2>
          <p>Compilación completa de imágenes del yacimiento, planta de molienda y flota pesada de extracción activa en San Luis.</p>
        </div>
        <div class="gallery-grid" style="grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 16px;">
          <div>
            <img src="fotos del lugar/frente.jpeg" alt="Frente de Cantera" style="height:220px; width:100%; object-fit:cover;">
            <p style="font-size:11px; color:#777; margin-top:6px; text-transform:uppercase; font-weight:700;">Frente de Explotación</p>
          </div>
          <div>
            <img src="fotos del lugar/maquina.jpeg" alt="Maquinaria de Perforación" style="height:220px; width:100%; object-fit:cover;">
            <p style="font-size:11px; color:#777; margin-top:6px; text-transform:uppercase; font-weight:700;">Perforadora Sandvik</p>
          </div>
          <div>
            <img src="fotos del lugar/rampa.jpeg" alt="Rampa de Acceso" style="height:220px; width:100%; object-fit:cover;">
            <p style="font-size:11px; color:#777; margin-top:6px; text-transform:uppercase; font-weight:700;">Rampa de Transporte</p>
          </div>
          <div>
            <img src="fotos del lugar/reservas.jpeg" alt="Reservas Minerales" style="height:220px; width:100%; object-fit:cover;">
            <p style="font-size:11px; color:#777; margin-top:6px; text-transform:uppercase; font-weight:700;">Canteras Reservas</p>
          </div>
          <div>
            <img src="fotos del lugar/rocas.jpeg" alt="Frente de Rocas" style="height:220px; width:100%; object-fit:cover;">
            <p style="font-size:11px; color:#777; margin-top:6px; text-transform:uppercase; font-weight:700;">Pizarra Mineral</p>
          </div>
          <div>
            <img src="fotos del lugar/sal.jpeg" alt="Yacimiento Salino" style="height:220px; width:100%; object-fit:cover;">
            <p style="font-size:11px; color:#777; margin-top:6px; text-transform:uppercase; font-weight:700;">Yacimiento Calizo/Sal</p>
          </div>
          <div>
            <img src="fotos del lugar/tecnico.jpeg" alt="Personal Técnico" style="height:220px; width:100%; object-fit:cover;">
            <p style="font-size:11px; color:#777; margin-top:6px; text-transform:uppercase; font-weight:700;">Ensayos Geológicos</p>
          </div>
          <div>
            <img src="5 - Industrial Oscuro Clean/capacidad-operativa.jpg" alt="Capacidad Operativa" style="height:220px; width:100%; object-fit:cover;">
            <p style="font-size:11px; color:#777; margin-top:6px; text-transform:uppercase; font-weight:700;">Frente de Trabajo VSL</p>
          </div>
          <div>
            <img src="5 - Industrial Oscuro Clean/molienda-01-950x534.jpg" alt="Molienda 01" style="height:220px; width:100%; object-fit:cover;">
            <p style="font-size:11px; color:#777; margin-top:6px; text-transform:uppercase; font-weight:700;">Planta Procesamiento</p>
          </div>
          <div>
            <img src="5 - Industrial Oscuro Clean/molienda-02.jpg" alt="Molienda 02" style="height:220px; width:100%; object-fit:cover;">
            <p style="font-size:11px; color:#777; margin-top:6px; text-transform:uppercase; font-weight:700;">Silos de Clasificación</p>
          </div>
          <div>
            <img src="5 - Industrial Oscuro Clean/molienda-03.jpg" alt="Molienda 03" style="height:220px; width:100%; object-fit:cover;">
            <p style="font-size:11px; color:#777; margin-top:6px; text-transform:uppercase; font-weight:700;">Líneas de Carga B2B</p>
          </div>
          <div>
            <img src="5 - Industrial Oscuro Clean/molienda-04.jpg" alt="Molienda 04" style="height:220px; width:100%; object-fit:cover;">
            <p style="font-size:11px; color:#777; margin-top:6px; text-transform:uppercase; font-weight:700;">Instalaciones Generales</p>
          </div>
          <div>
            <img src="5 - Industrial Oscuro Clean/molienda-05.jpg" alt="Molienda 05" style="height:220px; width:100%; object-fit:cover;">
            <p style="font-size:11px; color:#777; margin-top:6px; text-transform:uppercase; font-weight:700;">Naves de Trituración</p>
          </div>
          <div>
            <img src="5 - Industrial Oscuro Clean/molienda-06.jpg" alt="Molienda 06" style="height:220px; width:100%; object-fit:cover;">
            <p style="font-size:11px; color:#777; margin-top:6px; text-transform:uppercase; font-weight:700;">Despacho a Granel</p>
          </div>
          <div>
            <img src="5 - Industrial Oscuro Clean/molienda-07.jpg" alt="Molienda 07" style="height:220px; width:100%; object-fit:cover;">
            <p style="font-size:11px; color:#777; margin-top:6px; text-transform:uppercase; font-weight:700;">Operación Nocturna</p>
          </div>
          <div>
            <img src="5 - Industrial Oscuro Clean/molienda-08.jpg" alt="Molienda 08" style="height:220px; width:100%; object-fit:cover;">
            <p style="font-size:11px; color:#777; margin-top:6px; text-transform:uppercase; font-weight:700;">Sistemas de Perforación</p>
          </div>
          <div>
            <img src="5 - Industrial Oscuro Clean/molienda-09.jpg" alt="Molienda 09" style="height:220px; width:100%; object-fit:cover;">
            <p style="font-size:11px; color:#777; margin-top:6px; text-transform:uppercase; font-weight:700;">Controladores de Blancura</p>
          </div>
          <div>
            <img src="5 - Industrial Oscuro Clean/molienda-10.jpg" alt="Molienda 10" style="height:220px; width:100%; object-fit:cover;">
            <p style="font-size:11px; color:#777; margin-top:6px; text-transform:uppercase; font-weight:700;">Stock en Galpones</p>
          </div>
          <div>
            <img src="5 - Industrial Oscuro Clean/molienda-11.jpg" alt="Molienda 11" style="height:220px; width:100%; object-fit:cover;">
            <p style="font-size:11px; color:#777; margin-top:6px; text-transform:uppercase; font-weight:700;">Flota Cargadora Pesada</p>
          </div>
        </div>
      </section>
    </div>
  `;
}

/* ============================================================
   VIEW: NOSOTROS
   ============================================================ */
function renderNosotros(container) {
  container.innerHTML = `
    <div class="view-container">
      <section class="section-view">
        <span class="view-kicker">Sobre Nosotros</span>
        <div class="view-header">
          <h1>Una Empresa con <span>Trayectoria Minera</span></h1>
          <p>Operando de forma ininterrumpida desde 1984 en la provincia de San Luis, Argentina.</p>
        </div>
        
        <div class="about-grid">
          <!-- NOSOTROS PHOTO GRID -->
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
            <img src="5 - Industrial Oscuro Clean/molienda-05.jpg" alt="Molienda" style="width:100%; height:180px; object-fit:cover; border:1px solid #333;">
            <img src="fotos del lugar/reservas.jpeg" alt="Reservas" style="width:100%; height:180px; object-fit:cover; border:1px solid #333;">
            <img src="fotos del lugar/rampa.jpeg" alt="Acceso" style="width:100%; height:180px; object-fit:cover; border:1px solid #333;">
            <img src="fotos del lugar/sal.jpeg" alt="Sal" style="width:100%; height:180px; object-fit:cover; border:1px solid #333;">
          </div>
          
          <div class="text">
            <h3>Voladuras San Luis S.R.L.</h3>
            <p>
              Somos una organización dedicada al procesamiento de minerales no metalíferos e ingeniería en perforaciones y voladuras. Proveemos materias primas críticas bajo normas de calidad rigurosas para la industria de la cerámica sanitaria, el vidrio de alta blancura, materiales refractarios y cargas viales.
            </p>
            <p>
              Nuestra planta principal de procesamiento y molienda está estratégicamente situada al sureste de Villa de Praga, Departamento Libertador General San Martín, provincia de San Luis. Desde allí, garantizamos un control estricto de granulometría (Tamizado Tyler) y pureza química (remoción ferrosa magnética).
            </p>
            
            <div class="feature">
              <div class="dot"></div>
              <span>40 años liderando el abastecimiento minero en Cuyo.</span>
            </div>
            <div class="feature">
              <div class="dot"></div>
              <span>Habilitación y flota autorizada para el transporte de sustancias peligrosas.</span>
            </div>
            <div class="feature">
              <div class="dot"></div>
              <span>Protocolo estricto de seguridad operativa y sustentabilidad ambiental.</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  `;
}

/* ============================================================
   VIEW: SERVICIOS
   ============================================================ */
function renderServicios(container) {
  container.innerHTML = `
    <div class="view-container">
      <section class="section-view">
        <span class="view-kicker">Especialidades Industriales</span>
        <div class="view-header">
          <h1>Nuestra <span>Especialidad</span></h1>
          <p>Servicios integrales para la minería extractiva, construcción civil e industria manufacturera.</p>
        </div>
        
        <div class="services-grid">
          <div class="service-card" style="padding-top:20px;">
            <img src="5 - Industrial Oscuro Clean/molienda-01-950x534.jpg" alt="Molienda" style="width:100%; height:150px; object-fit:cover; margin-bottom:20px; border:1px solid #1a1a1a;">
            <div class="num">01</div>
            <h3>Molienda de Minerales</h3>
            <p>
              Procesamiento de cuarzo de alta pureza, feldespato potásico, albita sódica y pirofilita. Molienda seca controlada para obtener granulometrías precisas desde malla #8/20 hasta malla #400 Tyler.
            </p>
            <a href="?view=minerales" onclick="event.preventDefault(); window.navigate('?view=minerales')" class="arrow">Ver catálogo técnico →</a>
          </div>
          
          <div class="service-card" style="padding-top:20px;">
            <img src="fotos del lugar/rocas.jpeg" alt="Voladuras" style="width:100%; height:150px; object-fit:cover; margin-bottom:20px; border:1px solid #1a1a1a;">
            <div class="num">02</div>
            <h3>Voladuras Controladas</h3>
            <p>
              Diseño y ejecución de voladuras a cielo abierto para explotación de yacimientos y obra civil. Ensanche de caminos de montaña, túneles y zanjas con mediciones sísmicas de seguridad.
            </p>
            <span class="arrow">Garantía de Seguridad Operativa</span>
          </div>
          
          <div class="service-card" style="padding-top:20px;">
            <img src="fotos del lugar/tecnico.jpeg" alt="Exploración" style="width:100%; height:150px; object-fit:cover; margin-bottom:20px; border:1px solid #1a1a1a;">
            <div class="num">03</div>
            <h3>Exploración y cubicación</h3>
            <p>
              Perforación diamantina en frentes de cantera, cubicaciones de yacimientos y desarrollo de infraestructura minera. Equipamiento neumático e hidráulico operado por personal certificado.
            </p>
            <span class="arrow">Maquinaria de última generación</span>
          </div>
        </div>
      </section>
    </div>
  `;
}

/* ============================================================
   VIEW: EQUIPOS & TRAYECTORIA
   ============================================================ */
function renderEquipos(container) {
  container.innerHTML = `
    <div class="view-container">
      <!-- EQUIPOS -->
      <section class="section-view">
        <span class="view-kicker">Flota y Capacidad</span>
        <div class="view-header">
          <h1>Equipos <span>y Maquinaria</span></h1>
          <p>Equipamiento industrial propio que asegura autonomía y continuidad en proyectos de gran envergadura.</p>
        </div>
        
        <!-- PROTOTYPE MACHINERY BANNER GRID -->
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-bottom:48px;">
          <img src="fotos del lugar/maquina.jpeg" alt="Sandvik DX680" style="width:100%; height:260px; object-fit:cover; border:1px solid #333;">
          <img src="5 - Industrial Oscuro Clean/molienda-11.jpg" alt="Pala SDLG" style="width:100%; height:260px; object-fit:cover; border:1px solid #333;">
        </div>

        <div class="equipment-grid">
          <div class="eq-card">
            <div class="cat">Perforación</div>
            <ul>
              <li><strong>Sandvik Ranger 500</strong><br>5 unidades · Ensayos de frentes</li>
              <li><strong>Sandvik DX 680</strong><br>3 unidades · Alta productividad</li>
              <li><strong>Sandvik DX 800</strong><br>1 unidad · Mod. 2023</li>
              <li><strong>Furukawa HCR 910 DS</strong><br>Perforadora de orugas rápida</li>
            </ul>
          </div>
          
          <div class="eq-card">
            <div class="cat">Compresores</div>
            <ul>
              <li><strong>Motocompresor 900Q</strong><br>Presión constante en frentes</li>
              <li><strong>Sullair 185Q-JD</strong><br>4 unidades · Equipos portátiles 2019</li>
            </ul>
          </div>
          
          <div class="eq-card">
            <div class="cat">Logística Vial</div>
            <ul>
              <li><strong>Toyota Hilux 4x4</strong><br>6 unidades · Apoyo logístico cantera</li>
              <li><strong>Camiones Scania / Iveco</strong><br>Flota autorizada para explosivos</li>
              <li><strong>Semirremolques Randon</strong><br>Despacho directo de big-bags</li>
            </ul>
          </div>
          
          <div class="eq-card">
            <div class="cat">Mov. de Suelos</div>
            <ul>
              <li><strong>Caterpillar 212</strong><br>Motoniveladora · Conservación</li>
              <li><strong>Komatsu PC200-7 / PC300</strong><br>Retroexcavadoras de cantera</li>
              <li><strong>John Deere JD 200 GLC</strong><br>Retroexcavadora heavy mod. 2023</li>
              <li><strong>SDLG Loader</strong><br>Cargadora frontal 2019</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- TIMELINE (TRAYECTORIA) -->
      <section class="section-view timeline-section">
        <span class="view-kicker">Trayectoria Histórica</span>
        <div class="view-header">
          <h2>Nuestra <span>Historia de Proyectos</span></h2>
          <p>Hitos de provisión mineral y servicios de voladuras con nuestros clientes estratégicos.</p>
        </div>
        
        <div class="timeline">
          <div class="tl-item">
            <div class="year">2024</div>
            <div class="content"><strong>LIPAR</strong> — Suministro constante de cuarzo y feldespato molido en malla #325. Ejecución de voladuras de frente de cantera en San Luis.</div>
          </div>
          <div class="tl-item">
            <div class="year">2022</div>
            <div class="content"><strong>LIPAR</strong> — Renovación de contrato de provisión y servicios viales de destape y remoción.</div>
          </div>
          <div class="tl-item">
            <div class="year">2019</div>
            <div class="content"><strong>Molinos Alianza S.R.L.</strong> — Cooperación técnica y molienda cruzada para satisfacer la demanda de granulometría extra fina.</div>
          </div>
          <div class="tl-item">
            <div class="year">2017</div>
            <div class="content"><strong>Roar Naschel</strong> — Servicio integral de perforación diamantina y voladuras controladas en obra vial provincial.</div>
          </div>
          <div class="tl-item">
            <div class="year">2015</div>
            <div class="content"><strong>Piedra Grande S.A.</strong> — Trabajos de prospección, cubicación de feldespato y voladuras de alta precisión.</div>
          </div>
          <div class="tl-item">
            <div class="year">1984</div>
            <div class="content"><strong>Fundación</strong> — Apertura de canteras y planta piloto en Villa de Praga, San Luis. Inicio del procesamiento de minerales industriales.</div>
          </div>
        </div>
      </section>
    </div>
  `;
}

/* ============================================================
   VIEW: CONTACTO
   ============================================================ */
function renderContacto(container) {
  container.innerHTML = `
    <div class="view-container">
      <section class="section-view">
        <span class="view-kicker">Canales de Atención</span>
        <div class="view-header">
          <h1>Comunicate con <span>Nosotros</span></h1>
          <p>Solicitudes de cotización comercial B2B, fichas técnicas específicas y asesoría en frentes de voladura.</p>
        </div>
        
        <div class="contact-grid">
          <div class="contact-info">
            <h3>Voladuras San Luis S.R.L.</h3>
            <p>
              Nuestro equipo comercial y de soporte técnico atiende los requerimientos industriales de todo el país. Para solicitar cotizaciones de lotes o programar visitas técnicas a la planta de Villa de Praga, completá el formulario de cotización o contactanos directamente.
            </p>
            
            <div class="detail">
              <div class="txt">
                <strong>Planta Industrial</strong>
                Villa de Praga, Dpto. Libertador Gral. San Martín, San Luis, Argentina.
              </div>
            </div>
            
            <div class="detail">
              <div class="txt">
                <strong>Teléfono Comercial B2B</strong>
                +54 (0266) 15-4682010 · Lunes a Viernes de 8:00 a 17:00hs.
              </div>
            </div>
            
            <div class="detail">
              <div class="txt">
                <strong>Correo Electrónico</strong>
                contacto@voladurassanluis.com.ar · ventas@voladurassanluis.com.ar
              </div>
            </div>
            
            <div class="detail">
              <div class="txt">
                <strong>Atención Comercial</strong>
                Despachos a granel, Big-bags (1.5 TN) y bolsas de 25 kg. Logística nacional.
              </div>
            </div>
          </div>
          
          <!-- MULTIPLE IMAGES FOR CONTACT VIEW -->
          <div style="display:grid; grid-template-columns:1fr; gap:16px;">
            <img src="5 - Industrial Oscuro Clean/capacidad-operativa.jpg" alt="Frente de cantera Voladuras San Luis" style="width: 100%; height: 200px; object-fit:cover; border:1px solid #333;">
            <img src="fotos del lugar/frente.jpeg" alt="Oficina Planta" style="width: 100%; height: 200px; object-fit:cover; border:1px solid #333;">
          </div>
        </div>
      </section>
    </div>
  `;
}

/* ============================================================
   VIEW: MINERALES (CATALOGO COMPLETO)
   ============================================================ */
function renderMinerales(container) {
  const cards = Object.entries(MINERALS).map(([key, m], i) => `
    <a
      class="mineral-card"
      href="?mineral=${key}"
      id="card-${key}"
      onclick="event.preventDefault(); window.navigate('?mineral=${key}')"
      aria-label="Ver ficha técnica de ${m.name}">
      <!-- PROTOTYPE MINIATURE IMAGES -->
      <img src="${m.img}" alt="${m.name}" style="width:100%; height:130px; object-fit:contain; background:var(--bg-mineral-img); padding:8px; margin-bottom:16px; border:1px solid var(--border-mineral-img);">
      <span class="mineral-index">0${i + 1} — ${m.formula}</span>
      <h3>${m.name}</h3>
      <span class="mineral-formula">${m.description.slice(0, 80)}…</span>
      <p>${m.description}</p>
      <div class="mineral-tags">
        ${m.tags.map(t => `<span class="tag">${t}</span>`).join('')}
      </div>
    </a>
  `).join('');

  container.innerHTML = `
    <div class="view-container">
      <div class="section-view">
        <span class="view-kicker">Especificaciones Técnicas</span>
        <div class="view-header">
          <h1>Minerales <span>No Metalíferos</span></h1>
          <p>Extracción y molienda certificada bajo rigurosos ensayos físicos y químicos en planta propia en Villa de Praga, San Luis.</p>
        </div>
        <div class="minerals-grid" role="list">
          ${cards}
        </div>
      </div>
    </div>
  `;
}

/* ============================================================
   VIEW: MINERAL DETAIL (FICHA INDIVIDUAL)
   ============================================================ */
function renderMineralDetail(container, key) {
  const m = MINERALS[key];
  const rows = m.specs.map((s, i) => `
    <tr>
      <td>${s.param}</td>
      <td>${s.value}</td>
    </tr>
  `).join('');

  container.innerHTML = `
    <div class="view-container">
      <div class="mineral-detail-view" id="main-content-target">
        <button
          class="back-btn"
          onclick="window.navigate('?view=minerales')"
          aria-label="Volver al catálogo de minerales">
          <span class="arrow-char" aria-hidden="true">←</span> Volver al catálogo
        </button>
        <div class="mineral-hero" style="display:grid; grid-template-columns:1.5fr 1fr; gap:40px; align-items:start;">
          <div>
            <h1 class="mh-name">${m.name}</h1>
            <span class="mh-formula">${m.formula}</span>
            <p class="mh-desc">${m.description}</p>
          </div>
          <!-- PRODUCT BIG DRAWING / PHOTO -->
          <img src="${m.img}" alt="${m.name}" style="width:100%; height:200px; object-fit:contain; background:var(--bg-mineral-img); border:1px solid var(--border-mineral-img); padding:16px;">
        </div>
        <table class="specs-table" aria-label="Especificaciones de ${m.name}">
          <thead>
            <tr>
              <th scope="col">Parámetro de control</th>
              <th scope="col">Especificación garantizada</th>
            </tr>
          </thead>
          <tbody>
            ${rows}
          </tbody>
        </table>
        
        <div style="margin-top: 24px;">
          <span class="view-kicker">Sectores de Aplicación</span>
          <div class="mineral-tags" style="display:flex; flex-wrap:wrap; gap:8px; margin-top:12px;">
            ${m.industries.map(ind => `<span class="tag">${ind}</span>`).join('')}
          </div>
        </div>
      </div>
    </div>
  `;
}

/* (renderMallas, selectMalla, renderCalidad removed) */

/* ============================================================
   THEME MANAGER (Light/Dark Mode Toggle)
   ============================================================ */

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
  const icon = document.getElementById('theme-toggle-icon');
  if (!icon) return;
  if (theme === 'light') {
    icon.innerHTML = `<path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41l-1.06-1.06zm1.06-12.37c-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06c.39-.39.39-1.03 0-1.41zm-12.37 12.37c-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06c.39-.39.39-1.03 0-1.41z"/>`;
  } else {
    icon.innerHTML = `<path d="M12.3 22h-.1c-5.5 0-10-4.5-10-10 0-4.8 3.5-8.9 8.2-9.8.5-.1 1 .2 1.2.7.2.5 0 1.1-.4 1.4-2.8 1.9-4.3 5.2-3.8 8.6.5 3.5 3.3 6.3 6.8 6.8 3.4.5 6.7-1 8.6-3.8.3-.4.9-.6 1.4-.4.5.2.8.7.7 1.2-.9 4.7-5 8.2-9.8 8.3z"/>`;
  }
}

// Global exposure
window.toggleTheme = toggleTheme;
window.navigate = navigate;

/* ============================================================
   INITIALIZATION
   ============================================================ */
window.addEventListener('popstate', render);
document.addEventListener('DOMContentLoaded', () => {
  render();
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
  updateThemeIcon(currentTheme);
});
