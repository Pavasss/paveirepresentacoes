
import {
  Coffee,
  Utensils,
  CupSoda,
  Package,
  Thermometer,
  LayoutGrid
} from "lucide-react";
import { Card, CardContent } from "./ui/card";

type ProductCategory = {
  name: string;
  icon: JSX.Element;
  description: string;
};

const Products = () => {
  const categories: ProductCategory[] = [
    {
      name: "Copos",
      icon: <Coffee className="h-10 w-10 text-brand-orange" />,
      description: "Copos descartáveis de diversos tamanhos e materiais para bebidas quentes e frias.",
    },
    {
      name: "Talheres",
      icon: <Utensils className="h-10 w-10 text-brand-orange" />,
      description: "Talheres descartáveis resistentes e de alta qualidade para diversos usos.",
    },
    {
      name: "Canudos",
      icon: <CupSoda className="h-10 w-10 text-brand-orange" />,
      description: "Canudos descartáveis e ecológicos para bebidas, em diversos tamanhos.",
    },
    {
      name: "Marmitas",
      icon: <Package className="h-10 w-10 text-brand-orange" />,
      description: "Marmitas e embalagens para delivery e transporte de alimentos.",
    },
    {
      name: "Embalagens térmicas",
      icon: <Thermometer className="h-10 w-10 text-brand-orange" />,
      description: "Embalagens especiais para manter a temperatura ideal dos alimentos.",
    },
    {
      name: "Filmes e bobinas plásticas",
      icon: <LayoutGrid className="h-10 w-10 text-brand-orange" />,
      description: "Materiais para embalar e conservar alimentos com segurança.",
    },
  ];

  return (
    <section id="products" className="py-20 bg-brand-lightGray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-brand-blue mb-4">
            Nossos Produtos
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Oferecemos uma ampla variedade de produtos para atender às necessidades do seu negócio.
          </p>
          <div className="h-1 w-20 bg-brand-orange mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="transform transition-transform hover:-translate-y-2 duration-300">
              <Card className="h-full border-t-4 border-t-brand-orange overflow-hidden bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-5 p-3 bg-brand-orange/10 rounded-full">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold font-poppins text-brand-blue mb-3">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 font-inter">
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
