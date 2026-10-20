/**
 * Copy for the homepage PROPOSAL (/home-b/, not linked, noindex).
 * Kept apart from en.ts / es.ts / de.ts so the proposal can be dropped,
 * or merged into `home` if the owner approves it.
 * Facts from the owner's DJ poster (../wesite-info/imagenes/home.jpg) and
 * the request of 2026-10-20: born in La Boca, tango DJ since 2013, official
 * DJ at Tangoloft and Los Viernes Matine, own studio (tango, rock ’n’ roll).
 * `{countries}` is replaced with the number of countries in experience.ts.
 */
import type { Language } from './languages';

export const HOME_B_TEXTS = {
  en: {
    title: 'Tango DJ from Buenos Aires, based in Berlin',
    description:
      'Aaron Benchimol, Argentine tango DJ since 2013, born in La Boca and based in Berlin. Official DJ at Tangoloft and Los Viernes Matine. Milongas, festivals and marathons in {countries} countries.',
    hero: {
      credit: 'Aaron Benchimol, tango DJ since 2013',
      text: 'Born in La Boca, the heart of tango in Buenos Aires. Today in Berlin, official DJ at Tangoloft and Los Viernes Matine.',
      secondaryCta: 'Discover the DJ Profile',
      photoAlt: 'Aaron Benchimol three times against a red velvet curtain, listening through his DJ headphones',
    },
    intro: {
      title: 'Born in La Boca',
      lead: 'I am a tango DJ born in La Boca, the heart of tango in Buenos Aires. My music is rooted in the Golden Age, with deep respect for its tradition and a fresh, sensitive approach.',
      text: 'I play for the dance floor, the venue, the people and the energy of the moment. As a dancer and teacher I know what the embrace needs, so every tanda and every cortina is chosen with care and adapted to the atmosphere of each event.',
      cta: 'Read My Story',
      artLink: 'I also paint: see my paintings',
    },
    now: {
      title: 'Now in Berlin',
      text: 'Berlin is my home base. I am the official DJ of two milongas in the city, and I run my own dance studio, where I teach tango and rock ’n’ roll.',
      role: 'Official DJ',
      studio: 'My dance studio',
      studioText: 'Tango and rock ’n’ roll classes',
    },
    world: {
      title: 'International DJ Experience',
      text: 'Milongas, festivals and marathons in {countries} countries, from the salons of Buenos Aires to the marathons of Europe.',
      more: 'and more',
      note: 'A selection of the venues where I have played as a DJ. Many milongas were private events and are not listed.',
      cta: 'See the Full Map',
    },
  },
  es: {
    title: 'DJ de tango de Buenos Aires, afincado en Berlín',
    description:
      'Aaron Benchimol, DJ de tango argentino desde 2013, nacido en La Boca y afincado en Berlín. DJ oficial de Tangoloft y Los Viernes Matine. Milongas, festivales y maratones en {countries} países.',
    hero: {
      credit: 'Aaron Benchimol, DJ de tango desde 2013',
      text: 'Nacido en La Boca, el corazón del tango en Buenos Aires. Hoy en Berlín, DJ oficial de Tangoloft y Los Viernes Matine.',
      secondaryCta: 'Conoce el perfil de DJ',
      photoAlt: 'Aaron Benchimol tres veces ante un telón de terciopelo rojo, escuchando con sus auriculares de DJ',
    },
    intro: {
      title: 'Nacido en La Boca',
      lead: 'Soy DJ de tango, nacido en La Boca, el corazón del tango en Buenos Aires. Mi música tiene sus raíces en la Época de Oro, con un profundo respeto por su tradición y una mirada fresca y sensible.',
      text: 'Musicalizo para la pista, el lugar, la gente y la energía del momento. Como bailarín y profesor sé lo que necesita el abrazo: cada tanda y cada cortina se eligen con cuidado y se adaptan al ambiente de cada evento.',
      cta: 'Conoce mi historia',
      artLink: 'También pinto: ver mis cuadros',
    },
    now: {
      title: 'Hoy en Berlín',
      text: 'Berlín es mi casa. Soy el DJ oficial de dos milongas de la ciudad y tengo mi propio estudio de baile, donde enseño tango y rock ’n’ roll.',
      role: 'DJ oficial',
      studio: 'Mi estudio de baile',
      studioText: 'Clases de tango y rock ’n’ roll',
    },
    world: {
      title: 'Experiencia internacional como DJ',
      text: 'Milongas, festivales y maratones en {countries} países, de los salones de Buenos Aires a los maratones de Europa.',
      more: 'y más',
      note: 'Una selección de los lugares donde he musicalizado. Muchas milongas fueron eventos privados y no aparecen aquí.',
      cta: 'Ver el mapa completo',
    },
  },
  de: {
    title: 'Tango-DJ aus Buenos Aires, zu Hause in Berlin',
    description:
      'Aaron Benchimol, argentinischer Tango-DJ seit 2013, geboren in La Boca, zu Hause in Berlin. Offizieller DJ im Tangoloft und bei Los Viernes Matine. Milongas, Festivals und Marathons in {countries} Ländern.',
    hero: {
      credit: 'Aaron Benchimol, Tango-DJ seit 2013',
      text: 'Geboren in La Boca, dem Herzen des Tangos in Buenos Aires. Heute in Berlin, offizieller DJ im Tangoloft und bei Los Viernes Matine.',
      secondaryCta: 'Zum DJ-Profil',
      photoAlt: 'Aaron Benchimol dreimal vor einem roten Samtvorhang, mit seinen DJ-Kopfhörern',
    },
    intro: {
      title: 'Geboren in La Boca',
      lead: 'Ich bin Tango-DJ, geboren in La Boca, dem Herzen des Tangos in Buenos Aires. Meine Musik wurzelt im Goldenen Zeitalter: mit tiefem Respekt vor der Tradition und einem frischen, feinfühligen Blick.',
      text: 'Ich lege für die Tanzfläche auf, für den Ort, die Menschen und die Energie des Moments. Als Tänzer und Lehrer weiß ich, was die Umarmung braucht: Jede Tanda und jede Cortina wähle ich sorgfältig und passe sie der Stimmung jedes Events an.',
      cta: 'Meine Geschichte',
      artLink: 'Ich male auch: zu meinen Bildern',
    },
    now: {
      title: 'Heute in Berlin',
      text: 'Berlin ist mein Zuhause. Ich bin offizieller DJ von zwei Milongas der Stadt und habe mein eigenes Tanzstudio, in dem ich Tango und Rock ’n’ Roll unterrichte.',
      role: 'Offizieller DJ',
      studio: 'Mein Tanzstudio',
      studioText: 'Tango- und Rock-’n’-Roll-Kurse',
    },
    world: {
      title: 'Internationale DJ-Erfahrung',
      text: 'Milongas, Festivals und Marathons in {countries} Ländern, von den Salons in Buenos Aires bis zu den Marathons Europas.',
      more: 'und mehr',
      note: 'Eine Auswahl der Orte, an denen ich aufgelegt habe. Viele Milongas waren private Events und stehen nicht hier.',
      cta: 'Zur ganzen Karte',
    },
  },
} satisfies Record<Language, unknown>;

/** Berlin residencies named in the hero and in "Now in Berlin" */
export const RESIDENCIES = ['Tangoloft', 'Los Viernes Matine'];
