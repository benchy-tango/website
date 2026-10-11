/**
 * Languages and URLs.
 * - English is the default language and lives at the root ("/", "/art/"…).
 * - Spanish lives under "/es/" ("/es/", "/es/art/"…).
 * Every page uses the same slug in both languages, so switching language
 * only swaps the prefix. All URLs end with "/".
 */
import english from './en';
import spanish from './es';

export const LANGUAGES = ['en', 'es'] as const;
export type Language = (typeof LANGUAGES)[number];
export const DEFAULT_LANGUAGE: Language = 'en';

export const LANGUAGE_DETAILS: Record<Language, { name: string; short: string; htmlLang: string; ogLocale: string }> = {
  en: { name: 'English', short: 'EN', htmlLang: 'en', ogLocale: 'en_GB' },
  es: { name: 'Español', short: 'ES', htmlLang: 'es', ogLocale: 'es_ES' },
};

/** The shape every translation file follows (defined by the English file). */
export type Translation = typeof english;

const TRANSLATIONS: Record<Language, Translation> = { en: english, es: spanish };

export function getTranslation(language: Language): Translation {
  return TRANSLATIONS[language];
}

/** Pages of the site and their URL slug (shared by both languages). */
export const PAGE_SLUGS = {
  home: '',
  danceMusic: 'dance-music',
  art: 'art',
  about: 'about',
  contact: 'contact',
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

/** Enquiry types of the contact form (architecture brief §4, Contact). */
export const ENQUIRY_TYPES = ['classes', 'workshop', 'dj', 'performance', 'art', 'other'] as const;
export type EnquiryType = (typeof ENQUIRY_TYPES)[number];

/** getStaticPaths for every page in src/pages/[...lang]/: English has no prefix. */
export function languageStaticPaths() {
  return LANGUAGES.map((language) => ({
    params: { lang: language === DEFAULT_LANGUAGE ? undefined : language },
    props: { language },
  }));
}
