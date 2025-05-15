
import { useParams } from "react-router-dom";
import { useState, useMemo } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import ProductFilter from "../components/ProductFilter";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, ExternalLink, Package } from "lucide-react";
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
import SacolaMulticolorImage from "/lovable-uploads/72025acd-8514-49d7-9071-9e35c0059efb.png";

type Product = {
  id: number;
  name: string;
  description: string;
  category: string;
  subcategory: string;
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
    location: "Orleans, SC",
    products: [
      { id: 1, name: "Sacolas em Caixa Light", description: "Sacolas plásticas Light em caixas para uso comercial", category: "Sacolas em Caixa", subcategory: "Light" },
      { id: 2, name: "Sacolas em Caixa Gold", description: "Sacolas plásticas Gold em caixas para uso comercial", category: "Sacolas em Caixa", subcategory: "Gold" },
      { id: 3, name: "Sacolas em Caixa Slim", description: "Sacolas plásticas Slim em caixas para uso comercial", category: "Sacolas em Caixa", subcategory: "Slim" },
      { id: 4, name: "Sacolas em Caixa Super", description: "Sacolas plásticas Super em caixas para uso comercial", category: "Sacolas em Caixa", subcategory: "Super" },
      { id: 5, name: "Sacolas em Caixa Extra", description: "Sacolas plásticas Extra em caixas para uso comercial", category: "Sacolas em Caixa", subcategory: "Extra" },
      { id: 6, name: "Sacolas em Caixa Star", description: "Sacolas plásticas Star em caixas para uso comercial", category: "Sacolas em Caixa", subcategory: "Star" },
      { id: 7, name: "Sacolas em Caixa Bioflex", description: "Sacolas plásticas Bioflex em caixas para uso comercial", category: "Sacolas em Caixa", subcategory: "Bioflex" },
      { id: 8, name: "Sacolas em Caixa Transparente", description: "Sacolas plásticas Transparente em caixas para uso comercial", category: "Sacolas em Caixa", subcategory: "Transparente" },
      
      { id: 9, name: "Sacolas em Fardo Gold", description: "Sacolas em fardo Gold para uso comercial", category: "Sacolas em Fardo", subcategory: "Gold" },
      { id: 10, name: "Sacolas em Fardo Slim", description: "Sacolas em fardo Slim para uso comercial", category: "Sacolas em Fardo", subcategory: "Slim" },
      { id: 11, name: "Sacolas em Fardo Super", description: "Sacolas em fardo Super para uso comercial", category: "Sacolas em Fardo", subcategory: "Super" },
      { id: 12, name: "Sacolas em Fardo Sacolão", description: "Sacolas em fardo Sacolão para uso comercial", category: "Sacolas em Fardo", subcategory: "Sacolão" },
      { id: 13, name: "Sacolas em Fardo Star", description: "Sacolas em fardo Star para uso comercial", category: "Sacolas em Fardo", subcategory: "Star" },
      { id: 14, name: "Sacolas em Fardo Especial", description: "Sacolas em fardo Especial para uso comercial", category: "Sacolas em Fardo", subcategory: "Especial" },
      { id: 15, name: "Sacolas em Fardo Premium", description: "Sacolas em fardo Premium para uso comercial", category: "Sacolas em Fardo", subcategory: "Premium" },
      { id: 16, name: "Sacolas em Fardo Altaflex", description: "Sacolas em fardo Altaflex para uso comercial", category: "Sacolas em Fardo", subcategory: "Altaflex" },
      { id: 17, name: "Sacolas em Fardo Transparente", description: "Sacolas em fardo Transparente para uso comercial", category: "Sacolas em Fardo", subcategory: "Transparente" },
      
      { id: 18, name: "Sacos PEBD", description: "Sacos em polietileno de baixa densidade", category: "Sacos", subcategory: "PEBD" },
      { id: 19, name: "Sacos Sanfonado", description: "Sacos com dobras sanfonadas para facilitar o uso", category: "Sacos", subcategory: "Sanfonado" },
      { id: 20, name: "Sacos Cristal", description: "Sacos transparentes de alta qualidade", category: "Sacos", subcategory: "Cristal" },
      { id: 21, name: "Sacos de Lixo", description: "Sacos reforçados para coleta de lixo em diversos tamanhos", category: "Sacos", subcategory: "Saco de Lixo" },
      
      { id: 22, name: "Bobinas Freezer/Microondas", description: "Bobinas especiais para congelamento e aquecimento", category: "Bobinas", subcategory: "Freezer/Microondas" },
      { id: 23, name: "Bobinas Frios/Sanduíches", description: "Bobinas para embalagem de alimentos frios e sanduíches", category: "Bobinas", subcategory: "Frios/Sanduíches" },
      { id: 24, name: "Bobinas Lisa C/500", description: "Bobinas lisas com 500 unidades", category: "Bobinas", subcategory: "Lisa C/500" },
      { id: 25, name: "Bobinas Lisa C/400", description: "Bobinas lisas com 400 unidades", category: "Bobinas", subcategory: "Lisa C/400" },
      { id: 26, name: "Bobinas Libreroll", description: "Bobinas Libreroll para diversos usos", category: "Bobinas", subcategory: "Libreroll" },
      { id: 27, name: "Bobinas Reforçada", description: "Bobinas com material reforçado para maior resistência", category: "Bobinas", subcategory: "Reforçada" }
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
      { id: 1, name: "Sacolas Multicolor", description: "Sacola 30x40 - c/ 2Kg\nSacola 30x45 - c/ 2Kg\nSacola 40x50 - c/ 3Kg\nSacola 47x57 - c/ 4Kg", category: "Sacolas em Caixa", subcategory: "Multicolor", imageUrl: SacolaMulticolorImage },
      { id: 2, name: "Sacolas em Caixa Verde", description: "Sacolas plásticas verdes organizadas em caixa para fácil armazenamento e uso", category: "Sacolas em Caixa", subcategory: "Verde" },
      { id: 3, name: "Sacolas em Caixa Azul", description: "Sacolas plásticas azuis organizadas em caixa para fácil armazenamento e uso", category: "Sacolas em Caixa", subcategory: "Azul" },
      { id: 4, name: "Sacolas em Caixa Amarela", description: "Sacolas plásticas amarelas organizadas em caixa para fácil armazenamento e uso", category: "Sacolas em Caixa", subcategory: "Amarela" },
      { id: 5, name: "Sacolas em Caixa Branca", description: "Sacolas plásticas brancas organizadas em caixa para fácil armazenamento e uso", category: "Sacolas em Caixa", subcategory: "Branca" },
      { id: 6, name: "Sacolas em Caixa Creme", description: "Sacolas plásticas creme organizadas em caixa para fácil armazenamento e uso", category: "Sacolas em Caixa", subcategory: "Creme" },
      
      { id: 7, name: "Sacolas em Fardo Multicolor", description: "Sacolas em fardo multicoloridas para uso comercial em grande volume", category: "Sacolas em Fardo", subcategory: "Multicolor" },
      { id: 8, name: "Sacolas em Fardo Verde", description: "Sacolas em fardo verdes para uso comercial em grande volume", category: "Sacolas em Fardo", subcategory: "Verde" },
      { id: 9, name: "Sacolas em Fardo Azul", description: "Sacolas em fardo azuis para uso comercial em grande volume", category: "Sacolas em Fardo", subcategory: "Azul" },
      { id: 10, name: "Sacolas em Fardo Amarela", description: "Sacolas em fardo amarelas para uso comercial em grande volume", category: "Sacolas em Fardo", subcategory: "Amarela" },
      { id: 11, name: "Sacolas em Fardo Branca", description: "Sacolas em fardo brancas para uso comercial em grande volume", category: "Sacolas em Fardo", subcategory: "Branca" },
      { id: 12, name: "Sacolas em Fardo Creme", description: "Sacolas em fardo creme para uso comercial em grande volume", category: "Sacolas em Fardo", subcategory: "Creme" },
      
      { id: 13, name: "Saco de Lixo c/100", description: "Sacos para lixo em pacotes com 100 unidades em diversos tamanhos e resistências", category: "Saco de Lixo", subcategory: "Saco c/100" },
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
      { id: 1, name: "Embalagens para Doces", description: "Embalagens transparentes para doces diversos", category: "Doces e Salgados", subcategory: "Doces" },
      { id: 2, name: "Potes com Tampa", description: "Potes plásticos com tampas seguras para alimentos", category: "Potes", subcategory: "Com Tampa" },
      { id: 3, name: "Embalagem para Torta", description: "Embalagens redondas para tortas e bolos", category: "Confeitaria (Redondos e Fatia)", subcategory: "Tortas" },
      { id: 4, name: "Embalagem para Bolos", description: "Embalagens retangulares para bolos e tortas", category: "Confeitaria (Retangulares e Quadrados)", subcategory: "Bolos" }
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
      { id: 1, name: "Kit Pote Redondo PP", description: "Kit de potes redondos em polipropileno", category: "PP", subcategory: "Kit Pote Redondo" },
      { id: 2, name: "Kit Pote Retangular PP", description: "Kit de potes retangulares em polipropileno", category: "PP", subcategory: "Kit Pote Retangular" },
      { id: 3, name: "Copo PP", description: "Copos descartáveis em polipropileno", category: "PP", subcategory: "Copo" },
      
      { id: 4, name: "Copo PS", description: "Copos em poliestireno para bebidas", category: "PS", subcategory: "Copo" },
      { id: 5, name: "Pote PS", description: "Potes em poliestireno para alimentos", category: "PS", subcategory: "Pote" },
      { id: 6, name: "Prato PS", description: "Pratos em poliestireno para refeições", category: "PS", subcategory: "Prato" },
      
      { id: 7, name: "Copo Térmico EPS", description: "Copos térmicos em EPS para bebidas quentes", category: "EPS", subcategory: "Copo Térmico" },
      { id: 8, name: "Pote Térmico EPS", description: "Potes térmicos em EPS para alimentos quentes", category: "EPS", subcategory: "Pote Térmico" },
      
      { id: 9, name: "Marmita XPS", description: "Marmitas em XPS com alta resistência", category: "XPS", subcategory: "Marmita" },
      { id: 10, name: "Hamburgueira XPS", description: "Embalagens para hambúrguer em XPS", category: "XPS", subcategory: "Hamburgueira" },
      { id: 11, name: "Bandeja XPS", description: "Bandejas em XPS para diversos usos", category: "XPS", subcategory: "Bandeja" },
      { id: 12, name: "Disco XPS", description: "Discos em XPS para bolos e tortas", category: "XPS", subcategory: "Disco" },
      { id: 13, name: "Frangueira XPS", description: "Embalagens para frango assado em XPS", category: "XPS", subcategory: "Frangueira" },
      { id: 14, name: "Prato XPS", description: "Pratos em XPS com melhor isolamento térmico", category: "XPS", subcategory: "Prato" }
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
      { id: 1, name: "Talheres Premium", description: "Talheres resistentes com acabamento premium", category: "Professional", subcategory: "Talheres" },
      { id: 2, name: "Embalagens Food Service", description: "Embalagens especiais para alimentos", category: "Food", subcategory: "Serviços" },
      { id: 3, name: "Luvas e Máscaras", description: "Produtos descartáveis para área médica", category: "Medical", subcategory: "Proteção" },
      { id: 4, name: "Produtos Ecológicos", description: "Linha de produtos biodegradáveis", category: "Tellus", subcategory: "Ecológicos" }
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
      { id: 1, name: "Marmitex para Refeição", description: "Embalagens térmicas para refeições completas", category: "Refeição", subcategory: "Marmitex" },
      { id: 2, name: "Marmitex Reforçada", description: "Embalagens com resistência extra", category: "Reforçada", subcategory: "Premium" },
      { id: 3, name: "Linha Master", description: "Embalagens premium para restaurantes", category: "Master", subcategory: "Restaurantes" },
      { id: 4, name: "Kit Delivery", description: "Kit completo para entrega de refeições", category: "Kit Master", subcategory: "Delivery" },
      { id: 5, name: "Potes para Sobremesa", description: "Embalagens especiais para sobremesas", category: "Sobremesa", subcategory: "Potes" },
      { id: 6, name: "Copos Térmicos", description: "Copos com isolamento para bebidas", category: "Copo", subcategory: "Térmicos" },
      { id: 7, name: "Pratos Descartáveis", description: "Pratos resistentes para refeições", category: "Prato", subcategory: "Descartáveis" },
      { id: 8, name: "Mexedores", description: "Mexedores para bebidas quentes", category: "Mexedor", subcategory: "Bebidas" },
      { id: 9, name: "Palitos", description: "Palitos para petiscos e aperitivos", category: "Palito", subcategory: "Petiscos" },
      { id: 10, name: "Pazinhas", description: "Pazinhas para sobremesas e sorvetes", category: "Pazinha", subcategory: "Sorvetes" }
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
      { id: 1, name: "Canudos Retos", description: "Canudos retos em diversas cores e tamanhos", category: "Canudos", subcategory: "Retos" },
      { id: 2, name: "Canudos Flexíveis", description: "Canudos articulados para bebidas", category: "Canudos", subcategory: "Flexíveis" },
      { id: 3, name: "Canudos Biodegradáveis", description: "Canudos produzidos com material sustentável", category: "Canudos", subcategory: "Biodegradáveis" }
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
      { id: 1, name: "Filme Stretch 10kg", description: "Filme plástico esticável para embalagem", category: "Filme Stretch", subcategory: "Industrial" },
      { id: 2, name: "Fita Pet para Amarração", description: "Fitas resistentes para fechamento de volumes", category: "Fita Pet", subcategory: "Amarração" },
      { id: 3, name: "Fita Adesiva Personalizada", description: "Fitas adesivas com opção de personalização", category: "Fita Adesiva", subcategory: "Personalizada" }
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
      { id: 1, name: "Filme PVC Doméstico", description: "Filme PVC em rolos para uso doméstico", category: "Doméstica", subcategory: "PVC" },
      { id: 2, name: "Filmes Plásticos Industriais", description: "Filmes para máquinas industriais de embalagem", category: "Industrial", subcategory: "Plásticos" },
      { id: 3, name: "Sacos para Congelamento", description: "Sacos especiais para congelamento de alimentos", category: "Doméstica", subcategory: "Congelamento" }
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
      { id: 1, name: "Bobinas Térmicas", description: "Bobinas para impressão térmica", category: "Bobinas", subcategory: "Térmicas" },
      { id: 2, name: "Etiquetas Adesivas", description: "Etiquetas para identificação de produtos", category: "Etiquetas", subcategory: "Adesivas" },
      { id: 3, name: "Rótulos Personalizados", description: "Rótulos com impressão personalizada", category: "Rótulos", subcategory: "Personalizados" },
      { id: 4, name: "Ribbons de Impressão", description: "Suprimentos para impressoras térmicas", category: "Suprimentos", subcategory: "Ribbons" }
    ]
  }
];

