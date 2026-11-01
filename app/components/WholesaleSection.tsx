"use client";

import { CheckCircle2, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useDictionary, useLocale } from "@/providers/LocaleProvider";
import { whatsappUrl } from "@/lib/contact";
import WhatsAppIcon from "@/components/WhatsAppIcon";

const WholesaleSection = () => {
  const t = useDictionary();
  const { locale } = useLocale();
  const w = t.wholesaleSection;

  if (!w) return null;

  return (
    <section id="wholesale" className="section-padding bg-gradient-to-b from-white to-[#FAF9F6]">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-4">
              B2B Partnerships
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              {w.title}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              {w.description}
            </p>
            <p className="text-foreground font-medium mb-8">
              {w.closing}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="moroccan" size="lg" className="rounded-lg">
                  <WhatsAppIcon className="h-5 w-5 mr-2" />
                  {(w as any).whatsappCta || t.header.whatsapp || "Inquire About Wholesale on WhatsApp"}
                </Button>
              </Link>
              <Link href={`/${locale}/contact/`}>
                <Button variant="outline" size="lg" className="rounded-lg border-primary text-primary hover:bg-primary/5">
                  Request Catalog
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-border/80 shadow-md p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16" />
            <p className="text-lg font-bold text-foreground mb-6 relative z-10">
              {w.subtitle}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {w.items.map((item: string) => (
                <div 
                  key={item} 
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#FAF9F6] transition-colors duration-200"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" strokeWidth={2} />
                  <span className="text-foreground/90 font-medium text-sm">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WholesaleSection;
