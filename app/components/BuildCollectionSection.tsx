"use client";

import { Factory, Award } from "lucide-react";
import { useDictionary } from "@/providers/LocaleProvider";

const BuildCollectionSection = () => {
  const t = useDictionary();
  const bc = t.buildCollection;

  if (!bc) return null;

  return (
    <section className="section-padding bg-gradient-to-b from-[#FAF9F6] to-white">
      <div className="container-narrow">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Card 1: Build Collection */}
          <div className="bg-white rounded-3xl p-8 lg:p-10 border border-border/80 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow duration-300">
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-8 -mt-8" />
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-6">
              <Factory className="h-6 w-6" strokeWidth={2} />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              {bc.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed text-base">
              {bc.description}
            </p>
          </div>

          {/* Card 2: Conclusion */}
          <div className="bg-white rounded-3xl p-8 lg:p-10 border border-border/80 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow duration-300">
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-8 -mt-8" />
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-6">
              <Award className="h-6 w-6" strokeWidth={2} />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              {bc.conclusionTitle}
            </h3>
            <p className="text-muted-foreground leading-relaxed text-base">
              {bc.conclusionDescription}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildCollectionSection;
