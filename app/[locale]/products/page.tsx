import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Leaf, Package, ShieldCheck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadGenModal from "@/components/LeadGenModal";
import ProductCatalog from "@/components/ProductCatalog";
import LocaleShell from "@/components/LocaleShell";
import { Button } from "@/components/ui/button";
import { LocaleProvider } from "@/providers/LocaleProvider";
import { locales, isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { buildProductsMetadata } from "@/i18n/metadata";
import JsonLd from "@/components/JsonLd";
import { buildPageSchema } from "@/lib/schema";

type PageProps = {
  params: Promise<{ locale: string }>;
};

const highlightIcons = [Leaf, ShieldCheck, Package] as const;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) return {};
  return buildProductsMetadata(localeParam);
}

export default async function ProductsPage({ params }: PageProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale: Locale = localeParam;
  const dict = getDictionary(locale);
  const t = dict.productsPage;

  return (
    <>
      <JsonLd data={buildPageSchema(locale, "products", dict)} />
      <LocaleProvider locale={locale} dict={dict}>
      <LocaleShell locale={locale}>
        <div className="min-h-screen">
          <LeadGenModal />
          <Header />
          <main>
            <section className="relative min-h-[60vh] flex items-center bg-background pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[10%] -left-[5%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full animate-mesh" />
                <div
                  className="absolute top-[20%] -right-[10%] w-[35%] h-[50%] bg-[#E8C69F]/30 blur-[100px] rounded-full animate-mesh"
                  style={{ animationDelay: "-5s" }}
                />
              </div>

              <div className="container-narrow relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                  <div>
                    <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-4">
                      {t.hero.badge}
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-foreground leading-[1.1] mb-6">
                      {t.hero.title}{" "}
                      <span className="text-primary">{t.hero.titleHighlight}</span>
                    </h1>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
                      {t.hero.description}
                    </p>

                    <div className="grid sm:grid-cols-3 gap-4">
                      {t.highlights.map((item, index) => {
                        const Icon = highlightIcons[index];
                        return (
                          <div key={item.title} className="flex items-start gap-3">
                            <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                              <Icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-foreground">{item.title}</p>
                              <p className="text-xs text-muted-foreground">{item.description}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="relative">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                      <Image
                        src="/image/cosmetic-argan-oil-handmade.webp"
                        alt={t.hero.imageAlt}
                        width={800}
                        height={600}
                        className="w-full h-auto object-cover aspect-[4/3]"
                        priority
                      />
                    </div>
                    <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full rounded-2xl bg-primary/10" />
                  </div>
                </div>
              </div>
            </section>

            <section className="section-padding bg-muted/30">
              <div className="container-narrow">
                <div className="text-center max-w-2xl mx-auto mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {t.catalog.title}
                  </h2>
                  <p className="text-muted-foreground text-lg">{t.catalog.description}</p>
                </div>

                <ProductCatalog />
              </div>
            </section>

            <section className="section-padding bg-white">
              <div className="container-narrow">
                <div className="relative rounded-2xl overflow-hidden">
                  <div className="absolute inset-0">
                    <Image
                      src="/assets/cta-background.webp"
                      alt={t.cta.imageAlt}
                      fill
                      className="object-cover"
                      aria-hidden="true"
                    />
                    <div className="absolute inset-0 bg-foreground/85" />
                  </div>
                  <div className="relative p-8 md:p-12 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                      {t.cta.title}
                    </h2>
                    <p className="text-white/80 max-w-xl mx-auto mb-8">{t.cta.description}</p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                      <Link href={`/${locale}/private-label/`}>
                        <Button variant="moroccan" size="lg" className="rounded-lg">
                          {t.cta.privateLabel}
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                      </Link>
                      <Link href="/contact/">
                        <Button
                          variant="outline"
                          size="lg"
                          className="rounded-lg border-2 border-white/30 text-white bg-transparent hover:bg-white/10"
                        >
                          {t.cta.requestQuote}
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
          <Footer />
        </div>
      </LocaleShell>
    </LocaleProvider>
    </>
  );
}
