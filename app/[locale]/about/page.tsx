import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Award, Heart, Leaf, Lightbulb, Package, ShieldCheck, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadGenModal from "@/components/LeadGenModal";
import LocaleShell from "@/components/LocaleShell";
import { Button } from "@/components/ui/button";
import { LocaleProvider } from "@/providers/LocaleProvider";
import { locales, isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { buildAboutMetadata } from "@/i18n/metadata";
import JsonLd from "@/components/JsonLd";
import { buildPageSchema } from "@/lib/schema";

type PageProps = {
  params: Promise<{ locale: string }>;
};

const commitmentIcons = [Leaf, ShieldCheck, Lightbulb] as const;
const whyChooseIcons = [Heart, Award, Package, Users] as const;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) return {};
  return buildAboutMetadata(localeParam);
}

export default async function AboutPage({ params }: PageProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale: Locale = localeParam;
  const dict = getDictionary(locale);
  const t = dict.aboutPage;

  return (
    <>
      <JsonLd data={buildPageSchema(locale, "about", dict)} />
      <LocaleProvider locale={locale} dict={dict}>
      <LocaleShell locale={locale}>
        <div className="min-h-screen">
          <LeadGenModal />
          <Header />
          <main>
            <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-muted/30 to-white overflow-hidden">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[10%] -left-[5%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full" />
                <div className="absolute top-[20%] -right-[10%] w-[35%] h-[50%] bg-[#E8C69F]/20 blur-[100px] rounded-full" />
              </div>

              <div className="container-narrow relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                  <div>
                    <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-4">
                      {t.hero.badge}
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
                      {t.hero.title}{" "}
                      <span className="text-primary">{t.hero.titleHighlight}</span>
                    </h1>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                      {t.hero.description}
                    </p>
                    <p className="text-lg font-semibold text-foreground mb-4">
                      {t.hero.committedLabel}
                    </p>
                    <ul className="space-y-4">
                      {t.hero.commitments.map((item, index) => {
                        const Icon = commitmentIcons[index];
                        return (
                          <li key={item.title} className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                              <Icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
                            </div>
                            <div>
                              <span className="font-semibold text-foreground">{item.title}:</span>{" "}
                              <span className="text-muted-foreground">{item.description}</span>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  <div className="relative">
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                      <Image
                        src="/image/bulk-argan-oil.jpg"
                        alt={t.hero.imageAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                        priority
                      />
                    </div>
                    <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full rounded-2xl bg-primary/10" />
                  </div>
                </div>
              </div>
            </section>

            <section className="section-padding bg-white">
              <div className="container-narrow">
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    {t.mission.title}
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {t.mission.description}
                  </p>
                </div>
              </div>
            </section>

            <section className="section-padding bg-muted/30">
              <div className="container-narrow">
                <div className="text-center max-w-2xl mx-auto mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {t.whyChoose.title}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                  {t.whyChoose.items.map((item, index) => {
                    const Icon = whyChooseIcons[index];
                    return (
                      <div
                        key={item.title}
                        className="bg-card rounded-xl border border-border p-8 text-center hover:border-primary/50 hover:shadow-lg transition-all duration-300 animate-fade-up"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-6">
                          <Icon className="h-7 w-7" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-lg font-semibold text-foreground mb-3">{item.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>

            <section className="section-padding bg-white">
              <div className="container-narrow">
                <div className="relative rounded-2xl overflow-hidden">
                  <div className="absolute inset-0">
                    <Image
                      src="/image/cosmetic-argan-oil-handmade.webp"
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
                      <Link href={`/${locale}/products/`}>
                        <Button variant="moroccan" size="lg" className="rounded-lg">
                          {t.cta.exploreProducts}
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                      </Link>
                      <Link href={`/${locale}/contact/`}>
                        <Button
                          variant="outline"
                          size="lg"
                          className="rounded-lg border-2 border-white/30 text-white bg-transparent hover:bg-white/10"
                        >
                          {t.cta.contactUs}
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
