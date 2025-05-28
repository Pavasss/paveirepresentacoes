import { CompanyData } from './types';
import LiplastLogo from "/lovable-uploads/4728399f-477e-431b-aa72-21744815b3e7.png";
import SacolaVerdeImage from "/lovable-uploads/808fa38b-8340-4428-8b56-f9bbac309822.png";
import SacolaAzulImage from "/lovable-uploads/176714af-0ee1-44d2-9082-45838639bc6d.png";
import SacolaAmarelaImage from "/lovable-uploads/6b62bba1-61b6-474a-af14-fa547942e2ce.png";
import SacolaCremeImage from "/lovable-uploads/60479c57-352f-44ef-991c-453ed1d3be7c.png";
import SacolaCremeEmFardoImage from "/lovable-uploads/b4640d7f-7933-4095-834e-f68aaba1d123.png";
import SacolaAzulEmFardoImage from "/lovable-uploads/8ef7429d-fb35-4910-8391-dcf2abdaf515.png";
import SacolaAmarelaEmFardoImage from "/lovable-uploads/8cc72b6b-146e-43ca-bd5b-4862c2b42d54.png";
import SacolaVerdeEmFardoImage from "/lovable-uploads/f238c39b-821a-4d9b-84c9-012508270a63.png";
import SacolaMulticolorEmFardoImage from "/lovable-uploads/eff67fce-cb1b-4277-a118-4f1c3ab559a6.png";
import SacolaMulticolorImage from "/lovable-uploads/9d71a41e-48fa-4bf5-9b31-b6ed685ce6ab.png";
import SacoLixoImage from "/lovable-uploads/346d9b9f-4cc3-449e-a85e-464c7f7de1e3.png";

export const liplast: CompanyData = {
  id: "liplast",
  name: "Liplast",
  logo: LiplastLogo,
  link: "https://www.liplast.com.br/",
  description: "Somos uma indústria da região sul de Santa Catarina, mais precisamente na cidade de Orleans. Geograficamente, o município situa-se entre a serra catarinense e o litoral, região conhecida por sua cultura e povo trabalhador, onde muitas dessas compõem o nosso time, desempenhando suas funções dentro da Liplast. Desde 1999, levamos mais facilidade para o dia a dia das pessoas, entendendo a importância da responsabilidade ambiental, fabricando sacolas plásticas de acordo com a logística reversa sustentável. Investimos em tecnologias acerca deste assunto, pois sabemos que isso resulta em uma redução significativa no impacto causado ao meio-ambiente.",
  foundedYear: "1999",
  location: "Orleans, SC",
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
    
    { 
      id: 7, 
      name: "Sacolas em Fardo Multicolor", 
      description: "Sacola 30x40 - c/ 1.7Kg\nSacola 30x45 - c/ 1.7Kg\nSacola 40x50 - c/ 2.5Kg\nSacola 42x53 - c/ 3Kg\nSacola 47x57 - c/ 4Kg", 
      category: "Sacolas em Fardo", 
      subcategory: "Multicolor",
      imageUrl: SacolaMulticolorEmFardoImage,
      images: [SacolaMulticolorEmFardoImage]
    },
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
    { 
      id: 12, 
      name: "Sacolas em Fardo Creme", 
      description: "Sacola 30x40 c/ 2kg\nSacola 30x45 c/ 2kg\nSacola 40x50 c/ 3kg\nSacola 47x57 c/ 4kg\nSacola 60x75x3,0 (L) pct c/ 100 und\nSacola 60x75x5,0 (P) pct c/ 100 und\nSacola 70x80x5,0 pct c/ 100 und\nSacola 80x100x5,0 pct c/ 100 und", 
      category: "Sacolas em Fardo", 
      subcategory: "Creme",
      imageUrl: SacolaCremeEmFardoImage,
      images: [SacolaCremeEmFardoImage]
    },
    
    { 
      id: 13, 
      name: "Saco de Lixo c/100", 
      description: "Tamanho     - Litro - Peso (kg)\n60X70X4,0 - 60L - 1,680Kg\n50X60X4,0 - 40L - 1,200Kg\n90X110X5,0 - 200L - 4,950Kg\n90X110X7,0 - 200L - 6,930Kg\n80X100X5,0 - 200L - 4,000Kg\n90X110X6,0 - 200L - 5,940Kg\n75X105X7,0 - 105L - 5,512Kg\n75X90X4,0 - 105L - 2,700Kg\n75X90X5,0 - 105L - 3,375Kg\n75X90X6,0 - 105L - 4,050Kg", 
      category: "Saco de Lixo c/100", 
      subcategory: "Saco c/100",
      imageUrl: SacoLixoImage,
      images: [SacoLixoImage]
    },
  ]
};
