// PageRenderer.js
import Contracts from '@/components/pages/contracts.jsx';
import Cars from '@/components/pages/cars';
import Customers from '@/components/pages/customers.jsx';
import Dashboard from '@/components/pages/dashboard.jsx';
import Invoices from '@/components/pages/invoices.jsx';
import Maintenance from '@/components/pages/maintenance.jsx';
import Treasury from '@/components/pages/treasury.jsx';
import NavBar from '@/components/navBar';

const PageRenderer = ({ params }) => {
  const renderPageComponent = () => {
    switch (params.dashboard) {
      case 'cars':
        return <Cars lng={params.lng} />;
      case 'contracts':
        return <Contracts lng={params.lng} />;
      case 'customers':
        return <Customers lng={params.lng} />;
      case 'invoices':
        return <Invoices lng={params.lng} />;
      case 'maintenance':
        return <Maintenance lng={params.lng} />;
      case 'treasury':
        return <Treasury lng={params.lng} />;
      default:
        return null;
    }
  };

  return (
    <main className="dash">
      <section className="sm:gap-4 sm:flex">
        <NavBar lng={params.lng} />
        <section className="flex w-full sm:h-[98dvh]">
          <section className="flex-col mt-16 sm:mt-4 bg-white rounded-xl w-full lg:w-[99%] pt-3 px-4 text-blue-950 text-3xl font-semibold relative">
            {renderPageComponent()}
          </section>
        </section>
      </section>
    </main>
  );
};

export async function generateStaticParams() {
  // Define the possible dashboard pages
  const pages = [
    'cars',
    'contracts',
    'customers',
    'invoices',
    'maintenance',
    'treasury',
  ];

  // Generate params for each page
  const params = pages.map((page) => ({ dashboard: page, lng: 'en' }));

  return params;
}

const RoutedPage = ({ params }) => {
  if (!params) {
    return (
      <main className="dash">
        <section className="sm:gap-4 sm:flex">
          <NavBar lng={params?.lng} />
          <section className="flex w-full sm:h-[98dvh]">
            <section className="flex-col mt-16 sm:mt-4 bg-white rounded-xl w-full lg:w-[99%] pt-3 px-4 text-blue-950 text-3xl font-semibold relative">
              <div className="flex justify-center items-center w-full h-full">
              <div className="border-4 border-gray-200 rounded-full w-12 h-12 border-t-4 border-blue-500 animate-spin"></div>
              </div>
            </section>
          </section>
        </section>
      </main>
    );
  }

  // Pass the params to the PageRenderer for rendering
  return <PageRenderer params={params} />;
};

export default RoutedPage;



