import { ArrowRight, Zap } from "lucide-react";
import { useState } from "react";

const ProductImage = ({ src, alt, fallback }: { src: string; alt: string; fallback: string }) => {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return (
      <div className="w-full h-40 sm:h-48 flex items-center justify-center bg-muted/20 rounded-lg">
        <span className="text-4xl sm:text-5xl">{fallback}</span>
      </div>
    );
  }

  return (
      <div className="overflow-hidden rounded-lg bg-muted/20">
      <img 
        src={src} 
        alt={alt}
        className="w-full h-40 sm:h-48 object-cover transition-all duration-300 group-hover:scale-110"
        onError={() => setImageError(true)}
        loading="lazy"
      />
    </div>
  );
};

const products = [
  {
    category: "Circuit Breakers",
    items: ["MCBs", "MCCBs", "RCCBs", "ACBs"],
    image: "/products/circuit-breakers.webp",
    fallback: "🔌",
  },
  {
    category: "Wiring & Cables",
    items: ["House Wiring", "Industrial Cables", "Armored Cables", "Flexible Cables"],
    image: "/products/Cables.jpeg",
    fallback: "⚡",
  },
  {
    category: "Aluminium Conductors",
    items: ["ACSR", "AAC", "AAAC"],
    image: "/products/aluminium-conductors.jpeg",
    fallback: "🔗",
  },
  {
    category: "Transmission Poles",
    items: ["Wooden Poles", "Steel Poles"],
    image: "/products/transmission-poles.webp",
    fallback: "🏗️",
  },
  {
    category: "Transformers",
    items: ["Distribution Transformers", "Power Transformers", "All Sizes Available"],
    image: "/products/transformers.webp",
    fallback: "⚙️",
  },
  {
    category: "Hardware Materials",
    items: ["Insulators", "Clamps & Fittings", "Cross Arms", "Hardware Accessories"],
    image: "/products/hardware-materials.webp",
    fallback: "🔧",
  },
  {
    category: "Aerial Bundle Conductors",
    items: ["ABC Cables", "All Specifications", "Various Sizes"],
    image: "/products/aerial-bundle-conductors.webp",
    fallback: "📡",
  },
  {
    category: "Overhead Line Materials",
    items: ["Complete Overhead Line Solutions", "All Related Materials", "Full Range Available"],
    image: "/products/overhead-line-materials.webp",
    fallback: "🗼",
  },
  {
    category: "Switches & Sockets",
    items: ["Modular Switches", "Industrial Switches", "Smart Switches", "USB Outlets"],
    image: "/products/switches-sockets.webp",
    fallback: "💡",
  },
  {
    category: "Lighting",
    items: ["LED Panels", "Street Lights", "Industrial Lights", "Decorative Lights"],
    image: "/products/lighting.webp",
    fallback: "🔆",
  },
  {
    category: "Distribution Boards",
    items: ["DB Boxes", "Panel Boards", "Junction Boxes", "Enclosures"],
    image: "/products/distribution-boards.webp",
    fallback: "📦",
  },
  {
    category: "Safety Equipment",
    items: ["Surge Protectors", "Earthing Kit", "Safety Switches", "Isolators"],
    image: "/products/safety-equipment.webp",
    fallback: "🛡️",
  },
  {
    category: "Stay Rods",
    items: ["Non-Adjustable Stay Rods", "Galvanized Stay Rods", "Various Sizes", "Anchor Plates"],
    image: "/products/Stay Rods non adjustable.jpeg",
    fallback: "⚓",
  },
];

const Products = () => {
  return (
    <section id="products" className="py-16 sm:py-20 md:py-24 relative overflow-hidden">
      {/* Sub Logo Watermark Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <img 
          src="/sub-logo.png" 
          alt="" 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-auto object-contain blur-2xl"
          aria-hidden="true"
          loading="lazy"
        />
      </div>

      {/* Section Divider with Sub Logo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 opacity-20">
        <img 
          src="/sub-logo.png" 
          alt="" 
          className="w-32 h-auto object-contain blur-sm"
          aria-hidden="true"
          loading="lazy"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in-up">
          <span className="text-primary font-medium uppercase tracking-wider text-sm">Quality Components</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-4 sm:mb-6 animate-fade-in-up px-2" style={{ animationDelay: '0.1s' }}>
            Our <span className="text-primary">Products</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg animate-fade-in-up px-4" style={{ animationDelay: '0.2s' }}>
            We provide industrial electrical components, residential components, and commercial electrical components from trusted brands, ensuring safety and reliability for every project.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {products.map((product, index) => (
            <div
              key={product.category}
              className="card-electric group animate-fade-in-up transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                willChange: 'transform'
              }}
            >
              <div className="mb-5 transition-transform duration-300 group-hover:scale-110" style={{ willChange: 'transform' }}>
                <ProductImage 
                  src={product.image} 
                  alt={product.category}
                  fallback={product.fallback}
                />
              </div>
              <h3 className="font-display text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-foreground group-hover:text-primary transition-all duration-300">
                {product.category}
              </h3>
              <ul className="space-y-2 mb-6">
                {product.items.map((item) => (
                  <li 
                    key={item} 
                    className="flex items-center gap-2 text-muted-foreground transition-all duration-300 group-hover:text-foreground group-hover:translate-x-1"
                    style={{ willChange: 'transform, color' }}
                  >
                    <Zap className="w-3 h-3 text-primary transition-transform duration-300 group-hover:scale-125" />
                    {item}
                  </li>
                ))}
              </ul>
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-300 group/link"
                style={{ willChange: 'transform' }}
              >
                Enquire Now
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
              </a>
            </div>
          ))}
        </div>

        {/* CTA Banner with Sub Logo */}
        <div className="border-glow rounded-2xl p-6 sm:p-8 md:p-12 text-center bg-card relative overflow-hidden animate-scale-in group">
          {/* Sub Logo Accent */}
          <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
            <img 
              src="/sub-logo.png" 
              alt="" 
              className="w-24 h-auto object-contain blur-sm"
              aria-hidden="true"
              loading="lazy"
            />
          </div>

          <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 relative z-10 px-2">
            Can't Find What You Need?
          </h3>
          <p className="text-muted-foreground mb-4 sm:mb-6 max-w-xl mx-auto relative z-10 px-4 text-sm sm:text-base">
            We stock a wide range of electrical components. Contact us with your requirements and we'll source it for you.
          </p>
          <a 
            href="mailto:info@voltusprime.co.za?subject=Quote Request&body=Hello,%0D%0A%0D%0AI would like to request a quote for electrical components/products.%0D%0A%0D%0AThank you!" 
            className="btn-electric inline-flex items-center gap-2 relative z-10 transition-all duration-300 hover:scale-105 touch-manipulation min-h-[44px] px-6"
            style={{ willChange: 'transform' }}
          >
            Request a Quote
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
