
import { useParams } from "react-router-dom";
import { useMemo } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import CompanyHeader from "../components/company/CompanyHeader";
import CompanyInfo from "../components/company/CompanyInfo";
import ProductsList from "../components/company/ProductsList";
import CompanyNotFound from "../components/company/CompanyNotFound";
import { companiesData } from "../data/companies";

const Company = () => {
  const { id } = useParams<{ id: string }>();
  const company = useMemo(() => companiesData.find((c) => c.id === id), [id]);
  
  if (!company) {
    return <CompanyNotFound />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 md:px-6">
          <CompanyHeader company={company} />
          <CompanyInfo company={company} />
          <ProductsList company={company} />
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Company;
