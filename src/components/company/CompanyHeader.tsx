
import { Building2 } from "lucide-react";
import { CompanyData } from "@/data/companies";

type CompanyHeaderProps = {
  company: CompanyData;
};

const CompanyHeader = ({ company }: CompanyHeaderProps) => {
  return (
    <div className="flex flex-col items-center mb-10">
      <div className="w-32 h-32 mb-4 flex items-center justify-center">
        {company.logo ? (
          <img
            src={company.logo}
            alt={`${company.name} logo`}
            className="max-h-full max-w-full object-contain"
          />
        ) : (
          <Building2 className="h-16 w-16 text-brand-blue" />
        )}
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-brand-blue text-center">
        {company.name}
      </h1>
    </div>
  );
};

export default CompanyHeader;
