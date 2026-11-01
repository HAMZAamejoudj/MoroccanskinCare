"use client";

import Link from "next/link";
import { useDictionary } from "@/providers/LocaleProvider";
import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";
import { phoneDisplay, phoneTel, whatsappUrl } from "@/lib/contact";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  const t = useDictionary();
  const cta = t.ctaSection as any;

  if (!cta) return null;

  return (
    <section id="contact-form" className="section-padding bg-gradient-to-b from-white via-[#FAF9F6] to-white border-t border-border/60">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: CTA Info */}
          <div className="lg:col-span-5">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold text-primary bg-primary/10 tracking-widest uppercase mb-4">
              {cta.badge || "Get Started"}
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-foreground mb-5 leading-tight tracking-tight">
              {cta.title}
            </h2>

            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-8">
              {cta.description}
            </p>

            {/* WhatsApp Quick CTA */}
            <div className="mb-8">
              <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="moroccan" size="lg" className="w-full sm:w-auto rounded-xl py-3 px-6 text-sm sm:text-base font-semibold shadow-md">
                  <WhatsAppIcon className="h-5 w-5 mr-2" />
                  {cta.whatsappText || "Chat Instantly on WhatsApp"}
                </Button>
              </Link>
            </div>

            <div className="space-y-5 py-6 border-y border-border/60 mb-6">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <div>
                  <strong className="block text-xs font-bold uppercase tracking-wider text-primary mb-0.5">
                    Call or WhatsApp
                  </strong>
                  <a href={phoneTel} dir="ltr" className="text-foreground font-semibold hover:text-primary transition-colors text-sm sm:text-base inline-block">
                    {phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <div>
                  <strong className="block text-xs font-bold uppercase tracking-wider text-primary mb-0.5">
                    Wholesale Email Inquiries
                  </strong>
                  <a href="mailto:contact@moroccanskincare.com" className="text-foreground font-semibold hover:text-primary transition-colors text-sm sm:text-base">
                    contact@moroccanskincare.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <div>
                  <strong className="block text-xs font-bold uppercase tracking-wider text-primary mb-0.5">
                    Manufacturing & Export Facility
                  </strong>
                  <span className="text-muted-foreground text-xs sm:text-sm leading-relaxed block">
                    Lot 377 N° 3/6 Sidi Ghanem, Zone Industrielle, Marrakesh, Morocco
                  </span>
                </div>
              </div>
            </div>

            {/* Guarantee badge */}
            {cta.guarantee && (
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/60 p-3 rounded-xl">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
                <span>{cta.guarantee}</span>
              </div>
            )}
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-border/90 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full -mr-16 -mt-16 pointer-events-none" />
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
