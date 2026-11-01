"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useOptionalLocale } from "@/providers/LocaleProvider";
import { whatsappUrl } from "@/lib/contact";
const logoHorizontal = "/assets/logo-horizontal.webp";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { locale, dict } = useOptionalLocale();
  const prefix = `/${locale}`;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: dict.header.nav.home, href: `${prefix}/` },
    { name: dict.header.nav.products, href: `${prefix}/products/` },
    { name: dict.header.nav.privateLabel, href: `${prefix}/private-label/` },
    { name: dict.header.nav.about, href: `${prefix}/about/` },
    { name: dict.header.nav.blog, href: `${prefix}/blog/` },
    { name: dict.header.nav.contact, href: `${prefix}/contact/` },
  ];

  return (
    <header
      dir="ltr"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMenuOpen
        ? "bg-white/95 backdrop-blur-md border-b border-border/70 shadow-xs"
        : "bg-transparent border-b border-transparent"
        }`}
    >
      <div className="container-narrow">
        <div className="flex items-center justify-between h-16 md:h-20 gap-4">
          {/* Left: Brand Logo */}
          <div className="flex items-center flex-shrink-0 min-w-0 lg:min-w-[190px]">
            <Link href={`/${locale}/`} className="flex-shrink-0">
              <Image
                src={logoHorizontal}
                alt="Moroccan Skin Care - Premium natural skincare manufacturer and wholesale supplier"
                width={180}
                height={48}
                className="h-10 md:h-12 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Center: Centered Navigation Links */}
          <nav className="hidden lg:flex items-center justify-center gap-7 xl:gap-9 flex-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground/90 hover:text-primary transition-colors duration-200 font-bold text-[15px] tracking-wide whitespace-nowrap"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right: Actions */}
          <div className="hidden lg:flex items-center justify-end gap-3.5 flex-shrink-0 lg:min-w-[190px]">
            <LanguageSwitcher />
            <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="moroccan" size="default" className="rounded-xl shadow-xs font-semibold px-4">
                <WhatsAppIcon className="h-4 w-4" />
                {dict.header.whatsapp}
              </Button>
            </Link>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitcher />
            <button
              className="p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-foreground" />
              ) : (
                <Menu className="h-6 w-6 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-up bg-white/95 backdrop-blur-xl px-4 rounded-b-2xl shadow-lg">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-bold py-2 text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="moroccan" size="lg" className="mt-2 rounded-xl w-full font-semibold">
                  <WhatsAppIcon className="h-5 w-5" />
                  {dict.header.whatsapp}
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
