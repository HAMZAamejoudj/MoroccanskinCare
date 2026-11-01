"use client";

import { useEffect } from "react";
import type { Locale } from "@/i18n/config";

export default function LocaleShell({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
  }, [locale]);

  return (
    <div
      dir={locale === "ar" ? "rtl" : "ltr"}
      className={locale === "ar" ? "[font-family:var(--font-arabic),var(--font-inter),sans-serif]" : undefined}
    >
      {children}
    </div>
  );
}
