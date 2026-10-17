/**
 * Aaron's experience as tango DJ, teacher and performer, by country.
 * Sources: ../wesite-info/aaron_benchimol_dj-history.md (main table) and
 * ../wesite-info/tango-dj.md (events not already in the table).
 *
 * - `event`: a proper name stays a plain string (never translated); a
 *   descriptive one ("Milongas and events") is { en, es }.
 * - `city`: same rule. Leave it out when the source has no city.
 * - `role`: one key of ROLES below; its label lives in en.ts / es.ts
 *   (`experience.roles`) and its tags decide which page lists the entry:
 *   dj → Tango DJ page, teacher → Classes page, stage → About page.
 * - `years`: { from, to? }. to: 'now' for "since …"; before: true for
 *   "before …". Leave `years` out when the source has no year.
 *
 * Only real entries from the sources above; never invent one.
 */
import type { Language } from '../i18n/languages';

type Text = string | Record<Language, string>;

export type Region = 'europe' | 'americas' | 'asia';
export type Tag = 'dj' | 'teacher' | 'stage';

/** Where each country sits on the map (its main city, or the country's centre when there are several) */
export const COUNTRIES: Record<string, { lat: number; lon: number; region: Region }> = {
  ar: { lat: -34.6, lon: -58.4, region: 'americas' },
  us: { lat: 39.8, lon: -98.6, region: 'americas' },
  mx: { lat: 23.6, lon: -102.5, region: 'americas' },
  de: { lat: 51.2, lon: 10.4, region: 'europe' },
  pl: { lat: 52.23, lon: 21.0, region: 'europe' },
  fi: { lat: 60.6, lon: 24.9, region: 'europe' },
  ro: { lat: 45.8, lon: 24.15, region: 'europe' },
  ru: { lat: 55.75, lon: 37.6, region: 'europe' },
  rs: { lat: 44.8, lon: 20.46, region: 'europe' },
  it: { lat: 41.0, lon: 14.5, region: 'europe' },
  fr: { lat: 47.36, lon: 0.8, region: 'europe' },
  ua: { lat: 50.45, lon: 30.52, region: 'europe' },
  bg: { lat: 42.7, lon: 23.32, region: 'europe' },
  gr: { lat: 37.98, lon: 23.73, region: 'europe' },
  il: { lat: 31.77, lon: 35.21, region: 'asia' },
  kr: { lat: 36.5, lon: 127.8, region: 'asia' },
  id: { lat: -2.5, lon: 118.0, region: 'asia' },
  au: { lat: -25.3, lon: 133.8, region: 'asia' },
};

/** Role keys (source wording) and the pages they belong to */
export const ROLES = {
  dj: ['dj'],
  djTraditional: ['dj'],
  djOrganiser: ['dj'],
  djArtist: ['dj', 'stage'],
  djTeacher: ['dj', 'teacher'],
  teacherDj: ['dj', 'teacher'],
  djDancer: ['dj', 'stage'],
  show: ['stage'],
  showRockAndRoll: ['stage'],
  showDancer: ['stage'],
  teacherRockShow: ['teacher', 'stage'],
  partner: ['stage'],
  tourArtist: ['stage'],
  artistTeacher: ['teacher', 'stage'],
} as const satisfies Record<string, readonly Tag[]>;
export type Role = keyof typeof ROLES;

export interface Experience {
  /** ISO 3166 code, lowercase (null: online, not on the map) */
  country: keyof typeof COUNTRIES | null;
  city?: Text;
  event: Text;
  years?: { from: number; to?: number | 'now'; before?: boolean };
  role: Role;
}

const BA = 'Buenos Aires';
const BERLIN: Text = { en: 'Berlin', es: 'Berlín', de: 'Berlin' };
const WARSAW: Text = { en: 'Warsaw', es: 'Varsovia', de: 'Warschau' };
const HAMBURG: Text = { en: 'Hamburg', es: 'Hamburgo', de: 'Hamburg' };
const MILONGAS_EVENTS: Text = { en: 'Milongas and events', es: 'Milongas y eventos', de: 'Milongas und Events' };
const TOUR: Text = { en: 'Tour', es: 'Gira', de: 'Tournee' };

