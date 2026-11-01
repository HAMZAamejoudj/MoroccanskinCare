"use client";

import Image from "next/image";
import { Leaf, Heart, Package, Handshake } from "lucide-react";
import { useDictionary } from "@/providers/LocaleProvider";

const commitmentIcons = [Heart, Package, Handshake];

const SustainabilitySection = () => {
  const t = useDictionary();
  const s = t.sustainability as any;

  return (
    <section id="sustainability" className="section-padding bg-gradient-to-b from-[#FAF9F6] to-white">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-6">
              <Leaf className="h-7 w-7" strokeWidth={1.5} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {s.title}
            </h2>

            {Array.isArray(s.paragraphs) ? (
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed mb-6">
                {s.paragraphs.map((para: string, idx: number) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            ) : (
              <>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  {s.intro}
                </p>

                <ul className="space-y-4 mb-8">
                  {Array.isArray(s.items) && s.items.map((text: string, index: number) => {
                    const Icon = commitmentIcons[index % commitmentIcons.length];
                    return (
                      <li key={text} className="flex items-start gap-4">
                        <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
                        </div>
                        <span className="text-muted-foreground text-lg leading-relaxed pt-1.5">
                          {text}
                        </span>
                      </li>
                    );
                  })}
                </ul>

                <p className="text-lg font-medium text-foreground">
                  {s.closing}
                </p>
              </>
            )}
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/image/dried-rosebuds-petals.webp"
                alt={s.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -z-10 -bottom-4 -start-4 w-full h-full rounded-2xl bg-primary/10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
