"use client";

import Link from "next/link";
import { ArrowRight, Package, Droplets, Leaf, Globe, Tag, Factory } from "lucide-react";
import { useLocale } from "@/providers/LocaleProvider";

const InternalLinks = () => {
  const { locale } = useLocale();
  const p = (path: string) => `/${locale}${path}`;

  const internalPages = [
    {
      title: "Argan Oil Wholesale",
      href: p("/products/"),
      description: "Bulk argan oil supplier for cosmetics and skincare manufacturers",
      icon: Droplets,
    },
    {
      title: "Private Label Skincare",
      href: p("/private-label/"),
      description: "Custom formulation and white label Moroccan beauty products",
      icon: Tag,
    },
    {
      title: "Organic Cosmetic Ingredients",
      href: p("/products/"),
      description: "Certified organic Moroccan ingredients for natural skincare",
      icon: Leaf,
    },
    {
      title: "Bulk Ghassoul Clay",
      href: p("/products/"),
      description: "Wholesale Moroccan clay for masks and cleansers",
      icon: Package,
    },
    {
      title: "Export Services",
      href: p("/contact/"),
      description: "International shipping and logistics for B2B cosmetics",
      icon: Globe,
    },
    {
      title: "Manufacturing Services",
      href: p("/private-label/"),
      description: "GMP-certified production facilities in Morocco",
      icon: Factory,
    },
  ];

  const relatedTopics = [
    { text: "Moroccan rose water wholesale", href: p("/products/") },
    { text: "Prickly pear seed oil bulk", href: p("/products/") },
    { text: "Natural cosmetic manufacturer Morocco", href: p("/about/") },
    { text: "Halal certified skincare products", href: p("/#why-us") },
    { text: "Sustainable beauty ingredients", href: p("/#why-us") },
    { text: "B2B cosmetics supplier", href: p("/contact/") },
    { text: "Private label cosmetics Morocco", href: p("/private-label/") },
    { text: "Wholesale natural skincare", href: p("/products/") },
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-white to-muted/30">
      <div className="container-narrow">
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-4">
              Explore Our Solutions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Moroccan Skincare Products & Services
            </h2>
            <p className="text-muted-foreground text-lg">
              Buy authentic Moroccan cosmetic ingredients in bulk for export. Discover our comprehensive range of natural skincare solutions and manufacturing services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {internalPages.map((page) => (
              <Link
                key={page.title}
                href={page.href}
                className="group relative bg-card rounded-xl p-6 border border-border hover:border-primary transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <page.icon className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <div className="flex-1">
                    <div className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {page.title}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{page.description}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="bg-white/50 backdrop-blur-sm border border-border rounded-2xl p-8">
          <strong className="block text-xl font-semibold text-foreground mb-6 text-center">
            Related Moroccan Skincare Topics
          </strong>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {relatedTopics.map((topic) => (
              <Link
                key={topic.text}
                href={topic.href}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background border border-border text-sm font-medium text-foreground hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-200"
              >
                {topic.text}
                <ArrowRight className="h-3 w-3" />
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-12 prose prose-sm max-w-none">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <strong className="block text-lg font-semibold text-foreground mb-3">
                Premium Moroccan Skincare Ingredients
              </strong>
              <p className="text-muted-foreground leading-relaxed mb-4">
                As a leading{" "}
                <Link href={p("/moroccan-organic-skincare/")} className="text-primary hover:underline">
                  Moroccan skin care manufacturer
                </Link>
                , we specialize in sourcing and supplying authentic ingredients. Buy{" "}
                <Link href={p("/products/")} className="text-primary hover:underline">
                  argan oil
                </Link>
                ,{" "}
                <Link href={p("/products/")} className="text-primary hover:underline">
                  ghassoul clay
                </Link>
                , and{" "}
                <Link href={p("/products/")} className="text-primary hover:underline">
                  rose water
                </Link>{" "}
                in bulk for export to global B2B partners.
              </p>
            </div>
            <div>
              <strong className="block text-lg font-semibold text-foreground mb-3">
                Wholesale & Private Label Solutions
              </strong>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Why buy Moroccan skin care in bulk for export from us? Our{" "}
                <Link href={p("/private-label/")} className="text-primary hover:underline">
                  private label skincare services
                </Link>{" "}
                and{" "}
                <Link href={p("/products/")} className="text-primary hover:underline">
                  bulk wholesale supply
                </Link>{" "}
                enable brands worldwide to launch premium{" "}
                <Link href={p("/moroccan-organic-skincare/#why-us")} className="text-primary hover:underline">
                  natural cosmetic products
                </Link>{" "}
                with authentic Moroccan heritage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternalLinks;
