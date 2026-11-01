export type Product = {
  title: string;
  description: string;
  benefits: string;
  bestFor: string;
  howToUse: string;
  cta: string;
  href: string;
  image: string;
  imageAlt: string;
  category: "Oils" | "Soaps & Cleansers" | "Clays & Masks" | "Waters & Toners" | "Powders";
};

export const products: Product[] = [
  {
    title: "Organic Argan Oil — Liquid Gold for Skin & Hair",
    description:
      "Organic argan oil is one of the most prized botanical oils in the world. Rich in vitamin E, antioxidants, and essential fatty acids, it deeply nourishes skin, strengthens hair, and helps restore natural moisture balance.",
    benefits: "Deep hydration, skin protection, anti aging support",
    bestFor: "Dry skin, split ends, dull complexion",
    howToUse: "Apply a few drops to clean skin or hair ends daily",
    cta: "Explore Argan Oil",
    href: "https://www.moroccanorganica.com/",
    image: "/image/liquid-gold-argan-oil.webp",
    imageAlt: "Organic Moroccan argan oil bottle — liquid gold for skin and hair",
    category: "Oils",
  },
  {
    title: "Food‑Grade Argan Oil",
    description:
      "Premium culinary argan oil rich in essential fatty acids and vitamin E. Ethically sourced from Moroccan cooperatives for wellness and gourmet use.",
    benefits: "Rich in essential fatty acids and vitamin E",
    bestFor: "Culinary use, wellness, heart health support",
    howToUse: "Consume in moderation as part of a healthy diet",
    cta: "Shop Food-Grade Argan Oil",
    href: "https://www.moroccanorganica.com/",
    image: "/image/culinary-argan-oil-bulk.webp",
    imageAlt: "Food-grade Moroccan argan oil bulk supply",
    category: "Oils",
  },
  {
    title: "Prickly Pear Seed Oil — Premium Anti Aging Elixir",
    description:
      "Prickly pear seed oil is one of the richest plant sources of vitamin E and antioxidants. Lightweight yet potent, it supports skin regeneration, improves elasticity, and smooths fine lines.",
    benefits: "Anti aging, rejuvenating, fast absorption",
    bestFor: "Mature and dry skin",
    howToUse: "Add a few drops to your nighttime routine",
    cta: "View Prickly Pear Oil",
    href: "https://www.moroccanorganica.com/",
    image: "/image/organic-prickly-pear-seed-oil-elixir.webp",
    imageAlt: "Premium Moroccan prickly pear seed oil anti-aging elixir",
    category: "Oils",
  },
  {
    title: "Organic Jojoba Oil",
    description:
      "Lightweight jojoba oil mimics the skin's natural sebum. Ideal for balancing oil production while delivering deep, non-greasy hydration.",
    benefits: "Balances sebum, moisturizes, soothes irritation",
    bestFor: "All skin types, sensitive and acne-prone skin",
    howToUse: "Apply a few drops to face or mix into your daily moisturizer",
    cta: "Discover Jojoba Oil",
    href: "https://www.moroccanorganica.com/",
    image: "/image/organic-jojoba-oil.webp",
    imageAlt: "Organic Moroccan jojoba oil for skin and hair",
    category: "Oils",
  },
  {
    title: "Moroccan Black Soap — Traditional Cleansing Ritual",
    description:
      "Moroccan black soap, also called Beldi Soap, is a natural exfoliant made from crushed olives and enriched with minerals. It gently removes dead skin cells while cleansing impurities.",
    benefits: "Deep cleansing, exfoliation, improved texture",
    bestFor: "All skin types, especially rough or congested skin",
    howToUse: "Apply in the shower with a glove or exfoliating cloth",
    cta: "Shop Black Soap",
    href: "https://www.moroccanorganica.com/",
    image: "/image/traditional-black-soap.webp",
    imageAlt: "Traditional Moroccan black soap for hammam exfoliation",
    category: "Soaps & Cleansers",
  },
  {
    title: "Beldi Soap with Olive Oil",
    description:
      "Authentic beldi soap enriched with pure olive oil for a luxurious hammam experience. Deeply cleanses while leaving skin velvety soft.",
    benefits: "Gentle cleansing, nourishment, softening",
    bestFor: "Normal to dry skin, hammam rituals",
    howToUse: "Massage onto damp skin with a kessa glove, then rinse",
    cta: "Shop Beldi Soap",
    href: "https://www.moroccanorganica.com/",
    image: "/image/beldi-soap-olive-oil.webp",
    imageAlt: "Moroccan beldi soap with olive oil",
    category: "Soaps & Cleansers",
  },
  {
    title: "Rose Water — Pure Hydration & Rejuvenation",
    description:
      "Distilled from Moroccan roses, our rose water offers soothing hydration, calming properties, and a refreshing aroma. Perfect as a gentle toner, facial mist, or makeup setter.",
    benefits: "Calms irritation, refines pores, adds radiance",
    bestFor: "Sensitive and normal skin",
    howToUse: "Mist over face after cleansing or anytime for refreshment",
    cta: "Discover Rose Water",
    href: "https://www.moroccanorganica.com/",
    image: "/image/pure-natural-rose-water.webp",
    imageAlt: "Pure natural Moroccan rose water toner and facial mist",
    category: "Waters & Toners",
  },
  {
    title: "Ghassoul Clay — Mineral Rich Purifying Clay",
    description:
      "Sourced from the Atlas Mountains, ghassoul clay is a natural detoxifier that absorbs excess oils, draws out impurities, and revitalizes skin.",
    benefits: "Detoxifies, cleanses, tightens pores",
    bestFor: "Oily / combination skin",
    howToUse: "Mix with water or rose water into a paste, apply for 10–15 minutes",
    cta: "Try Ghassoul Clay",
    href: "https://www.moroccanorganica.com/",
    image: "/image/moroccan-ghassoul-clay-powder.webp",
    imageAlt: "Mineral-rich Moroccan ghassoul clay from the Atlas Mountains",
    category: "Clays & Masks",
  },
  {
    title: "Rhassoul Rose Face Mask",
    description:
      "A ready-to-use blend of rhassoul clay and rose for a spa-quality facial treatment. Purifies pores while delivering soothing hydration.",
    benefits: "Purifies, hydrates, brightens complexion",
    bestFor: "Combination and dull skin",
    howToUse: "Apply evenly to clean face, leave 10–15 minutes, rinse",
    cta: "Shop Rose Face Mask",
    href: "https://www.moroccanorganica.com/",
    image: "/image/rhassoul-rose-face-mask.webp",
    imageAlt: "Moroccan rhassoul clay and rose face mask",
    category: "Clays & Masks",
  },
  {
    title: "Nila Powder / Mask",
    description:
      "Traditional Moroccan nila powder brightens skin tone naturally while detoxifying and restoring a soft, radiant glow.",
    benefits: "Brightens skin tone, detoxifies, exfoliates",
    bestFor: "Dull or uneven skin tone",
    howToUse: "Mix with rose water into a paste, apply for 10–15 minutes",
    cta: "Shop Nila Powder",
    href: "https://www.moroccanorganica.com/",
    image: "/image/moroccan-blue-nila-raw-powder.webp",
    imageAlt: "Moroccan nila powder for brightening face mask",
    category: "Powders",
  },
  {
    title: "Aker Fassi Powder / Mask",
    description:
      "Traditional Moroccan beauty mask made from poppy and pomegranate. Reduces redness and supports hydration and natural radiance.",
    benefits: "Reduces redness, hydrates, adds radiance",
    bestFor: "Sensitive and irritated skin",
    howToUse: "Blend with rose water, apply as a mask for 10–15 minutes",
    cta: "Shop Aker Fassi",
    href: "https://www.moroccanorganica.com/",
    image: "/image/aker-fassi-powder.webp",
    imageAlt: "Moroccan aker fassi powder beauty mask",
    category: "Powders",
  },
  {
    title: "Tbrima Powder",
    description:
      "Gently exfoliates and renews skin, enhancing smoothness and clarity. Perfect for spa treatments or at-home masks.",
    benefits: "Gentle exfoliation, smoothness, clarity",
    bestFor: "Rough or congested skin",
    howToUse: "Mix with water or rose water, apply as a weekly mask",
    cta: "Shop Tbrima Powder",
    href: "https://www.moroccanorganica.com/",
    image: "/image/moroccan-tabrima-herbal-powder.webp",
    imageAlt: "Moroccan tbrima powder for skin exfoliation",
    category: "Powders",
  },
  {
    title: "Sidr Powder",
    description:
      "Natural sidr powder strengthens hair and supports scalp health. Also used as a gentle cleanser for skin and hair.",
    benefits: "Strengthens hair, scalp health, natural cleansing",
    bestFor: "Hair care, scalp treatments",
    howToUse: "Mix with water into a paste for hair or skin application",
    cta: "Shop Sidr Powder",
    href: "https://www.moroccanorganica.com/",
    image: "/image/moroccan-sidr-leaf-powder.webp",
    imageAlt: "Moroccan sidr powder for hair and scalp care",
    category: "Powders",
  },
];

export const productCategories = [
  "All",
  "Oils",
  "Soaps & Cleansers",
  "Waters & Toners",
  "Clays & Masks",
  "Powders",
] as const;

export type ProductCategory = (typeof productCategories)[number];

export const featuredProducts = products.slice(0, 6);
