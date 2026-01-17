import { Wrench, Home, Building2, Factory, Lightbulb, Cable } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential",
    description: "Complete electrical solutions for homes including wiring, repairs, upgrades, and smart home installations.",
  },
  {
    icon: Building2,
    title: "Commercial",
    description: "Professional electrical services for offices, retail spaces, and commercial buildings with minimal downtime.",
  },
  {
    icon: Factory,
    title: "Industrial",
    description: "Heavy-duty electrical installations and maintenance for manufacturing plants and industrial facilities.",
  },
  {
    icon: Wrench,
    title: "Repairs & Maintenance",
    description: "Fast and reliable repair services with preventive maintenance programs to keep your systems running.",
  },
  {
    icon: Lightbulb,
    title: "Lighting Solutions",
    description: "Energy-efficient LED upgrades, custom lighting design, and automated lighting control systems.",
  },
  {
    icon: Cable,
    title: "Electrical Installations",
    description: "New construction wiring, panel upgrades, EV charger installation, and generator hookups.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="absolute inset-0 bg-secondary/30" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium uppercase tracking-wider text-sm">What We Offer</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From simple repairs to complex installations, we provide comprehensive electrical services tailored to your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="card-electric group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:electric-glow transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
