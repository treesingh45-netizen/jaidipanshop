import { IMAGES } from './assets';

export interface GalleryItem {
  id: string;
  title: string;
  category: 'drinks' | 'desserts' | 'savories' | 'atmosphere';
  categoryLabel: string;
  image: string;
  aspect: 'square' | 'portrait' | 'landscape';
  description: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Signature Mango Shake & Ruby Falsa',
    category: 'drinks',
    categoryLabel: 'Drinks & Juices',
    image: IMAGES.mangoShake,
    aspect: 'landscape',
    description: 'Chilled freshly blended mangoes and wild summer falsa berries served in cold crystal glassware.',
  },
  {
    id: 'g-2',
    title: 'Lahore Royal Falooda Tower',
    category: 'desserts',
    categoryLabel: 'Desserts & Falooda',
    image: IMAGES.falooda,
    aspect: 'portrait',
    description: 'Artisanal rabri, delicate vermicelli, fragrant rose syrup, and authentic pistachio kulfi.',
  },
  {
    id: 'g-3',
    title: 'Handcrafted Gol Gappay & Mint Chutney',
    category: 'savories',
    categoryLabel: 'Savories & Chaat',
    image: IMAGES.savory,
    aspect: 'square',
    description: 'Crisp golden puri spheres filled with spiced chickpeas, potatoes, and iced sweet tamarind water.',
  },
  {
    id: 'g-4',
    title: 'Cold-Pressed Pomegranate & Mint Cooler',
    category: 'drinks',
    categoryLabel: 'Drinks & Juices',
    image: IMAGES.pomegranateJuice,
    aspect: 'portrait',
    description: 'Antioxidant-rich ruby pomegranate extracted fresh to order alongside citrus mint sparklers.',
  },
  {
    id: 'g-5',
    title: 'Jaidi Evening Terrace Vibe in DHA Phase 4',
    category: 'atmosphere',
    categoryLabel: 'Atmosphere & Lifestyle',
    image: IMAGES.atmosphere,
    aspect: 'landscape',
    description: 'The bustling, warm social gathering spot in Sector CCA where friends and families meet till late night.',
  },
  {
    id: 'g-6',
    title: 'Shahi Kulfi on Silver Platter',
    category: 'desserts',
    categoryLabel: 'Desserts & Falooda',
    image: IMAGES.falooda,
    aspect: 'square',
    description: 'Traditional slow-reduced milk kulfi infused with green cardamom and slivered almonds.',
  },
  {
    id: 'g-7',
    title: 'Lahori Spiced Fruit Chaat Bowl',
    category: 'savories',
    categoryLabel: 'Savories & Chaat',
    image: IMAGES.savory,
    aspect: 'portrait',
    description: 'Finely sliced crisp orchard fruits tossed in our signature house chaat masala and lemon glaze.',
  },
  {
    id: 'g-8',
    title: 'Pure Wild Falsa Elixir',
    category: 'drinks',
    categoryLabel: 'Drinks & Juices',
    image: IMAGES.falsaJuice,
    aspect: 'landscape',
    description: 'Seasonal wild dark berries crushed with ice, black pepper, and Himalayan rock salt.',
  },
];
