import { Button } from "@/components/ui/button";
import { ArrowDown, MapPin, Calendar, Users, ExternalLink } from "lucide-react";
import heroImage from "@/assets/hero-nursery.jpg";
import majithaLogo from "@/assets/majitha-logo-red.png";

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleEnquireNow = () => {
    const message = encodeURIComponent("Hello! I'm interested in your nursery services. Please provide more information.");
    window.open(`https://wa.me/919425324850?text=${message}`, '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Majitha Floriculture™ Nursery"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-forest-green/70"></div>
      </div>

      {/* Location Badge - Top */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="bg-white/95 backdrop-blur-sm rounded-xl px-6 py-4 shadow-lg border border-white/20">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <div className="text-left">
              <p className="text-sm font-medium text-muted-foreground">Located at</p>
              <a 
                href="https://goo.gl/maps/Agt6rsnZ22meEbzc8?g_st=aw" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-lg font-bold text-foreground hover:text-primary transition-colors flex items-center gap-1"
              >
                Bhedaghat, Jabalpur (M.P.)
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white pt-20">
        <div className="max-w-5xl mx-auto">
          {/* Logo and Company Name */}
          <div className="flex items-center justify-center mb-6">
            <img 
              src={majithaLogo} 
              alt="Majitha Logo" 
              className="h-16 md:h-20 mr-4"
            />
            <div className="text-left">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                <span className="block">Majitha Floriculture<span className="text-2xl">®</span></span>
                <span className="block text-accent text-2xl md:text-3xl lg:text-4xl">Nursery</span>
              </h1>
            </div>
          </div>

          {/* Tagline */}
          <p className="text-xl md:text-2xl mb-4 font-medium">
            "Rooted in quality, growing with integrity."
          </p>

          {/* Description */}
          <div className="max-w-4xl mx-auto mb-8">
            <p className="text-lg md:text-xl mb-4 opacity-90 leading-relaxed">
              Central India's largest, most reliable, and eco-conscious nursery with over 18 years of horticultural distinction.
            </p>
            <p className="text-base md:text-lg opacity-80 leading-relaxed">
              Spanning 20 acres with 1000+ plant varieties • NHM Registered Big Model Nursery • 
              Star-rated by National Horticulture Board • Serving Government & Private Projects Across India
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">✓ Disease-Free Plants</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">✓ Expert Team</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">✓ Timely Delivery</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">✓ 18+ Years Experience</span>
            </div>
          </div>

          {/* Director's Message */}
          <div className="max-w-4xl mx-auto mb-8 bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-xl font-bold mb-4 text-accent">Director's Message</h3>
            <div className="text-left">
              <p className="text-base opacity-90 leading-relaxed mb-4">
                Dear Visitors,<br/>
                Welcome to our green world.
              </p>
              <p className="text-base opacity-90 leading-relaxed mb-4">
                At Majitha Floriculture<span className="text-sm">®</span> Nursery, we don't just grow plants — we grow life, color, and sustainability. Every leaf, every bloom, every root we nurture carries our promise: to bring nature closer to you in the most responsible, beautiful, and innovative way possible.
              </p>
              <p className="text-base opacity-90 leading-relaxed mb-4">
                We believe horticulture is not just an industry — it's a living art. Whether you're a home gardener, a landscape designer, or a business seeking eco-friendly solutions, we're here to turn your spaces into thriving green experiences.
              </p>
              <p className="text-base opacity-90 leading-relaxed mb-2">
                Thank you for trusting us. Let's grow together.
              </p>
              <p className="text-base font-semibold">
                Warm regards,<br/>
                <span className="text-accent">Nitin Agrawal</span><br/>
                <span className="text-sm opacity-80">Director</span>
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-2xl mx-auto">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
              <div className="flex items-center justify-center mb-2">
                <Calendar className="w-6 h-6 mr-2" />
                <span className="text-2xl font-bold">18+</span>
              </div>
              <p className="text-sm">Years of Excellence</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
              <div className="flex items-center justify-center mb-2">
                <span className="text-2xl font-bold mr-2">20</span>
                <span className="text-lg">Acres</span>
              </div>
              <p className="text-sm">Cultivation Area</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
              <div className="flex items-center justify-center mb-2">
                <Users className="w-6 h-6 mr-2" />
                <span className="text-2xl font-bold">50+</span>
              </div>
              <p className="text-sm">Trained Professionals</p>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              onClick={handleEnquireNow}
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-3"
            >
              Enquire Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={scrollToAbout}
              className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-3"
            >
              Learn More
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <button onClick={scrollToAbout} className="text-white/80 hover:text-white transition-colors">
              <ArrowDown className="w-6 h-6 mx-auto" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;