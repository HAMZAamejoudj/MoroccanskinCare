import type { Metadata } from "next";
import { defaultLocale } from "@/i18n/config";
import { buildHomeMetadata } from "@/i18n/metadata";
import HomePageView from "@/components/HomePageView";

export const metadata: Metadata = buildHomeMetadata(defaultLocale);

export default function RootHomePage() {
  return <HomePageView locale={defaultLocale} />;
}
