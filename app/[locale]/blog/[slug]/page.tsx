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
  getBlogArticleBySlug,
  getAllBlogSlugs,
  getRelatedBlogArticles,
} from "@/lib/blog-data";
import BlogDetailClient from "./BlogDetailClient";

type PageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return locales.flatMap((locale) =>
    slugs.map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: localeParam, slug } = await params;
  if (!isLocale(localeParam)) return {};

  const locale = localeParam as Locale;
  const article = getBlogArticleBySlug(slug);
  if (!article) return {};

  const content = article[locale] || article.en;
  const canonicalUrl = `${SITE_URL}/${locale}/blog/${slug}/`;

  return {
    title: content.metaTitle,
    description: content.metaDescription,
    keywords: [
      article.slug.replace(/-/g, " "),
      "Moroccan skincare wholesale",
      "bulk cosmetics Morocco",
      "private label manufacturer",
      content.badge,
      content.title,
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
          locales.map((loc) => [loc, `${SITE_URL}/${loc}/blog/${slug}/`])
        ),
        "x-default": `${SITE_URL}/en/blog/${slug}/`,
      },
    },
    openGraph: {
      title: content.metaTitle,
      description: content.metaDescription,
      url: canonicalUrl,
      siteName: "Moroccan Skin Care",
      locale: locale === "ar" ? "ar_MA" : locale === "fr" ? "fr_FR" : "en_US",
      type: "article",
      images: [
        {
          url: article.image.startsWith("http")
            ? article.image
            : `${SITE_URL}${article.image}`,
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
      images: [
        article.image.startsWith("http")
          ? article.image
          : `${SITE_URL}${article.image}`,
      ],
    },
  };
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { locale: localeParam, slug } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale: Locale = localeParam;
  const article = getBlogArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const dict = getDictionary(locale);
  const content = article[locale] || article.en;
  const related = getRelatedBlogArticles(slug, 3);
  const canonicalUrl = `${SITE_URL}/${locale}/blog/${slug}/`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: content.title,
    description: content.metaDescription,
    image: article.image.startsWith("http")
      ? article.image
      : `${SITE_URL}${article.image}`,
    datePublished: article.date,
    dateModified: article.date,
    author: {
      "@type": "Organization",
      name: "Moroccan Skin Care",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Moroccan Skin Care",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/assets/logo-horizontal.webp`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <LocaleProvider locale={locale} dict={dict}>
        <LocaleShell locale={locale}>
          <div className="min-h-screen flex flex-col bg-background">
            <LeadGenModal />
            <Header />
            <main className="flex-1">
              <BlogDetailClient
                article={article}
                locale={locale}
                relatedArticles={related}
              />
            </main>
            <Footer />
          </div>
        </LocaleShell>
      </LocaleProvider>
    </>
  );
}

