"use client";

import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { useDictionary } from "@/providers/LocaleProvider";

const FAQSection = () => {
  const t = useDictionary();
  const faq = t.faqSection as any;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!faq || !faq.items) return null;

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding bg-gradient-to-b from-[#FAF9F6] via-white to-[#FAF9F6] border-t border-border/50">
      <div className="container-narrow">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold text-primary bg-primary/10 tracking-widest uppercase mb-4 border border-primary/20">
              {faq.badge || "Clear Answers for B2B Buyers"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-4">
              {faq.title}
            </h2>
            {faq.subtitle && (
              <p className="text-base text-muted-foreground leading-relaxed">
                {faq.subtitle}
              </p>
            )}
          </div>

          {/* Accordion Items */}
          <div className="space-y-4">
            {faq.items.map((item: { q: string; a: string }, index: number) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index} 
                  className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen 
                      ? "border-primary/60 shadow-md ring-1 ring-primary/20" 
                      : "border-border/80 hover:border-primary/40 shadow-2xs"
                  }`}
                >
                  <button
                    className="w-full text-start px-6 py-5 flex items-center justify-between gap-4 font-semibold text-foreground text-base sm:text-lg select-none cursor-pointer"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                  >
                    <span className="leading-snug">{item.q}</span>
                    <span className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 ${
                      isOpen ? "bg-primary text-white" : "bg-primary/10 text-primary"
                    }`}>
                      {isOpen ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </span>
                  </button>

                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-[500px] opacity-100 border-t border-border/50" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="px-6 py-5 text-muted-foreground leading-relaxed text-sm sm:text-base">
                      {item.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
