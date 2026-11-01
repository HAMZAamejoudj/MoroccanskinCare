"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useDictionary, useLocale } from "@/providers/LocaleProvider";
import type { Dictionary } from "@/i18n/get-dictionary";

type CategoryKey = keyof Dictionary["productsPage"]["categories"];

const categoryKeys: CategoryKey[] = [
  "all",
  "oils",
  "soapsCleansers",
  "watersToners",
  "claysMasks",
  "powders",
];

const ProductCatalog = () => {
  const t = useDictionary().productsPage;
  const { locale } = useLocale();
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("all");

  const filteredProducts =
    activeCategory === "all"
      ? t.items
      : t.items.filter((product) => product.category === activeCategory);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categoryKeys.map((categoryKey) => (
          <button
            key={categoryKey}
            type="button"
            onClick={() => setActiveCategory(categoryKey)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
              activeCategory === categoryKey
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-background text-muted-foreground border-border hover:border-primary/50 hover:text-primary"
            }`}
          >
            {t.categories[categoryKey]}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {filteredProducts.map((product, index) => {
          const slug = (product as any).slug;
          const targetUrl = slug ? `/${locale}/products/${slug}/` : product.href;
          return (
            <article
              key={product.title}
              className="group flex flex-col h-full bg-card rounded-xl border border-border overflow-hidden hover:border-primary/50 hover:shadow-lg transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.03}s` }}
            >
              <Link href={targetUrl} className="block relative aspect-[4/3] overflow-hidden bg-muted">
                <Image
                  src={product.image}
                  alt={product.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-background/90 text-xs font-medium text-foreground border border-border">
                  {t.categories[product.category as CategoryKey]}
                </span>
              </Link>

              <div className="flex flex-col flex-1 p-6 lg:p-8">
                <h2 className="text-lg lg:text-xl font-semibold text-foreground mb-3 leading-snug group-hover:text-primary transition-colors">
                  <Link href={targetUrl}>{product.title}</Link>
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                  {product.description}
                </p>
                <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                  <li>
                    <span className="font-semibold text-foreground">{t.labels.benefits}</span>{" "}
                    {product.benefits}
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">{t.labels.bestFor}</span>{" "}
                    {product.bestFor}
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">{t.labels.howToUse}</span>{" "}
                    {product.howToUse}
                  </li>
                </ul>
                <Link
                  href={targetUrl}
                  className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:gap-3 transition-all duration-200 mt-auto"
                >
                  {product.cta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
};

export default ProductCatalog;
