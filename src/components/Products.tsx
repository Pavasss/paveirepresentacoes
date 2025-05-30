
import {
  Coffee,
  Package,
  CupSoda,
  ShoppingBag,
  Shirt,
  Hand,
  Layers,
  RectangleHorizontal
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
      name: "Sacolas",
      icon: <ShoppingBag className="h-10 w-10 text-brand-orange" />,
      description: "Sacolas resistentes em diversos tamanhos para transporte de produtos.",
    },
    {
      name: "Bobinas",
      icon: <Layers className="h-10 w-10 text-brand-orange" />,
      description: "Bobinas de alta qualidade para embalagem e proteção de produtos.",
    },
    {
      name: "Marmitas",
      icon: <Package className="h-10 w-10 text-brand-orange" />,
      description: "Marmitas e embalagens para delivery e transporte de alimentos.",
    },
    {
      name: "Canudos",
      icon: <CupSoda className="h-10 w-10 text-brand-orange" />,
      description: "Canudos descartáveis e ecológicos para bebidas, em diversos tamanhos.",
    },
    {
      name: "Copos",
      icon: <Coffee className="h-10 w-10 text-brand-orange" />,
      description: "Copos descartáveis de diversos tamanhos e materiais para bebidas quentes e frias.",
    },
    {
      name: "Bandejas",
      icon: <RectangleHorizontal className="h-10 w-10 text-brand-orange" />,
      description: "Bandejas práticas e resistentes para servir e apresentar alimentos.",
    },
    {
      name: "Panos",
      icon: <Shirt className="h-10 w-10 text-brand-orange" />,
      description: "Panos de limpeza e higienização para ambientes comerciais.",
    },
    {
      name: "Luvas",
      icon: <Hand className="h-10 w-10 text-brand-orange" />,
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
