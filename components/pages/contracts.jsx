"use client"
import { useTranslation } from "@/app/i18n/client"
import { ActionBtns } from "@/components/actionBtns"
import { Cards } from "@/components/cards"
import { CollabsedTable } from "@/components/tables"
import { Contracts as ContractsData } from "@/data/info"
import { useState } from "react"
const ContractsCards =[
  {title: 'Total Contracts ' ,number: 50 , color:'black'},
  {title: 'Opend Contracts ' ,number: 20 , color:'green'},
  {title: 'Limited Contracts ' ,number: 30 , color:'#ff8f00'},
]

export default  function Contracts ({ lng }){
  const [formData ,setFormData ] = useState({
    Plate: "",
    Brand: "",
    Contract: "",
    Name: "",
    ReturnDate: "",
    RemainingDues: 0,
    ContractDebt: 0,
    MeterReadingOut: 0,
    MeterReadingIn: 0,
    TimeOut: "",
    TimeIn: "",
    DateOut: "",
    DateIn: "",
    ReturnStatus: "",
    InvoiceDetails: ""
  })
  const { t } = useTranslation(lng , "dashboard")
  return (
    <div className="">
      <h1>{t('titles.contracts')}</h1>
    <div className="relative flex w-full gap-4 justify-around py-4">
      {ContractsCards.map((card , i )=> (
        <Cards card={card} key={i}/>
      ))}
      </div>
      <ActionBtns lng={lng} formTitle={"New Contract"} formData={formData} setFormData={setFormData} data={ContractsData} fileName={"Contracts"}/>
      <CollabsedTable data={ContractsData} />
      </div>
  )
}
