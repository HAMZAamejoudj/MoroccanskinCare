"use client";

import { Mail, Phone, MapPin, Facebook, Instagram, Share2 } from "lucide-react";
import { SITE_URL } from "@/lib/site";
import Image from "next/image";
import Link from "next/link";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { useOptionalLocale } from "@/providers/LocaleProvider";
import { phoneDisplay, phoneTel, whatsappUrl } from "@/lib/contact";

const logoVertical = "/assets/logo-vertical.webp";
const shippingPartnersImage = "/image/shipping-logistics-partners.webp";
const paymentMethodsImage = "/image/payment-methods.webp";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1 .05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
  </svg>
);

const Footer = () => {
  const { locale, dict } = useOptionalLocale();
  const prefix = `/${locale}`;
  const f = dict.footer;
  const sharePageUrl = encodeURIComponent(`${SITE_URL}${prefix}/`);

  return (
    <footer id="contact" dir="ltr" className="relative bg-foreground text-background section-padding overflow-hidden text-left">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />

      <div className="container-narrow relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-6">
          <div className="lg:col-span-1">
            <Link href={`${prefix}/`}>
              <Image
                src={logoVertical}
                alt={f.logoAlt}
                width={120}
                height={96}
                className="h-24 w-auto mb-6 brightness-0 invert cursor-pointer hover:opacity-80 transition-opacity"
              />
            </Link>
            <p className="text-background/70 leading-relaxed text-sm mb-6">{f.about}</p>
          </div>

          <div>
            <strong className="block text-sm font-bold uppercase tracking-widest mb-6 text-primary">
              {f.quickLinks}
            </strong>
            <ul className="space-y-3">
              <li>
                <Link
                  href={`${prefix}/`}
                  className="text-background/70 hover:text-background transition-colors duration-200 text-sm"
                >
                  {f.links.home}
                </Link>
              </li>
              <li>
                <Link
                  href={`${prefix}/private-label/`}
                  className="text-background/70 hover:text-background transition-colors duration-200 text-sm"
                >
                  {f.links.privateLabel}
                </Link>
              </li>
              <li>
                <Link
                  href={`${prefix}/about/`}
                  className="text-background/70 hover:text-background transition-colors duration-200 text-sm"
                >
                  {f.links.about}
                </Link>
              </li>
              <li>
                <Link
                  href={`${prefix}/blog/`}
                  className="text-background/70 hover:text-background transition-colors duration-200 text-sm"
                >
                  {f.links.blog}
                </Link>
              </li>
              <li>
                <Link
                  href={`${prefix}/products/`}
                  className="text-background/70 hover:text-background transition-colors duration-200 text-sm"
                >
                  {f.links.products}
                </Link>
              </li>
              <li>
                <Link
                  href={`${prefix}/#why-us`}
                  className="text-background/70 hover:text-background transition-colors duration-200 text-sm"
                >
                  {f.links.whyUs}
                </Link>
              </li>
              <li>
                <Link
                  href={`${prefix}/contact/`}
                  className="text-background/70 hover:text-background transition-colors duration-200 text-sm"
                >
                  {f.links.contact}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <strong className="block text-sm font-bold uppercase tracking-widest mb-6 text-primary">
              {f.shippingPartners}
            </strong>
            <div className="rounded-lg border border-white/10 bg-black/40 p-3">
              <Image
                src={shippingPartnersImage}
                alt="FedEx, UPS, DHL, EMS, Aramex, TNT, Chronopost - International shipping partners"
                width={280}
                height={200}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          <div>
            <strong className="block text-sm font-bold uppercase tracking-widest mb-6 text-primary">
              {f.paymentMethods}
            </strong>
            <div className="rounded-lg border border-white/10 bg-black/40 p-3">
              <Image
                src={paymentMethodsImage}
                alt="Visa, Mastercard, American Express, Western Union, MoneyGram, Attijariwafa bank, Wise - Accepted payment methods"
                width={280}
                height={200}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          <div>
            <strong className="block text-sm font-bold uppercase tracking-widest mb-6 text-primary">
              {f.contactUs}
            </strong>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-background/70 text-sm leading-snug">
                  Lot 377 N° 3/6 Sidi Ghanem
                  <br />
                  Zone industriel, 40110
                  <br />
                  Marrakesh, Morocco
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a
                  href={phoneTel}
                  dir="ltr"
                  className="text-background/70 hover:text-background transition-colors duration-200 text-sm"
                >
                  {phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <WhatsAppIcon className="h-5 w-5 text-primary flex-shrink-0" />
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/70 hover:text-background transition-colors duration-200 text-sm"
                >
                  {dict.header.whatsapp}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:contact@moroccanskincare.com"
                  className="text-background/70 hover:text-background transition-colors duration-200 text-sm"
                >
                  contact@moroccanskincare.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-background/50">
            <p>{f.copyright}</p>
            <div className="flex gap-4">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${sharePageUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors duration-200"
                aria-label="Share on Facebook"
              >
                <Share2 className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/moroccanorganica/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/moroccanorganic/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.tiktok.com/@moroccanorganica"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors duration-200"
                aria-label="TikTok"
              >
                <TikTokIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
