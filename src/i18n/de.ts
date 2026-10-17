/**
 * German texts (at /de/). Translated from en.ts / es.ts; informal "du",
 * as is usual in the tango scene. Same shape as en.ts.
 */
import type english from './en';

const german: typeof english = {
  meta: {
    siteName: 'Benchy Tango',
    descriptor: 'Tango-DJ · Tänzer und Lehrer für argentinischen Tango',
  },
  navigation: {
    home: 'Start',
    dj: 'Tango-DJ',
    classes: 'Unterricht',
    about: 'Über mich',
    art: 'Kunst',
    contact: 'Kontakt',
    mainLabel: 'Hauptmenü',
    openMenu: 'Menü öffnen',
    closeMenu: 'Menü schließen',
    language: 'Sprache',
    skipToContent: 'Zum Inhalt springen',
  },
  common: {
    opensInNewTab: '(öffnet in einem neuen Tab)',
    exampleFrame: 'Beispielrahmen',
    artworkComingSoon: 'Werk folgt in Kürze',
    instagramTango: 'Instagram: Tango',
    instagramArt: 'Instagram: Kunst',
    whatsapp: 'WhatsApp',
    email: 'E-Mail',
    bookDj: 'Aaron als DJ buchen',
  },
  experience: {
    world: 'Welt',
    europe: 'Europa im Detail',
    regions: { europe: 'Europa', americas: 'Amerika', asia: 'Asien und Ozeanien' },
    filter: 'Nach Land filtern',
    filterRegion: 'Nach Kontinent filtern',
    all: 'Alle Länder',
    summary: '{countries} Länder · {entries} Stationen',
    showing: '{n} Stationen werden angezeigt',
    entry: 'Station',
    entries: 'Stationen',
    showAll: 'Alle anzeigen',
    showFewer: 'Weniger anzeigen',
    online: 'Online',
    roles: {
      dj: 'Tango-DJ',
      djTraditional: 'Tango-DJ (traditionell)',
      djOrganiser: 'Tango-DJ und Veranstalter',
      djArtist: 'Tango-DJ und Künstler',
      djTeacher: 'Tango-DJ und Lehrer',
      teacherDj: 'Tangolehrer und DJ',
      djDancer: 'Tango-DJ und Tänzer',
      show: 'Tangoshow',
      showRockAndRoll: 'Tango- und Rock-’n’-Roll-Show',
      showDancer: 'Tangoshow und Tänzer',
      teacherRockShow: 'Lehrer und Rock-’n’-Roll-Show',
      partner: 'Tanzpartner',
      tourArtist: 'Tangotournee, Künstler',
      artistTeacher: 'Tangokünstler und Lehrer',
    },
  },
  home: {
    title: 'Tango-DJ aus Buenos Aires, zu Hause in Berlin',
    description:
      'Aaron Benchimol, Tango-DJ aus Buenos Aires mit Sitz in Berlin: traditionelle Milongas, 50/50-Abende, Festivals und Marathons. Außerdem Tangounterricht und Workshops.',
    hero: {
      label: 'Aaron Benchimol · Tango-DJ · Tänzer · Lehrer',
      text: 'Tango-DJ aus Buenos Aires, zu Hause in Berlin. Musik für die Umarmung: Tandas aus der Goldenen Ära, 50/50-Abende und Festival-Marathons.',
      secondaryCta: 'DJ-Profil ansehen',
      photoAlt: 'Aaron Benchimol im Smoking, lächelnd beim Hören über seine DJ-Kopfhörer',
    },
    music: {
      title: 'Musik für die Tanzfläche',
      text: 'Ich lege auf, wie ich tanze. Gelernt habe ich auf den Tanzflächen von Buenos Aires, darum ist jede Tanda für die Umarmung gewählt, für die Energie im Saal und den Fluss der Paare.',
    },
    played: {
      title: 'Wo ich aufgelegt habe',
      cta: 'Alle Länder ansehen',
    },
    classes: {
      title: 'Tangounterricht und Workshops',
      text: 'Lerne Tango einfach und klar: Privatstunden, Gruppenkurse und besondere Workshops für jedes Niveau.',
      cta: 'Nach Unterricht fragen',
      photoAlt: 'Ein Tango-Gruppenkurs mit Aaron Benchimol: Schülerinnen und Schüler üben die Schritte in einem Tanzsaal',
    },
    about: {
      title: 'Von Buenos Aires nach Berlin',
      text: 'Ich bin in den Milongas von Buenos Aires mit dem Tanzen groß geworden und lebe heute in Berlin. Tango ist mein Leben: Ich tanze ihn, ich unterrichte ihn und ich bringe ihn ans DJ-Pult.',
      cta: 'Meine Geschichte',
      artLink: 'Ich male auch · Meine Bilder ansehen',
      photoAlt: 'Porträt von Aaron Benchimol, an eine Steinsäule gelehnt',
    },
    final: {
      title: 'Bring die Musik zu deiner Milonga',
      text: 'Du organisierst eine Milonga, ein Festival, einen Marathon oder eine private Feier? Schreib mir Datum und Ort.',
    },
  },
  dj: {
    title: 'Tango-DJ',
    description:
      'Buche Aaron Benchimol, Tango-DJ aus Buenos Aires mit Sitz in Berlin: traditionelle Milongas, Neo- und 50/50-Events, Marathons und Festivals. Formate, Repertoire und Stationen.',
    intro:
      'Tango-DJ (TDJ) aus Buenos Aires, zu Hause in Berlin. Ich lege auf Milongas, Festivals, Marathons und privaten Feiern auf, in Berlin und als internationaler Gast.',
    origin: {
      title: 'Von der Tanzfläche ans DJ-Pult',
      text: 'Meine Arbeit als DJ kommt aus meinem Leben als Tänzer auf den Tanzflächen von Buenos Aires. An erster Stelle stehen für mich die fließende Energie im Saal, ein natürlicher Rhythmus zwischen den Tandas und das Gleichgewicht in der sozialen Umarmung.',
      approachLabel: 'Wie ich auflege',
      approach: ['Ich lese die Tanzfläche in Echtzeit', 'Fließende Übergänge zwischen Stilen', 'Klang angepasst an die Akustik jedes Saals'],
      photoAlt: 'Aaron Benchimol im Smoking, lächelnd beim Hören über seine DJ-Kopfhörer',
    },
    formats: {
      title: 'Formate',
      items: [
        {
          title: 'Traditionelle Milongas',
          text: 'Tandas mit 4 Tangos, 3 Valses und 3 Milongas von Orchestern der 1930er bis 1950er Jahre, getrennt durch Cortinas.',
        },
        {
          title: 'Neo- und 50/50-Events',
          text: 'Klassische Orchester im Wechsel mit zeitgenössischen (Misteriosa Buenos Aires, La Juan D’Arienzo) und Neotango oder Electrotango, mit sorgfältig gewählten Cortinas: Rock, Indie, Funk, Cumbia.',
        },
        {
          title: 'Marathons und Festivals',
          text: 'Lange Sets von 3 bis 5 Stunden, die die Energie auf der Tanzfläche die ganze Nacht über tragen.',
        },
      ],
    },
    repertoire: {
      title: 'Die Goldene Ära',
      text: 'Auf traditionellen Milongas baue ich meine Tandas um die großen Orchester der 1930er und 1940er Jahre.',
    },
    experience: {
      title: 'Wo ich aufgelegt habe',
      text: 'Milongas, Festivals und Marathons, von Buenos Aires bis Berlin. Wähle ein Land oder einen Kontinent, um zu sehen, wo ich aufgelegt habe.',
    },
    final: {
      title: 'Buche Aaron für dein Event',
      text: 'Schreib mir die Art des Events, das Datum und den Ort, und ich melde mich mit meiner Verfügbarkeit.',
    },
  },
  classes: {
    title: 'Tangounterricht',
    description:
      'Unterricht in argentinischem Tango mit Aaron Benchimol: Privatstunden, Gruppenkurse und besondere Workshops für jedes Niveau.',
    intro: 'Tango ist Verbindung und Bewegung. Ich unterrichte, wie ich tanze und auflege: für die Umarmung und die Musik.',
    heroPhotoAlt: 'Porträt von Aaron Benchimol in Smoking und Fliege, der sein Jackett richtet',
    offer: {
      title: 'Tango tanzen lernen',
      text: 'Lerne Tango einfach und klar. Ich gebe Privatstunden, Gruppenkurse und besondere Workshops für alle Niveaus.',
      cta: 'Nach Unterricht fragen',
      formats: ['Privatstunden', 'Gruppenkurse', 'Besondere Workshops'],
      photoAlt: 'Ein Tango-Gruppenkurs mit Aaron Benchimol: Schülerinnen und Schüler üben die Schritte in einem Tanzsaal',
    },
    experience: {
      title: 'Wo ich unterrichtet habe',
      text: 'Kurse, Workshops und Tourneen als Tangolehrer. Wähle ein Land oder einen Kontinent zum Filtern.',
    },
    final: {
      title: 'Lust zu tanzen?',
      text: 'Privatstunde, Gruppenkurs oder ein Workshop für deine Community: Schreib mir und wir finden das passende Format.',
      cta: 'Nach Unterricht fragen',
    },
  },
  art: {
    title: 'Kunstsammlung',
    description:
      'Abstrakte Bilder von Aaron Benchimol, inspiriert von Bewegung und Musik. Frag nach einem Werk, einer Ausstellung oder einem Auftragsbild.',
    text: 'Abstrakte Bilder, inspiriert von Bewegung und Musik. Jedes Werk ist ein Unikat und für Verkauf oder Ausstellung verfügbar.',
    cta: 'Nach einem Werk fragen',
    galleryLabel: 'Bilder',
    process: {
      title: 'Wie meine Kunst entsteht',
      text: 'Die Malerei vervollständigt neben dem Tanz mein künstlerisches Universum.',
      cta: 'Ein Bild in Auftrag geben',
    },
    followArt: 'Folge den Arbeiten auf Instagram',
  },
  about: {
    title: 'Das ist Aaron Benchimol',
    description: 'Aaron Benchimol: Tango-DJ, Tänzer und Lehrer, geboren in Buenos Aires, zu Hause in Berlin.',
    text: 'Ich bin in Buenos Aires geboren und in seinen Milongas mit dem Tanzen groß geworden. Heute lebe ich in Berlin, wo ich auf Milongas und Festivals auflege und Tango unterrichte. Ich reise und teile meine Leidenschaft mit Menschen von überall.',
    cta: 'Schreib Aaron',
    photoAlt: 'Porträt von Aaron Benchimol, an eine Steinsäule gelehnt',
    philosophy: {
      title: 'Kunst und Bewegung',
      text: 'Ich glaube an die Kraft der Kunst, Menschen zu verbinden und tiefe Gefühle zu vermitteln. Die Malerei ist meine andere Art, Bewegung auszudrücken.',
      cta: 'DJ-Profil ansehen',
      artLink: 'Meine Bilder ansehen',
    },
  },
  stage: {
    title: 'Auf der Bühne',
    text: 'Shows, Tourneen und Auftritte als Tangotänzer und Künstler. Wähle ein Land oder einen Kontinent zum Filtern.',
  },
  contact: {
    title: 'Kontakt',
    description:
      'Kontaktiere Aaron Benchimol, um einen Tango-DJ für deine Milonga, dein Festival oder deine private Feier zu buchen, oder für Fragen zu Tangounterricht und Workshops.',
    text: 'Füll das Formular aus, um mich als DJ zu buchen, nach Unterricht zu fragen oder dich nach einem Bild zu erkundigen. Ich antworte dir bald.',
    form: {
      name: 'Name',
      email: 'E-Mail',
      enquiry: 'Worum geht es?',
      enquiryTypes: {
        dj: 'DJ-Buchung (Milonga, Festival, private Feier)',
        classes: 'Tanzunterricht / Privatstunden',
        workshop: 'Workshop',
        performance: 'Auftritt / Zusammenarbeit',
        art: 'Kunstwerk / Ausstellung',
        other: 'Sonstiges',
      },
      details: 'Ort oder Datum des Events',
      optional: '(optional)',
      message: 'Nachricht',
      submit: 'Nachricht senden',
      sending: 'Wird gesendet…',
      success: 'Danke! Deine Nachricht wurde gesendet. Aaron antwortet dir bald.',
      error: 'Deine Nachricht konnte nicht gesendet werden. Versuch es gleich noch einmal oder schreib an',
      errors: {
        name: 'Bitte gib deinen Namen ein.',
        email: 'Bitte gib eine gültige E-Mail-Adresse ein.',
        message: 'Bitte schreib eine kurze Nachricht.',
      },
      privacy:
        'Deine Nachricht wird über Netlify gesendet und per E-Mail an Aaron weitergeleitet. Deine Daten werden nur verwendet, um dir zu antworten.',
      privacyLink: 'Datenschutzerklärung',
    },
    direct: {
      title: 'Weitere Kontaktwege',
      emailLabel: 'E-Mail',
      locationLabel: 'Ort',
      location: 'Zu Hause in Berlin. Für internationale Reisen und Events verfügbar.',
      socialLabel: 'Soziale Medien',
      whatsappCta: 'Per WhatsApp schreiben',
    },
  },
  whatsappButton: {
    label: 'Aaron per WhatsApp schreiben (öffnet in einem neuen Tab)',
    message: 'Hallo Aaron! Ich habe eine Frage.',
  },
  footer: {
    rights: 'Alle Rechte vorbehalten.',
    imprint: 'Impressum',
    privacy: 'Datenschutz',
    madeBy: 'Website von',
  },
  notFound: {
    title: 'Seite nicht gefunden',
    text: 'Diese Seite existiert nicht oder ist umgezogen.',
    cta: 'Zur Startseite',
  },
};

export default german;
