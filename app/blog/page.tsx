import type { Metadata } from "next";
import { StaticRedirect, redirectMetadata } from "@/components/StaticRedirect";
import { defaultLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

const dict = getDictionary(defaultLocale);
const target = `/${defaultLocale}/blog/`;

export const metadata: Metadata = redirectMetadata(target, dict.blogPage.metadata);

export default function BlogRedirectPage() {
  return (
    <StaticRedirect
      href={target}
      title={dict.blogPage.metadata.title}
      description={dict.blogPage.metadata.description}
      heading={`${dict.blogPage.hero.title} ${dict.blogPage.hero.titleHighlight}`}
    />
  );
}
