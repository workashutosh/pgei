import raw from './products.json';

export const products = raw.map((p) => ({ ...p }));
const byKey = Object.fromEntries(products.map((p) => [p.slug, p]));

// The original site shows the "Aramid" and "Aramid with ePTFE" descriptions under each other's
// name (the photographs are right: plain yellow braid vs. braid with a white ePTFE core).
// Put the text back with the matching product.
{
  const a = byKey['Aramid'];
  const b = byKey['Aramid-with-ePTFE'];
  [a.title, b.title] = [b.title, a.title];
  [a.pairs, b.pairs] = [b.pairs, a.pairs];
}

export const productImage = (p) => `products/${p.url}.webp`;

export const FAMILIES = [
  { slug: 'tesnit', title: 'Tesnit' },
  { slug: 'doniflon', title: 'Doniflon' },
  { slug: 'grafilit', title: 'Grafilit' },
  { slug: 'micalit', title: 'Micalit' },
  { slug: 'doniflex', title: 'Doniflex' },
];

export const SEAL_GROUPS = ['Semi Metallic and Metallic Gaskets', 'Gland Packing', 'Sealing Solutions'];

export const HUBS = {
  sealings: {
    title: 'Sealings',
    heading: 'Sealings Products',
    banner: 'banners/products.webp',
    alt: 'Cylinder-head gasket laid over an engine block',
    seo: [
      'Industrial Sealing Products | EPTFE | Non Asbestos Gasket',
      'PGE Industries is a Manufacturer of Industrial Sealing Products. We specialize in PTFE, Rubber, Non-Asbestos Gaskets, and Gland Packing.',
    ],
  },
  insulations: {
    title: 'Insulations',
    heading: 'Insulations Products',
    banner: 'banners/products.webp',
    alt: 'Cylinder-head gasket laid over an engine block',
    seo: [
      'Insulation Products | Insulation sheets',
      'PGE Industries Pvt Ltd manufacturer and supplier of Insulation Products like ceramic, fiberglass, silica cloth, welding, and Insulation sheets.',
    ],
  },
  miscellaneous: {
    title: 'Miscellaneous',
    heading: 'Miscellaneous Product',
    banner: 'banners/products.webp',
    alt: 'Cylinder-head gasket laid over an engine block',
    seo: [
      'Donit Gasket | Expanded PTFE',
      'PGE Industries Pvt Ltd is a leading manufacturer of Industrial Miscellaneous Products. We manufacture all types of EPTFE, Donit (Doniflon).',
    ],
  },
};

export const slugOfGroup = (g) => g.toLowerCase().replace(/\s+/g, '-');
export const inFamily = (title) => products.filter((p) => p.family === title);
export const inCategory = (c) => products.filter((p) => p.category === c);
export const findProduct = (url) => products.find((p) => p.url === url);
export const findFamily = (slug) => FAMILIES.find((f) => f.slug === slug);
export const familyCover = (title) => inFamily(title)[0];

/** Neighbours within the same listing (same group/sub-group), wrapping around. */
export function neighbours(p) {
  const list = products.filter(
    (q) => q.category === p.category && q.family === p.family && q.group === p.group && q.sub === p.sub,
  );
  const i = list.indexOf(p);
  return { prev: list[(i - 1 + list.length) % list.length], next: list[(i + 1) % list.length] };
}