export const EXPERIENCES: Experience[] = [
  // ---- Argentina ----
  { country: 'ar', city: BA, event: 'El Beso', years: { from: 2011 }, role: 'dj' },
  { country: 'ar', city: BA, event: 'Teatro Verdi', years: { from: 2012 }, role: 'dj' },
  { country: 'ar', city: BA, event: 'La Maleva', years: { from: 2013 }, role: 'dj' },
  { country: 'ar', city: BA, event: 'Champagne Tango', years: { from: 2013 }, role: 'dj' },
  { country: 'ar', city: BA, event: 'Alas de Milonga', years: { from: 2014 }, role: 'dj' },
  { country: 'ar', city: BA, event: 'De Vez en Tango', years: { from: 2014 }, role: 'dj' },
  { country: 'ar', city: BA, event: 'Champagne Tango – El Beso', years: { from: 2014, to: 'now' }, role: 'dj' },
  { country: 'ar', city: BA, event: 'Teatro Verdi – La Boca', years: { from: 2014, to: 'now' }, role: 'dj' },
  { country: 'ar', city: BA, event: 'Cachirulo – El Beso', years: { from: 2014, to: 'now' }, role: 'dj' },
  { country: 'ar', city: BA, event: 'La Yuyu', years: { from: 2015, to: 2018 }, role: 'djOrganiser' },
  { country: 'ar', city: BA, event: 'Sabor a Tango – Homero Manzi', years: { from: 2015 }, role: 'djArtist' },
  { country: 'ar', city: BA, event: 'Esquina Carlos Gardel', years: { from: 2016 }, role: 'djArtist' },
  { country: 'ar', city: BA, event: 'Club Villa Malcolm', years: { from: 2016 }, role: 'show' },
  { country: 'ar', city: BA, event: 'Plaza Dorrego', years: { from: 2016 }, role: 'show' },
  { country: 'ar', city: BA, event: 'Dalí', years: { from: 2016 }, role: 'show' },
  { country: 'ar', city: BA, event: 'La Paz Arriba', years: { from: 2016 }, role: 'show' },
  { country: 'ar', city: BA, event: 'Restaurant Rodizio', years: { from: 2016 }, role: 'show' },
  { country: 'ar', city: BA, event: 'Restaurant El Árbol', years: { from: 2016 }, role: 'show' },
  { country: 'ar', city: BA, event: 'La Viruta', years: { from: 2016, to: 2017 }, role: 'showRockAndRoll' },
  { country: 'ar', city: BA, event: 'Café Tortoni', years: { from: 2017 }, role: 'djArtist' },
  { country: 'ar', city: BA, event: 'Salón Canning – Milonga Cachirulo', years: { from: 2018, before: true }, role: 'dj' },
  {
    country: 'ar',
    city: BA,
    event: { en: 'Neighbourhood clubs and prácticas', es: 'Clubes de barrio y prácticas', de: 'Nachbarschaftsclubs und Prácticas' },
    years: { from: 2018, before: true },
    role: 'dj',
  },
  { country: 'ar', city: BA, event: 'Los Cachirulos – Cachirulo', years: { from: 2018 }, role: 'dj' },
  { country: 'ar', city: BA, event: 'En Tus Brazos', years: { from: 2018 }, role: 'dj' },
  { country: 'ar', city: { en: '9 de Julio', es: '9 de Julio', de: '9 de Julio' }, event: 'Rural de 9 de Julio', years: { from: 2018 }, role: 'show' },
  { country: 'ar', city: BA, event: 'Salón Canning', years: { from: 2018, to: 2019 }, role: 'dj' },
  { country: 'ar', city: BA, event: 'Milonga El Beso', years: { from: 2018, to: 2019 }, role: 'dj' },
  { country: 'ar', city: BA, event: 'La Rosa Milonga', years: { from: 2019 }, role: 'dj' },
  { country: 'ar', city: BA, event: 'Milonga Querido', years: { from: 2020 }, role: 'dj' },
  { country: 'ar', city: BA, event: 'Gricel', years: { from: 2020 }, role: 'show' },
  {
    country: 'ar',
    city: BA,
    event: { en: 'Pista Urbana and cultural spaces', es: 'Pista Urbana y espacios culturales', de: 'Pista Urbana und Kulturorte' },
    years: { from: 2020, to: 2021 },
    role: 'dj',
  },
  { country: 'ar', city: BA, event: 'Salón Canning', years: { from: 2021 }, role: 'dj' },
  { country: 'ar', city: BA, event: 'La Catedral', years: { from: 2021 }, role: 'dj' },
  { country: 'ar', city: BA, event: 'En lo de Balmaceda Milonga', role: 'dj' },

  // ---- Germany ----
  { country: 'de', city: BERLIN, event: 'Festival Embrace', years: { from: 2014, to: 'now' }, role: 'dj' },
  { country: 'de', city: BERLIN, event: 'Latidos', years: { from: 2014, to: 'now' }, role: 'dj' },
  { country: 'de', city: BERLIN, event: 'Embrace – Monday', years: { from: 2014, to: 'now' }, role: 'dj' },
  { country: 'de', city: { en: 'Aachen', es: 'Aquisgrán', de: 'Aachen' }, event: MILONGAS_EVENTS, years: { from: 2018 }, role: 'dj' },
  { country: 'de', city: 'Düsseldorf', event: MILONGAS_EVENTS, years: { from: 2018 }, role: 'dj' },
  { country: 'de', city: BERLIN, event: 'Mala Junta', years: { from: 2022 }, role: 'dj' },
  { country: 'de', city: BERLIN, event: 'Kreativhaus – Fischerinsel', years: { from: 2022 }, role: 'dj' },
  { country: 'de', city: BERLIN, event: 'Tangoloft Berlin', years: { from: 2023 }, role: 'dj' },
  { country: 'de', city: BERLIN, event: 'Tangogarten Weißensee', years: { from: 2023 }, role: 'dj' },
  { country: 'de', city: BERLIN, event: 'Pippo', years: { from: 2024 }, role: 'dj' },
  { country: 'de', city: BERLIN, event: 'Milonga Pista Doble – Haus der Sinne', years: { from: 2024 }, role: 'djTraditional' },
  { country: 'de', city: BERLIN, event: 'Berlin Festival Milonguero', years: { from: 2024 }, role: 'dj' },
  { country: 'de', city: BERLIN, event: 'Tangoloft – Traditional Summer Editions', years: { from: 2024 }, role: 'dj' },
  { country: 'de', city: BERLIN, event: 'Berlinos Aires Milonga', years: { from: 2024 }, role: 'dj' },
  { country: 'de', city: HAMBURG, event: 'Universo Tango', years: { from: 2025 }, role: 'dj' },
  { country: 'de', city: BERLIN, event: 'Embrace Festival', years: { from: 2025 }, role: 'dj' },
  { country: 'de', city: BERLIN, event: 'Rathaus Schöneberg', years: { from: 2025 }, role: 'dj' },
  { country: 'de', city: BERLIN, event: 'Berlin Festival Milonguero', years: { from: 2025 }, role: 'dj' },
  { country: 'de', city: BERLIN, event: 'Ballhaus Rixdorf – Nou Tango', years: { from: 2025, to: 'now' }, role: 'dj' },
  { country: 'de', city: HAMBURG, event: 'Tango Matrix', years: { from: 2026 }, role: 'dj' },
  { country: 'de', city: BERLIN, event: 'Mala Junta', years: { from: 2026 }, role: 'dj' },
  { country: 'de', city: BERLIN, event: 'Traditional Tangoloft – Open Class Summer Edition', years: { from: 2026 }, role: 'djTeacher' },
  { country: 'de', city: BERLIN, event: 'Tangoloft – Traditional Tangoloft', years: { from: 2026 }, role: 'dj' },
  { country: 'de', city: BERLIN, event: 'Berlin Festival Milonguero – Milonga 2', years: { from: 2026 }, role: 'dj' },
  { country: 'de', city: BERLIN, event: 'Colors of Tango Festival – Grand Finale', years: { from: 2026 }, role: 'dj' },

  // ---- Rest of Europe ----
  { country: 'pl', city: WARSAW, event: MILONGAS_EVENTS, years: { from: 2014, to: 'now' }, role: 'dj' },
  { country: 'pl', city: WARSAW, event: MILONGAS_EVENTS, years: { from: 2016, to: 2017 }, role: 'dj' },
  { country: 'pl', city: WARSAW, event: MILONGAS_EVENTS, years: { from: 2016, to: 2017 }, role: 'teacherDj' },
  { country: 'pl', city: WARSAW, event: 'TangoMilonga', years: { from: 2024 }, role: 'dj' },
  { country: 'fi', city: 'Helsinki', event: MILONGAS_EVENTS, years: { from: 2016, to: 2017 }, role: 'dj' },
  { country: 'fi', city: 'Tampere', event: MILONGAS_EVENTS, years: { from: 2016, to: 2017 }, role: 'dj' },
  { country: 'fi', city: 'Helsinki', event: 'Tango Argentino performance', years: { from: 2016, to: 2017 }, role: 'showDancer' },
  { country: 'fi', city: 'Helsinki', event: 'Encuentro Milongero in Helsinki', years: { from: 2023 }, role: 'dj' },
  { country: 'fi', city: 'Helsinki', event: 'Tango Weekend 50/50', years: { from: 2023 }, role: 'dj' },
  { country: 'ua', city: { en: 'Kyiv and other cities', es: 'Kiev y otras ciudades', de: 'Kyjiw und weitere Städte' }, event: MILONGAS_EVENTS, years: { from: 2016, to: 2017 }, role: 'djTeacher' },
  { country: 'rs', city: { en: 'Belgrade', es: 'Belgrado', de: 'Belgrad' }, event: 'New Year’s Belgrade Tango Marathon', years: { from: 2016 }, role: 'dj' },
  { country: 'ru', city: { en: 'Moscow', es: 'Moscú', de: 'Moskau' }, event: { en: 'Performances', es: 'Presentaciones', de: 'Auftritte' }, years: { from: 2017 }, role: 'teacherRockShow' },
  { country: 'ru', city: { en: 'St. Petersburg', es: 'San Petersburgo', de: 'Sankt Petersburg' }, event: 'Tango Tangomanía', years: { from: 2018 }, role: 'dj' },
  { country: 'gr', city: { en: 'Athens', es: 'Atenas', de: 'Athen' }, event: { en: 'Tango festival', es: 'Festival de tango', de: 'Tangofestival' }, years: { from: 2018, to: 2019 }, role: 'partner' },
  { country: 'bg', event: { en: 'Milongas and festivals', es: 'Milongas y festivales', de: 'Milongas und Festivals' }, years: { from: 2022 }, role: 'dj' },
  { country: 'ro', city: 'Sibiu', event: 'Festival Tango2', years: { from: 2023 }, role: 'dj' },
  { country: 'it', event: TOUR, years: { from: 2016, to: 2017 }, role: 'artistTeacher' },
  { country: 'it', city: 'Scilla', event: 'Tango in Scilla – Tango Marathon & Workshops', years: { from: 2025 }, role: 'djDancer' },
  { country: 'fr', city: { en: 'Véretz, Loire Valley', es: 'Véretz, Valle del Loira', de: 'Véretz, Loiretal' }, event: 'La Magnifika Tango Marathon', years: { from: 2026 }, role: 'dj' },

  // ---- Americas, Asia and Oceania ----
  { country: 'mx', event: TOUR, years: { from: 2016, to: 2017 }, role: 'artistTeacher' },
  { country: 'us', city: 'Miami, New York, Detroit, Atlanta, Chicago', event: TOUR, years: { from: 2018, to: 2019 }, role: 'artistTeacher' },
  { country: 'il', event: { en: 'Milongas and festivals', es: 'Milongas y festivales', de: 'Milongas und Festivals' }, years: { from: 2019 }, role: 'dj' },
  { country: 'kr', event: TOUR, years: { from: 2016, to: 2017 }, role: 'artistTeacher' },
  { country: 'id', event: TOUR, years: { from: 2016, to: 2017 }, role: 'artistTeacher' },
  { country: 'au', event: TOUR, years: { from: 2017 }, role: 'tourArtist' },

  // ---- Online ----
  {
    country: null,
    event: { en: 'Online and hybrid workshops and prácticas', es: 'Talleres y prácticas online e híbridas', de: 'Online- und Hybrid-Workshops und Prácticas' },
    years: { from: 2020, to: 2021 },
    role: 'dj',
  },
];

export const textIn = (text: Text, language: Language) => (typeof text === 'string' ? text : text[language]);

/** Entries for one page, newest start year first (entries without a year go last) */
export function experiencesFor(tag: Tag): Experience[] {
  const sortKey = (e: Experience) => (e.years ? e.years.from - (e.years.before ? 0.5 : 0) : -1);
  return EXPERIENCES.filter((e) => (ROLES[e.role] as readonly Tag[]).includes(tag)).sort((a, b) => sortKey(b) - sortKey(a));
}

/** Countries in a list with how many entries each has, most first */
export function countriesIn(list: Experience[]) {
  const counts = new Map<string, number>();
  for (const e of list) if (e.country) counts.set(e.country, (counts.get(e.country) ?? 0) + 1);
  return [...counts.entries()].map(([code, count]) => ({ code, count, ...COUNTRIES[code] })).sort((a, b) => b.count - a.count);
}
