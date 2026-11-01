import type { Metadata } from "next";
import { StaticRedirect, redirectMetadata } from "@/components/StaticRedirect";
import { defaultLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

const dict = getDictionary(defaultLocale);
const target = `/${defaultLocale}/about/`;

export const metadata: Metadata = redirectMetadata(target, dict.aboutPage.metadata);

export default function AboutRedirectPage() {
  return (
    <StaticRedirect
      href={target}
      title={dict.aboutPage.metadata.title}
      description={dict.aboutPage.metadata.description}
      heading={dict.aboutPage.hero.title}
    />
  );
}
