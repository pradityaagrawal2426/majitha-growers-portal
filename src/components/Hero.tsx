import { Button } from "@/components/ui/button";
import { ArrowDown, MapPin, Calendar, Users } from "lucide-react";
import heroImage from "@/assets/hero-nursery.jpg";

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

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Majitha Floriculture Nursery"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-forest-green/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <MapPin className="w-4 h-4" />
            <span className="text-sm font-medium">Bhedaghat, Jabalpur (M.P.)</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Majitha Floriculture
            <span className="block text-accent">Nursery</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl mb-4 font-medium">
            "Rooted in quality, growing with integrity."
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Central India's largest, most reliable, and eco-conscious nursery with over 18 years of horticultural distinction. 
            Spanning 20 acres with 1000+ plant varieties.
          </p>

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
              onClick={scrollToContact}
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-3"
            >
              Get Quote Now
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