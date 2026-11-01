import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  Clock,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadGenModal from "@/components/LeadGenModal";
import ContactForm from "@/components/ContactForm";
import LocaleShell from "@/components/LocaleShell";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { Button } from "@/components/ui/button";
import { LocaleProvider } from "@/providers/LocaleProvider";
import { locales, isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { buildContactMetadata } from "@/i18n/metadata";
import JsonLd from "@/components/JsonLd";
import { buildPageSchema } from "@/lib/schema";
import { phoneDisplay, phoneTel, whatsappUrl } from "@/lib/contact";

type PageProps = {
  params: Promise<{ locale: string }>;
};

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1 .05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
  </svg>
);

const socialHrefs = [
  "https://www.instagram.com/moroccanorganic/",
  "https://www.facebook.com/moroccanorganica/",
  "https://www.tiktok.com/@moroccanorganica",
];

const socialIcons = [Instagram, Facebook, TikTokIcon] as const;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) return {};
  return buildContactMetadata(localeParam);
}

export default async function ContactPage({ params }: PageProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale: Locale = localeParam;
  const dict = getDictionary(locale);
  const t = dict.contactPage;

  return (
    <>
      <JsonLd data={buildPageSchema(locale, "contact", dict)} />
      <LocaleProvider locale={locale} dict={dict}>
      <LocaleShell locale={locale}>
        <div className="min-h-screen">
          <LeadGenModal />
          <Header />
          <main>
            <section className="relative pt-28 pb-12 md:pt-36 md:pb-16 bg-gradient-to-b from-muted/30 to-white overflow-hidden">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[10%] -left-[5%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full" />
              </div>

              <div className="container-narrow relative z-10">
                <div className="max-w-3xl">
                  <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-4">
                    {t.hero.badge}
                  </span>
                  <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
                    {t.hero.title}
                  </h1>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {t.hero.description}
                  </p>
                </div>
              </div>
            </section>

            <section className="section-padding bg-white">
              <div className="container-narrow">
                <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
                  <div className="lg:col-span-2">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                      {t.info.title}
                    </h2>

                    <div className="space-y-8">
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <Mail className="h-5 w-5 text-primary" />
                          <h3 className="font-semibold text-foreground">{t.info.email.title}</h3>
                        </div>
                        <ul className="space-y-2 pl-8 text-sm text-muted-foreground">
                          <li>
                            <span className="font-medium text-foreground">
                              {t.info.email.customerSupport}
                            </span>{" "}
                            <a
                              href="mailto:contact@moroccanskincare.com"
                              className="text-primary hover:underline"
                            >
                              contact@moroccanskincare.com
                            </a>
                          </li>
                          <li>
                            <span className="font-medium text-foreground">
                              {t.info.email.wholesalePrivateLabel}
                            </span>{" "}
                            <a
                              href="mailto:contact@moroccanskincare.com"
                              className="text-primary hover:underline"
                            >
                              contact@moroccanskincare.com
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <Phone className="h-5 w-5 text-primary" />
                          <h3 className="font-semibold text-foreground">{t.info.phone.title}</h3>
                        </div>
                        <ul className="space-y-2 pl-8 text-sm">
                          <li>
                            <a
                              href={phoneTel}
                              className="text-muted-foreground hover:text-primary transition-colors"
                            >
                              {phoneDisplay}
                            </a>
                          </li>
                          <li>
                            <a
                              href={whatsappUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                            >
                              <WhatsAppIcon className="h-4 w-4" />
                              {t.info.phone.whatsapp}
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <MapPin className="h-5 w-5 text-primary" />
                          <h3 className="font-semibold text-foreground">{t.info.address.title}</h3>
                        </div>
                        <address className="pl-8 text-sm text-muted-foreground not-italic leading-relaxed">
                          {t.info.address.lines.map((line, index) => (
                            <span key={line}>
                              {line}
                              {index < t.info.address.lines.length - 1 && <br />}
                            </span>
                          ))}
                        </address>
                      </div>

                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <Clock className="h-5 w-5 text-primary" />
                          <h3 className="font-semibold text-foreground">{t.info.hours.title}</h3>
                        </div>
                        <ul className="space-y-1 pl-8 text-sm text-muted-foreground">
                          {t.info.hours.items.map((hours) => (
                            <li key={hours}>{hours}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-3">
                    <div className="bg-muted/30 rounded-2xl border border-border p-8 md:p-10">
                      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                        {t.form.title}
                      </h2>
                      <p className="text-muted-foreground mb-8">{t.form.description}</p>
                      <ContactForm />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="section-padding bg-muted/30">
              <div className="container-narrow">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                      {t.wholesale.title}
                    </h2>
                    <p className="text-muted-foreground text-lg mb-6">{t.wholesale.intro}</p>
                    <ul className="space-y-3 mb-8">
                      {t.wholesale.points.map((point) => (
                        <li key={point} className="flex items-start gap-3 text-muted-foreground">
                          <span className="text-primary mt-1">•</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                    <Link href={`/${locale}/private-label/`}>
                      <Button variant="moroccan" size="lg" className="rounded-lg">
                        {t.wholesale.requestQuote}
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                  </div>

                  <div className="bg-card rounded-2xl border border-border p-8 md:p-10">
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      {t.wholesale.directTitle}
                    </h3>
                    <p className="text-muted-foreground mb-6">{t.wholesale.directDescription}</p>
                    <Link href={whatsappUrl} target="_blank">
                      <Button variant="moroccan-outline" size="lg" className="w-full rounded-lg">
                        <WhatsAppIcon className="mr-2 h-5 w-5" />
                        {t.wholesale.whatsapp}
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            <section className="section-padding bg-white">
              <div className="container-narrow">
                <div className="text-center max-w-2xl mx-auto mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {t.social.title}
                  </h2>
                  <p className="text-muted-foreground text-lg">{t.social.description}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
                  {t.social.channels.map((channel, index) => {
                    const Icon = socialIcons[index];
                    return (
                      <a
                        key={channel.name}
                        href={socialHrefs[index]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col items-center text-center bg-muted/30 rounded-xl border border-border p-8 hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                      >
                        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                          <Icon className="h-7 w-7" />
                        </div>
                        <h3 className="font-semibold text-foreground mb-1">{channel.name}</h3>
                        <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                          {channel.handle}
                        </p>
                      </a>
                    );
                  })}
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
