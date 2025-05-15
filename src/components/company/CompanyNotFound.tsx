
import { Button } from "@/components/ui/button";

const CompanyNotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800">Empresa não encontrada</h2>
        <p className="mt-2 text-gray-600">A empresa que você está procurando não existe ou foi removida.</p>
        <Button className="mt-4" asChild>
          <a href="/">Voltar para página inicial</a>
        </Button>
      </div>
    </div>
  );
};

export default CompanyNotFound;
