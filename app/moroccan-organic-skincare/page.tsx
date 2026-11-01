import type { Metadata } from "next";
import { StaticRedirect, redirectMetadata } from "@/components/StaticRedirect";
import { defaultLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

const dict = getDictionary(defaultLocale);
const target = `/${defaultLocale}/moroccan-organic-skincare/`;

export const metadata: Metadata = redirectMetadata(target, dict.metadata);

export default function MoroccanOrganicSkincareRedirectPage() {
  return (
    <StaticRedirect
      href={target}
      title={dict.metadata.title}
      description={dict.metadata.description}
      heading={dict.metadata.siteName}
    />
  );
}
