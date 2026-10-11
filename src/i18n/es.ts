/**
 * Spanish texts. Wording from ../wesite-info/navegacion.md (accents restored);
 * texts that only exist in the English brief are translated here.
 */
import type english from './en';

const spanish: typeof english = {
  meta: {
    siteName: 'Aaron Benchimol',
    descriptor: 'Bailarín de tango argentino · Profesor · DJ · Artista',
  },
  navigation: {
    home: 'Inicio',
    danceMusic: 'Baile y Música',
    art: 'Arte Visual',
    about: 'Sobre mí',
    contact: 'Contacto',
    mainLabel: 'Principal',
    openMenu: 'Abrir el menú',
    closeMenu: 'Cerrar el menú',
    language: 'Idioma',
    skipToContent: 'Ir al contenido',
  },
  common: {
    opensInNewTab: '(se abre en una pestaña nueva)',
    exampleFrame: 'Marco de ejemplo',
    artworkComingSoon: 'Obra próximamente',
    instagramTango: 'Instagram: tango',
    instagramArt: 'Instagram: arte visual',
    whatsapp: 'WhatsApp',
    email: 'Email',
  },
  home: {
    title: 'Tango argentino, DJ y Arte Visual',
    description:
      'Aaron Benchimol: bailarín, profesor y DJ de tango argentino, y pintor. Clases y talleres de tango, DJ para milongas, festivales y eventos privados, y pintura abstracta.',
    hero: {
      subtitle: 'Tango, DJ y Arte Visual',
      text: 'Bienvenido a mi espacio de tango, música y pintura. Descubre mis clases, mis sesiones de DJ y mis obras de arte.',
      primaryCta: 'Ver Clases y DJ',
      secondaryCta: 'Ver Pinturas',
      photoAlt: 'Aaron Benchimol bailando tango argentino en un abrazo cerrado en una milonga',
    },
    dance: {
      title: 'Baile y Música',
      text: 'El tango es conexión y movimiento. Ofrezco clases de tango y música para eventos como DJ.',
      classes: {
        title: 'Clases y Talleres de Tango',
        text: 'Aprende a bailar tango de forma fácil y clara: clases privadas, clases grupales y talleres especiales para todos los niveles.',
        cta: 'Solicitar Información de Clases',
        photoAlt: 'Aaron Benchimol sonriendo durante una clase grupal de tango, con parejas practicando detrás',
      },
      dj: {
        title: 'Tango DJ',
        text: 'Selección musical única para milongas, festivales y eventos privados. Creo el ambiente perfecto para que todos bailen.',
        cta: 'Contratar DJ para Evento',
        photoAlt: 'Aaron Benchimol de esmoquin, escuchando con sus auriculares de DJ',
      },
    },
    art: {
      title: 'Mi Arte',
      text: 'La pintura es otra forma de expresar emoción y movimiento. Explora mis últimas obras abstractas.',
      cta: 'Ver Galería de Arte',
    },
    about: {
      title: 'Sobre Mí',
      text: 'Conoce mi trayectoria como bailarín, DJ y artista visual. Mi vida está dedicada al arte.',
      cta: 'Leer Mi Historia',
      photoAlt: 'Retrato de Aaron Benchimol apoyado en una columna de piedra',
    },
    final: {
      title: '¿Trabajamos juntos?',
      text: 'Si buscas clases de tango, un DJ para tu evento o comprar arte, escríbeme hoy.',
      cta: 'Contactar Ahora',
    },
  },
  danceMusic: {
    title: 'Baile y Música',
    description:
      'Clases de tango, clases privadas y talleres para todos los niveles, y DJ de tango para milongas, festivales y eventos privados, con Aaron Benchimol.',
    intro: 'El tango es conexión y movimiento. Ofrezco clases de tango y música para eventos como DJ.',
    classes: {
      title: 'Clases de Tango',
      text: 'Aprende a bailar tango de forma fácil y clara. Doy clases privadas, clases grupales y talleres especiales para todos los niveles.',
      cta: 'Solicitar Información de Clases',
      formats: ['Clases privadas', 'Clases grupales', 'Talleres especiales'],
      photoAlt: 'Aaron Benchimol sonriendo durante una clase grupal de tango, con parejas practicando detrás',
    },
    dj: {
      title: 'Servicio de DJ',
      text: 'Selección musical única para milongas, festivales y eventos privados. Creo el ambiente perfecto para que todos bailen.',
      cta: 'Contratar DJ para Evento',
      events: ['Milongas', 'Festivales', 'Eventos privados'],
      photoAlt: 'Aaron Benchimol de esmoquin, escuchando con sus auriculares de DJ',
    },
    floor: {
      title: 'Momentos en la Pista',
      text: 'Mira cómo vivimos la música y el baile en cada evento.',
      cta: 'Reservar Tu Lugar',
      photoAlt: 'Aaron Benchimol bailando tango con su pareja en una pista iluminada con velas',
    },
  },
  art: {
    title: 'Colección de Arte',
    description:
      'Pinturas abstractas de Aaron Benchimol, inspiradas en el movimiento y la música. Consulta por una obra, una exposición o un cuadro personalizado.',
    text: 'Cuadros abstractos inspirados en el movimiento y la música. Cada obra es única y está disponible para venta o exposición.',
    cta: 'Consultar por una Obra',
    galleryLabel: 'Pinturas',
    process: {
      title: 'Cómo Creo Mi Arte',
      text: 'La pintura completa mi universo artístico junto al baile.',
      cta: 'Pedir Cuadro Personalizado',
    },
    followArt: 'Sigue la obra en proceso en Instagram',
  },
  about: {
    title: 'Conoce a Aaron Benchimol',
    description:
      'Aaron Benchimol: años dedicados al tango argentino, la música y el arte visual, viajando por el mundo para compartir su pasión.',
    text: 'Llevo años dedicado al tango, la música y el arte visual. Viajo por el mundo compartiendo mi pasión con personas de todos lados.',
    cta: 'Hablar con Aaron',
    photoAlt: 'Retrato de Aaron Benchimol apoyado en una columna de piedra',
    philosophy: {
      title: 'Arte y Movimiento',
      text: 'Creo en el poder del arte para conectar a las personas y transmitir emociones profundas.',
      cta: 'Ver Proyectos Actuales',
    },
  },
  contact: {
    title: 'Ponte en Contacto',
    description:
      'Contacta con Aaron Benchimol para clases de tango, talleres, contratar un DJ para tu evento o sus pinturas.',
    text: 'Rellena el formulario para pedir información sobre clases, contratar sesiones de DJ o comprar obras de arte. Responderé muy pronto.',
    form: {
      name: 'Nombre',
      email: 'Email',
      enquiry: '¿Sobre qué es tu consulta?',
      enquiryTypes: {
        classes: 'Clases de baile / clases privadas',
        workshop: 'Taller',
        dj: 'Contratar DJ',
        performance: 'Actuación / colaboración',
        art: 'Obra de arte / exposición',
        other: 'Otro',
      },
      details: 'Lugar o fecha del evento',
      optional: '(opcional)',
      message: 'Mensaje',
      submit: 'Enviar Mensaje',
      sending: 'Enviando…',
      success: '¡Gracias! Tu mensaje se ha enviado. Aaron te responderá muy pronto.',
      error: 'No se ha podido enviar tu mensaje. Inténtalo de nuevo en un momento, o escribe a',
      errors: {
        name: 'Escribe tu nombre.',
        email: 'Escribe un email válido.',
        message: 'Escribe un mensaje corto.',
      },
      privacy:
        'Tu mensaje se envía a través de Netlify, que se lo reenvía a Aaron por email. Tus datos solo se usan para responderte.',
    },
    direct: {
      title: 'Otras Formas de Contacto',
      emailLabel: 'Email',
      locationLabel: 'Ubicación',
      location: 'Disponible para viajes y eventos internacionales.',
      socialLabel: 'Redes sociales',
      whatsappCta: 'Escribir por WhatsApp',
    },
  },
  whatsappButton: {
    label: "Escribir a Aaron por WhatsApp (se abre en una pestaña nueva)",
    message: "¡Hola Aaron! Tengo una consulta.",
  },
  footer: {
    rights: 'Todos los derechos reservados.',
    madeBy: 'Web realizada por',
  },
  notFound: {
    title: 'Página no encontrada',
    text: 'Esta página no existe o ha cambiado de dirección.',
    cta: 'Volver al inicio',
  },
};

export default spanish;
