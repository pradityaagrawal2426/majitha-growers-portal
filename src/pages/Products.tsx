import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Leaf, TreePine, Flower, Sprout } from "lucide-react";
import { Link } from "react-router-dom";
import ornamentalImg from "@/assets/ornamental-plants.jpg";
import forestryImg from "@/assets/forestry-plants.jpg";
import indianNurseryImg from "@/assets/indian-nursery-1.jpg";
import plantationImg from "@/assets/indian-plantation-2.jpg";

const Products = () => {
  const productCategories = [
    {
      title: "Grafted Fruit Plants™",
      icon: <Leaf className="h-8 w-8 text-primary" />,
      image: indianNurseryImg,
      varieties: [
        "Mango (Alphonso, Kesar, Dasheri, Langra)",
        "Guava (Allahabad Safeda, L-49)",
        "Lemon (Kagzi, Malta)",
        "Cheeku (Cricket Ball, Kalipatti)",
        "Jamun (Ra Jamun)",
        "Sitafal (Balanagar)",
        "Amla (NA-7, Chakaiya)"
      ],
      description: "Premium quality grafted fruit plants with assured variety and early fruiting"
    },
    {
      title: "Forestry Plants™",
      icon: <TreePine className="h-8 w-8 text-primary" />,
      image: forestryImg,
      varieties: [
        "Teak (Premium Quality)",
        "Karanj (Pongamia)",
        "Neem (Margosa)",
        "Bargad (Banyan)",
        "Peepal (Sacred Fig)",
        "Alstonia (Devil Tree)",
        "Gulmohar (Flame Tree)",
        "Eucalyptus",
        "Subabul",
        "Seesham"
      ],
      description: "Native Indian forest species for afforestation and environmental restoration"
    },
    {
      title: "Tissue Culture Plants™",
      icon: <Sprout className="h-8 w-8 text-primary" />,
      image: plantationImg,
      varieties: [
        "Bamboo (Balcooa, Tulda)",
        "Burma Teak (High Quality)",
        "Banana G-9 (Tissue Culture)",
        "Date Palm",
        "Coconut (Dwarf Variety)"
      ],
      description: "Advanced tissue culture plants ensuring disease-free and uniform growth"
    },
    {
      title: "Ornamental Varieties™",
      icon: <Flower className="h-8 w-8 text-primary" />,
      image: ornamentalImg,
      varieties: [
        "Flowering Plants (Roses, Marigold, Jasmine)",
        "Ground Covers (Duranta, Ixora)",
        "Grasses (Dwarf varieties)",
        "Palms (Bottle Palm, Areca)",
        "Herbs & Medicinal Plants",
        "Shrubs (Hibiscus, Bougainvillea)",
        "Indoor Plants",
        "Seasonal Flowers"
      ],
      description: "Beautiful ornamental plants for landscaping and garden decoration"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary/10 to-forest-green/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6">
              Plant Nursery Products
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Premium Quality Plants™
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Discover our extensive collection of 1000+ plant varieties, carefully cultivated 
              with 18+ years of horticultural expertise. From grafted fruit plants to forestry 
              species, we offer the finest quality plants for all your gardening and landscaping needs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">1000+</div>
                <div className="text-sm text-muted-foreground">Plant Varieties</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">20</div>
                <div className="text-sm text-muted-foreground">Acres Coverage</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">18+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Quality Assured</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {productCategories.map((category, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-primary/10 rounded-full mr-4">
                      {category.icon}
                    </div>
                    <h2 className="text-3xl font-bold text-foreground">{category.title}</h2>
                  </div>
                  <p className="text-lg text-muted-foreground mb-6">{category.description}</p>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Available Varieties:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {category.varieties.map((variety, idx) => (
                        <div key={idx} className="flex items-center">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                          <span className="text-muted-foreground">{variety}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Button asChild className="bg-primary hover:bg-primary/90">
                    <Link to="/contact">Enquire Now</Link>
                  </Button>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="relative rounded-lg overflow-hidden shadow-2xl">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-[400px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Quality Assurance™
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Every plant at Majitha Floriculture™ Nursery undergoes rigorous quality checks 
            and is backed by our commitment to excellence and customer satisfaction.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <CardTitle>✓ Disease-Free Plants</CardTitle>
              </CardHeader>
              <CardContent>
                <p>All plants are carefully inspected and treated to ensure they are free from diseases and pests.</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <CardTitle>✓ Guaranteed Varieties</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Each plant comes with variety guarantee and detailed care instructions.</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <CardTitle>✓ Expert Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Our team of 50+ trained professionals provides ongoing support and guidance.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;