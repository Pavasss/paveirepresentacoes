
import { useParams } from "react-router-dom";
import { useState, useMemo } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import ProductFilter from "../components/ProductFilter";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, ExternalLink } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";

// Company data
import LibreplastLogo from "/lovable-uploads/e2adbeea-74fd-47ed-81d5-5f38e7b22a1e.png";
import LiplastLogo from "/lovable-uploads/4728399f-477e-431b-aa72-21744815b3e7.png";
import PPlastLogo from "/lovable-uploads/77d5dedc-0b4e-4553-bf55-b95f214978e6.png";
import TotalplastLogo from "/lovable-uploads/cff86a8a-2590-41e6-af53-6372835c2641.png";
import VabeneLogo from "/lovable-uploads/ce391618-da4c-437b-8b32-3e4946090153.png";
import MagitusLogo from "/lovable-uploads/b950299d-8d72-4465-9a9a-64145b434959.png";
import PlastsulLogo from "/lovable-uploads/efd0f605-d8f6-47bd-8f0d-418d1591dfbd.png";
import MagipackLogo from "/lovable-uploads/9a7a52f1-0ebf-492c-82d4-e04fe7cbb30a.png";
import GuarufilmeLogo from "/lovable-uploads/852cd3a3-5bd3-4f6c-b8e0-28314c83f5eb.png";
import ThermoflexoLogo from "/lovable-uploads/87a59662-6473-4aec-9e38-37ecf067dbe7.png";

type Product = {
  id: number;
  name: string;
  description: string;
  category: string;
  imageUrl?: string;
};

type CompanyData = {
  id: string;
  name: string;
  logo: string;
  link: string;
  description: string;
  foundedYear: string;
  location: string;
  products: Product[];
};

