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
import Link from "next/link";

const NavLinks = ({lng}) => {
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
          return null;
      }
    };
  return (
    <section className="flex flex-col w-full mx-4">
     {t('navItems', { returnObjects: true }).map((item, index) => (
        <Link href={item.link} key={index}>
          <div
            className={`text-white self-stretch flex justify-between gap-4 mt-7 md:mt-5 `}
          >
            <div className="text-2xl flex items-center cursor-pointer">
              {renderIcon(item.icon)}
              <span className="text-lg font-semibold mx-2">{item.text}</span>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
}
export default  NavLinks ;
