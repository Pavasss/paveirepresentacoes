
import { Card, CardContent } from "./ui/card";

type ProductCategory = {
  name: string;
  icon: JSX.Element;
  description: string;
};

const Products = () => {
  const categories: ProductCategory[] = [
    {
      name: "Sacolas",
      icon: <img src="/lovable-uploads/9fcd58d6-fd83-4d54-8cfa-acbe179a203d.png" alt="Sacolas" className="h-10 w-10" />,
      description: "Sacolas resistentes em diversos tamanhos para transporte de produtos.",
    },
    {
      name: "Bobinas",
      icon: <img src="/lovable-uploads/4cc73409-6393-4254-a562-0dd71d8bb02e.png" alt="Bobinas" className="h-10 w-10" />,
      description: "Bobinas de alta qualidade para embalagem e proteção de produtos.",
    },
    {
      name: "Marmitas",
      icon: <img src="/lovable-uploads/bd3ca14d-eee7-43ea-aeac-9c1b94b64285.png" alt="Marmitas" className="h-10 w-10" />,
      description: "Marmitas e embalagens para delivery e transporte de alimentos.",
    },
    {
      name: "Canudos",
      icon: <img src="/lovable-uploads/199bfff6-bcf2-4f46-801e-d7ad81f1e8de.png" alt="Canudos" className="h-10 w-10" />,
      description: "Canudos descartáveis e ecológicos para bebidas, em diversos tamanhos.",
    },
    {
      name: "Copos",
      icon: <img src="/lovable-uploads/237bc5c5-d161-4c99-9ee8-9193ab7f4a23.png" alt="Copos" className="h-10 w-10" />,
      description: "Copos descartáveis de diversos tamanhos e materiais para bebidas quentes e frias.",
    },
    {
      name: "Bandejas",
      icon: <img src="/lovable-uploads/d20ecd65-cab6-4f4c-aa50-44756d350728.png" alt="Bandejas" className="h-10 w-10" />,
      description: "Bandejas práticas e resistentes para servir e apresentar alimentos.",
    },
    {
      name: "Panos",
      icon: <img src="/lovable-uploads/c5c721a2-9a5e-4249-8744-07f63843d0e6.png" alt="Panos" className="h-10 w-10" />,
      description: "Panos de limpeza e higienização para ambientes comerciais.",
    },
    {
      name: "Luvas",
      icon: <img src="/lovable-uploads/0e60ad64-e0ed-4a65-bc9b-cb03461317f0.png" alt="Luvas" className="h-10 w-10" />,
      description: "Luvas descartáveis para manipulação segura de alimentos e produtos.",
    },
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-brand-gray mb-4">
            Produtos que Vendemos
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Oferecemos uma linha completa de produtos descartáveis e embalagens de alta qualidade para atender às necessidades do seu negócio.
          </p>
          <div className="h-1 w-20 bg-brand-orange mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div key={index} className="transform transition-transform hover:-translate-y-2 duration-300">
              <Card className="h-full border-0 shadow-md hover:shadow-xl transition-shadow bg-white">
                <CardContent className="p-6 flex flex-col items-center text-center h-full">
                  <div className="mb-4 p-4 bg-brand-orange/10 rounded-full">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-bold font-poppins text-brand-gray mb-3">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 font-inter text-sm leading-relaxed">
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-600 italic text-lg">
            "Qualidade e praticidade em cada produto para o seu negócio crescer."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Products;
