"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Clock,
  Calendar,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Package,
  ShieldCheck,
  FileText,
  BookOpen,
  Share2,
  HelpCircle,
  ExternalLink,
} from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { Button } from "@/components/ui/button";
import type { BlogArticle } from "@/lib/blog-data";
import type { Locale } from "@/i18n/config";
import { SITE_URL } from "@/lib/site";

interface BlogDetailClientProps {
  article: BlogArticle;
  locale: Locale;
  relatedArticles: BlogArticle[];
}

export default function BlogDetailClient({
  article,
  locale,
  relatedArticles,
}: BlogDetailClientProps) {
  const content = article[locale] || article.en;
  const isRTL = locale === "ar";
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const articleUrl = `${SITE_URL}/${locale}/blog/${article.slug}/`;
  const shareWhatsAppUrl = `https://wa.me/?text=${encodeURIComponent(
    `${content.title} - ${articleUrl}`
  )}`;
  const inquiryWhatsAppUrl = `https://wa.me/212633760405?text=${encodeURIComponent(
    `Hello, I read your article "${content.title}" and would like to inquire about wholesale B2B pricing and export specifications.`
  )}`;

  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* 1. Breadcrumbs */}
      <div className="border-b border-border/60 bg-muted/30 pt-24 md:pt-28 pb-4">
        <div className="container-narrow">
          <nav className="flex items-center flex-wrap gap-2 text-xs sm:text-sm text-muted-foreground">
            <Link href={`/${locale}/`} className="hover:text-primary transition-colors shrink-0">
              {locale === "fr" ? "Accueil" : locale === "ar" ? "الرئيسية" : "Home"}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 shrink-0 text-muted-foreground/60 rtl:rotate-180" />
            <Link href={`/${locale}/blog/`} className="hover:text-primary transition-colors shrink-0">
              {locale === "fr" ? "Blog & Guides" : locale === "ar" ? "المدونة ودليل التوريد" : "Blog & Guides"}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 shrink-0 text-muted-foreground/60 rtl:rotate-180" />
            <span className="text-foreground font-semibold">
              {content.title}
            </span>
          </nav>
        </div>
      </div>

      {/* 2. Article Header Hero */}
      <header className="py-10 md:py-16 bg-gradient-to-b from-muted/30 via-background to-background border-b border-border/70">
        <div className="container-narrow max-w-4xl">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20">
              {content.badge}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Clock className="w-3.5 h-3.5 text-primary" />
              {content.readTime}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Calendar className="w-3.5 h-3.5 text-primary" />
              {content.date}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground leading-[1.2] tracking-tight mb-6">
            {content.title}
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
            {content.lead}
          </p>

          <div className="flex items-center justify-between gap-4 pt-5 border-t border-border/60">
            <span className="text-xs font-medium text-muted-foreground">
              {locale === "fr"
                ? "Guide B2B & Spécifications Export"
                : locale === "ar"
                ? "دليل B2B ومواصفات التصدير المعتمدة"
                : "B2B Sourcing & Export Guide"}
            </span>

            <div className="flex items-center gap-2">
              <a
                href={shareWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white border border-border text-xs font-semibold text-foreground/80 hover:text-emerald-700 hover:border-emerald-500 transition-colors"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-600" />
                {locale === "fr" ? "Partager" : locale === "ar" ? "مشاركة المقال" : "Share Guide"}
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* 3. Main Content Container */}
      <main className="py-12 md:py-16">
        <div className="container-narrow max-w-4xl">
          {/* Featured Image */}
          <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-xl mb-12 border border-border/80 bg-muted">
            <Image
              src={article.image}
              alt={content.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-cover"
            />
          </div>

          {/* Quick Table of Contents Card */}
          {content.tableOfContents && content.tableOfContents.length > 0 && (
            <div className="mb-12 p-6 sm:p-8 rounded-2xl bg-muted/40 border border-border/80">
              <h2 className="text-sm font-bold uppercase tracking-wider text-primary mb-4 flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                {locale === "fr"
                  ? "Sommaire du Guide"
                  : locale === "ar"
                  ? "فهرس محتويات الدليل"
                  : "Table of Contents"}
              </h2>
              <ul className="space-y-2.5 text-sm">
                {content.tableOfContents.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="text-foreground/80 hover:text-primary transition-colors flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Detailed Content Sections */}
          <div className="space-y-12">
            {content.sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-24 space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight border-b border-border/60 pb-3">
                  {section.title}
                </h2>

                <div className="space-y-4 text-base sm:text-lg text-foreground/85 leading-relaxed">
                  {section.content.map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>

                {/* Key Takeaways Highlight Box */}
                {section.takeaways && section.takeaways.length > 0 && (
                  <div className="my-6 p-5 sm:p-6 rounded-2xl bg-primary/5 border border-primary/20 space-y-2.5">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      {locale === "fr"
                        ? "Points Clés à Retenir"
                        : locale === "ar"
                        ? "أبرز النقاط المستفادة"
                        : "Key Takeaways"}
                    </h3>
                    <ul className="space-y-2 text-sm text-foreground/90">
                      {section.takeaways.map((point, tIdx) => (
                        <li key={tIdx} className="flex items-start gap-2.5">
                          <span className="text-primary mt-1 font-bold">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Alert Callout */}
                {section.callout && (
                  <div className="my-6 p-5 sm:p-6 rounded-2xl bg-amber-500/10 border-l-4 rtl:border-l-0 rtl:border-r-4 border-amber-500 space-y-1.5">
                    <h3 className="text-sm font-bold text-amber-900 dark:text-amber-300">
                      {section.callout.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-amber-950/80 dark:text-amber-200/90 leading-relaxed">
                      {section.callout.text}
                    </p>
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* 4. Dedicated B2B Wholesale Specifications Box */}
          <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-muted/60 via-white to-muted/40 border border-border shadow-sm space-y-6">
            <div className="flex items-center gap-3 border-b border-border pb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Package className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-primary">
                  {locale === "fr" ? "Approvisionnement Professionnel" : locale === "ar" ? "المواصفات التجارية للشركات" : "B2B Commercial Guide"}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-foreground">
                  {content.b2bGuide.title}
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-white border border-border/70 space-y-1">
                <span className="text-muted-foreground text-xs block">
                  {locale === "fr" ? "Quantité Minimum (MOQ) :" : locale === "ar" ? "الحد الأدنى للطلب (MOQ):" : "Minimum Order Quantity (MOQ):"}
                </span>
                <strong className="text-emerald-700 font-semibold block">{content.b2bGuide.moq}</strong>
              </div>
              <div className="p-4 rounded-xl bg-white border border-border/70 space-y-1">
                <span className="text-muted-foreground text-xs block">
                  {locale === "fr" ? "Durée de Conservation :" : locale === "ar" ? "مدة الصلاحية والتخزين:" : "Shelf Life:"}
                </span>
                <strong className="text-foreground font-semibold block">{content.b2bGuide.shelfLife}</strong>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-foreground mb-2">
                {locale === "fr" ? "Formats de Conditionnement Disponibles :" : locale === "ar" ? "أشكال وأحجام التعبئة المتاحة:" : "Available Packaging Formats:"}
              </h4>
              <ul className="space-y-1.5 text-xs sm:text-sm text-muted-foreground">
                {content.b2bGuide.packagingFormats.map((fmt, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>{fmt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-foreground mb-2">
                {locale === "fr" ? "Certifications & Dossier Export :" : locale === "ar" ? "الشهادات والوثائق التصديرية:" : "Certifications & Export Dossier:"}
              </h4>
              <div className="flex flex-wrap gap-2">
                {content.b2bGuide.exportDocs.map((doc, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-primary/10 text-primary text-xs font-semibold"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    {doc}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* 5. Product Link CTA Card */}
          <div className="mt-10 p-8 rounded-3xl bg-primary text-white shadow-xl relative overflow-hidden">
            <div className="relative z-10 max-w-xl space-y-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/20 text-white">
                {locale === "fr" ? "Commandez en Direct du Maroc" : locale === "ar" ? "مباشرة من مصادر الإنتاج المغربية" : "Direct Cooperative Sourcing"}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold leading-tight">
                {locale === "fr"
                  ? `Demandez Votre Devis & Échantillons Gratuits pour ${content.title.split(":")[0]}`
                  : locale === "ar"
                  ? `اطلب عرض أسعار وعينات مجانية لـ ${content.title.split(":")[0]}`
                  : `Request Wholesale Pricing & Lab Samples for ${content.title.split(":")[0]}`}
              </h3>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                {locale === "fr"
                  ? "Bénéficiez de tarifs préférentiels directs producteurs, d'un accompagnement personnalisé pour votre marque privée, et d'une expédition express mondiale sécurisée."
                  : locale === "ar"
                  ? "احصلوا على أسعار المصنع التنافسية المباشرة، وحلول التعبئة بعلامتكم الخاصة (OEM)، مع شحن دولي سريع وموثق بشهادات COA/MSDS."
                  : "Partner directly with authentic Moroccan producers. Get factory-direct pricing, customized OEM private label packaging, and worldwide express shipping."}
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <Link href={`/${locale}/products/${article.productSlug}/`}>
                  <Button variant="secondary" size="lg" className="w-full sm:w-auto font-bold rounded-xl shadow-md">
                    {locale === "fr" ? "Consulter la Fiche Produit & Tarifs" : locale === "ar" ? "عرض تفاصيل المنتج والأسعار" : "View Product Page & Wholesale Rates"}
                    <ArrowRight className="ms-2 h-4 w-4 rtl:rotate-180" />
                  </Button>
                </Link>

                <a
                  href={inquiryWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-semibold transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4 text-emerald-300" />
                  {locale === "fr" ? "Contacter sur WhatsApp" : locale === "ar" ? "تواصل مباشر عبر الواتساب" : "Discuss on WhatsApp"}
                </a>
              </div>
            </div>
          </div>

          {/* 6. FAQ Accordion */}
          {content.faq && content.faq.length > 0 && (
            <div className="mt-14 space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <HelpCircle className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-bold text-foreground">
                  {locale === "fr"
                    ? "Questions Fréquentes (FAQ B2B)"
                    : locale === "ar"
                    ? "الأسئلة الشائعة للشركات والمستوردين"
                    : "Frequently Asked Questions (B2B FAQ)"}
                </h3>
              </div>

              <div className="space-y-3">
                {content.faq.map((item, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl border border-border bg-white overflow-hidden transition-all"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(idx)}
                      className="w-full p-4 sm:p-5 text-start font-bold text-foreground text-sm sm:text-base flex items-center justify-between gap-4 cursor-pointer hover:text-primary transition-colors"
                    >
                      <span>{item.q}</span>
                      <ChevronRight
                        className={`w-4 h-4 text-primary shrink-0 transition-transform ${
                          activeFaq === idx ? "rotate-90 rtl:-rotate-90" : "rtl:rotate-180"
                        }`}
                      />
                    </button>
                    {activeFaq === idx && (
                      <div className="px-4 pb-5 sm:px-5 text-xs sm:text-sm text-muted-foreground leading-relaxed border-t border-border/50 pt-3">
                        {item.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 7. Related Articles Section */}
          {relatedArticles && relatedArticles.length > 0 && (
            <div className="mt-16 pt-12 border-t border-border">
              <div className="text-center mb-8">
                <span className="text-xs font-bold uppercase tracking-widest text-primary mb-1 block">
                  {locale === "fr" ? "Continuez Votre Lecture" : locale === "ar" ? "مقالات وأدلة ذات صلة" : "Related Sourcing Guides"}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                  {locale === "fr" ? "Articles et Guides Recommandés" : locale === "ar" ? "أدلة توريد أخرى قد تهمكم" : "Explore More Sourcing Guides"}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedArticles.map((rel) => {
                  const relContent = rel[locale] || rel.en;
                  return (
                    <article
                      key={rel.slug}
                      className="group flex flex-col h-full bg-white rounded-2xl border border-border overflow-hidden hover:border-primary/50 hover:shadow-md transition-all"
                    >
                      <Link href={`/${locale}/blog/${rel.slug}/`} className="block relative aspect-[16/10] overflow-hidden bg-muted">
                        <Image
                          src={rel.image}
                          alt={relContent.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </Link>
                      <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                        <div>
                          <span className="text-[11px] font-bold uppercase tracking-wider text-primary block mb-1">
                            {relContent.badge}
                          </span>
                          <h4 className="text-sm sm:text-base font-bold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                            <Link href={`/${locale}/blog/${rel.slug}/`}>
                              {relContent.title}
                            </Link>
                          </h4>
                          <p className="text-xs text-muted-foreground line-clamp-2 mt-1.5 leading-relaxed">
                            {relContent.excerpt}
                          </p>
                        </div>

                        <div className="pt-2 border-t border-border/60">
                          <Link
                            href={`/${locale}/blog/${rel.slug}/`}
                            className="inline-flex items-center text-xs font-bold text-primary hover:underline"
                          >
                            {locale === "fr" ? "Lire l'article" : locale === "ar" ? "قراءة المقال" : "Read Guide"}
                            <ArrowRight className="ms-1.5 w-3.5 h-3.5 rtl:rotate-180" />
                          </Link>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          )}

          {/* 8. Back to Blog Button */}
          <div className="mt-12 text-center">
            <Link href={`/${locale}/blog/`}>
              <Button variant="outline" size="lg" className="rounded-xl font-semibold">
                <ArrowLeft className="me-2 h-4 w-4 rtl:rotate-180" />
                {locale === "fr" ? "Retour à la Liste des Articles" : locale === "ar" ? "العودة إلى قائمة المدونة" : "Back to All Articles"}
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

