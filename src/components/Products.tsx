import { ArrowRight, Zap } from "lucide-react";

const products = [
  {
    category: "Circuit Breakers",
    items: ["MCBs", "MCCBs", "RCCBs", "ACBs"],
    image: "🔌",
  },
  {
    category: "Wiring & Cables",
    items: ["House Wiring", "Industrial Cables", "Armored Cables", "Flexible Cables"],
    image: "⚡",
  },
  {
    category: "Aluminium Conductors",
    items: ["ACSR", "AAC", "AAAC"],
    image: "🔗",
  },
  {
    category: "Transmission Poles",
    items: ["Wooden Poles", "Steel Poles"],
    image: "🏗️",
  },
  {
    category: "Transformers",
    items: ["Distribution Transformers", "Power Transformers", "All Sizes Available"],
    image: "⚙️",
  },
  {
    category: "Hardware Materials",
    items: ["Insulators", "Clamps & Fittings", "Cross Arms", "Hardware Accessories"],
    image: "🔧",
  },
  {
    category: "Aerial Bundle Conductors",
    items: ["ABC Cables", "All Specifications", "Various Sizes"],
    image: "📡",
  },
  {
    category: "Overhead Line Materials",
    items: ["Complete Overhead Line Solutions", "All Related Materials", "Full Range Available"],
    image: "🗼",
  },
  {
    category: "Switches & Sockets",
    items: ["Modular Switches", "Industrial Switches", "Smart Switches", "USB Outlets"],
    image: "💡",
  },
  {
    category: "Lighting",
    items: ["LED Panels", "Street Lights", "Industrial Lights", "Decorative Lights"],
    image: "🔆",
  },
  {
    category: "Distribution Boards",
    items: ["DB Boxes", "Panel Boards", "Junction Boxes", "Enclosures"],
    image: "📦",
  },
  {
    category: "Safety Equipment",
    items: ["Surge Protectors", "Earthing Kit", "Safety Switches", "Isolators"],
    image: "🛡️",
  },
];

const Products = () => {
  return (
    <section id="products" className="py-24 relative overflow-hidden">
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
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Our <span className="text-primary">Products</span>
          </h2>
          <p className="text-muted-foreground text-lg animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            We provide industrial electrical components, residential components, and commercial electrical components from trusted brands, ensuring safety and reliability for every project.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {products.map((product, index) => (
            <div
              key={product.category}
              className="card-electric group animate-fade-in-up transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                willChange: 'transform'
              }}
            >
              <div className="text-5xl mb-5 transition-transform duration-300 group-hover:scale-110" style={{ willChange: 'transform' }}>
                {product.image}
              </div>
              <h3 className="font-display text-xl font-semibold mb-4 text-foreground group-hover:text-primary transition-all duration-300">
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
        <div className="border-glow rounded-2xl p-8 md:p-12 text-center bg-card relative overflow-hidden animate-scale-in group">
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

          <h3 className="font-display text-2xl md:text-3xl font-bold mb-4 relative z-10">
            Can't Find What You Need?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto relative z-10">
            We stock a wide range of electrical components. Contact us with your requirements and we'll source it for you.
          </p>
          <a 
            href="#contact" 
            className="btn-electric inline-flex items-center gap-2 relative z-10 transition-all duration-300 hover:scale-105"
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
