import { useTranslation } from "@/app/i18n";
import { BarChart, Doughnut, LineChart, TotalSummaryChart } from "@/components/data";
import { RentalRows } from "@/components/tables";
import { RentalExport } from '@/data/info';
import { Cards } from "../cards";

export default async function Analytics ({lng}){
  const { t } = await useTranslation(lng , "dashboard")
  const cards = [
    {title:t('totalCustomers'),number: `120`},
    {title:t('inactiveCustomers'),number: `50`},
    {title:t('activeCustomers'),number: `70`},
  ]
  return (
    <div className="flex flex-col justify-between h-auto">
      <div>
        <h1 className="pb-3">{t("titles.dashboard")}</h1>
        <div className="flex lg:flex-row md:h-[38dvh] flex-col items-center lg:justify-between w-full">
          <div className="w-full lg:w-1/2">
            <h1 className='text-lg'>{t('dashboard.revenues')}</h1>
            <BarChart lng={lng} />
          </div>
          <div className="w-full lg:w-2/5  h-72 md:h-60 flex justify-center">
            <Doughnut lng={lng} />
          </div>
          <div className="w-full lg:w-1/2">
            {cards.map((card, i) => (
              <Cards lng={lng} card={card} i={i} key={i} />
            ))}
          </div>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col justify-between mt-8">
        <div className="w-full  lg:w-1/2">
          <LineChart lng={lng} />
        </div>
        <div className="w-full lg:w-2/5 h-72 md:h-60 flex justify-center">
          <TotalSummaryChart lng={lng} />
        </div>  
        <div className="w-full h-60 lg:w-1/2">
          <h1 className='text-sm py-3'>{t("dashboard.mostRentedCars")}</h1>
          <RentalRows lng={lng} rentalData={RentalExport} />
        </div>
      </div>
    </div>
  );
  
  }
  

