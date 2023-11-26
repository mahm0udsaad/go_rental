"use client"
import { IoCarSportOutline } from "react-icons/io5";
import { LuLayoutDashboard } from "react-icons/lu";
import { PiMoneyDuotone } from "react-icons/pi";
import { FaRegUserCircle } from "react-icons/fa";
import { GrVmMaintenance } from "react-icons/gr";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { HiOutlineDocumentChartBar } from "react-icons/hi2";
import { useRouter, useSearchParams } from 'next/navigation';
import { useTranslation } from "@/app/i18n/client";

const navItems = [
  { text: 'Dashboard', link: '/dashboard', icon: <LuLayoutDashboard /> },
  { text: 'Cars', link: '/cars', icon: <IoCarSportOutline /> },
  { text: 'Customers', link: '/customers', icon: <FaRegUserCircle /> },
  { text: 'Contracts', link: '/contracts', icon: <HiOutlineDocumentChartBar />},
  { text: 'Treasury', link: '/treasury', icon: <PiMoneyDuotone /> },
  { text: 'Invoices', link: '/invoices', icon: <LiaFileInvoiceSolid />},
  { text: 'Maintenance', link: '/maintenance', icon: <GrVmMaintenance />},
];

const NavLinks = ({lng}) => {
    const router = useRouter();
    const page = useSearchParams().get('p')
  const handleLinkClick = (link) => {
    const currentLink = link.split('/')[1]
    router.push(`?p=${currentLink}`);
  };
    const { t } = useTranslation(lng , "dashboard")
    const renderIcon = (iconName) => {
      switch (iconName) {
        case 'LuLayoutDashboard':
          return <LuLayoutDashboard />;
        case 'IoCarSportOutline':
          return <IoCarSportOutline />;
        case 'FaRegUserCircle':
          return <FaRegUserCircle />;
        case 'HiOutlineDocumentChartBar':
          return <HiOutlineDocumentChartBar />;
        case 'PiMoneyDuotone':
          return <PiMoneyDuotone />;
        case 'LiaFileInvoiceSolid':
          return <LiaFileInvoiceSolid />;
        case 'GrVmMaintenance':
          return <GrVmMaintenance />;
        default:
          return null; // Return a default icon or handle the case as needed
      }
    };
  return (
    <section className="flex flex-col w-full mx-4">
     {t('navItems', { returnObjects: true }).map((item, index) => (
      <div
        key={index}
        className={`hover:text-white self-stretch flex justify-between gap-4 mt-7 ${
          page === item.text.toLowerCase() ? 'text-white' : 'text-[#a6a6a6]'
        }`}
        onClick={() => handleLinkClick(item.link)}
      >
        <div className="text-2xl flex items-center cursor-pointer">
          {renderIcon(item.icon)}
          <span className="text-lg font-semibold mx-2">{item.text}</span>
        </div>
      </div>
    ))}
    </section>
  );
}
export default  NavLinks ;
