/**
 * Spanish texts. Wording from ../wesite-info/navegacion.md; DJ facts from
 * ../wesite-info/tango-dj.md. Same shape as en.ts.
 */
import type english from './en';

const spanish: typeof english = {
  meta: {
    siteName: 'Benchy Tango',
    descriptor: 'Tango DJ · Bailarín y profesor de tango argentino',
  },
  navigation: {
    home: 'Inicio',
    dj: 'Tango DJ',
    classes: 'Clases',
    about: 'Sobre mí',
    art: 'Arte',
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
    bookDj: 'Contratar a Aaron como DJ',
  },
  experience: {
    world: 'Mundo',
    europe: 'Europa en detalle',
    regions: { europe: 'Europa', americas: 'América', asia: 'Asia y Oceanía' },
    filter: 'Filtrar por país',
    filterRegion: 'Filtrar por continente',
    all: 'Todos los países',
    summary: '{countries} países · {entries} experiencias',
    showing: 'Mostrando {n} experiencias',
    entry: 'experiencia',
    entries: 'experiencias',
    showAll: 'Ver todas',
    showFewer: 'Ver menos',
    online: 'Online',
    roles: {
      dj: 'Tango DJ',
      djTraditional: 'Tango DJ (tradicional)',
      djOrganiser: 'Tango DJ y organizador',
      djArtist: 'Tango DJ y artista',
      djTeacher: 'Tango DJ y profesor',
      teacherDj: 'Profesor de tango y DJ',
      djDancer: 'Tango DJ y bailarín',
      show: 'Show de tango',
      showRockAndRoll: 'Show de tango y rock & roll',
      showDancer: 'Show de tango y bailarín',
      teacherRockShow: 'Profesor y show de rock & roll',
      partner: 'Pareja de baile',
      tourArtist: 'Gira de tango, artista',
      artistTeacher: 'Artista y profesor de tango',
    },
  },
  home: {
    title: 'DJ de tango de Buenos Aires, afincado en Berlín',
    description:
      'Aaron Benchimol, DJ de tango argentino de Buenos Aires afincado en Berlín: milongas tradicionales, noches 50/50, festivales y maratones. También clases y talleres de tango.',
    hero: {
      label: 'Aaron Benchimol · Tango DJ · Bailarín · Profesor',
      text: 'DJ de tango nacido en Buenos Aires y afincado en Berlín. Música para el abrazo: tandas de la Época de Oro, noches 50/50 y maratones de festival.',
      secondaryCta: 'Ver Perfil de DJ',
      photoAlt: 'Aaron Benchimol de esmoquin, sonriendo mientras escucha con sus auriculares de DJ',
    },
    music: {
      title: 'Música para la pista',
      text: 'Pincho como bailo. Aprendí en las pistas de Buenos Aires, así que cada tanda está pensada para el abrazo, la energía del salón y el fluir de las parejas.',
    },
    played: {
      title: 'Dónde he pinchado',
      cta: 'Ver Todos los Países',
    },
    classes: {
      title: 'Clases y Talleres de Tango',
      text: 'Aprende a bailar tango de forma fácil y clara: clases privadas, clases grupales y talleres especiales para todos los niveles.',
      cta: 'Solicitar Información de Clases',
      photoAlt: 'Una clase grupal de tango con Aaron Benchimol: alumnos practicando los pasos en un salón de baile',
    },
    about: {
      title: 'De Buenos Aires a Berlín',
      text: 'Crecí bailando en las milongas de Buenos Aires y hoy vivo en Berlín. El tango es mi vida: lo bailo, lo enseño y lo pongo en la cabina.',
      cta: 'Leer Mi Historia',
      artLink: 'También pinto · Ver mis pinturas',
      photoAlt: 'Retrato de Aaron Benchimol apoyado en una columna de piedra',
    },
    final: {
      title: 'Lleva la música a tu milonga',
      text: '¿Organizas una milonga, un festival, un maratón o un evento privado? Cuéntame la fecha y el lugar.',
    },
  },
  dj: {
    title: 'Tango DJ',
    description:
      'Contrata a Aaron Benchimol, DJ de tango de Buenos Aires afincado en Berlín: milongas tradicionales, eventos neo y 50/50, maratones y festivales. Formatos, repertorio y trayectoria.',
    intro:
      'DJ de tango (TDJ) de Buenos Aires, afincado en Berlín. Pongo música en milongas, festivales, maratones y eventos privados, en Berlín y como invitado internacional.',
    origin: {
      title: 'De la pista a la cabina',
      text: 'Mi trabajo como DJ nace de mi vida como bailarín en las pistas de Buenos Aires. Priorizo la energía fluida del salón, un ritmo natural entre tandas y el equilibrio en el abrazo social.',
      approachLabel: 'Cómo pincho',
      approach: ['Leo la pista en tiempo real', 'Transiciones fluidas entre estilos', 'Sonido ajustado a la acústica de cada sala'],
      photoAlt: 'Aaron Benchimol de esmoquin, sonriendo mientras escucha con sus auriculares de DJ',
    },
    formats: {
      title: 'Formatos',
      items: [
        {
          title: 'Milongas tradicionales',
          text: 'Tandas de 4 tangos, 3 valses y 3 milongas con orquestas de los años 30 a los 50, separadas por cortinas.',
        },
        {
          title: 'Eventos neo y 50/50',
          text: "Orquestas clásicas alternadas con orquestas contemporáneas (Misteriosa Buenos Aires, La Juan D’Arienzo) y neotango o electrotango, con cortinas elegidas con cuidado: rock, indie, funk, cumbia.",
        },
        {
          title: 'Maratones y festivales',
          text: 'Sets largos de 3 a 5 horas, gestionando la energía de la pista durante toda la noche.',
        },
      ],
    },
    repertoire: {
      title: 'La Época de Oro',
      text: 'En las milongas tradicionales construyo las tandas alrededor de las grandes orquestas de los años 30 y 40.',
    },
    experience: {
      title: 'Dónde he pinchado',
      text: 'Milongas, festivales y maratones, de Buenos Aires a Berlín. Elige un país o un continente para ver dónde pinché.',
    },
    final: {
      title: 'Contrata a Aaron para tu evento',
      text: 'Dime el tipo de evento, la fecha y el lugar, y te respondo con mi disponibilidad.',
    },
  },
  classes: {
    title: 'Clases de Tango',
    description:
      'Clases de tango argentino con Aaron Benchimol: clases privadas, clases grupales y talleres especiales para todos los niveles.',
    intro: 'El tango es conexión y movimiento. Enseño como bailo y como pincho: para el abrazo y la música.',
    heroPhotoAlt: 'Retrato de Aaron Benchimol de esmoquin y pajarita, ajustándose la chaqueta',
    offer: {
      title: 'Aprende a bailar tango',
      text: 'Aprende a bailar tango de forma fácil y clara. Doy clases privadas, clases grupales y talleres especiales para todos los niveles.',
      cta: 'Solicitar Información de Clases',
      formats: ['Clases privadas', 'Clases grupales', 'Talleres especiales'],
      photoAlt: 'Una clase grupal de tango con Aaron Benchimol: alumnos practicando los pasos en un salón de baile',
    },
    experience: {
      title: 'Dónde he enseñado',
      text: 'Clases, talleres y giras como profesor de tango. Elige un país o un continente para filtrar.',
    },
    final: {
      title: '¿Bailamos?',
      text: 'Clase privada, clase grupal o un taller para tu comunidad: escríbeme y encontramos el formato adecuado.',
      cta: 'Solicitar Información de Clases',
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
      'Aaron Benchimol: DJ, bailarín y profesor de tango, nacido en Buenos Aires y afincado en Berlín.',
    text: 'Nací en Buenos Aires y crecí bailando en sus milongas. Hoy vivo en Berlín, donde pongo música en milongas y festivales y enseño tango. Viajo compartiendo mi pasión con personas de todos lados.',
    cta: 'Hablar con Aaron',
    photoAlt: 'Retrato de Aaron Benchimol apoyado en una columna de piedra',
    training: {
      title: 'Formación',
      graduated: 'Egresado el',
      continuingTitle: 'Formación continua en Tango Salón y Escenario',
      continuingWith: 'Con',
      continuingOthers: 'y otros maestros.',
      complementaryTitle: 'Formación complementaria',
      complementary: 'Ballet y American Tap, salsa, folklore argentino y rock.',
    },
    philosophy: {
      title: 'Arte y Movimiento',
      text: 'Creo en el poder del arte para conectar a las personas y transmitir emociones profundas. La pintura es mi otra forma de expresar el movimiento.',
      cta: 'Ver Perfil de DJ',
      artLink: 'Ver mis pinturas',
    },
  },
  stage: {
    title: 'En el escenario',
    text: 'Shows, giras y presentaciones como bailarín y artista de tango. Elige un país o un continente para filtrar.',
  },
  contact: {
    title: 'Ponte en Contacto',
    description:
      'Contacta con Aaron Benchimol para contratar un DJ de tango para tu milonga, festival o evento privado, o para clases y talleres de tango.',
    text: 'Rellena el formulario para contratarme como DJ, pedir información sobre clases o consultar por una obra. Responderé muy pronto.',
    form: {
      name: 'Nombre',
      email: 'Email',
      enquiry: '¿Sobre qué es tu consulta?',
      enquiryTypes: {
        dj: 'Contratar DJ (milonga, festival, evento privado)',
        classes: 'Clases de baile / clases privadas',
        workshop: 'Taller',
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
      privacyLink: 'Política de privacidad',
    },
    direct: {
      title: 'Otras Formas de Contacto',
      emailLabel: 'Email',
      locationLabel: 'Ubicación',
      location: 'Afincado en Berlín. Disponible para viajes y eventos internacionales.',
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
    imprint: 'Aviso legal',
    privacy: 'Privacidad',
    madeBy: 'Web realizada por',
  },
  notFound: {
    title: 'Página no encontrada',
    text: 'Esta página no existe o ha cambiado de dirección.',
    cta: 'Volver al inicio',
  },
};

export default spanish;
