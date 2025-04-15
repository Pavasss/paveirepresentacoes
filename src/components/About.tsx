
import { LucideBuilding, CheckCircle } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-brand-gray mb-4">
            Quem Somos
          </h2>
          <div className="h-1 w-20 bg-brand-blue mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-brand-blue/10 flex items-center justify-center">
                <LucideBuilding size={100} className="text-brand-blue" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                <p className="font-poppins font-bold text-brand-gray">
                  Anos de experiência e um portfólio sólido
                </p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed font-inter">
              Somos uma representação comercial especializada em produtos de embalagens descartáveis. 
              Atendemos empresas de diversos setores com excelência, pontualidade e profundo 
              conhecimento do mercado.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed font-inter">
              Nosso compromisso é conectar indústrias renomadas a distribuidores e varejistas 
              que valorizam qualidade, variedade e atendimento profissional.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed font-inter">
              Com anos de experiência e um portfólio sólido, nos tornamos referência na 
              intermediação entre grandes marcas e clientes exigentes.
            </p>
            
            <div className="flex flex-col space-y-3 pt-4">
              <div className="flex items-center">
                <CheckCircle className="mr-2 h-5 w-5 text-brand-blue" />
                <span className="font-medium text-gray-800">Atendimento personalizado</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="mr-2 h-5 w-5 text-brand-blue" />
                <span className="font-medium text-gray-800">Produtos de alta qualidade</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="mr-2 h-5 w-5 text-brand-blue" />
                <span className="font-medium text-gray-800">Suporte técnico especializado</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
