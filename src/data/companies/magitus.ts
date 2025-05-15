
import { CompanyData } from './types';
import MagitusLogo from "/lovable-uploads/b950299d-8d72-4465-9a9a-64145b434959.png";

export const magitus: CompanyData = {
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
};
