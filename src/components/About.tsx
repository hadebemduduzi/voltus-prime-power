import { CheckCircle, Zap } from "lucide-react";

const highlights = [
  "Over 10 years of industry experience",
  "Certified and licensed electricians",
  "Premium quality products only",
  "Competitive pricing guaranteed",
  "24/7 emergency support available",
  "Serving residential & commercial clients",
];

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 relative overflow-hidden">
      {/* Sub Logo Watermark */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <img 
          src="/sub-logo.png" 
          alt="" 
          className="absolute top-20 right-20 w-96 h-auto object-contain blur-2xl"
          aria-hidden="true"
          loading="lazy"
        />
      </div>

      <div className="absolute inset-0 bg-secondary/30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in-up" style={{ willChange: 'opacity, transform' }}>
            <span className="text-primary font-medium uppercase tracking-wider text-sm">About Us</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-4 sm:mb-6 animate-fade-in-up px-2" style={{ animationDelay: '0.1s' }}>
              Why Choose <span className="text-primary">Voltus Prime</span>?
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed animate-fade-in-up px-2" style={{ animationDelay: '0.2s' }}>
              At Voltus Prime, we're committed to delivering excellence in every project. 
              Based in Gauteng, South Africa, we provide quality electrical components and products 
              throughout South Africa and neighboring countries. Our team of experts ensures your complete satisfaction.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              {highlights.map((item, index) => (
                <div 
                  key={item} 
                  className="flex items-start gap-3 transition-all duration-300 hover:translate-x-2 group"
                  style={{ 
                    animationDelay: `${0.4 + index * 0.05}s`,
                    willChange: 'transform'
                  }}
                >
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 transition-transform duration-300 group-hover:scale-125" />
                  <span className="text-foreground group-hover:text-primary transition-colors duration-300">{item}</span>
                </div>
              ))}
            </div>

            <a 
              href="mailto:info@voltusprime.co.za?subject=Get Started&body=Hello,%0D%0A%0D%0AI would like to get started with Voltus Prime.%0D%0A%0D%0AThank you!" 
              className="btn-electric inline-block transition-all duration-300 hover:scale-105 animate-fade-in-up touch-manipulation min-h-[44px]"
              style={{ 
                animationDelay: '0.6s',
                willChange: 'transform'
              }}
            >
              Get Started Today
            </a>
          </div>

          {/* Visual Element with Sub Logo */}
          <div className="relative animate-scale-in" style={{ animationDelay: '0.4s', willChange: 'transform, opacity' }}>
            <div className="aspect-square max-w-md mx-auto relative">
              {/* Sub Logo Background */}
              <div className="absolute inset-0 opacity-10">
                <img 
                  src="/sub-logo.png" 
                  alt="" 
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full object-contain blur-xl"
                  aria-hidden="true"
                  loading="lazy"
                />
              </div>

              {/* Decorative circles */}
              <div className="absolute inset-0 border-2 border-primary/20 rounded-full animate-pulse" />
              <div className="absolute inset-8 border-2 border-primary/30 rounded-full" />
              <div className="absolute inset-16 border-2 border-primary/40 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
              
              {/* Center content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center relative z-10">
                  <div className="relative">
                    <Zap className="w-24 h-24 text-primary mx-auto animate-electric-pulse transition-transform duration-300 hover:scale-110" />
                    <div className="absolute inset-0 blur-2xl bg-primary/30 rounded-full" />
                  </div>
                  <div className="mt-4">
                    <span className="font-display text-5xl font-bold text-primary transition-transform duration-300 hover:scale-110 inline-block">10+</span>
                    <p className="text-muted-foreground mt-2">Years of Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
