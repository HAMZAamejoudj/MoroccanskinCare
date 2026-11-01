import type { Metadata } from "next";
import type { Locale } from "./config";
import { defaultLocale, locales } from "./config";
import { getDictionary } from "./get-dictionary";
import { SITE_URL } from "@/lib/site";

const siteUrl = SITE_URL;

function buildLocaleMetadata(
  locale: Locale,
  meta: { title: string; description: string; keywords: string[]; siteName: string },
  path: string,
  ogType: "website" | "article" = "website"
): Metadata {
  const url = `${siteUrl}${path}`;

  const pathWithoutLocale = path.replace(/^\/[^/]+/, "");

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: url,
      languages: {
        ...Object.fromEntries(
          locales.map((loc) => [loc, `${siteUrl}/${loc}${pathWithoutLocale}`])
        ),
        "x-default": pathWithoutLocale === "/" ? `${siteUrl}/` : `${siteUrl}/en${pathWithoutLocale}`,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url,
      siteName: meta.siteName,
      locale: locale === "ar" ? "ar_MA" : locale === "fr" ? "fr_FR" : "en_US",
      images: [
        {
          url: `${siteUrl}/assets/favicon/og-image.png`,
          width: 1200,
          height: 630,
          alt: meta.siteName,
        },
      ],
      type: ogType,
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [`${siteUrl}/assets/favicon/og-image.png`],
    },
  };
}

export function buildRootMetadata(): Metadata {
  const dict = getDictionary(defaultLocale);
  const base = buildLocaleMetadata(defaultLocale, dict.metadata, "/");
  return {
    ...base,
    alternates: {
      canonical: `${siteUrl}/`,
      languages: {
        "x-default": `${siteUrl}/`,
        en: `${siteUrl}/`,
        fr: `${siteUrl}/fr/`,
        ar: `${siteUrl}/ar/`,
      },
    },
    openGraph: {
      ...base.openGraph,
      url: `${siteUrl}/`,
    },
  };
}

export function buildHomeMetadata(locale: Locale): Metadata {
  const dict = getDictionary(locale);
  return buildLocaleMetadata(locale, dict.metadata, `/${locale}/`);
}

export function buildProductsMetadata(locale: Locale): Metadata {
  const dict = getDictionary(locale);
  return buildLocaleMetadata(locale, dict.productsPage.metadata, `/${locale}/products/`);
}

export function buildPrivateLabelMetadata(locale: Locale): Metadata {
  const dict = getDictionary(locale);
  return buildLocaleMetadata(locale, dict.privateLabelPage.metadata, `/${locale}/private-label/`);
}

export function buildBlogMetadata(locale: Locale): Metadata {
  const dict = getDictionary(locale);
  return buildLocaleMetadata(locale, dict.blogPage.metadata, `/${locale}/blog/`, "article");
}

export function buildContactMetadata(locale: Locale): Metadata {
  const dict = getDictionary(locale);
  return buildLocaleMetadata(locale, dict.contactPage.metadata, `/${locale}/contact/`);
}

export function buildAboutMetadata(locale: Locale): Metadata {
  const dict = getDictionary(locale);
  return buildLocaleMetadata(locale, dict.aboutPage.metadata, `/${locale}/about/`);
}
