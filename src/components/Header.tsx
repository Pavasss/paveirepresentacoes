
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  const navLinks = [
    {
      name: "Início",
      to: "home"
    },
    {
      name: "Quem Somos",
      to: "about"
    },
    {
      name: "Produtos",
      to: "products"
    },
    {
      name: "Empresas",
      to: "companies"
    },
    {
      name: "Contato",
      to: "contact"
    }
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/f9659b1f-5d70-40fd-a4bb-486a12a36db0.png" 
            alt="Pavei Representações Logo" 
            className="h-12 md:h-14"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => (
            <Link
              key={link.name}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="font-inter text-gray-700 hover:text-brand-blue font-medium cursor-pointer transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Button className="bg-brand-blue hover:bg-brand-darkBlue text-white">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              Fale Conosco
            </Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 py-4 px-4">
          <nav className="flex flex-col space-y-4">
            {navLinks.map(link => (
              <Link
                key={link.name}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="font-inter text-gray-700 hover:text-brand-blue px-4 py-2 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button className="bg-brand-blue hover:bg-brand-darkBlue text-white w-full">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="w-full"
              >
                Fale Conosco
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
