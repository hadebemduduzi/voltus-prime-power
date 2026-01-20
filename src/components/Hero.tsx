import { Zap, ArrowRight, Shield, Clock, Award } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 sm:pt-20 overflow-hidden">
      {/* Header Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-scale-in"
        style={{
          backgroundImage: 'url(/header.png)',
          willChange: 'opacity, transform'
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background/95" />
        {/* Additional Overlay for better text readability */}
        <div className="absolute inset-0 bg-background/40" />
      </div>

      {/* Background Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" 
        style={{ animationDelay: '0.5s', willChange: 'transform' }} 
      />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float"
        style={{ animationDelay: '1s', willChange: 'transform' }}
      />
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8 animate-fade-in">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Trusted Electrical Solutions</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 animate-fade-in-up px-2" 
            style={{ 
              animationDelay: '0.1s',
              willChange: 'opacity, transform'
            }}
          >
            <span className="text-foreground">Igniting the</span>
            <br />
            <span className="text-primary text-glow">Future</span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-10 animate-fade-in-up px-4" 
            style={{ 
              animationDelay: '0.2s',
              willChange: 'opacity, transform'
            }}
          >
            Premium electrical components and products for residential, commercial, and industrial needs.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16 animate-fade-in-up px-4" 
            style={{ 
              animationDelay: '0.3s',
              willChange: 'opacity, transform'
            }}
          >
            <a 
              href="#products" 
              className="btn-electric flex items-center gap-2 w-full sm:w-auto justify-center transition-all duration-300 hover:scale-105 touch-manipulation min-h-[44px]"
              style={{ willChange: 'transform' }}
            >
              Browse Products
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a 
              href="mailto:info@voltusprime.co.za?subject=Quote Request&body=Hello,%0D%0A%0D%0AI would like to request a quote for electrical components/products.%0D%0A%0D%0AThank you!" 
              className="btn-outline-electric w-full sm:w-auto text-center transition-all duration-300 hover:scale-105 touch-manipulation min-h-[44px]"
              style={{ willChange: 'transform' }}
            >
              Get Quote
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto animate-fade-in-up" 
            style={{ 
              animationDelay: '0.4s',
              willChange: 'opacity, transform'
            }}
          >
            <div className="flex items-center justify-center gap-3 text-muted-foreground transition-all duration-300 hover:text-primary group">
              <Shield className="w-6 h-6 text-primary transition-transform duration-300 group-hover:scale-110" />
              <span className="font-medium">Licensed & Insured</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-muted-foreground transition-all duration-300 hover:text-primary group">
              <Clock className="w-6 h-6 text-primary transition-transform duration-300 group-hover:scale-110" />
              <span className="font-medium">24/7 Support</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-muted-foreground transition-all duration-300 hover:text-primary group">
              <Award className="w-6 h-6 text-primary transition-transform duration-300 group-hover:scale-110" />
              <span className="font-medium">Quality Guaranteed</span>
            </div>
          </div>
        </div>

        {/* Animated Thunderbolt Icon */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-20 hidden sm:block">
          <Zap className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 text-primary animate-float" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