const companiesData: CompanyData[] = [
  {
    id: "libreplast",
    name: "Libreplast",
    logo: LibreplastLogo,
    link: "https://www.libreplast.com.br/",
    description: "Libreplast é uma empresa brasileira especializada na produção de embalagens plásticas de alta qualidade para diversos segmentos. Com mais de 20 anos no mercado, a empresa se destaca pela inovação e compromisso com a sustentabilidade em seus processos produtivos.",
    foundedYear: "2000",
    location: "São Paulo, SP",
    products: [
      { id: 1, name: "Copos Descartáveis 200ml", description: "Pacote com 100 unidades de copos descartáveis resistentes", category: "Copos" },
      { id: 2, name: "Canudos Biodegradáveis", description: "Embalagem com 50 unidades de canudos ecológicos", category: "Canudos" },
      { id: 3, name: "Sacolas Personalizadas", description: "Sacolas personalizadas para comércios", category: "Sacolas" }
    ]
  },
  {
    id: "liplast",
    name: "Liplast",
    logo: LiplastLogo,
    link: "https://www.liplast.com.br/",
    description: "Liplast é referência na fabricação de embalagens plásticas para o setor alimentício. Com tecnologia de ponta e foco na qualidade, a empresa fornece produtos seguros e práticos para restaurantes e serviços de delivery.",
    foundedYear: "1995",
    location: "Rio de Janeiro, RJ",
    products: [
      { id: 1, name: "Marmitas Térmicas", description: "Marmitas com divisórias e tampa de fechamento seguro", category: "Marmitas" },
      { id: 2, name: "Talheres Resistentes", description: "Kit com garfo, faca e colher de alta durabilidade", category: "Talheres" },
      { id: 3, name: "Luvas Descartáveis", description: "Caixa com 100 luvas para manipulação de alimentos", category: "Luvas" }
    ]
  },
  {
    id: "pplast",
    name: "P.Plast",
    logo: PPlastLogo,
    link: "https://pplast.com.br/",
    description: "P.Plast é especializada em soluções inovadoras para embalagens plásticas, atendendo diversos segmentos do mercado. A empresa investe constantemente em pesquisa e desenvolvimento de produtos sustentáveis.",
    foundedYear: "2005",
    location: "Curitiba, PR",
    products: [
      { id: 1, name: "Copos Térmicos", description: "Copos com isolamento térmico para bebidas quentes", category: "Copos" },
      { id: 2, name: "Potes para Sobremesa", description: "Potes transparentes com tampa para doces e sobremesas", category: "Potes" },
      { id: 3, name: "Toucas Descartáveis", description: "Pacote com 50 toucas para cozinha profissional", category: "Toucas" }
    ]
  },
  {
    id: "totalplast",
    name: "Totalplast",
    logo: TotalplastLogo,
    link: "https://www.totalplast.com.br/",
    description: "Totalplast é uma empresa líder na produção de embalagens plásticas para o setor alimentício e industrial. Com mais de 25 anos de experiência, oferece produtos de alta qualidade e soluções personalizadas.",
    foundedYear: "1992",
    location: "Belo Horizonte, MG",
    products: [
      { id: 1, name: "Bandejas Compartimentadas", description: "Bandejas com divisórias para refeições completas", category: "Marmitas" },
      { id: 2, name: "Garrafas Squeeze", description: "Garrafas plásticas para bebidas", category: "Copos" },
      { id: 3, name: "Panos Descartáveis", description: "Panos multiuso em rolo com 50 unidades", category: "Panos" }
    ]
  },
  {
    id: "vabene",
    name: "Vabene",
    logo: VabeneLogo,
    link: "https://vabene.com.br/",
    description: "Vabene é reconhecida pela qualidade superior em utensílios descartáveis. A empresa se destaca por oferecer produtos resistentes e adequados para uso profissional em restaurantes, hotéis e eventos.",
    foundedYear: "1998",
    location: "Salvador, BA",
    products: [
      { id: 1, name: "Talheres Premium", description: "Talheres resistentes com acabamento premium", category: "Talheres" },
      { id: 2, name: "Copos Personalizáveis", description: "Copos com opção de personalização para eventos", category: "Copos" },
      { id: 3, name: "Sacolas Biodegradáveis", description: "Sacolas ecológicas de alta resistência", category: "Sacolas" }
    ]
  },
  {
    id: "magitus",
    name: "Magitus",
    logo: MagitusLogo,
    link: "https://www.magitus.com.br/",
    description: "Magitus é especialista em embalagens térmicas e soluções para o transporte seguro de alimentos. Com tecnologia avançada, seus produtos mantêm a temperatura e qualidade dos alimentos por mais tempo.",
    foundedYear: "2003",
    location: "Porto Alegre, RS",
    products: [
      { id: 1, name: "Embalagens Isotérmicas", description: "Caixas térmicas para transporte de alimentos", category: "Embalagens térmicas" },
      { id: 2, name: "Bolsas Térmicas", description: "Bolsas com isolamento para entregas", category: "Embalagens térmicas" },
      { id: 3, name: "Luvas Térmicas", description: "Luvas para manuseio de alimentos quentes", category: "Luvas" }
    ]
  },
  {
    id: "plastsul",
    name: "Plastsul",
    logo: PlastsulLogo,
    link: "https://plastsul.com.br/",
    description: "Plastsul desenvolve produtos plásticos com foco na durabilidade e praticidade. A empresa atende diversos setores com soluções eficientes e econômicas para o dia a dia de estabelecimentos comerciais.",
    foundedYear: "1997",
    location: "Florianópolis, SC",
    products: [
      { id: 1, name: "Potes Herméticos", description: "Potes com fechamento hermético para conservação de alimentos", category: "Potes" },
      { id: 2, name: "Canudos Coloridos", description: "Canudos em diversas cores para festas e eventos", category: "Canudos" },
      { id: 3, name: "Toucas Sanfonadas", description: "Toucas com elástico reforçado para cozinhas", category: "Toucas" }
    ]
  },
  {
    id: "magipack",
    name: "Magipack",
    logo: MagipackLogo,
    link: "https://www.magipack.com.br/",
    description: "Magipack é reconhecida pela inovação em sistemas de embalagens para delivery. Seus produtos são desenvolvidos para manter a integridade dos alimentos durante o transporte e entrega.",
    foundedYear: "2007",
    location: "Fortaleza, CE",
    products: [
      { id: 1, name: "Caixas para Pizza", description: "Caixas térmicas especiais para entrega de pizzas", category: "Embalagens térmicas" },
      { id: 2, name: "Sacos para Delivery", description: "Sacos reforçados para transporte de alimentos", category: "Sacolas" },
      { id: 3, name: "Marmitas com Divisória", description: "Marmitas com separação para diferentes alimentos", category: "Marmitas" }
    ]
  },
  {
    id: "guarufilme",
    name: "Guarufilme",
    logo: GuarufilmeLogo,
    link: "https://www.guarufilme.com.br/novosite/",
    description: "Guarufilme é especializada na produção de filmes plásticos e embalagens flexíveis de alta performance. Seus produtos atendem às necessidades específicas de diversos segmentos da indústria alimentícia.",
    foundedYear: "1990",
    location: "Guarulhos, SP",
    products: [
      { id: 1, name: "Filme PVC", description: "Rolos de filme PVC para conservação de alimentos", category: "Embalagens" },
      { id: 2, name: "Sacos a Vácuo", description: "Embalagens para conservação a vácuo", category: "Sacolas" },
      { id: 3, name: "Luvas Nitrílicas", description: "Luvas de alta resistência para manipulação segura", category: "Luvas" }
    ]
  },
  {
    id: "thermoflexo",
    name: "Thermoflexo",
    logo: ThermoflexoLogo,
    link: "https://thermoflexo.com.br/",
    description: "Thermoflexo é referência em soluções térmicas para embalagens. Com tecnologia exclusiva, desenvolve produtos que mantêm a temperatura ideal dos alimentos, garantindo qualidade do produtor ao consumidor.",
    foundedYear: "2010",
    location: "Recife, PE",
    products: [
      { id: 1, name: "Copos Térmicos Premium", description: "Copos com dupla camada para isolamento térmico", category: "Copos" },
      { id: 2, name: "Marmitas Multi-compartimento", description: "Marmitas térmicas com várias divisórias", category: "Marmitas" },
      { id: 3, name: "Talheres Ecológicos", description: "Talheres fabricados com material sustentável", category: "Talheres" }
    ]
  }
];

