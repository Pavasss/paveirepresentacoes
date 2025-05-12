
import { Instagram, Facebook, Linkedin, Mail } from "lucide-react";
import { Link } from "react-scroll";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-brand-gray text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold font-poppins mb-4">Pavei Representações</h3>
            <p className="text-gray-300 mb-4 font-inter">
              Representação comercial especializada em produtos de embalagens descartáveis.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-brand-blue transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-brand-blue transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-brand-blue transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:contato@paveirepresentacoes.com.br" className="text-white hover:text-brand-blue transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold font-poppins mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {[
                { name: "Início", to: "home" },
                { name: "Quem Somos", to: "about" },
                { name: "Produtos", to: "products" },
                { name: "Empresas", to: "companies" },
                { name: "Contato", to: "contact" }
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold font-poppins mb-4">Contato</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Telefone: (51) 98089-1199</li>
              <li>WhatsApp: (51) 98089-1199</li>
              <li>Email: contato@paveirepresentacoes.com.br</li>
              <li>Rio Grande do Sul - RS</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© {currentYear} Pavei Representações. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
