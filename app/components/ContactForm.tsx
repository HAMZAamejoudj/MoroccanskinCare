"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";
import { useDictionary } from "@/providers/LocaleProvider";

const subjectEmails: Record<string, string> = {
  general: "contact@moroccanskincare.com",
  product: "contact@moroccanskincare.com",
  wholesale: "contact@moroccanskincare.com",
  privateLabel: "contact@moroccanskincare.com",
};

const inputClassName =
  "w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors";

const ContactForm = () => {
  const t = useDictionary().contactPage.form;
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    const form = event.currentTarget;

    const formData = new FormData(form);
    const name = (formData.get("name") as string) || "";
    const email = (formData.get("email") as string) || "";
    const phone = (formData.get("phone") as string) || "";
    const subjectValue = (formData.get("subject") as string) || "";
    const message = (formData.get("message") as string) || "";

    const subjectLabel =
      t.subjects.find((subject) => subject.value === subjectValue)?.label ?? subjectValue;

    try {
      const res = await fetch("/send-quote.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "Contact Message",
          product: subjectLabel,
          name,
          email,
          phone,
          notes: message,
        }),
      });

      if (!res.ok) throw new Error("PHP endpoint failed");
    } catch {
      // Fallback to mailto if PHP backend not accessible
      const body = [
        `Name: ${name}`,
        `Email: ${email}`,
        phone ? `Phone: ${phone}` : null,
        `Subject: ${subjectLabel}`,
        "",
        message,
      ]
        .filter(Boolean)
        .join("\n");

      const mailtoLink = `mailto:contact@moroccanskincare.com?subject=${encodeURIComponent(
        `[Contact Form] ${subjectLabel}`
      )}&body=${encodeURIComponent(body)}`;

      window.location.href = mailtoLink;
    }

    toast.success(t.toastSuccess, {
      description: t.toastDescription,
    });

    form.reset();
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
            {t.name}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className={inputClassName}
            placeholder={t.placeholders.name}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
            {t.email}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={inputClassName}
            placeholder={t.placeholders.email}
          />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
          {t.phone}{" "}
          <span className="text-muted-foreground font-normal">{t.phoneOptional}</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className={inputClassName}
          placeholder={t.placeholders.phone}
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
          {t.subject}
        </label>
        <select id="subject" name="subject" required className={inputClassName}>
          {t.subjects.map((subject) => (
            <option key={subject.value} value={subject.value}>
              {subject.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
          {t.message}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`${inputClassName} resize-y min-h-[120px]`}
          placeholder={t.placeholders.message}
        />
      </div>

      <Button
        type="submit"
        variant="moroccan"
        size="lg"
        className="w-full sm:w-auto rounded-lg"
        disabled={isSubmitting}
      >
        {t.submit}
      </Button>
    </form>
  );
};

export default ContactForm;
