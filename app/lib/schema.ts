import type { Dictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
import { locales } from "@/i18n/config";
import { products } from "@/lib/products";
import { phoneTel } from "@/lib/contact";
import {
  ORG_ID,
  ORG_LEGAL_NAME,
  ORG_NAME,
  SITE_URL,
  SOCIAL_PROFILES,
  WEBSITE_ID,
  absoluteUrl,
  localePath,
  type SiteRoute,
} from "@/lib/site";

export type PageSchemaKey = SiteRoute;

const LOCALE_MAP: Record<Locale, string> = {
  en: "en-US",
  fr: "fr-FR",
  ar: "ar-MA",
};

function pageMeta(dict: Dictionary, page: PageSchemaKey) {
  switch (page) {
    case "moroccan-organic-skincare":
      return dict.metadata;
    case "products":
      return dict.productsPage.metadata;
    case "private-label":
      return dict.privateLabelPage.metadata;
    case "about":
      return dict.aboutPage.metadata;
    case "blog":
      return dict.blogPage.metadata;
    case "contact":
      return dict.contactPage.metadata;
  }
}

function breadcrumbLabel(dict: Dictionary, page: PageSchemaKey): string {
  const links = dict.footer.links;
  switch (page) {
    case "moroccan-organic-skincare":
      return links.home;
    case "products":
      return links.products;
    case "private-label":
      return links.privateLabel;
    case "about":
      return links.about;
    case "blog":
      return links.blog;
    case "contact":
      return links.contact;
  }
}

function buildOrganization() {
  return {
    "@type": "Organization",
    "@id": ORG_ID,
    name: ORG_NAME,
    legalName: ORG_LEGAL_NAME,
    alternateName: ["Moroccan Organica", "Moroccan Skin Care"],
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/assets/logo-horizontal.webp"),
      width: 600,
      height: 160,
    },
    image: absoluteUrl("/assets/favicon/og-image.png"),
    email: "contact@moroccanskincare.com",
    telephone: phoneTel,
    sameAs: [...SOCIAL_PROFILES],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Lot 377 N° 3/6 Sidi Ghanem, Zone industriel",
      addressLocality: "Marrakesh",
      postalCode: "40110",
      addressCountry: "MA",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: phoneTel,
        contactType: "customer service",
        email: "contact@moroccanskincare.com",
        availableLanguage: ["English", "French", "Arabic"],
        areaServed: "Worldwide",
      },
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "contact@moroccanskincare.com",
        availableLanguage: ["English", "French", "Arabic"],
        areaServed: "Worldwide",
      },
    ],
    knowsAbout: [
      "Moroccan organic skincare",
      "argan oil wholesale",
      "Moroccan black soap",
      "ghassoul clay",
      "private label cosmetics",
      "Moroccan beauty export",
    ],
  };
}

function buildWebSite(locale: Locale) {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: ORG_NAME,
    inLanguage: locales.map((loc) => LOCALE_MAP[loc]),
    publisher: { "@id": ORG_ID },
    alternateName: ORG_LEGAL_NAME,
  };
}

function buildWebPage(locale: Locale, page: PageSchemaKey, dict: Dictionary) {
  const meta = pageMeta(dict, page);
  const path = localePath(locale, page);
  const url = absoluteUrl(path);

  return {
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: meta.title,
    description: meta.description,
    inLanguage: LOCALE_MAP[locale],
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
  };
}

function buildBreadcrumbList(locale: Locale, page: PageSchemaKey, dict: Dictionary) {
  const homePath = localePath(locale, "moroccan-organic-skincare");
  const items = [
    {
      "@type": "ListItem",
      position: 1,
      name: dict.footer.links.home,
      item: absoluteUrl(homePath),
    },
  ];

  if (page !== "moroccan-organic-skincare") {
    items.push({
      "@type": "ListItem",
      position: 2,
      name: breadcrumbLabel(dict, page),
      item: absoluteUrl(localePath(locale, page)),
    });
  }

  return {
    "@type": "BreadcrumbList",
    "@id": `${absoluteUrl(localePath(locale, page))}#breadcrumb`,
    itemListElement: items,
  };
}

