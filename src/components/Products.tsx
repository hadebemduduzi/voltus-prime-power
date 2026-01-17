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
    <section id="products" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium uppercase tracking-wider text-sm">Quality Components</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Our <span className="text-primary">Products</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Premium electrical components from trusted brands, ensuring safety and reliability for every project.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {products.map((product, index) => (
            <div
              key={product.category}
              className="card-electric group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl mb-5">{product.image}</div>
              <h3 className="font-display text-xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">
                {product.category}
              </h3>
              <ul className="space-y-2 mb-6">
                {product.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-muted-foreground">
                    <Zap className="w-3 h-3 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
                Enquire Now
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="border-glow rounded-2xl p-8 md:p-12 text-center bg-card">
          <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
            Can't Find What You Need?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            We stock a wide range of electrical components. Contact us with your requirements and we'll source it for you.
          </p>
          <a href="#contact" className="btn-electric inline-flex items-center gap-2">
            Request a Quote
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
