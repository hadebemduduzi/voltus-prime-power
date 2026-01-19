import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your enquiry! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const contactInfo = [
    { icon: Phone, label: "Phone", value: "+27 11 123 4567" },
    { icon: Mail, label: "Email", value: "info@voltusprime.co.za" },
    { icon: MapPin, label: "Address", value: "42 Elektriek Street, Sandton, Johannesburg" },
    { icon: Clock, label: "Hours", value: "Mon-Sat: 7AM - 5PM" },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Sub Logo Watermark */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <img 
          src="/sub-logo.png" 
          alt="" 
          className="absolute bottom-20 left-20 w-96 h-auto object-contain blur-2xl"
          aria-hidden="true"
          loading="lazy"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in-up">
          <span className="text-primary font-medium uppercase tracking-wider text-sm">Get In Touch</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Contact <span className="text-primary">Us</span>
          </h2>
          <p className="text-muted-foreground text-lg animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Ready to power up your project? Reach out to us for a free consultation and quote.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s', willChange: 'opacity, transform' }}>
            <h3 className="font-display text-2xl font-semibold mb-8">Get In Touch</h3>
            <div className="space-y-6 mb-10">
              {contactInfo.map((item, index) => (
                <div 
                  key={item.label} 
                  className="flex items-start gap-4 transition-all duration-300 hover:translate-x-2 group"
                  style={{ 
                    animationDelay: `${0.4 + index * 0.1}s`,
                    willChange: 'transform'
                  }}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                    <item.icon className="w-5 h-5 text-primary transition-transform duration-300 group-hover:scale-125" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm group-hover:text-foreground transition-colors duration-300">{item.label}</p>
                    <p className="text-foreground font-medium group-hover:text-primary transition-colors duration-300">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Emergency Banner */}
            <div className="border-glow rounded-xl p-6 bg-primary/5">
              <h4 className="font-display text-lg font-semibold text-primary mb-2">
                24/7 Emergency Service
              </h4>
              <p className="text-muted-foreground mb-3">
                Electrical emergency? We're here to help around the clock.
              </p>
              <a href="tel:+27111234567" className="text-primary font-semibold text-xl">
                +27 11 123 4567
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-electric animate-scale-in relative overflow-hidden group" style={{ animationDelay: '0.5s', willChange: 'transform, opacity' }}>
            {/* Sub Logo Accent */}
            <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
              <img 
                src="/sub-logo.png" 
                alt="" 
                className="w-32 h-auto object-contain blur-lg"
                aria-hidden="true"
                loading="lazy"
              />
            </div>

            <h3 className="font-display text-2xl font-semibold mb-6 relative z-10">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300 text-foreground focus:scale-[1.01] hover:border-primary/50"
                  placeholder="Thabo Mokoena"
                  required
                  style={{ willChange: 'transform, border-color' }}
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300 text-foreground focus:scale-[1.01] hover:border-primary/50"
                      placeholder="thabo@email.co.za"
                      required
                      style={{ willChange: 'transform, border-color' }}
                    />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone
                  </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300 text-foreground focus:scale-[1.01] hover:border-primary/50"
                      placeholder="+27 82 000 0000"
                      style={{ willChange: 'transform, border-color' }}
                    />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300 text-foreground resize-none focus:scale-[1.01] hover:border-primary/50"
                  placeholder="Tell us about your project..."
                  required
                  style={{ willChange: 'transform, border-color' }}
                />
              </div>
              <button 
                type="submit" 
                className="btn-electric w-full flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02]"
                style={{ willChange: 'transform' }}
              >
                Send Message
                <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
