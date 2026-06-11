import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">M</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`transition-colors ${isActive('/') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'}`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`transition-colors ${isActive('/about') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'}`}
            >
              About Us
            </Link>
            <Link
              to="/services"
              className={`transition-colors ${isActive('/services') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'}`}
            >
              Services
            </Link>
            <Link
              to="/products"
              className={`transition-colors ${isActive('/products') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'}`}
            >
              Products
            </Link>
            <Link
              to="/credentials"
              className={`transition-colors ${isActive('/credentials') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'}`}
            >
              Credentials
            </Link>
            <Link
              to="/gallery"
              className={`transition-colors ${isActive('/gallery') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'}`}
            >
              Gallery
            </Link>
            <Link
              to="/clients"
              className={`transition-colors ${isActive('/clients') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'}`}
            >
              Clients
            </Link>
            <Link
              to="/contact"
              className={`transition-colors ${isActive('/contact') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'}`}
            >
              Contact
            </Link>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span>9425324850</span>
            </div>
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link to="/contact">Enquire Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md hover:bg-secondary"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className={`text-left transition-colors py-2 ${isActive('/') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'}`}
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={() => setIsMenuOpen(false)}
                className={`text-left transition-colors py-2 ${isActive('/about') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'}`}
              >
                About Us
              </Link>
              <Link
                to="/services"
                onClick={() => setIsMenuOpen(false)}
                className={`text-left transition-colors py-2 ${isActive('/services') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'}`}
              >
                Services
              </Link>
              <Link
                to="/products"
                onClick={() => setIsMenuOpen(false)}
                className={`text-left transition-colors py-2 ${isActive('/products') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'}`}
              >
                Products
              </Link>
              <Link
                to="/credentials"
                onClick={() => setIsMenuOpen(false)}
                className={`text-left transition-colors py-2 ${isActive('/credentials') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'}`}
              >
                Credentials
              </Link>
              <Link
                to="/gallery"
                onClick={() => setIsMenuOpen(false)}
                className={`text-left transition-colors py-2 ${isActive('/gallery') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'}`}
              >
                Gallery
              </Link>
              <Link
                to="/clients"
                onClick={() => setIsMenuOpen(false)}
                className={`text-left transition-colors py-2 ${isActive('/clients') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'}`}
              >
                Clients
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className={`text-left transition-colors py-2 ${isActive('/contact') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'}`}
              >
                Contact
              </Link>
              <div className="pt-4 border-t border-border">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
                  <Phone className="w-4 h-4" />
                  <span>9425324850</span>
                </div>
                <Button asChild className="w-full">
                  <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Enquire Now</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;