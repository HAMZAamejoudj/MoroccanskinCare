import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import { SITE_URL, SITE_ROUTES, localePath } from "@/lib/site";
import { getAllProductSlugs } from "@/lib/products-data";
import { getAllBlogSlugs } from "@/lib/blog-data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const productSlugs = getAllProductSlugs();
  const blogSlugs = getAllBlogSlugs();

  const standardRoutes: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    SITE_ROUTES.map((route) => {
      const path = localePath(locale, route);
      const languages = Object.fromEntries(
        locales.map((loc) => [loc, `${SITE_URL}${localePath(loc, route)}`])
      );

      return {
        url: `${SITE_URL}${path}`,
        lastModified,
        changeFrequency: route === "blog" ? "monthly" : "weekly",
        priority: route === "moroccan-organic-skincare" ? 1 : route === "products" ? 0.9 : 0.8,
        alternates: {
          languages: {
            ...languages,
            "x-default": `${SITE_URL}${localePath("en", route)}`,
          },
        },
      };
    })
  );

  const productRoutes: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    productSlugs.map((slug) => {
      const languages = Object.fromEntries(
        locales.map((loc) => [loc, `${SITE_URL}/${loc}/products/${slug}/`])
      );

      return {
        url: `${SITE_URL}/${locale}/products/${slug}/`,
        lastModified,
        changeFrequency: "weekly" as const,
        priority: 0.85,
        alternates: {
          languages: {
            ...languages,
            "x-default": `${SITE_URL}/en/products/${slug}/`,
          },
        },
      };
    })
  );

  const blogRoutes: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    blogSlugs.map((slug) => {
      const languages = Object.fromEntries(
        locales.map((loc) => [loc, `${SITE_URL}/${loc}/blog/${slug}/`])
      );

      return {
        url: `${SITE_URL}/${locale}/blog/${slug}/`,
        lastModified,
        changeFrequency: "weekly" as const,
        priority: 0.8,
        alternates: {
          languages: {
            ...languages,
            "x-default": `${SITE_URL}/en/blog/${slug}/`,
          },
        },
      };
    })
  );

  return [...standardRoutes, ...productRoutes, ...blogRoutes];
}

