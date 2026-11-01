import { notFound } from "next/navigation";
import { locales, isLocale, type Locale } from "@/i18n/config";
import { buildHomeMetadata } from "@/i18n/metadata";
import HomePageView from "@/components/HomePageView";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) return {};
  return buildHomeMetadata(localeParam);
}

export default async function LocaleHomePage({ params }: PageProps) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale: Locale = localeParam;
  return <HomePageView locale={locale} />;
}
