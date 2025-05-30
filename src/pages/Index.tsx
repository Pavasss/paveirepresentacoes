
import Header from "../components/Header";
import Hero from "../components/Hero";
import ImageCarousel from "../components/ImageCarousel";
import About from "../components/About";
import Products from "../components/Products";
import Companies from "../components/Companies";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ImageCarousel />
      <About />
      <Products />
      <Companies />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
