import { Button } from "@/components/ui/button";
import { ArrowDown, MapPin, Calendar, Users, ExternalLink } from "lucide-react";
import heroImage from "@/assets/hero-nursery.jpg";
import majithaLogo from "/lovable-uploads/50da42e3-6458-4feb-936d-5fc582fc8957.png";

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
    const message = encodeURIComponent("Hello! I'm interested in your nursery services from Majitha Floriculture™ Nursery. Please provide more information about your plants and services.");
    window.open(`https://wa.me/919425324850?text=${message}`, '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/lovable-uploads/36b1721e-5787-4418-a6d8-7cf7367a5bdc.png"
          alt="Majitha Floriculture™ Nursery Overview"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-forest-green/70"></div>
      </div>


      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white pt-32">
        <div className="max-w-6xl mx-auto">
          {/* Logo and Company Name */}
          <div className="flex flex-col items-center justify-center mb-8">
            <img 
              src={majithaLogo} 
              alt="Majitha Floriculture Nursery Logo" 
              className="h-32 md:h-40 lg:h-48 mb-4 drop-shadow-2xl"
            />
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-2">
                <span className="block">Majitha Floriculture™</span>
                <span className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl">Nursery</span>
              </h1>
              <div className="flex items-center justify-center gap-3 mt-2">
                <MapPin className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                <p className="text-lg md:text-xl opacity-90">Hi-tech Producer of Quality Plants</p>
              </div>
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

          {/* Creative Location Section */}
          <div className="max-w-2xl mx-auto mb-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 border border-white/30 shadow-xl transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center gap-4">
                <div className="relative">
                  <div className="p-3 bg-gradient-to-br from-accent/40 to-primary/40 rounded-full border border-white/30">
                    <MapPin className="w-6 h-6 text-white drop-shadow-lg" />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-1">📍 Visit Our Nursery</h3>
                  <a 
                    href="https://goo.gl/maps/Agt6rsnZ22meEbzc8?g_st=aw" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-base md:text-lg font-semibold text-accent hover:text-white transition-colors duration-300 group"
                  >
                    Bhedaghat, Jabalpur (M.P.)
                    <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Director's Message */}
          <div className="max-w-5xl mx-auto mb-8 bg-white/15 backdrop-blur-sm rounded-2xl p-8 border border-white/30 shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-accent text-center">Director's Message</h3>
            <div className="text-left space-y-4">
              <p className="text-lg md:text-xl opacity-95 leading-relaxed">
                <strong>Dear Visitors,</strong><br/>
                Welcome to our green world.
              </p>
              <p className="text-base md:text-lg opacity-90 leading-relaxed">
                At Majitha Floriculture™ Nursery, we don't just grow plants — we grow life, color, and sustainability. Every leaf, every bloom, every root we nurture carries our promise: to bring nature closer to you in the most responsible, beautiful, and innovative way possible.
              </p>
              <p className="text-base md:text-lg opacity-90 leading-relaxed">
                We believe horticulture is not just an industry — it's a living art. Whether you're a home gardener, a landscape designer, or a business seeking eco-friendly solutions, we're here to turn your spaces into thriving green experiences.
              </p>
              <p className="text-base md:text-lg opacity-90 leading-relaxed">
                Thank you for trusting us. Let's grow together.
              </p>
              <div className="text-right mt-6">
                <p className="text-lg md:text-xl font-semibold">
                  Warm regards,<br/>
                  <span className="text-accent text-xl md:text-2xl">Nitin Agrawal</span><br/>
                  <span className="text-base opacity-80">Director, Majitha Floriculture™ Nursery</span>
                </p>
              </div>
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
          <div className="flex justify-center mb-12">
            <Button 
              size="lg" 
              onClick={handleEnquireNow}
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-3"
            >
              Enquire Now
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