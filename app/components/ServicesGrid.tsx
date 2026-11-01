import Image from "next/image";
import { Factory, Package, Globe, Tag, Droplets, Leaf } from "lucide-react";

// Import service images
const manufacturerImg = "/assets/service-manufacturer.webp";
const wholesaleImg = "/assets/service-wholesale.webp";
const exportImg = "/assets/service-export.webp";
const privateLabelImg = "/assets/service-private-label.webp";
const bulkImg = "/assets/service-bulk.webp";
const organicImg = "/assets/service-organic.webp";

const services = [
  {
    icon: Factory,
    title: "Moroccan Skin Care Manufacturer",
    description: "Moroccan skin care manufacturers offer manufacturing, bulk production, and private label solutions that meet the highest international standards. Products are developed in certified facilities adhering to GMP ISO 22716 standards.",
    image: manufacturerImg,
  },
  {
    icon: Package,
    title: "Moroccan Skin Care Wholesale Supplier",
    description: "Buy Moroccan skin care in bulk for export at competitive prices, suitable for global B2B supply chains. Ensuring stable supply, consistent quality, flexible MOQs, and professional export packaging.",
    image: wholesaleImg,
  },
  {
    icon: Globe,
    title: "Moroccan Natural Skin Care Exporter",
    description: "Buy Moroccan skin care products in bulk for export to markets in Europe, the Gulf, North America, and Asia. Certified natural products with complete export documentation, international logistics (DHL, FedEx, Freight), and regulatory compliance (ISO, ECOCERT).",
    image: exportImg,
  },
  {
    icon: Tag,
    title: "Moroccan Private Label Skin Care",
    description: "Launch your own luxury brand inspired by authentic Moroccan traditions. Turnkey OEM/ODM services encompass custom formulation, packaging, silkscreen bottle printing, and international compliance.",
    image: privateLabelImg,
  },
  {
    icon: Droplets,
    title: "Bulk Moroccan Cosmetic Ingredients",
    description: "Key raw components for global manufacturers seeking 100% natural quality, including pure argan oil in bulk, Atlas ghassoul clay, prickly pear seed oil, blue nila powder, and distilled rose water concentrate.",
    image: bulkImg,
  },
  {
    icon: Leaf,
    title: "Organic Moroccan Skin Care Products",
    description: "Meeting the growing demand for clean and certified natural products in the B2B sector. Ethically sourced from local women's cooperatives with sustainable farming and environmentally friendly extraction.",
    image: organicImg,
  },
];

const ServicesGrid = () => {
  return (
    <section id="services" className="section-padding bg-gradient-to-b from-[#FAF9F6] via-white to-[#FAF9F6]">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold text-primary bg-primary/10 tracking-widest uppercase mb-4 border border-primary/20">
            Our B2B Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-4">
            The 6 Pillars of Moroccan Cosmetic Manufacturing
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Why buy Moroccan skin care in bulk for export? Discover our comprehensive B2B manufacturing, bulk supply, and private label solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-white rounded-3xl overflow-hidden border border-border/80 hover:border-primary/50 transition-all duration-300 shadow-xs hover:shadow-xl flex flex-col p-8"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Watermark Image */}
              <div className="absolute inset-0 opacity-[0.06] group-hover:opacity-[0.10] transition-opacity duration-300 pointer-events-none">
                <Image
                  src={service.image}
                  alt={`${service.title} - Moroccan skincare service`}
                  fill
                  className="object-cover"
                  aria-hidden="true"
                />
              </div>

              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300 shrink-0 text-primary shadow-xs">
                <service.icon className="h-7 w-7" strokeWidth={1.75} />
              </div>

              {/* Title as an H3 */}
              <h3 className="text-xl font-bold text-foreground mb-3 leading-snug group-hover:text-primary transition-colors duration-200">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
