/**
 * Paintings shown in the Visual Art gallery and on the homepage (the first
 * three). Source images: ../wesite-info/imagenes/arte/ (700×700 shop photos).
 *
 * Titles come from the owner's file names (German titles of the
 * "Energiebild" series); the two small signed works have no title in their
 * file name, only their size. Year, medium and availability are not known
 * yet: leave a field out when it is unknown, never invent it.
 *
 * To add a work: put the photo in src/assets/artworks/, import it below and
 * add an entry. While the list is empty the site shows labelled example frames.
 */
import type { ImageMetadata } from 'astro';
import type { Language } from '../i18n/languages';
import deinLichtBrichtHervor from '../assets/artworks/dein-licht-bricht-hervor.webp';
import engelDesMutes from '../assets/artworks/engel-des-mutes.webp';
import explosionDesLichts from '../assets/artworks/explosion-des-lichts.webp';
import inselDesInnerenFriedens from '../assets/artworks/insel-des-inneren-friedens.webp';
import rueckkehrZurQuelle from '../assets/artworks/rueckkehr-zur-quelle.webp';
import tempelDerGlueckseligkeit from '../assets/artworks/tempel-der-gluecksseligkeit.webp';
import signedSmall4 from '../assets/artworks/energiebild-signed-15x15-4.webp';
import signedSmall5 from '../assets/artworks/energiebild-signed-15x15-5.webp';

export interface Artwork {
  id: string;
  image: ImageMetadata;
  /** Alternative text describing the painting, per language. */
  alt: Record<Language, string>;
  title?: string;
  year?: string;
  /** e.g. "Acrylic on canvas" / "Acrílico sobre lienzo" */
  medium?: Record<Language, string>;
  /** e.g. "100 × 80 cm" */
  dimensions?: string;
  availability?: 'available' | 'sold' | 'private-collection';
}

export const ARTWORKS: Artwork[] = [
  {
    id: 'explosion-des-lichts',
    image: explosionDesLichts,
    title: 'Explosion des Lichts',
    alt: {
      en: 'Abstract painting in fiery orange and red, the colour bursting outward from a deep red centre',
      es: 'Pintura abstracta en naranja y rojo intensos, con el color estallando desde un centro rojo profundo',
    },
  },
  {
    id: 'engel-des-mutes',
    image: engelDesMutes,
    title: 'Engel des Mutes',
    alt: {
      en: 'Abstract painting of flowing orange, red and cream currents around a dark violet heart',
      es: 'Pintura abstracta de corrientes fluidas naranjas, rojas y crema alrededor de un núcleo violeta oscuro',
    },
  },
  {
    id: 'rueckkehr-zur-quelle',
    image: rueckkehrZurQuelle,
    title: 'Rückkehr zur Quelle',
    alt: {
      en: 'Abstract painting of concentric rings in gold, red and teal spiralling inward like a vortex',
      es: 'Pintura abstracta de anillos concéntricos dorados, rojos y turquesa que giran hacia dentro como un remolino',
    },
  },
  {
    id: 'dein-licht-bricht-hervor',
    image: deinLichtBrichtHervor,
    title: 'Dein Licht bricht hervor',
    alt: {
      en: 'Abstract painting with rivers of yellow, green, violet and coral breaking through a dark core',
      es: 'Pintura abstracta con ríos de amarillo, verde, violeta y coral que atraviesan un centro oscuro',
    },
  },
  {
    id: 'insel-des-inneren-friedens',
    image: inselDesInnerenFriedens,
    title: 'Insel des inneren Friedens',
    alt: {
      en: 'Abstract painting of a golden yellow island shape floating in deep blue',
      es: 'Pintura abstracta de una forma de isla amarillo dorado flotando sobre un azul profundo',
    },
  },
  {
    id: 'tempel-der-gluecksseligkeit',
    image: tempelDerGlueckseligkeit,
    title: 'Tempel der Glückseligkeit',
    alt: {
      en: 'Abstract painting of bright pink, yellow, blue and green colour fields marbling into each other',
      es: 'Pintura abstracta de campos de color rosa, amarillo, azul y verde intensos que se funden como mármol',
    },
  },
  {
    id: 'energiebild-signed-15x15-4',
    image: signedSmall4,
    dimensions: '15 × 15 cm',
    alt: {
      en: 'Small abstract painting of a turquoise and blue sphere swirling on a green ground',
      es: 'Pequeña pintura abstracta de una esfera turquesa y azul girando sobre un fondo verde',
    },
  },
  {
    id: 'energiebild-signed-15x15-5',
    image: signedSmall5,
    dimensions: '15 × 15 cm',
    alt: {
      en: 'Small abstract painting of a white star bursting across black, blue, green and burgundy',
      es: 'Pequeña pintura abstracta de una estrella blanca que estalla sobre negro, azul, verde y burdeos',
    },
  },
];

/** How many example frames to show while ARTWORKS is empty. */
export const EXAMPLE_FRAME_COUNT = { home: 3, gallery: 6 } as const;
