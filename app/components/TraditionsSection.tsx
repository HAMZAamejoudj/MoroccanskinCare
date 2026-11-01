"use client";

import Image from "next/image";
import { useDictionary } from "@/providers/LocaleProvider";

const TraditionsSection = () => {
  const t = useDictionary();
  const trads = t.traditions as any;

  return (
    <section id="traditions" className="section-padding bg-white">
      <div className="container-narrow">
        <div className="text-center max-w-5xl mx-auto mb-10 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            {trads.title}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="relative lg:sticky lg:top-28">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/image/cosmetic-argan-oil-handmade.webp"
                alt={trads.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -z-10 -bottom-4 -end-4 w-full h-full rounded-2xl bg-primary/10" />
          </div>

          <div>
            <div className="space-y-6 text-muted-foreground text-base md:text-lg leading-relaxed">
              {Array.isArray(trads.paragraphs) ? (
                trads.paragraphs.map((para: string, idx: number) => (
                  <p key={idx}>{para}</p>
                ))
              ) : (
                <>
                  <p>{trads.paragraph1}</p>
                  <p>{trads.paragraph2}</p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TraditionsSection;
