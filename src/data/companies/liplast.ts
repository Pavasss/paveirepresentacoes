import { CompanyData } from './types';
import LiplastLogo from "/lovable-uploads/ad5727df-c3fd-43cc-82fb-5eeeed6fdc5d.png";

export const liplast: CompanyData = {
  id: "liplast",
  name: "Liplast",
  logo: LiplastLogo,
  link: "https://liplast.com.br/",
  description: "Liplast é sinônimo de qualidade e inovação em embalagens plásticas descartáveis. Nossa empresa atua há mais de 20 anos no mercado brasileiro, desenvolvendo produtos que atendem às mais rigorosas normas de qualidade e segurança alimentar.",
  foundedYear: "2001",
  location: "Rio de Janeiro, RJ",
  images: [
    "/lovable-uploads/176714af-0ee1-44d2-9082-45838639bc6d.png",
    "/lovable-uploads/2dd685f3-d41f-4830-be44-77292432d18b.png",
    "/lovable-uploads/2ddb63e7-c1d6-46a5-adce-fbe9f1079ab2.png",
    "/lovable-uploads/346d9b9f-4cc3-449e-a85e-464c7f7de1e3.png"
  ],
  products: [
    { id: 1, name: "Marmitas Descartáveis", description: "Marmitas práticas para refeições", category: "Marmitas", subcategory: "Descartáveis" },
    { id: 2, name: "Talheres Premium", description: "Talheres resistentes com acabamento diferenciado", category: "Talheres", subcategory: "Premium" },
    { id: 3, name: "Pratos Fundos", description: "Pratos com bordas altas para sopas e caldos", category: "Pratos", subcategory: "Fundos" },
    { id: 4, name: "Guardanapos", description: "Guardanapos de papel de alta qualidade", category: "Guardanapos", subcategory: "Papel" }
  ]
};
