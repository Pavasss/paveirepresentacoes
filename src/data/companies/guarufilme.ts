
import { CompanyData } from './types';
import GuarufilmeLogo from "/lovable-uploads/852cd3a3-5bd3-4f6c-b8e0-28314c83f5eb.png";

export const guarufilme: CompanyData = {
  id: "guarufilme",
  name: "Guarufilme",
  logo: GuarufilmeLogo,
  link: "http://www.guarufilme.com.br/novosite/",
  description: "Guarufilme é especializada na produção de filmes plásticos e embalagens flexíveis de alta performance. Seus produtos atendem às necessidades específicas de diversos segmentos da indústria alimentícia.",
  foundedYear: "1990",
  location: "Guarulhos, SP",
  products: [
    { id: 1, name: "Filme PVC Doméstico", description: "Filme PVC em rolos para uso doméstico", category: "Doméstica", subcategory: "PVC" },
    { id: 2, name: "Filmes Plásticos Industriais", description: "Filmes para máquinas industriais de embalagem", category: "Industrial", subcategory: "Plásticos" },
    { id: 3, name: "Sacos para Congelamento", description: "Sacos especiais para congelamento de alimentos", category: "Doméstica", subcategory: "Congelamento" }
  ]
};
