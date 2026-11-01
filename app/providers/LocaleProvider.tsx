"use client";

import { createContext, useContext } from "react";
import { usePathname } from "next/navigation";
import type { Dictionary } from "@/i18n/get-dictionary";
import { getLocaleFromPathname, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

type LocaleContextValue = {
  locale: Locale;
  dict: Dictionary;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({
  locale,
  dict,
  children,
}: LocaleContextValue & { children: React.ReactNode }) {
  return (
    <LocaleContext.Provider value={{ locale, dict }}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return context;
}

export function useDictionary() {
  return useLocale().dict;
}

export function useOptionalLocale(): LocaleContextValue {
  const context = useContext(LocaleContext);
  const pathname = usePathname();

  if (context) {
    return context;
  }

  const locale = getLocaleFromPathname(pathname ?? "/");
  return { locale, dict: getDictionary(locale) };
}
