import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, Leaf, Award, Building2, Calendar } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Calendar,
      title: "Established 2007",
      description: "18+ years of horticultural excellence"
    },
    {
      icon: MapPin,
      title: "20 Acres",
      description: "Lush, meticulously cultivated land"
    },
    {
      icon: Users,
      title: "50+ Professionals",
      description: "Trained and experienced team"
    },
    {
      icon: Leaf,
      title: "1000+ Varieties",
      description: "Plants and trees available"
    },
    {
      icon: Award,
      title: "Star-Rated",
      description: "Accredited by National Horticulture Board"
    },
    {
      icon: Building2,
      title: "Big Model Nursery",
      description: "Registered under National Horticulture Mission"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            About Our Legacy
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Central India's Premier Nursery
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Located in the heart of India's marble city—Bhedaghat, Jabalpur (Madhya Pradesh), 
            we are the largest, most reliable, eco-conscious, and distinguished nursery in central India.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Story */}
          <div>
            <h3 className="text-3xl font-bold mb-6 text-foreground">Our Story</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Majitha Floriculture Nursery, established in 2007, stands as a hallmark of quality, 
                trust, and green innovation. With over 18 years of horticultural distinction, we take 
                immense pride in being the largest nursery in central India.
              </p>
              <p>
                Spanning over 20 acres of lush, meticulously cultivated land, we have built our 
                reputation on delivering the healthiest, highest-quality plants through sustainable 
                and innovative nursery practices.
              </p>
              <p>
                Our mission is to nurture and enhance India's green cover by being your trusted 
                partner for large-scale, eco-conscious plantation projects.
              </p>
            </div>
          </div>

          {/* Beautiful Nursery Image */}
          <div className="relative">
            <img
              src="/lovable-uploads/530663b4-4661-4da5-9f5d-bedba95be6a2.png"
              alt="Beautiful nursery pathway with palm trees"
              className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
        </div>

        {/* Additional Visual Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative lg:order-2">
            <img
              src="/lovable-uploads/9e250fa8-3b9d-4ac2-94e6-7e3e3b7ba878.png"
              alt="Greenhouse with young plant saplings"
              className="w-full h-[350px] object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
          
          <div className="lg:order-1">
            <h3 className="text-3xl font-bold mb-6 text-foreground">State-of-the-Art Facilities</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Our advanced greenhouse facilities and tissue culture laboratory ensure optimal 
                growing conditions for all plant varieties. We employ modern irrigation systems, 
                climate control, and scientific growing methods.
              </p>
              <p>
                Every plant is carefully monitored and nurtured by our team of 50+ trained 
                professionals who bring decades of combined expertise in horticulture and 
                plant care.
              </p>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
          {highlights.map((highlight, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <highlight.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold mb-2 text-foreground">{highlight.title}</h4>
                <p className="text-sm text-muted-foreground">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-l-4 border-l-primary">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To nurture and enhance India's green cover by delivering the healthiest, 
                highest-quality plants through sustainable and innovative nursery practices. 
                We are committed to creating lush landscapes, sustainable environments, 
                and future-ready green belts.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-accent">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the leading force in transforming India's environmental landscape 
                through excellence in horticulture, making every space greener, 
                healthier, and more beautiful for future generations.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;