"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  ShieldCheck,
  Layers,
  Package,
  FileText,
  ArrowRight,
  ChevronRight,
  Award,
  Leaf,
  Clock,
  MapPin,
  HelpCircle,
  MessageCircle,
  ExternalLink,
  ChevronDown,
  Building2,
  Send,
  Boxes,
  BadgeCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { ProductData } from "@/lib/products-data";
import { type Locale } from "@/i18n/config";
import { whatsappUrl } from "@/lib/contact";

interface ProductDetailClientProps {
  product: ProductData;
  locale: Locale;
  relatedProducts: ProductData[];
}

export default function ProductDetailClient({
  product,
  locale,
  relatedProducts
}: ProductDetailClientProps) {
  const content = product[locale] || product.en;
  const isRtl = locale === "ar";

  const [activeImage, setActiveImage] = useState(product.gallery[0] || product.image);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [selectedFormat, setSelectedFormat] = useState<string>(
    content.packagingOptions?.[0]?.title || "5L Bulk Jerrycan"
  );
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [quantity, setQuantity] = useState("25 Liters / Units");

  const customWhatsAppMsg = encodeURIComponent(
    `Hello, I would like to inquire about wholesale pricing and specifications for ${content.title} (Format: ${selectedFormat}).`
  );
  const productWhatsAppUrl = `https://wa.me/212633760405?text=${customWhatsAppMsg}`;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const name = (formData.get("name") as string) || "";
    const email = (formData.get("email") as string) || "";
    const phone = (formData.get("phone") as string) || "";
    const country = (formData.get("country") as string) || "";
    const format = (formData.get("format") as string) || selectedFormat;
    const qty = (formData.get("quantity") as string) || quantity;
    const notes = (formData.get("notes") as string) || "";

    try {
      const res = await fetch("/send-quote.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "Quote Request",
          product: content.title,
          slug: product.slug,
          name,
          email,
          phone,
          country,
          format,
          quantity: qty,
          notes,
        }),
      });

      if (res.ok) {
        setFormSubmitted(true);
      } else {
        throw new Error("PHP mailer endpoint failed");
      }
    } catch {
      // Fallback for local development or static-only hosts without PHP:
      // Opens mailto client directly to contact@moroccanskincare.com
      const mailSubject = `[Quote Request] ${content.title} - ${name}`;
      const mailBody = `Wholesale Quote Request Details:\n--------------------------------\nProduct: ${content.title}\nFull Name: ${name}\nEmail: ${email}\nPhone / WhatsApp: ${phone}\nDestination Country: ${country}\nPackaging Format: ${format}\nEstimated Quantity: ${qty}\nNotes: ${notes}\n`;
      window.location.href = `mailto:contact@moroccanskincare.com?subject=${encodeURIComponent(
        mailSubject
      )}&body=${encodeURIComponent(mailBody)}`;
      setFormSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* 1. Breadcrumb navigation */}
      <div className="border-b border-border/60 bg-muted/30 pt-24 md:pt-28 pb-4">
        <div className="container-narrow">
          <nav className="flex items-center flex-wrap gap-2 text-xs sm:text-sm text-muted-foreground">
            <Link href={`/${locale}/`} className="hover:text-primary transition-colors shrink-0">
              {locale === "fr" ? "Accueil" : locale === "ar" ? "الرئيسية" : "Home"}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 shrink-0 text-muted-foreground/60 rtl:rotate-180" />
            <Link href={`/${locale}/products/`} className="hover:text-primary transition-colors shrink-0">
              {locale === "fr" ? "Produits" : locale === "ar" ? "المنتجات" : "Products"}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 shrink-0 text-muted-foreground/60 rtl:rotate-180" />
            <span className="text-foreground font-semibold">
              {content.title}
            </span>
          </nav>
        </div>
      </div>

      {/* 2. Hero Section: Gallery & Key Overview */}
      <section className="py-8 md:py-14 bg-gradient-to-b from-muted/30 via-background to-background">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Gallery Column (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative aspect-square w-full rounded-3xl overflow-hidden bg-white border border-border shadow-md">
                <Image
                  src={activeImage}
                  alt={content.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover transition-all duration-300"
                />
              </div>

              {/* Thumbnails */}
              {product.gallery && product.gallery.length > 1 && (
                <div className="grid grid-cols-4 gap-3">
                  {product.gallery.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImage(img)}
                      className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                        activeImage === img
                          ? "border-primary shadow-md scale-102"
                          : "border-border/80 hover:border-primary/50 opacity-70 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`${content.title} thumbnail ${idx + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Trust Badges under gallery */}
              <div className="p-4 rounded-2xl bg-white border border-border/80 shadow-2xs space-y-2.5 text-xs text-foreground/80">
                <div className="flex items-center gap-2.5">
                  <BadgeCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>{locale === "fr" ? "Certification :" : locale === "ar" ? "الشهادات:" : "Certifications:"}</strong> {(content.specs?.certifications || product.specs.certifications).split(",")[0]}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-primary shrink-0" />
                  <span><strong>{locale === "fr" ? "Origine :" : locale === "ar" ? "المنشأ:" : "Origin:"}</strong> {content.shortOrigin || content.specs?.origin || product.specs.origin}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                  <span><strong>{locale === "fr" ? "Durabilité :" : locale === "ar" ? "الصلاحية:" : "Shelf Life:"}</strong> {content.specs?.shelfLife || product.specs.shelfLife}</span>
                </div>
              </div>
            </div>

            {/* Product Info Column (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              {/* Category pill */}
              <div className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold bg-primary/10 text-primary border border-primary/20">
                {content.badge}
              </div>

              {/* Main Title & Subtitle */}
              <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                  {content.title}
                </h1>
                {content.subtitle && (
                  <p className="text-sm sm:text-base font-semibold text-primary mt-1.5">
                    {content.subtitle}
                  </p>
                )}
              </div>

              {/* Lead Paragraph */}
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {content.lead}
              </p>

              {/* Specs Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-muted/40 border border-border/70 text-xs">
                <div className="min-w-0">
                  <span className="block text-muted-foreground text-[11px] font-medium mb-0.5">
                    {locale === "fr" ? "Nom INCI" : locale === "ar" ? "الاسم العلمي (INCI)" : "INCI Name"}
                  </span>
                  <span className="font-semibold text-foreground block text-[12px] leading-snug break-words">
                    {product.specs.inci.split("/")[0].trim()}
                  </span>
                </div>
                <div className="min-w-0">
                  <span className="block text-muted-foreground text-[11px] font-medium mb-0.5">
                    {locale === "fr" ? "Méthode d'Extraction" : locale === "ar" ? "طريقة الاستخلاص" : "Extraction"}
                  </span>
                  <span className="font-semibold text-foreground block text-[12px] leading-snug break-words">
                    {content.shortExtraction || product.specs.extraction.split(",")[0]}
                  </span>
                </div>
                <div className="min-w-0">
                  <span className="block text-muted-foreground text-[11px] font-medium mb-0.5">
                    {locale === "fr" ? "Quantité Minimum (MOQ)" : locale === "ar" ? "الحد الأدنى للطلب (MOQ)" : "Minimum Order (MOQ)"}
                  </span>
                  <span className="font-semibold text-emerald-700 block text-[12px] leading-snug break-words" dir="auto">
                    {content.moq || product.moq}
                  </span>
                </div>
              </div>

              {/* Format Selection buttons */}
              <div>
                <label className="block text-xs font-bold text-foreground uppercase tracking-wider mb-2">
                  {locale === "fr" ? "Formats de Conditionnement Disponibles :" : locale === "ar" ? "خيارات وأحجام التعبئة المتاحة:" : "Available Packaging Formats:"}
                </label>
                <div className="flex flex-wrap gap-2">
                  {content.packagingOptions?.map((opt) => (
                    <button
                      key={opt.title}
                      type="button"
                      onClick={() => setSelectedFormat(opt.title)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                        selectedFormat === opt.title
                          ? "bg-primary text-white shadow-sm"
                          : "bg-white border border-border text-foreground/80 hover:border-primary/50"
                      }`}
                    >
                      {opt.title}
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <a href="#rfq-section" className="flex-1">
                  <Button variant="moroccan" size="lg" className="w-full rounded-xl py-3 text-sm sm:text-base font-semibold shadow-md">
                    <FileText className="me-2 h-4 w-4" />
                    {locale === "fr" ? "Demander un Devis & Tarifs" : locale === "ar" ? "طلب عرض أسعار وعينات" : "Request Wholesale Quote"}
                    <ArrowRight className="ms-2 h-4 w-4" />
                  </Button>
                </a>

                <a
                  href={productWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button variant="outline" size="lg" className="w-full rounded-xl py-3 text-sm sm:text-base font-semibold border-emerald-500/40 text-emerald-700 bg-emerald-50/50 hover:bg-emerald-100/50">
                    <WhatsAppIcon className="me-2 h-4 w-4" />
                    {locale === "fr" ? "Devis Express sur WhatsApp" : locale === "ar" ? "مراسلة عبر واتساب" : "Chat on WhatsApp"}
                  </Button>
                </a>
              </div>

              {/* Rapid Export Guarantee */}
              <div className="flex items-center gap-2 text-xs text-muted-foreground pt-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>
                  {locale === "fr"
                    ? "Échantillons gratuits disponibles • Expédition express mondiale (DHL/FedEx) • Documents COA & MSDS inclus"
                    : locale === "ar"
                    ? "عينات مجانية متوفرة • شحن دولي سريع عبر DHL/FedEx • توفير شهادات COA و MSDS مع كل شحنة"
                    : "Free lab sample kits available • Fast worldwide air/sea export • Complete COA & MSDS documentation"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Detailed Overview & Heritage */}
      <section className="py-12 md:py-16 bg-white border-t border-border/80">
        <div className="container-narrow">
          <div className="max-w-4xl mx-auto space-y-6">
            <span className="text-xs font-bold text-primary tracking-widest uppercase block">
              {locale === "fr" ? "Description & Origine" : locale === "ar" ? "نبذة وتفاصيل الإنتاج" : "Detailed Botanical Profile"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              {locale === "fr" ? `À Propos de ${content.title}` : locale === "ar" ? `حول ${content.title}` : `About ${content.title}`}
            </h2>
            <div className="prose prose-slate max-w-none text-muted-foreground leading-relaxed text-sm sm:text-base">
              <p>{content.overview}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Proven Benefits Grid */}
      <section className="py-12 md:py-16 bg-muted/20 border-t border-border/70">
        <div className="container-narrow">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-primary tracking-widest uppercase mb-2 block">
              {locale === "fr" ? "Efficacité & Propriétés" : locale === "ar" ? "الفوائد والخصائص العلاجية" : "Proven Therapeutic Benefits"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              {locale === "fr" ? "Pourquoi Choisir Cet Ingrédient Pur ?" : locale === "ar" ? "لماذا تختار هذا المستحضر الطبيعي؟" : "Key Functional & Cosmetic Benefits"}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.benefits?.map((benefit, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-border shadow-xs hover:shadow-md hover:border-primary/40 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Technical Specifications Table */}
      <section className="py-12 md:py-16 bg-white border-t border-border/80">
        <div className="container-narrow">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-xs font-bold text-primary tracking-widest uppercase mb-2 block">
                {locale === "fr" ? "Fiche Technique & Conformité" : locale === "ar" ? "المواصفات الفنية والمخبرية" : "B2B Technical Specifications"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                {locale === "fr" ? "Spécifications & Contrôle Qualité" : locale === "ar" ? "جدول المعايير والمطابقة المخبرية" : "Laboratory Specifications & Quality Parameters"}
              </h2>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border shadow-xs bg-white">
              <table className="w-full text-start text-xs sm:text-sm">
                <tbody className="divide-y divide-border/80">
                  <tr className="bg-muted/30">
                    <td className="py-3.5 px-4 font-bold text-foreground w-1/3">INCI Name</td>
                    <td className="py-3.5 px-4 text-foreground/90 font-mono text-xs">{product.specs.inci}</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-bold text-foreground">Botanical Name</td>
                    <td className="py-3.5 px-4 text-foreground/90 italic">{product.specs.botanicalName}</td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="py-3.5 px-4 font-bold text-foreground">CAS Number</td>
                    <td className="py-3.5 px-4 text-foreground/90 font-mono text-xs">{product.specs.casNumber}</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-bold text-foreground">{locale === "fr" ? "Méthode d'Extraction" : locale === "ar" ? "طريقة الاستخلاص" : "Extraction Method"}</td>
                    <td className="py-3.5 px-4 text-foreground/90">{content.specs?.extraction || product.specs.extraction}</td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="py-3.5 px-4 font-bold text-foreground">{locale === "fr" ? "Région d'Origine" : locale === "ar" ? "منطقة المنشأ والإنتاج" : "Geographical Origin"}</td>
                    <td className="py-3.5 px-4 text-foreground/90">{content.specs?.origin || product.specs.origin}</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-bold text-foreground">{locale === "fr" ? "Grade & Pureté" : locale === "ar" ? "درجة الجودة والنقاوة" : "Quality Grade"}</td>
                    <td className="py-3.5 px-4 text-foreground/90">{content.specs?.grade || product.specs.grade}</td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="py-3.5 px-4 font-bold text-foreground">{locale === "fr" ? "Certifications & Normes" : locale === "ar" ? "الشهادات والاعتمادات" : "Certifications"}</td>
                    <td className="py-3.5 px-4 text-emerald-700 font-semibold">{content.specs?.certifications || product.specs.certifications}</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-bold text-foreground">{locale === "fr" ? "Durée de Conservation" : locale === "ar" ? "مدة الصلاحية والتخزين" : "Shelf Life"}</td>
                    <td className="py-3.5 px-4 text-foreground/90">{content.specs?.shelfLife || product.specs.shelfLife}</td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="py-3.5 px-4 font-bold text-foreground">{locale === "fr" ? "Aspect & Odeur" : locale === "ar" ? "المظهر والرائحة الطبيعية" : "Appearance & Aroma"}</td>
                    <td className="py-3.5 px-4 text-foreground/90">{content.specs?.appearance || product.specs.appearance}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Packaging & Private Label Options */}
      <section className="py-12 md:py-16 bg-muted/20 border-t border-border/80">
        <div className="container-narrow">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-primary tracking-widest uppercase mb-2 block">
              {locale === "fr" ? "Conditionnements & Marque Blanche" : locale === "ar" ? "التعبئة الصناعية والعلامة الخاصة" : "Wholesale Packaging & OEM"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              {locale === "fr" ? "Solutions de Conditionnement Flexibles" : locale === "ar" ? "خيارات التعبئة بالجملة وخدمة OEM" : "Bulk Formats & Turnkey Private Label"}
            </h2>
          </div>

          <div
            className={`grid grid-cols-1 gap-6 ${
              (content.packagingOptions?.length || 0) === 1
                ? "max-w-md mx-auto"
                : (content.packagingOptions?.length || 0) === 2
                ? "md:grid-cols-2 max-w-3xl mx-auto"
                : "md:grid-cols-3"
            }`}
          >
            {content.packagingOptions?.map((pkg, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white border border-border shadow-xs hover:border-primary/50 transition-all flex flex-col"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Package className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {pkg.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
                  {pkg.description}
                </p>
                {pkg.moq && (
                  <div className="pt-3 border-t border-border text-xs font-bold text-emerald-700" dir="auto">
                    {locale === "fr" ? "Commande Min. : " : locale === "ar" ? "الحد الأدنى للطلب: " : "MOQ: "}
                    {pkg.moq}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. RFQ Quote Form Section */}
      <section id="rfq-section" className="py-14 md:py-20 bg-white border-t border-border/80">
        <div className="container-narrow">
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-primary/5 via-white to-amber-50/20 p-8 sm:p-10 rounded-3xl border border-primary/20 shadow-lg">
            <div className="text-center mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary uppercase tracking-widest mb-3">
                <Building2 className="w-3.5 h-3.5" />
                {locale === "fr" ? "Devis Fabricant Direct" : locale === "ar" ? "طلب عرض أسعار رسمي مباشر" : "Direct Manufacturer RFQ"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                {locale === "fr" ? `Demandez un Devis pour ${content.title}` : locale === "ar" ? `اطلب عرض أسعار لـ ${content.title}` : `Request Wholesale Quote for ${content.title}`}
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground mt-2">
                {locale === "fr"
                  ? "Nos spécialistes export vous répondent avec notre catalogue complet et grille tarifaire sous 12h."
                  : locale === "ar"
                  ? "يقوم فريق التصدير بالرد بعرض الأسعار الكامل والكتالوج خلال أقل من 12 ساعة."
                  : "Direct wholesale pricing, batch COA, and free sample requests processed within 12 hours."}
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="text-lg font-bold text-emerald-900">
                  {locale === "fr" ? "Demande Envoyée avec Succès !" : locale === "ar" ? "تم إرسال طلبكم بنجاح!" : "Quote Request Received!"}
                </h3>
                <p className="text-xs sm:text-sm text-emerald-700">
                  {locale === "fr"
                    ? "Notre équipe export a bien reçu votre demande et vous répondra à l'adresse contact@moroccanskincare.com sous 12h."
                    : locale === "ar"
                    ? "توصل فريقنا بطلبكم وسيتواصل معكم عبر البريد الإلكتروني contact@moroccanskincare.com أو الواتساب خلال أقل من 12 ساعة."
                    : "Our export desk has received your request and will follow up from contact@moroccanskincare.com within 12 hours."}
                </p>
                <div className="pt-2">
                  <a
                    href={productWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700 transition-colors shadow-sm"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    {locale === "fr" ? "Discuter directement sur WhatsApp" : locale === "ar" ? "تأكيد واستفسار مباشر عبر الواتساب" : "Chat Directly on WhatsApp"}
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1.5">
                      {locale === "fr" ? "Nom Complet *" : locale === "ar" ? "الاسم الكامل *" : "Full Name *"}
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1.5">
                      {locale === "fr" ? "E-mail Professionnel *" : locale === "ar" ? "البريد الإلكتروني *" : "Business Email *"}
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="name@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1.5">
                      {locale === "fr" ? "Numéro Téléphone / WhatsApp" : locale === "ar" ? "رقم الهاتف / واتساب" : "Phone / WhatsApp (with country code)"}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1.5">
                      {locale === "fr" ? "Pays de Destination" : locale === "ar" ? "بلد الاستيراد" : "Destination Country"}
                    </label>
                    <input
                      type="text"
                      name="country"
                      placeholder="e.g. United States, France, UAE"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1.5">
                      {locale === "fr" ? "Format Souhaité" : locale === "ar" ? "نوع العبوة المطلوبة" : "Packaging Requirement"}
                    </label>
                    <input
                      type="text"
                      name="format"
                      value={selectedFormat}
                      onChange={(e) => setSelectedFormat(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1.5">
                      {locale === "fr" ? "Volume / Quantité Estimée" : locale === "ar" ? "الكمية التقديرية" : "Estimated Quantity"}
                    </label>
                    <input
                      type="text"
                      name="quantity"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      placeholder="e.g. 25 Liters, 500 bottles"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1.5">
                    {locale === "fr" ? "Message ou Spécifications Particulières" : locale === "ar" ? "ملاحظات أو متطلبات خاصة" : "Project Details / Specific Formulation Needs"}
                  </label>
                  <textarea
                    rows={3}
                    name="notes"
                    placeholder="Tell us about your brand, private label requirements, target timeline, or sample requests..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                  />
                </div>

                <Button variant="moroccan" size="lg" type="submit" disabled={isSubmitting} className="w-full rounded-xl py-3.5 font-bold shadow-md cursor-pointer">
                  <Send className="me-2 h-4 w-4" />
                  {isSubmitting
                    ? (locale === "fr" ? "Envoi en cours..." : locale === "ar" ? "جاري إرسال الطلب..." : "Submitting Request...")
                    : (locale === "fr" ? "Envoyer la Demande de Devis" : locale === "ar" ? "إرسال طلب التسعيرة الآن" : "Submit Wholesale Quote Request")}
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 8. FAQ Section */}
      {content.faq && content.faq.length > 0 && (
        <section className="py-12 md:py-16 bg-muted/20 border-t border-border/80">
          <div className="container-narrow">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-10">
                <span className="text-xs font-bold text-primary tracking-widest uppercase mb-2 block">
                  {locale === "fr" ? "Questions Fréquentes" : locale === "ar" ? "الأسئلة الشائعة" : "B2B Buyer FAQ"}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                  {locale === "fr" ? "Questions Fréquemment Posées" : locale === "ar" ? "إجابات على أكثر الأسئلة شيوعاً" : "Frequently Asked Questions"}
                </h2>
              </div>

              <div className="space-y-3">
                {content.faq.map((item, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl border border-border bg-white overflow-hidden shadow-2xs"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full flex items-center justify-between p-4 sm:p-5 text-start font-semibold text-sm sm:text-base text-foreground cursor-pointer"
                    >
                      <span className="flex items-center gap-3">
                        <HelpCircle className="w-4 h-4 text-primary shrink-0" />
                        {item.q}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-muted-foreground transition-transform duration-200 shrink-0 ${
                          openFaq === idx ? "rotate-180 text-primary" : ""
                        }`}
                      />
                    </button>

                    {openFaq === idx && (
                      <div className="px-5 pb-5 text-xs sm:text-sm text-muted-foreground leading-relaxed border-t border-border/40 pt-3">
                        {item.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 9. Related Products Carousel */}
      {relatedProducts && relatedProducts.length > 0 && (
        <section className="py-14 md:py-20 bg-white border-t border-border/80">
          <div className="container-narrow">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold text-primary tracking-widest uppercase mb-2 block">
                {locale === "fr" ? "Produits Complémentaires" : locale === "ar" ? "منتجات مغربية متكاملة" : "Complementary Moroccan Botanicals"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                {locale === "fr" ? "Explorez Notre Gamme de Soins" : locale === "ar" ? "منتجات أخرى قد تهمكم" : "Frequently Sourced Together"}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((rel) => {
                const relContent = rel[locale] || rel.en;
                return (
                  <Link
                    key={rel.slug}
                    href={`/${locale}/products/${rel.slug}/`}
                    className="group flex flex-col bg-white rounded-3xl border border-border shadow-xs hover:shadow-xl hover:border-primary/50 transition-all overflow-hidden"
                  >
                    <div className="relative aspect-[4/3] bg-muted overflow-hidden">
                      <Image
                        src={rel.image}
                        alt={relContent.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <span className="text-[11px] font-bold text-primary mb-1 line-clamp-1">
                        {relContent.badge.split("•")[0]}
                      </span>
                      <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors line-clamp-1 mb-2">
                        {relContent.title}
                      </h3>
                      <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed flex-1 mb-4">
                        {relContent.lead}
                      </p>
                      <span className="inline-flex items-center text-xs font-bold text-primary mt-auto gap-1 group-hover:translate-x-1 transition-transform">
                        {locale === "fr" ? "Voir la Fiche Produit" : locale === "ar" ? "عرض تفاصيل المنتج" : "View Specifications"}
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

