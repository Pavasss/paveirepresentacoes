
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
      src: "/lovable-uploads/236072c1-078d-43a8-8cc7-adf629fab601.png",
      alt: "Produtos Guarufilme - Filmes plásticos"
    },
    {
      src: "/lovable-uploads/1f02c035-796e-418f-883e-d19e6464ca1b.png",
      alt: "Produtos Pplast - Embalagens descartáveis"
    },
    {
      src: "/lovable-uploads/e2e60e61-1c12-4916-9d56-11ce8e43c062.png",
      alt: "Produtos Vabene - Utensílios descartáveis"
    },
    {
      src: "/lovable-uploads/ff3f6c9c-2a5d-4bc4-9309-72f1200a1524.png",
      alt: "Produtos Libreplast - Sacolas biodegradáveis"
    },
    {
      src: "/lovable-uploads/eecf553d-beaa-4f8a-99ec-718fded775ff.png",
      alt: "Produtos Totalplast - Descartáveis"
    },
    {
      src: "/lovable-uploads/0f1f6a30-50fd-4e6b-9dbe-ed4ed3e93aba.png",
      alt: "Produtos Magitus - Utensílios plásticos"
    },
    {
      src: "/lovable-uploads/225a243d-16fd-4611-b396-0ba8529b8386.png",
      alt: "Produtos Plastsul - Canudos e acessórios"
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
