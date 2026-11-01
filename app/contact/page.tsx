import type { Metadata } from "next";
import { StaticRedirect, redirectMetadata } from "@/components/StaticRedirect";
import { defaultLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

const dict = getDictionary(defaultLocale);
const target = `/${defaultLocale}/contact/`;

export const metadata: Metadata = redirectMetadata(target, dict.contactPage.metadata);

export default function ContactRedirectPage() {
  return (
    <StaticRedirect
      href={target}
      title={dict.contactPage.metadata.title}
      description={dict.contactPage.metadata.description}
      heading={dict.contactPage.hero.title}
    />
  );
}
