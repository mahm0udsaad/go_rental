"use client"
import { CiViewTable ,CiGrid41} from "react-icons/ci";
import { ActionBtns } from "@/components/actionBtns";
import { useSystemContext } from "@/context/context";
import { useTranslation } from "@/app/i18n/client";
import { generateCarsOverview } from "@/data/info";
import { Cards } from "@/components/cards";
import { CollabsedTable } from "../tables";
import { GridView } from "../gridCarsView";
import { Tooltip } from "@mui/material"; 
import { useState } from "react";
import { EditVehicleForm, InvoiceFormModal } from "../invoicesForm";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { getVehicleById } from "@/prisma";

export default function Cars ({userId, lng ,Cars}){

  const CarsOverview = generateCarsOverview(Cars, ["status"], ["allCars"]);
  const { isDeleteModalOpen, setIsDeleteModalOpen ,addNew , setAddNew  } = useSystemContext();

  const [ isGrid , setIsGrid ] = useState(false)
  const { t } = useTranslation(lng , "dashboard")
  
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
  const [openEditModal, setOpenEditModal] = useState(false);
  const [car, setCar] = useState(null);
  const editParam = useSearchParams().get('edit')
  useEffect(() => {
    if (editParam) {
      getVehicleById(editParam)
        .then((res) => {
          setCar(res);
          setOpenEditModal(true)
        })
        .catch((error) => {
          console.error('Error fetching car data:', error);
        });
    }
  }, [editParam]);

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
       <p className="text-center pt-8 text-lg justify-center w-full ">{t('messages.emptyCars')}</p>
       </>
       }
      <EditVehicleForm formData={car} lng={lng}  isOpen={openEditModal} setIsOpen={setOpenEditModal} />
      {addNew && (
          <InvoiceFormModal requiredKeys={requiredKeys} userId={userId} lng={lng}  formTitle={"New Vehicle"} formData={formData}  isOpen={addNew} setIsOpen={setAddNew} />
      )}
      </>
  )
}
