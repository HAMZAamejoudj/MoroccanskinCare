"use client";

import { Quote } from "lucide-react";
import { useDictionary } from "@/providers/LocaleProvider";

const TestimonialsSection = () => {
  const t = useDictionary();

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container-narrow">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t.testimonials.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.testimonials.items.map((testimonial, index) => (
            <blockquote
              key={testimonial.author}
              className="relative bg-muted/30 rounded-xl border border-border p-8 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="h-8 w-8 text-primary/30 mb-4" />
              <p className="text-foreground leading-relaxed mb-6 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <footer className="text-sm font-semibold text-muted-foreground">
                — {testimonial.author}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
