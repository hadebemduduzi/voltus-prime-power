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
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-secondary/30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="text-primary font-medium uppercase tracking-wider text-sm">About Us</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
              Why Choose <span className="text-primary">Voltus Prime</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              At Voltus Prime, we're committed to delivering excellence in every project. 
              Whether you need quality electrical components or professional installation services, 
              our team of experts ensures your complete satisfaction.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn-electric inline-block">
              Get Started Today
            </a>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto relative">
              {/* Decorative circles */}
              <div className="absolute inset-0 border-2 border-primary/20 rounded-full animate-pulse" />
              <div className="absolute inset-8 border-2 border-primary/30 rounded-full" />
              <div className="absolute inset-16 border-2 border-primary/40 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
              
              {/* Center content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="relative">
                    <Zap className="w-24 h-24 text-primary mx-auto animate-electric-pulse" />
                    <div className="absolute inset-0 blur-2xl bg-primary/30 rounded-full" />
                  </div>
                  <div className="mt-4">
                    <span className="font-display text-5xl font-bold text-primary">10+</span>
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
