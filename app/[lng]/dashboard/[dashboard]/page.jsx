import React from 'react';
import Contracts from '@/components/pages/contracts.jsx';
import Cars from '@/components/pages/cars';
import Customers from '@/components/pages/customers.jsx';
import Dashboard from '@/components/pages/dashboard.jsx';
import Invoices from '@/components/pages/invoices.jsx';
import Maintenance from '@/components/pages/maintenance.jsx';
import Treasury from '@/components/pages/treasury.jsx';
import NavBar from '@/components/navBar';

export async function generateStaticParams() {
  const pages = [
    'cars',
    'contracts',
    'customers',
    'invoices',
    'maintenance',
    'treasury',
  ];

  const staticPages = pages.map(page => ({ p: page }));
  return staticPages;
}
const PageRenderer = ({params}) => {
    const getPageComponent = () => {
      switch (params.dashboard) {
        case 'cars':
          return <Cars lng={params.lng}/>;
        case 'contracts':
          return <Contracts lng={params.lng}/>;
        case 'customers':
          return <Customers lng={params.lng}/>;
        case 'invoices':
          return <Invoices lng={params.lng}/>;
        case 'maintenance':
          return <Maintenance lng={params.lng}/>;
        case 'treasury':
          return <Treasury lng={params.lng}/>;
        default:
          return null;
      }
    };
    const currentPage = getPageComponent();
    return (
        <main className="dash">
         <section className="sm:gap-4 sm:flex">
            <NavBar lng={params.lng}/>
            <section className="flex w-full sm:h-[98dvh]">
              <section className="flex-col mt-16 sm:mt-4 bg-white rounded-xl w-full lg:w-[99%] pt-3 px-4 text-blue-950 text-3xl font-semibold relative">
            {currentPage}
            </section>
          </section>
        </section>
      </main>
    );
  };
export default PageRenderer;