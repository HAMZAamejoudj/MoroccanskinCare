"use client";

import { BadgeCheck, ClipboardCheck, Microscope, Building2, Plane, HeartHandshake } from "lucide-react";
import { useDictionary } from "@/providers/LocaleProvider";

const certificationItems = [
  {
    key: "ecocert" as const,
    icon: BadgeCheck,
    color: "text-emerald-600",
    bg: "bg-emerald-50/90 border-emerald-200/80 group-hover:bg-emerald-100/80",
    glow: "from-emerald-400 to-emerald-600",
  },
  {
    key: "iso" as const,
    icon: ClipboardCheck,
    color: "text-blue-600",
    bg: "bg-blue-50/90 border-blue-200/80 group-hover:bg-blue-100/80",
    glow: "from-blue-400 to-blue-600",
  },
  {
    key: "gmp" as const,
    icon: Microscope,
    color: "text-amber-600",
    bg: "bg-amber-50/90 border-amber-200/80 group-hover:bg-amber-100/80",
    glow: "from-amber-400 to-amber-600",
  },
  {
    key: "fda" as const,
    icon: Building2,
    color: "text-purple-600",
    bg: "bg-purple-50/90 border-purple-200/80 group-hover:bg-purple-100/80",
    glow: "from-purple-400 to-purple-600",
  },
  {
    key: "logistics" as const,
    icon: Plane,
    color: "text-sky-600",
    bg: "bg-sky-50/90 border-sky-200/80 group-hover:bg-sky-100/80",
    glow: "from-sky-400 to-sky-600",
  },
  {
    key: "crueltyFree" as const,
    icon: HeartHandshake,
    color: "text-rose-600",
    bg: "bg-rose-50/90 border-rose-200/80 group-hover:bg-rose-100/80",
    glow: "from-rose-400 to-rose-600",
  },
];

const TrustBar = () => {
  const t = useDictionary();
  const certs = (t.trustBar as any)?.certifications || {};

  return (
    <section className="py-14 sm:py-16 bg-gradient-to-b from-[#FDFBF7] via-white to-[#FDFBF7] border-y border-border/70">
      <div className="container-narrow">
        <div className="flex flex-col items-center">
          {/* Header pill */}
          <div className="flex items-center gap-3 mb-10">
            <div className="h-px w-10 bg-primary/30" />
            <h2 className="text-[11px] font-bold text-primary uppercase tracking-[0.25em]">
              {t.trustBar?.badge || "Certified Quality & Export Compliance"}
            </h2>
            <div className="h-px w-10 bg-primary/30" />
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 w-full">
            {certificationItems.map((cert) => (
              <article
                key={cert.key}
                className="group relative flex flex-col items-center justify-between text-center p-6 rounded-3xl bg-white border border-border/90 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-xl hover:border-primary/50 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden cursor-default min-h-[170px]"
              >
                {/* Top Subtle Colored Accent Line on Hover */}
                <div
                  className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${cert.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                {/* Big, Clear, Prominent Icon from Library */}
                <div
                  className={`w-16 h-16 rounded-2xl border ${cert.bg} ${cert.color} flex items-center justify-center mb-4 shadow-xs group-hover:scale-110 group-hover:shadow-md transition-all duration-300 shrink-0`}
                >
                  <cert.icon className="w-8 h-8" strokeWidth={2.2} />
                </div>

                {/* Text Label */}
                <p className="text-xs sm:text-sm font-bold text-foreground group-hover:text-primary transition-colors leading-snug tracking-tight">
                  {certs[cert.key] || cert.key}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
