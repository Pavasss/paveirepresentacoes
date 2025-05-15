
import { CompanyData } from './types';
import TotalplastLogo from "/lovable-uploads/cff86a8a-2590-41e6-af53-6372835c2641.png";

export const totalplast: CompanyData = {
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
};
