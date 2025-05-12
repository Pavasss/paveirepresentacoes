import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-scroll";
const Hero = () => {
  return <section id="home" className="relative h-screen flex items-center bg-gradient-to-r from-gray-50 to-blue-50">
      <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1612014207052-56f7b5584d0e?q=80&w=2070')] bg-cover bg-center opacity-20"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins text-brand-gray mb-6 leading-tight">
              Representamos qualidade, confiança e as melhores marcas do mercado de embalagens.
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 font-inter">
              Soluções em embalagens com quem entende do assunto. Representamos as melhores marcas do mercado para oferecer a você o que há de mais confiável e prático.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-brand-blue hover:bg-brand-darkBlue text-white">
                <Link to="products" spy={true} smooth={true} offset={-80} duration={500} className="flex items-center">
                  Conheça nossas soluções
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white">
                <Link to="contact" spy={true} smooth={true} offset={-80} duration={500} className="flex items-center">
                  Fale conosco
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="hidden md:block animate-fade-in-up">
            <img alt="Embalagens de qualidade" className="rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300" src="/lovable-uploads/f95b4254-2fb5-4b84-be3c-d13b93600f43.png" />
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;