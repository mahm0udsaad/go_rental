"use client"
import Contracts from '@/components/pages/contracts.jsx';
import Cars from '@/components/pages/cars';
import Customers from '@/components/pages/customers.jsx';
import Dashboard from '@/components/pages/dashboard.jsx';
import Invoices from '@/components/pages/invoices.jsx';
import Maintenance from '@/components/pages/maintenance.jsx';
import Treasury from '@/components/pages/treasury.jsx';
import { useSearchParams } from 'next/navigation';


const PageRenderer = () => {
  const pageName = useSearchParams().get('p')
  const getPageComponent = () => {
    switch (pageName) {
      case 'cars':
        return <Cars />;
      case 'contracts':
        return <Contracts />;
      case 'customers':
        return <Customers />;
      case 'invoices':
        return <Invoices />;
      case 'maintenance':
        return <Maintenance />;
      case 'treasury':
        return <Treasury />;
      default:
        return <Dashboard />;
    }
  };

  const currentPage = getPageComponent();

  return (
    <section className="flex-col mt-4 bg-white rounded-xl w-full lg:w-[99%] pt-8 px-4 text-blue-950 text-3xl font-semibold tracking-wide relative">
      {currentPage}
      </section>
  );
};


export default PageRenderer;
