"use client";

import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { whatsappUrl } from "@/lib/contact";
import { useDictionary } from "@/providers/LocaleProvider";

const LeadGenModal = () => {
  const t = useDictionary();
  const modal = t.leadGenModal;
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Check if the user has already seen the popup in this browser
    try {
      const hasSeen = localStorage.getItem("msc_lead_modal_seen");
      if (hasSeen === "true") {
        return;
      }
    } catch {
      // Ignore if localStorage is disabled
    }

    const timer = setTimeout(() => {
      try {
        localStorage.setItem("msc_lead_modal_seen", "true");
      } catch {
        // Ignore
      }
      setIsOpen(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, [mounted]);

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      try {
        localStorage.setItem("msc_lead_modal_seen", "true");
      } catch {
        // Ignore
      }
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden border-none bg-white rounded-2xl shadow-2xl">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
          aria-hidden="true"
        />

        <div className="relative p-8 md:p-10 z-10">
          <div className="text-center mb-8">
            <DialogTitle className="text-2xl md:text-3xl font-serif text-primary mb-2 leading-tight">
              {modal.title}
            </DialogTitle>
            <DialogDescription className="text-[10px] md:text-xs font-sans font-bold tracking-[0.2em] text-moroccan-gold uppercase [font-variant:all-small-caps]">
              {modal.subtitle}
            </DialogDescription>
          </div>

          <ul className="space-y-4 mb-10">
            {modal.features.map((item, index) => (
              <li key={index} className="flex items-center gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-moroccan-gold">
                  <Check className="w-3.5 h-3.5 text-white stroke-[3]" />
                </div>
                <span className="text-foreground/80 font-medium text-sm md:text-base">{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-4">
            <Button
              variant="moroccan"
              size="lg"
              className="py-6 rounded-lg shadow-lg font-semibold w-full"
              onClick={() => {
                try {
                  localStorage.setItem("msc_lead_modal_seen", "true");
                } catch {
                  // Ignore
                }
                setIsOpen(false);
                window.open(whatsappUrl, "_blank");
              }}
            >
              <WhatsAppIcon className="h-5 w-5" />
              {modal.cta}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LeadGenModal;
