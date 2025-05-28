
// Company types shared across all files
export type Product = {
  id: number;
  name: string;
  description: string;
  category: string;
  subcategory: string;
  imageUrl?: string;
  images?: string[]; // Support for multiple images
};

export type CompanyData = {
  id: string;
  name: string;
  logo: string;
  link: string;
  description: string;
  foundedYear: string;
  location: string;
  products: Product[];
};
