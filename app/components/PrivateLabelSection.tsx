"use client";

import { Leaf, ArrowRight, Tag } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useDictionary, useLocale } from "@/providers/LocaleProvider";

const PrivateLabelSection = () => {
  const t = useDictionary();
  const { locale } = useLocale();
  const pl = t.privateLabelSection;

  if (!pl) return null;

  // Icons corresponding to each of the 5 steps
  const stepNumbers = ["01", "02", "03", "04", "05"];

  return (
    <section id="private-label" className="section-padding bg-[#FAF9F6]">
      <div className="container-narrow">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-6">
            <Tag className="h-7 w-7" strokeWidth={1.5} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            {pl.title}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {pl.description}
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 border border-border shadow-sm">
          <p className="text-xl font-bold text-foreground mb-8 text-center md:text-left">
            {pl.routineTitle}
          </p>

          {/* Stepper timeline */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4 relative">
            {/* Horizontal line for desktop */}
            <div className="hidden md:block absolute top-[28px] left-[50px] right-[50px] h-[2px] bg-primary/20 -z-0" />

            {pl.routineSteps.map((step: string, index: number) => (
              <div 
                key={step} 
                className="flex flex-col items-center text-center relative z-10 group"
              >
                {/* Step circle */}
                <div className="w-14 h-14 rounded-full bg-white border-2 border-primary text-primary font-bold text-lg flex items-center justify-center shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-300 transform group-hover:scale-110 mb-4">
                  {stepNumbers[index]}
                </div>
                {/* Step text */}
                <span className="text-sm font-semibold text-foreground/90 leading-snug px-2">
                  {step}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-muted-foreground text-base max-w-xl text-center md:text-left">
              {pl.routineClosing}
            </p>
            <Link href={`/${locale}/contact/`}>
              <Button variant="moroccan" size="lg" className="rounded-lg group">
                Start Your Brand
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivateLabelSection;
