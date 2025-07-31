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
      
      {/* Director's Message Section */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              Director's Message
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Welcome to Our Green World
            </h2>
            <div className="bg-card p-8 rounded-lg shadow-lg border-l-4 border-primary">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                At Majitha Floriculture Nursery, we don't just grow plants — we grow life, color, and sustainability. 
                Every leaf, every bloom, every root we nurture carries our promise: to bring nature closer to you in the 
                most responsible, beautiful, and innovative way possible.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We believe horticulture is not just an industry — it's a living art. Whether you're a home gardener, 
                a landscape designer, or a business seeking eco-friendly solutions, we're here to turn your spaces into 
                thriving green experiences.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Thank you for trusting us. Let's grow together.
              </p>
              <div className="text-right">
                <p className="font-semibold text-foreground">Warm regards,</p>
                <p className="text-primary font-bold text-xl">Nitin Agrawal</p>
                <p className="text-sm text-muted-foreground italic">Director</p>
              </div>
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
              <Link to="/contact">Get Quote Now</Link>
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