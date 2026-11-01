"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Check, ChevronDown } from "lucide-react";
import { locales, localeNames, getLocaleFromPathname, type Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import LocaleFlag from "@/components/LocaleFlag";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function getLocalizedPath(pathname: string, locale: Locale) {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length > 0 && locales.includes(segments[0] as Locale)) {
    segments[0] = locale;
    return `/${segments.join("/")}/`;
  }
  return `/${locale}/`;
}

export default function LanguageSwitcher({ className }: { className?: string }) {
  const pathname = usePathname();
  const currentLocale = getLocaleFromPathname(pathname);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className={cn(
            "h-9 gap-2 rounded-lg border-border bg-background px-2.5 font-medium text-foreground hover:bg-muted/50",
            className
          )}
          aria-label="Select language"
        >
          <LocaleFlag locale={currentLocale} />
          <span className="hidden sm:inline text-xs font-semibold uppercase">
            {currentLocale === "ar" ? "AR" : currentLocale.toUpperCase()}
          </span>
          <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="min-w-44">
        {locales.map((locale) => (
          <DropdownMenuItem key={locale} asChild>
            <Link
              href={getLocalizedPath(pathname, locale)}
              className={cn(
                "flex w-full cursor-pointer items-center gap-3",
                currentLocale === locale && "bg-primary/5"
              )}
              aria-current={currentLocale === locale ? "true" : undefined}
            >
              <LocaleFlag locale={locale} />
              <span className="flex-1 font-medium">{localeNames[locale]}</span>
              {currentLocale === locale && (
                <Check className="h-4 w-4 text-primary shrink-0" />
              )}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
