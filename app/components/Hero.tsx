"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, FileText, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useDictionary, useLocale } from "@/providers/LocaleProvider";

const heroBanner = "/assets/hero-luxury-banner.webp";

const Hero = () => {
  const t = useDictionary();
  const { locale } = useLocale();
  const hero = t.hero as any;

  return (
    <section
      dir="ltr"
      className="relative flex w-full items-center min-h-screen min-h-[100dvh] pt-24 pb-12 md:pt-28 md:pb-14 lg:pt-32 lg:pb-16 overflow-hidden bg-white bg-no-repeat bg-cover bg-right md:bg-right"
      style={{ backgroundImage: `url('${heroBanner}')` }}
    >
      {/* Left gradient overlay ensuring the text is 100% readable while the right side remains completely crystal clear */}
      <div
        className="absolute inset-0 pointer-events-none bg-gradient-to-r from-white via-white/85 to-transparent max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl"
        aria-hidden="true"
      />

      {/* Mobile-only soft backdrop ensuring readability on small vertical screens */}
      <div
        className="absolute inset-0 pointer-events-none bg-white/40 md:hidden"
        aria-hidden="true"
      />

      <div className="container-narrow relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-8 xl:col-span-7 min-w-0 max-w-full text-start">
            {/* Top Pill / Badge */}
            <div className="inline-flex items-center flex-wrap gap-x-3 gap-y-1 px-3.5 py-1.5 rounded-full bg-white/95 border border-primary/20 shadow-xs backdrop-blur-md mb-3.5 animate-fade-up hover:border-primary/40 transition-colors">
              {typeof hero.badge === "string" && hero.badge.includes("•") ? (
                hero.badge.split("•").map((part: string, idx: number, arr: string[]) => (
                  <span key={idx} className="flex items-center gap-2.5">
                    <span className="text-[11px] sm:text-xs font-semibold text-foreground/90 tracking-wide">{part.trim()}</span>
                    {idx < arr.length - 1 && (
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0" aria-hidden="true" />
                    )}
                  </span>
                ))
              ) : (
                <span className="text-[11px] sm:text-xs font-semibold text-foreground/90 tracking-wide">{hero.badge}</span>
              )}
            </div>

            {/* Keyword Optimized H1 */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3rem] xl:text-[3.35rem] font-bold text-foreground leading-[1.12] mb-3.5 tracking-tight animate-fade-up break-words" style={{ animationDelay: "0.1s" }}>
              {hero.title}{" "}
              <span className="text-primary bg-gradient-to-r from-primary to-amber-700 bg-clip-text text-transparent">
                {hero.titleHighlight}
              </span>
            </h1>

            {/* Subtitle */}
            {hero.subtitle && (
              <p className="text-base sm:text-lg md:text-xl text-foreground/90 font-medium max-w-2xl mb-3 animate-fade-up leading-snug break-words" style={{ animationDelay: "0.15s" }}>
                {hero.subtitle}
              </p>
            )}

            {/* Description */}
            <p className="text-xs sm:text-sm md:text-[15px] text-muted-foreground max-w-2xl mb-5 animate-fade-up leading-relaxed break-words" style={{ animationDelay: "0.2s" }}>
              {hero.description}
            </p>

            {/* Highlights List */}
            {hero.highlights && Array.isArray(hero.highlights) && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6 animate-fade-up max-w-xl" style={{ animationDelay: "0.25s" }}>
                {hero.highlights.map((hl: string) => (
                  <div key={hl} className="flex items-center gap-2 text-xs sm:text-[13px] font-semibold text-foreground/85 bg-white/50 sm:bg-transparent backdrop-blur-xs sm:backdrop-blur-none p-1 sm:p-0 rounded-md">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <Link href={`/${locale}/contact/`} className="w-full sm:w-auto">
                <Button variant="moroccan" size="lg" className="w-full sm:w-auto rounded-xl py-3 px-6 text-sm sm:text-base font-semibold shadow-md hover:shadow-xl transition-all">
                  <FileText className="me-2 h-4 w-4" />
                  {hero.cta || "Request Wholesale Catalog"}
                  <ArrowRight className="ms-2 h-4 w-4" />
                </Button>
              </Link>

              <Link href="#featured-products" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-xl py-3 px-6 text-sm sm:text-base font-semibold border-primary/30 text-foreground bg-white/80 hover:bg-white hover:border-primary transition-all backdrop-blur-sm">
                  <Package className="me-2 h-4 w-4 text-primary" />
                  {hero.ctaSecondary || "Explore Bulk & Private Label"}
                </Button>
              </Link>
            </div>

            {/* Sample guarantee note */}
            {hero.sampleText && (
              <p className="text-[11px] sm:text-xs text-muted-foreground flex items-center gap-2 animate-fade-up" style={{ animationDelay: "0.35s" }}>
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                {hero.sampleText}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
