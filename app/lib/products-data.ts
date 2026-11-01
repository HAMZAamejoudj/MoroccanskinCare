export interface ProductSpecification {
  inci: string;
  botanicalName: string;
  casNumber: string;
  extraction: string;
  origin: string;
  grade: string;
  certifications: string;
  shelfLife: string;
  appearance: string;
}

export interface LocalizedProductSpecs {
  extraction: string;
  origin: string;
  grade: string;
  certifications: string;
  shelfLife: string;
  appearance: string;
}

export interface ProductLocalizedContent {
  title: string;
  metaTitle: string;
  metaDescription: string;
  badge: string;
  subtitle: string;
  lead: string;
  overview: string;
  moq?: string;
  shortExtraction?: string;
  shortOrigin?: string;
  specs?: LocalizedProductSpecs;
  benefits: { title: string; description: string }[];
  applications: string[];
  packagingOptions: { title: string; description: string; moq?: string }[];
  faq: { q: string; a: string }[];
}

export interface ProductData {
  slug: string;
  category: string;
  image: string;
  gallery: string[];
  bestFor: string;
  formats: string;
  moq: string;
  specs: ProductSpecification;
  en: ProductLocalizedContent;
  fr: ProductLocalizedContent;
  ar: ProductLocalizedContent;
}

