
import { Building2, ExternalLink } from "lucide-react";
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
      <a
        href={company.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 flex items-center text-brand-blue hover:text-brand-darkBlue transition-colors"
      >
        Visitar site oficial <ExternalLink size={16} className="ml-1" />
      </a>
    </div>
  );
};

export default CompanyHeader;
