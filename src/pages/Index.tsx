import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Products from "../components/Products";
import Companies from "../components/Companies";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Products />
      <Companies />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
