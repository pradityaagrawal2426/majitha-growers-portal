import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";

const HomeContent = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

export default HomeContent;