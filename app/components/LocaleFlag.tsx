import { GB, FR, MA } from "country-flag-icons/react/3x2";
import type { Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

const flagComponents = {
  en: GB,
  fr: FR,
  ar: MA,
} as const;

type LocaleFlagProps = {
  locale: Locale;
  className?: string;
};

export default function LocaleFlag({ locale, className }: LocaleFlagProps) {
  const Flag = flagComponents[locale];
  return (
    <Flag
      className={cn("h-4 w-6 shrink-0 rounded-sm object-cover shadow-sm", className)}
      aria-hidden="true"
    />
  );
}
