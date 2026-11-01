import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadGenModal from "@/components/LeadGenModal";
import LocaleShell from "@/components/LocaleShell";
import JsonLd from "@/components/JsonLd";
import { LocaleProvider } from "@/providers/LocaleProvider";
import { locales, isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { SITE_URL } from "@/lib/site";
import {
  getProductBySlug,
  getAllProductSlugs,
  getRelatedProducts
} from "@/lib/products-data";
import ProductDetailClient from "./ProductDetailClient";

type PageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  const slugs = getAllProductSlugs();
  return locales.flatMap((locale) =>
    slugs.map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: localeParam, slug } = await params;
  if (!isLocale(localeParam)) return {};

  const locale = localeParam as Locale;
  const product = getProductBySlug(slug);
  if (!product) return {};

  const content = product[locale] || product.en;
  const canonicalUrl = `${SITE_URL}/${locale}/products/${slug}/`;

  return {
    title: content.metaTitle,
    description: content.metaDescription,
    keywords: [
      product.slug.replace(/-/g, " "),
      "Moroccan organic skincare",
      "wholesale cosmetics Morocco",
      "private label supplier",
      product.specs.botanicalName,
      content.title
    ],
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
      canonical: canonicalUrl,
      languages: {
        ...Object.fromEntries(
          locales.map((loc) => [loc, `${SITE_URL}/${loc}/products/${slug}/`])
        ),
        "x-default": `${SITE_URL}/en/products/${slug}/`,
      },
    },
    openGraph: {
      title: content.metaTitle,
      description: content.metaDescription,
      url: canonicalUrl,
      siteName: "Moroccan Skin Care",
      locale: locale === "ar" ? "ar_MA" : locale === "fr" ? "fr_FR" : "en_US",
      type: "website",
      images: [
        {
          url: product.image.startsWith("http") ? product.image : `${SITE_URL}${product.image}`,
          width: 1200,
          height: 630,
          alt: content.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: content.metaTitle,
      description: content.metaDescription,
      images: [product.image.startsWith("http") ? product.image : `${SITE_URL}${product.image}`],
    },
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { locale: localeParam, slug } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale = localeParam as Locale;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const dict = getDictionary(locale);
  const content = product[locale] || product.en;
  const related = getRelatedProducts(slug, 4);

  // 1. Schema.org Product Structured Data
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: content.title,
    image: product.image.startsWith("http") ? product.image : `${SITE_URL}${product.image}`,
    description: content.metaDescription,
    sku: product.slug,
    mpn: `MSC-${product.slug.toUpperCase()}`,
    brand: {
      "@type": "Brand",
      name: "Moroccan Skin Care",
    },
    manufacturer: {
      "@type": "Organization",
      name: "Organica Group",
      url: SITE_URL,
    },
    countryOfOrigin: {
      "@type": "Country",
      name: "Morocco",
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: "10.00",
      highPrice: "5000.00",
      offerCount: "1000",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Moroccan Skin Care",
      },
    },
  };

  // 2. Schema.org BreadcrumbList Structured Data
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: locale === "fr" ? "Accueil" : locale === "ar" ? "الرئيسية" : "Home",
        item: `${SITE_URL}/${locale}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: locale === "fr" ? "Produits" : locale === "ar" ? "المنتجات" : "Products",
        item: `${SITE_URL}/${locale}/products/`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: content.title,
        item: `${SITE_URL}/${locale}/products/${slug}/`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={productSchema} />
      <JsonLd data={breadcrumbSchema} />
      <LocaleProvider locale={locale} dict={dict}>
        <LocaleShell locale={locale}>
          <div className="min-h-screen bg-background text-foreground flex flex-col justify-between">
            <LeadGenModal />
            <Header />
            <main className="flex-1">
              <ProductDetailClient
                product={product}
                locale={locale}
                relatedProducts={related}
              />
            </main>
            <Footer />
          </div>
        </LocaleShell>
      </LocaleProvider>
    </>
  );
}

