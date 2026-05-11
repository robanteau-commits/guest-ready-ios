(function () {
  var LANGS = {
    en: {
      // --- Sidebar / Nav ---
      nav_dashboard: 'Dashboard',
      nav_messages: 'Messages',
      nav_calendar: 'Calendar',
      nav_properties: 'Properties',
      nav_cleaners: 'Cleaners',
      nav_myteam: 'My Team',
      nav_askalf: 'Ask Alf',
      nav_tagline: 'Cleaners and Hosts, In Sync',
      nav_support: 'Support/Feedback',
      nav_lang_toggle: '🌐 Español',

      // --- Support modal ---
      support_title: 'Support & Feedback',
      support_body: 'Please email <a href="mailto:support@guestreadypro.com">support@guestreadypro.com</a> for support assistance or to share feedback.',
      support_close: 'Close',
      support_email: 'Email Support',

      // --- Mobile nav ---
      mnav_dashboard: 'Dashboard',
      mnav_messages: 'Messages',
      mnav_calendar: 'Calendar',
      mnav_properties: 'Props',
      mnav_cleaners: 'Cleaners',
      mnav_myteam: 'My Team',
      mnav_profile: 'Profile',

      // --- Login ---
      login_tagline: 'Cleaners and Hosts, In Sync',
      login_email_label: 'Email Address',
      login_email_ph: 'Email address',
      login_password_label: 'Password',
      login_password_ph: 'Password',
      login_btn: 'Log In',
      login_back: 'Back to Home',
      login_invalid: 'Invalid email or password.',
      login_fill_all: 'Please fill in all fields.',
      login_logging_in: 'Logging in…',
      login_server_fail: 'Server connection failed. Please try again.',

      // --- Index / Landing ---
      index_nav_login: 'Log In',
      index_nav_start: 'Get Started',
      index_hero_title: 'Property Management Made Simple',
      index_hero_sub: 'Connect hosts and cleaners. Automate scheduling. Deliver spotless stays — every time.',
      index_hero_cta: 'Get Started Free',
      index_hero_demo: 'See How It Works',
      index_how_title: 'How It Works',
      index_step1_title: 'List Your Properties',
      index_step1_body: 'Add your properties and set cleaner instructions, door codes, and payout details — all in one place.',
      index_step2_title: 'Auto-Sync With Airbnb',
      index_step2_body: 'Your Airbnb calendar syncs automatically. Cleaners see exactly when to clean and where to go.',
      index_step3_title: 'Track Every Clean',
      index_step3_body: 'Real-time job updates and messaging keep everyone in sync — no calls, no confusion.',
      index_feat_title: 'Everything You Need to Run a Tight Operation',
      index_feat1_title: 'Smart Scheduling',
      index_feat1_body: 'Auto-assign cleaners to jobs based on your calendar.',
      index_feat2_title: 'Instant Messaging',
      index_feat2_body: 'Direct chat between hosts and cleaners — no more phone tag.',
      index_feat3_title: 'Property Management',
      index_feat3_body: 'Manage property details, access codes, and cleaner instructions.',
      index_feat4_title: 'AI Assistant',
      index_feat4_body: 'Ask Alf answers questions about your properties and schedule.',
      index_feat5_title: 'Team Management',
      index_feat5_body: 'Invite and manage your cleaning team from one dashboard.',
      index_feat6_title: 'Mobile Ready',
      index_feat6_body: 'Full-featured iOS app for hosts and cleaners on the go.',
      index_host_title: 'For Hosts',
      index_host_body: 'Manage all your properties, cleaners, and jobs from a single dashboard.',
      index_cleaner_title: 'For Cleaners',
      index_cleaner_body: 'See your jobs, get directions, and message hosts — all from your phone.',
      index_stats_properties: 'Properties Managed',
      index_stats_cleans: 'Cleans Completed',
      index_stats_satisfaction: 'Host Satisfaction',
      index_cta_title: 'Ready to Simplify Your Operation?',
      index_cta_body: 'Join hosts and cleaners who use Guest Ready Pro to stay in sync.',
      index_cta_btn: 'Start for Free',
      index_footer_rights: 'All rights reserved.',
      index_footer_terms: 'Terms',
      index_footer_privacy: 'Privacy',

      // --- Dashboard / Registration wizard ---
      dash_step1_title: 'Welcome! What\'s your name?',
      dash_step1_first: 'First Name',
      dash_step1_last: 'Last Name',
      dash_step2_title: 'How did you hear about us?',
      dash_step3_title: 'What\'s your phone number?',
      dash_step3_ph: 'Phone number',
      dash_step4_title: 'What is your role?',
      dash_step4_host: 'I\'m a Host',
      dash_step4_host_sub: 'I manage short-term rental properties',
      dash_step4_cleaner: 'I\'m a Cleaner',
      dash_step4_cleaner_sub: 'I clean short-term rental properties',
      dash_step5_title: 'Do you work solo or lead a team?',
      dash_step5_solo: 'Solo Cleaner',
      dash_step5_solo_sub: 'I work independently',
      dash_step5_company: 'Company / Team Lead',
      dash_step5_company_sub: 'I manage a crew of cleaners',
      dash_step6_title: 'A few more details',
      dash_step6_city: 'City',
      dash_step6_state: 'State',
      dash_step7_title: 'Add a profile photo',
      dash_step7_sub: 'Optional — you can add one later',
      dash_back: 'Back',
      dash_next: 'Next',
      dash_finish: 'Finish Setup',
      dash_skip: 'Skip for now',

      // --- Dashboard card headers ---
      dash_upcoming: 'Upcoming Jobs',
      dash_recent: 'Recent Activity',
      dash_properties: 'My Properties',
      dash_team: 'My Team',
      dash_jobs_assigned: 'Assigned Jobs',
      dash_jobs_open: 'Open Jobs',
      dash_no_upcoming: 'No upcoming jobs.',
      dash_no_recent: 'No recent activity.',
      dash_loading: 'Loading…',

      // --- Job detail modal ---
      job_modal_title: 'Job Details',
      job_accept: 'Accept',
      job_decline: 'Decline',
      job_complete: 'Mark Complete',
      job_message: 'Message Host',
      job_start_nav: 'Start Navigation',
      job_close: 'Close',

      // --- Properties ---
      prop_title: 'My Properties',
      prop_add: '+ Add Property',
      prop_edit_title: 'Edit Property',
      prop_tab1: '1. Basics',
      prop_tab2: '2. Specs',
      prop_tab3: '3. Access',
      prop_tab4: '4. Tasks',
      prop_tab5: '5. Photos & Pay',
      prop_tab6: '6. Calendar',
      prop_name: 'Property Name',
      prop_address: 'Street Address',
      prop_city: 'City',
      prop_state: 'State',
      prop_zip: 'Zip',
      prop_bedrooms: 'Bedrooms',
      prop_bathrooms: 'Bathrooms',
      prop_sqft: 'Square Footage',
      prop_checkin: 'Check-In Time',
      prop_checkout: 'Check-Out Time',
      prop_door_code: 'Door Code',
      prop_closet_code: 'Closet/Utility Code',
      prop_access_notes: 'Access Notes',
      prop_cleaner_pay: 'Cleaner Pay',
      prop_photos: 'Staging Photos',
      prop_delete: 'Delete Property',
      prop_cancel: 'Cancel',
      prop_back: 'Back',
      prop_next: 'Next',
      prop_save: 'Save Property',
      prop_no_properties: 'No properties yet. Add one to get started.',

      // --- Calendar ---
      cal_title: 'Calendar',
      cal_add_job: '+ Add Job',
      cal_select_date: 'Select a date',
      cal_tap_hint: 'Tap a highlighted day to see details.',
      cal_modal_title: 'Add Manual Job',
      cal_property: 'Property',
      cal_guest_name: 'Guest Name',
      cal_checkin_date: 'Check-In Date',
      cal_clean_date: 'Check-Out (Clean Date)',
      cal_cancel: 'Cancel',
      cal_create: 'Create Job',
      cal_no_jobs: 'No jobs for this date.',
      cal_loading: 'Loading…',

      // --- Messages ---
      msg_title: 'Messages',
      msg_filter_all: 'All',
      msg_filter_unread: 'Unread',
      msg_type_ph: 'Type a message…',
      msg_send: 'Send',
      msg_no_messages: 'No messages yet.',
      msg_select_convo: 'Select a conversation',
      msg_start: 'Start the conversation',
      msg_you: 'You: ',
      msg_no_conv: 'No conversations yet.',
      msg_loading: 'Loading…',

      // --- Cleaners ---
      cln_title: 'Cleaners',
      cln_no_team: 'No cleaners on your team yet.',
      cln_no_bio: 'No bio provided.',
      cln_cleans: 'cleans',
      cln_cancels: 'cancels',
      cln_likes: 'likes',
      cln_message: '💬 Message',
      cln_remove: '❌ Remove from Team',
      cln_add: '⭐ Add to Team',
      cln_loading: 'Loading…',

      // --- Dispatch ---
      dispatch_title: 'Dispatch',
      dispatch_jobs_title: 'Jobs to assign',
      dispatch_team_title: 'Your team',
      dispatch_invite_title: 'Invite a team member',
      dispatch_first_name: 'First Name',
      dispatch_last_name: 'Last Name',
      dispatch_phone: 'Phone Number',
      dispatch_send_invite: 'Send Invite',
      dispatch_cancel: 'Cancel',
      dispatch_no_jobs: 'No unassigned jobs.',
      dispatch_no_team: 'No team members yet.',
      dispatch_loading: 'Loading…',
      dispatch_invite_btn: '+ Invite Member',

      // --- AI / Ask Alf ---
      ai_title: 'Ask Alf',
      ai_input_ph: 'Ask anything…',
      ai_send: 'Send',
      ai_greeting: 'Hi there',
      ai_greeting_name: 'Hi, {name}',
      ai_thinking: 'Thinking…',
      ai_error: 'Something went wrong. Please try again.',
      ai_quick1: 'What jobs are due today?',
      ai_quick2: 'Show my properties',
      ai_quick3: 'Any unread messages?',
      ai_quick4: 'Help me write a check-in message',

      // --- Accept Invite ---
      inv_verifying: 'Verifying your invite…',
      inv_not_found: 'Link not found',
      inv_error_body: 'This invite link is invalid or has already been used. Please contact your team lead for a new invite.',
      inv_welcome: 'Welcome to the team!',
      inv_password_label: 'Create a Password',
      inv_password_ph: 'Create a password',
      inv_confirm_label: 'Confirm Password',
      inv_confirm_ph: 'Confirm password',
      inv_create_account: 'Create Account',
      inv_success_title: 'You\'re all set!',
      inv_success_body: 'Your account is ready. You can now log in to Guest Ready Pro.',
      inv_go_login: 'Go to Login',
      inv_creating: 'Creating account…',
      inv_fill_all: 'Please fill in all fields.',
      inv_pass_mismatch: 'Passwords do not match.',
      inv_pass_short: 'Password must be at least 6 characters.',
      inv_error_create: 'Failed to create account. Please try again.',
    },

    es: {
      // --- Sidebar / Nav ---
      nav_dashboard: 'Panel',
      nav_messages: 'Mensajes',
      nav_calendar: 'Calendario',
      nav_properties: 'Propiedades',
      nav_cleaners: 'Limpiadores',
      nav_myteam: 'Mi Equipo',
      nav_askalf: 'Preguntar a Alf',
      nav_tagline: 'Limpiadores y Anfitriones, Sincronizados',
      nav_support: 'Soporte/Comentarios',
      nav_lang_toggle: '🌐 English',

      // --- Support modal ---
      support_title: 'Soporte y Comentarios',
      support_body: 'Envíe un correo a <a href="mailto:support@guestreadypro.com">support@guestreadypro.com</a> para recibir asistencia o compartir comentarios.',
      support_close: 'Cerrar',
      support_email: 'Enviar correo a Soporte',

      // --- Mobile nav ---
      mnav_dashboard: 'Panel',
      mnav_messages: 'Mensajes',
      mnav_calendar: 'Calendario',
      mnav_properties: 'Props',
      mnav_cleaners: 'Limpiadores',
      mnav_myteam: 'Mi Equipo',
      mnav_profile: 'Perfil',

      // --- Login ---
      login_tagline: 'Limpiadores y Anfitriones, Sincronizados',
      login_email_label: 'Correo electrónico',
      login_email_ph: 'Correo electrónico',
      login_password_label: 'Contraseña',
      login_password_ph: 'Contraseña',
      login_btn: 'Iniciar sesión',
      login_back: 'Volver al inicio',
      login_invalid: 'Correo o contraseña incorrectos.',
      login_fill_all: 'Por favor completa todos los campos.',
      login_logging_in: 'Iniciando sesión…',
      login_server_fail: 'Error de conexión con el servidor. Inténtalo de nuevo.',

      // --- Index / Landing ---
      index_nav_login: 'Iniciar sesión',
      index_nav_start: 'Comenzar',
      index_hero_title: 'Gestión de Propiedades Simplificada',
      index_hero_sub: 'Conecta anfitriones y limpiadores. Automatiza la programación. Entregas impecables — siempre.',
      index_hero_cta: 'Comenzar Gratis',
      index_hero_demo: 'Ver cómo funciona',
      index_how_title: 'Cómo Funciona',
      index_step1_title: 'Agrega tus Propiedades',
      index_step1_body: 'Ingresa tus propiedades con instrucciones, códigos y detalles de pago — todo en un solo lugar.',
      index_step2_title: 'Sincronización con Airbnb',
      index_step2_body: 'Tu calendario de Airbnb se sincroniza automáticamente. Los limpiadores ven cuándo y dónde limpiar.',
      index_step3_title: 'Seguimiento de Cada Limpieza',
      index_step3_body: 'Actualizaciones en tiempo real y mensajería mantienen a todos sincronizados — sin llamadas ni confusión.',
      index_feat_title: 'Todo lo que Necesitas para Operar con Precisión',
      index_feat1_title: 'Programación Inteligente',
      index_feat1_body: 'Asigna limpiadores automáticamente según tu calendario.',
      index_feat2_title: 'Mensajería Instantánea',
      index_feat2_body: 'Chat directo entre anfitriones y limpiadores — sin perseguirse.',
      index_feat3_title: 'Gestión de Propiedades',
      index_feat3_body: 'Administra detalles, códigos de acceso e instrucciones de limpieza.',
      index_feat4_title: 'Asistente con IA',
      index_feat4_body: 'Alf responde preguntas sobre tus propiedades y calendario.',
      index_feat5_title: 'Gestión de Equipo',
      index_feat5_body: 'Invita y gestiona tu equipo de limpieza desde un solo panel.',
      index_feat6_title: 'Listo para Móvil',
      index_feat6_body: 'App iOS completa para anfitriones y limpiadores en movimiento.',
      index_host_title: 'Para Anfitriones',
      index_host_body: 'Gestiona todas tus propiedades, limpiadores y trabajos desde un solo panel.',
      index_cleaner_title: 'Para Limpiadores',
      index_cleaner_body: 'Ve tus trabajos, obtén indicaciones y envía mensajes a anfitriones — todo desde tu teléfono.',
      index_stats_properties: 'Propiedades Gestionadas',
      index_stats_cleans: 'Limpiezas Completadas',
      index_stats_satisfaction: 'Satisfacción de Anfitriones',
      index_cta_title: '¿Listo para Simplificar tu Operación?',
      index_cta_body: 'Únete a anfitriones y limpiadores que usan Guest Ready Pro para mantenerse sincronizados.',
      index_cta_btn: 'Comenzar Gratis',
      index_footer_rights: 'Todos los derechos reservados.',
      index_footer_terms: 'Términos',
      index_footer_privacy: 'Privacidad',

      // --- Dashboard / Registration wizard ---
      dash_step1_title: '¡Bienvenido! ¿Cuál es tu nombre?',
      dash_step1_first: 'Nombre',
      dash_step1_last: 'Apellido',
      dash_step2_title: '¿Cómo te enteraste de nosotros?',
      dash_step3_title: '¿Cuál es tu número de teléfono?',
      dash_step3_ph: 'Número de teléfono',
      dash_step4_title: '¿Cuál es tu rol?',
      dash_step4_host: 'Soy Anfitrión',
      dash_step4_host_sub: 'Gestiono propiedades de alquiler a corto plazo',
      dash_step4_cleaner: 'Soy Limpiador',
      dash_step4_cleaner_sub: 'Limpio propiedades de alquiler a corto plazo',
      dash_step5_title: '¿Trabajas solo o lideras un equipo?',
      dash_step5_solo: 'Limpiador Independiente',
      dash_step5_solo_sub: 'Trabajo de forma independiente',
      dash_step5_company: 'Empresa / Líder de Equipo',
      dash_step5_company_sub: 'Gestiono un equipo de limpiadores',
      dash_step6_title: 'Algunos detalles más',
      dash_step6_city: 'Ciudad',
      dash_step6_state: 'Estado',
      dash_step7_title: 'Agrega una foto de perfil',
      dash_step7_sub: 'Opcional — puedes agregarla después',
      dash_back: 'Atrás',
      dash_next: 'Siguiente',
      dash_finish: 'Finalizar Configuración',
      dash_skip: 'Omitir por ahora',

      // --- Dashboard card headers ---
      dash_upcoming: 'Próximos Trabajos',
      dash_recent: 'Actividad Reciente',
      dash_properties: 'Mis Propiedades',
      dash_team: 'Mi Equipo',
      dash_jobs_assigned: 'Trabajos Asignados',
      dash_jobs_open: 'Trabajos Disponibles',
      dash_no_upcoming: 'Sin próximos trabajos.',
      dash_no_recent: 'Sin actividad reciente.',
      dash_loading: 'Cargando…',

      // --- Job detail modal ---
      job_modal_title: 'Detalles del Trabajo',
      job_accept: 'Aceptar',
      job_decline: 'Rechazar',
      job_complete: 'Marcar como Completo',
      job_message: 'Mensaje al Anfitrión',
      job_start_nav: 'Iniciar Navegación',
      job_close: 'Cerrar',

      // --- Properties ---
      prop_title: 'Mis Propiedades',
      prop_add: '+ Agregar Propiedad',
      prop_edit_title: 'Editar Propiedad',
      prop_tab1: '1. Básicos',
      prop_tab2: '2. Especificaciones',
      prop_tab3: '3. Acceso',
      prop_tab4: '4. Tareas',
      prop_tab5: '5. Fotos y Pago',
      prop_tab6: '6. Calendario',
      prop_name: 'Nombre de la Propiedad',
      prop_address: 'Dirección',
      prop_city: 'Ciudad',
      prop_state: 'Estado',
      prop_zip: 'Código Postal',
      prop_bedrooms: 'Habitaciones',
      prop_bathrooms: 'Baños',
      prop_sqft: 'Metros Cuadrados',
      prop_checkin: 'Hora de Check-In',
      prop_checkout: 'Hora de Check-Out',
      prop_door_code: 'Código de Puerta',
      prop_closet_code: 'Código de Clóset/Utilidad',
      prop_access_notes: 'Notas de Acceso',
      prop_cleaner_pay: 'Pago al Limpiador',
      prop_photos: 'Fotos de Preparación',
      prop_delete: 'Eliminar Propiedad',
      prop_cancel: 'Cancelar',
      prop_back: 'Atrás',
      prop_next: 'Siguiente',
      prop_save: 'Guardar Propiedad',
      prop_no_properties: 'Sin propiedades. Agrega una para comenzar.',

      // --- Calendar ---
      cal_title: 'Calendario',
      cal_add_job: '+ Agregar Trabajo',
      cal_select_date: 'Selecciona una fecha',
      cal_tap_hint: 'Toca un día marcado para ver los detalles.',
      cal_modal_title: 'Agregar Trabajo Manual',
      cal_property: 'Propiedad',
      cal_guest_name: 'Nombre del Huésped',
      cal_checkin_date: 'Fecha de Check-In',
      cal_clean_date: 'Check-Out (Fecha de Limpieza)',
      cal_cancel: 'Cancelar',
      cal_create: 'Crear Trabajo',
      cal_no_jobs: 'Sin trabajos para esta fecha.',
      cal_loading: 'Cargando…',

      // --- Messages ---
      msg_title: 'Mensajes',
      msg_filter_all: 'Todos',
      msg_filter_unread: 'No leídos',
      msg_type_ph: 'Escribe un mensaje…',
      msg_send: 'Enviar',
      msg_no_messages: 'Sin mensajes aún.',
      msg_select_convo: 'Selecciona una conversación',
      msg_start: 'Inicia la conversación',
      msg_you: 'Tú: ',
      msg_no_conv: 'Sin conversaciones aún.',
      msg_loading: 'Cargando…',

      // --- Cleaners ---
      cln_title: 'Limpiadores',
      cln_no_team: 'Aún no tienes limpiadores en tu equipo.',
      cln_no_bio: 'Sin biografía.',
      cln_cleans: 'limpiezas',
      cln_cancels: 'cancelaciones',
      cln_likes: 'me gusta',
      cln_message: '💬 Mensaje',
      cln_remove: '❌ Eliminar del Equipo',
      cln_add: '⭐ Agregar al Equipo',
      cln_loading: 'Cargando…',

      // --- Dispatch ---
      dispatch_title: 'Despacho',
      dispatch_jobs_title: 'Trabajos por asignar',
      dispatch_team_title: 'Tu equipo',
      dispatch_invite_title: 'Invitar a un miembro del equipo',
      dispatch_first_name: 'Nombre',
      dispatch_last_name: 'Apellido',
      dispatch_phone: 'Número de teléfono',
      dispatch_send_invite: 'Enviar Invitación',
      dispatch_cancel: 'Cancelar',
      dispatch_no_jobs: 'Sin trabajos sin asignar.',
      dispatch_no_team: 'Aún no hay miembros en el equipo.',
      dispatch_loading: 'Cargando…',
      dispatch_invite_btn: '+ Invitar Miembro',

      // --- AI / Ask Alf ---
      ai_title: 'Preguntar a Alf',
      ai_input_ph: 'Pregunta lo que quieras…',
      ai_send: 'Enviar',
      ai_greeting: 'Hola',
      ai_greeting_name: 'Hola, {name}',
      ai_thinking: 'Pensando…',
      ai_error: 'Algo salió mal. Inténtalo de nuevo.',
      ai_quick1: '¿Qué trabajos hay hoy?',
      ai_quick2: 'Mostrar mis propiedades',
      ai_quick3: '¿Mensajes sin leer?',
      ai_quick4: 'Ayúdame a escribir un mensaje de check-in',

      // --- Accept Invite ---
      inv_verifying: 'Verificando tu invitación…',
      inv_not_found: 'Enlace no encontrado',
      inv_error_body: 'Este enlace de invitación no es válido o ya fue utilizado. Contacta a tu líder de equipo para una nueva invitación.',
      inv_welcome: '¡Bienvenido al equipo!',
      inv_password_label: 'Crear Contraseña',
      inv_password_ph: 'Crea una contraseña',
      inv_confirm_label: 'Confirmar Contraseña',
      inv_confirm_ph: 'Confirma la contraseña',
      inv_create_account: 'Crear Cuenta',
      inv_success_title: '¡Todo listo!',
      inv_success_body: 'Tu cuenta está lista. Ahora puedes iniciar sesión en Guest Ready Pro.',
      inv_go_login: 'Ir al inicio de sesión',
      inv_creating: 'Creando cuenta…',
      inv_fill_all: 'Por favor completa todos los campos.',
      inv_pass_mismatch: 'Las contraseñas no coinciden.',
      inv_pass_short: 'La contraseña debe tener al menos 6 caracteres.',
      inv_error_create: 'No se pudo crear la cuenta. Inténtalo de nuevo.',
    }
  };

  function getLang() {
    return localStorage.getItem('grLang') || 'en';
  }

  function t(key) {
    var lang = getLang();
    return (LANGS[lang] && LANGS[lang][key]) || (LANGS.en && LANGS.en[key]) || key;
  }

  function applyTranslations() {
    var lang = getLang();
    var dict = LANGS[lang] || LANGS.en;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.textContent = dict[key];
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });

    document.querySelectorAll('[data-i18n-ph]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-ph');
      if (dict[key] !== undefined) el.placeholder = dict[key];
    });

    document.querySelectorAll('[data-i18n-title]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-title');
      if (dict[key] !== undefined) el.title = dict[key];
    });
  }

  function setLang(lang) {
    localStorage.setItem('grLang', lang);
    applyTranslations();
  }

  window.grSwitchLang = function () {
    var current = getLang();
    localStorage.setItem('grLang', current === 'en' ? 'es' : 'en');
    location.reload();
  };

  window.t = t;
  window.GRI18n = { getLang: getLang, t: t, setLang: setLang, applyTranslations: applyTranslations, LANGS: LANGS };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyTranslations);
  } else {
    applyTranslations();
  }
})();
