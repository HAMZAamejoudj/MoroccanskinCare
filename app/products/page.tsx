import type { Metadata } from "next";
import { StaticRedirect, redirectMetadata } from "@/components/StaticRedirect";
import { defaultLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

const dict = getDictionary(defaultLocale);
const target = `/${defaultLocale}/products/`;

export const metadata: Metadata = redirectMetadata(target, dict.productsPage.metadata);

export default function ProductsRedirectPage() {
  return (
    <StaticRedirect
      href={target}
      title={dict.productsPage.metadata.title}
      description={dict.productsPage.metadata.description}
      heading={`${dict.productsPage.hero.title} ${dict.productsPage.hero.titleHighlight}`}
    />
  );
}
