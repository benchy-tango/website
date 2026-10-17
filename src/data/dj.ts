/**
 * Tango DJ extras for the homepage and the DJ page. The full history (DJ,
 * teacher, stage) lives in src/data/experience.ts.
 */
import type { Language } from '../i18n/languages';

/** Selected festivals and milongas for the homepage, one per line with its flag */
export const DJ_HIGHLIGHTS: { venue: string; city: string | Record<Language, string>; country: string }[] = [
  { venue: 'Berlin Festival Milonguero', city: { en: 'Berlin', es: 'Berlín', de: 'Berlin' }, country: 'de' },
  { venue: 'Colors of Tango Festival', city: { en: 'Berlin', es: 'Berlín', de: 'Berlin' }, country: 'de' },
  { venue: 'La Magnifika Tango Marathon', city: 'Véretz', country: 'fr' },
  { venue: 'Tango in Scilla', city: 'Scilla', country: 'it' },
  { venue: 'Festival Tango2', city: 'Sibiu', country: 'ro' },
  { venue: 'New Year’s Belgrade Tango Marathon', city: { en: 'Belgrade', es: 'Belgrado', de: 'Belgrad' }, country: 'rs' },
  { venue: 'Tango Tangomanía', city: { en: 'St. Petersburg', es: 'San Petersburgo', de: 'Sankt Petersburg' }, country: 'ru' },
  { venue: 'El Beso', city: 'Buenos Aires', country: 'ar' },
];

/** Golden Age orchestras at the heart of his traditional tandas. */
export const GOLDEN_AGE_ORCHESTRAS = ['Carlos Di Sarli', 'Juan D’Arienzo', 'Aníbal Troilo', 'Osvaldo Pugliese', 'Ricardo Tanturi'];
