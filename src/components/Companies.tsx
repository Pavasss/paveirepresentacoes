
import { Card, CardContent } from "./ui/card";
import { Building2 } from "lucide-react";
import { companiesData } from "../data/companies";

const Companies = () => {
  const companies = companiesData.map(company => ({
    id: company.id,
    name: company.name,
    logo: company.logo
  }));

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
