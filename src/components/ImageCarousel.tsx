
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ImageCarousel = () => {
  const images = [
    {
      src: "/lovable-uploads/b353bc51-a93c-4c96-b381-b7af33516279.png",
      alt: "Produtos Liplast - Sacolas sustentáveis"
    },
    {
      src: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=2070",
      alt: "Embalagens modernas"
    },
    {
      src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070", 
      alt: "Soluções em embalagens"
    },
    {
      src: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070",
      alt: "Tecnologia em embalagens"
    },
    {
      src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2070",
      alt: "Inovação e qualidade"
    },
    {
      src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2070",
      alt: "Representações de qualidade"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-brand-gray mb-4">
            Nossa Galeria
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Confira algumas das soluções em embalagens que representamos
          </p>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-2">
                  <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default ImageCarousel;
