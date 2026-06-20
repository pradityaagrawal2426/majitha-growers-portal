import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Credentials from "@/components/Credentials";
import PhotoStrip from "@/components/PhotoStrip";

const CredentialsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Credentials />
      <PhotoStrip
        subtitle="Infrastructure"
        title="Backed by Modern Facilities"
        images={[
          { src: "/lovable-uploads/9bf8ba29-3b22-40b0-9673-c4816dcb9fcd.png", alt: "Tissue culture lab", caption: "Tissue Culture" },
          { src: "/lovable-uploads/9e250fa8-3b9d-4ac2-94e6-7e3e3b7ba878.png", alt: "Greenhouse facility", caption: "Greenhouses" },
          { src: "/lovable-uploads/16691c7f-49ab-4390-8517-23085bfc5ec3.png", alt: "Young saplings", caption: "Quality Saplings" },
        ]}
      />
      <Footer />
    </div>
  );
};

export default CredentialsPage;