/**
 * Languages and URLs.
 * - English is the default language and lives at the root ("/", "/art/"…).
 * - Spanish lives under "/es/" and German under "/de/" ("/es/art/", "/de/art/"…).
 * Every page uses the same slug in every language, so switching language
 * only swaps the prefix. All URLs end with "/".
 */
import english from './en';
import spanish from './es';
import german from './de';

export const LANGUAGES = ['en', 'es', 'de'] as const;
export type Language = (typeof LANGUAGES)[number];
export const DEFAULT_LANGUAGE: Language = 'en';

export const LANGUAGE_DETAILS: Record<Language, { name: string; short: string; htmlLang: string; ogLocale: string }> = {
  en: { name: 'English', short: 'EN', htmlLang: 'en', ogLocale: 'en_GB' },
  es: { name: 'Español', short: 'ES', htmlLang: 'es', ogLocale: 'es_ES' },
  de: { name: 'Deutsch', short: 'DE', htmlLang: 'de', ogLocale: 'de_DE' },
};

/** The shape every translation file follows (defined by the English file). */
export type Translation = typeof english;

const TRANSLATIONS: Record<Language, Translation> = { en: english, es: spanish, de: german };

export function getTranslation(language: Language): Translation {
  return TRANSLATIONS[language];
}

/** Pages of the site and their URL slug (shared by both languages). */
export const PAGE_SLUGS = {
  home: '',
  dj: 'dj',
  classes: 'classes',
  about: 'about',
  art: 'art',
  contact: 'contact',
  impressum: 'impressum',
  privacy: 'privacy',
  /** Homepage proposal (2026-10-20): not linked from the menu, noindex */
  homeB: 'home-b',
} as const;
export type PageName = keyof typeof PAGE_SLUGS;

/**
 * URL of a page in a language, optionally with a #section or ?query.
 * pageUrl('es', 'art') → "/es/art/", pageUrl('en', 'contact', '?enquiry=dj#form') → "/contact/?enquiry=dj#form".
 */
export function pageUrl(language: Language, page: PageName, suffix = ''): string {
  const prefix = language === DEFAULT_LANGUAGE ? '' : `/${language}`;
  const slug = PAGE_SLUGS[page];
  return `${prefix}/${slug ? `${slug}/` : ''}${suffix}`;
}

/** Link to the contact form with an enquiry type already chosen. */
export function enquiryUrl(language: Language, enquiry: EnquiryType): string {
  return pageUrl(language, 'contact', `?enquiry=${enquiry}#contact-form`);
}

/** Enquiry types of the contact form. DJ booking comes first: it is the main business. */
export const ENQUIRY_TYPES = ['dj', 'classes', 'workshop', 'performance', 'art', 'other'] as const;
export type EnquiryType = (typeof ENQUIRY_TYPES)[number];

/** getStaticPaths for every page in src/pages/[...lang]/: English has no prefix. */
export function languageStaticPaths() {
  return LANGUAGES.map((language) => ({
    params: { lang: language === DEFAULT_LANGUAGE ? undefined : language },
    props: { language },
  }));
}
