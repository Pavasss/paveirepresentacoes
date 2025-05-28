
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
      logo: "/lovable-uploads/6064741c-7a3c-48cb-a8de-8531f1c6b6ed.png",
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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-brand-blue mb-4">
            Produtos por Empresa
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Conheça as principais categorias de produtos de cada uma das nossas empresas representadas.
          </p>
          <div className="h-1 w-20 bg-brand-orange mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {companyProducts.map((company, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow h-full">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <img 
                    src={company.logo} 
                    alt={`${company.company} logo`}
                    className="h-16 w-auto object-contain"
                  />
                </div>
                <CardTitle className="text-xl font-bold text-brand-blue">
                  {company.company}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-2">
                  {company.categories.map((category, catIndex) => (
                    <div 
                      key={catIndex}
                      className="bg-brand-lightGray p-3 rounded-lg text-sm text-gray-700"
                    >
                      {category}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyProducts;
