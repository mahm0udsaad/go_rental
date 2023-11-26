import { useTranslation } from "@/app/i18n";
import { BarChart, Doughnut, LineChart, TotalSummaryChart } from "@/components/data";
import { RentalRows } from "@/components/tables";
import { RentalExport } from '@/data/info';

export default async function Dashboard ({lng}){
  const { t } = await useTranslation(lng , "dashboard")
    return (
      <div className="flex flex-col justify-between h-full">
      <div>
      <h1>{t("titles.dashboard")}</h1>
      <div className="flex lg:flex-row flex-col items-center lg:justify-between w-full pt-4">
      <div className="w-5/6 h-60">
      <h1 className='text-lg'>{t('dashboard.revenues')}</h1>
      <BarChart lng={lng}/>
      </div>
      <Doughnut  lng={lng}/>
      </div>
      </div>
      <div className="flex lg:flex-row flex-col justify-between pt-8">
      <div className="w-[30%]">
        <TotalSummaryChart  lng={lng}/>
      </div>
      <div className="relative">
          <h1 className='text-sm py-3'>{t("dashboard.mostRentedCars")}</h1>
          <RentalRows lng={lng} rentalData={RentalExport} />
      </div>
      <div className="w-[30%] h-full">
        <LineChart  lng={lng}/>
      </div>
      </div>
      </div>
    )
  }
  

