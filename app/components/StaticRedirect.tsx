import type { Metadata } from "next";
import { locales } from "@/i18n/config";
import { SITE_URL } from "@/lib/site";

type StaticRedirectProps = {
  href: string;
  title: string;
  description: string;
  heading: string;
};

/** Fallback redirect page with SEO-safe content (primary redirect = Apache 301 in .htaccess) */
export function StaticRedirect({ href, title, description, heading }: StaticRedirectProps) {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background px-6 py-16">
      <article className="max-w-lg text-center space-y-4">
        <h1 className="text-2xl font-bold text-foreground">{heading}</h1>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
        <p>
          <a href={href} className="text-primary font-semibold underline hover:opacity-80">
            {title}
          </a>
        </p>
      </article>
    </main>
  );
}

export function redirectMetadata(
  canonicalPath: string,
  meta: { title: string; description: string }
): Metadata {
  const canonical = `${SITE_URL}${canonicalPath}`;
  const pathWithoutLocale = canonicalPath.replace(/^\/[^/]+/, "");

  return {
    title: meta.title,
    description: meta.description,
    robots: { index: false, follow: true },
    alternates: {
      canonical,
      languages: {
        ...Object.fromEntries(
          locales.map((loc) => [loc, `${SITE_URL}/${loc}${pathWithoutLocale}`])
        ),
        "x-default": `${SITE_URL}/en${pathWithoutLocale}`,
      },
    },
  };
}
