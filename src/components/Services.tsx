import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Apple, TreePine, Microscope, Flower, Building, Truck } from "lucide-react";

const Services = () => {
  const coreOfferings = [
    {
      icon: Apple,
      title: "Grafted Fruit Plants",
      description: "Premium quality fruit plants for optimal yield",
      items: ["Mango", "Guava", "Lemon", "Cheeku", "Jamun", "Sitafal", "Amla"],
      color: "bg-sunset-orange/10 text-sunset-orange"
    },
    {
      icon: TreePine,
      title: "Forestry Plants",
      description: "Native and exotic trees for large-scale plantation",
      items: ["Teak", "Karanj", "Neem", "Bargad", "Peepal", "Alstonia", "Gulmohar"],
      color: "bg-forest-green/10 text-forest-green"
    },
    {
      icon: Microscope,
      title: "Tissue Culture Plants",
      description: "Advanced biotechnology for superior plant quality",
      items: ["Bamboo (Balcooa, Tulda)", "Burma Teak", "Banana G-9"],
      color: "bg-primary/10 text-primary"
    },
    {
      icon: Flower,
      title: "Ornamental Varieties",
      description: "Beautiful plants for landscaping and decoration",
      items: ["Flowering plants", "Ground covers", "Grasses", "Palms", "Herbs", "Shrubs"],
      color: "bg-accent/20 text-accent-foreground"
    }
  ];

  const plantSupplyServices = [
    {
      icon: Building,
      title: "Government Projects",
      clients: ["Horticulture Department", "Forest Department", "Mining Projects", "Power Projects", "Zila/Janpad Panchayats", "MGNREGA", "Water Resource Development"]
    },
    {
      icon: Truck,
      title: "Private & Institutional",
      clients: ["Private Institutions", "Corporate Landscaping", "Residential Projects", "Commercial Spaces", "Educational Institutions"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Hero Section with Background Image */}
        <div className="relative mb-20 rounded-3xl overflow-hidden">
          <img
            src="/lovable-uploads/f047e4c7-74ff-4188-96ec-8db5d97688ad.png"
            alt="Open field plant cultivation"
            className="w-full h-[300px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
                Our Services
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Comprehensive Plant Solutions
              </h2>
              <p className="text-xl max-w-3xl mx-auto">
                From grafted fruit plants to large-scale forestry projects, we provide premium quality 
                plants and comprehensive services for all your green requirements.
              </p>
            </div>
          </div>
        </div>

        {/* Core Offerings */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">Core Offerings</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreOfferings.map((offering, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 rounded-full ${offering.color} flex items-center justify-center mx-auto mb-4`}>
                    <offering.icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl">{offering.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-center">{offering.description}</p>
                  <div className="space-y-2">
                    {offering.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center justify-center">
                        <Badge variant="secondary" className="text-xs">
                          {item}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Visual Showcase Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="relative">
              <img
                src="/lovable-uploads/aae05f68-b538-4639-9117-ba76033b243a.png"
                alt="Fresh guava fruit on tree"
                className="w-full h-[250px] object-cover rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-xl"></div>
              <div className="absolute bottom-4 left-4">
                <Badge className="bg-white/90 text-primary">Grafted Fruit Plants</Badge>
              </div>
            </div>
            <div className="relative">
              <img
                src="/lovable-uploads/9bf8ba29-3b22-40b0-9673-c4816dcb9fcd.png"
                alt="Tissue culture plant production"
                className="w-full h-[250px] object-cover rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-xl"></div>
              <div className="absolute bottom-4 left-4">
                <Badge className="bg-white/90 text-primary">Tissue Culture</Badge>
              </div>
            </div>
            <div className="relative">
              <img
                src="/lovable-uploads/16691c7f-49ab-4390-8517-23085bfc5ec3.png"
                alt="Small plant saplings in containers"
                className="w-full h-[250px] object-cover rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-xl"></div>
              <div className="absolute bottom-4 left-4">
                <Badge className="bg-white/90 text-primary">Young Plants</Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Plant Supply Services */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">Plant Supply Services</h3>
          <p className="text-center text-muted-foreground mb-12 max-w-4xl mx-auto">
            We specialize in the supply and cultivation of premium-quality plants, ideal for commercial, 
            governmental, institutional, and landscaping projects.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {plantSupplyServices.map((service, index) => (
              <Card key={index} className="border-l-4 border-l-primary">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-2">
                    {service.clients.map((client, clientIndex) => (
                      <div key={clientIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-muted-foreground">{client}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Special Features */}
        <div className="mt-20 bg-muted/50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">Why Choose Our Services?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h4 className="font-semibold mb-2">Multi-lakh Plant Inventory</h4>
              <p className="text-sm text-muted-foreground">Year-round availability of diverse plant varieties</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚚</span>
              </div>
              <h4 className="font-semibold mb-2">Timely Safe Delivery</h4>
              <p className="text-sm text-muted-foreground">Dense delivery logistics ensuring plant health</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚖️</span>
              </div>
              <h4 className="font-semibold mb-2">Flexible Project Handling</h4>
              <p className="text-sm text-muted-foreground">Both large and small projects with equal care</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;