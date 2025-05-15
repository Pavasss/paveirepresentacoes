
import { CompanyData } from './types';
import ThermoflexoLogo from "/lovable-uploads/87a59662-6473-4aec-9e38-37ecf067dbe7.png";

export const thermoflexo: CompanyData = {
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
};
