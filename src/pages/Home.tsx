import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, Users, Truck, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const features = [
    {
      icon: <Leaf className="h-8 w-8 text-primary" />,
      title: "Premium Quality Plants",
      description: "1000+ varieties of healthy, eco-conscious plants"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Expert Team",
      description: "50+ trained professionals at your service"
    },
    {
      icon: <Truck className="h-8 w-8 text-primary" />,
      title: "Reliable Delivery",
      description: "Timely, safe delivery across India"
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Trusted Partnership",
      description: "Preferred supplier for government projects"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      
      {/* Enhanced Features Section with Images */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Why Choose Majitha Floriculture™ Nursery
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Central India's Premier Plant Destination
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              With over 18 years of excellence and spanning 20 acres, we're your trusted partner for all horticultural needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Our Plantation Excellence</h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Located in the heart of Bhedaghat, Jabalpur (M.P.), our state-of-the-art nursery combines traditional 
                Indian horticultural wisdom with modern cultivation techniques. We maintain the largest inventory 
                of native and exotic plants in Central India.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-primary rounded-full mr-3"></div>
                  <span>Scientific polybag and root trainer systems</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-primary rounded-full mr-3"></div>
                  <span>Advanced plant health management</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-primary rounded-full mr-3"></div>
                  <span>Government approved and NHM registered</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/lovable-uploads/f38c6e91-7f96-4091-a0f7-f673e97b7aff.png"
                alt="Majitha Nursery Plantation"
                className="w-full h-[400px] object-cover rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <h3 className="text-2xl font-bold text-foreground mb-6">Quality & Innovation</h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our tissue culture lab and advanced propagation facilities ensure disease-free, high-quality plants. 
                From grafted fruit varieties to forest species, every plant undergoes strict quality control measures 
                before reaching our customers.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-card rounded-lg">
                  <div className="text-2xl font-bold text-primary">1000+</div>
                  <div className="text-sm text-muted-foreground">Plant Varieties</div>
                </div>
                <div className="text-center p-4 bg-card rounded-lg">
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Expert Team</div>
                </div>
              </div>
            </div>
            <div className="lg:order-1">
              <img
                src="/lovable-uploads/c2610a9e-0f83-4d6c-beda-3aa513352719.png"
                alt="Quality Plants"
                className="w-full h-[400px] object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Why Choose Us
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Your Trusted Green Partner
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              With over 18 years of excellence, we're central India's largest and most reliable nursery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of satisfied customers who trust Majitha Floriculture Nursery
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Enquire Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/gallery">View Gallery</Link>
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;