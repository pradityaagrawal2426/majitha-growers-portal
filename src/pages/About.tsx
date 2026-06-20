import Header from "@/components/Header";
import Footer from "@/components/Footer";
import About from "@/components/About";
import PhotoStrip from "@/components/PhotoStrip";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <About />
      <PhotoStrip
        subtitle="Our Nursery"
        title="Where Quality Plants Are Grown"
        images={[
          { src: "/lovable-uploads/36b1721e-5787-4418-a6d8-7cf7367a5bdc.png", alt: "Nursery overview", caption: "Infrastructure" },
          { src: "/lovable-uploads/f047e4c7-74ff-4188-96ec-8db5d97688ad.png", alt: "Open field cultivation", caption: "Field Cultivation" },
          { src: "/lovable-uploads/c2610a9e-0f83-4d6c-beda-3aa513352719.png", alt: "Nursery fields", caption: "20 Acres" },
        ]}
      />
      <Footer />
    </div>
  );
};

export default AboutPage;