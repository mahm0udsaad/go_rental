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
import { DeleteConfirmationDialog } from "../buttonLink";
import { useSystemContext } from "@/context/context";
import { fetchUserCars } from "@/prisma";
import { useEffect } from "react";

export default function Cars ({userId, lng }){
  const { isDeleteModalOpen, setIsDeleteModalOpen } = useSystemContext();
  const [ UserCars , setUserCars ] = useState([])
  const [ isGrid , setIsGrid ] = useState(false)
  const { t } = useTranslation(lng , "dashboard")
  useEffect(() => {
    const fetchData = async () => {
      try {
        const cars = await fetchUserCars(userId);
        setUserCars(cars?.Vehicles);
      } catch (error) {
        console.error('Error fetching user cars:', error);
      }
    };

    fetchData();
  }, [userId]);
console.log(UserCars);
  const CarsOverview = generateCarsOverview(UserCars, ["status"], ["allCars"]);
  CarsOverview.push({title:"lateCars" , number:0})

  const formData = {
    plateNumber: "",
    brand: "kia",
    vehicleType: "sedan",
    transmission:'automatic',
    manufactureYear: 2023,
    meter: 1200,
    color: "",
    insuranceCompany: "",
    fuelType: "gasolin 91",
    dailyRent: 300,
    weeklyRent: 2000,
    monthlyRent: 4000,
    extraHourPrice: 0.45,
    registrationType: "",
    extraKilometerPrice: 0.55,
    dailyKilometerLimit: 300
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
    <DeleteConfirmationDialog lng={lng} message={'deleteMessage'} isOpen={isDeleteModalOpen} setIsOpen={setIsDeleteModalOpen} />
    <div className="relative grid grid-cols-2 lg:grid-cols-4 w-full gap-3  py-4">
      {CarsOverview && CarsOverview.map((card , i )=> (
        <Cards lng={lng} card={card} i={i} key={i}/>
      ))}
      </div>
      <ActionBtns requiredKeys={requiredKeys}  userId={userId} lng={lng} formTitle={"New Car"} data={UserCars} fileName={'Cars'} formData={formData}  />
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
       {UserCars && UserCars.length > 0?
       <>
       {isGrid && <GridView data={UserCars} lng={lng} cars={true}/>}
      {!isGrid && <CollabsedTable data={UserCars} lng={lng} cars={true}/>}
       </>
       :
       <>
       <p className="text-center pt-8 text-lg justify-center w-full ">{t('messages.emptyCars')}</p>
       </>
       }
      </>
  )
}
