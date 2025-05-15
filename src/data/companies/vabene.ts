
import { CompanyData } from './types';
import VabeneLogo from "/lovable-uploads/ce391618-da4c-437b-8b32-3e4946090153.png";

export const vabene: CompanyData = {
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
};
