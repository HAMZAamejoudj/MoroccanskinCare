import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Droplets,
  Heart,
  Leaf,
  Quote,
  ShieldCheck,
  Sun,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadGenModal from "@/components/LeadGenModal";
import LocaleShell from "@/components/LocaleShell";
import { Button } from "@/components/ui/button";
import { LocaleProvider } from "@/providers/LocaleProvider";
import { locales, isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { buildBlogMetadata } from "@/i18n/metadata";
import JsonLd from "@/components/JsonLd";
import { buildPageSchema } from "@/lib/schema";

type PageProps = {
  params: Promise<{ locale: string }>;
};

const whyChooseIcons = [Leaf, ShieldCheck, Award, Heart, Sun] as const;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) return {};
  return buildBlogMetadata(localeParam);
}

export default async function BlogPage({ params }: PageProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale: Locale = localeParam;
  const dict = getDictionary(locale);
  const t = dict.blogPage;

  return (
    <>
      <JsonLd data={buildPageSchema(locale, "blog", dict)} />
      <LocaleProvider locale={locale} dict={dict}>
      <LocaleShell locale={locale}>
        <div className="min-h-screen">
          <LeadGenModal />
          <Header />
          <main>
            <section className="relative min-h-[50vh] flex items-center bg-background pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[10%] -left-[5%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full animate-mesh" />
                <div
                  className="absolute top-[20%] -right-[10%] w-[35%] h-[50%] bg-[#E8C69F]/30 blur-[100px] rounded-full animate-mesh"
                  style={{ animationDelay: "-5s" }}
                />
                <div
                  className="absolute -bottom-[10%] left-[20%] w-[30%] h-[30%] bg-primary/10 blur-[80px] rounded-full animate-mesh"
                  style={{ animationDelay: "-10s" }}
                />
                <div
                  className="absolute inset-0 opacity-[0.03]"
                  style={{
                    backgroundImage: "url('/assets/moroccan-pattern.webp')",
                    backgroundSize: "400px",
                  }}
                  aria-hidden="true"
                />
              </div>

              <div className="container-narrow relative z-10">
                <div className="max-w-3xl mx-auto text-center animate-fade-up">
                  <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-foreground leading-[1.15] mb-6 tracking-tight">
                    {t.hero.title}{" "}
                    <span className="text-primary">{t.hero.titleHighlight}</span>
                  </h1>

                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
                    {t.hero.description}
                  </p>

                  <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {t.hero.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-muted text-xs font-medium text-muted-foreground border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-center">
                    <Link href={`/${locale}/products/`}>
                      <Button variant="moroccan" size="lg" className="rounded-xl px-8 py-3 text-base shadow-md">
                        {t.hero.cta}
                        <ArrowRight className="ml-2 h-5 w-5 rtl:rotate-180 rtl:mr-2 rtl:ml-0" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            <section className="section-padding bg-white">
              <div className="container-narrow">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                      {t.history.title}
                    </h2>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                      {t.history.description}
                    </p>
                    <ul className="space-y-4">
                      {t.history.highlights.map((item) => (
                        <li key={item.title} className="flex items-start gap-3">
                          <Droplets className="h-5 w-5 text-primary mt-1 shrink-0" />
                          <div>
                            <span className="font-semibold text-foreground">{item.title}:</span>{" "}
                            <span className="text-muted-foreground">{item.description}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src="/image/ghassoul-clay-paste-rose.webp"
                      alt={t.history.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </section>

            <section className="section-padding bg-muted/30">
              <div className="container-narrow">
                <div className="text-center max-w-2xl mx-auto mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {t.products.title}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                  {t.products.items.map((product, index) => {
                    const blogSlugs = [
                      "cosmetic-argan-oil",
                      "food-grade-argan-oil",
                      "prickly-pear-seed-oil",
                      "moroccan-black-soap",
                      "moroccan-ghassoul-clay",
                      "blue-nila-powder",
                      "aker-fassi-powder",
                      "tbrima-powder",
                      "sidr-powder",
                    ];
                    const slug = (product as any).slug || blogSlugs[index] || "cosmetic-argan-oil";
                    const articleUrl = `/${locale}/blog/${slug}/`;

                    return (
                      <article
                        key={product.title}
                        className="group flex flex-col h-full bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/50 hover:shadow-xl transition-all duration-300"
                        style={{ animationDelay: `${index * 0.05}s` }}
                      >
                        <Link href={articleUrl} className="block relative aspect-[16/10] overflow-hidden bg-muted">
                          <Image
                            src={product.image}
                            alt={product.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </Link>
                        <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                          <div>
                            <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                              <Link href={articleUrl}>
                                {product.title}
                              </Link>
                            </h3>
                            <ul className="space-y-2 mb-4">
                              {product.benefits.map((benefit) => (
                                <li
                                  key={benefit}
                                  className="flex items-start gap-2 text-sm text-muted-foreground"
                                >
                                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                                  <span>{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="pt-3 border-t border-border/70 flex items-center justify-between">
                            <Link
                              href={articleUrl}
                              className="inline-flex items-center text-xs font-bold text-primary hover:underline"
                            >
                              {locale === "fr" ? "Lire le Guide Complet" : locale === "ar" ? "قراءة الدليل الشامل" : "Read Full Sourcing Guide"}
                              <ArrowRight className="ms-1.5 h-3.5 w-3.5 rtl:rotate-180" />
                            </Link>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            </section>

            <section className="section-padding bg-white">
              <div className="container-narrow">
                <div className="text-center max-w-2xl mx-auto mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {t.routine.title}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {t.routine.steps.map((item) => (
                    <div
                      key={item.step}
                      className="bg-muted/30 rounded-xl border border-border p-8"
                    >
                      <span className="inline-block text-xs font-bold text-primary uppercase tracking-widest mb-2">
                        {item.step}
                      </span>
                      <h3 className="text-xl font-semibold text-foreground mb-4">{item.title}</h3>
                      <ul className="space-y-2">
                        {item.items.map((line) => (
                          <li key={line} className="flex items-start gap-2 text-muted-foreground">
                            <span className="text-primary mt-1.5">•</span>
                            {line}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="section-padding bg-muted/30">
              <div className="container-narrow">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                      {t.wellness.title}
                    </h2>
                    <p className="text-muted-foreground text-lg mb-6">{t.wellness.intro}</p>
                    <ul className="space-y-3">
                      {t.wellness.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-3 text-muted-foreground">
                          <Award className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src="/image/dried-rosebuds-petals.webp"
                      alt={t.wellness.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </section>

            <section className="section-padding bg-white">
              <div className="container-narrow">
                <div className="text-center max-w-2xl mx-auto mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {t.whyChoose.title}
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                  {t.whyChoose.items.map((item, index) => {
                    const Icon = whyChooseIcons[index];
                    return (
                      <div
                        key={item.title}
                        className="bg-card rounded-xl border border-border p-8 text-center hover:border-primary/50 transition-colors"
                      >
                        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-6">
                          <Icon className="h-7 w-7" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>

            <section className="section-padding bg-muted/30">
              <div className="container-narrow">
                <div className="text-center max-w-2xl mx-auto mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {t.testimonials.title}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {t.testimonials.items.map((item) => (
                    <blockquote
                      key={item.author}
                      className="bg-card rounded-xl border border-border p-8"
                    >
                      <Quote className="h-8 w-8 text-primary/30 mb-4" />
                      <p className="text-foreground leading-relaxed mb-6 italic">
                        &ldquo;{item.quote}&rdquo;
                      </p>
                      <footer className="text-sm font-semibold text-muted-foreground">
                        — {item.author}
                      </footer>
                    </blockquote>
                  ))}
                </div>
              </div>
            </section>

            <section className="section-padding bg-white">
              <div className="container-narrow">
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    {t.conclusion.title}
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                    {t.conclusion.description}
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link href={`/${locale}/products/`}>
                      <Button variant="moroccan" size="lg" className="rounded-lg">
                        {t.conclusion.shopProducts}
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                    <Link href={`/${locale}/private-label/`}>
                      <Button variant="moroccan-outline" size="lg" className="rounded-lg">
                        {t.conclusion.privateLabelQuote}
                      </Button>
                    </Link>
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
