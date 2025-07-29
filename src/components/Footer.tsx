import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Leaf } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Credentials", href: "#credentials" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    "Grafted Fruit Plants",
    "Forestry Plants",
    "Tissue Culture Plants",
    "Ornamental Varieties",
    "Plant Supply Services",
    "Landscaping Solutions"
  ];

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-forest-green text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Leaf className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Majitha Floriculture</h3>
                <p className="text-sm opacity-90">Nursery</p>
              </div>
            </div>
            <p className="text-white/80 mb-4 leading-relaxed">
              Central India's largest, most reliable, and eco-conscious nursery with over 
              18 years of horticultural distinction.
            </p>
            <p className="text-accent font-medium italic">
              "Rooted in quality, growing with integrity."
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/80 hover:text-white transition-colors cursor-pointer"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-white/80 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/90 text-sm">Bhedaghat, Jabalpur</p>
                  <p className="text-white/70 text-xs">Madhya Pradesh, India</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <p className="text-white/90 text-sm">+91-XXXXXXXXXX</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <p className="text-white/90 text-sm">info@majithanursery.com</p>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/90 text-sm">Mon - Sat: 9:00 AM - 6:00 PM</p>
                  <p className="text-white/70 text-xs">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Bar */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <Card className="bg-white/10 border-white/20 p-4">
              <p className="text-sm font-medium">Star-Rated Nursery</p>
              <p className="text-xs text-white/70">National Horticulture Board (NHB)</p>
            </Card>
            <Card className="bg-white/10 border-white/20 p-4">
              <p className="text-sm font-medium">Big Model Nursery</p>
              <p className="text-xs text-white/70">National Horticulture Mission (NHM)</p>
            </Card>
            <Card className="bg-white/10 border-white/20 p-4">
              <p className="text-sm font-medium">18+ Years</p>
              <p className="text-xs text-white/70">Horticultural Excellence</p>
            </Card>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-white/20 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/70 text-sm">
              © 2024 Majitha Floriculture Nursery. All rights reserved.
            </p>
            <p className="text-white/70 text-sm">
              Established 2007 | Serving Central India with Pride
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;