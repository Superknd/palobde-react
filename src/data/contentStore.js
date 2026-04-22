import images from './images';

const PRODUCTS_KEY = 'palobde-products-v1';
const BLOG_KEY = 'palobde-blog-posts-v1';

function safeParse(json, fallback) {
  try {
    const value = JSON.parse(json);
    return value ?? fallback;
  } catch {
    return fallback;
  }
}

function hasWindow() {
  return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
}

export const defaultProducts = [
  {
    id: 1,
    name: 'Kit Journée — Rose Faso',
    sub: '3 serviettes jour · Faso Danfani',
    description: 'Kit complet pour la journée avec 3 serviettes lavables en Faso Danfani.',
    category: 'Serviettes Jour',
    price: 3500,
    stock: 45,
    active: true,
    badge: 'Bestseller',
    color: 'rose',
    image: images.products.kitJour,
  },
  {
    id: 2,
    name: 'Serviette Nuit — Vert Nature',
    sub: 'Protection extra longue',
    description: 'Serviette extra-absorbante pour la nuit. Confortable et durable.',
    category: 'Serviettes Nuit',
    price: 1800,
    stock: 32,
    active: true,
    badge: '',
    color: 'vert',
    image: images.products.kitNuit,
  },
  {
    id: 3,
    name: 'Kit Scolaire — Terre',
    sub: '5 serviettes + sachet',
    description: "Kit adapté aux jeunes filles: 5 serviettes, sachet et guide d'hygiène.",
    category: 'Kits Scolaires',
    price: 4200,
    stock: 28,
    active: true,
    badge: 'Scolaire',
    color: 'terre',
    image: images.products.kitScolaire,
  },
  {
    id: 4,
    name: 'Culotte Menstruelle — Rose',
    sub: 'Double couche',
    description: 'Culotte lavable réutilisable avec double couche absorbante.',
    category: 'Culottes',
    price: 5000,
    stock: 15,
    active: true,
    badge: '',
    color: 'rose',
    image: images.products.culotte,
  },
  {
    id: 6,
    name: 'Sachet Lavable',
    sub: 'Tissu Faso Danfani',
    description: 'Sachet imperméable pour transporter les serviettes en toute discrétion.',
    category: 'Accessoires',
    price: 1500,
    stock: 50,
    active: true,
    badge: '',
    color: 'terre',
    image: images.products.sachet,
  },
];

export const defaultBlogPosts = [
  {
    id: 1,
    title: "L'hygiène menstruelle au Burkina Faso : un défi quotidien",
    excerpt:
      'Découvrez les défis auxquels font face les femmes et jeunes filles au Burkina Faso et les solutions que nous apportons.',
    category: 'Santé',
    date: '2026-04-18',
    readTime: '5 min',
    status: 'Publié',
    views: 245,
    image: images.blog[0],
    content:
      "L'hygiène menstruelle reste un défi majeur pour de nombreuses femmes et jeunes filles au Burkina Faso.\n\n" +
      "Entre l'accès limité aux protections adaptées, le manque d'information et les tabous, les conséquences peuvent être lourdes: absentéisme scolaire, infections, perte de confiance.\n\n" +
      "Chez Palobde Afrique, nous proposons une alternative durable: des serviettes lavables en Faso Danfani, accompagnées d'actions de sensibilisation. Notre objectif: offrir du confort, réduire les déchets, et soutenir l'emploi local.",
  },
  {
    id: 2,
    title: "Guide d'entretien des serviettes lavables en Faso Danfani",
    excerpt:
      'Apprenez à entretenir vos serviettes lavables pour une durée de vie optimale de 15 ans.',
    category: 'Conseils',
    date: '2026-04-15',
    readTime: '3 min',
    status: 'Publié',
    views: 189,
    image: images.blog[1],
    content:
      "Une bonne routine d'entretien prolonge la durée de vie de vos serviettes lavables.\n\n" +
      "1) Rincez à l'eau froide après usage.\n" +
      "2) Lavez à 40°C avec une lessive douce.\n" +
      "3) Évitez l'adoucissant et l'eau de javel.\n" +
      "4) Séchez à l'air libre (idéalement au soleil).\n\n" +
      "Avec ces gestes simples, vos serviettes restent efficaces, confortables et hygiéniques pendant des années.",
  },
  {
    id: 3,
    title: "L'impact de Palobde sur la vie des jeunes filles scolaires",
    excerpt:
      "Témoignages et statistiques sur l'impact de nos programmes de distribution dans les écoles.",
    category: 'Impact',
    date: '2026-04-10',
    readTime: '4 min',
    status: 'Brouillon',
    views: 0,
    image: images.impact[0],
    content:
      "Cet article est en cours de rédaction.\n\n" +
      "Nous y partagerons des témoignages, des chiffres clés, et des retours terrain sur nos actions dans les écoles.",
  },
];

export function loadProducts() {
  if (!hasWindow()) return defaultProducts;
  const raw = window.localStorage.getItem(PRODUCTS_KEY);
  const parsed = raw ? safeParse(raw, null) : null;
  if (Array.isArray(parsed) && parsed.length > 0) return parsed;
  window.localStorage.setItem(PRODUCTS_KEY, JSON.stringify(defaultProducts));
  return defaultProducts;
}

export function saveProducts(products) {
  if (!hasWindow()) return;
  window.localStorage.setItem(PRODUCTS_KEY, JSON.stringify(products));
}

export function loadBlogPosts() {
  if (!hasWindow()) return defaultBlogPosts;
  const raw = window.localStorage.getItem(BLOG_KEY);
  const parsed = raw ? safeParse(raw, null) : null;
  if (Array.isArray(parsed) && parsed.length > 0) return parsed;
  window.localStorage.setItem(BLOG_KEY, JSON.stringify(defaultBlogPosts));
  return defaultBlogPosts;
}

export function saveBlogPosts(posts) {
  if (!hasWindow()) return;
  window.localStorage.setItem(BLOG_KEY, JSON.stringify(posts));
}

export async function fileToDataUrl(file) {
  if (!file) return null;
  return await new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

