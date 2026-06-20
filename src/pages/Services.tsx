import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import PhotoStrip from "@/components/PhotoStrip";

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Services />
      <PhotoStrip
        subtitle="Our Work"
        title="Plants We Cultivate & Supply"
        images={[
          { src: "/lovable-uploads/f38c6e91-7f96-4091-a0f7-f673e97b7aff.png", alt: "Banana plant cultivation", caption: "Banana G-9" },
          { src: "/lovable-uploads/5379eded-3b0c-4211-bdd6-5a86b8342fba.png", alt: "Container plants", caption: "Container Stock" },
          { src: "/lovable-uploads/50da42e3-6458-4feb-936d-5fc582fc8957.png", alt: "Premium nursery plants", caption: "Quality Assured" },
        ]}
      />
      <Footer />
    </div>
  );
};

export default ServicesPage;