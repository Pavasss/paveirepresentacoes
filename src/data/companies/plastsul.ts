
import { CompanyData } from './types';
import PlastsulLogo from "/lovable-uploads/efd0f605-d8f6-47bd-8f0d-418d1591dfbd.png";

export const plastsul: CompanyData = {
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
};
