
import { CompanyData } from './types';
import MagipackLogo from "/lovable-uploads/9a7a52f1-0ebf-492c-82d4-e04fe7cbb30a.png";

export const magipack: CompanyData = {
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
};
