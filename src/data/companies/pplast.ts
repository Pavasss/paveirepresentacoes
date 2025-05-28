import { CompanyData } from './types';
import PplastLogo from "/lovable-uploads/3d52585b-e4df-4515-a565-228019c7eebc.png";

export const pplast: CompanyData = {
  id: "pplast",
  name: "P.Plast",
  logo: PplastLogo,
  link: "https://pplast.com.br/",
  description: "P.Plast é uma empresa consolidada no mercado de embalagens plásticas, reconhecida pela excelência em produtos para o setor de food service. Nossa dedicação à qualidade e inovação nos torna parceiros ideais para seu negócio.",
  foundedYear: "1995",
  location: "Belo Horizonte, MG",
  images: [
    "/lovable-uploads/45006a8e-cedb-41b8-8536-943f22c5ceca.png",
    "/lovable-uploads/4728399f-477e-431b-aa72-21744815b3e7.png",
    "/lovable-uploads/56ab2728-7cec-4e65-a864-2a48b5c694fe.png",
    "/lovable-uploads/60479c57-352f-44ef-991c-453ed1d3be7c.png"
  ],
  products: [
    { id: 1, name: "Sacolas Plásticas", description: "Sacolas resistentes para transporte", category: "Sacolas", subcategory: "Transporte" },
    { id: 2, name: "Embalagens a Vácuo", description: "Embalagens para conservação de alimentos", category: "Embalagens", subcategory: "Vácuo" },
    { id: 3, name: "Bobinas Plásticas", description: "Bobinas para máquinas de embalar", category: "Bobinas", subcategory: "Industrial" },
    { id: 4, name: "Sacos Ziplock", description: "Sacos com fechamento hermético", category: "Sacos", subcategory: "Ziplock" }
  ]
};
