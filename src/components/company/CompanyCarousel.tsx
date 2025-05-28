
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { CompanyData } from "@/data/companies";

type CompanyCarouselProps = {
  company: CompanyData;
};

const CompanyCarousel = ({ company }: CompanyCarouselProps) => {
  if (!company.images || company.images.length === 0) {
    return null;
  }

  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold text-brand-gray mb-6 text-center">
        Galeria de Imagens - {company.name}
      </h2>
      <div className="max-w-4xl mx-auto">
        <Carousel className="w-full">
          <CarouselContent className="h-80">
            {company.images.map((image, index) => (
              <CarouselItem key={index} className="h-full flex items-center justify-center bg-gray-50 rounded-lg overflow-hidden">
                <img 
                  src={image} 
                  alt={`${company.name} - imagem ${index + 1}`} 
                  className="h-full w-full object-contain p-4" 
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          {company.images.length > 1 && (
            <>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </>
          )}
        </Carousel>
      </div>
    </div>
  );
};

export default CompanyCarousel;
