import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { StaticRedirect, redirectMetadata } from "@/components/StaticRedirect";
import { defaultLocale } from "@/i18n/config";
import { getAllBlogSlugs, getBlogArticleBySlug } from "@/lib/blog-data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getBlogArticleBySlug(slug);
  if (!article) return {};

  const content = article[defaultLocale] || article.en;
  const target = `/${defaultLocale}/blog/${slug}/`;

  return redirectMetadata(target, {
    title: content.metaTitle,
    description: content.metaDescription,
  });
}

export default async function BlogSlugRedirectPage({ params }: PageProps) {
  const { slug } = await params;
  const article = getBlogArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const content = article[defaultLocale] || article.en;
  const target = `/${defaultLocale}/blog/${slug}/`;

  return (
    <StaticRedirect
      href={target}
      title={content.metaTitle}
      description={content.metaDescription}
      heading={content.title}
    />
  );
}

