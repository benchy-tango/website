/**
 * Aaron's training, for the About page. Source: ../wesite-info/formacion.md.
 * Institution and teacher names are proper names (never translated);
 * descriptions are per language. Only what the source says.
 */
import type { Language } from '../i18n/languages';

type Text = Record<Language, string>;

export interface Training {
  years?: string;
  institution?: string;
  title: Text;
  /** ISO date shown with Intl.DateTimeFormat, e.g. a graduation date */
  graduated?: string;
}

export const TRAINING: Training[] = [
  {
    years: '2019 – 2022',
    institution: 'UNTREF · Escuela de Tango y Danzas Tradicionales',
    title: {
      en: 'Tango diploma course focused on teaching',
      es: 'Diplomatura de Tango orientada a la docencia',
      de: 'Tango-Diplomstudiengang mit Schwerpunkt Lehre',
    },
  },
  {
    years: '2021 – 2022',
    institution: 'CADEF',
    title: {
      en: 'Personal trainer and strength training',
      es: 'Personal Trainer y musculación',
      de: 'Personal Trainer und Krafttraining',
    },
  },
  {
    years: '2021 – 2022',
    institution: 'Centro Integral de Natación A-1459',
    title: { en: 'Swimming instructor', es: 'Instructor de natación', de: 'Schwimmlehrer' },
    graduated: '2022-03-11',
  },
];

/** Teachers of his continuing training in salon and stage tango */
export const TANGO_TEACHERS = [
  'Eliana Sánchez',
  'Mario Morales',
  'Luis Solanas',
  'Edgardo Ballatti',
  'Maricel Giacomini',
  'Julio Balmaceda',
  'Jonathan Spitel',
  'Fabián Peralta',
  'Sebastián Arce',
];
