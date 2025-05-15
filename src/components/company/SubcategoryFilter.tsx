
type SubcategoryFilterProps = {
  subcategories: string[];
  selectedSubcategory: string;
  onSubcategoryChange: (subcategory: string) => void;
};

const SubcategoryFilter = ({ 
  subcategories, 
  selectedSubcategory, 
  onSubcategoryChange 
}: SubcategoryFilterProps) => {
  if (subcategories.length === 0) return null;
  
  return (
    <div className="w-full flex justify-center my-6">
      <div className="w-full max-w-3xl">
        <h3 className="text-sm font-medium text-brand-gray mb-2 text-center">Subcategorias</h3>
        <div className="flex flex-wrap justify-center gap-2">
          <button
            onClick={() => onSubcategoryChange("all")}
            className={`px-3 py-1 rounded-full text-sm ${
              selectedSubcategory === "all"
                ? "bg-brand-blue text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Todas
          </button>
          {subcategories.map((subcategory) => (
            <button
              key={subcategory}
              onClick={() => onSubcategoryChange(subcategory)}
              className={`px-3 py-1 rounded-full text-sm ${
                selectedSubcategory === subcategory
                  ? "bg-brand-blue text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {subcategory}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubcategoryFilter;
