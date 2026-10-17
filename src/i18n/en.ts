/**
 * English texts (default language). Translated from ../wesite-info/navegacion.md;
 * DJ facts from ../wesite-info/tango-dj.md. Change texts here and in es.ts;
 * components never hold copy.
 */
const english = {
  meta: {
    /** The brand: logo, page titles, og:site_name. Aaron's own name stays in the copy. */
    siteName: 'Benchy Tango',
    descriptor: 'Tango DJ, Argentine tango dancer and teacher',
  },
  navigation: {
    home: 'Home',
    dj: 'Tango DJ',
    classes: 'Classes',
    about: 'About',
    art: 'Art',
    contact: 'Contact',
    mainLabel: 'Main',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    language: 'Language',
    skipToContent: 'Skip to content',
  },
  common: {
    opensInNewTab: '(opens in a new tab)',
    exampleFrame: 'Example frame',
    artworkComingSoon: 'Artwork coming soon',
    instagramTango: 'Instagram: tango',
    instagramArt: 'Instagram: visual art',
    whatsapp: 'WhatsApp',
    email: 'Email',
    bookDj: 'Book Aaron as a DJ',
  },
  /** Experience map and lists (src/components/ExperienceMap.astro) */
  experience: {
    world: 'World',
    europe: 'Europe in detail',
    regions: { europe: 'Europe', americas: 'Americas', asia: 'Asia & Oceania' },
    filter: 'Filter by country',
    filterRegion: 'Filter by continent',
    all: 'All Countries',
    summary: '{entries} entries in {countries} countries',
    showing: 'Showing {n} entries',
    entry: 'entry',
    entries: 'entries',
    showAll: 'Show All',
    showFewer: 'Show Fewer',
    online: 'Online',
    roles: {
      dj: 'Tango DJ',
      djTraditional: 'Tango DJ (traditional)',
      djOrganiser: 'Tango DJ & organiser',
      djArtist: 'Tango DJ & artist',
      djTeacher: 'Tango DJ & teacher',
      teacherDj: 'Tango teacher & DJ',
      djDancer: 'Tango DJ & dancer',
      show: 'Tango show',
      showRockAndRoll: 'Tango & rock & roll show',
      showDancer: 'Tango show & dancer',
      teacherRockShow: 'Teacher & rock & roll show',
      partner: 'Dance partner',
      tourArtist: 'Tango tour, artist',
      artistTeacher: 'Tango artist & teacher',
    },
  },
  home: {
    title: 'Tango DJ from Buenos Aires, based in Berlin',
    description:
      'Aaron Benchimol, Argentine tango DJ from Buenos Aires based in Berlin: traditional milongas, 50/50 nights, festivals and marathons. Also tango classes and workshops.',
    hero: {
      label: 'by Aaron Benchimol',
      text: 'Tango DJ from Buenos Aires, based in Berlin. Music for the embrace: Golden Age tandas, 50/50 nights and festival marathons.',
      secondaryCta: 'Discover the DJ Profile',
      photoAlt: 'Aaron Benchimol in a tuxedo, smiling as he listens through his DJ headphones',
    },
    music: {
      title: 'Music for the Dance Floor',
      text: 'I DJ the way I dance. I learned on the floors of Buenos Aires, so every tanda is chosen for the embrace, the energy of the room and the flow of the couples.',
    },
    played: {
      title: 'Where I’ve Played',
      cta: 'See All Countries',
    },
    classes: {
      title: 'Tango Classes & Workshops',
      text: 'Learn to dance tango in a simple, clear way: private lessons, group classes and special workshops for every level.',
      cta: 'Enquire About Classes',
      photoAlt: 'A group tango class with Aaron Benchimol: students practising the steps in a ballroom',
    },
    about: {
      title: 'From Buenos Aires to Berlin',
      text: 'I grew up dancing in the milongas of Buenos Aires and today I live in Berlin. Tango is my life: I dance it, I teach it and I bring it to the booth.',
      cta: 'Read My Story',
      artLink: 'I also paint: see my paintings',
      photoAlt: 'Portrait of Aaron Benchimol leaning against a stone column',
    },
    final: {
      title: 'Bring the Music to Your Milonga',
      text: 'Organising a milonga, a festival, a marathon or a private event? Tell me the date and the place.',
    },
  },
  dj: {
    title: 'Tango DJ',
    description:
      'Book Aaron Benchimol, tango DJ from Buenos Aires based in Berlin: traditional milongas, neo and 50/50 events, marathons and festivals. Formats, repertoire and DJ history.',
    intro:
      'Tango DJ (TDJ) from Buenos Aires, based in Berlin. I play for milongas, festivals, marathons and private events, in Berlin and as an international guest.',
    origin: {
      title: 'From the Dance Floor to the Booth',
      text: 'My work as a DJ comes from my life as a dancer on the floors of Buenos Aires. I put the flowing energy of the room first, a natural rhythm between tandas and the balance of the social embrace.',
      approachLabel: 'How I play',
      approach: ['I read the floor as it moves', 'Smooth transitions between styles', 'Sound tuned to the acoustics of each room'],
      photoAlt: 'Aaron Benchimol in a tuxedo, smiling as he listens through his DJ headphones',
    },
    formats: {
      title: 'Formats',
      items: [
        {
          title: 'Traditional Milongas',
          text: 'Tandas of 4 tangos, 3 valses and 3 milongas with orchestras from the 1930s to the 1950s, separated by non-tango cortinas.',
        },
        {
          title: 'Neo & 50/50 Events',
          text: "Classic orchestras alternating with contemporary ones (Misteriosa Buenos Aires, La Juan D’Arienzo) and neotango or electrotango, with cortinas chosen with care: rock, indie, funk, cumbia.",
        },
        {
          title: 'Marathons & Festivals',
          text: 'Extended sets of 3 to 5 hours, shaping the energy of the floor across the whole night.',
        },
      ],
    },
    repertoire: {
      title: 'The Golden Age',
      text: 'At traditional milongas I build my tandas around the great orchestras of the 1930s and 1940s.',
    },
    journey: {
      title: 'The Journey',
      text: 'From Buenos Aires to Berlin: every country where I’ve played, in the order I first played there. Scroll and follow the route.',
      onMap: 'See it on the map',
      today: 'Today',
      home: 'Berlin, home base',
    },
    experience: {
      title: 'Where I’ve Played',
      text: 'Milongas, festivals and marathons, from Buenos Aires to Berlin. Choose a country or a continent to see what I played there.',
    },
    final: {
      title: 'Book Aaron for Your Event',
      text: 'Tell me the type of event, the date and the place, and I will get back to you with my availability.',
    },
  },
  classes: {
    title: 'Tango Classes',
    description:
      'Argentine tango classes with Aaron Benchimol: private lessons, group classes and special workshops for every level.',
    intro: 'Tango is connection and movement. I teach the way I dance and play: for the embrace and the music.',
    heroPhotoAlt: 'Portrait of Aaron Benchimol in a tuxedo and bow tie, adjusting his jacket',
    offer: {
      title: 'Learn to Dance Tango',
      text: 'Learn to dance tango in a simple, clear way. I give private lessons, group classes and special workshops for all levels.',
      cta: 'Enquire About Classes',
      formats: ['Private lessons', 'Group classes', 'Special workshops'],
      photoAlt: 'A group tango class with Aaron Benchimol: students practising the steps in a ballroom',
    },
    experience: {
      title: 'Where I’ve Taught',
      text: 'Classes, workshops and tours as a tango teacher. Choose a country or a continent to filter.',
    },
    final: {
      title: 'Ready to Dance?',
      text: 'Private lesson, group class or a workshop for your community: write to me and we will find the right format.',
      cta: 'Enquire About Classes',
    },
  },
  art: {
    title: 'Art Collection',
    description:
      'Abstract paintings by Aaron Benchimol, inspired by movement and music. Enquire about a work, an exhibition or a custom painting.',
    text: 'Abstract paintings inspired by movement and music. Every work is unique and available for sale or exhibition.',
    cta: 'Enquire About an Artwork',
    galleryLabel: 'Paintings',
    process: {
      title: 'How I Create My Art',
      text: 'Painting completes my artistic universe, alongside dance.',
      cta: 'Request a Custom Painting',
    },
    followArt: 'Follow the work in progress on Instagram',
  },
  about: {
    title: 'Meet Aaron Benchimol',
    description:
      'Aaron Benchimol: tango DJ, dancer and teacher, born in Buenos Aires and based in Berlin.',
    text: 'I was born in Buenos Aires and grew up dancing in its milongas. Today I live in Berlin, where I DJ at milongas and festivals and teach tango. I travel sharing my passion with people from everywhere.',
    cta: 'Talk to Aaron',
    photoAlt: 'Portrait of Aaron Benchimol leaning against a stone column',
    training: {
      title: 'Training',
      graduated: 'Graduated',
      continuingTitle: 'Continuing training in salon and stage tango',
      continuingWith: 'With',
      continuingOthers: 'and other teachers.',
      complementaryTitle: 'Complementary training',
      complementary: 'Ballet and American tap, salsa, Argentine folklore and rock.',
    },
    philosophy: {
      title: 'Art and Movement',
      text: 'I believe in the power of art to connect people and to convey deep emotions. Painting is my other way of expressing movement.',
      cta: 'Discover the DJ Profile',
      artLink: 'See my paintings',
    },
  },
  stage: {
    title: 'On Stage',
    text: 'Shows, tours and performances as a tango dancer and artist. Choose a country or a continent to filter.',
  },
  contact: {
    title: 'Get in Touch',
    description:
      'Contact Aaron Benchimol to book a tango DJ for your milonga, festival or private event, or to ask about tango classes and workshops.',
    text: 'Fill in the form to book me as a DJ, ask about classes or enquire about a painting. I will reply very soon.',
    form: {
      name: 'Name',
      email: 'Email',
      enquiry: 'What is it about?',
      enquiryTypes: {
        dj: 'DJ booking (milonga, festival, private event)',
        classes: 'Dance classes / private lessons',
        workshop: 'Workshop',
        performance: 'Performance / collaboration',
        art: 'Artwork / exhibition',
        other: 'Other',
      },
      details: 'Location or event date',
      optional: '(optional)',
      message: 'Message',
      submit: 'Send Message',
      sending: 'Sending…',
      success: 'Thank you! Your message has been sent. Aaron will reply very soon.',
      error: 'Your message could not be sent. Please try again in a moment, or write to',
      errors: {
        name: 'Please enter your name.',
        email: 'Please enter a valid email address.',
        message: 'Please write a short message.',
        privacy: 'Please confirm that you have read the privacy policy.',
      },
      privacy:
        'Your message is sent through Netlify, which forwards it to Aaron by email. Your details are only used to answer you.',
      consentStart: 'I have read the',
      consentLink: 'privacy policy',
      consentEnd: 'and agree that my details are used to answer my enquiry.',
    },
    direct: {
      title: 'Other Ways to Reach Me',
      emailLabel: 'Email',
      locationLabel: 'Location',
      location: 'Based in Berlin. Available for international travel and events.',
      socialLabel: 'Social media',
      whatsappCta: 'Message on WhatsApp',
    },
  },
  whatsappButton: {
    label: "Message Aaron on WhatsApp (opens in a new tab)",
    message: "Hi Aaron! I have a question.",
  },
  footer: {
    rights: 'All rights reserved.',
    imprint: 'Legal Notice',
    privacy: 'Privacy Policy',
    madeBy: 'Website by',
  },
  notFound: {
    title: 'Page Not Found',
    text: 'This page does not exist or has moved.',
    cta: 'Back to home',
  },
};

export default english;
