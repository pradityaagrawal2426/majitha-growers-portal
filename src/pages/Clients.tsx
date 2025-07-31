import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Users, Landmark, TreePine, Hammer, Zap, Heart, Mountain, GraduationCap, Factory, Dam } from "lucide-react";

const Clients = () => {
  const clients = [
    {
      icon: <TreePine className="h-8 w-8 text-primary" />,
      name: "Madhya Pradesh Horticulture Department",
      description: "Government horticulture projects and initiatives"
    },
    {
      icon: <Building className="h-8 w-8 text-primary" />,
      name: "Zila / Nagar Panchayat",
      description: "District and municipal corporation projects"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      name: "Janpad Panchayat",
      description: "Block level government institutions"
    },
    {
      icon: <TreePine className="h-8 w-8 text-primary" />,
      name: "Forest Department",
      description: "Forestry and conservation projects"
    },
    {
      icon: <Landmark className="h-8 w-8 text-primary" />,
      name: "Mahatma Gandhi National Rural Employment Guarantee Scheme",
      description: "Rural employment and development programs"
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-primary" />,
      name: "Jawahar Lal Nehru Krishi Vishwa Vidhyalaya",
      description: "Agricultural university projects"
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      name: "Power Plant",
      description: "Power generation facility landscaping"
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      name: "NGO's",
      description: "Non-governmental organizations"
    },
    {
      icon: <Mountain className="h-8 w-8 text-primary" />,
      name: "Mines",
      description: "Mining industry rehabilitation projects"
    },
    {
      icon: <Dam className="h-8 w-8 text-primary" />,
      name: "Dams",
      description: "Water reservoir projects"
    },
    {
      icon: <Factory className="h-8 w-8 text-primary" />,
      name: "Various Institutes",
      description: "Educational and research institutions"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Our Valued Partners
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Clients of Majitha Nursery
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Trusted by government departments, institutions, and organizations across India for quality plant supply and landscaping solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clients.map((client, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-l-primary">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    {client.icon}
                  </div>
                  <CardTitle className="text-lg">{client.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">{client.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="mt-20 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Why Government & Institutions Trust Us
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">18+</div>
                  <p className="text-muted-foreground">Years of Excellence</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                  <p className="text-muted-foreground">Plant Varieties</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <p className="text-muted-foreground">Expert Professionals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Clients;