import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      id: 1,
      src: "/lovable-uploads/36b1721e-5787-4418-a6d8-7cf7367a5bdc.png",
      alt: "Nursery Overview - Plant cultivation fields with greenhouse structures",
      category: "Infrastructure"
    },
    {
      id: 2,
      src: "/lovable-uploads/aae05f68-b538-4639-9117-ba76033b243a.png",
      alt: "Fresh Guava Fruit on Tree",
      category: "Fruit Plants"
    },
    {
      id: 3,
      src: "/lovable-uploads/530663b4-4661-4da5-9f5d-bedba95be6a2.png",
      alt: "Beautiful Nursery Pathway with Palm Trees",
      category: "Landscaping"
    },
    {
      id: 4,
      src: "/lovable-uploads/9e250fa8-3b9d-4ac2-94e6-7e3e3b7ba878.png",
      alt: "Greenhouse with Young Plant Saplings",
      category: "Infrastructure"
    },
    {
      id: 5,
      src: "/lovable-uploads/9bf8ba29-3b22-40b0-9673-c4816dcb9fcd.png",
      alt: "Tissue Culture Plant Production",
      category: "Tissue Culture"
    },
    {
      id: 6,
      src: "/lovable-uploads/f047e4c7-74ff-4188-96ec-8db5d97688ad.png",
      alt: "Open Field Plant Cultivation",
      category: "Field Cultivation"
    },
    {
      id: 7,
      src: "/lovable-uploads/16691c7f-49ab-4390-8517-23085bfc5ec3.png",
      alt: "Small Plant Saplings in Containers",
      category: "Young Plants"
    },
    {
      id: 8,
      src: "/lovable-uploads/f38c6e91-7f96-4091-a0f7-f673e97b7aff.png",
      alt: "Banana Plant Cultivation",
      category: "Fruit Plants"
    },
    {
      id: 9,
      src: "/lovable-uploads/5379eded-3b0c-4211-bdd6-5a86b8342fba.png",
      alt: "Container Plant Production",
      category: "Container Plants"
    },
    {
      id: 10,
      src: "/lovable-uploads/c2610a9e-0f83-4d6c-beda-3aa513352719.png",
      alt: "Nursery Field Overview",
      category: "Infrastructure"
    }
  ];

  const categories = ["All", "Infrastructure", "Fruit Plants", "Tissue Culture", "Field Cultivation", "Young Plants", "Container Plants", "Landscaping"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Our Gallery
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Majitha Nursery Gallery
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Explore our state-of-the-art nursery facilities, diverse plant varieties, and professional cultivation practices
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full transition-all ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-primary/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="relative">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge variant="secondary" className="mb-2">
                      {image.category}
                    </Badge>
                    <p className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      {image.alt}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl">
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Gallery Image"
              className="w-full h-auto rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Gallery;