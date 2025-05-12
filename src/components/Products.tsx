
import {
  Coffee,
  Utensils,
  CupSoda,
  Package,
  Thermometer,
  LayoutGrid
} from "lucide-react";
import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { AspectRatio } from "./ui/aspect-ratio";

type ProductCategory = {
  name: string;
  icon: JSX.Element;
  description: string;
};

const Products = () => {
  const categories: ProductCategory[] = [
    {
      name: "Copos",
      icon: <Coffee className="h-10 w-10 text-brand-blue" />,
      description: "Copos descartáveis de diversos tamanhos e materiais para bebidas quentes e frias.",
    },
    {
      name: "Talheres",
      icon: <Utensils className="h-10 w-10 text-brand-blue" />,
      description: "Talheres descartáveis resistentes e de alta qualidade para diversos usos.",
    },
    {
      name: "Canudos",
      icon: <CupSoda className="h-10 w-10 text-brand-blue" />,
      description: "Canudos descartáveis e ecológicos para bebidas, em diversos tamanhos.",
    },
    {
      name: "Marmitas",
      icon: <Package className="h-10 w-10 text-brand-blue" />,
      description: "Marmitas e embalagens para delivery e transporte de alimentos.",
    },
    {
      name: "Embalagens térmicas",
      icon: <Thermometer className="h-10 w-10 text-brand-blue" />,
      description: "Embalagens especiais para manter a temperatura ideal dos alimentos.",
    },
    {
      name: "Filmes e bobinas plásticas",
      icon: <LayoutGrid className="h-10 w-10 text-brand-blue" />,
      description: "Materiais para embalar e conservar alimentos com segurança.",
    },
  ];

  const productImages = [
    {
      src: "/lovable-uploads/21ee3aa8-d4da-4052-8415-b62025c40a75.png",
      alt: "Produtos Liplast - Sacolas recicladas e caixas",
      brand: "Liplast"
    },
    {
      src: "/lovable-uploads/2459c4d1-daad-403b-9194-ff17ef07f738.png",
      alt: "Produtos Guarufilme - Filmes de PVC transparente",
      brand: "Guarufilme"
    },
    {
      src: "/lovable-uploads/01c28d4d-93e9-4bc3-a705-7b65f1024e94.png",
      alt: "Produtos Vabene - Luvas, máscaras e produtos descartáveis",
      brand: "Vabene"
    },
    {
      src: "/lovable-uploads/e72dba66-8241-4d50-bf98-029092c98eed.png",
      alt: "Produtos Pplast - Embalagens transparentes para alimentos",
      brand: "Pplast"
    },
    {
      src: "/lovable-uploads/32a9e47a-923c-4c48-8dc4-5f2e092551d7.png",
      alt: "Produtos Libreplast - Sacolas e bobinas",
      brand: "Libreplast"
    },
    {
      src: "/lovable-uploads/bbb95605-97c2-45b6-9b4e-1eae7c934a1c.png",
      alt: "Produtos Totalplast - Copos, pratos e potes descartáveis",
      brand: "Totalplast"
    },
    {
      src: "/lovable-uploads/6deb6828-36a1-4ba9-81ef-016221e406dd.png",
      alt: "Produtos Magitus - Taças, pratos e talheres plásticos",
      brand: "Magitus"
    },
    {
      src: "/lovable-uploads/9649cb74-7ada-4ba8-b77b-fec997e44cee.png",
      alt: "Produtos Plastsul - Canudos ecológicos",
      brand: "Plastsul"
    }
  ];

  return (
    <section id="products" className="py-20 bg-brand-lightGray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-brand-gray mb-4">
            Nossos Produtos
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Oferecemos uma ampla variedade de produtos para atender às necessidades do seu negócio.
          </p>
          <div className="h-1 w-20 bg-brand-blue mx-auto mt-4"></div>
        </div>

        {/* Product Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {categories.map((category, index) => (
            <div key={index} className="transform transition-transform hover:-translate-y-2 duration-300">
              <Card className="h-full border-t-4 border-t-brand-blue overflow-hidden bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-5 p-3 bg-brand-blue/10 rounded-full">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold font-poppins text-brand-gray mb-3">
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

        {/* Product Images Carousel */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-brand-gray mb-4">
            Embalagens de Qualidade
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Conheça os produtos das marcas que representamos
          </p>
          <div className="h-1 w-20 bg-brand-blue mx-auto mt-4 mb-12"></div>
        </div>

        <div className="md:max-w-4xl lg:max-w-5xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {productImages.map((image, index) => (
                <CarouselItem key={index} className="lg:basis-2/3">
                  <div className="p-1">
                    <Card className="overflow-hidden border-none shadow-md">
                      <CardContent className="flex flex-col items-center p-6">
                        <AspectRatio ratio={9/16} className="bg-muted w-full max-w-sm mx-auto">
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="object-cover w-full h-full"
                          />
                        </AspectRatio>
                        <h3 className="mt-4 text-xl font-bold text-center">{image.brand}</h3>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:flex justify-center mt-8">
              <CarouselPrevious className="relative -left-0 mx-2" />
              <CarouselNext className="relative -right-0 mx-2" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Products;
