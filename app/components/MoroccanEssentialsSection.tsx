"use client";

import { useDictionary } from "@/providers/LocaleProvider";
import { Leaf, Droplets, Flower2, ShieldCheck, CheckCircle2 } from "lucide-react";

const icons = [Leaf, Droplets, Flower2, ShieldCheck];

export default function MoroccanEssentialsSection() {
  const t = useDictionary();
  const me = (t as any).moroccanEssentials;

  if (!me || !me.articles) return null;

  return (
    <section id="essentials" className="section-padding bg-gradient-to-b from-[#FAF9F6] via-white to-[#FAF9F6] border-y border-border/50">
      <div className="container-narrow">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold text-primary bg-primary/10 tracking-widest uppercase mb-4 border border-primary/20">
            {me.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-4">
            {me.title}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            {me.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {me.articles.map((article: { title: string; description: string }, index: number) => {
            const Icon = icons[index % icons.length];
            return (
              <article
                key={article.title}
                className="group relative bg-white rounded-3xl p-8 lg:p-10 border border-border/80 shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300 flex flex-col"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-12 -mt-12 group-hover:scale-125 transition-transform duration-500 pointer-events-none" />
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-sm">
                    <Icon className="w-7 h-7" strokeWidth={1.75} />
                  </div>
                  <span className="text-xs font-bold text-primary/70 uppercase tracking-widest">
                    Pillar 0{index + 1}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 leading-snug group-hover:text-primary transition-colors duration-200">
                  {article.title}
                </h3>

                <p className="text-muted-foreground text-base leading-relaxed flex-1">
                  {article.description}
                </p>

                <div className="mt-6 pt-6 border-t border-border/40 flex items-center gap-2 text-xs font-semibold text-foreground/80">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>Lab Tested • Export Grade • Direct Cooperative Sourcing</span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

