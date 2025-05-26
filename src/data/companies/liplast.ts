import { CompanyData } from './types';
import LiplastLogo from "/lovable-uploads/4728399f-477e-431b-aa72-21744815b3e7.png";
import SacolaMulticolorImage from "/lovable-uploads/71e57601-d49b-460d-82ae-2eab2f3a04f9.png";
import SacolaVerdeImage from "/lovable-uploads/808fa38b-8340-4428-8b56-f9bbac309822.png";
import SacolaAzulImage from "/lovable-uploads/176714af-0ee1-44d2-9082-45838639bc6d.png";
import SacolaAmarelaImage from "/lovable-uploads/6b62bba1-61b6-474a-af14-fa547942e2ce.png";
import SacolaCremeImage from "/lovable-uploads/60479c57-352f-44ef-991c-453ed1d3be7c.png";
import SacolaCremeEmFardoImage from "/lovable-uploads/b4640d7f-7933-4095-834e-f68aaba1d123.png";
import SacolaAzulEmFardoImage from "/lovable-uploads/8ef7429d-fb35-4910-8391-dcf2abdaf515.png";
import SacolaAmarelaEmFardoImage from "/lovable-uploads/8cc72b6b-146e-43ca-bd5b-4862c2b42d54.png";
import SacolaVerdeEmFardoImage from "/lovable-uploads/f238c39b-821a-4d9b-84c9-012508270a63.png";

export const liplast: CompanyData = {
  id: "liplast",
  name: "Liplast",
  logo: LiplastLogo,
  link: "https://www.liplast.com.br/",
  description: "Liplast é referência na fabricação de embalagens plásticas para o setor alimentício. Com tecnologia de ponta e foco na qualidade, a empresa fornece produtos seguros e práticos para restaurantes e serviços de delivery.",
  foundedYear: "1995",
  location: "Rio de Janeiro, RJ",
  products: [
    { 
      id: 1, 
      name: "Sacolas em Caixa Multicolor", 
      description: "Sacola 30x40 - c/ 2Kg\nSacola 30x45 - c/ 2Kg\nSacola 40x50 - c/ 3Kg\nSacola 47x57 - c/ 4Kg", 
      category: "Sacolas em Caixa", 
      subcategory: "Multicolor", 
      imageUrl: SacolaMulticolorImage,
      images: [SacolaMulticolorImage]
    },
    { 
      id: 2, 
      name: "Sacolas em Caixa Verde", 
      description: "Sacola 30x40 - c/ 2Kg\nSacola 38x48 - c/ 3Kg\nSacola 47x57 - c/ 4Kg", 
      category: "Sacolas em Caixa", 
      subcategory: "Verde",
      imageUrl: SacolaVerdeImage,
      images: [SacolaVerdeImage]
    },
    { 
      id: 3, 
      name: "Sacolas em Caixa Azul", 
      description: "Sacola 30x40 - c/ 2Kg\nSacola 38x48 - c/ 3Kg\nSacola 47x57 - c/ 4Kg", 
      category: "Sacolas em Caixa", 
      subcategory: "Azul",
      imageUrl: SacolaAzulImage,
      images: [SacolaAzulImage]
    },
    { 
      id: 4, 
      name: "Sacolas em Caixa Amarela", 
      description: "Sacola 30x40 - c/ 2Kg\nSacola 38x48 - c/ 3Kg\nSacola 47x57 - c/ 4Kg", 
      category: "Sacolas em Caixa", 
      subcategory: "Amarela",
      imageUrl: SacolaAmarelaImage,
      images: [SacolaAmarelaImage]
    },
    { 
      id: 5, 
      name: "Sacolas em Caixa Creme", 
      description: "Sacola 30x40 - c/ 2Kg\nSacola 38x48 - c/ 3Kg\nSacola 47x57 - c/ 4Kg", 
      category: "Sacolas em Caixa", 
      subcategory: "Creme",
      imageUrl: SacolaCremeImage,
      images: [SacolaCremeImage]
    },
    
    { id: 7, name: "Sacolas em Fardo Multicolor", description: "Sacolas em fardo multicoloridas para uso comercial em grande volume", category: "Sacolas em Fardo", subcategory: "Multicolor" },
    { 
      id: 8, 
      name: "Sacolas em Fardo Verde", 
      description: "Sacola 30x40 - c/ 2Kg\nSacola 30x45 - c/ 2Kg\nSacola 40x50 - c/ 3Kg\nSacola 47x57 - c/ 4Kg", 
      category: "Sacolas em Fardo", 
      subcategory: "Verde",
      imageUrl: SacolaVerdeEmFardoImage,
      images: [SacolaVerdeEmFardoImage]
    },
    { 
      id: 9, 
      name: "Sacolas em Fardo Azul", 
      description: "Sacola 30x40 - c/ 2Kg\nSacola 30x45 - c/ 2Kg\nSacola 40x50 - c/ 3Kg\nSacola 47x57 - c/ 4Kg", 
      category: "Sacolas em Fardo", 
      subcategory: "Azul",
      imageUrl: SacolaAzulEmFardoImage,
      images: [SacolaAzulEmFardoImage] 
    },
    { 
      id: 10, 
      name: "Sacolas em Fardo Amarela", 
      description: "Sacola 30x45 - c/ 2Kg\nSacola 38x48 - c/ 3Kg\nSacola 40x50 - c/ 3Kg\nSacola 42x53 - c/ 3Kg\nSacola 47x57 - c/ 4Kg", 
      category: "Sacolas em Fardo", 
      subcategory: "Amarela",
      imageUrl: SacolaAmarelaEmFardoImage,
      images: [SacolaAmarelaEmFardoImage]
    },
    { id: 11, name: "Sacolas em Fardo Branca", description: "Sacolas em fardo brancas para uso comercial em grande volume", category: "Sacolas em Fardo", subcategory: "Branca" },
    { 
      id: 12, 
      name: "Sacolas em Fardo Creme", 
      description: "Sacola 30x40 c/ 2kg\nSacola 30x45 c/ 2kg\nSacola 40x50 c/ 3kg\nSacola 47x57 c/ 4kg\nSacola 60x75x3,0 (L) pct c/ 100 und\nSacola 60x75x5,0 (P) pct c/ 100 und\nSacola 70x80x5,0 pct c/ 100 und\nSacola 80x100x5,0 pct c/ 100 und", 
      category: "Sacolas em Fardo", 
      subcategory: "Creme",
      imageUrl: SacolaCremeEmFardoImage,
      images: [SacolaCremeEmFardoImage]
    },
    
    { id: 13, name: "Saco de Lixo c/100", description: "Sacos para lixo em pacotes com 100 unidades em diversos tamanhos e resistências", category: "Saco de Lixo", subcategory: "Saco c/100" },
  ]
};
