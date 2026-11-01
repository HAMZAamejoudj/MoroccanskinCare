export const SITE_URL = "https://moroccanskincare.com";

export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export const ORG_NAME = "Moroccan Skincare";
export const ORG_LEGAL_NAME = "Organica Group";

export const SOCIAL_PROFILES = [
  "https://www.facebook.com/moroccanorganica/",
  "https://www.instagram.com/moroccanorganic/",
  "https://www.tiktok.com/@moroccanorganica",
] as const;

export const SITE_ROUTES = [
  "moroccan-organic-skincare",
  "products",
  "private-label",
  "about",
  "blog",
  "contact",
] as const;

export type SiteRoute = (typeof SITE_ROUTES)[number];

export function localePath(locale: string, route: string): string {
  if (!route || route === "moroccan-organic-skincare") {
    return `/${locale}/`;
  }
  return `/${locale}/${route}/`;
}

export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path}`;
}
