
import { CompanyData } from './types';
import PPlastLogo from "/lovable-uploads/77d5dedc-0b4e-4553-bf55-b95f214978e6.png";

export const pplast: CompanyData = {
  id: "pplast",
  name: "P.Plast",
  logo: PPlastLogo,
  link: "https://pplast.com.br/",
  description: "P.Plast é especializada em soluções inovadoras para embalagens plásticas, atendendo diversos segmentos do mercado. A empresa investe constantemente em pesquisa e desenvolvimento de produtos sustentáveis.",
  foundedYear: "2005",
  location: "Curitiba, PR",
  products: [
    { id: 1, name: "Embalagens para Doces", description: "Embalagens transparentes para doces diversos", category: "Doces e Salgados", subcategory: "c/ Pino" },
    { id: 2, name: "Potes com Tampa", description: "Potes plásticos com tampas seguras para alimentos", category: "Potes", subcategory: "Com Tampa" },
    { id: 3, name: "Embalagem para Torta", description: "Embalagens redondas para tortas e bolos", category: "Confeitaria (Redondos e Fatia)", subcategory: "Tortas" },
    { id: 4, name: "Embalagem para Bolos", description: "Embalagens retangulares para bolos e tortas", category: "Confeitaria (Retangulares e Quadrados)", subcategory: "Bolos" },
    { 
      id: 5, 
      name: "P-08", 
      description: "INFORMAÇÕES ADICIONAIS\nCaixa com 100 unidades\nMaterial: Pet Cristal\n\nMEDIDAS em milímetros (mm)\nMedida interna: 154x74x46\nMedida externa: 185x105x50\n\nFECHAMENTO E FORMATO\nFechamento: Articulado\nFormato: Retangular", 
      category: "Doces e Salgados", 
      subcategory: "c/ Pino" 
    }
  ]
};
