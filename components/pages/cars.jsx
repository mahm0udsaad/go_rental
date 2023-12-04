"use client"
import { Cards } from "@/components/cards";
import { ActionBtns } from "@/components/actionBtns";
import { useState } from "react";
import { useTranslation } from "@/app/i18n/client";
import { GridView } from "../gridCarsView";
import { CiViewTable ,CiGrid41} from "react-icons/ci";
import { CollabsedTable } from "../tables";
import { generateCarsOverview } from "@/data/info";
import { Tooltip } from "@mui/material"; 

export default function Cars ({userId, lng , Cars}){
  const CarsOverview = generateCarsOverview(Cars, ["status"], ["allCars"]);
  CarsOverview.push({title:"lateCars" , number:0})

  const [ isGrid , setIsGrid ] = useState(false)
  const { t } = useTranslation(lng , "dashboard")
  const formData = {
    plateNumber: "",
    brand: "",
    vehicleType: "sedan",
    transmission:'',
    manufactureYear: 2023,
    meter: 0,
    color: "",
    insuranceCompany: "",
    fuelType: "",
    dailyRent: 0.00,
    weeklyRent: 0.00,
    monthlyRent: 0.00,
    extraHourPrice: 0.00,
    registrationType: "",
    extraKilometerPrice: 0.00,
    dailyKilometerLimit: 0.00
  }
  const requiredKeys= [
    "plateNumber",
    "brand",
    "transmissi",
    "meter",
    "manufactureYear",
    "extraHourPrice",
    "dailyRent",
    "fuelType",
    "dailyKilometerLimit"
  ]
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
      {CarsOverview && CarsOverview.map((card , i )=> (
        <Cards lng={lng} card={card} i={i} key={i}/>
      ))}
      </div>
      <ActionBtns requiredKeys={requiredKeys}  userId={userId} lng={lng} formTitle={"New Car"} data={Cars} fileName={'Cars'} formData={formData}  />
      <div className="flex justify-end w-full">
      <Tooltip title="Table View">
          <button onClick={tableView} className='p-2 text-black hover:bg-gray-200'>
          <CiViewTable />
          </button>
        </Tooltip>
      <Tooltip title="Grid View">
          <button onClick={gridView} className='p-2 text-black hover:bg-gray-200'>
         <CiGrid41 />
          </button>
        </Tooltip>
        </div>
       {Cars && Cars.length > 0?
       <>
       {isGrid && <GridView data={Cars} lng={lng} cars={true}/>}
      {!isGrid && <CollabsedTable data={Cars} lng={lng} cars={true}/>}
       </>
       :
       <>
       <p className="text-center pt-8 text-lg justify-center w-full ">There is no Cars Start adding some</p>
       </>
       }
      </>
  )
}
