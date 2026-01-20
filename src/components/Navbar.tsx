import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "HOME", href: "#home" },
    { name: "PRODUCTS", href: "#products" },
    { name: "ABOUT", href: "#about" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border animate-fade-in-up">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 sm:h-20 relative">
          {/* Desktop Navigation - Left Side */}
          <div className="hidden md:flex items-center gap-8 flex-1">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium relative group"
                style={{ 
                  animationDelay: `${(index + 1) * 0.1}s`,
                  willChange: 'color, transform'
                }}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Logo - Centered */}
          <a 
            href="#home" 
            className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 sm:gap-3 group transition-all duration-300 hover:scale-105"
          >
            <img 
              src="/main-logo.png" 
              alt="Voltus Prime Electrical Logo" 
              className="h-35 sm:h-12 md:h-14 w-auto object-contain transition-all duration-300 group-hover:animate-glow-pulse"
              style={{ willChange: 'transform, filter' }}
              loading="eager"
            />
          </a>

          {/* Right Side - Desktop Get Quote Button / Mobile Menu Button */}
          <div className="flex-1 flex justify-end">
            <div className="hidden md:flex">
              <a 
                href="mailto:info@voltusprime.co.za?subject=Quote Request&body=Hello,%0D%0A%0D%0AI would like to request a quote for electrical components/products.%0D%0A%0D%0AThank you!" 
                className="btn-electric text-sm py-3 px-6 transition-all duration-300 hover:scale-105"
                style={{ willChange: 'transform' }}
              >
                Get Quote
              </a>
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-foreground p-2 touch-manipulation"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-6 border-t border-border animate-fade-in-up">
            <div className="flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium py-2 animate-slide-in-left"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="mailto:info@voltusprime.co.za?subject=Quote Request&body=Hello,%0D%0A%0D%0AI would like to request a quote for electrical components/products.%0D%0A%0D%0AThank you!" 
                className="btn-electric text-center mt-4 transition-all duration-300 hover:scale-105"
                style={{ willChange: 'transform' }}
              >
                Get Quote
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
