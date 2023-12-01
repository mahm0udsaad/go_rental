"use client"
import { Cards } from "@/components/cards";
import { ActionBtns } from "@/components/actionBtns";
import { CarsOverview, VehicleDetails } from "@/data/info";
import { useState } from "react";
import { useTranslation } from "@/app/i18n/client";
import { GridView } from "../gridCarsView";
import { CiViewTable ,CiGrid41} from "react-icons/ci";
import { CollabsedTable } from "../tables";


export default function Cars ({ lng }){
  const [ isGrid , setIsGrid ] = useState(false)
  const { t } = useTranslation(lng , "dashboard")
  const formData = {
    plateNumber: "",
    brand: "",
    vehicleType: "",
    meter: 0,
    manufactureYear: 0,
    color: "",
    extraHourPrice: 0.00,
    dailyRent: 0.00,
    weeklyRent: 0.00,
    monthlyRent: 0.00,
    insuranceCompany: "",
    registrationType: "",
    fuelType: "",
    extraKilometerPrice: 0.00,
    dailyKilometerLimit: 0.00
  }
  const tableView = () =>{
    setIsGrid(false)
  }
  const gridView = () =>{
    setIsGrid(true)
  }
  return (
    <>
    <h1>{t('titles.cars')}</h1>
    <div className="relative grid grid-cols-2 lg:grid-cols-4 w-full gap-3  py-4">
      {CarsOverview.map((card , i )=> (
        <Cards lng={lng} card={card} i={i} key={i}/>
      ))}
      </div>
      <ActionBtns lng={lng} formTitle={"New Car"} data={VehicleDetails} fileName={'Cars'} formData={formData}  />
      <div className="flex justify-end w-full">
          <button onClick={tableView} className='p-2 text-black hover:bg-gray-200'>
          <CiViewTable />
          </button>
          <button onClick={gridView} className='p-2 text-black hover:bg-gray-200'>
         <CiGrid41 />
          </button>
        </div>
      {isGrid && <GridView data={VehicleDetails} lng={lng} cars={true}/>}
      {!isGrid && <CollabsedTable data={VehicleDetails} lng={lng} cars={true}/>}
      </>
  )
}
