import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import FeaturedProducts from "@/components/FeaturedProducts";
import ServicesGrid from "@/components/ServicesGrid";
import MoroccanEssentialsSection from "@/components/MoroccanEssentialsSection";
import WholesaleSection from "@/components/WholesaleSection";
import TraditionsSection from "@/components/TraditionsSection";
import PrivateLabelSection from "@/components/PrivateLabelSection";
import WhyUs from "@/components/WhyUs";
import TestimonialsSection from "@/components/TestimonialsSection";
import BuildCollectionSection from "@/components/BuildCollectionSection";
import FAQSection from "@/components/FAQSection";
import InternalLinks from "@/components/InternalLinks";
import Footer from "@/components/Footer";
import LeadGenModal from "@/components/LeadGenModal";
import LocaleShell from "@/components/LocaleShell";
import { LocaleProvider } from "@/providers/LocaleProvider";
import { type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import JsonLd from "@/components/JsonLd";
import { buildPageSchema } from "@/lib/schema";

interface HomePageViewProps {
  locale: Locale;
}

export default function HomePageView({ locale }: HomePageViewProps) {
  const dict = getDictionary(locale);

  return (
    <>
      <JsonLd data={buildPageSchema(locale, "moroccan-organic-skincare", dict)} />
      <LocaleProvider locale={locale} dict={dict}>
        <LocaleShell locale={locale}>
          <div className="min-h-screen bg-background text-foreground">
            <LeadGenModal />
            <Header />
            <main>
              <Hero />
              <TrustBar />
              <FeaturedProducts />
              <ServicesGrid />
              <MoroccanEssentialsSection />
              <WholesaleSection />
              <TraditionsSection />
              <PrivateLabelSection />
              <WhyUs />
              <TestimonialsSection />
              <BuildCollectionSection />
              <FAQSection />
              <InternalLinks />
            </main>
            <Footer />
          </div>
        </LocaleShell>
      </LocaleProvider>
    </>
  );
}

