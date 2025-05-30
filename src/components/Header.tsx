
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useLocation, useNavigate } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const navLinks = [{
    name: "Início",
    to: "home"
  }, {
    name: "Quem Somos",
    to: "about"
  }, {
    name: "Produtos",
    to: "products"
  }, {
    name: "Empresas",
    to: "companies"
  }, {
    name: "Contato",
    to: "contact"
  }];

  const carouselImages = [
    { src: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=1200", alt: "Embalagens sustentáveis" },
    { src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1200", alt: "Soluções em embalagens" },
    { src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200", alt: "Produtos de qualidade" },
    { src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1200", alt: "Inovação em embalagens" },
    { src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1200", alt: "Tecnologia em embalagens" }
  ];

  const handleNavigation = (sectionId: string) => {
    if (isHomePage) {
      // Use react-scroll for smooth scrolling on home page
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // Navigate to home page with section hash
      navigate(`/#${sectionId}`);
    }
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"}`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => navigate('/')}>
          <img 
            src="/lovable-uploads/a3d96ac5-b8bf-48ad-947a-670dbf941be9.png" 
            alt="Pavei Representações" 
            className="h-16 md:h-20"
          />
          <h1 className="text-xl md:text-2xl font-bold font-poppins text-brand-darkBlue">
            Pavei Representações
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => (
            <button
              key={link.name}
              onClick={() => handleNavigation(link.to)}
              className="font-inter text-gray-700 hover:text-brand-blue font-medium cursor-pointer transition-colors"
            >
              {link.name}
            </button>
          ))}
          <Button className="bg-brand-blue hover:bg-brand-darkBlue text-white">
            <button onClick={() => handleNavigation("contact")}>
              Fale Conosco
            </button>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none" aria-label="Toggle Menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 py-4 px-4">
          <nav className="flex flex-col space-y-4">
            {navLinks.map(link => (
              <button
                key={link.name}
                onClick={() => handleNavigation(link.to)}
                className="font-inter text-gray-700 hover:text-brand-blue px-4 py-2 rounded-md transition-colors text-left"
              >
                {link.name}
              </button>
            ))}
            <Button className="bg-brand-blue hover:bg-brand-darkBlue text-white w-full">
              <button
                onClick={() => handleNavigation("contact")}
                className="w-full"
              >
                Fale Conosco
              </button>
            </Button>
          </nav>
        </div>}

      {/* Carousel de imagens na parte inferior do cabeçalho */}
      <div className={`transition-all duration-300 ${scrolled ? "hidden" : "block"}`}>
        <div className="container mx-auto px-4 md:px-6 mt-4">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent>
              {carouselImages.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                  <div className="p-1">
                    <div className="relative overflow-hidden rounded-lg shadow-md h-32 md:h-40">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </header>
  );
};

export default Header;
