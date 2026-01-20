const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Products", href: "#products" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const productCategories = [
    "Circuit Breakers",
    "Wiring & Cables",
    "Switches & Sockets",
    "Lighting Solutions",
    "Distribution Boards",
    "Safety Equipment",
  ];

  return (
    <footer className="bg-card border-t border-border pt-12 sm:pt-16 pb-6 sm:pb-8 relative overflow-hidden">
      {/* Sub Logo Watermark */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <img 
          src="/sub-logo.png" 
          alt="" 
          className="absolute top-10 right-10 w-64 h-auto object-contain blur-sm"
          aria-hidden="true"
          loading="lazy"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-8 sm:mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-1 animate-fade-in-up">
            <a 
              href="#home" 
              className="flex items-center gap-3 mb-5 group transition-all duration-300 hover:scale-105 inline-block"
              style={{ willChange: 'transform' }}
            >
              <img 
                src="/subblogo-removebg-preview.png" 
                alt="Voltus Prime Electrical Logo" 
                className="h-40 sm:h-48 md:h-56 w-auto object-contain transition-all duration-300 group-hover:animate-glow-pulse"
                style={{ willChange: 'transform, filter' }}
                loading="lazy"
              />
            </a>
            <p className="text-muted-foreground leading-relaxed">
              Your trusted partner for premium electrical components and products. 
              Based in Gauteng, South Africa, serving clients throughout South Africa and neighboring countries.
            </p>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h4 className="font-display font-semibold text-foreground mb-5">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-all duration-300 inline-block hover:translate-x-1 group"
                    style={{ willChange: 'color, transform' }}
                  >
                    <span className="relative">
                      {link.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Supply */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h4 className="font-display font-semibold text-foreground mb-5">Product Supply</h4>
            <ul className="space-y-3">
              {productCategories.map((category) => (
                <li key={category}>
                  <span className="text-muted-foreground transition-colors duration-300 hover:text-primary cursor-default">
                    {category}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <h4 className="font-display font-semibold text-foreground mb-5">Contact Info</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li className="transition-colors duration-300 hover:text-primary">
                <span className="font-medium">Based in:</span> Gauteng, South Africa
              </li>
              <li className="transition-colors duration-300 hover:text-primary">
                <span className="font-medium">Service Area:</span> All of South Africa & Neighboring Countries
              </li>
              <li className="transition-colors duration-300 hover:text-primary">
                <a href="tel:+27678489517" className="hover:text-primary">+27 67 848 9517</a>
              </li>
              <li className="transition-colors duration-300 hover:text-primary">
                <a href="mailto:info@voltusprime.co.za" className="hover:text-primary">info@voltusprime.co.za</a>
              </li>
              <li className="transition-colors duration-300 hover:text-primary">
                <a href="mailto:mduduzi@voltusprime.co.za" className="hover:text-primary">mduduzi@voltusprime.co.za</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <img 
              src="/subblogo-removebg-preview.png" 
              alt="Voltus Prime Brand Accent" 
              className="h-10 w-auto object-contain opacity-50 transition-all duration-300 hover:opacity-100 hover:scale-110"
              style={{ willChange: 'opacity, transform' }}
              loading="lazy"
            />
            <p className="text-muted-foreground text-sm">
              © {currentYear} Voltus Prime. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <a href="#" className="hover:text-primary transition-all duration-300 hover:translate-y-[-2px]" style={{ willChange: 'color, transform' }}>
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-all duration-300 hover:translate-y-[-2px]" style={{ willChange: 'color, transform' }}>
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