const Company = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const company = useMemo(() => companiesData.find((c) => c.id === id), [id]);
  
  if (!company) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">Empresa não encontrada</h2>
          <p className="mt-2 text-gray-600">A empresa que você está procurando não existe ou foi removida.</p>
          <Button className="mt-4" asChild>
            <a href="/">Voltar para página inicial</a>
          </Button>
        </div>
      </div>
    );
  }

  const categories = Array.from(
    new Set(company.products.map((product) => product.category))
  );

  const filteredProducts = company.products.filter(
    (product) => selectedCategory === "all" || product.category === selectedCategory
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 md:px-6">
          {/* Company Header */}
          <div className="flex flex-col items-center mb-10">
            <div className="w-32 h-32 mb-4 flex items-center justify-center">
              {company.logo ? (
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="max-h-full max-w-full object-contain"
                />
              ) : (
                <Building2 className="h-16 w-16 text-brand-blue" />
              )}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-brand-blue text-center">
              {company.name}
            </h1>
            <a
              href={company.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center text-brand-blue hover:text-brand-darkBlue transition-colors"
            >
              Visitar site oficial <ExternalLink size={16} className="ml-1" />
            </a>
          </div>

          {/* Company Info */}
          <div className="bg-white shadow-md rounded-lg p-6 mb-10">
            <h2 className="text-2xl font-semibold text-brand-gray mb-4">Sobre a Empresa</h2>
            <p className="text-gray-700 mb-6">{company.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-brand-gray">Fundação</h3>
                <p className="text-gray-700">{company.foundedYear}</p>
              </div>
              <div>
                <h3 className="font-semibold text-brand-gray">Localização</h3>
                <p className="text-gray-700">{company.location}</p>
              </div>
            </div>
          </div>

          {/* Products Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-brand-gray mb-6 text-center">
              Produtos da {company.name}
            </h2>
            
            <ProductFilter 
              categories={categories} 
              onCategoryChange={setSelectedCategory} 
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="bg-gray-100 h-48 flex items-center justify-center">
                    {product.imageUrl ? (
                      <img 
                        src={product.imageUrl} 
                        alt={product.name} 
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center text-gray-400">
                        <Package size={48} />
                        <span className="mt-2 text-sm">Imagem não disponível</span>
                      </div>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-2">
                      <span className="inline-block bg-brand-blue/10 text-brand-blue text-xs px-2 py-1 rounded-full">
                        {product.category}
                      </span>
                    </div>
                    <h3 className="font-bold text-lg text-brand-gray">{product.name}</h3>
                    <p className="text-gray-600 mt-2">{product.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Company;
