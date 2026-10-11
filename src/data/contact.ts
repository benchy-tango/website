/**
 * Contact details and social accounts. Only real, official accounts belong
 * here: an empty `url` hides that link everywhere on the site.
 */
export const CONTACT = {
  email: 'info@aaronbenchimol.com',
  /** International format, digits only for wa.me links. */
  whatsappNumber: '491795299525',
  whatsappDisplay: '+49 179 5299525',
} as const;

export type SocialAccount = {
  id: 'instagramTango' | 'instagramArt' | 'facebook';
  icon: 'instagram' | 'facebook';
  handle: string;
  url: string;
};

export const SOCIAL_ACCOUNTS: SocialAccount[] = [
  { id: 'instagramTango', icon: 'instagram', handle: '@benchytango', url: 'https://www.instagram.com/benchytango/' },
  { id: 'instagramArt', icon: 'instagram', handle: '@benchy.art', url: 'https://www.instagram.com/benchy.art/' },
  { id: 'facebook', icon: 'facebook', handle: 'Facebook', url: 'https://www.facebook.com/share/1RGFGtS3h5/' },
];

export const activeSocialAccounts = () => SOCIAL_ACCOUNTS.filter((account) => account.url);

export function whatsappUrl(message = ''): string {
  const base = `https://wa.me/${CONTACT.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
