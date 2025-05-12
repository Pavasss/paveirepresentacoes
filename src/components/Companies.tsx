
import { Card, CardContent } from "./ui/card";
import { Building2, ExternalLink } from "lucide-react";
import LibreplastLogo from "/lovable-uploads/e2adbeea-74fd-47ed-81d5-5f38e7b22a1e.png";
import LiplastLogo from "/lovable-uploads/4728399f-477e-431b-aa72-21744815b3e7.png";
import PPlastLogo from "/lovable-uploads/77d5dedc-0b4e-4553-bf55-b95f214978e6.png";
import TotalplastLogo from "/lovable-uploads/cff86a8a-2590-41e6-af53-6372835c2641.png";
import VabeneLogo from "/lovable-uploads/ce391618-da4c-437b-8b32-3e4946090153.png";
import MagitusLogo from "/lovable-uploads/b950299d-8d72-4465-9a9a-64145b434959.png";
import PlastsulLogo from "/lovable-uploads/efd0f605-d8f6-47bd-8f0d-418d1591dfbd.png";
import MagipackLogo from "/lovable-uploads/9a7a52f1-0ebf-492c-82d4-e04fe7cbb30a.png";
import GuarufilmeLogo from "/lovable-uploads/852cd3a3-5bd3-4f6c-b8e0-28314c83f5eb.png";
import ThermoflexoLogo from "/lovable-uploads/87a59662-6473-4aec-9e38-37ecf067dbe7.png";

const Companies = () => {
  const companies = [
    { name: "Libreplast", logo: LibreplastLogo, link: "https://www.libreplast.com.br/" },
    { name: "Liplast", logo: LiplastLogo, link: "https://www.liplast.com.br/" },
    { name: "Totalplast", logo: TotalplastLogo, link: "https://www.totalplast.com.br/" },
    { name: "Vabene", logo: VabeneLogo, link: "https://vabene.com.br/" },
    { name: "Plastsul", logo: PlastsulLogo, link: "https://plastsul.com.br/" },
    { name: "P.Plast", logo: PPlastLogo, link: "https://pplast.com.br/" },
    { name: "Magitus", logo: MagitusLogo, link: "https://www.magitus.com.br/" },
    { name: "Magipack", logo: MagipackLogo, link: "https://www.magipack.com.br/" },
    { name: "Guarufilme", logo: GuarufilmeLogo, link: "https://www.guarufilme.com.br/novosite/" },
    { name: "Thermoflexo", logo: ThermoflexoLogo, link: "https://thermoflexo.com.br/" }
  ];

  return (
    <section id="companies" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-brand-gray mb-4">
            Empresas Representadas
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Temos orgulho de representar empresas líderes no segmento de embalagens descartáveis,
            reconhecidas nacionalmente pela inovação, qualidade e compromisso com o cliente:
          </p>
          <div className="h-1 w-20 bg-brand-blue mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {companies.map((company, index) => (
            <div key={index} className="transform transition-all hover:scale-105 duration-300">
              <Card className="h-full bg-white border border-gray-200 hover:shadow-md hover:border-brand-blue transition-all">
                <CardContent className="p-6 flex flex-col items-center justify-center text-center h-full">
                  {company.logo ? (
                    <img 
                      src={company.logo} 
                      alt={`${company.name} logo`} 
                      className="max-h-20 max-w-full object-contain mb-3" 
                    />
                  ) : (
                    <Building2 className="h-10 w-10 text-brand-blue mb-3" />
                  )}
                  <h3 className="text-lg font-bold font-poppins text-brand-gray">
                    {company.name}
                  </h3>
                  {company.link && (
                    <a
                      href={company.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 flex items-center text-brand-blue hover:text-brand-darkBlue text-sm transition-colors"
                    >
                      Visitar site <ExternalLink size={14} className="ml-1" />
                    </a>
                  )}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-600 italic">
            "Trabalhamos com as melhores marcas para garantir a qualidade que o seu negócio merece."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Companies;
