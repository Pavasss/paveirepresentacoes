
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { CompanyData } from "@/data/companies";
import { Package } from "lucide-react";

type ProductCarouselProps = {
  company: CompanyData;
};

const ProductCarousel = ({ company }: ProductCarouselProps) => {
  // Filter products that have images
  const productsWithImages = company.products.filter(product => 
    product.imageUrl || (product.images && product.images.length > 0)
  );

  if (productsWithImages.length === 0) {
    return (
      <div className="text-center py-8">
        <Package className="mx-auto h-12 w-12 text-gray-400 mb-4" />
        <p className="text-gray-500">Nenhuma imagem de produto disponível</p>
      </div>
    );
  }

  return (
    <div className="mb-16">
      <h2 className="text-2xl font-semibold text-brand-gray mb-6 text-center">
        Produtos em Destaque
      </h2>
      
      <Carousel className="w-full max-w-5xl mx-auto">
        <CarouselContent>
          {productsWithImages.map((product) => (
            <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-gray-100 h-48">
                  {product.images && product.images.length > 0 ? (
                    <img 
                      src={product.images[0]} 
                      alt={product.name} 
                      className="h-full w-full object-contain p-2" 
                    />
                  ) : product.imageUrl ? (
                    <img 
                      src={product.imageUrl} 
                      alt={product.name} 
                      className="h-full w-full object-contain p-2" 
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center text-gray-400 h-full">
                      <Package size={48} />
                      <span className="mt-2 text-sm">Imagem não disponível</span>
                    </div>
                  )}
                </div>
                <CardContent className="p-4">
                  <div className="mb-2 flex gap-2 flex-wrap">
                    <span className="inline-block bg-brand-blue/10 text-brand-blue text-xs px-2 py-1 rounded-full">
                      {product.category}
                    </span>
                    <span className="inline-block bg-brand-orange/10 text-brand-orange text-xs px-2 py-1 rounded-full">
                      {product.subcategory}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg text-brand-gray mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm line-clamp-3">{product.description}</p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default ProductCarousel;
