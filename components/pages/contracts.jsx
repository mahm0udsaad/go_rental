"use client"
import { useTranslation } from "@/app/i18n/client"
import { ActionBtns } from "@/components/actionBtns"
import { Cards } from "@/components/cards"
import { Contracts as ContractsData , VehicleDetails ,Customers} from "@/data/info"
import { useState } from "react"
import { CollabsedTable } from "../tables"

const ContractsCards =[
  {title: 'totalContracts' ,number: 50 , color:'black'},
  {title: 'limitedContracts' ,number: 30 , color:'#ff8f00'},
  {title: 'openContracts' ,number: 20 , color:'green'},
]
export default  function Contracts ({ lng }){
  const cars = VehicleDetails.filter(car => car.status == "Available")
  const [formData ,setFormData ] = useState({
    customerName: "",
    car: "",
    returnDate: "",
    paid:0,
    remainingDues: 0,
    meterReadingOut: 0,
    dateOut: "",
    dateIn: "",
    timeOut: "",
    timeIn: "",
    invoiceDetails: ""
  })
  const { t } = useTranslation(lng , "dashboard")
  return (
    <>
      <h1>{t('titles.contracts')}</h1>
      <div className="relative flex w-full gap-4 justify-around py-4">
      {ContractsCards.map((card , i )=> (
        <Cards lng={lng} i={i} card={card} key={i}/>
      ))}
      </div>
        <ActionBtns formData={formData} setFormData={setFormData} formTitle={"New Contract"} cars={cars} customers={Customers} lng={lng}  data={ContractsData}/>
        <CollabsedTable lng={lng} data={ContractsData} />
      </>
  )
}