import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

type CompanyProduct = {
  company: string;
  logo: string;
  categories: string[];
};

const CompanyProducts = () => {
  const companyProducts: CompanyProduct[] = [
    {
      company: "Liplast",
      logo: "/lovable-uploads/4728399f-477e-431b-aa72-21744815b3e7.png",
      categories: ["Sacola Reciclada", "Saco de Lixo"]
    },
    {
      company: "Libreplast", 
      logo: "/lovable-uploads/e2adbeea-74fd-47ed-81d5-5f38e7b22a1e.png",
      categories: ["Sacola Virgem", "Sacola Impressa", "Saco de Lixo", "Bobina Picotada"]
    },
    {
      company: "P.Plast",
      logo: "/lovable-uploads/5a78da6c-6b3b-4daf-8c8e-d76947e47e5c.png",
      categories: ["Para Confeitaria: Pote e Bandeja"]
    },
    {
      company: "Totalplast",
      logo: "/lovable-uploads/cff86a8a-2590-41e6-af53-6372835c2641.png", 
      categories: [
        "Linha XPS: Marmitex, Bandeja, Hamburgueira, Disco, Frangueira e Prato",
        "Linha PP: Kit Pote e Copo",
        "Linha EPS: Copo Térmico e Pote Térmico", 
        "Linha PS: Copo, Prato e Pote"
      ]
    },
    {
      company: "Vabene",
      logo: "/lovable-uploads/ce391618-da4c-437b-8b32-3e4946090153.png",
      categories: [
        "Pano, Luva, Touca, Máscara, Avental",
        "Rolo Alumínio, Filme PVC, Saco Zip",
        "Espeto, Palito de Dente"
      ]
    },
    {
      company: "Magitus",
      logo: "/lovable-uploads/b950299d-8d72-4465-9a9a-64145b434959.png",
      categories: ["Para festas: Talheres, Copos e Taças"]
    },
    {
      company: "Plastsul",
      logo: "/lovable-uploads/efd0f605-d8f6-47bd-8f0d-418d1591dfbd.png",
      categories: ["Canudo"]
    },
    {
      company: "Magipack",
      logo: "/lovable-uploads/9a7a52f1-0ebf-492c-82d4-e04fe7cbb30a.png",
      categories: ["Filme Stretch"]
    },
    {
      company: "Guarufilme",
      logo: "/lovable-uploads/852cd3a3-5bd3-4f6c-b8e0-28314c83f5eb.png",
      categories: ["Filme PVC Industrial", "Filme PVC Doméstico"]
    },
    {
      company: "Thermoflexo",
      logo: "/lovable-uploads/87a59662-6473-4aec-9e38-37ecf067dbe7.png",
      categories: [
        "Bobina Térmica ECF/PDV, Bobina Ribbon",
        "Cartaz de Oferta",
        "Etiqueta p/ Gôndola, Etiqueta p/ Precificação"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-brand-blue mb-6">
            Nossos Parceiros
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Trabalhamos com as melhores empresas do mercado para oferecer produtos de alta qualidade
          </p>
          <div className="flex justify-center mt-6">
            <div className="w-24 h-1 bg-gradient-to-r from-brand-orange to-yellow-400 rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {companyProducts.map((company, index) => (
            <div 
              key={index} 
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Header with logo */}
              <div className="relative p-8 pb-6 text-center">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-brand-orange/5 rounded-t-2xl"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-xl shadow-md flex items-center justify-center">
                    <img 
                      src={company.logo} 
                      alt={`${company.company} logo`}
                      className="h-12 w-auto object-contain"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-blue group-hover:text-brand-orange transition-colors duration-300">
                    {company.company}
                  </h3>
                </div>
              </div>

              {/* Products list */}
              <div className="px-8 pb-8">
                <div className="space-y-3">
                  {company.categories.map((category, catIndex) => (
                    <div 
                      key={catIndex}
                      className="relative overflow-hidden bg-gradient-to-r from-gray-50 to-blue-50 p-4 rounded-xl border border-gray-200 hover:border-brand-orange/30 transition-all duration-300 group/item"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-brand-orange/0 to-brand-orange/5 transform scale-x-0 group-hover/item:scale-x-100 transition-transform duration-300 origin-left"></div>
                      <p className="relative z-10 text-sm text-gray-700 font-medium leading-relaxed">
                        {category}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative element */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-br from-brand-orange to-yellow-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-brand-blue to-blue-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <span>Conheça todos os nossos produtos</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyProducts;
