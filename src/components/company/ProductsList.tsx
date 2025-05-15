
import { useState, useMemo } from "react";
import { CompanyData } from "@/data/companies";
import ProductFilter from "@/components/ProductFilter";
import SubcategoryFilter from "./SubcategoryFilter";
import ProductCard from "./ProductCard";

type ProductsListProps = {
  company: CompanyData;
};

const ProductsList = ({ company }: ProductsListProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>("all");

  const categories = useMemo(() => Array.from(
    new Set(company.products.map((product) => product.category))
  ), [company.products]);

  const subcategories = useMemo(() => Array.from(
    new Set(
      company.products
        .filter(product => selectedCategory === "all" || product.category === selectedCategory)
        .map(product => product.subcategory)
    )
  ), [company.products, selectedCategory]);

  const filteredProducts = useMemo(() => company.products.filter(
    (product) => 
      (selectedCategory === "all" || product.category === selectedCategory) &&
      (selectedSubcategory === "all" || product.subcategory === selectedSubcategory)
  ), [company.products, selectedCategory, selectedSubcategory]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setSelectedSubcategory("all"); // Reset subcategory when category changes
  };

  return (
    <div className="mb-16">
      <h2 className="text-2xl font-semibold text-brand-gray mb-6 text-center">
        Produtos da {company.name}
      </h2>
      
      {/* Category Filter */}
      <ProductFilter 
        categories={categories} 
        onCategoryChange={handleCategoryChange} 
      />
      
      {/* Subcategory Filter */}
      <SubcategoryFilter
        subcategories={subcategories}
        selectedSubcategory={selectedSubcategory}
        onSubcategoryChange={setSelectedSubcategory}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