export const PRODUCTS_DATA: ProductData[] = [
  {
    "slug": "organic-argan-oil",
    "category": "oils",
    "image": "/image/organic-argan-oil-bulk-drums.webp",
    "gallery": [
      "/image/organic-argan-oil-bulk-drums.webp",
      "/image/organic-argan-oil-jerrycan-5l.webp",
      "/image/organic-argan-oil-jerrycan-25l.webp",
      "/image/liquid-gold-argan-oil.webp"
    ],
    "bestFor": "Anti-aging skincare, premium hair serums, luxury massage blends, soap & cosmetic manufacturing",
    "formats": "1L, 5L, 25L HDPE jerrycans, 200L drums, 1,000L IBC, custom private label retail bottles (30ml, 50ml, 100ml)",
    "moq": "5 Liters (Bulk) / 50 Units (Private Label)",
    "specs": {
      "inci": "Argania Spinosa Kernel Oil",
      "botanicalName": "Argania spinosa (L.) Skeels",
      "casNumber": "223747-87-3",
      "extraction": "First cold-pressed, extra virgin, unrefined mechanically extracted without solvents",
      "origin": "Souss-Massa & Essaouira UNESCO Biosphere Reserve, Morocco",
      "grade": "100% Pure & Organic Grade A Cosmetic",
      "certifications": "ECOCERT COSMOS Organic, USDA NOP Organic, ISO 22716 GMP, Halal Certified",
      "shelfLife": "24 months when stored in cool, dark place away from direct sunlight",
      "appearance": "Clear golden amber liquid with delicate, characteristic raw nutty aroma"
    },
    "en": {
      "title": "Pure Organic Argan Oil Bulk (Liquid Gold)",
      "metaTitle": "Organic Moroccan Argan Oil Bulk | Private Label Supplier",
      "metaDescription": "Direct manufacturer of 100% pure cold-pressed organic Moroccan Argan Oil in bulk and private label OEM. ECOCERT & USDA certified.",
      "badge": "100% Certified Organic • Liquid Gold • Direct Cooperative Sourcing",
      "subtitle": "Extra Virgin Cold-Pressed Moroccan Argania Spinosa Kernel Oil",
      "lead": "Source certified organic Moroccan Argan Oil directly from the UNESCO biosphere reserve of southwestern Morocco. Cold-pressed within hours of harvest to preserve maximum Vitamin E, polyphenols, and oleic-linoleic fatty acids.",
      "overview": "Our pure organic Moroccan Argan Oil is renowned worldwide as 'Liquid Gold'. Harvested by local women's cooperatives in the Souss-Massa region, the kernels are hand-selected and cold-pressed under strict ISO 22716 GMP conditions without chemicals, high heat, or synthetic deodorization. This preserves the oil's potent natural bioactive compounds, including gamma-tocopherol, squalene, and sterols. Ideal for luxury cosmetic brands, anti-aging skin formulations, professional hair salons, and high-end spa therapies.",
      "benefits": [
        {
          "title": "Deep Cellular Hydration",
          "description": "High concentration of linoleic (Omega-6) and oleic (Omega-9) fatty acids strengthens the epidermal lipid barrier and locks in long-lasting moisture."
        },
        {
          "title": "Anti-Aging & Free Radical Defense",
          "description": "Abundant Vitamin E (over 600 mg/kg) and ferulic acid neutralize free radicals, visibly diminishing fine lines and improving skin elasticity."
        },
        {
          "title": "Hair Cuticle Repair & Luster",
          "description": "Penetrates the hair shaft to tame frizz, heal split ends, and impart a silky brilliant shine without greasy residue."
        },
        {
          "title": "Sebum Regulating & Non-Comedogenic",
          "description": "With a comedogenic rating of 0, it balances natural sebum production, soothing acne-prone and inflamed skin."
        },
        {
          "title": "Stretch Mark & Scar Attenuation",
          "description": "Stimulates natural collagen and elastin renewal, accelerating tissue regeneration across sensitive skin."
        }
      ],
      "applications": [
        "Anti-aging facial oils and day/night moisturizers",
        "High-performance hair serums, beard oils, and scalp elixirs",
        "Luxury body lotions, stretch mark oils, and massage therapies",
        "Cold-process soap making and premium cosmetic formulations"
      ],
      "packagingOptions": [
        {
          "title": "Bulk HDPE Jerrycans (5L & 25L)",
          "description": "Food-grade, tamper-evident UN-certified containers ideal for cosmetic formulators and small-batch manufacturers.",
          "moq": "5 Liters"
        },
        {
          "title": "Industrial Drums (200L) & IBC (1000L)",
          "description": "Heavy-duty steel or plastic drums with nitrogen blanket flushing for international sea/air freight.",
          "moq": "200 Liters"
        },
        {
          "title": "Custom Private Label (30ml, 50ml, 100ml)",
          "description": "Luxury amber or frosted glass dropper bottles with silk-screen printing, metallic foil labels, and custom boxes.",
          "moq": "50 Units"
        }
      ],
      "faq": [
        {
          "q": "Do you provide Certificate of Analysis (COA) and MSDS for every batch?",
          "a": "Yes. Every shipment includes a lot-specific Certificate of Analysis detailing fatty acid profiles, peroxide value, acidity, and microbiology tests, alongside complete MSDS and technical data sheets."
        },
        {
          "q": "Can you handle custom bottling and label printing?",
          "a": "Absolutely. We offer complete OEM turnkey solutions including bottle sourcing (droppers, pumps, mists), label design compliance, box packaging, and batch coding."
        },
        {
          "q": "What is the delivery timeline for bulk orders?",
          "a": "Bulk orders up to 500kg ship within 2-4 business days via DHL/FedEx Express (3-5 days delivery worldwide). Larger cargo orders ship via air or ocean freight according to agreed incoterms (FOB, CIF, DDP)."
        }
      ],
      "moq": "5 Liters (Bulk) / 50 Units (OEM)",
      "shortExtraction": "First cold-pressed extra virgin",
      "shortOrigin": "Souss & Essaouira, Morocco",
      "specs": {
        "extraction": "First cold-pressed, extra virgin, unrefined mechanically extracted without solvents",
        "origin": "Souss-Massa & Essaouira UNESCO Biosphere Reserve, Morocco",
        "grade": "100% Pure & Organic Grade A Cosmetic",
        "certifications": "ECOCERT COSMOS Organic, USDA NOP Organic, ISO 22716 GMP, Halal Certified",
        "shelfLife": "24 months when stored in cool, dark place away from direct sunlight",
        "appearance": "Clear golden amber liquid with delicate, characteristic raw nutty aroma"
      }
    },
    "fr": {
      "title": "Huile d'Argan Biologique Pure en Vrac (Or Liquide)",
      "metaTitle": "Huile d'Argan Bio du Maroc en Vrac | Marque Blanche",
      "metaDescription": "Fabricant direct d'huile d'argan bio pure du Maroc pressée à froid. Vente en gros et marque blanche cosmétique. Certifiée ECOCERT & USDA.",
      "badge": "100% Biologique Certifiée • Or Liquide • Coopératives Féminines",
      "subtitle": "Huile d'Argania Spinosa Extra Vierge Pressée à Froid",
      "lead": "Approvisionnez-vous en huile d'argan marocaine certifiée biologique directement depuis la réserve de biosphère de l'UNESCO. Pressée à froid mécaniquement pour préserver toute sa richesse en vitamine E et acides gras essentiels.",
      "overview": "Surnommée l'Or Liquide du Maroc, notre huile d'argan biologique pure est issue d'une récolte éthique au sein de coopératives féminines du Souss-Massa. Les amandons sont rigoureusement sélectionnés puis pressés à froid selon les normes ISO 22716 BPF, sans aucun solvant ni désodorisation thermique. Elle conserve l'intégralité de ses tocophérols, squalène et stérols pour nourrir intensément la peau et fortifier les cheveux.",
      "benefits": [
        {
          "title": "Hydratation Cellulaire Intense",
          "description": "Riche en acides gras oméga-6 et oméga-9, elle restructure la barrière cutanée et prévient la déshydratation."
        },
        {
          "title": "Puissant Anti-Âge Naturel",
          "description": "Sa haute teneur en vitamine E neutralise les radicaux libres et atténue visiblement les ridules et la perte de fermeté."
        },
        {
          "title": "Soin Capillaire Régénérant",
          "description": "Gaine la fibre capillaire, scelle les pointes fourchues et apporte brillance et souplesse sans alourdir."
        },
        {
          "title": "Équilibrante & Non-Comédogène",
          "description": "Indice de comédogénicité zéro, elle régule le sébum tout en apaisant les peaux sensibles et à imperfections."
        }
      ],
      "applications": [
        "Sérums faciaux anti-âge et crèmes de soin",
        "Huiles capillaires, élixirs de barbe et masques nutritifs",
        "Soins pour le corps, huiles de massage et prévention des vergetures",
        "Formulation cosmétique industrielle et savonnerie artisanale"
      ],
      "packagingOptions": [
        {
          "title": "Bidons PEHD Vrac (5L & 25L)",
          "description": "Contenants homologués qualité alimentaire pour laboratoires et formulateurs.",
          "moq": "5 Litres"
        },
        {
          "title": "Fûts Industriels (200L) & IBC (1000L)",
          "description": "Conditionnement professionnel sous azote pour fret aérien ou maritime.",
          "moq": "200 Litres"
        },
        {
          "title": "Marque Blanche Prête à Vendre (30ml à 100ml)",
          "description": "Flacons verre ambré ou dépoli avec pipette compte-gouttes, étiquetage personnalisé et étuis.",
          "moq": "50 Unités"
        }
      ],
      "faq": [
        {
          "q": "Fournissez-vous les analyses de laboratoire (CoA et FDS) ?",
          "a": "Oui, chaque lot expédié s'accompagne d'un certificat d'analyse complet (profil lipidique, acidité, indice de peroxyde) ainsi que de la fiche de données de sécurité."
        },
        {
          "q": "Proposez-vous le conditionnement complet sous notre propre marque ?",
          "a": "Tout à fait. Nous prenons en charge la totalité du processus OEM : choix du flaconnage, sérigraphie, conception graphique des étiquettes et mise en boîte."
        },
        {
          "q": "Quels sont les délais d'expédition internationale ?",
          "a": "Les commandes jusqu'à 500 kg sont expédiées sous 48 à 72h via DHL/FedEx Express (3 à 5 jours ouvrés). Les volumes plus importants font l'objet d'un fret sur mesure."
        }
      ],
      "moq": "Dès 5 Litres (Vrac) / 50 Unités (OEM)",
      "shortExtraction": "1ère pression à froid extra vierge",
      "shortOrigin": "Souss & Essaouira, Maroc",
      "specs": {
        "extraction": "Première pression à froid mécanique, extra vierge, non raffinée sans solvants",
        "origin": "Réserve de biosphère UNESCO du Souss-Massa et Essaouira, Maroc",
        "grade": "100% Pure & Biologique Grade A Cosmétique",
        "certifications": "ECOCERT COSMOS Organic, USDA NOP Organic, ISO 22716 BPF, Certifié Halal",
        "shelfLife": "24 mois dans un endroit frais et sec à l'abri de la lumière",
        "appearance": "Huile limpide jaune doré ambré avec arôme subtil de noisette fraîche"
      }
    },
    "ar": {
      "title": "زيت الأركان العضوي النقي بالجملة (الذهب السائل)",
      "metaTitle": "زيت الأركان المغربي العضوي بالجملة والعلامة التجارية",
      "metaDescription": "المصنع المباشر لزيت الأركان المغربي العضوي النقي 100% المعصور على البارد بالجملة وللعلامات التجارية الخاصة. شهادات ECOCERT و USDA.",
      "badge": "عضوي معتمد 100% • الذهب السائل • تعاونيات نسائية مغربية",
      "subtitle": "زيت لوز الأركان المغربي البكر الممتاز المعصور على البارد",
      "lead": "احصل على زيت الأركان المغربي العضوي الأصلي مباشرة من محمية المحيط الحيوي لليونسكو في سوس ماسة. معصور على البارد بطرق ميكانيكية تحافظ على كامل فيتامين E والأحماض الدهنية الأساسية.",
      "overview": "يُعرف زيت الأركان المغربي بـ 'الذهب السائل' لخصائصه العلاجية والتجميلية الاستثنائية. يتم جني الثمار وانتقاء اللوز بعناية فائقة داخل تعاونيات نسائية تقليدية، ثم عصره على البارد وفق معايير ممارسات التصنيع الجيد ISO 22716 دون استعمال أي مذيبات كيميائية أو حرارة مفرطة. غني بمضادات الأكسدة ومثالي للشركات التجميلية، مراكز السبا الفاخرة، ومستحضرات مكافحة الشيخوخة.",
      "benefits": [
        {
          "title": "ترطيب عميق وتجديد الخلايا",
          "description": "غني بأوميغا 6 وأوميغا 9 لترميم حاجز البشرة الواقي وحبس الرطوبة لفترات طويلة."
        },
        {
          "title": "مقاومة علامات التقدم في السن",
          "description": "يحتوي على نسب مرتفعة من فيتامين E لمكافحة الجذور الحرة واستعادة مرونة وشباب الجلد."
        },
        {
          "title": "إصلاح الشعر وإضفاء لمعان حريري",
          "description": "يغذي بصيلات الشعر ويقضي على التقصف ويمنح الشعر بريقاً ناعماً دون ترك أي أثر دهني."
        },
        {
          "title": "موازنة الإفرازات الدهنية للبشرة",
          "description": "مناسب لجميع أنواع البشرة ولا يسد المسام (Comedogenic Rating 0)، مما يجعله مثالياً للبشرة الحساسة."
        }
      ],
      "applications": [
        "سيرومات الوجه المضادة للشيخوخة وزيوت العناية الليلية",
        "منتجات العناية بالشعر وزيوت اللحية الفاخرة",
        "زيوت المساج والتدليك الفندقية وعلاجات علامات التمدد",
        "تصنيع الصابون الطبيعي والمستحضرات التجميلية المتطورة"
      ],
      "packagingOptions": [
        {
          "title": "جالونات البولي إيثيلين (5 لتر و 25 لتر)",
          "description": "عبوات غذائية محكمة الإغلاق ومطابقة للمواصفات التصديرية للمصانع والمختبرات.",
          "moq": "5 لتر"
        },
        {
          "title": "براميل صناعية (200 لتر) وخزانات (1000 لتر)",
          "description": "براميل فولاذية أو بلاستيكية معبأة تحت غاز النيتروجين للشحن البحري والجوي الدولي.",
          "moq": "200 لتر"
        },
        {
          "title": "علامة تجارية خاصة جاهزة للبيع (30 مل إلى 100 مل)",
          "description": "قوارير زجاجية بنية أو غير لامعة مع قطارات، طباعة حرارية للشعار، وتغليف كرتوني أنيق.",
          "moq": "50 قطعة"
        }
      ],
      "faq": [
        {
          "q": "هل تقدمون شهادات التحليل المخبري (COA) وبطاقة بيانات السلامة (MSDS)؟",
          "a": "نعم، كل شحنة تصدر معها شهادة تحليل مخبري خاصة برقم الدفعة توضح نسبة الحموضة، معامل البيروكسيد، والمواصفات الميكروبيولوجية."
        },
        {
          "q": "هل تتيحون خدمة التعبئة والتغليف باسم علامتي التجارية الخاصة؟",
          "a": "بالتأكيد، نوفر حلول OEM متكاملة تشمل اختيار العبوات، تصميم الملصقات، الطباعة، ووضع الباركود والكراتين الخارجية."
        },
        {
          "q": "ما هي المدة الزمنية المستغرقة للشحن والتوصيل الدولي؟",
          "a": "الطلبات حتى 500 كغ تُشحن خلال 2-4 أيام عمل عبر DHL أو FedEx Express وتصل إلى وجهتكم في 3-5 أيام حول العالم."
        }
      ],
      "moq": "ابتداءً من 5 لتر (جملة) / 50 عبوة (OEM)",
      "shortExtraction": "عصر أول بكر ممتاز على البارد",
      "shortOrigin": "سوس والصويرة، المغرب",
      "specs": {
        "extraction": "عصر ميكانيكي أول على البارد، بكر ممتاز، غير مكرر وخالٍ من أي مذيبات كيميائية",
        "origin": "محمية المحيط الحيوي لليونسكو بسوس ماسة والصويرة، المغرب",
        "grade": "نقي وعضوي 100% درجة أولى تجميلية",
        "certifications": "إيكوسيرت العضوية، وزارة الزراعة الأمريكية، ISO 22716 للممارسات الجيدة، حلال",
        "shelfLife": "24 شهراً عند الحفظ في مكان بارد وجاف بعيداً عن أشعة الشمس المباشرة",
        "appearance": "سائل عنبري ذهبي صافٍ برائحة جوزية طبيعية خفيفة ومميزة"
      }
    }
  },
  {
    "slug": "moroccan-black-soap",
    "category": "hammam",
    "image": "/image/moroccan-black-soap-beldi-paste.webp",
    "gallery": [
      "/image/moroccan-black-soap-beldi-paste.webp",
      "/image/moroccan-black-soap-argan-25kg.webp",
      "/image/moroccan-black-soap-eucalyptus-25kg.webp",
      "/image/traditional-black-soap.webp"
    ],
    "bestFor": "Hammam spa rituals, deep exfoliating body treatments, professional esthetics, private label bath collections",
    "formats": "1kg, 5kg, 25kg bulk buckets, custom branded cosmetic jars (200g, 250g, 500g)",
    "moq": "10 kg (Bulk) / 50 Jars (Private Label)",
    "specs": {
      "inci": "Olea Europaea Fruit Oil, Potassium Hydroxide, Aqua, Argania Spinosa Kernel Oil / Eucalyptus Globulus Leaf Oil",
      "botanicalName": "Olea europaea saponified paste",
      "casNumber": "8001-25-0",
      "extraction": "Traditional Moroccan saponification of olive oil pulp and crushed black olives",
      "origin": "Marrakesh & Fez, Morocco",
      "grade": "100% Natural Traditional Spa Grade",
      "certifications": "ISO 22716 GMP Compliant, COA & MSDS Laboratory Tested, 100% Biodegradable",
      "shelfLife": "24 months in a tightly closed container away from water and humidity",
      "appearance": "Rich, dark amber to black gelatinous botanical paste with authentic natural olive aroma"
    },
    "en": {
      "title": "Moroccan Black Soap (Savon Beldi) Wholesale",
      "metaTitle": "Moroccan Black Soap Wholesale | Authentic Savon Beldi",
      "metaDescription": "Direct wholesale manufacturer of authentic Moroccan Black Soap (Savon Beldi). Infused with organic olive oil and argan. Ideal for luxury hammams,",
      "badge": "100% Natural • Authentic Hammam Ritual • Spa Grade",
      "subtitle": "Traditional Moroccan Olive Oil & Crushed Olive Exfoliating Paste",
      "lead": "Experience the crown jewel of Moroccan bathing culture. Our Savon Beldi is crafted using age-old ancestral cold saponification of pure Moroccan olive oil and macerated olives, enriched with Eucalyptus or Argan oil.",
      "overview": "Moroccan Black Soap (Savon Beldi) is a 100% natural, vegetable-based exfoliating paste that has anchored Moroccan bath rituals for centuries. Naturally rich in Vitamin E, it deeply softens the skin, expands pores, and dissolves dead epidermal cells without stripping the skin's moisture barrier. When paired with the traditional Kessa glove, it effortlessly rolls away dead skin, leaving the body incomparably silky and renewed. We supply premium spas, luxury bath brands, and distributors globally with plain, eucalyptus-infused, or argan-boosted formulations.",
      "benefits": [
        {
          "title": "Unrivaled Body Exfoliation",
          "description": "Softens keratinized skin cells, allowing effortless shedding of impurities and dead skin during hammam rituals."
        },
        {
          "title": "Rich in Olive Vitamin E",
          "description": "Naturally delivers high doses of Vitamin E and polyphenol antioxidants to calm and nourish dry, stressed skin."
        },
        {
          "title": "Deep Pore Detoxification",
          "description": "Draws out environmental pollutants, cleanses congested pores, and promotes lymphatic microcirculation."
        },
        {
          "title": "Velvety Skin Softening",
          "description": "Leaves the body extraordinarily smooth, silky, and prepared for body oils and hydrating elixirs."
        }
      ],
      "applications": [
        "Professional hammam and luxury spa body exfoliation rituals",
        "Home spa bath and shower exfoliating pastes",
        "Pre-waxing and pre-tan skin preparation treatments",
        "Custom private label bath and body care lines"
      ],
      "packagingOptions": [
        {
          "title": "Bulk Buckets (5kg & 25kg)",
          "description": "Heavy-duty airtight plastic buckets with secure lid seals for spas, wellness resorts, and packaging plants.",
          "moq": "10 kg"
        },
        {
          "title": "Custom Retail Cosmetic Jars (200g - 500g)",
          "description": "Amber, clear, or matte black jars with luxury aluminum lids, waterproof foil labels, and outer boxes.",
          "moq": "50 Jars"
        },
        {
          "title": "Custom Formulations (Eucalyptus, Argan, Rose)",
          "description": "Tailored aroma profiles using pure essential oils according to your brand specification.",
          "moq": "50 kg / 100 Jars"
        }
      ],
      "faq": [
        {
          "q": "What variants of Moroccan Black Soap do you produce?",
          "a": "We manufacture Classic Pure Olive, Eucalyptus (for respiratory relaxation and hammam aroma), Organic Argan Oil enriched, and Damask Rose infused black soap."
        },
        {
          "q": "Can it be used on sensitive or dry skin?",
          "a": "Yes. Because it is formulated with pure olive oil and vegetable glycerin, it is completely free of synthetic surfactants, parabens, and sulfates, making it suitable for all skin types."
        },
        {
          "q": "What is the recommended usage protocol for spas?",
          "a": "Apply to warm, damp skin in a steam room or hot bath for 5-10 minutes. Rinse with warm water, then vigorously exfoliate using a Moroccan Kessa glove in circular upward motions."
        }
      ],
      "moq": "10 kg (Bulk) / 50 Jars (OEM)",
      "shortExtraction": "Traditional olive saponification",
      "shortOrigin": "Marrakesh & Fez, Morocco",
      "specs": {
        "extraction": "Traditional Moroccan saponification of olive oil pulp and crushed black olives",
        "origin": "Marrakesh & Fez, Morocco",
        "grade": "100% Natural Traditional Spa Grade",
        "certifications": "ISO 22716 GMP Compliant, COA & MSDS Laboratory Tested, 100% Biodegradable",
        "shelfLife": "24 months in a tightly closed container away from water and humidity",
        "appearance": "Rich, dark amber to black gelatinous botanical paste with authentic natural olive aroma"
      }
    },
    "fr": {
      "title": "Savon Noir Marocain (Savon Beldi) Vente en Gros",
      "metaTitle": "Savon Noir Marocain en Gros | Fabricant Savon Beldi",
      "metaDescription": "Fabricant direct de savon noir marocain authentique (Savon Beldi) en vrac et marque blanche. Enrichi à l'huile d'olive et eucalyptus.",
      "badge": "100% Naturel • Rituel du Hammam • Qualité Spa",
      "subtitle": "Pâte Exfoliante Traditionnelle aux Olives Écrasées et Huile d'Olive",
      "lead": "Découvrez le soin emblématique du hammam marocain. Notre Savon Beldi est élaboré par saponification traditionnelle d'huile d'olive vierge et de pulpe d'olives noires, enrichi à l'huile d'argan ou à l'eucalyptus.",
      "overview": "Le Savon Noir Marocain est une pâte végétale 100% naturelle riche en vitamine E. Utilisé depuis des générations dans les rituels de beauté marocains, il prépare la peau à l'exfoliation en ramollissant les cellules mortes sans altérer le film hydrolipidique. Utilisé conjointement avec le gant de Kessa, il purifie l'épiderme en profondeur pour une peau douce, satinée et régénérée.",
      "benefits": [
        {
          "title": "Exfoliation Corporelle Exceptionnelle",
          "description": "Ramollit les cellules mortes pour une élimination facile et douce des impuretés."
        },
        {
          "title": "Nourrissant & Riche en Vitamine E",
          "description": "L'huile d'olive saponifiée apporte une hydratation intense et protège la peau du dessèchement."
        },
        {
          "title": "Purifiant & Détoxifiant",
          "description": "Désincruste les pores et élimine les toxines accumulées à la surface de l'épiderme."
        }
      ],
      "applications": [
        "Soins gommants professionnels en spas et hammams",
        "Gammes de cosmétiques pour le bain et le corps",
        "Préparation de la peau avant épilation ou bronzage"
      ],
      "packagingOptions": [
        {
          "title": "Seaux Vrac (5kg et 25kg)",
          "description": "Seaux hermétiques pour centres de bien-être et reconditionnement.",
          "moq": "10 kg"
        },
        {
          "title": "Pots Cosmétiques Personnalisés (200g à 500g)",
          "description": "Pots avec opercule étanche, étiquettes résistantes à l'eau et design sur-mesure.",
          "moq": "50 Pots"
        }
      ],
      "faq": [
        {
          "q": "Quelles sont les formules disponibles ?",
          "a": "Nous produisons le savon noir classique à l'olive, à l'eucalyptus, à l'huile d'argan ou à l'eau de rose de Damas."
        },
        {
          "q": "Le produit est-il conforme aux normes cosmétiques internationales ?",
          "a": "Oui, notre usine est certifiée ISO 22716 BPF et chaque lot dispose de son certificat d'analyse et de sa fiche de données de sécurité."
        }
      ],
      "moq": "Dès 10 kg (Vrac) / 50 Pots (OEM)",
      "shortExtraction": "Saponification traditionnelle à l'olive",
      "shortOrigin": "Marrakech & Fès, Maroc",
      "specs": {
        "extraction": "Saponification artisanale à froid d'huile d'olive et de pulpe d'olives noires",
        "origin": "Marrakech et Fès, Maroc",
        "grade": "100% Naturel Qualité Spa Professionnelle",
        "certifications": "Conforme ISO 22716 BPF, Testé en Laboratoire (CoA & FDS), 100% Biodégradable",
        "shelfLife": "24 mois dans son pot fermé à l'abri de l'eau et de l'humidité",
        "appearance": "Pâte végétale onctueuse ambrée sombre à noire au parfum naturel d'olive"
      }
    },
    "ar": {
      "title": "الصابون المغربي الأسود (الصابون البلدي) بالجملة",
      "metaTitle": "الصابون المغربي الأسود بالجملة | مصنع الصابون البلدي ال",
      "metaDescription": "المصنع المباشر للصابون المغربي الأسود الأصلي (الصابون البلدي) بالجملة والعلامة التجارية الخاصة. غني بزيت الزيتون وزيت الأركان.",
      "badge": "طبيعي 100% • طقس الحمام المغربي الأصيل • جودة سبا فاخرة",
      "subtitle": "معجون التقشير التقليدي بزيت الزيتون والزيتون الأسود المهروس",
      "lead": "جوهرة الحمام المغربي التقليدي. صابون بلدي طبيعي يُصنع وفق الطريقة المتوارثة عبر تصبين زيت الزيتون الصافي مع لُب الزيتون الأسود، وغني بفيتامين E ومستخلصات الأوكالبتوس المنعشة.",
      "overview": "يُعد الصابون الأسود المغربي (الصابون البلدي) من أقدم وأقوى المستحضرات الطبيعية لتنقية وتقشير الجسم. يعمل على تليين الخلايا الميتة وتفتيح المسام دون تجفيف الجلد بفضل غناه بالأحماض الدهنية وفيتامين E. عند استخدامه مع كيس الحمام المغربي (الكيسة)، يزيل الشوائب ويترك البشرة ناعمة كالحرير ومفعمة بالحيوية.",
      "benefits": [
        {
          "title": "تقشير استثنائي وتجديد لخلايا الجسم",
          "description": "يلين الجلد الميت ويسمح بالتخلص من الشوائب والسموم بكل سلاسة."
        },
        {
          "title": "غني بفيتامين E الطبيعي ومضادات الأكسدة",
          "description": "يغذي أنسجة البشرة ويحميها من الجفاف والتجاعيد."
        },
        {
          "title": "تنقية عميقة لمسام الجلد",
          "description": "ينظف البشرة بعمق ويهيئها لامتصاص الزيوت والكريمات المرطبة."
        }
      ],
      "applications": [
        "جلسات التقشير الاحترافية في مراكز السبا والحمامات المغربية",
        "منتجات العناية بالبشرة والاستحمام المنزلي",
        "تهيئة البشرة قبل إزالة الشعر أو التسمير"
      ],
      "packagingOptions": [
        {
          "title": "دلاء بالجملة (5 كغ و 25 كغ)",
          "description": "دلاء محكمة الإغلاق ومصممة للتصدير والاستخدام المهني في السبا.",
          "moq": "10 كغ"
        },
        {
          "title": "عبوات تجارية مخصصة (200 غ إلى 500 غ)",
          "description": "أوعية فاخرة بأغطية ألومنيوم مع طباعة اسم علامتكم التجارية وتصميم جذاب.",
          "moq": "50 عبوة"
        }
      ],
      "faq": [
        {
          "q": "ما هي النكهات والتركيبات المتوفرة لديكم؟",
          "a": "نوفر الصابون البلدي الأصلي بزيت الزيتون، وبالأوكالبتوس الطبيعي، وبزيت الأركان العضوي، وبماء ورد قلعة مكونة."
        },
        {
          "q": "هل المنتج خالٍ من المواد الكيميائية الضارة؟",
          "a": "نعم، منتجنا طبيعي 100% وخالٍ تماماً من البارابين، العطور الاصطناعية، والكبريتات."
        }
      ],
      "moq": "ابتداءً من 10 كغ (جملة) / 50 عبوة (OEM)",
      "shortExtraction": "تصبين تقليدي لزيت الزيتون والزيتون الأسود",
      "shortOrigin": "مراكش وفاس، المغرب",
      "specs": {
        "extraction": "تصبين تقليدي على البارد لزيت الزيتون الصافي ولُب الزيتون الأسود المهروس",
        "origin": "مراكش وفاس، المملكة المغربية",
        "grade": "طبيعي 100% درجة سبا احترافية فاخرة",
        "certifications": "مطابق لمعايير ISO 22716، تحاليل مخبرية COA و MSDS، قابل للتحلل الحيوي",
        "shelfLife": "24 شهراً في وعاء محكم الإغلاق بعيداً عن الرطوبة والماء",
        "appearance": "معجون نباتي هلامي متماسك بلون عنبري داكن إلى أسود برائحة الزيتون الأصيلة"
      }
    }
  },
  {
    "slug": "prickly-pear-seed-oil",
    "category": "oils",
    "image": "/image/organic-prickly-pear-seed-oil-elixir.webp",
    "gallery": [
      "/image/organic-prickly-pear-seed-oil-elixir.webp",
      "/image/prickly-pear-seed-oil-jerrycan-5l.webp",
      "/image/prickly-pear-seed-oil-dropper-bottle.webp",
      "/image/prickly-pear-cactus-scrub.webp"
    ],
    "bestFor": "Ultra-luxury anti-aging serums, under-eye elixirs, intense wrinkle repair, medical esthetic clinics",
    "formats": "500ml, 1L, 5L, 25L bulk containers, or luxury private label dropper bottles (15ml, 30ml, 50ml)",
    "moq": "500ml (Bulk) / 30 Units (Private Label)",
    "specs": {
      "inci": "Opuntia Ficus-Indica Seed Oil",
      "botanicalName": "Opuntia ficus-indica (L.) Mill.",
      "casNumber": "90082-21-6",
      "extraction": "First cold-pressed from seeds only (requires nearly 1 ton of prickly pear fruit for 1 liter of pure oil)",
      "origin": "Ait Baamrane, Sidi Ifni region, Morocco",
      "grade": "100% Pure Virgin Cosmetic Grade",
      "certifications": "ECOCERT COSMOS Organic, USDA Organic, ISO 22716, COA & MSDS Laboratory Certified",
      "shelfLife": "24 months in amber glass protected from light and heat",
      "appearance": "Clear emerald-green to golden-yellow oil with a light, natural herbaceous scent"
    },
    "en": {
      "title": "Organic Prickly Pear Seed Oil Bulk Supplier",
      "metaTitle": "Pure Prickly Pear Seed Oil Wholesale | Moroccan Elixir",
      "metaDescription": "Direct manufacturer of 100% pure Moroccan Prickly Pear Seed Oil (Opuntia Ficus-Indica) in bulk & private label. Highest Vitamin E content worldwide.",
      "badge": "Ultra-Luxury • Highest Vitamin E in Nature • Direct from Sidi Ifni",
      "subtitle": "Pure Cold-Pressed Opuntia Ficus-Indica Seed Oil",
      "lead": "Known as the most precious anti-aging botanical oil in the world. Sourced from the arid terroir of Sidi Ifni in southern Morocco, each liter requires meticulous cold-pressing of over 1 million cactus seeds.",
      "overview": "Organic Moroccan Prickly Pear Seed Oil contains the highest concentration of Vitamin E (over 1,000 mg/kg, nearly 150% more than argan oil) and essential unsaturated fatty acids (over 65% linoleic acid Omega-6). This exceptional biochemical profile provides unmatched cellular restoration, tightening loose skin, fading dark under-eye circles, and smoothing profound wrinkles. It absorbs rapidly with a velvety, non-greasy matte finish, making it the premier hero ingredient for ultra-luxury skincare lines.",
      "benefits": [
        {
          "title": "Record-High Vitamin E Concentration",
          "description": "Over 1,000 mg/kg of natural tocopherols neutralizes oxidative stress and reverses photoaging."
        },
        {
          "title": "Intense Under-Eye & Dark Circle Lightening",
          "description": "High Vitamin K content constricts capillary dilation, visibly diminishing stubborn dark circles and puffiness."
        },
        {
          "title": "Skin Firmness & Elasticity Lift",
          "description": "Stimulates collagen synthesis and cellular renewal, visibly lifting fine lines and sagging facial contours."
        },
        {
          "title": "Rapid Dry-Oil Absorption",
          "description": "Ultra-lightweight molecular structure penetrates deep dermis layers instantly without clogging pores or leaving oily film."
        }
      ],
      "applications": [
        "Prestige anti-aging face elixirs and firming night serums",
        "Targeted under-eye brightening and anti-wrinkle rollerballs",
        "Neck and décolleté rejuvenation formulas",
        "High-potency skin regeneration post-treatment serums"
      ],
      "packagingOptions": [
        {
          "title": "Bulk Aluminum / Amber Glass (500ml, 1L, 5L)",
          "description": "UV-shielded, nitrogen-flushed containers to safeguard delicate active tocopherols.",
          "moq": "500 ml"
        },
        {
          "title": "Luxury Private Label Dropper Bottles (15ml, 30ml)",
          "description": "Premium glass droppers with customized gold/rose-gold pipettes, UV coating, and embossed luxury boxes.",
          "moq": "30 Units"
        }
      ],
      "faq": [
        {
          "q": "Why is pure Prickly Pear Seed Oil so precious?",
          "a": "It takes approximately 1 ton (1,000 kg) of prickly pear cactus fruits and over 30 hours of labor to extract the 30-50 kg of seeds needed to yield just 1 single liter of pure cold-pressed oil."
        },
        {
          "q": "How can I verify the purity of your oil?",
          "a": "We provide third-party GC-MS chromatography analyses with every batch showing the fatty acid profile (minimum 60-65% linoleic acid, 15-20% oleic acid) and tocopherol quantification."
        },
        {
          "q": "What is the difference between macerated cactus oil and pure seed oil?",
          "a": "Macerated cactus oil is cheap sunflower or soybean oil steeped with cactus flowers or pulp. Our product is 100% PURE seed oil pressed exclusively from the hard internal seeds, containing maximum therapeutic potency."
        }
      ],
      "moq": "500ml (Bulk) / 30 Units (OEM)",
      "shortExtraction": "Pure cold-pressed cactus seeds",
      "shortOrigin": "Sidi Ifni, Morocco",
      "specs": {
        "extraction": "First cold-pressed from seeds only (nearly 1 ton of fruit for 1 liter of pure oil)",
        "origin": "Ait Baamrane, Sidi Ifni region, Morocco",
        "grade": "100% Pure Virgin Cosmetic Grade",
        "certifications": "ECOCERT COSMOS Organic, USDA Organic, ISO 22716, COA & MSDS Laboratory Certified",
        "shelfLife": "24 months in amber glass protected from light and heat",
        "appearance": "Clear emerald-green to golden-yellow oil with a light, natural herbaceous scent"
      }
    },
    "fr": {
      "title": "Huile de Pépins de Figue de Barbarie Bio en Vrac",
      "metaTitle": "Huile de Figue de Barbarie en Gros | Grossiste Maroc",
      "metaDescription": "Fournisseur direct d'huile de pépins de figue de barbarie pure et biologique en vrac et marque blanche. Teneur record en vitamine E.",
      "badge": "Soin d'Exception • Anti-Âge Ultime • Région de Sidi Ifni",
      "subtitle": "Huile Pure de Graines d'Opuntia Ficus-Indica Pressée à Froid",
      "lead": "L'huile végétale anti-âge la plus précieuse et concentrée au monde. Issue des terroirs arides de Sidi Ifni au Maroc, chaque litre exige le pressage à froid méticuleux de près d'un million de pépins.",
      "overview": "L'huile de pépins de figue de barbarie marocaine présente une concentration exceptionnelle en vitamine E (plus de 1000 mg/kg) et en acide linoléique oméga-6 (plus de 65%). Véritable tenseur naturel, elle raffermit l'ovale du visage, estompe les cernes sous les yeux et lisse les rides d'expression. Son toucher sec pénètre instantanément sans laisser de film gras.",
      "benefits": [
        {
          "title": "Teneur Record en Vitamine E",
          "description": "Plus de 1000 mg/kg de tocophérols pour neutraliser les radicaux libres et régénérer les tissus."
        },
        {
          "title": "Atténuation des Cernes et Poches",
          "description": "La présence naturelle de vitamine K stimule la microcirculation et éclaircit le contour des yeux."
        },
        {
          "title": "Effet Tenseur & Élasticité",
          "description": "Restaure la fermeté de la peau et combat efficacement le relâchement cutané."
        }
      ],
      "applications": [
        "Sérums de nuit réparateurs et contours des yeux",
        "Élixirs anti-âge pour le visage, le cou et le décolleté",
        "Formulations cosmétiques de luxe pour cliniques esthétiques"
      ],
      "packagingOptions": [
        {
          "title": "Flacons Vrac Anti-UV (500ml à 5L)",
          "description": "Conditionnement sous azote pour préserver la fraîcheur des principes actifs.",
          "moq": "500 ml"
        },
        {
          "title": "Marque Blanche Flacons Compte-gouttes (15ml à 50ml)",
          "description": "Flaconnage haut de gamme avec finitions or ou argent et étuis luxe.",
          "moq": "30 Flacons"
        }
      ],
      "faq": [
        {
          "q": "Comment différencier la vraie huile de pépins du macérât ?",
          "a": "Notre huile est 100% pure, extraite des graines uniquement (INCI: Opuntia Ficus-Indica Seed Oil), avec une analyse chromatographique certifiant plus de 60% d'acide linoléique."
        },
        {
          "q": "Quelle est la quantité minimale de commande ?",
          "a": "À partir de 500 ml en vrac et seulement 30 unités pour le développement de votre marque blanche."
        }
      ],
      "moq": "Dès 500ml (Vrac) / 30 Flacons (OEM)",
      "shortExtraction": "Pression à froid des graines pures",
      "shortOrigin": "Sidi Ifni, Maroc",
      "specs": {
        "extraction": "Première pression à froid mécanique des graines uniquement (1 tonne de fruits pour 1L)",
        "origin": "Aït Baâmrane, région de Sidi Ifni, Maroc",
        "grade": "100% Pure & Vierge Grade Cosmétique d'Exception",
        "certifications": "ECOCERT COSMOS Bio, USDA Organic, ISO 22716, Certifié CoA & FDS",
        "shelfLife": "24 mois dans un flacon teinté à l'abri de la lumière",
        "appearance": "Huile fluide vert émeraude à jaune doré avec une senteur végétale fraîche"
      }
    },
    "ar": {
      "title": "زيت بذور التين الشوكي العضوي بالجملة (إكسير الشباب)",
      "metaTitle": "زيت بذور التين الشوكي بالجملة | مصنع الزيت الملكي لمكاف",
      "metaDescription": "المصنع المباشر لزيت بذور التين الشوكي المغربي الأصلي النقي 100% بالجملة وللعلامة التجارية الخاصة. أعلى نسبة فيتامين E طبيعي. شهادات ECOCERT و USDA.",
      "badge": "الزيت الأغلى عالمياً • أعلى نسبة فيتامين E • أصيل من سيدي إفني",
      "subtitle": "زيت بذور الصبار المغربي النقي البكر المعصور على البارد",
      "lead": "أثمن زيت نباتي مضاد للشيخوخة في العالم. يستخرج من بذور صبار منطقة سيدي إفني جنوب المغرب، حيث يتطلب استخلاص لتر واحد عصر ما يقارب مليون بذرة صبار على البارد.",
      "overview": "يتميز زيت بذور التين الشوكي المغربي باحتوائه على أعلى تركيز من فيتامين E الطبيعي في الطبيعة (أكثر من 1000 ملغ/كغ، أي أكثر من زيت الأركان بنسبة 150%) مع نسبة تفوق 65% من حمض اللينوليك (أوميغا 6). يمنح البشرة شداً فورياً، ويخفف التجاعيد والهالات السوداء تحت العينين بفعالية ملموسة، ويمتاز بملمس حريري سريع الامتصاص دون ترك أي أثر دهني.",
      "benefits": [
        {
          "title": "أعلى تركيز لفيتامين E ومضادات الأكسدة",
          "description": "يحمي خلايا البشرة من التلف التأكسدي ويعيد لها مرونتها ونضارتها الطبيعية."
        },
        {
          "title": "علاج فعال للهالات السوداء وانتفاخ العينين",
          "description": "بفضل فيتامين K الذي ينشط الدورة الدموية الدقيقة حول محيط العين."
        },
        {
          "title": "شد البشرة وتعبئة الخطوط التعبيرية",
          "description": "يحفز إنتاج الكولاجين الطبيعي لشد ترهلات الوجه والرقبة وتأخير علامات الشيخوخة."
        }
      ],
      "applications": [
        "سيرومات الوجه الملكية المقاومة للشيخوخة والتجاعيد",
        "مستحضرات علاج الهالات السوداء ومحيط العين",
        "زيوت العناية التجميلية الفاخرة للعيادات والمراكز الصحية"
      ],
      "packagingOptions": [
        {
          "title": "عبوات بالجملة محمية من الضوء (500 مل إلى 5 لتر)",
          "description": "عبوات زجاجية أو ألومنيوم معبأة بغاز خامل لضمان أطول مدة صلاحية.",
          "moq": "500 مل"
        },
        {
          "title": "علامة تجارية خاصة بقوارير قطارة فاخرة (15 مل إلى 50 مل)",
          "description": "قوارير زجاجية بألوان مخصصة مع قطارات ذهبية وطباعة اسم علامتكم التجارية.",
          "moq": "30 عبوة"
        }
      ],
      "faq": [
        {
          "q": "لماذا يعتبر زيت بذور التين الشوكي من أغلى الزيوت في العالم؟",
          "a": "لأن إنتاج لتر واحد فقط يتطلب جمع حوالي 1 طن من ثمار الصبار، واستخراج البذور وغسلها وتجفيفها ثم عصرها على البارد بعناية فائقة."
        },
        {
          "q": "كيف نتأكد من نقاوة الزيت وأنه ليس زيتاً منقوعاً (Macérât)؟",
          "a": "نرفق مع كل شحنة تقرير فحص مخبري كروماتوغرافي يثبت تركيبة الأحماض الدهنية ونقاوة الزيت 100% خالية من أي شوائب أو زيوت مضافة."
        }
      ],
      "moq": "ابتداءً من 500 مل (جملة) / 30 قطعة (OEM)",
      "shortExtraction": "عصر بارد نقي لبذور الصبار فقط",
      "shortOrigin": "سيدي إفني، المغرب",
      "specs": {
        "extraction": "عصر أول ميكانيكي على البارد للبذور الصلبة فقط (طن من الصبار لكل لتر زيت)",
        "origin": "آيت بعمران، إقليم سيدي إفني، المملكة المغربية",
        "grade": "نقي وبكر 100% درجة تجميلية ملكية فاخرة",
        "certifications": "إيكوسيرت العضوية، وزارة الزراعة الأمريكية، ISO 22716، تقارير مخبرية معتمدة",
        "shelfLife": "24 شهراً في زجاج معتم بعيداً عن الحرارة والضوء",
        "appearance": "زيت شفاف بلون أخضر زمردي إلى أصفر ذهبي برائحة عشبية طبيعية ناعمة"
      }
    }
  },
  {
    "slug": "blue-nila-powder",
    "category": "powders",
    "image": "/image/blue-nila-powder.webp",
    "gallery": [
      "/image/blue-nila-powder.webp",
      "/image/moroccan-blue-nila-raw-powder.webp"
    ],
    "bestFor": "Skin brightening masks, bridal body scrubs, hyperpigmentation treatments, Moroccan hammam rituals",
    "formats": "1kg, 5kg, 25kg bulk bags, or branded cosmetic jars (100g, 200g)",
    "moq": "5 kg (Bulk) / 50 Jars (Private Label)",
    "specs": {
      "inci": "Indigofera Tinctoria Leaf Extract / Mineral Pigment",
      "botanicalName": "Indigofera tinctoria (L.)",
      "casNumber": "84775-63-3",
      "extraction": "Traditional extraction from Saharan botanical indigo plants, sun-dried and micronized",
      "origin": "Zagora & Western Sahara, Morocco",
      "grade": "100% Pure Ultra-Fine Cosmetic Grade",
      "certifications": "Lab Tested for Heavy Metals & Purity, ISO 22716, COA & MSDS Compliant",
      "shelfLife": "36 months stored dry in a sealed container away from sunlight",
      "appearance": "Intense deep royal blue ultra-fine powder, odorless and easily dispersible"
    },
    "en": {
      "title": "Authentic Moroccan Blue Nila Powder Wholesale",
      "metaTitle": "Authentic Moroccan Blue Nila Powder Wholesale | Indigo",
      "metaDescription": "Direct wholesale supplier of 100% pure authentic Moroccan Blue Nila Powder. Natural Saharan skin brightening pigment for masks, body scrubs,",
      "badge": "Viral Beauty Secret • 100% Pure Saharan Pigment • Skin Brightening",
      "subtitle": "Natural Saharan Indigofera Tinctoria Botanical Brightening Powder",
      "lead": "The legendary beauty secret of Saharan and Berber women. Sourced directly from Zagora and southern Morocco, this pure royal blue powder is celebrated for visibly brightening hyperpigmentation and evening skin tone.",
      "overview": "Moroccan Blue Nila is a natural botanical and mineral extract harvested from the Indigofera tinctoria plant in the Moroccan desert. Used for centuries by nomadic Tuareg and Sahrawi brides to protect and clarify skin before weddings, Blue Nila naturally reduces the appearance of dark spots, sun damage, dark elbows and knees, and melasma. It can be easily blended into facial masks, Moroccan black soap, body scrubs, or moisturizing creams without staining the skin when used properly.",
      "benefits": [
        {
          "title": "Visible Skin Brightening & Radiance",
          "description": "Noticeably evens out skin tone and brightens dull, fatigued complexions from the very first application."
        },
        {
          "title": "Hyperpigmentation & Dark Spot Correction",
          "description": "Lightens stubborn dark zones, including underarms, knees, elbows, and areas affected by melasma."
        },
        {
          "title": "Anti-Inflammatory & Skin Soothing",
          "description": "Calms irritated, inflamed skin, reducing redness and helping heal acne-prone blemishes."
        },
        {
          "title": "Versatile Formulation Compatibility",
          "description": "Micronized ultra-fine texture blends effortlessly into clays, emulsions, balms, and black soaps."
        }
      ],
      "applications": [
        "Skin brightening face masks and clarifying mud wraps",
        "Hammam exfoliating body pastes (mixed with Moroccan Black Soap)",
        "Bridal whitening body scrubs and bath soaks",
        "Private label cosmetic powders and custom mask sachets"
      ],
      "packagingOptions": [
        {
          "title": "Bulk Aluminum Sealed Bags (1kg, 5kg, 25kg)",
          "description": "Moisture-barrier, light-protective industrial bags for formulators and cosmetic labs.",
          "moq": "5 kg"
        },
        {
          "title": "Cosmetic Jars & Pouches (50g, 100g, 200g)",
          "description": "Clear PET or glass jars with tamper seals, luxury lids, and multilingual branding.",
          "moq": "50 Jars"
        }
      ],
      "faq": [
        {
          "q": "How can buyers differentiate between genuine Moroccan Nila and synthetic blue dye?",
          "a": "Genuine Saharan Nila has a velvety mineral-botanical texture, is insoluble in pure water alone (disperses in oils, yogurt, or soap), and does not stain skin blue when washed off. We provide heavy metal and purity test certificates with every batch."
        },
        {
          "q": "How is Nila powder traditionally prepared for hammam treatments?",
          "a": "It is typically mixed with Moroccan Black Soap or Greek yogurt/rose water to create an exfoliating paste applied to the body for 10-15 minutes before rinsing."
        }
      ],
      "moq": "5 kg (Bulk) / 50 Jars (OEM)",
      "shortExtraction": "Sun-dried & micronized Saharan indigo",
      "shortOrigin": "Zagora & Sahara, Morocco",
      "specs": {
        "extraction": "Traditional extraction from Saharan botanical indigo plants, sun-dried and micronized",
        "origin": "Zagora & Western Sahara, Morocco",
        "grade": "100% Pure Ultra-Fine Cosmetic Grade",
        "certifications": "Lab Tested for Heavy Metals & Purity, ISO 22716, COA & MSDS Compliant",
        "shelfLife": "36 months stored dry in a sealed container away from sunlight",
        "appearance": "Intense deep royal blue ultra-fine powder, odorless and easily dispersible"
      }
    },
    "fr": {
      "title": "Poudre de Nila Bleu Marocaine Authentique en Gros",
      "metaTitle": "Poudre de Nila Bleu Marocaine en Gros | B2B",
      "metaDescription": "Grossiste direct de poudre de Nila Bleu du Maroc authentique. Secret de beauté saharien pour éclaircir le teint, les taches brunes et les rituels du.",
      "badge": "Tendance Beauté • Pigment Saharien 100% Pur • Éclaircissant",
      "subtitle": "Poudre Botanique d'Indigofera Tinctoria du Sahara Marocain",
      "lead": "Le secret de beauté légendaire des femmes du désert marocain. Issue de la région de Zagora, cette poudre bleu roi est reconnue pour unifier le teint et atténuer visiblement les taches pigmentaires.",
      "overview": "La Nila Bleue Royale est une poudre minérale et végétale issue de l'indigo sauvage du Sahara marocain. Utilisée traditionnellement par les femmes sahraouies pour illuminer le teint avant les cérémonies, elle aide à estomper les taches brunes, éclaircit les zones sombres (coudes, genoux) et adoucit la peau. Idéale pour formuler des masques clarifiants, des gommages corporels ou enrichir le savon noir.",
      "benefits": [
        {
          "title": "Éclaircissement & Teint Éclatant",
          "description": "Illumine le visage et unifie les irrégularités pigmentaires dès les premières utilisations."
        },
        {
          "title": "Atténuation des Taches Brunes",
          "description": "Cible les zones hyperpigmentées, le masque de grossesse et les taches de soleil."
        },
        {
          "title": "Apaisante & Anti-Imperfections",
          "description": "Propriétés calmantes qui soulagent les rougeurs et purifient la peau à tendance acnéique."
        }
      ],
      "applications": [
        "Masques visage éclaircissants et soins unifiants",
        "Gommages corporels en synergie avec le Savon Noir",
        "Formulation de soins clarifiants en marque blanche"
      ],
      "packagingOptions": [
        {
          "title": "Sacs Vrac Hermétiques (1kg à 25kg)",
          "description": "Conditionnement protecteur contre l'humidité pour laboratoires et grossistes.",
          "moq": "5 kg"
        },
        {
          "title": "Pots Cosmétiques Marque Blanche (50g à 200g)",
          "description": "Conditionnement prêt à commercialiser avec votre logo et étiquette bilingue.",
          "moq": "50 Pots"
        }
      ],
      "faq": [
        {
          "q": "Comment reconnaître la vraie Nila de la contrefaçon ?",
          "a": "Notre Nila est 100% pure et naturelle, testée sans métaux lourds ni colorants chimiques. Elle ne tache pas la peau de manière indélébile après rinçage."
        }
      ],
      "moq": "Dès 5 kg (Vrac) / 50 Pots (OEM)",
      "shortExtraction": "Séchage solaire & micronisation d'indigo",
      "shortOrigin": "Zagora & Sahara, Maroc",
      "specs": {
        "extraction": "Extraction botanique traditionnelle d'indigo saharien, séchage au soleil et micronisation",
        "origin": "Zagora et Sahara marocain",
        "grade": "100% Pure & Poudre Ultra-Fine Cosmétique",
        "certifications": "Analysée sans métaux lourds, ISO 22716 BPF, Conforme CoA & FDS",
        "shelfLife": "36 mois conservée au sec dans un emballage hermétique",
        "appearance": "Poudre ultra-fine bleu roi profond, inodore et hautement dispersible"
      }
    },
    "ar": {
      "title": "بودرة النيلة الزرقاء المغربية الأصلية بالجملة",
      "metaTitle": "بودرة النيلة الزرقاء المغربية بالجملة | B2B",
      "metaDescription": "المورد المباشر لبودرة النيلة الزرقاء المغربية الأصلية 100% بالجملة وللعلامة التجارية الخاصة. سر الجمال الصحراوي لتفتيح وتوحيد لون البشرة والتخلص من.",
      "badge": "سر الجمال الصحراوي • طبيعية 100% • تفتيح وتوحيد لون البشرة",
      "subtitle": "مسحوق النيلة الزرقاء الطبيعية المستخرج من نبات الإنديجو الصحراوي",
      "lead": "سر الجمال الصحراوي المتوارث بين نساء الصحراء المغربية. بودرة زرقاء ملكية نقية مستخلصة من أقاليم الجنوب المغربي (زاكورة والصحراء)، تشتهر بقدرتها الفائقة على تفتيح وتوحيد لون البشرة.",
      "overview": "تعتبر النيلة الزرقاء المغربية من أهم الأسرار التجميلية في التقاليد الصحراوية. تستعملها العرائس في طقوس الحمام لتفتيح لون الجلد، والتخلص من التصبغات والبقع الداكنة في الأكواع والركب والمناطق الحساسة، وتهدئة حروق الشمس. تمتاز بمسحوقها فائق النعومة الذي يسهل دمجه مع الصابون البلدي، الطين، أو الزيوت الطبيعية دون أن يترك صبغة ملتصقة بالبشرة عند غسلها جيداً.",
      "benefits": [
        {
          "title": "تفتيح فوري وتوحيد لون البشرة",
          "description": "يمنح البشرة إشراقة لافتة ويزيل شحوب وتعب الوجه من أول جلسة."
        },
        {
          "title": "التخلص من البقع والتصبغات والكلف",
          "description": "يساعد على التخفيف من آثار الشمس والندوب وتفتيح المناطق الداكنة بالجسم."
        },
        {
          "title": "تهدئة الالتهابات والتحسس الجلدي",
          "description": "خصائص طبيعية مهدئة للالتهاب تخفف من احمرار الوجه وتنقي مسام البشرة الدهنية."
        }
      ],
      "applications": [
        "أقنعة وماسكات تفتيح وتوحيد لون الوجه",
        "خلطات الصابون المغربي لتقشير وتبييض الجسم في الحمام",
        "مقشرات العروس الصحراوية ومستحضرات التجميل الطبيعية"
      ],
      "packagingOptions": [
        {
          "title": "أكياس ألومنيوم معزولة بالجملة (1 كغ إلى 25 كغ)",
          "description": "تغليف محكم يحمي المسحوق من الرطوبة وأشعة الشمس مخصص للمصانع والموزعين.",
          "moq": "5 كغ"
        },
        {
          "title": "عبوات تجارية جاهزة بعلامتكم الخاصة (50 غ إلى 200 غ)",
          "description": "أوعية بلاستيكية أو زجاجية شفافة مع غطاء ذهبي وطباعة اسم علامتكم التجارية.",
          "moq": "50 عبوة"
        }
      ],
      "faq": [
        {
          "q": "كيف نميز بين النيلة الزرقاء الأصلية والصبغات الكيميائية المغشوشة؟",
          "a": "النيلة الأصلية تكون ناعمة الملمس، لا تذوب كلياً في الماء وحده بل تمتزج مع الزيوت أو الصابون، ولا تصبغ الجلد بشكل دائم عند غسلها بالماء الدافئ والصابون. كما نرفق شهادات فحص خلوها من المعادن الثقيلة."
        },
        {
          "q": "كيف تستخدم النيلة في طقس الحمام المغربي؟",
          "a": "تُمزج كمية ملعقة صغيرة من النيلة مع الصابون البلدي أو الزبادي وماء الورد، وتوضع على الجسم لمدة 10 دقائق ثم تُشطف ويفرك الجسم بالكيسة المغربية."
        }
      ],
      "moq": "ابتداءً من 5 كغ (جملة) / 50 عبوة (OEM)",
      "shortExtraction": "تجفيف شمسي وطحن ناعم لنبات النيلة",
      "shortOrigin": "زاكورة والصحراء، المغرب",
      "specs": {
        "extraction": "استخلاص نباتي صحراوي تقليدي من أوراق الإنديجو، تجفيف تحت أشعة الشمس وطحن ميكروني فائق النعومة",
        "origin": "زاكورة والأقاليم الصحراوية الجنوبية، المملكة المغربية",
        "grade": "طبيعية ونقية 100% درجة تجميلية فائقة النعومة",
        "certifications": "فحص مخبري شامل لخلوها من المعادن الثقيلة، ISO 22716، شهادات COA و MSDS",
        "shelfLife": "36 شهراً في عبوة محكمة الإغلاق في مكان جاف ومظلم",
        "appearance": "مسحوق أزرق ملكي داكن فائق النعومة، عديم الرائحة وسهل التوزيع والدمج"
      }
    }
  },
  {
    "slug": "aker-fassi-powder",
    "category": "powders",
    "image": "/image/aker-fassi-powder.webp",
    "gallery": [
      "/image/aker-fassi-powder.webp",
      "/image/moroccan-aker-fassi-clay-pot.webp"
    ],
    "bestFor": "Natural lip & cheek tints, radiance masks, anti-aging clays, traditional Moroccan cosmetic collections",
    "formats": "500g, 1kg, 5kg bulk jars, terracotta clay pots, or branded mini cosmetic jars (10g, 25g, 50g)",
    "moq": "1 kg (Bulk) / 50 Jars (Private Label)",
    "specs": {
      "inci": "Papaver Rhoeas Petal Powder & Punica Granatum Fruit Extract",
      "botanicalName": "Papaver rhoeas / Punica granatum bark",
      "casNumber": "84696-43-5",
      "extraction": "Sun-dried wild poppy petals and pomegranate bark, traditionally ground into fine crimson-golden pigment",
      "origin": "Fez & High Atlas Mountains, Morocco",
      "grade": "100% Pure Natural Plant Pigment",
      "certifications": "Lab Tested for Purity & Heavy Metals, ISO 22716 GMP, COA & MSDS Compliant",
      "shelfLife": "36 months stored in dry, dark ambient temperature",
      "appearance": "Deep red to brick-crimson powder with a shimmering golden metallic reflection"
    },
    "en": {
      "title": "Moroccan Aker Fassi (Poppy Flower Powder) Wholesale",
      "metaTitle": "Moroccan Aker Fassi Wholesale | Authentic Poppy & Pomeg",
      "metaDescription": "Direct wholesale manufacturer of authentic Moroccan Aker Fassi (Deer Blood). 100% natural poppy flower & pomegranate powder for lips, cheeks,",
      "badge": "100% Natural Pigment • Heritage Moroccan Makeup • Fez Artisan",
      "subtitle": "Natural Poppy Flower Petal & Pomegranate Rind Radiance Powder",
      "lead": "The centuries-old Moroccan natural cosmetic treasure known as 'Dam al-Ghazal' (Deer Blood). Crafted in Fez by drying wild red poppy petals and pomegranate bark under the Moroccan sun.",
      "overview": "Moroccan Aker Fassi is celebrated for its dual cosmetic function: a vibrant long-lasting natural reddish-pink tint for lips and cheeks, and a potent antioxidant skin clarifier. Rich in anthocyanins, flavonoids, and natural fruit acids, Aker Fassi stimulates microcirculation, brightens dull skin, and provides a healthy, radiant rosy flush. Ideal for formulating clean-beauty makeup, lip stains, tinted balms, and brightening clay face masks.",
      "benefits": [
        {
          "title": "100% Plant-Based Longwear Tint",
          "description": "Imparts a naturally buildable, non-toxic crimson-pink stain to lips and cheeks without artificial colorants."
        },
        {
          "title": "Powerful Flavonoid Antioxidants",
          "description": "Wild poppy petals and pomegranate bark protect against environmental oxidative stress and free radical damage."
        },
        {
          "title": "Healthy Rosy Glow",
          "description": "Revitalizes pale, fatigued complexions when mixed with Ghassoul clay or rose water masks."
        },
        {
          "title": "Astringent & Pore Refining",
          "description": "Natural tannins from pomegranate bark gently tighten pores and clarify oil-prone skin."
        }
      ],
      "applications": [
        "Natural vegan lip stains, cheek tints, and lip oils",
        "Radiance-boosting facial mud masks and herbal body wraps",
        "Traditional Moroccan terracotta pots (Tajine Aker Fassi)",
        "Luxury clean beauty tinted skincare formulations"
      ],
      "packagingOptions": [
        {
          "title": "Bulk Jars / Pouches (500g, 1kg, 5kg)",
          "description": "Sealed light-proof containers for cosmetics laboratories and artisan formulators.",
          "moq": "1 kg"
        },
        {
          "title": "Traditional Glazed Terracotta Pots",
          "description": "Clay pots impregnated with Aker Fassi pigment, activated with a wet brush or finger.",
          "moq": "50 Units"
        },
        {
          "title": "Mini Glass / Acrylic Pots (10g, 25g, 50g)",
          "description": "Retail-ready branded cosmetic pots with custom labels and boxes.",
          "moq": "50 Jars"
        }
      ],
      "faq": [
        {
          "q": "How can I tell authentic Aker Fassi from synthetic food dye?",
          "a": "Genuine Aker Fassi has a distinctive golden-metallic sheen when dry, turning vivid red upon contact with water or oil. It has no artificial perfume and passes laboratory purity testing without synthetic FD&C dyes."
        },
        {
          "q": "Is Aker Fassi safe for lips and facial applications?",
          "a": "Yes, our Aker Fassi is 100% pure food-and-cosmetic grade botanical extract made exclusively from edible poppy petals and pomegranate bark."
        }
      ],
      "moq": "1 kg (Bulk) / 50 Jars (OEM)",
      "shortExtraction": "Sun-dried wild poppy & pomegranate",
      "shortOrigin": "Fez, Morocco",
      "specs": {
        "extraction": "Sun-dried wild poppy petals and pomegranate bark, traditionally ground into fine pigment",
        "origin": "Fez & High Atlas Mountains, Morocco",
        "grade": "100% Pure Natural Plant Pigment",
        "certifications": "Lab Tested for Purity & Heavy Metals, ISO 22716 GMP, COA & MSDS Compliant",
        "shelfLife": "36 months stored in dry, dark ambient temperature",
        "appearance": "Deep red to brick-crimson powder with a shimmering golden metallic reflection"
      }
    },
    "fr": {
      "title": "Aker Fassi Marocain (Poudre de Coquelicot) en Gros",
      "metaTitle": "Aker Fassi Marocain en Gros | Poudre de Coquelicot & Gr",
      "metaDescription": "Fabricant direct d'Aker Fassi marocain authentique (Sang de Gazelle) en vrac et marque blanche. Pigment 100% végétal pour fard à lèvres,",
      "badge": "100% Naturel • Maquillage Traditionnel • Artisanat de Fès",
      "subtitle": "Poudre Botanique de Pétales de Coquelicot et Écorce de Grenade",
      "lead": "Trésor ancestral de la cosmétique marocaine connu sous le nom de 'Sang de Gazelle'. Élaboré à Fès à partir de pétales de coquelicot séchés au soleil et d'écorce de grenade.",
      "overview": "L'Aker Fassi est à la fois un pigment végétal d'une tenue remarquable pour sublimer les lèvres et les pommettes, et un soin éclat pour le visage. Naturellement riche en flavonoïdes et en antioxydants, il redonne bonne mine, réveille les teints ternes et resserre les pores.",
      "benefits": [
        {
          "title": "Teinte Naturelle Longue Tenue",
          "description": "Pigmente durablement les lèvres et les joues d'un rose rouge éclatant et sans aucun colorant chimique."
        },
        {
          "title": "Puissant Antioxydant Naturel",
          "description": "Les pétales de coquelicot protègent l'épiderme contre le vieillissement cellulaire prématuré."
        },
        {
          "title": "Effet Bonne Mine Immédiat",
          "description": "Sublime le teint lorsqu'il est mélangé à l'argile Ghassoul ou à l'eau de rose."
        }
      ],
      "applications": [
        "Rouges à lèvres naturels, encres et baumes teintés",
        "Masques visage bonne mine et soins au hammam",
        "Tajines traditionnels en terre cuite imbibés d'Aker Fassi"
      ],
      "packagingOptions": [
        {
          "title": "Vrac en Pots Hermétiques (500g à 5kg)",
          "description": "Pour formulateurs de cosmétiques naturels et savonneries.",
          "moq": "1 kg"
        },
        {
          "title": "Tajines Traditionnels en Terre Cuite",
          "description": "Conditionnement marocain authentique prêt pour la revente.",
          "moq": "50 Pièces"
        }
      ],
      "faq": [
        {
          "q": "Le produit est-il 100% végétal ?",
          "a": "Oui, notre Aker Fassi est entièrement naturel, composé exclusivement de pétales de coquelicot sauvage et d'écorce de grenade séchés à Fès."
        }
      ],
      "moq": "Dès 1 kg (Vrac) / 50 Pots (OEM)",
      "shortExtraction": "Pétales de coquelicot séchés & broyés",
      "shortOrigin": "Fès, Maroc",
      "specs": {
        "extraction": "Pétales de coquelicot sauvage et écorce de grenade séchés au soleil et broyés artisanalement",
        "origin": "Fès et Haut Atlas, Maroc",
        "grade": "Pigment 100% Végétal Naturel Pur",
        "certifications": "Testé en laboratoire sans colorants synthétiques, ISO 22716, Conforme CoA",
        "shelfLife": "36 mois à l'abri de l'humidité et de la lumière",
        "appearance": "Poudre rouge brique à carmin aux reflets dorés métallisés caractéristiques"
      }
    },
    "ar": {
      "title": "العكر الفاسي المغربي (دم الغزال) بالجملة",
      "metaTitle": "العكر الفاسي المغربي بالجملة | مسحوق دم الغزال الأصلي م",
      "metaDescription": "المصنع المباشر لمسحوق العكر الفاسي المغربي الحر (دم الغزال) بالجملة وللعلامة التجارية الخاصة. مستخلص طبيعي 100% من شقائق النعمان وقشور الرمان لتوريد.",
      "badge": "طبيعي 100% • مكياج مغربي أصيل • صناعة تقليدية من فاس",
      "subtitle": "مسحوق أوراق شقائق النعمان المجففة وقشور الرمان الطبيعية",
      "lead": "كنز الجمال المغربي التاريخي الشهير بـ 'دم الغزال'. يُصنع بمدينة فاس العريقة عبر تجفيف بتلات شقائق النعمان البرية وقشور الرمان تحت شمس المغرب وطحنها بعناية فائقة.",
      "overview": "يتميز العكر الفاسي المغربي الأصلي بلونه القرمزي الساحر ولمعانه الذهبي الفريد. يُعد مستحضراً تجميلياً وعلاجياً بامتياز؛ يُستخدم كمورد طبيعي ثابت للشفاه والخدود، وكعنصر أساسي في ماسكات الوجه لتعزيز النضارة وتوحيد اللون بفضل غناه بمضادات الأكسدة والأنثوسيانين الطبيعي.",
      "benefits": [
        {
          "title": "تلوين وتوريد طبيعي ثابت للشفاه والخدود",
          "description": "يمنح حمرة طبيعية جذابة تدوم طويلاً وخالية تماماً من الرصاص والملونات الكيميائية."
        },
        {
          "title": "نضارة فائقة وإشراقة وردية للبشرة",
          "description": "ينشط الدورة الدموية ويعيد الحيوية للبشرة الشاحبة عند خلطه مع الغاسول أو ماء الورد."
        },
        {
          "title": "مضاد للأكسدة وقابض للمسام",
          "description": "تحتوي قشور الرمان على العفص الطبيعي الذي يشد المسام الواسعة ويحمي من التجاعيد."
        }
      ],
      "applications": [
        "صناعة موردات الشفاه الطبيعية (Lip Tints) ومرطبات الشفاه الوردية",
        "أقنعة النضارة والتفتيح الوردي في مراكز السبا والحمام",
        "طويجنات الفخار المغربية التقليدية (عكر فاسي فخار)",
        "خلطات تبييض وتوريد الجسم مع الصابون المغربي"
      ],
      "packagingOptions": [
        {
          "title": "عبوات محكمة الإغلاق بالجملة (500 غ إلى 5 كغ)",
          "description": "علب محكمة مانعة للضوء والرطوبة مخصصة للمصانع والمختبرات التجميلية.",
          "moq": "1 كغ"
        },
        {
          "title": "طواجين الفخار التقليدية المطلية بالعكر الفاسي",
          "description": "أوعية فخارية مجهزة بطريقة تقليدية جاهزة للاستخدام بالماء أو ماء الورد.",
          "moq": "50 حبة"
        },
        {
          "title": "علب زجاجية صغيرة جاهزة للبيع (10 غ إلى 50 غ)",
          "description": "أوعية كريستالية أو زجاجية فاخرة مع تصميم وطباعة اسم علامتكم التجارية.",
          "moq": "50 علبة"
        }
      ],
      "faq": [
        {
          "q": "كيف يمكن التمييز بين العكر الفاسي الأصلي والملونات المغشوشة؟",
          "a": "العكر الفاسي الأصلي يكون بلون قرمزي وله لمعان ذهبي برونزي تحت الضوء، ويتحول إلى لون وردي محمر فوري عند ملامسة الماء، ولا يترك طعماً مراً أو كيميائياً على الشفاه."
        },
        {
          "q": "هل يمكن استخدامه للشعر؟",
          "a": "نعم، يُضاف تقليدياً إلى الحناء المغربية لمنح الشعر لوناً كستنائياً محمراً جذاباً وتغذية طبيعية للبصيلات."
        }
      ],
      "moq": "ابتداءً من 1 كغ (جملة) / 50 عبوة (OEM)",
      "shortExtraction": "تجفيف شمسي لبتلات شقائق النعمان والرمان",
      "shortOrigin": "فاس، المغرب",
      "specs": {
        "extraction": "بتلات شقائق النعمان البرية وقشور الرمان مجففة تحت شمس فاس ومطحونة وفق أصول الحرفة التقليدية",
        "origin": "فاس وجبال الأطلس الكبير، المملكة المغربية",
        "grade": "صبغة نباتية طبيعية حرة 100%",
        "certifications": "فحص مخبري لضمان النقاوة وخلوه من الملونات الصناعية، ISO 22716، مطابقة COA",
        "shelfLife": "36 شهراً عند الحفظ في مكان جاف ومعتم بدرجة حرارة الغرفة",
        "appearance": "مسحوق أحمر قرمزي ناعم ببريق ولمعان ذهبي معدني يعكس الضوء"
      }
    }
  },
  {
    "slug": "moroccan-ghassoul-clay",
    "category": "clays",
    "image": "/image/moroccan-ghassoul-clay-powder.webp",
    "gallery": [
      "/image/moroccan-ghassoul-clay-powder.webp",
      "/image/ghassoul-clay-paste-rose.webp",
      "/image/rhassoul-rose-face-mask.webp"
    ],
    "bestFor": "Detoxifying facial masks, mineral hair volume treatments, luxury spa body wraps, organic soap making",
    "formats": "Raw flakes, micronized fine powder, or ready-to-use paste in 1kg, 5kg, 25kg bulk bags, or branded jars (200g, 500g)",
    "moq": "10 kg (Bulk) / 50 Jars (Private Label)",
    "specs": {
      "inci": "Moroccan Lava Clay",
      "botanicalName": "Stephanite / Smectite clay mineral complex",
      "casNumber": "12417-43-7",
      "extraction": "Extracted from ancient underground Atlas Mountain deposits, washed with water, and dried in the Saharan sun",
      "origin": "Moulouya Valley, Middle Atlas Mountains, Morocco (The world's only deposit)",
      "grade": "100% Pure Cosmetic & Spa Mineral Grade",
      "certifications": "ECOCERT Approved, ISO 22716 GMP, Lab Tested for Heavy Metals, 100% Natural",
      "shelfLife": "Indefinite when stored dry in a cool place",
      "appearance": "Light greyish-brown flakes or ultra-fine powder; swells into silky chocolate-colored paste with water"
    },
    "en": {
      "title": "Moroccan Ghassoul (Rhassoul) Clay Mineral Mask Bulk",
      "metaTitle": "Moroccan Ghassoul (Rhassoul) Clay Wholesale | B2B",
      "metaDescription": "Direct manufacturer and wholesale supplier of authentic Moroccan Ghassoul (Rhassoul) Clay. 100% natural Atlas Mountain lava clay for purifying face,",
      "badge": "100% Pure Atlas Lava Clay • World's Only Deposit • Mineral Rich",
      "subtitle": "Natural Organic Moroccan Lava Clay (Hectorite / Smectite)",
      "lead": "Sourced exclusively from the underground mines of the Moroccan Atlas Mountains. For over 1,400 years, Rhassoul (from the Arabic 'Ghassala' meaning 'to wash') has cleansed and remineralized skin and hair.",
      "overview": "Moroccan Ghassoul (Rhassoul) is a naturally occurring smectite clay renowned for its extraordinary ion-exchange and absorption capacity. Naturally saturated with silica, magnesium, calcium, iron, and potassium, Ghassoul acts like a gentle mineral magnet: drawing out excess sebum, blackheads, and environmental toxins without stripping the protective dermal lipid mantle. It creates voluminous, silky hair and clarifies problem skin without stinging or dehydration.",
      "benefits": [
        {
          "title": "Superior Impurity Adsorption",
          "description": "Exceptional cation-exchange capability binds to deeply seated dirt, toxins, and sebum inside congested pores."
        },
        {
          "title": "Rich in Restorative Minerals",
          "description": "Over 55% silica and 25% magnesium replenish skin barrier health and improve skin tone elasticity."
        },
        {
          "title": "Natural Hair Detox & Volumizing",
          "description": "Removes product buildup from roots, enhances curls, and adds buoyant volume without chemical surfactants."
        },
        {
          "title": "Non-Drying & Barrier-Friendly",
          "description": "Unlike green or white clays, Ghassoul maintains natural skin hydration levels, making it suitable for sensitive skin."
        }
      ],
      "applications": [
        "Purifying face mud masks and blackhead extraction pastes",
        "Full-body hammam detox wraps and cellulite firming treatments",
        "Natural sulfate-free shampoo pastes and scalp cleansers",
        "Cold-process soap crafting and mineral bath formulations"
      ],
      "packagingOptions": [
        {
          "title": "Bulk Sacks & Bags (5kg, 25kg, 1000kg)",
          "description": "Heavy-duty multi-ply kraft paper or polypropylene bags with moisture lining.",
          "moq": "10 kg"
        },
        {
          "title": "Custom Branded Jars & Pouches (200g - 1kg)",
          "description": "Matte pouches or clear jars with customized foil labels and wooden spoons.",
          "moq": "50 Jars"
        },
        {
          "title": "Ready-to-Use Formulated Pastes (with Rose or Orange Blossom)",
          "description": "Pre-hydrated silky pastes infused with pure floral hydrosols and argan oil.",
          "moq": "25 kg / 50 Jars"
        }
      ],
      "faq": [
        {
          "q": "What is the difference between Ghassoul Flakes and Powder?",
          "a": "Both have the exact same mineral composition. Flakes (plaquettes) are traditional sun-dried chips that dissolve in warm water within seconds. Micronized powder is ultra-fine for smooth cosmetic emulsions and face masks."
        },
        {
          "q": "Is your Ghassoul tested for heavy metals?",
          "a": "Yes. Every batch undergoes rigorous laboratory testing for lead, arsenic, cadmium, and mercury to strictly comply with European (EC 1223/2009) and US FDA cosmetic safety standards."
        }
      ],
      "moq": "10 kg (Bulk) / 50 Jars (OEM)",
      "shortExtraction": "Subterranean mining & sun-dried",
      "shortOrigin": "Middle Atlas Mountains, Morocco",
      "specs": {
        "extraction": "Extracted from ancient underground Atlas Mountain deposits, washed with water, and sun-dried",
        "origin": "Moulouya Valley, Middle Atlas Mountains, Morocco",
        "grade": "100% Pure Cosmetic & Spa Mineral Grade",
        "certifications": "ECOCERT Approved, ISO 22716 GMP, Lab Tested for Heavy Metals, 100% Natural",
        "shelfLife": "Indefinite when stored dry in a cool place",
        "appearance": "Light greyish-brown flakes or ultra-fine powder; swells into silky chocolate paste"
      }
    },
    "fr": {
      "title": "Argile Ghassoul (Rhassoul) Marocaine en Vrac",
      "metaTitle": "Argile Ghassoul Marocain en Gros | Fournisseur Rhassoul",
      "metaDescription": "Fournisseur direct d'argile Ghassoul (Rhassoul) du Maroc authentique en vrac et marque blanche. Argile minérale de l'Atlas pour masques visage,",
      "badge": "100% Pure • Unique Gisement Mondial • Riche en Minéraux",
      "subtitle": "Argile Minérale Naturelle de l'Atlas Marocain (Moroccan Lava Clay)",
      "lead": "Extraite exclusivement des galeries souterraines du Moyen Atlas marocain. Depuis plus de 14 siècles, le Ghassoul (du verbe arabe 'ghassala', laver) est utilisé pour purifier la peau et fortifier la chevelure.",
      "overview": "Le Ghassoul marocain est une argile smectique d'une pureté exceptionnelle, dotée d'une très haute capacité d'absorption. Naturellement riche en silice, magnésium, fer et potassium, il absorbe l'excès de sébum et les impuretés sans agresser la peau ni altérer la barrière lipidique. Idéal pour les soins du visage, les enveloppements corporels en spa et les shampoings naturels volumisants.",
      "benefits": [
        {
          "title": "Purifiant & Absorbant Doux",
          "description": "Désincruste les pores et élimine les toxines sans assécher les épidermes sensibles."
        },
        {
          "title": "Reminéralisant & Restructurant",
          "description": "Riche en silice et magnésium pour renforcer l'élasticité cutanée et la fermeté."
        },
        {
          "title": "Soin Capillaire Volumateur",
          "description": "Décolle les racines, régule le cuir chevelu gras et apporte corps et brillance aux cheveux."
        }
      ],
      "applications": [
        "Masques visage purifiants et désincrustants",
        "Enveloppements corporels détoxifiants pour spas et thalassos",
        "Soins capillaires lavants sans tensioactifs chimiques"
      ],
      "packagingOptions": [
        {
          "title": "Sacs Vrac (5kg à 25kg)",
          "description": "Disponible en plaquettes traditionnelles ou poudre ultra-ventilée.",
          "moq": "10 kg"
        },
        {
          "title": "Pots Cosmétiques Marque Blanche (200g à 500g)",
          "description": "Conditionnement sur-mesure avec votre identité visuelle et accessoires.",
          "moq": "50 Pots"
        }
      ],
      "faq": [
        {
          "q": "Le produit est-il testé en laboratoire ?",
          "a": "Oui, notre Ghassoul fait l'objet d'analyses microbiologiques et de recherche de métaux lourds systématiques pour chaque lot exporté."
        }
      ],
      "moq": "Dès 10 kg (Vrac) / 50 Pots (OEM)",
      "shortExtraction": "Extraction minière de l'Atlas & séchage",
      "shortOrigin": "Moyen Atlas, Maroc",
      "specs": {
        "extraction": "Argile extraite de galeries souterraines de l'Atlas, lavée à l'eau pure et séchée au soleil",
        "origin": "Vallée de la Moulouya, Moyen Atlas, Maroc",
        "grade": "100% Pure & Argile Minérale Qualité Spa",
        "certifications": "Approuvé ECOCERT, ISO 22716 BPF, Testé sans métaux lourds, 100% Naturel",
        "shelfLife": "Indéfinie si conservée au sec",
        "appearance": "Plaquettes beiges-brunes ou poudre ultra-ventilée devenant une pâte chocolatée soyeuse"
      }
    },
    "ar": {
      "title": "طين الغاسول المغربي الطبيعي بالجملة (الصلصال البركاني)",
      "metaTitle": "طين الغاسول المغربي بالجملة | مسحوق وصلصال الغاسول الأص",
      "metaDescription": "المصنع المباشر لطين الغاسول المغربي الطبيعي 100% بالجملة وللعلامة التجارية الخاصة. مستخرج من جبال الأطلس لتنقية الوجه، أقنعة الجسم وعلاج مشاكل الشعر.",
      "badge": "طبيعي 100% • المنجم الوحيد بالعالم • غني بالمعادن والمغنيسيوم",
      "subtitle": "صلصال طبيعي مغربي نقي (Moroccan Lava Clay)",
      "lead": "يستخرج حصرياً من مناجم ملوية تحت جبال الأطلس المتوسط في المغرب. استخدمه المغاربة لأكثر من 1400 عام لتنقية الجسم والشعر (واسمه مشتق من فعل 'غَسَلَ').",
      "overview": "يعد الغاسول المغربي من أندر وأجود أنواع الطين الطبيعي في العالم. يتميز بخصائص امتصاص وتنظيف فائقة بفضل غناه بالسيليكا، المغنيسيوم، الكالسيوم والحديد. يعمل كالمغناطيس لامتصاص الدهون الزائدة والرؤوس السوداء والسموم دون أن يسبب جفاف البشرة. مثالي لأقنعة الوجه، خلطات الحمام المغربي، وكبديل طبيعي للشامبو يمنح الشعر كثافة وحيوية طبيعية.",
      "benefits": [
        {
          "title": "امتصاص فائق للدهون والشوائب",
          "description": "ينظف المسام بعمق ويزيل السموم والزيوت الزائدة من الوجه والجسم دون تجفيف الجلد."
        },
        {
          "title": "تغذية معدنية غنية بالسيليكا والمغنيسيوم",
          "description": "يعيد بناء وتجديد خلايا البشرة ويعزز مرونتها وشبابها."
        },
        {
          "title": "كثافة وحيوية طبيعية للشعر",
          "description": "ينقي فروة الرأس من القشرة ويمنح خصلات الشعر حجماً ولمعاناً صحياً بديلاً للمواد الكيميائية."
        }
      ],
      "applications": [
        "ماسكات وأقنعة الوجه لتنقية المسام وإزالة الرؤوس السوداء",
        "لفافات وطمي الجسم في جلسات السبا والحمامات المغربية",
        "شامبو طبيعي خالٍ من السلفات لغسيل وتقوية بصيلات الشعر"
      ],
      "packagingOptions": [
        {
          "title": "أكياس ورقية وبلاستيكية بالجملة (5 كغ إلى 25 كغ)",
          "description": "متوفر على شكل رقائق مجففة بالشمس (شقف) أو مسحوق ناعم جداً للمصانع.",
          "moq": "10 كغ"
        },
        {
          "title": "عبوات تجارية جاهزة لعلامتكم الخاصة (200 غ إلى 500 غ)",
          "description": "علب أو أكياس أنيقة مجهزة بملصقات مقاومة للماء مع ملاعق خشبية اختيارية.",
          "moq": "50 عبوة"
        }
      ],
      "faq": [
        {
          "q": "ما الفرق بين الغاسول رقائق (شقف) والغاسول المطحون؟",
          "a": "كلاهما لهما نفس التركيبة المعدنية تماماً؛ الرقائق هي الشكل التقليدي المجفف بالشمس الذي يذوب في الماء الدافئ خلال ثوانٍ، بينما المطحون فائق النعومة لتسهيل المزج المباشر في الماسكات والكريمات."
        },
        {
          "q": "هل طين الغاسول آمن ومفحوص مخبرياً؟",
          "a": "نعم، نضمن خلو الغاسول من أي معادن ثقيلة وضمان سلامته الميكروبيولوجية بشهادات تحليل معتمدة دولياً."
        }
      ],
      "moq": "ابتداءً من 10 كغ (جملة) / 50 عبوة (OEM)",
      "shortExtraction": "استخراج باطني من مناجم الأطلس وتجفيف شمسي",
      "shortOrigin": "جبال الأطلس المتوسط، المغرب",
      "specs": {
        "extraction": "صلصال طبيعي يُستخرج من أعماق مناجم ملوية، يُغسل بالماء العذب ويُجفف تحت أشعة الشمس",
        "origin": "حوض ملوية، جبال الأطلس المتوسط، المملكة المغربية",
        "grade": "طبيعي ومعدني نقي 100% درجة سبا وعناية تجميلية",
        "certifications": "معتمد من إيكوسيرت، ISO 22716، فحص مخبري شامل للمعادن الثقيلة",
        "shelfLife": "صلاحية غير محدودة عند الحفظ في مكان جاف",
        "appearance": "رقائق مجففة (شقف) أو مسحوق ناعم يتحول إلى معجون شوكولاتة حريري عند خلطه بالماء"
      }
    }
  },
  {
    "slug": "moroccan-rose-water",
    "category": "watersToners",
    "image": "/image/moroccan-rose-water-distillate.webp",
    "gallery": [
      "/image/moroccan-rose-water-distillate.webp",
      "/image/pure-natural-rose-water.webp",
      "/image/dried-rosebuds-petals.webp"
    ],
    "bestFor": "Facial toning mists, anti-aging refreshers, sensitive skin soothing, luxury organic cosmetic formulations",
    "formats": "1L, 5L, 25L bulk drums, or private label fine-mist spray bottles (100ml, 150ml, 200ml)",
    "moq": "5 Liters (Bulk) / 50 Units (Private Label)",
    "specs": {
      "inci": "Rosa Damascena Flower Water",
      "botanicalName": "Rosa damascena Mill.",
      "casNumber": "90106-38-0",
      "extraction": "First steam distillation of fresh hand-picked organic Damask rose petals (1:1 distillation ratio)",
      "origin": "Kelaat M'Gouna (Valley of the Roses), Dades Valley, Morocco",
      "grade": "100% Pure Organic Hydrosol (Unadulterated, Alcohol-Free, Preservative-Free)",
      "certifications": "ECOCERT COSMOS Organic, USDA NOP Organic, ISO 22716, Microbially Tested",
      "shelfLife": "24 months stored in a cool place away from sunlight and direct heat",
      "appearance": "Crystal clear liquid with an enchanting, authentic fresh Moroccan Damask rose bouquet"
    },
    "en": {
      "title": "Organic Moroccan Rose Water & Floral Hydrosols",
      "metaTitle": "Moroccan Rose Water Wholesale | Organic Rosa Damascena",
      "metaDescription": "Direct manufacturer of 100% pure organic Moroccan Rose Water (Rosa Damascena) from Kelaat M'Gouna. Bulk & private label fine mist sprays.",
      "badge": "100% Organic • Valley of Roses • Steam Distilled",
      "subtitle": "Pure Steam-Distilled Moroccan Rosa Damascena Floral Water",
      "lead": "Harvested at dawn in the renowned Valley of the Roses (Kelaat M'Gouna). Hand-picked fresh Damask rose petals undergo traditional copper steam distillation to create an exquisite, naturally fragrant hydrosol.",
      "overview": "Moroccan Rose Water (Rosa Damascena distillate) is celebrated worldwide for its gentle astringent, toning, and anti-inflammatory properties. Unlike industrial synthetic floral waters, our pure hydrosol contains the natural micro-droplets of pure rose essential oil produced during first-pass steam distillation. Free of alcohol, added fragrance, and artificial preservatives, it restores the skin's natural 5.5 pH balance, calms rosacea and redness, tightens open pores, and instantly quenches dry skin.",
      "benefits": [
        {
          "title": "Natural pH Balance Restoration",
          "description": "Brings skin back to its optimal slightly acidic 5.5 pH after cleansing, reinforcing skin barrier strength."
        },
        {
          "title": "Soothes Redness & Irritation",
          "description": "Powerful anti-inflammatory properties calm sensitive skin, sunburns, eczema, and rosacea flare-ups."
        },
        {
          "title": "Pore Tightening & Toning",
          "description": "Gentle natural astringent cleanses residual sebum and refines the appearance of enlarged pores."
        },
        {
          "title": "Aromatherapeutic Uplift",
          "description": "Natural Damask rose aroma calms the nervous system and relieves mental stress and fatigue."
        }
      ],
      "applications": [
        "Hydrating face toners and revitalizing setting sprays",
        "Post-cleansing balancing mists for all skin types",
        "Base aqueous ingredient replacing water in luxury serums and creams",
        "Gentle soothing compresses for tired, puffy eyes"
      ],
      "packagingOptions": [
        {
          "title": "Bulk Jerrycans & Drums (5L, 25L, 200L)",
          "description": "Food-grade HDPE containers sealed for bulk cosmetic and perfumery manufacturing.",
          "moq": "5 Liters"
        },
        {
          "title": "Luxury Fine Mist Spray Bottles (100ml, 150ml)",
          "description": "Amber or frosted glass and PET bottles with micro-diffusers and branded packaging.",
          "moq": "50 Units"
        }
      ],
      "faq": [
        {
          "q": "Is this pure steam distillate or water with added rose fragrance?",
          "a": "Our Moroccan Rose Water is 100% pure steam-distilled floral hydrosol, containing genuine volatile rose essential oil. We never use artificial fragrance, alcohol, or synthetic solubilizers."
        },
        {
          "q": "What is the distillation ratio?",
          "a": "We use a premium 1:1 distillation ratio (1 kg of fresh organic rose petals yields 1 liter of concentrated hydrosol), ensuring rich aromatic potency and maximum active compounds."
        }
      ],
      "moq": "5 Liters (Bulk) / 50 Units (OEM)",
      "shortExtraction": "First copper steam distillation",
      "shortOrigin": "Kelaat M'Gouna, Morocco",
      "specs": {
        "extraction": "First steam distillation of fresh hand-picked organic Damask rose petals (1:1 ratio)",
        "origin": "Kelaat M'Gouna (Valley of the Roses), Dades Valley, Morocco",
        "grade": "100% Pure Organic Hydrosol (Alcohol-Free, Preservative-Free)",
        "certifications": "ECOCERT COSMOS Organic, USDA NOP Organic, ISO 22716, Microbially Tested",
        "shelfLife": "24 months stored in a cool place away from sunlight",
        "appearance": "Crystal clear liquid with an enchanting, authentic fresh Damask rose bouquet"
      }
    },
    "fr": {
      "title": "Eau de Rose Marocaine Bio & Hydrolats Floraux",
      "metaTitle": "Eau de Rose du Maroc Bio en Gros | Grossiste Hydrolat K",
      "metaDescription": "Fabricant direct d'eau de rose de Damas bio du Maroc (Kelaat M'Gouna) en vrac et marque blanche. Distillation artisanale à la vapeur.",
      "badge": "100% Biologique • Vallée des Roses • Distillation Vapeur",
      "subtitle": "Hydrolat Pur de Rosa Damascena de Kelaat M'Gouna",
      "lead": "Récoltée à l'aube au cœur de la Vallée des Roses de Kelaat M'Gouna. Les pétales frais de rose de Damas sont distillés à la vapeur d'eau pour produire un hydrolat aromatique d'une pureté rare.",
      "overview": "L'eau florale de rose de Damas marocaine est réputée pour ses vertus apaisantes, tonifiantes et régénérantes. Sans alcool ni conservateur synthétique, elle rééquilibre le pH naturel de la peau après le nettoyage, resserre les pores et illumine le teint. Convient parfaitement aux peaux sensibles, couperosées ou matures.",
      "benefits": [
        {
          "title": "Rééquilibre le pH Cutané",
          "description": "Restaure la barrière acide protectrice de la peau après le nettoyage."
        },
        {
          "title": "Apaise les Rougeurs et Irritations",
          "description": "Calme instantanément les échauffements cutanés et les peaux réactives."
        },
        {
          "title": "Tonifiant & Astringent Doux",
          "description": "Affine le grain de peau et resserre les pores visibles."
        }
      ],
      "applications": [
        "Lotions toniques pour le visage et brumes rafraîchissantes",
        "Phase aqueuse active pour crèmes et sérums anti-âge",
        "Compresses apaisantes pour le contour des yeux"
      ],
      "packagingOptions": [
        {
          "title": "Bidons Vrac (5L à 200L)",
          "description": "Pour laboratoires cosmétiques et conditionneurs.",
          "moq": "5 Litres"
        },
        {
          "title": "Flacons Spray Micro-Brume (100ml et 200ml)",
          "description": "Flacons verre ambré ou blanc opaque avec pulvérisateur et étui.",
          "moq": "50 Flacons"
        }
      ],
      "faq": [
        {
          "q": "Quel est le ratio de distillation ?",
          "a": "Notre hydrolat est issu d'un ratio 1:1 (1 kg de roses fraîches pour 1 litre d'eau florale), garantissant une haute teneur en molécules aromatiques actives."
        }
      ],
      "moq": "Dès 5 Litres (Vrac) / 50 Flacons (OEM)",
      "shortExtraction": "1ère distillation vapeur cuivre (ratio 1:1)",
      "shortOrigin": "Kelaat M'Gouna, Maroc",
      "specs": {
        "extraction": "Première distillation artisanale à la vapeur de pétales frais de rose de Damas (ratio 1:1)",
        "origin": "Kelaat M'Gouna (Vallée des Roses), Vallée du Dadès, Maroc",
        "grade": "Hydrolat Biologique Pur 100% (Sans Alcool, Sans Conservateur)",
        "certifications": "ECOCERT COSMOS Bio, USDA Organic, ISO 22716 BPF, Contrôlé Microbiologiquement",
        "shelfLife": "24 mois dans un endroit frais à l'abri de la lumière",
        "appearance": "Eau florale limpide et transparente au parfum captivant de roses fraîches"
      }
    },
    "ar": {
      "title": "ماء الورد المغربي العضوي والمقطرات المائية بالجملة",
      "metaTitle": "ماء الورد المغربي بالجملة | هيدرولات ورد قلعة مكونة العضوي",
      "metaDescription": "المصنع المباشر لماء الورد المغربي العضوي النقي (ورد قلعة مكونة) بالجملة وللعلامة التجارية الخاصة. مقطر بالبخار 100% طبيعي بدون كحول أو مواد حافظة.",
      "badge": "عضوي معتمد 100% • وادي الورود قلعة مكونة • تقطير بخاري نقي",
      "subtitle": "ماء الورد الدمشقي المغربي المقطر بالبخار (Rosa Damascena)",
      "lead": "يُقطف يدوياً مع إشراقة الصباح الأولى في وادي الورود الشهير (قلعة مكونة). تُقطر بتلات الورد الدمشقي الطازجة بالبخار في أوانٍ تقليدية لإنتاج ماء ورد نقي وغني بقطرات زيت الورد العطري.",
      "overview": "يُعد ماء الورد المغربي الطبيعي تونر العناية المثالي لجميع أنواع البشرة. يمتاز بقدرته على موازنة درجة حموضة الجلد (pH 5.5)، وشد المسام المفتوحة، وتهدئة الاحمرار والالتهابات الناتجة عن حب الشباب أو أشعة الشمس. خالي تماماً من الكحول والروائح الاصطناعية، ويمنح انتعاشاً فورياً ورائحة ورد طبيعية تأسر الحواس.",
      "benefits": [
        {
          "title": "موازنة درجة الحموضة الطبيعية للبشرة",
          "description": "يعيد التوازن الطبيعي للجلد بعد الغسول ويحمي الحاجز الدهني الواقي."
        },
        {
          "title": "تهدئة الاحمرار وحساسية البشرة",
          "description": "مضاد طبيعي للالتهاب يهدئ الوردية وحروق الشمس وتهيج البشرة الحساسة."
        },
        {
          "title": "شد المسام وتنشيط الإشراقة",
          "description": "ينقي البشرة من بقايا الشوائب ويشد المسام المتوسعة ويمنح نضارة فورية."
        }
      ],
      "applications": [
        "تونر يومي وبخاخات ترطيب وإنعاش الوجه طوال اليوم",
        "مكون مائي بديل للماء العادي في تصنيع السيرومات والكريمات الفاخرة",
        "كمادات مهدئة ومزيلة لانتفاخ وإرهاق محيط العينين"
      ],
      "packagingOptions": [
        {
          "title": "جالونات وبراميل بالجملة (5 لتر إلى 200 لتر)",
          "description": "عبوات معقمة مخصصة لمصانع ومختبرات المستحضرات التجميلية.",
          "moq": "5 لتر"
        },
        {
          "title": "قوارير بخاخ رذاذ ناعم جاهزة لعلامتكم (100 مل إلى 200 مل)",
          "description": "قوارير زجاجية أو بلاستيكية فاخرة مع مضخات رذاذ دقيق وتصميم هوية علامتكم.",
          "moq": "50 عبوة"
        }
      ],
      "faq": [
        {
          "q": "هل هو ماء مقطر حقيقي أم ماء عادي مع عطر ورد مضاف؟",
          "a": "ماء الورد لدينا مقطر بالبخار 100% من بتلات الورد الطبيعي ويحتوي على زيوت الورد الطيارة الأصلية دون أي إضافة عطور اصطناعية أو كحول."
        },
        {
          "q": "ما هي نسبة التقطير المعتمدة لديكم؟",
          "a": "نعتمد نسبة التقطير المركزة 1:1 (كل كيلوغرام من بتلات الورد الطازجة ينتج لتراً واحداً من الهيدرولات المركز)."
        }
      ],
      "moq": "ابتداءً من 5 لتر (جملة) / 50 عبوة (OEM)",
      "shortExtraction": "تقطير بخاري أول بقطرات زيت الورد (1:1)",
      "shortOrigin": "قلعة مكونة، المغرب",
      "specs": {
        "extraction": "تقطير بخاري نقي أول لبتلات الورد الدمشقي الطازجة بنسبة تركيز مركزة 1:1",
        "origin": "قلعة مكونة (وادي الورود)، وادي دادس، المملكة المغربية",
        "grade": "ماء ورد مقطر نقي وعضوي 100% (خالٍ من الكحول والمواد الحافظة)",
        "certifications": "إيكوسيرت العضوية، وزارة الزراعة الأمريكية، ISO 22716، فحص ميكروبيولوجي كامل",
        "shelfLife": "24 شهراً عند الحفظ في مكان بارد بعيداً عن أشعة الشمس والحرارة",
        "appearance": "سائل نقي بلوري صافٍ برائحة الورد الدمشقي المغربي الفواحة والمنعشة"
      }
    }
  },
  {
    "slug": "kessa-exfoliating-glove",
    "category": "hammam",
    "image": "/image/kessa-exfoliating-glove.webp",
    "gallery": [
      "/image/kessa-exfoliating-glove.webp",
      "/image/handmade-pumice-stone-wool.webp"
    ],
    "bestFor": "Body peeling spas, pre-tan exfoliation rituals, anti-ingrown hair treatments, hammam accessory sets",
    "formats": "Bulk cartons of 100, 500, 1000 units, or individually packaged in custom branded boxes/pouches",
    "moq": "50 Units (Wholesale / OEM Custom Branded)",
    "specs": {
      "inci": "Viscose / Crepe textile fiber glove",
      "botanicalName": "Granular crepe weave textile",
      "casNumber": "N/A (Textile Accessory)",
      "extraction": "Woven using authentic Moroccan granular-crepe threading designed for mechanical body peeling",
      "origin": "Fez & Casablanca, Morocco",
      "grade": "Professional Premium Spa Grade (Durable Double Stitching)",
      "certifications": "Oeko-Tex Standard Compliant, Skin-Safe Certified, Washable & Reusable",
      "shelfLife": "Reusable for 3-6 months of regular spa use",
      "appearance": "Textured crepe glove with elastic wrist band; available in classic black, sand, terracotta, and custom colors"
    },
    "en": {
      "title": "Traditional Moroccan Kessa Exfoliating Glove Wholesale",
      "metaTitle": "Moroccan Kessa Glove Wholesale | Authentic Hammam Exfol",
      "metaDescription": "Direct wholesale manufacturer of authentic Moroccan Kessa exfoliating gloves. Double-stitched premium crepe fabric for professional spas and private.",
      "badge": "Authentic Hammam Essential • Double-Stitched Spa Quality • Washable",
      "subtitle": "Traditional Moroccan Granular Crepe Exfoliating Hammam Mitt",
      "lead": "The indispensable partner to Moroccan Black Soap. Handcrafted using high-density crepe fiber weave, engineered to roll away dead skin cells without scratching or irritating the epidermis.",
      "overview": "The Moroccan Kessa glove has remained the definitive body exfoliation tool in North African bathhouses for generations. Unlike synthetic loofahs that harvest bacteria, the Kessa glove's specialized granular crepe weave catches dead, keratinized skin cells and rolls them away in visible particles when rubbed over skin prepared with Moroccan black soap. It unclogs pores, stimulates lymphatic microcirculation, eliminates ingrown hairs, and primes the skin for tanning and deep hydration.",
      "benefits": [
        {
          "title": "Visible Dead Skin Peeling",
          "description": "Effortlessly rolls away dead skin and stubborn impurities in visible particles without harsh chemicals."
        },
        {
          "title": "Eliminates & Prevents Ingrown Hairs",
          "description": "Unplugs trapped hair follicles and keratosis pilaris (strawberry skin) on arms and legs."
        },
        {
          "title": "Stimulates Microcirculation & Lymphatic Flow",
          "description": "Invigorating massage action oxygenates the skin, reducing cellulite appearance and promoting cellular renewal."
        },
        {
          "title": "Long-Lasting Reinforced Double-Stitching",
          "description": "Manufactured with reinforced seams and heavy-duty elastic wristband to withstand professional spa use."
        }
      ],
      "applications": [
        "Moroccan hammam and luxury day spa peeling rituals",
        "Pre-tanning and post-tanning skin preparation",
        "Weekly home body exfoliating shower routines",
        "Curated spa gift sets paired with Moroccan black soap"
      ],
      "packagingOptions": [
        {
          "title": "Bulk Master Cartons (100, 500, 1000 units)",
          "description": "Packed flat in polybags for high-volume spa use and repackaging.",
          "moq": "50 Units"
        },
        {
          "title": "Private Label Individual Packaging",
          "description": "Custom kraft paper boxes, branded cotton drawstring pouches, or transparent OPP sleeves with header cards.",
          "moq": "100 Units"
        }
      ],
      "faq": [
        {
          "q": "Can you customize the wristband tag with our brand logo?",
          "a": "Yes! We offer custom woven satin labels sewn onto the wristband, custom glove colors, and bespoke printed retail packaging."
        },
        {
          "q": "How often should a Kessa glove be used?",
          "a": "For optimal skin health, we recommend using it once a week after a warm bath or shower with Moroccan black soap."
        }
      ],
      "moq": "50 Units (Wholesale / OEM)",
      "shortExtraction": "Granular crepe weave textile",
      "shortOrigin": "Fez & Casablanca, Morocco",
      "specs": {
        "extraction": "Woven using authentic Moroccan granular-crepe threading for mechanical body peeling",
        "origin": "Fez & Casablanca, Morocco",
        "grade": "Professional Premium Spa Grade (Double-Stitched)",
        "certifications": "Oeko-Tex Standard Compliant, Skin-Safe Certified, Washable & Reusable",
        "shelfLife": "Reusable for 3-6 months of regular spa use",
        "appearance": "Textured crepe glove with elastic wrist band (Black, sand, or custom colors)"
      }
    },
    "fr": {
      "title": "Gant Kessa Marocain Traditionnel Vente en Gros",
      "metaTitle": "Gant de Kessa Marocain en Gros | Fabricant Gant Exfolia",
      "metaDescription": "Fabricant direct de gants de Kessa marocains authentiques en gros et personnalisés. Qualité spa professionnelle indéchirable avec coutures renforcées.",
      "badge": "Indispensable du Hammam • Qualité Professionnelle • Lavable",
      "subtitle": "Gant de Gommage Traditionnel en Crêpe Granuleux",
      "lead": "Le compagnon indispensable du Savon Noir Marocain. Conçu dans un tissu crêpe de haute densité pour éliminer les peaux mortes sans irriter l'épiderme.",
      "overview": "Le gant de Kessa est l'accessoire incontournable du rituel du hammam marocain. Sa texture granuleuse unique retient et décolle les cellules mortes et les impuretés pour laisser la peau lisse, soyeuse et stimulée. Coutures doublées ultra-résistantes adaptées aux utilisations régulières en instituts de beauté et spas.",
      "benefits": [
        {
          "title": "Exfoliation Visible et Efficace",
          "description": "Élimine les peaux mortes sous forme de petits rouleaux visibles pour une peau neuve."
        },
        {
          "title": "Prévient les Poils Incarnés",
          "description": "Désobstrue les follicules pileux et combat la peau de fraise sur les jambes et les bras."
        },
        {
          "title": "Stimulation de la Microcirculation",
          "description": "Active la circulation sanguine et améliore l'oxygénation des tissus."
        }
      ],
      "applications": [
        "Gommages corporels au hammam et instituts de beauté",
        "Préparation de la peau avant bronzage ou autobronzant",
        "Coffrets cadeaux spa avec savon noir"
      ],
      "packagingOptions": [
        {
          "title": "Cartons Vrac (100 à 1000 unités)",
          "description": "Pour professionnels du spa et distributeurs.",
          "moq": "50 Pièces"
        },
        {
          "title": "Conditionnement Personnalisé avec Étiquette Logo",
          "description": "Étiquette tissée avec votre marque cousue au poignet et étui cartonné personnalisé.",
          "moq": "100 Pièces"
        }
      ],
      "faq": [
        {
          "q": "Le gant est-il réutilisable ?",
          "a": "Oui, parfaitement lavable à l'eau chaude et réutilisable pendant plusieurs mois sans perdre son efficacité de frottement."
        }
      ],
      "moq": "Dès 50 Pièces (Gros / Marque Blanche)",
      "shortExtraction": "Tissage crêpe granuleux renforcé",
      "shortOrigin": "Fès & Casablanca, Maroc",
      "specs": {
        "extraction": "Tissage en crêpe granuleux traditionnel marocain conçu pour l'exfoliation corporelle",
        "origin": "Fès et Casablanca, Maroc",
        "grade": "Qualité Professionnelle pour Spas (Coutures Doublées)",
        "certifications": "Conforme Oeko-Tex, Garanti sans risque cutané, Lavable & Réutilisable",
        "shelfLife": "Réutilisable pendant 3 à 6 mois d'utilisation régulière",
        "appearance": "Gant en crêpe texturé avec élastique de maintien au poignet"
      }
    },
    "ar": {
      "title": "كيس الحمام المغربي (قفاز الكيسة التقليدي) بالجملة",
      "metaTitle": "كيس الحمام المغربي بالجملة | مصنع قفاز الكيسة الأصلي لل",
      "metaDescription": "المصنع المباشر لقفاز الكيسة المغربية التقليدية (كيس الحمام) بالجملة وللعلامة التجارية الخاصة. خياطة مزدوجة متينة وقماش كريب عالي الجودة للتقشير الاحترافي.",
      "badge": "أصل الحمام المغربي • خياطة مزدوجة احترافية • جودة تدوم طويلاً",
      "subtitle": "قفاز الحمام المغربي التقليدي من قماش الكريب الحبيبي المقاوم",
      "lead": "الرفيق الأساسي الذي لا غنى عنه مع الصابون البلدي المغربي. يُصنع من خيوط الكريب الحبيبية عالية الكثافة لفرك وإزالة الجلد الميت دون جرح أو خدش البشرة.",
      "overview": "تعتبر الكيسة المغربية أداة التقشير الأكثر شهرة وفعالية عبر العصور. بفضل نسيجها الفريد، تعمل على إزالة طبقات الجلد الميت المتراكمة والشوائب على شكل حبيبات مرئية عند فرك الجسم بعد تهيئته بالصابون الأسود. تساعد على تنشيط الدورة الدموية، ومنع نمو الشعر تحت الجلد (جلد الدجاجة)، وتجهيز البشرة لامتصاص المرطبات بكفاءة عالية.",
      "benefits": [
        {
          "title": "تقشير فوري ومرئي للجلد الميت",
          "description": "يزيل الشوائب والخلايا الميتة المتراكمة بوضوح ليمنح ملمساً حريرياً ناعماً."
        },
        {
          "title": "التخلص من جلد الدجاجة والشعر تحت الجلد",
          "description": "يفتح المسام المسدودة ويحرر بصيلات الشعر لنتائج ناعمة بعد إزالة الشعر."
        },
        {
          "title": "تنشيط الدورة الدموية وشد الترهلات",
          "description": "تدليك علاجي يحفز تصريف السوائل ويساعد على تقليل مظهر السيلوليت."
        }
      ],
      "applications": [
        "جلسات الفرك والتقشير في الحمامات المغربية ومراكز السبا الفاخرة",
        "الاستخدام الأسبوعي المنزلي للعناية بالجسم وتجديد نضارته",
        "مجموعات وباقات الهدايا التجميلية مع الصابون المغربي والغاسول"
      ],
      "packagingOptions": [
        {
          "title": "كراتين بالجملة (100 إلى 1000 قطعة)",
          "description": "مغلفة بشكل مسطح ومثالية لمراكز السبا والموزعين الكبار.",
          "moq": "50 حبة"
        },
        {
          "title": "تغليف مخصص لعلامتكم التجارية",
          "description": "خياطة علامة قماشية بشعاركم على المعصم وعلب كرتونية فاخرة مخصصة.",
          "moq": "100 حبة"
        }
      ],
      "faq": [
        {
          "q": "هل يمكن وضع شعار علامتي التجارية على الكيسة؟",
          "a": "نعم، نقوم بخياطة شريط حريري مطبوع بشعاركم واسم علامتكم على شريط المعصم وتوفير أكياس كرتونية مخصصة."
        },
        {
          "q": "كم مرة يمكن استخدام قفاز الكيسة؟",
          "a": "قفازنا ذو خياطة مزدوجة متينة تدوم من 3 إلى 6 أشهر من الاستخدام المنتظم دون تمزق."
        }
      ],
      "moq": "ابتداءً من 50 حبة (جملة / علامة خاصة)",
      "shortExtraction": "نسيج كريب حبيبي بخياطة مزدوجة",
      "shortOrigin": "فاس والدار البيضاء، المغرب",
      "specs": {
        "extraction": "حياكة تقليدية من خيوط الكريب الحبيبي المغربي المخصص لفرك وتقشير الجلد الميت",
        "origin": "فاس والدار البيضاء، المملكة المغربية",
        "grade": "درجة سبا احترافية ممتازة (خياطة مزدوجة معززة)",
        "certifications": "مطابق لمعايير Oeko-Tex، آمن على البشرة، قابل للغسيل وإعادة الاستخدام",
        "shelfLife": "صالح للاستخدام المتكرر لمدة 3 إلى 6 أشهر دون تمزق",
        "appearance": "قفاز كريب حبيبي خشن الملمس مع شريط مطاطي مريح عند المعصم"
      }
    }
  },
  {
    "slug": "food-grade-argan-oil",
    "category": "oils",
    "image": "/image/culinary-argan-oil-bulk.webp",
    "gallery": [
      "/image/culinary-argan-oil-bulk.webp",
      "/image/cosmetic-argan-oil-handmade.webp"
    ],
    "bestFor": "Gourmet culinary chefs, luxury organic grocery brands, nutritional supplements, functional food formulations",
    "formats": "250ml, 500ml marasca glass bottles, 5L, 25L food-grade jerrycans, 200L drums",
    "moq": "5 Liters (Bulk) / 50 Bottles (Private Label)",
    "specs": {
      "inci": "Argania Spinosa Kernel Oil (Roasted Culinary Grade)",
      "botanicalName": "Argania spinosa (L.) Skeels",
      "casNumber": "223747-87-3",
      "extraction": "Artisanal light wood-fire roasting of kernels followed by cold mechanical pressing and decantation",
      "origin": "Taroudant & Souss Valley, Morocco",
      "grade": "Extra Virgin Culinary Food Grade (Acidity < 0.8%)",
      "certifications": "ONSSA Food Safety Certified, USDA Organic, ECOCERT Organic, ISO 22000 / HACCP",
      "shelfLife": "24 months in a cool, dark pantry",
      "appearance": "Luminous deep amber-copper oil with an unforgettable roasted hazelnut and sesame aroma"
    },
    "en": {
      "title": "Culinary Extra Virgin Moroccan Argan Oil Bulk",
      "metaTitle": "Culinary Moroccan Argan Oil Wholesale | B2B",
      "metaDescription": "Direct wholesale manufacturer of authentic culinary Moroccan Argan Oil. Lightly roasted kernels cold-pressed for gourmet cuisine,",
      "badge": "Gourmet Culinary Grade • Lightly Roasted • ONSSA & Organic Certified",
      "subtitle": "Extra Virgin Cold-Pressed Roasted Moroccan Argania Spinosa Oil",
      "lead": "The gastronomic crown jewel of Moroccan cuisine. Kernels are delicately roasted to perfection before cold pressing, releasing a seductive roasted hazelnut bouquet prized by Michelin-star chefs worldwide.",
      "overview": "Culinary Moroccan Argan Oil is celebrated for its irresistible nutty flavor profile and clinically proven cardiovascular health benefits. Naturally rich in monounsaturated oleic acid (Omega-9), polyunsaturated linoleic acid (Omega-6), and plant sterols (schottenol and spinasterol), culinary argan oil supports healthy cholesterol levels, reduces arterial inflammation, and aids digestion. Drizzle over salads, roasted vegetables, artisanal cheeses, couscous, or blend into traditional Moroccan Amlou.",
      "benefits": [
        {
          "title": "Exceptional Gourmet Nutty Flavor",
          "description": "Adds complex notes of toasted hazelnut, sesame, and brioche to cold dishes and fine dining recipes."
        },
        {
          "title": "Cardiovascular & Heart Health",
          "description": "Over 80% unsaturated fatty acids and plant sterols clinically demonstrated to help lower LDL cholesterol."
        },
        {
          "title": "Rich in Natural Antioxidants",
          "description": "Abundant Vitamin E and polyphenols defend internal cells against oxidative stress."
        },
        {
          "title": "ONSSA & HACCP Certified Pure",
          "description": "Produced under strict food safety and international hygienic export certifications."
        }
      ],
      "applications": [
        "Gourmet salad dressings, artisanal vinaigrettes, and finishing drizzles",
        "Traditional Moroccan Amlou spread (argan oil, roasted almonds, wild honey)",
        "Luxury private label gourmet gift bottles for organic delicatessens",
        "High-end nutritional health supplements and softgels"
      ],
      "packagingOptions": [
        {
          "title": "Bulk Food-Grade Jerrycans (5L & 25L)",
          "description": "Food-certified containers for food processors, restaurants, and catering services.",
          "moq": "5 Liters"
        },
        {
          "title": "Marasca Dark Glass Bottles (250ml & 500ml)",
          "description": "Square UV-protective dark green glass bottles with non-drip pourer inserts and luxury labels.",
          "moq": "50 Bottles"
        }
      ],
      "faq": [
        {
          "q": "What is the difference between cosmetic and culinary argan oil?",
          "a": "Cosmetic argan oil is cold-pressed from raw, unroasted kernels (pale gold with faint aroma). Culinary argan oil is pressed from lightly roasted kernels, developing a deep amber color and exquisite toasted hazelnut taste."
        },
        {
          "q": "Can culinary argan oil be used for high-heat frying?",
          "a": "No. Culinary argan oil is an extra-virgin finishing oil. To preserve its delicate aromatic compounds and nutritional integrity, it should never be heated to high frying temperatures; use it as a finishing drizzle over cooked or fresh dishes."
        }
      ],
      "moq": "5 Liters (Bulk) / 50 Bottles (OEM)",
      "shortExtraction": "Artisanal wood-fire roasted & cold pressed",
      "shortOrigin": "Taroudant, Morocco",
      "specs": {
        "extraction": "Artisanal light wood-fire roasting of kernels followed by cold mechanical pressing",
        "origin": "Taroudant & Souss Valley, Morocco",
        "grade": "Extra Virgin Culinary Food Grade (Acidity < 0.8%)",
        "certifications": "ONSSA Food Safety Certified, USDA Organic, ECOCERT Organic, ISO 22000 / HACCP",
        "shelfLife": "24 months in a cool, dark pantry",
        "appearance": "Luminous deep amber-copper oil with toasted hazelnut and sesame aroma"
      }
    },
    "fr": {
      "title": "Huile d'Argan Culinaire Extra Vierge en Vrac",
      "metaTitle": "Huile d'Argan Culinaire en Gros | Fabricant Huile Alime",
      "metaDescription": "Fournisseur direct d'huile d'argan alimentaire marocaine extra vierge en vrac et bouteilles personnalisées. Amandons torréfiés au goût inimitable de.",
      "badge": "Qualité Gastronomique • Amandons Torréfiés • Certifiée ONSSA & Bio",
      "subtitle": "Huile d'Argan Alimentaire Vierge Pressée à Froid",
      "lead": "Le joyau gastronomique du terroir marocain. Les amandons sont délicatement torréfiés avant d'être pressés à froid, libérant un parfum gourmand de noisette grillée prisé des grands chefs.",
      "overview": "L'huile d'argan alimentaire est reconnue pour ses qualités gustatives d'exception et ses bienfaits nutritionnels avérés. Riche en acides gras insaturés (oméga-9 et oméga-6) et en antioxydants, elle participe à la régulation du cholestérol et à la protection cardiovasculaire. Sublime les salades, les poissons, le couscous et sert de base à la confection du traditionnel Amlou marocain.",
      "benefits": [
        {
          "title": "Saveur Noisette Incomparable",
          "description": "Apporte des notes raffinées de pain grillé et de noisette aux préparations culinaires."
        },
        {
          "title": "Protecteur Cardiovasculaire",
          "description": "Riche en acides gras insaturés et en stérols végétaux bénéfiques pour le cœur."
        },
        {
          "title": "Certifiée Qualité Alimentaire",
          "description": "Normes sanitaires strictes certifiées par l'ONSSA et conforme aux exigences HACCP."
        }
      ],
      "applications": [
        "Assaisonnement gastronomique et huiles de finition",
        "Confection de l'Amlou marocain (pâte d'amandes, miel et huile d'argan)",
        "Bouteilles d'épicerie fine sous votre propre marque"
      ],
      "packagingOptions": [
        {
          "title": "Bidons Vrac Alimentaires (5L à 25L)",
          "description": "Homologués contact alimentaire pour restaurateurs et transformateurs.",
          "moq": "5 Litres"
        },
        {
          "title": "Bouteilles Verre Marasca (250ml et 500ml)",
          "description": "Verre teinté protecteur avec bouchon verseur anti-goutte et étiquetage bilingue.",
          "moq": "50 Bouteilles"
        }
      ],
      "faq": [
        {
          "q": "L'huile est-elle chauffée pendant la cuisson ?",
          "a": "Non, c'est une huile de finition à déguster crue pour préserver ses arômes délicats et ses vitamines."
        }
      ],
      "moq": "Dès 5 Litres (Vrac) / 50 Bouteilles (OEM)",
      "shortExtraction": "Torréfié au feu de bois & pressé à froid",
      "shortOrigin": "Taroudant, Maroc",
      "specs": {
        "extraction": "Légère torréfaction artisanale au feu de bois des amandons suivie d'un pressage à froid",
        "origin": "Taroudant et Vallée du Souss, Maroc",
        "grade": "Extra Vierge Alimentaire Gastronomique (Acidité < 0,8%)",
        "certifications": "Certifié Sanitaire ONSSA, USDA Organic, ECOCERT Bio, ISO 22000 / HACCP",
        "shelfLife": "24 mois dans un endroit frais et sombre",
        "appearance": "Huile ambrée cuivrée au goût et parfum incomparables de noisette grillée"
      }
    },
    "ar": {
      "title": "زيت الأركان الغذائي البكر الممتاز بالجملة",
      "metaTitle": "زيت الأركان الغذائي بالجملة | زيت الطهي الفاخر المحمص ب",
      "metaDescription": "المصنع المباشر لزيت الأركان الغذائي المغربي البكر الممتاز بالجملة وللعلامة التجارية الخاصة. لوز محمص بعناية لنكهة شهية وفوائد صحية للقلب والشرايين.",
      "badge": "درجة غذائية ممتازة • لوز محمص تقليدي • شهادة السلامة الصحية ONSSA",
      "subtitle": "زيت أركان غذائي بكر ممتاز معصور على البارد من لوز محمص",
      "lead": "أيقونة الطهي المغربي الرفيع. يتم تحميص لوز الأركان بلطف على نار هادئة قبل عصره ميكانيكياً على البارد، ليطلق نكهة البندق المحمص الفاخرة التي يعشقها كبار طهاة العالم.",
      "overview": "يجمع زيت الأركان الغذائي بين متعة المذاق الرفيع والفوائد الصحية الاستثنائية للقلب والجهاز الهضمي. يحتوي على نسبة تتجاوز 80% من الأحماض الدهنية غير المشبعة (أوميغا 9 وأوميغا 6) ومركبات الستيرول النباتية التي تساعد على خفض الكوليسترول الضار وضبط ضغط الدم. يُستخدم كزيت فاخر مع السلطات، الطواجن، الخبز التقليدي، وصناعة خلطة أملو المغربية الشهيرة.",
      "benefits": [
        {
          "title": "مذاق بندق محمص فاخر",
          "description": "يضفي لمسة عطرية ساحرة للأطباق والسلطات ووجبات الإفطار الصحية."
        },
        {
          "title": "صحة القلب والأوعية الدموية",
          "description": "يساعد على خفض الكوليسترول الضار (LDL) وحماية الشرايين بفضل الستيرولات النباتية."
        },
        {
          "title": "معتمد ومطابق لأعلى معايير السلامة الغذائية",
          "description": "إنتاج مراقب ومرخص من المكتب الوطني للسلامة الصحية للمنتجات الغذائية (ONSSA)."
        }
      ],
      "applications": [
        "تتبيل السلطات الفاخرة والأطباق الباردة وزيت المائدة الفاخر",
        "إعداد خلطة أملو المغربية الأصيلة (أركان، لوز محمص، عسل حر)",
        "قوارير فاخرة مخصصة للمتاجر ومحلات المنتجات العضوية الراقية"
      ],
      "packagingOptions": [
        {
          "title": "جالونات غذائية بالجملة (5 لتر و 25 لتر)",
          "description": "عبوات معتمدة للمطاعم والفنادق وشركات الصناعات الغذائية.",
          "moq": "5 لتر"
        },
        {
          "title": "قوارير زجاجية مربعة ماراسكا (250 مل و 500 مل)",
          "description": "زجاج داكن عازل للضوء مع سدادة صب مانعة للتسريب وملصق أنيق.",
          "moq": "50 قارورة"
        }
      ],
      "faq": [
        {
          "q": "ما الفرق بين زيت الأركان التجميلي والغذائي؟",
          "a": "الزيت التجميلي يُعصر من لوز نيء غير محمص ويكون بلون ذهبي فاتح ورائحة خفيفة، بينما الزيت الغذائي يُعصر من لوز محمص بعناية ليكتسب لوناً عنبرياً داكناً ونكهة بندق شهية."
        },
        {
          "q": "هل يصلح زيت الأركان للقلي والطبخ على درجات حرارة عالية؟",
          "a": "لا، زيت الأركان يُعتبر زيت إضافة ونكهة فاخرة يُضاف بعد انتهاء الطهي أو على الأطباق الباردة حتى لا يفقد قيمته الغذائية العالية."
        }
      ],
      "moq": "ابتداءً من 5 لتر (جملة) / 50 قارورة (OEM)",
      "shortExtraction": "تحميص هادئ على الحطب وعصر على البارد",
      "shortOrigin": "تارودانت، المغرب",
      "specs": {
        "extraction": "تحميص خفيف تقليدي للوز على نار هادئة متبوع بعصر ميكانيكي بارد وترسيب طبيعي",
        "origin": "تارودانت وسهل سوس، المملكة المغربية",
        "grade": "بكر ممتاز درجة طهي فاخرة (حموضة أقل من 0.8%)",
        "certifications": "مرخص من المكتب الوطني للسلامة الصحية (ONSSA)، إيكوسيرت، HACCP",
        "shelfLife": "24 شهراً في مكان بارد ومعتم",
        "appearance": "زيت عنبري نحاسي صافٍ بنكهة ورائحة البندق والسمسم المحمص الفاخرة"
      }
    }
  },
  {
    "slug": "organic-jojoba-oil",
    "category": "oils",
    "image": "/image/organic-jojoba-oil.webp",
    "gallery": [
      "/image/organic-jojoba-oil.webp"
    ],
    "bestFor": "Facial oils for acne-prone skin, makeup removers, scalp balancing treatments, cosmetic carrier oil",
    "formats": "1L, 5L, 25L HDPE jerrycans, 200L drums, or custom dropper bottles (30ml, 50ml, 100ml)",
    "moq": "5 Liters (Bulk) / 50 Units (Private Label)",
    "specs": {
      "inci": "Simmondsia Chinensis Seed Oil",
      "botanicalName": "Simmondsia chinensis (Link) C.K.Schneid.",
      "casNumber": "90045-98-0",
      "extraction": "Pure cold-pressed virgin extraction from golden desert jojoba seeds",
      "origin": "Moroccan Sunny Desert Terroirs",
      "grade": "100% Pure Golden Unrefined Cosmetic Grade",
      "certifications": "ECOCERT Organic, ISO 22716 GMP, COA & MSDS Laboratory Certified",
      "shelfLife": "36+ months (Extremely stable liquid wax esters that resist oxidation)",
      "appearance": "Bright clear golden yellow liquid with clean, faint characteristic wax aroma"
    },
    "en": {
      "title": "Pure Cold-Pressed Golden Jojoba Oil Bulk",
      "metaTitle": "Golden Jojoba Oil Wholesale | Pure Cold-Pressed Liquid",
      "metaDescription": "Direct wholesale manufacturer of 100% pure Moroccan Golden Jojoba Oil. Mimics skin sebum naturally. Ideal for acne, oily skin, hair serums,",
      "badge": "100% Pure Golden • Biomimetic Wax Esters • Ultra-Stable",
      "subtitle": "Virgin Cold-Pressed Simmondsia Chinensis Liquid Wax",
      "lead": "Technically a liquid wax ester rather than a vegetable oil, Moroccan Golden Jojoba Oil is biologically identical to human skin's natural sebum, making it the supreme balancing oil for all skin types.",
      "overview": "Pure Golden Jojoba Oil is celebrated across the cosmetic industry for its remarkable biomimetic harmony with human sebum. Because it mirrors the skin's lipid structure, it penetrates effortlessly into deep epidermal layers without clogging pores, signaling the sebaceous glands to regulate excess oil production. Highly resistant to rancidity and oxidation, Jojoba oil is an essential stabilizing base for luxury essential oil formulations, beard oils, acne elixirs, and gentle eye makeup removers.",
      "benefits": [
        {
          "title": "Biomimetic Sebum Harmonization",
          "description": "Tricks the skin into believing it has produced sufficient oil, naturally balancing oily and T-zone complexions."
        },
        {
          "title": "Non-Comedogenic & Antibacterial",
          "description": "Inhibits acne-causing bacterial colonization while softening stubborn clogged pores."
        },
        {
          "title": "Exceptional Shelf-Life Stability",
          "description": "Liquid wax ester composition makes it naturally resistant to thermal degradation and oxidation."
        },
        {
          "title": "Deep Moisture Seal without Greasiness",
          "description": "Forms a lightweight breathable protective shield that locks in moisture without a shiny film."
        }
      ],
      "applications": [
        "Balancing facial serums for oily and combination acne-prone skin",
        "Natural gentle waterproof makeup removers and cleansing balms",
        "Luxury carrier oil for essential oil blending and aromatherapy",
        "Beard grooming oils, scalp tonics, and hair shine serums"
      ],
      "packagingOptions": [
        {
          "title": "Bulk HDPE Containers (5L, 25L, 200L)",
          "description": "Heavy-duty containers for formulators and cosmetic brands.",
          "moq": "5 Liters"
        },
        {
          "title": "Private Label Glass Dropper Bottles (30ml, 50ml, 100ml)",
          "description": "Clear or amber bottles with tailored labeling, droppers, or spray pumps.",
          "moq": "50 Units"
        }
      ],
      "faq": [
        {
          "q": "What is the difference between Golden Jojoba and Clear Jojoba?",
          "a": "Golden Jojoba is 100% unrefined, virgin, and cold-pressed, retaining all its natural golden carotenoids and nutrients. Clear jojoba has undergone chemical bleaching and deodorization. We supply 100% pure unrefined Golden Grade."
        },
        {
          "q": "Does Jojoba oil solidify in cold temperatures?",
          "a": "Yes! Because it is technically a natural wax ester, pure jojoba oil naturally solidifies below approximately 10°C (50°F). It liquefies completely when brought to room temperature without any loss of quality."
        }
      ],
      "moq": "5 Liters (Bulk) / 50 Units (OEM)",
      "shortExtraction": "Virgin cold-pressed unrefined wax",
      "shortOrigin": "Morocco Desert Terroirs",
      "specs": {
        "extraction": "Pure cold-pressed virgin extraction from golden desert jojoba seeds",
        "origin": "Moroccan Sunny Desert Terroirs",
        "grade": "100% Pure Golden Unrefined Cosmetic Grade",
        "certifications": "ECOCERT Organic, ISO 22716 GMP, COA & MSDS Laboratory Certified",
        "shelfLife": "36+ months (Extremely stable liquid wax esters)",
        "appearance": "Bright clear golden yellow liquid with clean, faint characteristic wax aroma"
      }
    },
    "fr": {
      "title": "Huile de Jojoba Dorée Pure Pressée à Froid en Vrac",
      "metaTitle": "Huile de Jojoba Dorée en Gros | Cire Liquide Vierge Pre",
      "metaDescription": "Fournisseur direct d'huile de jojoba dorée 100% pure du Maroc en vrac et marque blanche. Régulatrice de sébum pour peaux acnéiques,",
      "badge": "100% Pure & Vierge • Cire Biomimétique • Stabilité Remarquable",
      "subtitle": "Cire Liquide Pure Extraite de Graines de Simmondsia Chinensis",
      "lead": "Biologiquement plus proche d'une cire liquide que d'une huile, le Jojoba Doré possède une composition quasi-identique au sébum humain, ce qui en fait le soin équilibrant universel par excellence.",
      "overview": "L'huile de Jojoba Dorée est plébiscitée en formulation cosmétique pour sa parfaite affinité avec l'épiderme. Non comédogène, elle pénètre instantanément sans laisser de film gras, régule la production sébacée des peaux mixtes à grasses et apaise les cuirs chevelus irrités. Sa résistance naturelle à l'oxydation en fait une base idéale pour vos mélanges d'huiles précieuses.",
      "benefits": [
        {
          "title": "Régulation Naturelle du Sébum",
          "description": "Rééquilibre les peaux grasses et mixtes en mimant la structure lipidique naturelle."
        },
        {
          "title": "Non-Comédogène & Protectrice",
          "description": "Ne bouche pas les pores et renforce le film hydrolipidique protecteur."
        },
        {
          "title": "Remarquable Stabilité à l'Oxydation",
          "description": "Ne rancit pratiquement jamais, idéale comme base pour toutes vos formulations."
        }
      ],
      "applications": [
        "Sérums équilibrants pour peaux à imperfections",
        "Huiles démaquillantes et nettoyantes douces",
        "Soins pour la barbe et élixirs de brillance capillaire"
      ],
      "packagingOptions": [
        {
          "title": "Bidons Vrac (5L à 200L)",
          "description": "Conditionnement professionnel sécurisé pour la fabrication cosmétique.",
          "moq": "5 Litres"
        },
        {
          "title": "Marque Blanche Flacons Pipette (30ml à 100ml)",
          "description": "Flacons verre ambré ou transparents avec bouchon pipette personnalisé.",
          "moq": "50 Flacons"
        }
      ],
      "faq": [
        {
          "q": "L'huile se fige-t-elle au froid ?",
          "a": "Oui, étant une cire liquide naturelle, elle se fige naturellement sous 10°C et redevient parfaitement liquide à température ambiante sans altération de ses propriétés."
        }
      ],
      "moq": "Dès 5 Litres (Vrac) / 50 Flacons (OEM)",
      "shortExtraction": "Cire liquide vierge pressée à froid",
      "shortOrigin": "Terroirs Désertiques du Maroc",
      "specs": {
        "extraction": "Extraction mécanique à froid de graines de jojoba doré du désert",
        "origin": "Terroirs désertiques ensoleillés du Maroc",
        "grade": "100% Pure Dorée Non Raffinée Grade Cosmétique",
        "certifications": "ECOCERT Bio, ISO 22716 BPF, Certifié en Laboratoire (CoA & FDS)",
        "shelfLife": "36 mois et plus (Cire liquide naturellement très stable)",
        "appearance": "Liquide limpide jaune doré éclatant à l'odeur très discrète et neutre"
      }
    },
    "ar": {
      "title": "زيت الجوجوبا الذهبي النقي المعصور على البارد بالجملة",
      "metaTitle": "زيت الجوجوبا الذهبي بالجملة | شمع سائل نباتي معصور على",
      "metaDescription": "المصنع المباشر لزيت الجوجوبا الذهبي النقي 100% بالجملة وللعلامة التجارية الخاصة. مطابق لإفرازات البشرة الطبيعية لموازنة الدهون،",
      "badge": "ذهبي نقي 100% • شمع سائل حيوي • ثبات استثنائي ضد الأكسدة",
      "subtitle": "شمع سائل بكر معصور على البارد من بذور الجوجوبا الطبيعية",
      "lead": "علمياً يُعتبر شمعاً نباتياً سائلاً وليس زيتاً، ويتميز بكونه مطابقاً كيميائياً للزهم الطبيعي الذي تفرزه بشرة الإنسان، مما يجعله الزيت الموازن الأفضل لجميع أنواع البشرة.",
      "overview": "يحظى زيت الجوجوبا الذهبي بمكانة رائدة في صناعة المستحضرات التجميلية العالمية. لكونه يحاكي الإفرازات الدهنية الطبيعية للجلد، فإنه يمتص بسرعة فائقة دون أن يسد المسام، ويرسل إشارات للغدد الدهنية لتنظيم إفراز الزيوت في البشرة الدهنية والمختلطة. يمتاز بمقاومة مذهلة للأكسدة والتزنخ، مما يجعله زيوتاً حاملاً مثالياً للخلطات العطرية، زيوت اللحية، ومزيلات المكياج الطبيعية.",
      "benefits": [
        {
          "title": "موازنة الإفرازات الدهنية للبشرة",
          "description": "يوازن لمعان البشرة الدهنية والمختلطة في منطقة الـ T-Zone بشكل طبيعي."
        },
        {
          "title": "لا يسد المسام ومضاد للبكتيريا",
          "description": "يساعد على الحد من البكتيريا المسببة لحب الشباب وينعم الرؤوس السوداء."
        },
        {
          "title": "عمر افتراضي طويل ومقاومة للتزنخ",
          "description": "بفضل تركيبته الشمعية فإنه لا يتأكسد بسهولة ويدوم لسنوات دون تلف."
        },
        {
          "title": "ترطيب عميق وحماية لحاجز البشرة",
          "description": "يحبس الرطوبة داخل أنسجة الجلد ويحمي من الجفاف دون أي ملمس زيتي لزج."
        }
      ],
      "applications": [
        "سيرومات موازنة البشرة الدهنية والمختلطة والمعرضة لحب الشباب",
        "مزيلات المكياج المقاوم للماء وزيوت تنظيف الوجه اللطيفة",
        "زيوت ترطيب اللحية، سيرومات لمعان الشعر، وحماية الأطراف من التقصف"
      ],
      "packagingOptions": [
        {
          "title": "جالونات وبراميل بالجملة (5 لتر إلى 200 لتر)",
          "description": "عبوات صناعية مخصصة لمعامل ومصانع المستحضرات التجميلية.",
          "moq": "5 لتر"
        },
        {
          "title": "قوارير قطارة مخصصة لعلامتكم التجارية (30 مل إلى 100 مل)",
          "description": "قوارير زجاجية بأشكال متنوعة مع قطارات وطباعة فاخرة لشعاركم.",
          "moq": "50 عبوة"
        }
      ],
      "faq": [
        {
          "q": "ما الفرق بين الجوجوبا الذهبي النقي والجوجوبا المكرر الشفاف؟",
          "a": "الجوجوبا الذهبي غير مكرر ومعصور على البارد ويحتفظ بكامل المعادن والفيتامينات واللون الذهبي، بينما الشفاف خضع للتبييض الكيميائي. نحن نوفر الذهبي البكر 100%."
        },
        {
          "q": "هل يتجمد زيت الجوجوبا في الشتاء أو درجات الحرارة المنخفضة؟",
          "a": "نعم! لكونه شمعاً سائلاً، يتجمد طبيعياً تحت درجة حرارة 10 درجات مئوية، ويعود سائلاً تماماً في حرارة الغرفة دون أن تتأثر جودته مطلقاً."
        }
      ],
      "moq": "ابتداءً من 5 لتر (جملة) / 50 عبوة (OEM)",
      "shortExtraction": "عصر أول بكر لشمع الجوجوبا الذهبي",
      "shortOrigin": "أراضي المغرب الصحراوية",
      "specs": {
        "extraction": "عصر ميكانيكي نقي على البارد لبذور شجيرات الجوجوبا الصحراوية الذهبية",
        "origin": "الأراضي الصحراوية المشمسة، المملكة المغربية",
        "grade": "ذهبي نقي وغير مكرر 100% درجة تجميلية ممتازة",
        "certifications": "إيكوسيرت العضوية، معايير ISO 22716، تحاليل مخبرية COA و MSDS",
        "shelfLife": "أكثر من 36 شهراً (شمع نباتي فائق الثبات والمقاومة للتأكسد)",
        "appearance": "سائل أصفر ذهبي براق عديم الشوائب برائحة شمعية طبيعية خفيفة جداً"
      }
    }
  },
  {
    "slug": "tbrima-powder",
    "category": "powders",
    "image": "/image/moroccan-tabrima-herbal-powder.webp",
    "gallery": [
      "/image/moroccan-tabrima-herbal-powder.webp"
    ],
    "bestFor": "Royal Moroccan bridal hammam treatments, deep body detoxifying scrubs, full body brightening",
    "formats": "1kg, 5kg, 25kg bulk bags, or customized retail jars/pouches (100g, 250g, 500g)",
    "moq": "5 kg (Bulk) / 50 Jars (Private Label)",
    "specs": {
      "inci": "Lavandula Angustifolia, Rosmarinus Officinalis, Matricaria Chamomilla, Rosa Damascena, Lawsonia Inermis & Herbal Blend",
      "botanicalName": "Artisanal Moroccan Hammam Multi-Herbal Complex",
      "casNumber": "N/A (Multi-Herb Botanical Blend)",
      "extraction": "Sun-dried wild organic Moroccan herbs, crushed and sieved into aromatic exfoliating powder",
      "origin": "Marrakesh, Atlas Mountains & Fez, Morocco",
      "grade": "100% Natural Royal Hammam Grade",
      "certifications": "ISO 22716 GMP, Lab Tested for Heavy Metals & Microbiology, COA Compliant",
      "shelfLife": "36 months stored dry in airtight packaging",
      "appearance": "Fine olive-green herbal powder with an intoxicating authentic Moroccan botanical fragrance"
    },
    "en": {
      "title": "Authentic Moroccan Hammam Tbrima Herbal Blend Wholesale",
      "metaTitle": "Moroccan Tbrima Powder Wholesale | Royal Hammam Herbal",
      "metaDescription": "Direct wholesale manufacturer of authentic Moroccan Tbrima (Tabrima). Royal herbal hammam blend of 14 botanical herbs for bridal body lightening and.",
      "badge": "14 Moroccan Herbs • Royal Bridal Secret • Aromatic Spa Grade",
      "subtitle": "Traditional Moroccan Multi-Herbal Body Peeling & Glow Complex",
      "lead": "The quintessential royal Moroccan bridal herbal concoction. An ancestral blend of over 14 dried aromatic herbs, wild flowers, and purifying clays hand-blended in Marrakesh and Fez.",
      "overview": "Moroccan Tbrima (also known as Tabrima or Moroccan Body Herbs) is a revered herbal formulation used during royal hammam ceremonies. Blended from wild Atlas lavender, rosemary, chamomile, Damask rose petals, sidr, and micro-herbs, Tbrima is traditionally mixed with Moroccan black soap or lemon juice. When massaged over warm skin in the steam room, it accelerates the shedding of dead skin, lightens hyperpigmentation, relieves muscle tension, and leaves the body scented with a heavenly herbal bouquet.",
      "benefits": [
        {
          "title": "Intensive Bridal Body Brightening",
          "description": "Noticeably evens skin tone and lightens sun spots and dark zones across the neck, back, and limbs."
        },
        {
          "title": "Synergistic Peeling Power with Black Soap",
          "description": "Dramatically enhances the exfoliating action of the Moroccan Kessa glove for velvety baby-soft skin."
        },
        {
          "title": "Deep Herbal Detoxification & Muscle Relaxation",
          "description": "Aromatic botanicals stimulate circulation, soothe sore muscles, and detoxify dermal tissues."
        },
        {
          "title": "100% Pure Botanical Ingredients",
          "description": "Completely free of chemicals, artificial perfumes, preservatives, and synthetics."
        }
      ],
      "applications": [
        "Royal Moroccan Hammam body exfoliating rituals in luxury spas",
        "Pre-bridal body lightening and skin rejuvenation packages",
        "Private label bath and body herbal scrubs and wraps"
      ],
      "packagingOptions": [
        {
          "title": "Bulk Moisture-Proof Bags (5kg & 25kg)",
          "description": "Airtight lined bags for spa centers and repackagers.",
          "moq": "5 kg"
        },
        {
          "title": "Branded Cosmetic Jars & Stand-up Pouches (150g - 500g)",
          "description": "Kraft pouches or PET jars with waterproof labels and branding.",
          "moq": "50 Units"
        }
      ],
      "faq": [
        {
          "q": "What herbs are included in your authentic Tbrima blend?",
          "a": "Our formulation contains 14 hand-selected herbs: Damask rose petals, wild lavender, rosemary, chamomile, henna leaves, sidr, basil, thyme, and Atlas herbs according to ancestral recipes."
        },
        {
          "q": "Will the henna in Tbrima stain the skin permanently?",
          "a": "No! The small amount of neutral henna used in body Tbrima is specially balanced so it does not stain skin orange or brown when rinsed off with warm water after 10-15 minutes."
        }
      ],
      "moq": "5 kg (Bulk) / 50 Jars (OEM)",
      "shortExtraction": "Sun-dried 14 herbs hand-blended",
      "shortOrigin": "Marrakesh & Atlas, Morocco",
      "specs": {
        "extraction": "Sun-dried wild organic Moroccan herbs, crushed and sieved into aromatic powder",
        "origin": "Marrakesh, Atlas Mountains & Fez, Morocco",
        "grade": "100% Natural Royal Hammam Grade",
        "certifications": "ISO 22716 GMP, Lab Tested for Heavy Metals & Microbiology, COA Compliant",
        "shelfLife": "36 months stored dry in airtight packaging",
        "appearance": "Fine olive-green herbal powder with authentic Moroccan botanical fragrance"
      }
    },
    "fr": {
      "title": "Tbrima Marocaine Authentique pour Hammam en Gros",
      "metaTitle": "Tbrima Marocaine en Gros | Mélange d'Herbes Royales pou",
      "metaDescription": "Fabricant direct de Tbrima (Tabrima) marocaine authentique aux 14 plantes. Soin gommant royal pour le hammam, éclaircissant et purifiant pour le corps.",
      "badge": "14 Plantes Marocaines • Secret de Mariée Royale • Qualité Spa",
      "subtitle": "Complexe Botanique Traditionnel de Plantes Exfoliantes pour le Corps",
      "lead": "Le soin royal emblématique des mariées marocaines. Un savant mélange ancestral de 14 plantes aromatiques et fleurs séchées récoltées dans l'Atlas et la région de Marrakech.",
      "overview": "La Tbrima marocaine est une poudre végétale aromatique utilisée dans les rituels de hammam traditionnels. Mélangée au savon noir ou à l'eau de rose, elle prépare le corps à un gommage d'une efficacité redoutable, unifie la pigmentation de la peau, stimule la circulation et laisse un sillage floral enivrant sur tout le corps.",
      "benefits": [
        {
          "title": "Gommage & Unification du Corps",
          "description": "Clarifie l'épiderme et estompe les taches sombres sur le corps."
        },
        {
          "title": "Action Synergique avec le Savon Noir",
          "description": "Décuple l'efficacité du gant de Kessa pour une peau d'une douceur veloutée."
        },
        {
          "title": "Détente Aromatique Totale",
          "description": "La lavande, le romarin et la rose procurent une relaxation musculaire profonde."
        }
      ],
      "applications": [
        "Soins gommants royaux en spas et hammams",
        "Packs beauté pour futures mariées",
        "Formulation de gommages corporels aux herbes"
      ],
      "packagingOptions": [
        {
          "title": "Sacs Vrac Hermétiques (5kg et 25kg)",
          "description": "Conditionnement protecteur pour spas et centres de bien-être.",
          "moq": "5 kg"
        },
        {
          "title": "Pots et Sachets Marque Blanche (150g à 500g)",
          "description": "Pots ou sachets kraft zippés avec votre logo et conseils d'utilisation.",
          "moq": "50 Pièces"
        }
      ],
      "faq": [
        {
          "q": "La Tbrima colore-t-elle la peau ?",
          "a": "Non, les herbes sont rigoureusement dosées pour agir sur l'exfoliation sans laisser de coloration après rinçage à l'eau tiède."
        }
      ],
      "moq": "Dès 5 kg (Vrac) / 50 Pots (OEM)",
      "shortExtraction": "14 plantes sauvages séchées & broyées",
      "shortOrigin": "Marrakech & Atlas, Maroc",
      "specs": {
        "extraction": "Mélange artisanal de 14 plantes et fleurs sauvages séchées au soleil et tamisées",
        "origin": "Marrakech, jbel Atlas et Fès, Maroc",
        "grade": "100% Naturel Qualité Hammam Royal",
        "certifications": "Norme ISO 22716 BPF, Testé sans métaux lourds ni germes, Conforme CoA",
        "shelfLife": "36 mois dans un emballage hermétique étanche",
        "appearance": "Poudre végétale vert olive au parfum floral et aromatique envoûtant"
      }
    },
    "ar": {
      "title": "التبريمة المغربية الملكية للأعشاب بالجملة",
      "metaTitle": "التبريمة المغربية الملكية بالجملة | خلطة أعشاب الحمام ا",
      "metaDescription": "المصنع المباشر للتبريمة المغربية الأصلية (خلطة أعشاب الحمام) بالجملة وللعلامة الخاصة. 14 عشبة طبيعية لتفتيح وتبييض الجسم وتقشير الجلد الميت في السبا.",
      "badge": "14 عشبة مغربية • سر العروس الملكية • عطرية فاخرة للسبا",
      "subtitle": "الخلطة المغربية التراثية من الأعشاب الطبيعية لتقشير وتبييض الجسم",
      "lead": "جوهرة طقوس الحمام الملكي وسر العروس المغربية عبر العصور. خلطة تراثية متكاملة تضم أكثر من 14 عشبة وزهرة برية مجففة ومطحونة بعناية في مراكش وفاس.",
      "overview": "تعتبر التبريمة المغربية (أعشاب الحمام الملكي) من أقدم وأقوى الخلطات العشبية التجميلية لتنقية الجسم. تُمزج بالصابون البلدي أو ماء الورد وعصير الليمون، وتوضع على الجسم في الحمام الدافئ لمدة 15 دقيقة، حيث تعمل على تفتيح المناطق الداكنة، تخليص الجسم من التصبغات وآثار الشمس، وإرخاء العضلات، لتترك البشرة ناعمة ومعطرة بأفخر الروائح الطبيعية.",
      "benefits": [
        {
          "title": "تفتيح وتوحيد لون بشرة الجسم كاملة",
          "description": "يزيل التصبغات والبقع الداكنة وآثار الشمس عن الرقبة، الظهر، والأطراف."
        },
        {
          "title": "مضاعفة فعالية الفرك بالكيسة المغربية",
          "description": "يساعد على خروج الجلد الميت بسهولة فائقة لتحصلي على بشرة ناعمة كالحرير."
        },
        {
          "title": "استرخاء عضلات الجسم وتنشيط الدورة الدموية",
          "description": "الأعشاب العطرية كالخزامى والبابونج والورد تمنح راحة وانتعاشاً جسدياً ونفسياً كاملاً."
        }
      ],
      "applications": [
        "جلسات الحمام المغربي الملكي وحمام العروس في مراكز السبا الفاخرة",
        "العناية الأسبوعية المنزلية لتقشير وتبييض وتوحيد لون الجسم",
        "تصنيع مقشرات الأعشاب الطبيعية ومستحضرات العناية بالجسم"
      ],
      "packagingOptions": [
        {
          "title": "أكياس عازلة للرطوبة بالجملة (5 كغ و 25 كغ)",
          "description": "تغليف محكم يحفظ الزيوت العطرية للمنتج مخصص للسبا والموزعين.",
          "moq": "5 كغ"
        },
        {
          "title": "أكياس كرافت أو علب فاخرة لعلامتكم الخاصة (150 غ إلى 500 غ)",
          "description": "أوعية أو أكياس بسحاب مجهزة بملصقات أنيقة وطريقة الاستخدام.",
          "moq": "50 عبوة"
        }
      ],
      "faq": [
        {
          "q": "ما هي الأعشاب المكونة للتبريمة المغربية الأصلية؟",
          "a": "تضم خلطتنا 14 عشبة مغربية منتقاة: الورد البلدي، الخزامى الفاسية، إكليل الجبل (الريحان)، البابونج، أوراق السدر، الحناء الطبيعية، الداد وغيرها وفق المقادير التراثية المتوازنة."
        },
        {
          "q": "هل تصبغ التبريمة لون الجلد؟",
          "a": "كلا، نسبة المكونات مدروسة بدقة لتعطي فوائد التقشير والتفتيح دون ترك أي لون على الجسم بعد الشطف بالماء والصابون."
        }
      ],
      "moq": "ابتداءً من 5 كغ (جملة) / 50 عبوة (OEM)",
      "shortExtraction": "14 عشبة وزهرة برية مجففة شمسياً ومطحونة",
      "shortOrigin": "مراكش وجبال الأطلس، المغرب",
      "specs": {
        "extraction": "خلطة تقليدية تضم 14 عشبة وزهرة أطلسية مجففة شمسياً ومطحونة بعناية وفق الوصفة الملكية",
        "origin": "مراكش، جبال الأطلس وفاس، المملكة المغربية",
        "grade": "طبيعي 100% درجة حمام ملكي وعرائس",
        "certifications": "مطابق لـ ISO 22716، فحص مخبري للميكروبيولوجيا والمعادن، شهادة COA",
        "shelfLife": "36 شهراً عند الحفظ في عبوة محكمة الإغلاق بعيداً عن الرطوبة",
        "appearance": "مسحوق عشبي بلون أخضر زيتوني ناعم برائحة عطرية زكية تملأ المكان"
      }
    }
  },
  {
    "slug": "sidr-powder",
    "category": "powders",
    "image": "/image/moroccan-sidr-leaf-powder.webp",
    "gallery": [
      "/image/moroccan-sidr-leaf-powder.webp"
    ],
    "bestFor": "Natural herbal shampoo, hair thickening and hair loss prevention, sensitive scalp and face masks",
    "formats": "1kg, 5kg, 25kg bulk bags, or branded retail jars/pouches (100g, 200g)",
    "moq": "5 kg (Bulk) / 50 Units (Private Label)",
    "specs": {
      "inci": "Ziziphus Spina-Christi Leaf Powder",
      "botanicalName": "Ziziphus spina-christi (L.) Desf.",
      "casNumber": "N/A (Pure Botanical Leaf)",
      "extraction": "Sun-dried wild Moroccan Sidr leaves, finely ground and sieved into silky green powder",
      "origin": "Souss Valley & Southern Morocco",
      "grade": "100% Pure Cosmetic Botanical Grade",
      "certifications": "Lab Tested for Purity & Heavy Metals, ISO 22716, 100% Pure & Additive-Free",
      "shelfLife": "36 months stored dry in a cool, dark location",
      "appearance": "Ultra-fine vibrant green powder with a gentle earthy, herbaceous aroma; foams naturally when mixed with water"
    },
    "en": {
      "title": "Pure Moroccan Sidr Leaf Powder (Ziziphus) Wholesale",
      "metaTitle": "Moroccan Sidr Powder Wholesale | Pure Ziziphus Spina-Ch",
      "metaDescription": "Direct wholesale manufacturer of 100% pure Moroccan Sidr Powder (Ziziphus Spina-Christi). Natural plant saponin shampoo for hair volume,",
      "badge": "100% Pure Ziziphus • Natural Saponin Shampoo • Hair Strengthening",
      "subtitle": "Natural Organic Moroccan Ziziphus Spina-Christi Leaf Powder",
      "lead": "Nature's ancient botanical shampoo and hair-thickening miracle. Harvested from wild Moroccan Sidr (Jujube) trees, the sun-dried leaves are ground into a silky powder rich in natural plant saponins.",
      "overview": "Moroccan Sidr (Ziziphus spina-christi) powder has been used across North Africa and the Middle East for millennia as a natural no-poo cleanser. When mixed with warm water, the natural saponins in Sidr produce a gentle, creamy cleansing lather that washes hair and scalp without washing out dyed colors or stripping natural oils. It strengthens hair roots, adds noticeable thickness to fine hair, calms itchy scalp conditions like dandruff and eczema, and acts as a soothing facial mask.",
      "benefits": [
        {
          "title": "Natural Botanical Shampoo (No-Poo)",
          "description": "High natural saponin content washes away oil and debris without synthetic chemical surfactants."
        },
        {
          "title": "Strengthens Hair Follicles & Prevents Loss",
          "description": "Nourishes roots with essential bio-minerals, curbing excessive shedding and promoting thicker strands."
        },
        {
          "title": "Color-Safe Cleansing",
          "description": "Unlike henna, pure Sidr does NOT alter or color hair, making it safe for blonde, chemically treated, or grey hair."
        },
        {
          "title": "Scalp & Skin Soothing",
          "description": "Relieves stubborn dandruff, psoriasis, and dermatitis flare-ups on the scalp and face."
        }
      ],
      "applications": [
        "Natural sulfate-free shampoo pastes and scalp detox masks",
        "Hair thickening and anti-hair loss herbal treatments",
        "Gentle cleansing facial masks for sensitive and reactive skin",
        "Ayurvedic and herbal hair care product formulations"
      ],
      "packagingOptions": [
        {
          "title": "Bulk Foil Lined Sacks (5kg & 25kg)",
          "description": "Double-lined industrial bags protected from humidity and UV light.",
          "moq": "5 kg"
        },
        {
          "title": "Private Label Pouches & Jars (100g, 200g)",
          "description": "Sealed stand-up zipper pouches with customized labels and instructions.",
          "moq": "50 Units"
        }
      ],
      "faq": [
        {
          "q": "Does Sidr powder change or dye hair color like henna?",
          "a": "No. Pure Sidr contains zero color pigments and will not color or darken hair. It is completely safe for blonde, gray, bleached, and chemically dyed hair."
        },
        {
          "q": "How does Sidr create lather without synthetic sulfates?",
          "a": "Sidr leaves are naturally loaded with plant saponins—nature's biodegradable cleansing agents—which froth into a gentle foam when whisked with warm water."
        }
      ],
      "moq": "5 kg (Bulk) / 50 Units (OEM)",
      "shortExtraction": "Sun-dried wild leaves micronized",
      "shortOrigin": "Souss & South Morocco",
      "specs": {
        "extraction": "Sun-dried wild Moroccan Sidr leaves, finely ground and sieved into silky green powder",
        "origin": "Souss Valley & Southern Morocco",
        "grade": "100% Pure Cosmetic Botanical Grade",
        "certifications": "Lab Tested for Purity & Heavy Metals, ISO 22716, 100% Pure & Additive-Free",
        "shelfLife": "36 months stored dry in a cool, dark location",
        "appearance": "Ultra-fine vibrant green powder with gentle earthy aroma; foams with water"
      }
    },
    "fr": {
      "title": "Poudre de Feuilles de Sidr Marocain Pur en Gros",
      "metaTitle": "Poudre de Sidr du Maroc en Gros | Shampoing Végétal aux",
      "metaDescription": "Grossiste direct de poudre de Sidr (Ziziphus) 100% pure du Maroc. Shampoing végétal naturel aux saponines pour fortifier les cheveux et apaiser le.",
      "badge": "100% Pur Jujubier • Shampoing Végétal Naturel • Fortifiant Capillaire",
      "subtitle": "Poudre de Feuilles de Ziziphus Spina-Christi Séchées au Soleil",
      "lead": "Le shampoing végétal ancestral et le secret du volume capillaire. Récoltées sur les jujubiers sauvages du Maroc, les feuilles de Sidr sont séchées puis micronisées en une poudre soyeuse riche en saponines naturelles.",
      "overview": "Le Sidr marocain est l'alternative naturelle par excellence aux shampoings chimiques. Mélangé à de l'eau tiède, il développe une mousse onctueuse grâce à ses saponines végétales, nettoyant les cheveux et le cuir chevelu sans délaver les colorations. Il apporte brillance et épaisseur aux cheveux fins, freine la chute et purifie les cuirs chevelus sujets aux pellicules.",
      "benefits": [
        {
          "title": "Nettoyant Végétal Naturel (No-Poo)",
          "description": "Lave en douceur grâce à ses saponines naturelles sans détergents synthétiques."
        },
        {
          "title": "Fortifie les Racines et Gaine la Fibre",
          "description": "Apporte volume et densité aux cheveux fins et stimule la repousse."
        },
        {
          "title": "Ne Colore Pas les Cheveux",
          "description": "Contrairement au henné, le Sidr pur ne modifie absolument pas la couleur des cheveux."
        }
      ],
      "applications": [
        "Shampoings végétaux et masques capillaires fortifiants",
        "Soins apaisants pour cuirs chevelus sensibles et antipelliculaires",
        "Masques visage purifiants pour peaux réactives"
      ],
      "packagingOptions": [
        {
          "title": "Sacs Vrac Hermétiques (5kg et 25kg)",
          "description": "Pour marques de soins capillaires naturels et herboristeries.",
          "moq": "5 kg"
        },
        {
          "title": "Sachets Zippés Marque Blanche (100g et 200g)",
          "description": "Prêt pour la commercialisation avec votre charte graphique.",
          "moq": "50 Sachets"
        }
      ],
      "faq": [
        {
          "q": "Le Sidr convient-il aux cheveux décolorés ou clairs ?",
          "a": "Absolument, le Sidr pur ne colore pas les cheveux et peut être utilisé sur cheveux blonds, blancs ou colorés sans aucun risque."
        }
      ],
      "moq": "Dès 5 kg (Vrac) / 50 Sachets (OEM)",
      "shortExtraction": "Feuilles sauvages séchées & micronisées",
      "shortOrigin": "Souss & Sud Marocain",
      "specs": {
        "extraction": "Feuilles de jujubier sauvage du Maroc séchées au soleil et tamisées en poudre soyeuse",
        "origin": "Vallée du Souss et Sud marocain",
        "grade": "100% Pure & Grade Botanique Cosmétique",
        "certifications": "Testé pur sans métaux lourds, ISO 22716, 100% Pur sans additifs",
        "shelfLife": "36 mois dans un endroit sec et frais",
        "appearance": "Poudre ultra-fine vert vif qui mousse naturellement au contact de l'eau tiède"
      }
    },
    "ar": {
      "title": "بودرة ورق السدر المغربي الطبيعي (شامبو الأعشاب) بالجملة",
      "metaTitle": "بودرة السدر المغربي بالجملة | مسحوق ورق السدر الطبيعي ل",
      "metaDescription": "المصنع المباشر لمسحوق ورق السدر المغربي النقي 100% بالجملة وللعلامة الخاصة. شامبو نباتي طبيعي غني بالصابونين لتكثيف الشعر، منع التساقط وعلاج القشرة.",
      "badge": "سدر نقي 100% • شامبو نباتي طبيعي • مقوي ومكثف للشعر",
      "subtitle": "مسحوق أوراق السدر الجبلي الطبيعي (Ziziphus Spina-Christi)",
      "lead": "شامبو الطبيعة المعجزة وسر كثافة وصحة الشعر. تُجنى أوراق السدر البري من سوس وجنوب المغرب، وتجفف تحت الشمس ثم تُطحن ناعماً للحفاظ على مادة الصابونين النباتية المنظفة.",
      "overview": "يُعد مسحوق السدر المغربي الخيار الأول عالمياً للغسيل الطبيعي للشعر (No-Poo). عند خلطه بالماء الدافئ يُطلق رغوة طبيعية لطيفة تنظف الفروة والشعر دون أن تسحب الزيوت الطبيعية أو تغير لون الشعر المصبوغ. يقوي البصيلات الضعيفة، يمنح خصلات الشعر كثافة ملموسة، ويقضي على القشرة والحكة والالتهابات الجلدية في الرأس والوجه.",
      "benefits": [
        {
          "title": "شامبو ومنظف نباتي طبيعي 100%",
          "description": "يحتوي على صابونين طبيعي ينظف الفروة بعمق دون الحاجة لأي مواد كيميائية أو سلفات."
        },
        {
          "title": "تكثيف الشعر وتقوية البصيلات",
          "description": "يغذي جذور الشعر ويقلل التساقط ويمنح الخصلات سماكة ولمعاناً فائقاً."
        },
        {
          "title": "آمن تماماً ولا يغير لون الشعر المصبوغ",
          "description": "على عكس الحناء، لا يترك السدر أي لون، وهو مناسب للشعر الأشقر والمصبوغ والشعر الأبيض."
        },
        {
          "title": "علاج فعال للقشرة وحكة الفروة",
          "description": "خصائص مهدئة ومطهرة تنقي فروة الرأس من الفطريات والإفرازات الزائدة."
        }
      ],
      "applications": [
        "خلطات الشامبو الطبيعي البديل ومستحضرات تنظيف الشعر العضوية",
        "أقنعة تكثيف وإطالة الشعر ومحاربة التساقط في صالونات التجميل",
        "أقنعة الوجه اللطيفة لتنقية وتهدئة البشرة الحساسة والمتهيجة"
      ],
      "packagingOptions": [
        {
          "title": "أكياس معزولة بالجملة (5 كغ و 25 كغ)",
          "description": "تغليف محكم يحفظ جودة ولون المسحوق الأخضر مخصص للموزعين.",
          "moq": "5 كغ"
        },
        {
          "title": "أكياس سحاب أو أوعية لعلامتكم الخاصة (100 غ إلى 200 غ)",
          "description": "أكياس كرافت أنيقة مع نافذة شفافة أو علب بلاستيكية بملصقات مخصصة.",
          "moq": "50 عبوة"
        }
      ],
      "faq": [
        {
          "q": "هل يغير السدر لون الشعر مثل الحناء؟",
          "a": "كلا، السدر النقي 100% لا يصبغ الشعر أبداً ولا يؤثر على الصبغات الكيميائية، ويصلح تماماً للشعر الفاتح أو الأشقر."
        },
        {
          "q": "كيف ينتج السدر رغوة دون صابون كيميائي؟",
          "a": "تحتوي أوراق السدر بطبيعتها على مادة الصابونين (Saponins) النباتية التي تُحدث رغوة كريمية خفيفة ومنظفة عند خفق المسحوق بالماء الدافئ."
        }
      ],
      "moq": "ابتداءً من 5 كغ (جملة) / 50 عبوة (OEM)",
      "shortExtraction": "أوراق سدر برية مجففة ومطحونة ناعماً",
      "shortOrigin": "سوس وجنوب المغرب",
      "specs": {
        "extraction": "أوراق شجر السدر البري المغربي مجففة تحت أشعة الشمس ومطحونة ناعماً للحفاظ على مادة الصابونين",
        "origin": "سهل سوس ومناطق جنوب المغرب، المملكة المغربية",
        "grade": "نباتي ونقي 100% درجة تجميلية نباتية عالية الفعالية",
        "certifications": "فحص مخبري للنقاوة والمعادن الثقيلة، ISO 22716، خالٍ من أي إضافات",
        "shelfLife": "36 شهراً في مكان جاف وبارد",
        "appearance": "مسحوق أخضر حيوي فائق النعومة يُحدث رغوة كريمية منظفة عند خفقه بالماء الدافئ"
      }
    }
  }
];

export function getProductBySlug(slug: string): ProductData | undefined {
  return PRODUCTS_DATA.find((p) => p.slug === slug);
}

export function getAllProductSlugs(): string[] {
  return PRODUCTS_DATA.map((p) => p.slug);
}

export function getProductsByCategory(category: string): ProductData[] {
  if (category === "all") return PRODUCTS_DATA;
  return PRODUCTS_DATA.filter((p) => p.category === category);
}

export function getRelatedProducts(currentSlug: string, limit = 4): ProductData[] {
  return PRODUCTS_DATA.filter((p) => p.slug !== currentSlug).slice(0, limit);
}
