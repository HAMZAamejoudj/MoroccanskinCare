"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, PackageCheck, Layers, Shield } from "lucide-react";
import { useDictionary, useLocale } from "@/providers/LocaleProvider";

type ProductItem = {
  slug?: string;
  category?: string;
  title: string;
  subtitle?: string;
  description: string;
  bestFor?: string;
  formats?: string;
  moq?: string;
  cta: string;
  image: string;
  imageAlt: string;
  tag?: string;
};

const FeaturedProducts = () => {
  const t = useDictionary();
  const { locale } = useLocale();
  const fp = t.featuredProducts as any;
  const [activeCategory, setActiveCategory] = useState<string>("all");

  if (!fp || !fp.items) return null;

  const categories = fp.categories || {
    all: "All Products",
    oils: "Pure Botanical Oils",
    hammam: "Hammam & Cleansers",
    powders: "Botanical Powders & Clays",
  };

  const filteredItems = (fp.items as ProductItem[]).filter((item) => {
    if (activeCategory === "all") return true;
    return item.category === activeCategory;
  });

  return (
    <section id="featured-products" className="section-padding bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="container-narrow">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold text-primary bg-primary/10 tracking-widest uppercase mb-4 border border-primary/20">
            {fp.badge || "Our Core Wholesale Catalog"}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-4">
            {fp.title}
          </h2>
          {fp.subtitle && (
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              {fp.subtitle}
            </p>
          )}
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {Object.entries(categories).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === key
                  ? "bg-primary text-primary-foreground shadow-md scale-105"
                  : "bg-white border border-border/80 text-foreground/80 hover:border-primary/40 hover:bg-primary/5"
              }`}
            >
              {label as string}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {filteredItems.map((product, index) => {
            const productUrl = product.slug ? `/${locale}/products/${product.slug}/` : `/${locale}/contact/`;
            return (
              <article
                key={product.title}
                className="group flex flex-col h-full bg-white rounded-3xl border border-border/90 shadow-xs hover:shadow-xl hover:border-primary/50 transition-all duration-300 overflow-hidden"
              >
                {/* Image Container */}
                <Link href={productUrl} className="block relative aspect-[4/3] overflow-hidden bg-muted">
                  <Image
                    src={product.image}
                    alt={product.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                </Link>

                {/* Card Body */}
                <div className="flex flex-col flex-1 p-5 sm:p-6">
                  {/* H3 with exact target SEO keyword */}
                  <h3 className="text-base sm:text-lg font-bold text-foreground mb-1.5 leading-snug group-hover:text-primary transition-colors duration-200">
                    <Link href={productUrl}>
                      {product.title}
                    </Link>
                  </h3>

                  {product.subtitle && (
                    <p className="text-xs font-medium text-primary mb-3">
                      {product.subtitle}
                    </p>
                  )}

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                    {product.description}
                  </p>

                  {/* B2B Specs List */}
                  <div className="space-y-1.5 py-3 border-y border-border/60 mb-5 text-[11px] text-foreground/80">
                    {product.bestFor && (
                      <div className="flex items-start gap-1.5">
                        <Shield className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                        <span className="line-clamp-1"><span className="font-semibold text-foreground">{fp.labels?.bestFor || "Target:"}</span> {product.bestFor}</span>
                      </div>
                    )}
                    {product.formats && (
                      <div className="flex items-start gap-1.5">
                        <Layers className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                        <span className="line-clamp-1"><span className="font-semibold text-foreground">{fp.labels?.formats || "Formats:"}</span> {product.formats}</span>
                      </div>
                    )}
                    {product.moq && (
                      <div className="flex items-start gap-1.5">
                        <PackageCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-1 text-emerald-700 font-semibold"><span className="font-semibold text-emerald-800">{fp.labels?.moq || "MOQ:"}</span> {product.moq}</span>
                      </div>
                    )}
                  </div>

                  {/* CTA Button */}
                  <Link
                    href={productUrl}
                    className="inline-flex items-center justify-center gap-2 w-full text-xs sm:text-sm font-semibold text-primary bg-primary/10 hover:bg-primary hover:text-white px-4 py-2.5 rounded-xl transition-all duration-200 mt-auto group/btn shadow-2xs"
                  >
                    <span>{product.cta}</span>
                    <ArrowRight className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {/* View All Footer CTA */}
        <div className="text-center mt-12">
          <Link
            href={`/${locale}/products/`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-primary/30 text-primary font-semibold text-sm hover:bg-primary hover:text-white transition-all shadow-xs"
          >
            {fp.viewAll || "View Complete Wholesale Catalog"}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
