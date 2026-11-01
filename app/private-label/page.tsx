import type { Metadata } from "next";
import { StaticRedirect, redirectMetadata } from "@/components/StaticRedirect";
import { defaultLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

const dict = getDictionary(defaultLocale);
const target = `/${defaultLocale}/private-label/`;

export const metadata: Metadata = redirectMetadata(target, dict.privateLabelPage.metadata);

export default function PrivateLabelRedirectPage() {
  return (
    <StaticRedirect
      href={target}
      title={dict.privateLabelPage.metadata.title}
      description={dict.privateLabelPage.metadata.description}
      heading={`${dict.privateLabelPage.hero.title} ${dict.privateLabelPage.hero.titleHighlight}`}
    />
  );
}
