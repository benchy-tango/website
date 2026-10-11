/**
 * English texts (default language). Translated from ../wesite-info/navegacion.md,
 * with the call-to-action wording of the architecture brief. Change texts
 * here and in es.ts; components never hold copy.
 */
const english = {
  meta: {
    siteName: 'Aaron Benchimol',
    descriptor: 'Argentine Tango Dancer · Teacher · DJ · Artist',
  },
  navigation: {
    home: 'Home',
    danceMusic: 'Dance & Music',
    art: 'Visual Art',
    about: 'About',
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
  },
  home: {
    title: 'Argentine Tango, DJ & Visual Art',
    description:
      'Aaron Benchimol: Argentine tango dancer, teacher, DJ and painter. Tango classes and workshops, tango DJ for milongas, festivals and private events, and abstract paintings.',
    hero: {
      subtitle: 'Tango, DJ & Visual Art',
      text: 'Welcome to my world of tango, music and painting. Discover my classes, my DJ sessions and my artwork.',
      primaryCta: 'Explore Dance & Music',
      secondaryCta: 'Discover My Art',
      photoAlt: 'Aaron Benchimol dancing Argentine tango in a close embrace at a milonga',
    },
    dance: {
      title: 'Dance & Music',
      text: 'Tango is connection and movement. I teach tango, and I bring the music to events as a DJ.',
      classes: {
        title: 'Tango Classes & Workshops',
        text: 'Learn to dance tango in a simple, clear way: private lessons, group classes and special workshops for every level.',
        cta: 'Enquire About Classes',
        photoAlt: 'Aaron Benchimol smiling during a group tango class, with couples practising behind him',
      },
      dj: {
        title: 'Tango DJ',
        text: 'A unique musical selection for milongas, festivals and private events, creating the atmosphere for everyone to dance.',
        cta: 'Book Aaron as a DJ',
        photoAlt: 'Aaron Benchimol in a tuxedo, listening through his DJ headphones',
      },
    },
    art: {
      title: 'My Art',
      text: 'Painting is another way to express emotion and movement. Explore my latest abstract works.',
      cta: 'Explore Visual Art',
    },
    about: {
      title: 'About Me',
      text: 'Discover my path as a dancer, DJ and visual artist. My life is dedicated to art.',
      cta: 'Meet Aaron',
      photoAlt: 'Portrait of Aaron Benchimol leaning against a stone column',
    },
    final: {
      title: 'Shall we work together?',
      text: 'Looking for tango classes, a DJ for your event or a painting? Write to me today.',
      cta: 'Get in Touch',
    },
  },
  danceMusic: {
    title: 'Dance & Music',
    description:
      'Tango classes, private lessons and workshops for every level, and a tango DJ for milongas, festivals and private events, with Aaron Benchimol.',
    intro: 'Tango is connection and movement. I teach tango, and I bring the music to events as a DJ.',
    classes: {
      title: 'Tango Classes',
      text: 'Learn to dance tango in a simple, clear way. I give private lessons, group classes and special workshops for all levels.',
      cta: 'Enquire About Classes',
      formats: ['Private lessons', 'Group classes', 'Special workshops'],
      photoAlt: 'Aaron Benchimol smiling during a group tango class, with couples practising behind him',
    },
    dj: {
      title: 'Tango DJ',
      text: 'A unique musical selection for milongas, festivals and private events. I create the perfect atmosphere for everyone to dance.',
      cta: 'Book Aaron as a DJ',
      events: ['Milongas', 'Festivals', 'Private events'],
      photoAlt: 'Aaron Benchimol in a tuxedo, listening through his DJ headphones',
    },
    floor: {
      title: 'Moments on the Dance Floor',
      text: 'See how we live the music and the dance at every event.',
      cta: 'Reserve Your Spot',
      photoAlt: 'Aaron Benchimol dancing tango with his partner on a candlelit dance floor',
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
      'Aaron Benchimol: years dedicated to Argentine tango, music and visual art, travelling the world to share his passion.',
    text: 'For years I have dedicated myself to tango, music and visual art. I travel the world sharing my passion with people from everywhere.',
    cta: 'Talk to Aaron',
    photoAlt: 'Portrait of Aaron Benchimol leaning against a stone column',
    philosophy: {
      title: 'Art and Movement',
      text: 'I believe in the power of art to connect people and to convey deep emotions.',
      cta: 'See Current Projects',
    },
  },
  contact: {
    title: 'Get in Touch',
    description:
      'Contact Aaron Benchimol about tango classes, workshops, DJ bookings for your event, or his paintings.',
    text: 'Fill in the form to ask about classes, book a DJ session or buy artwork. I will reply very soon.',
    form: {
      name: 'Name',
      email: 'Email',
      enquiry: 'What is it about?',
      enquiryTypes: {
        classes: 'Dance classes / private lessons',
        workshop: 'Workshop',
        dj: 'DJ booking',
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
      },
      privacy:
        'Your message is sent through Netlify, which forwards it to Aaron by email. Your details are only used to answer you.',
    },
    direct: {
      title: 'Other Ways to Reach Me',
      emailLabel: 'Email',
      locationLabel: 'Location',
      location: 'Available for international travel and events.',
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
    madeBy: 'Website by',
  },
  notFound: {
    title: 'Page not found',
    text: 'This page does not exist or has moved.',
    cta: 'Back to home',
  },
};

export default english;