function buildFaqPage(locale: Locale, dict: Dictionary) {
  const url = absoluteUrl(localePath(locale, "moroccan-organic-skincare"));
  return {
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    mainEntity: dict.faqSection.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

function buildProductItemList(locale: Locale) {
  const url = absoluteUrl(localePath(locale, "products"));
  return {
    "@type": "ItemList",
    "@id": `${url}#products`,
    name: "Moroccan Organic Skincare Products",
    numberOfItems: products.length,
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: product.title,
        description: product.description,
        image: absoluteUrl(product.image),
        category: product.category,
        brand: {
          "@type": "Brand",
          name: ORG_NAME,
        },
        manufacturer: { "@id": ORG_ID },
        url: absoluteUrl(localePath(locale, "products")),
      },
    })),
  };
}

function buildService(locale: Locale, dict: Dictionary) {
  const url = absoluteUrl(localePath(locale, "private-label"));
  const meta = dict.privateLabelPage.metadata;
  return {
    "@type": "Service",
    "@id": `${url}#service`,
    name: meta.title,
    description: meta.description,
    provider: { "@id": ORG_ID },
    areaServed: "Worldwide",
    serviceType: "Private label Moroccan cosmetics manufacturing",
    url,
  };
}

function buildArticle(locale: Locale, dict: Dictionary) {
  const url = absoluteUrl(localePath(locale, "blog"));
  const meta = dict.blogPage.metadata;
  return {
    "@type": "Article",
    "@id": `${url}#article`,
    headline: meta.title,
    description: meta.description,
    image: absoluteUrl("/assets/favicon/og-image.png"),
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    inLanguage: LOCALE_MAP[locale],
    mainEntityOfPage: { "@id": `${url}#webpage` },
    datePublished: "2024-01-01",
    dateModified: "2026-01-01",
  };
}

function buildAboutPage(locale: Locale, dict: Dictionary) {
  const url = absoluteUrl(localePath(locale, "about"));
  const meta = dict.aboutPage.metadata;
  return {
    "@type": "AboutPage",
    "@id": `${url}#about`,
    name: meta.title,
    description: meta.description,
    url,
    mainEntity: { "@id": ORG_ID },
  };
}

function buildLocalBusiness(locale: Locale, dict: Dictionary) {
  const url = absoluteUrl(localePath(locale, "contact"));
  const addressLines = dict.contactPage.info.address.lines;
  return {
    "@type": "LocalBusiness",
    "@id": `${url}#localbusiness`,
    name: ORG_NAME,
    image: absoluteUrl("/assets/favicon/og-image.png"),
    url: SITE_URL,
    telephone: phoneTel,
    email: "contact@moroccanskincare.com",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: addressLines.slice(1).join(", "),
      addressLocality: "Marrakesh",
      postalCode: "40110",
      addressCountry: "MA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 31.6345,
      longitude: -8.018,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "14:00",
      },
    ],
    sameAs: [...SOCIAL_PROFILES],
    parentOrganization: { "@id": ORG_ID },
  };
}

function pageSpecificNodes(locale: Locale, page: PageSchemaKey, dict: Dictionary) {
  switch (page) {
    case "moroccan-organic-skincare":
      return [buildFaqPage(locale, dict)];
    case "products":
      return [buildProductItemList(locale)];
    case "private-label":
      return [buildService(locale, dict)];
    case "about":
      return [buildAboutPage(locale, dict)];
    case "blog":
      return [buildArticle(locale, dict)];
    case "contact":
      return [buildLocalBusiness(locale, dict)];
  }
}

export function buildPageSchema(locale: Locale, page: PageSchemaKey, dict: Dictionary) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      buildOrganization(),
      buildWebSite(locale),
      buildWebPage(locale, page, dict),
      buildBreadcrumbList(locale, page, dict),
      ...pageSpecificNodes(locale, page, dict),
    ],
  };
}