const Company = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>("all");

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

  const subcategories = Array.from(
    new Set(
      company.products
        .filter(product => selectedCategory === "all" || product.category === selectedCategory)
        .map(product => product.subcategory)
    )
  );

  const filteredProducts = company.products.filter(
    (product) => 
      (selectedCategory === "all" || product.category === selectedCategory) &&
      (selectedSubcategory === "all" || product.subcategory === selectedSubcategory)
  );

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setSelectedSubcategory("all"); // Reset subcategory when category changes
  };

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
            
            {/* Category Filter */}
            <ProductFilter 
              categories={categories} 
              onCategoryChange={handleCategoryChange} 
            />
            
            {/* Subcategory Filter */}
            {subcategories.length > 0 && (
              <div className="w-full flex justify-center my-6">
                <div className="w-full max-w-3xl">
                  <h3 className="text-sm font-medium text-brand-gray mb-2 text-center">Subcategorias</h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    <button
                      onClick={() => setSelectedSubcategory("all")}
                      className={`px-3 py-1 rounded-full text-sm ${
                        selectedSubcategory === "all"
                          ? "bg-brand-blue text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      Todas
                    </button>
                    {subcategories.map((subcategory) => (
                      <button
                        key={subcategory}
                        onClick={() => setSelectedSubcategory(subcategory)}
                        className={`px-3 py-1 rounded-full text-sm ${
                          selectedSubcategory === subcategory
                            ? "bg-brand-blue text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {subcategory}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

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
