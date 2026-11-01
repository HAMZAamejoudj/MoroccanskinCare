import type { Metadata } from "next";
import { defaultLocale } from "@/i18n/config";
import { buildRootMetadata } from "@/i18n/metadata";
import HomePageView from "@/components/HomePageView";

export const metadata: Metadata = buildRootMetadata();

export default function RootHomePage() {
  return <HomePageView locale={defaultLocale} />;
}
