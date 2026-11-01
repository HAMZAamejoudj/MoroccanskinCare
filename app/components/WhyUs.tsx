"use client";

import { CheckCircle2, ShieldCheck, Truck, Star, Award, BadgeCheck, Languages } from "lucide-react";
import { useDictionary } from "@/providers/LocaleProvider";

const legacyIcons = [ShieldCheck, Truck, Star, Award, BadgeCheck, Languages];

const WhyUs = () => {
  const t = useDictionary();
  const why = t.whyUs as any;

  // Check if we are using the new whyUs schema
  const isNewSchema = why && Array.isArray(why.features);

  return (
    <section id="why-us" className="section-padding bg-[#FAF9F6] relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full translate-x-1/3 translate-y-1/3 -z-0" />

      <div className="container-narrow relative z-10">
        {isNewSchema ? (
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Col: Info */}
            <div className="lg:col-span-6">
              <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-4">
                {why.badge || "Why Us"}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
                {why.title}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                {why.description1}
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                {why.description2}
              </p>
            </div>

            {/* Right Col: Features checklist */}
            <div className="lg:col-span-6 bg-white rounded-3xl p-8 border border-border shadow-sm">
              <p className="text-lg font-bold text-foreground mb-6">
                {why.intro}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {why.features.map((feature: string) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" strokeWidth={2} />
                    </div>
                    <span className="text-foreground/80 font-medium text-sm pt-0.5">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          // Fallback legacy structure
          <>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-4">
                {why.badge || "Why Us"}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {why.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.isArray(why.items) && why.items.map((item: { title: string; description: string }, index: number) => {
                const Icon = legacyIcons[index % legacyIcons.length];
                return (
                  <div
                    key={item.title}
                    className="bg-white rounded-2xl p-8 border border-border/80 shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default WhyUs;
