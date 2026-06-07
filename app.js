/**
 * Voladuras San Luis S.R.L. — Dynamic Parametric Routing Engine
 * Reads ?view= and ?mineral= from URL, renders independent views dynamically
 * Uses history.pushState for instant sub-page navigation. 
 * Animation-free and emoji-free version. Optimized with massive prototype imagery.
 */

'use strict';

/* ============================================================
   DATA
   ============================================================ */const MINERALS = {
  cuarzo: {
    name: 'Cuarzo',
    formula: 'SiO₂',
    img: 'assets/mineral-cuarzo.png',
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
    img: 'assets/mineral-feldespato-potasico.png',
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
    img: 'assets/mineral-albita-sodico.png',
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
    img: 'assets/mineral-pirofilita.png',
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
    img: 'assets/mineral-baritina.png',
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
    img: 'assets/mineral-chamote.png',
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
};

const MALLAS = [
  {
    num: '#400',
    microns: '37 µm',
    industries: [
      { name: 'Esmaltes y fritas', desc: 'Cobertura total de grano en aplicaciones vidriadas de altísima definición.' },
      { name: 'Farmacia / Cosmética', desc: 'Relleno de talcos y polvos de alta finura con especificación USP.' },
    ],
    minerals: ['Cuarzo', 'Pirofilita', 'Baritina'],
  },
  {
    num: '#325',
    microns: '44 µm',
    industries: [
      { name: 'Sanitarios (WC/lavabos)', desc: 'Requisito de malla estándar para pasta de porcelana sanitaria de primera calidad.' },
      { name: 'Porcelana técnica', desc: 'Componente fundente en piezas de baja absorción y alta densidad.' },
    ],
    minerals: ['Feldespato Potásico', 'Albita', 'Cuarzo'],
  },
  {
    num: '#200',
    microns: '74 µm',
    industries: [
      { name: 'Cerámica de revestimiento', desc: 'Mezclas de cuerpo cerámico para gres y azulejos de alta resistencia.' },
      { name: 'Vidrio especial', desc: 'Fusiones de SiO₂ de alta pureza para borosilicato y vidrio neutro.' },
    ],
    minerals: ['Cuarzo', 'Albita', 'Baritina', 'Pirofilita'],
  },
  {
    num: '#120',
    microns: '125 µm',
    industries: [
      { name: 'Fundición', desc: 'Arena de moldeo para fundición en hierro y acero con tolerancias de dilatación térmica.' },
      { name: 'Vidrio plano', desc: 'Formulación de batch industrial para vidrio float de construcción.' },
    ],
    minerals: ['Cuarzo'],
  },
  {
    num: '#100',
    microns: '149 µm',
    industries: [
      { name: 'Porcelana eléctrica', desc: 'Componente refractario en aisladores de alta tensión (norma IEC 60672).' },
      { name: 'Agroquímicos', desc: 'Soporte y diluyente en formulaciones de insecticidas en polvo.' },
    ],
    minerals: ['Pirofilita', 'Feldespato Potásico'],
  },
  {
    num: '#30/80',
    microns: '595 – 177 µm',
    industries: [
      { name: 'Filtración de agua', desc: 'Lecho filtrante en sistemas de tratamiento de aguas potables e industriales.' },
      { name: 'Construcción', desc: 'Árido fino en morteros, hormigones ligeros y revoques.' },
    ],
    minerals: ['Cuarzo'],
  },
  {
    num: '#8/20',
    microns: '2380 – 850 µm',
    industries: [
      { name: 'Fracturación hidráulica (Fracking)', desc: 'Arena propante de alta resistencia a la compresión para mantenimiento de fracturas.' },
      { name: 'Filtros de piscinas', desc: 'Arena filtrante certificada para sistemas de recirculación de agua.' },
    ],
    minerals: ['Cuarzo', 'Chamote'],
  },
];

/* ============================================================
   ROUTER & ENGINE
   ============================================================ */

function navigate(path) {
  // Use relative page state parameter navigation to avoid breaking file:// protocol
  history.pushState({}, '', path);
  window.scrollTo({ top: 0, behavior: 'instant' });
  closeMobileMenu(); // Close mobile drawer if open
  render();
}

function render() {
  const params = new URLSearchParams(window.location.search);
  const view = params.get('view');
  const mineral = params.get('mineral');

  const container = document.getElementById('dynamic-content');
  const navLinks = document.querySelectorAll('#topbar nav a[data-view], .mobile-drawer-nav a[data-view]');

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
      case 'mallas':
        renderMallas(container);
        break;
      case 'calidad':
        renderCalidad(container);
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
          <img src="assets/operacion-frente-cantera.jpeg" alt="Frente de cantera Voladuras San Luis">
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
            <div class="icon"><img src="assets/icon-experiencia.svg" alt="Experiencia"></div>
            <div class="number-row">
              <span class="number" data-count="40">40</span><span class="suffix">+</span>
            </div>
            <div class="label">Años de Trayectoria</div>
          </div>
          <div class="stat-card">
            <div class="icon"><img src="assets/icon-mineria.svg" alt="Perforación"></div>
            <div class="number-row">
              <span class="number" data-count="10">10</span><span class="suffix">+</span>
            </div>
            <div class="label">Perforadoras Activas</div>
          </div>
          <div class="stat-card">
            <div class="icon"><img src="assets/icon-ingenieria.svg" alt="Vehículos"></div>
            <div class="number-row">
              <span class="number" data-count="12">12</span>
            </div>
            <div class="label">Vehículos en Flota</div>
          </div>
          <div class="stat-card">
            <div class="icon"><img src="assets/icon-experiencia.svg" alt="Clientes"></div>
            <div class="number-row">
              <span class="number" data-count="5">5</span><span class="suffix">+</span>
            </div>
            <div class="label">Clientes B2B Activos</div>
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
            <img src="assets/operacion-frente-cantera.jpeg" alt="Frente de Cantera" style="height:220px; width:100%; object-fit:cover;">
            <p style="font-size:11px; color:var(--text-dark); margin-top:6px; text-transform:uppercase; font-weight:700;">Frente de Explotación</p>
          </div>
          <div>
            <img src="assets/perforadora-sandvik.jpeg" alt="Maquinaria de Perforación" style="height:220px; width:100%; object-fit:cover;">
            <p style="font-size:11px; color:var(--text-dark); margin-top:6px; text-transform:uppercase; font-weight:700;">Pala cargadora</p>
          </div>
          <div>
            <img src="assets/rampa-transporte.jpeg" alt="Rampa de Acceso" style="height:220px; width:100%; object-fit:cover;">
            <p style="font-size:11px; color:var(--text-dark); margin-top:6px; text-transform:uppercase; font-weight:700;">Zaranda</p>
          </div>

          <div>
            <img src="assets/operacion-cargadora.jpg" alt="Capacidad Operativa" style="height:220px; width:100%; object-fit:cover;">
            <p style="font-size:11px; color:var(--text-dark); margin-top:6px; text-transform:uppercase; font-weight:700;">Frente de Trabajo VSL</p>
          </div>
          <div>
            <img src="assets/planta-molienda.jpg" alt="Molienda 01" style="height:220px; width:100%; object-fit:cover;">
            <p style="font-size:11px; color:var(--text-dark); margin-top:6px; text-transform:uppercase; font-weight:700;">Planta Procesamiento</p>
          </div>

          <div>
            <img src="assets/lineas-despacho-b2b.jpg" alt="Molienda 03" style="height:220px; width:100%; object-fit:cover;">
            <p style="font-size:11px; color:var(--text-dark); margin-top:6px; text-transform:uppercase; font-weight:700;">Líneas de Carga B2B</p>
          </div>
          <div>
            <img src="assets/instalaciones-planta.jpg" alt="Molienda 04" style="height:220px; width:100%; object-fit:cover;">
            <p style="font-size:11px; color:var(--text-dark); margin-top:6px; text-transform:uppercase; font-weight:700;">Instalaciones Generales</p>
          </div>
          <div>
            <img src="assets/naves-trituracion.jpg" alt="Molienda 05" style="height:220px; width:100%; object-fit:cover;">
            <p style="font-size:11px; color:var(--text-dark); margin-top:6px; text-transform:uppercase; font-weight:700;">Naves de Trituración</p>
          </div>
          <div>
            <img src="assets/despacho-granel-silos.jpg" alt="Molienda 06" style="height:220px; width:100%; object-fit:cover;">
            <p style="font-size:11px; color:var(--text-dark); margin-top:6px; text-transform:uppercase; font-weight:700;">Despacho a Granel</p>
          </div>
          <div>
            <img src="assets/operacion-nocturna.jpg" alt="Molienda 07" style="height:220px; width:100%; object-fit:cover;">
            <p style="font-size:11px; color:var(--text-dark); margin-top:6px; text-transform:uppercase; font-weight:700;">Operación Nocturna</p>
          </div>
          <div>
            <img src="assets/perforadora-orugas.jpg" alt="Molienda 08" style="height:220px; width:100%; object-fit:cover;">
            <p style="font-size:11px; color:var(--text-dark); margin-top:6px; text-transform:uppercase; font-weight:700;">Sistemas de Perforación</p>
          </div>
          <div>
            <img src="assets/laboratorio-espectrofotometro.jpg" alt="Molienda 09" style="height:220px; width:100%; object-fit:cover;">
            <p style="font-size:11px; color:var(--text-dark); margin-top:6px; text-transform:uppercase; font-weight:700;">Controladores de Blancura</p>
          </div>
          <div>
            <img src="assets/galpones-stock-lotes.jpg" alt="Molienda 10" style="height:220px; width:100%; object-fit:cover;">
            <p style="font-size:11px; color:var(--text-dark); margin-top:6px; text-transform:uppercase; font-weight:700;">Stock en Galpones</p>
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
            <img src="assets/naves-trituracion.jpg" alt="Molienda" style="width:100%; height:180px; object-fit:cover; border:1px solid #333;">
            <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'><rect width='100%' height='100%' fill='%23222' stroke='%23333' stroke-width='2'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='48' font-weight='bold' fill='%23666'>?</text></svg>" alt="Reservas (Por reemplazar)" style="width:100%; height:180px; object-fit:cover; border:1px solid #333;">
            <img src="assets/rampa-transporte.jpeg" alt="Acceso" style="width:100%; height:180px; object-fit:cover; border:1px solid #333;">
            <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'><rect width='100%' height='100%' fill='%23222' stroke='%23333' stroke-width='2'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='48' font-weight='bold' fill='%23666'>?</text></svg>" alt="Sal (Por reemplazar)" style="width:100%; height:180px; object-fit:cover; border:1px solid #333;">
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
            <img src="assets/planta-molienda.jpg" alt="Molienda" style="width:100%; height:150px; object-fit:cover; margin-bottom:20px; border:1px solid #1a1a1a;">
            <div class="num">01</div>
            <h3>Molienda de Minerales</h3>
            <p>
              Procesamiento de cuarzo de alta pureza, feldespato potásico, albita sódica y pirofilita. Molienda seca controlada para obtener granulometrías precisas desde malla #8/20 hasta malla #400 Tyler.
            </p>
            <a href="?view=minerales" onclick="event.preventDefault(); window.navigate('?view=minerales')" class="arrow">Ver catálogo técnico →</a>
          </div>
          
          <div class="service-card" style="padding-top:20px;">
            <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'><rect width='100%' height='100%' fill='%23222' stroke='%23333' stroke-width='2'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='48' font-weight='bold' fill='%23666'>?</text></svg>" alt="Voladuras (Por reemplazar)" style="width:100%; height:150px; object-fit:cover; margin-bottom:20px; border:1px solid #1a1a1a;">
            <div class="num">02</div>
            <h3>Voladuras Controladas</h3>
            <p>
              Diseño y ejecución de voladuras a cielo abierto para explotación de yacimientos y obra civil. Ensanche de caminos de montaña, túneles y zanjas con mediciones sísmicas de seguridad.
            </p>
            <span class="arrow">Garantía de Seguridad Operativa</span>
          </div>
          
          <div class="service-card" style="padding-top:20px;">
            <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'><rect width='100%' height='100%' fill='%23222' stroke='%23333' stroke-width='2'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='48' font-weight='bold' fill='%23666'>?</text></svg>" alt="Exploración (Por reemplazar)" style="width:100%; height:150px; object-fit:cover; margin-bottom:20px; border:1px solid #1a1a1a;">
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
          <img src="assets/perforadora-sandvik.jpeg" alt="Sandvik DX680" style="width:100%; height:260px; object-fit:cover; border:1px solid #333;">
          <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'><rect width='100%' height='100%' fill='%23222' stroke='%23333' stroke-width='2'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='48' font-weight='bold' fill='%23666'>?</text></svg>" alt="Pala SDLG (Por reemplazar)" style="width:100%; height:260px; object-fit:cover; border:1px solid #333;">
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
                +54 9 2665 00-9836 (Oficina Molienda) · Lunes a Viernes de 8:00 a 17:00hs.
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
            <img src="assets/operacion-cargadora.jpg" alt="Frente de cantera Voladuras San Luis" style="width: 100%; height: 200px; object-fit:cover; border:1px solid #333;">
            <img src="assets/operacion-frente-cantera.jpeg" alt="Oficina Planta" style="width: 100%; height: 200px; object-fit:cover; border:1px solid #333;">
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
      <img src="${m.img}" alt="${m.name}" class="mineral-card-img">
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
          <img src="${m.img}" alt="${m.name}" class="mineral-detail-img">
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

/* ============================================================
   VIEW: MALLAS
   ============================================================ */
function renderMallas(container) {
  const buttons = MALLAS.map((m, i) => `
    <button
      class="malla-btn"
      id="malla-btn-${i}"
      onclick="selectMalla(${i})"
      aria-pressed="${i === 0 ? 'true' : 'false'}"
      aria-label="Malla ${m.num}, ${m.microns}">
      <span class="mb-num">${m.num}</span>
      <span class="mb-size">${m.microns}</span>
    </button>
  `).join('');

  const details = MALLAS.map((m, i) => `
    <div class="malla-info ${i === 0 ? 'active' : ''}" id="malla-info-${i}" role="tabpanel">
      <span class="mi-num">${m.num}</span>
      <span class="mi-size">${m.microns} — Apertura Nominal de Malla Tyler</span>
      <ul class="industries-list">
        ${m.industries.map(ind => `
          <li>
            <span>
              <span class="ind-name">${ind.name}</span>
              <span class="ind-desc">${ind.desc}</span>
            </span>
          </li>
        `).join('')}
      </ul>
      <p class="mineral-for">
        Minerales disponibles en esta granulometría:
        ${m.minerals.map(mn => `<span>${mn}</span>`).join('')}
      </p>
    </div>
  `).join('');

  container.innerHTML = `
    <div class="view-container">
      <div class="mallas-view" id="main-content-target">
        <div class="view-header">
          <span class="view-kicker">Distribución Granulométrica</span>
          <h1>Especificaciones por Malla</h1>
          <p>Seleccioná la malla Tyler de corte para visualizar sus aplicaciones B2B más comunes y los minerales disponibles.</p>
        </div>
        <div class="mallas-layout">
          <div class="mallas-sidebar" role="tablist" aria-label="Mallas industriales">
            <span class="sidebar-label">Tamizado Tyler</span>
            <div class="mallas-tabs-container">
              ${buttons}
            </div>
          </div>
          <div class="mallas-detail">
            ${details}
          </div>
        </div>

        <!-- ADDITIONAL PHOTOS FOR MALLAS -->
        <div style="margin-top: 60px; border-top: 1px solid var(--border); padding-top: 40px;">
          <span class="view-kicker">Procesamiento Industrial</span>
          <h3 style="font-size:24px; color:var(--text-white); margin-bottom:20px; font-weight:800; letter-spacing:-0.02em;">Control de Tamizado y Clasificación en Planta</h3>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
            <div>
              <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'><rect width='100%' height='100%' fill='%23222' stroke='%23333' stroke-width='2'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='48' font-weight='bold' fill='%23666'>?</text></svg>" alt="Silos de Clasificación (Por reemplazar)" style="width:100%; height:260px; object-fit:cover; border:1px solid var(--border-strong);">
              <p style="font-size:11px; color:var(--text-gray); margin-top:8px; text-transform:uppercase; font-weight:700; letter-spacing:0.05em;">Silos de Clasificación Neumática</p>
            </div>
            <div>
              <img src="assets/galpones-stock-lotes.jpg" alt="Stock en Galpones" style="width:100%; height:260px; object-fit:cover; border:1px solid var(--border-strong);">
              <p style="font-size:11px; color:var(--text-gray); margin-top:8px; text-transform:uppercase; font-weight:700; letter-spacing:0.05em;">Lotes Clasificados Listos para Despacho</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  setTimeout(() => selectMalla(0), 0);
}

function selectMalla(index) {
  const allBtns = document.querySelectorAll('.malla-btn');
  const allInfos = document.querySelectorAll('.malla-info');

  allBtns.forEach((btn, i) => {
    btn.classList.toggle('active', i === index);
    btn.setAttribute('aria-pressed', i === index ? 'true' : 'false');
  });

  allInfos.forEach((info, i) => {
    if (i === index) {
      info.classList.add('active');
    } else {
      info.classList.remove('active');
    }
  });
}

/* ============================================================
   VIEW: CALIDAD
   ============================================================ */
function renderCalidad(container) {
  const qualityCards = [
    { num: '100%', unit: 'Rastreabilidad de lote', title: 'Trazabilidad total batch-a-batch', desc: 'Cada bolsa y big-bag lleva código de lote rastreable hasta el informe analítico del laboratorio en planta.' },
    { num: 'FRX', unit: 'Rayos X Cuantitativos', title: 'Fluorescencia elemental', desc: 'Método primario para la cuantificación exacta de Fe₂O₃, Al₂O₃, K₂O, Na₂O, SiO₂ y óxidos acompañantes.' },
    { num: 'ISO', unit: 'Protocolos internacionales', title: 'Normas ISO 2470 / 787 / 9277', desc: 'Medición espectrofotométrica de blancura, distribución granulométrica y superficie específica certificada.' }
  ].map((c, i) => `
    <div class="quality-card">
      <span class="qc-num">${c.num}</span>
      <span class="qc-unit">${c.unit}</span>
      <h4>${c.title}</h4>
      <p>${c.desc}</p>
    </div>
  `).join('');

  const labParams = [
    { name: 'Blancura (ISO 2470)', value: '> 92° ISO', method: 'Espectrofotómetro de reflectancia d/8°' },
    { name: 'Fe₂O₃ (Cero Hierro)', value: '< 0.015%', method: 'FRX / Espectrometría de plasma (ICP)' },
    { name: 'Tamizado Tyler', value: '±2% retención máx.', method: 'Tamizado húmedo rotativo' },
    { name: 'Humedad de despacho', value: '< 0.5%', method: 'Termobalanza infrarroja a 105°C' }
  ].map((p, i) => `
    <div class="lab-param">
      <span class="lp-name">${p.name}</span>
      <span class="lp-value">${p.value}</span>
      <span class="lp-method">${p.method}</span>
    </div>
  `).join('');

  container.innerHTML = `
    <div class="view-container">
      <div class="calidad-view" id="main-content-target">
        <div class="calidad-hero">
          <div>
            <div class="view-header" style="border-left: none; padding-left: 0; margin-bottom: 0;">
              <span class="view-kicker">Laboratorio Analítico · Villa de Praga</span>
              <h1>Garantía<br><span>Cero Hierro</span></h1>
              <p style="margin-top: 16px;">
                Cada lote producido en nuestra planta de Villa de Praga, San Luis, pasa por un riguroso control analítico de blancura y cuantificación de hierro por fluorescencia de rayos X (FRX). El hierro es el enemigo de la blancura técnica. Aquí lo eliminamos mediante purificación magnética de alta intensidad.
              </p>
            </div>
          </div>
          <div class="cert-box">
            <span class="cb-label">Límite ferroso garantizado</span>
            <span class="cb-val">&lt; 0.015%</span>
            <p>Fe₂O₃ máximo en nuestro cuarzo grado sanitario y vidrio técnico.</p>
            <div class="cb-divider"></div>
            <span class="cb-label">blancura garantizada</span>
            <span class="cb-val">92° ISO</span>
            <p>Medición espectrofotométrica según norma internacional ISO 2470-1.</p>
          </div>
        </div>

        <!-- Comparative Chart: Impurity levels (Fe2O3) -->
        <div class="quality-comparison-chart">
          <span class="qcc-title">Nivel Comparativo de Impureza Crítica (Fe₂O₃)</span>
          <div class="qcc-bars">
            <div class="qcc-bar-group">
              <div class="qcc-label-row">
                <span>Tolerancia de la Industria (Gres Porcelánico y Vidrio Float)</span>
                <span class="qcc-val">0.100%</span>
              </div>
              <div class="qcc-bar-track">
                <div class="qcc-bar-fill bar-industry"></div>
              </div>
            </div>
            <div class="qcc-bar-group">
              <div class="qcc-label-row">
                <span>Especificación Voladuras San Luis (Grado Purificado)</span>
                <span class="qcc-val vsl-value">&lt; 0.015%</span>
              </div>
              <div class="qcc-bar-track">
                <div class="qcc-bar-fill bar-vsl vsl-fill"></div>
              </div>
            </div>
          </div>
          <span class="qcc-caption">* Valores expresados en porcentaje de óxido de hierro. Un menor valor de Fe₂O₃ evita coloraciones indeseadas durante la fusión cerámica o vítrea.</span>
        </div>

        <div class="quality-grid" role="list">
          ${qualityCards}
        </div>

        <div class="lab-section">
          <span class="ls-kicker">Parámetros Críticos de Control</span>
          <h3>Certificación de Despacho</h3>
          <p style="margin-bottom: 24px;">
            El proceso de análisis físico-químico se ejecuta en frentes de extracción, trituración primaria y almacenamiento final. El certificado emitido detalla las siguientes especificaciones:
          </p>
          <div class="lab-params">
            ${labParams}
          </div>
        </div>

        <!-- ADDITIONAL PHOTOS FOR CALIDAD -->
        <div style="margin-top: 60px; border-top: 1px solid var(--border); padding-top: 40px;">
          <span class="view-kicker">Control de Calidad B2B</span>
          <h3 style="font-size:24px; color:var(--text-white); margin-bottom:20px; font-weight:800; letter-spacing:-0.02em;">Instalaciones de Control y Ensayos de Blancura</h3>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
            <div>
              <img src="assets/laboratorio-espectrofotometro.jpg" alt="Controladores de Blancura" style="width:100%; height:260px; object-fit:cover; border:1px solid var(--border-strong);">
              <p style="font-size:11px; color:var(--text-gray); margin-top:8px; text-transform:uppercase; font-weight:700; letter-spacing:0.05em;">Medición Espectrofotométrica de Blancura y Alúmina</p>
            </div>
            <div>
              <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'><rect width='100%' height='100%' fill='%23222' stroke='%23333' stroke-width='2'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='48' font-weight='bold' fill='%23666'>?</text></svg>" alt="Laboratorio de Ensayos (Por reemplazar)" style="width:100%; height:260px; object-fit:cover; border:1px solid var(--border-strong);">
              <p style="font-size:11px; color:var(--text-gray); margin-top:8px; text-transform:uppercase; font-weight:700; letter-spacing:0.05em;">Ensayos de Trazabilidad y Análisis de Fe₂O₃</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Global exposure
window.selectMalla = selectMalla;
window.navigate = navigate;

/* ============================================================
   THEME SWITCHER & MOBILE DRAWER LOGIC
   ============================================================ */

function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
  } else {
    document.body.classList.remove('light-theme');
  }
}

function toggleTheme() {
  const isLight = document.body.classList.toggle('light-theme');
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
}

function openMobileMenu() {
  const drawer = document.getElementById('mobile-drawer');
  const overlay = document.getElementById('mobile-overlay');
  if (drawer && overlay) {
    drawer.classList.add('open');
    overlay.classList.add('open');
  }
}

function closeMobileMenu() {
  const drawer = document.getElementById('mobile-drawer');
  const overlay = document.getElementById('mobile-overlay');
  if (drawer && overlay) {
    drawer.classList.remove('open');
    overlay.classList.remove('open');
  }
}

function initThemeAndDrawerListeners() {
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }

  const menuToggle = document.getElementById('mobile-menu-toggle');
  if (menuToggle) {
    menuToggle.addEventListener('click', openMobileMenu);
  }

  const menuClose = document.getElementById('mobile-drawer-close');
  if (menuClose) {
    menuClose.addEventListener('click', closeMobileMenu);
  }

  const overlay = document.getElementById('mobile-overlay');
  if (overlay) {
    overlay.addEventListener('click', closeMobileMenu);
  }
}

// Make globally accessible
window.closeMobileMenu = closeMobileMenu;

// Run theme check immediately to avoid dark mode flash if user preferred light theme
initTheme();

/* ============================================================
   INITIALIZATION
   ============================================================ */
window.addEventListener('popstate', render);
document.addEventListener('DOMContentLoaded', () => {
  initThemeAndDrawerListeners();
  render();
});
