/**
 * NAROMOUNT — Commercial Website V1 Script
 * Vanilla JavaScript: Bilingual Controller (ES / EN), Mobile Navigation Drawer, Real Mailto Request Handler
 */

(function () {
  'use strict';

  // --- Translation Dictionary (Definitive Content Foundation) ---
  const i18nData = {
    en: {
      "meta.title": "NAROMOUNT — Installation, Retail Shopfitting & Exhibition Crew | Barcelona",
      "meta.description": "Professional crews for retail shopfitting, exhibition stand assembly, events and commercial logistics. Based in Barcelona, deploying across Spain and Europe.",

      "nav.services": "Services",
      "nav.sectors": "Sectors",
      "nav.why": "Why NAROMOUNT",
      "nav.contact": "Contact",
      "nav.request": "Request a Team",

      "hero.descriptor": "EVENTS · RETAIL · EXHIBITIONS · INSTALLATION",
      "hero.title": "Professional teams<br>for real projects.",
      "hero.subtitle": "NAROMOUNT provides professional installation, assembly and operational support teams for retail shopfitting, exhibition stands, corporate events and commercial spaces. Coordinated from Barcelona for project deployments across Spain and Europe.",
      "hero.ctaPrimary": "Request a Team",
      "hero.ctaSecondary": "Contact",
      "hero.base": "Base: Barcelona · Operational Deployment: Spain & Europe",
      "hero.mediaTag": "OPERATIONAL CREW",
      "hero.mediaSpec": "On-site Installation & Logistics Support",

      "services.label": "Architecture",
      "services.title": "Services",
      "services.s1.title": "INSTALLATION CREW",
      "services.s1.desc": "Retail shopfitting · commercial displays · architectural fixtures · technical assembly & dismantling",
      "services.s2.title": "EVENT CREW",
      "services.s2.desc": "Operational staff · exhibition stand support · venue installation · event production crew",
      "services.s3.title": "LOGISTICS CREW",
      "services.s3.desc": "Loading & unloading · material handling · site staging · installation logistics",
      "services.s4.title": "PROJECT CREW",
      "services.s4.desc": "Dedicated installation teams adapted to technical complexity, scheduling and venue requirements",
      "services.s5.title": "ROLLOUT CREW",
      "services.s5.desc": "Multi-location retail rollouts · brand implementations · synchronized installation schedules",

      "sectors.label": "Scope",
      "sectors.title": "Where We Work",
      "sectors.retail.title": "Retail",
      "sectors.retail.desc": "Flagship stores · retail rollouts · shopfitting & commercial fixtures",
      "sectors.exhibitions.title": "Exhibitions",
      "sectors.exhibitions.desc": "Trade fair stands · congress booths · assembly & dismantling at Fira Barcelona & European venues",
      "sectors.events.title": "Events",
      "sectors.events.desc": "Corporate conventions · brand pop-ups · event installation & operational crew",
      "sectors.events.note": "NAROMOUNT provides operational crew and installation specialists for event and exhibition projects.",
      "sectors.spaces.title": "Commercial Spaces",
      "sectors.spaces.desc": "Showrooms · corporate offices · commercial interior fit-outs & display installations",
      "sectors.badge": "European Project Coverage",

      "why.label": "Execution",
      "why.title": "Why NAROMOUNT",
      "why.card1.title": "Flexible Teams",
      "why.card1.desc": "Team size and composition adapts to each project's requirements.",
      "why.card2.title": "One Contact",
      "why.card2.desc": "One point of contact to coordinate work on-site.",
      "why.card3.title": "Execution Capacity",
      "why.card3.desc": "Proven capacity in assembly, dismantling and technical installation.",
      "why.card4.title": "Crew Reinforcement",
      "why.card4.desc": "Operational support when existing client teams require extra capacity.",
      "why.card5.title": "Advance Coordination",
      "why.card5.desc": "Direct project briefing and schedule coordination before deployment.",
      "why.card6.title": "Organized Execution",
      "why.card6.desc": "Organized execution on-site or at the retail space.",

      "why.scope.baseTitle": "Operational Base",
      "why.scope.baseText": "Barcelona · Spain",
      "why.scope.baseDesc": "Strategic coordination desk in Barcelona managing crew scheduling, project briefing and installation logistics.",
      "why.scope.reachTitle": "Geographic Scope",
      "why.scope.reachText": "Barcelona · Spain · Europe",
      "why.scope.reachDesc": "Project-based team deployment across Catalonia, Spain and major European exhibition and retail hubs. Coordinated directly from Barcelona with no permanent foreign overhead.",

      "final.title": "Need a team?",
      "final.subtitle": "Tell us what you need, where and when.",
      "final.cta": "Request a Team",

      "contact.label": "Direct Channels",
      "contact.title": "Direct Coordination",
      "contact.intro": "Direct communication for team bookings and operational planning. Contact our coordination desk directly by email or submit your project scope below.",
      
      "contact.cardBookingBadge": "Team Bookings",
      "contact.cardBookingDesc": "Direct contact for crew requests, staffing requirements and team scheduling.",
      "contact.cardBookingAction": "Request a Team → gero@naromount.com",

      "contact.cardGeneralBadge": "Operations Desk",
      "contact.cardGeneralDesc": "General inquiries, administration and operational coordination.",
      "contact.cardGeneralAction": "Contact Desk → hello@naromount.com",

      "contact.specBaseLabel": "Operational Base",
      "contact.specBaseVal": "Barcelona · Spain",
      "contact.specScopeLabel": "Deployment Scope",
      "contact.specScopeVal": "Barcelona · Spain · Europe (by project, logistics & budget)",
      "contact.notice": "Direct coordination desk for professional installation, event and logistics teams.",

      "form.title": "Project Request Form",
      "form.subtext": "Provide your project requirements. Submitting generates an email draft directly to gero@naromount.com.",
      "form.name": "Your Name / Company",
      "form.namePlaceholder": "e.g. Maria Gonzalez / Brand Corp",
      "form.email": "Email Address",
      "form.emailPlaceholder": "name@company.com",
      "form.phone": "Phone Number",
      "form.phonePlaceholder": "e.g. +34 ...",
      "form.service": "Required Crew / Service",
      "form.optSelect": "Select crew type...",
      "form.optS1": "INSTALLATION CREW — Assembly · dismantling · installation",
      "form.optS2": "EVENT CREW — Operational staff · production · support",
      "form.optS3": "LOGISTICS CREW — Loading · unloading · preparation · movement",
      "form.optS4": "PROJECT CREW — Teams adapted to each project",
      "form.optS5": "ROLLOUT CREW — Multi-location implementation",
      "form.optOther": "Other operational requirement (describe in scope below)",
      "form.location": "Location & Schedule (Where & When)",
      "form.locationPlaceholder": "e.g. Fira Barcelona, Oct 14–18",
      "form.message": "Project Scope & Notes",
      "form.messagePlaceholder": "Describe the scope, team size needed, venue, or specific requirements...",
      "form.submit": "Submit Request to gero@naromount.com",
      "form.feedbackTitle": "Opening Email Client...",
      "form.feedbackText": "Your email client is opening with a pre-filled draft to gero@naromount.com. If your email application didn't launch automatically, write directly to gero@naromount.com or hello@naromount.com.",

      "footer.descriptor": "EVENTS · RETAIL · EXHIBITIONS · INSTALLATION",
      "footer.base": "Base: Barcelona · Spain · Europe",
      "footer.colNav": "Navigation",
      "footer.colArch": "Architecture",
      "footer.colContact": "Direct Contact",
      "footer.rights": "All rights reserved. Professional installation, event & logistics teams.",
      "footer.statusScope": "Barcelona · Spain · Europe"
    },
    es: {
      "meta.title": "NAROMOUNT — Montaje de Stands, Retail e Instalación Comercial | Barcelona",
      "meta.description": "Equipos profesionales de montaje para retail, shopfitting, stands en ferias, eventos y logística comercial. Base en Barcelona con despliegue en España y Europa.",

      "nav.services": "Servicios",
      "nav.sectors": "Sectores",
      "nav.why": "Por qué NAROMOUNT",
      "nav.contact": "Contacto",
      "nav.request": "Pedir un Equipo",

      "hero.descriptor": "EVENTOS · RETAIL · FERIAS · INSTALACIÓN",
      "hero.title": "Equipos profesionales<br>para proyectos reales.",
      "hero.subtitle": "NAROMOUNT proporciona equipos profesionales de montaje, instalación técnica y apoyo operativo para retail y shopfitting, ferias y stands, eventos corporativos y espacios comerciales. Coordinación desde Barcelona para proyectos en España y Europa.",
      "hero.ctaPrimary": "Pedir un Equipo",
      "hero.ctaSecondary": "Contactar",
      "hero.base": "Base operativa: Barcelona · Despliegue en proyectos: España y Europa",
      "hero.mediaTag": "EQUIPOS OPERATIVOS",
      "hero.mediaSpec": "Montaje técnico en obra y apoyo logístico",

      "services.label": "Arquitectura",
      "services.title": "Servicios",
      "services.s1.title": "INSTALLATION CREW",
      "services.s1.desc": "Montaje de retail y shopfitting · mobiliario comercial · estructuras y desmontaje técnico",
      "services.s2.title": "EVENT CREW",
      "services.s2.desc": "Personal operativo para eventos · apoyo en montaje de stands · producción y soporte en recintos",
      "services.s3.title": "LOGISTICS CREW",
      "services.s3.desc": "Carga y descarga · manipulación de material · preparación en obra y logística de montaje",
      "services.s4.title": "PROJECT CREW",
      "services.s4.desc": "Equipos dedicados de instaladores adaptados al alcance técnico, plazos y requerimientos de cada proyecto",
      "services.s5.title": "ROLLOUT CREW",
      "services.s5.desc": "Implantaciones multi-tienda · rollouts de retail · despliegue coordinado en múltiples ubicaciones",

      "sectors.label": "Ámbitos",
      "sectors.title": "Dónde Trabajamos",
      "sectors.retail.title": "Retail",
      "sectors.retail.desc": "Tiendas insignia · rollouts de retail · mobiliario comercial y shopfitting",
      "sectors.exhibitions.title": "Ferias y Stands",
      "sectors.exhibitions.desc": "Montaje de stands para ferias · congresos · montaje y desmontaje en Fira Barcelona y recintos europeos",
      "sectors.events.title": "Eventos",
      "sectors.events.desc": "Convenciones corporativas · pop-ups de marca · apoyo operativo y producción de eventos",
      "sectors.events.note": "NAROMOUNT proporciona personal operativo y equipos especializados de montaje para eventos y ferias.",
      "sectors.spaces.title": "Espacios Comerciales",
      "sectors.spaces.desc": "Showrooms · sedes corporativas · equipamiento comercial y reformas de interiores",
      "sectors.badge": "Cobertura en Proyectos Europeos",

      "why.label": "Ejecución",
      "why.title": "Por qué NAROMOUNT",
      "why.card1.title": "Equipos Adaptados",
      "why.card1.desc": "La dimensión del equipo se adapta a las necesidades del proyecto.",
      "why.card2.title": "Un Solo Contacto",
      "why.card2.desc": "Un interlocutor único para coordinar el trabajo en obra.",
      "why.card3.title": "Capacidad de Ejecución",
      "why.card3.desc": "Capacidad de montaje, desmontaje e instalación técnica.",
      "why.card4.title": "Refuerzo Operativo",
      "why.card4.desc": "Refuerzo de equipos existentes y apoyo operativo cuando falta capacidad.",
      "why.card5.title": "Coordinación Previa",
      "why.card5.desc": "Coordinación previa del proyecto antes del despliegue.",
      "why.card6.title": "Ejecución Organizada",
      "why.card6.desc": "Ejecución organizada en recinto o punto de venta.",

      "why.scope.baseTitle": "Base Operativa",
      "why.scope.baseText": "Barcelona · España",
      "why.scope.baseDesc": "Mesa de coordinación en Barcelona para programación de equipos de montaje, logística y despliegue.",
      "why.scope.reachTitle": "Alcance Geográfico",
      "why.scope.reachText": "Barcelona · España · Europa",
      "why.scope.reachDesc": "Despliegue operativo de equipos en Cataluña, toda España y principales recintos feriales y centros comerciales de Europa. Coordinación directa desde Barcelona sin costes fijos en destino.",

      "final.title": "¿Necesitas un equipo?",
      "final.subtitle": "Cuéntanos qué necesitas, dónde y cuándo.",
      "final.cta": "Pedir un Equipo",

      "contact.label": "Canales Directos",
      "contact.title": "Coordinación Directa",
      "contact.intro": "Comunicación directa para asignación de equipos y planificación operativa. Contacta directamente por email o envía el alcance de tu proyecto a continuación.",

      "contact.cardBookingBadge": "Solicitud de Equipos",
      "contact.cardBookingDesc": "Contacto directo para petición de equipos, dimensionamiento y programación.",
      "contact.cardBookingAction": "Pedir un Equipo → gero@naromount.com",

      "contact.cardGeneralBadge": "Mesa de Operaciones",
      "contact.cardGeneralDesc": "Consultas generales, administración y coordinación operativa.",
      "contact.cardGeneralAction": "Contactar Mesa → hello@naromount.com",

      "contact.specBaseLabel": "Base Operativa",
      "contact.specBaseVal": "Barcelona · España",
      "contact.specScopeLabel": "Alcance de Desplazamiento",
      "contact.specScopeVal": "Barcelona · España · Europa (según proyecto, logística y presupuesto)",
      "contact.notice": "Mesa de coordinación directa para equipos profesionales de montaje, eventos y logística.",

      "form.title": "Formulario de Solicitud de Equipo",
      "form.subtext": "Indícanos los requerimientos de tu proyecto. Al enviar se abrirá tu cliente de correo dirigido a gero@naromount.com.",
      "form.name": "Nombre / Empresa",
      "form.namePlaceholder": "ej. María González / Empresa o Marca",
      "form.email": "Correo Electrónico",
      "form.emailPlaceholder": "nombre@empresa.com",
      "form.phone": "Teléfono de Contacto",
      "form.phonePlaceholder": "ej. +34 ...",
      "form.service": "Equipo Requerido / Servicio",
      "form.optSelect": "Seleccionar tipo de equipo...",
      "form.optS1": "INSTALLATION CREW — Montaje · desmontaje · instalación técnica",
      "form.optS2": "EVENT CREW — Personal operativo · producción · apoyo",
      "form.optS3": "LOGISTICS CREW — Carga · descarga · preparación · movimiento",
      "form.optS4": "PROJECT CREW — Equipos adaptados a cada proyecto",
      "form.optS5": "ROLLOUT CREW — Implantación en múltiples localizaciones",
      "form.optOther": "Otra necesidad operativa (describir abajo en el alcance)",
      "form.location": "Lugar y Fechas (Dónde y Cuándo)",
      "form.locationPlaceholder": "ej. Fira Barcelona, 14–18 Octubre",
      "form.message": "Detalles del Proyecto y Alcance",
      "form.messagePlaceholder": "Indica alcance, número de montadores, recinto o requerimientos específicos...",
      "form.submit": "Enviar Solicitud a gero@naromount.com",
      "form.feedbackTitle": "Abriendo cliente de correo...",
      "form.feedbackText": "Se está abriendo tu gestor de correo con el mensaje preparado para gero@naromount.com. Si no se abre automáticamente, puedes escribir directamente a gero@naromount.com o hello@naromount.com.",

      "footer.descriptor": "EVENTOS · RETAIL · FERIAS · INSTALACIÓN",
      "footer.base": "Base: Barcelona · España · Europa",
      "footer.colNav": "Navegación",
      "footer.colArch": "Arquitectura",
      "footer.colContact": "Contacto Directo",
      "footer.rights": "Todos los derechos reservados. Equipos profesionales de montaje, eventos y logística.",
      "footer.statusScope": "Barcelona · España · Europa"
    }
  };

  let currentLang = 'en';

  function applyLanguage(lang) {
    if (!i18nData[lang]) return;
    currentLang = lang;
    document.documentElement.lang = lang;

    // Update active language switcher buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
      const btnLang = btn.getAttribute('data-lang');
      if (btnLang === lang) {
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
      } else {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
      }
    });

    // Update text content with data-i18n
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (i18nData[lang][key] !== undefined) {
        el.innerHTML = i18nData[lang][key];
      }
    });

    // Update input placeholders
    const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
    placeholderElements.forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (i18nData[lang][key] !== undefined) {
        el.placeholder = i18nData[lang][key];
      }
    });

    // Update document title, meta description & social metadata
    if (i18nData[lang]["meta.title"]) {
      document.title = i18nData[lang]["meta.title"];
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute('content', i18nData[lang]["meta.title"]);
      const twitterTitle = document.querySelector('meta[name="twitter:title"]');
      if (twitterTitle) twitterTitle.setAttribute('content', i18nData[lang]["meta.title"]);
    }
    if (i18nData[lang]["meta.description"]) {
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', i18nData[lang]["meta.description"]);
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute('content', i18nData[lang]["meta.description"]);
      const twitterDesc = document.querySelector('meta[name="twitter:description"]');
      if (twitterDesc) twitterDesc.setAttribute('content', i18nData[lang]["meta.description"]);
    }

    // Update feedback message if currently displayed
    const feedback = document.getElementById('formFeedback');
    if (feedback && feedback.classList.contains('is-visible')) {
      feedback.querySelector('.feedback-text-p').textContent = i18nData[lang]["form.feedbackText"];
      feedback.querySelector('.feedback-title-strong').textContent = i18nData[lang]["form.feedbackTitle"];
    }
  }

  // --- Mobile Drawer Controller ---
  function initMobileMenu() {
    const toggle = document.querySelector('.mobile-menu-toggle');
    const drawer = document.querySelector('.mobile-nav-drawer');
    if (!toggle || !drawer) return;

    toggle.addEventListener('click', function () {
      const isOpen = drawer.classList.contains('is-open');
      if (isOpen) {
        drawer.classList.remove('is-open');
        toggle.classList.remove('is-active');
        toggle.setAttribute('aria-expanded', 'false');
      } else {
        drawer.classList.add('is-open');
        toggle.classList.add('is-active');
        toggle.setAttribute('aria-expanded', 'true');
      }
    });

    drawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function () {
        drawer.classList.remove('is-open');
        toggle.classList.remove('is-active');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // --- Real Mailto Request Form Controller ---
  function initRequestForm() {
    const form = document.getElementById('teamRequestForm');
    const feedback = document.getElementById('formFeedback');
    if (!form || !feedback) return;

    // Clear feedback when user edits fields
    form.querySelectorAll('input, select, textarea').forEach(field => {
      field.addEventListener('input', function () {
        if (feedback.classList.contains('is-visible')) {
          feedback.classList.remove('is-visible');
        }
      });
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Check standard validity
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      // Collect data
      const name = (document.getElementById('req-name')?.value || '').trim();
      const email = (document.getElementById('req-email')?.value || '').trim();
      const phone = (document.getElementById('req-phone')?.value || '').trim();
      const service = (document.getElementById('req-service')?.value || '').trim();
      const location = (document.getElementById('req-location')?.value || '').trim();
      const message = (document.getElementById('req-message')?.value || '').trim();

      // Construct mailto parameters
      const subject = encodeURIComponent(`NAROMOUNT Team Request: ${service} — ${name}`);
      const bodyLines = [
        `NAROMOUNT — PROJECT REQUEST`,
        `========================================`,
        `CLIENT / COMPANY: ${name}`,
        `EMAIL: ${email}`,
        `PHONE: ${phone || 'Not specified'}`,
        `SERVICE REQUIRED: ${service}`,
        `LOCATION & SCHEDULE: ${location}`,
        `========================================`,
        `PROJECT SCOPE & NOTES:`,
        message || 'No additional scope notes provided.'
      ];
      const body = encodeURIComponent(bodyLines.join('\n'));
      const mailtoUrl = `mailto:gero@naromount.com?subject=${subject}&body=${body}`;

      // Open email client
      window.location.href = mailtoUrl;

      // Render visible confirmation & fallback card
      feedback.classList.add('is-visible');
      const isEs = currentLang === 'es';
      feedback.innerHTML = `
        <strong class="feedback-title-strong" style="display:block; font-size: 1.05rem; margin-bottom: 0.35rem;">${i18nData[currentLang]["form.feedbackTitle"]}</strong>
        <p class="feedback-text-p" style="margin: 0.35rem 0 1.25rem; font-size: 0.9rem; line-height: 1.5; color: var(--color-grey-200);">${i18nData[currentLang]["form.feedbackText"]}</p>
        <div style="display: flex; flex-wrap: wrap; gap: 0.75rem;">
          <a href="${mailtoUrl}" class="btn btn-accent btn-sm" style="color: #fff;">${isEs ? 'Reabrir correo con los datos' : 'Re-open pre-filled email'}</a>
          <a href="mailto:hello@naromount.com" class="btn btn-secondary-light btn-sm">${isEs ? 'Escribir a hello@naromount.com' : 'Write to hello@naromount.com'}</a>
        </div>
      `;

      // Scroll smoothly to feedback alert
      feedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  }

  // --- Language Selector Listener ---
  function initLanguageSelector() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', function () {
        const lang = this.getAttribute('data-lang');
        applyLanguage(lang);
      });
    });
  }

  // --- Initialize on DOM ready ---
  document.addEventListener('DOMContentLoaded', function () {
    initLanguageSelector();
    initMobileMenu();
    initRequestForm();
    applyLanguage('en');
  });

})();
