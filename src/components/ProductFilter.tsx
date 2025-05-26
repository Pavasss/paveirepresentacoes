
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";

type ProductFilterProps = {
  categories: string[];
  onCategoryChange: (category: string) => void;
};

const ProductFilter = ({ categories, onCategoryChange }: ProductFilterProps) => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    onCategoryChange(category);
  };

  return (
    <div className="w-full flex justify-center my-6">
      <Tabs
        defaultValue="all"
        value={activeCategory}
        onValueChange={handleCategoryChange}
        className="w-full max-w-6xl"
      >
        <TabsList className="w-full h-auto flex flex-wrap justify-center gap-1 p-2 bg-gray-100 rounded-lg">
          <TabsTrigger 
            value="all" 
            className="px-3 py-2 text-sm whitespace-nowrap data-[state=active]:bg-white data-[state=active]:text-brand-blue"
          >
            Todos
          </TabsTrigger>
          {categories.map((category) => (
            <TabsTrigger 
              key={category} 
              value={category} 
              className="px-3 py-2 text-sm whitespace-nowrap data-[state=active]:bg-white data-[state=active]:text-brand-blue"
            >
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
};

export default ProductFilter;
