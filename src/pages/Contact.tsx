import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import PhotoStrip from "@/components/PhotoStrip";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Contact />
      <PhotoStrip
        subtitle="Visit Us"
        title="Step Into Our Green World"
        images={[
          { src: "/lovable-uploads/530663b4-4661-4da5-9f5d-bedba95be6a2.png", alt: "Nursery pathway with palm trees", caption: "Welcoming Avenue" },
          { src: "/lovable-uploads/9e250fa8-3b9d-4ac2-94e6-7e3e3b7ba878.png", alt: "Greenhouse with saplings", caption: "Greenhouse" },
          { src: "/lovable-uploads/aae05f68-b538-4639-9117-ba76033b243a.png", alt: "Fresh guava on tree", caption: "Fruit Plants" },
        ]}
      />
      <Footer />
    </div>
  );
};

export default ContactPage;