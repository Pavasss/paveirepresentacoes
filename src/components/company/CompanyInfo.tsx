
import { CompanyData } from "@/data/companies";

type CompanyInfoProps = {
  company: CompanyData;
};

const CompanyInfo = ({ company }: CompanyInfoProps) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-10">
      <h2 className="text-2xl font-semibold text-brand-gray mb-4">Sobre a Empresa</h2>
      <p className="text-gray-700 mb-6">{company.description}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 className="font-semibold text-brand-gray">Fundação</h3>
          <p className="text-gray-700">{company.foundedYear}</p>
        </div>
        <div>
          <h3 className="font-semibold text-brand-gray">Localização</h3>
          <p className="text-gray-700">{company.location}</p>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
