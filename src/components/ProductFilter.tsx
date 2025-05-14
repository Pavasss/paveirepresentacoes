
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
        className="w-full max-w-3xl"
      >
        <TabsList className="w-full overflow-x-auto flex justify-start md:justify-center gap-1 p-1">
          <TabsTrigger value="all" className="px-4">
            Todos
          </TabsTrigger>
          {categories.map((category) => (
            <TabsTrigger key={category} value={category} className="px-4">
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
};

export default ProductFilter;
