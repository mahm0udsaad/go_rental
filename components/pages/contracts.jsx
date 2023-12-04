"use client"
import { useTranslation } from "@/app/i18n/client"
import { ActionBtns } from "@/components/actionBtns"
import { Cards } from "@/components/cards"
import { VehicleDetails ,Customers} from "@/data/info"
import { useState } from "react"
import { CollabsedTable } from "../tables"
import {  extractNonObjectKeyValuePairsFromArray } from "@/helper/convertors"

const ContractsCards =[
  {title: 'totalContracts' ,number: 50 , color:'black'},
  {title: 'limitedContracts' ,number: 30 , color:'#ff8f00'},
  {title: 'openContracts' ,number: 20 , color:'green'},
]
export default  function Contracts ({ lng  ,contracts}){
  const cars = VehicleDetails.filter(car => car.status !== "Rented")
  const contractsData = extractNonObjectKeyValuePairsFromArray(contracts)
  console.log(contractsData);
  const formData = {
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
  }
  const { t } = useTranslation(lng , "dashboard")
  return (
    <>
      <h1>{t('titles.contracts')}</h1>
      <div className="relative flex w-full gap-4 justify-around py-4">
      {ContractsCards.map((card , i )=> (
        <Cards lng={lng} i={i} card={card} key={i}/>
      ))}
      </div>
        <ActionBtns formData={formData}  formTitle={"New Contract"} cars={cars} customers={Customers} lng={lng}  data={contractsData}/>
        {contractsData && contractsData.length > 0 ? 
        <CollabsedTable lng={lng} data={contractsData} />
        :
        <>
        <h1 className="text-center pt-8 ">There is no contracts</h1>
        </>
      }
      </>
  )
}
