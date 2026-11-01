import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  Box,
  CheckCircle2,
  Globe,
  Package,
  ShieldCheck,
  Tag,
  Truck,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadGenModal from "@/components/LeadGenModal";
import LocaleShell from "@/components/LocaleShell";
import { Button } from "@/components/ui/button";
import { LocaleProvider } from "@/providers/LocaleProvider";
import { locales, isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { buildPrivateLabelMetadata } from "@/i18n/metadata";
import JsonLd from "@/components/JsonLd";
import { buildPageSchema } from "@/lib/schema";
import { whatsappUrl } from "@/lib/contact";

type PageProps = {
  params: Promise<{ locale: string }>;
};

const whyChooseIcons = [Award, Package, Tag, Box, Globe] as const;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) return {};
  return buildPrivateLabelMetadata(localeParam);
}

export default async function PrivateLabelPage({ params }: PageProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale: Locale = localeParam;
  const dict = getDictionary(locale);
  const t = dict.privateLabelPage;

  return (
    <>
      <JsonLd data={buildPageSchema(locale, "private-label", dict)} />
      <LocaleProvider locale={locale} dict={dict}>
      <LocaleShell locale={locale}>
        <div className="min-h-screen">
          <LeadGenModal />
          <Header />
          <main>
            <section className="relative min-h-[75vh] flex items-center bg-background pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[10%] -left-[5%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full animate-mesh" />
                <div
                  className="absolute top-[20%] -right-[10%] w-[35%] h-[50%] bg-[#E8C69F]/30 blur-[100px] rounded-full animate-mesh"
                  style={{ animationDelay: "-5s" }}
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
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                  <div>
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
                      <Tag className="h-3.5 w-3.5 text-primary" />
                      <span className="text-xs font-semibold text-primary uppercase tracking-widest">
                        {t.hero.badge}
                      </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-foreground leading-[1.1] mb-6">
                      {t.hero.title}{" "}
                      <span className="text-primary">{t.hero.titleHighlight}</span>
                    </h1>

                    <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
                      {t.hero.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {t.hero.platforms.map((platform) => (
                        <span
                          key={platform}
                          className="px-3 py-1 rounded-full bg-muted text-xs font-medium text-muted-foreground border border-border"
                        >
                          {platform}
                        </span>
                      ))}
                    </div>

                    <Link href={whatsappUrl} target="_blank">
                      <Button variant="moroccan" size="lg" className="rounded-lg">
                        {t.hero.cta}
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                  </div>

                  <div className="relative">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                      <Image
                        src="/assets/service-private-label.webp"
                        alt={t.hero.imageAlt}
                        width={800}
                        height={600}
                        className="w-full h-auto object-cover aspect-[4/3]"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-background/10 via-transparent to-primary/10" />
                    </div>
                    <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full rounded-2xl bg-primary/10" />
                  </div>
                </div>
              </div>
            </section>

            <section className="section-padding bg-white">
              <div className="container-narrow">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                      {t.orderInfo.title}
                    </h2>

                    <dl className="space-y-5 mb-10">
                      {t.orderInfo.supplyInfo.map((item) => (
                        <div key={item.label} className="border-b border-border pb-5 last:border-0">
                          <dt className="text-sm font-semibold text-primary uppercase tracking-wide mb-1">
                            {item.label}
                          </dt>
                          <dd className="text-muted-foreground leading-relaxed">{item.value}</dd>
                        </div>
                      ))}
                    </dl>

                    <ul className="space-y-3 mb-8">
                      {t.orderInfo.highlights.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-muted/30 rounded-xl border border-border p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <Truck className="h-6 w-6 text-primary" />
                        <h3 className="text-xl font-semibold text-foreground">
                          {t.orderInfo.shipping.title}
                        </h3>
                      </div>
                      <ul className="space-y-2">
                        {t.orderInfo.shipping.items.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-muted-foreground">
                            <span className="text-primary mt-1">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-muted/30 rounded-xl border border-border p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <Box className="h-6 w-6 text-primary" />
                        <h3 className="text-xl font-semibold text-foreground">
                          {t.orderInfo.packaging.title}
                        </h3>
                      </div>
                      <ul className="space-y-2">
                        {t.orderInfo.packaging.items.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-muted-foreground">
                            <span className="text-primary mt-1">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-lg">
                      <Image
                        src="/image/cosmetic-argan-oil-handmade.webp"
                        alt={t.orderInfo.sideImageAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                  {t.whyChoose.items.map((item, index) => {
                    const Icon = whyChooseIcons[index];
                    return (
                      <div
                        key={item.title}
                        className="bg-card rounded-xl border border-border p-8 hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                      >
                        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-6">
                          <Icon className="h-7 w-7" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-4">{item.title}</h3>
                        <ul className="space-y-3">
                          {item.points.map((point) => (
                            <li
                              key={point}
                              className="flex items-start gap-2 text-sm text-muted-foreground"
                            >
                              <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>

            <section className="section-padding bg-white">
              <div className="container-narrow">
                <div className="text-center max-w-2xl mx-auto mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {t.howToOrder.title}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
                  {t.howToOrder.steps.map((item) => (
                    <div
                      key={item.step}
                      className="relative bg-muted/30 rounded-xl border border-border p-8 text-center"
                    >
                      <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-lg mb-4">
                        {item.step}
                      </span>
                      <h3 className="text-lg font-semibold text-foreground mb-3">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <Link href={whatsappUrl} target="_blank">
                    <Button variant="moroccan" size="xl" className="rounded-lg">
                      {t.howToOrder.cta}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </section>

            <section className="section-padding bg-muted/30">
              <div className="container-narrow">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                      {t.certifications.title}
                    </h2>
                    <p className="text-muted-foreground text-lg mb-8">{t.certifications.intro}</p>

                    <div className="grid sm:grid-cols-2 gap-4 mb-8">
                      {t.certifications.items.map((cert) => (
                        <div
                          key={cert.title}
                          className="bg-card rounded-xl border border-border p-6"
                        >
                          <div className="flex items-start gap-3">
                            <BadgeCheck className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                            <div>
                              <h3 className="font-semibold text-foreground mb-1">{cert.title}</h3>
                              <p className="text-sm text-muted-foreground">{cert.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {t.certifications.closing}
                    </p>
                  </div>

                  <div className="relative">
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                      <Image
                        src="/image/organic-argan-oil-bulk-drums.webp"
                        alt={t.certifications.imageAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-4 -right-4 md:-right-8 bg-card border border-border rounded-xl px-5 py-4 shadow-lg">
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="h-5 w-5 text-primary" />
                        <p className="text-sm font-semibold text-foreground">
                          {t.certifications.badge}
                        </p>
                      </div>
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
