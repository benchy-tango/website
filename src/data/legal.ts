/**
 * Data of the person responsible for the site, used by the legal notice
 * (Impressum, § 5 DDG) and the privacy policy (Art. 13 GDPR).
 *
 * The postal address is REQUIRED in Germany (a "ladungsfähige Anschrift":
 * a real street address, not a PO box). While a field is empty the pages
 * show a clearly marked "pending" placeholder: do not publish like that.
 * vatId: only if Aaron has a VAT ID (USt-IdNr.); leave empty otherwise.
 */
import { CONTACT } from './contact';

export const LEGAL = {
  name: 'Aaron Benchimol',
  street: '', // TODO: street and number, e.g. 'Musterstraße 1'
  postalCode: '', // TODO: e.g. '10115'
  city: 'Berlin',
  country: { en: 'Germany', es: 'Alemania', de: 'Deutschland' },
  email: CONTACT.email,
  phone: CONTACT.whatsappDisplay,
  vatId: '',
};

/** True while the legal pages still miss data required by law */
export const LEGAL_INCOMPLETE = !LEGAL.street || !LEGAL.postalCode;

if (LEGAL_INCOMPLETE) {
  console.warn('[legal] The Impressum is missing the postal address (src/data/legal.ts). Do not publish until it is filled in.');
}
