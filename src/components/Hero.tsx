import { Zap, ArrowRight, Shield, Clock, Award } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 gradient-dark" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      
      {/* Grid Pattern */}
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
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <span className="text-foreground">Powering Your</span>
            <br />
            <span className="text-primary text-glow">Future Forward</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Premium electrical components and professional services for residential, commercial, and industrial needs.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <a href="#products" className="btn-electric flex items-center gap-2 w-full sm:w-auto justify-center">
              Browse Products
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#services" className="btn-outline-electric w-full sm:w-auto text-center">
              Our Services
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center justify-center gap-3 text-muted-foreground">
              <Shield className="w-6 h-6 text-primary" />
              <span className="font-medium">Licensed & Insured</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-muted-foreground">
              <Clock className="w-6 h-6 text-primary" />
              <span className="font-medium">24/7 Emergency</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-muted-foreground">
              <Award className="w-6 h-6 text-primary" />
              <span className="font-medium">Quality Guaranteed</span>
            </div>
          </div>
        </div>

        {/* Animated Thunderbolt Icon */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-20">
          <Zap className="w-40 h-40 text-primary animate-float" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
