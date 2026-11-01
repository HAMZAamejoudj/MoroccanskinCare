import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { StaticRedirect, redirectMetadata } from "@/components/StaticRedirect";
import { defaultLocale } from "@/i18n/config";
import { getAllProductSlugs, getProductBySlug } from "@/lib/products-data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  const content = product[defaultLocale] || product.en;
  const target = `/${defaultLocale}/products/${slug}/`;

  return redirectMetadata(target, {
    title: content.metaTitle,
    description: content.metaDescription,
  });
}

export default async function ProductSlugRedirectPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const content = product[defaultLocale] || product.en;
  const target = `/${defaultLocale}/products/${slug}/`;

  return (
    <StaticRedirect
      href={target}
      title={content.metaTitle}
      description={content.metaDescription}
      heading={content.title}
    />
  );
}

