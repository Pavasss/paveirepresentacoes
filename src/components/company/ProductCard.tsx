
import { Package } from "lucide-react";
import { Product } from "@/data/companies";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="bg-gray-100 h-48">
        {product.images && product.images.length > 0 ? (
          <Carousel className="w-full h-full">
            <CarouselContent className="h-full">
              {product.images.map((image, index) => (
                <CarouselItem key={index} className="h-full flex items-center justify-center">
                  <img 
                    src={image} 
                    alt={`${product.name} - imagem ${index + 1}`} 
                    className="h-full w-full object-contain p-2" 
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            {product.images.length > 1 && (
              <>
                <CarouselPrevious className="-left-2" />
                <CarouselNext className="-right-2" />
              </>
            )}
          </Carousel>
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
      <CardContent className="p-6">
        <div className="mb-2 flex gap-2 flex-wrap">
          <span className="inline-block bg-brand-blue/10 text-brand-blue text-xs px-2 py-1 rounded-full">
            {product.category}
          </span>
          <span className="inline-block bg-brand-orange/10 text-brand-orange text-xs px-2 py-1 rounded-full">
            {product.subcategory}
          </span>
        </div>
        <h3 className="font-bold text-lg text-brand-gray">{product.name}</h3>
        <p className="text-gray-600 mt-2 whitespace-pre-line">{product.description}</p>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
