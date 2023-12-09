"use client"
import { useTranslation } from "@/app/i18n/client"
import { ActionBtns } from "@/components/actionBtns"
import { Cards } from "@/components/cards"
import { useState } from "react"
import { CollabsedTable } from "../tables"
import {  extractNonObjectKeyValuePairsFromArray } from "@/helper/convertors"
import { useSystemContext } from "@/context/context"
import { InvoiceFormModal } from "../invoicesForm"

const ContractsCards =[
  {title: 'totalContracts' ,number: 50 , color:'black'},
  {title: 'limitedContracts' ,number: 30 , color:'#ff8f00'},
  {title: 'openContracts' ,number: 20 , color:'green'},
]
export default  function Contracts ({ lng , userId,cars  ,contracts}){
  const { addNew , setAddNew  } = useSystemContext();
  const contractsData = extractNonObjectKeyValuePairsFromArray(contracts)
  console.log(contractsData);
  const formData = {
    plateNumber: "",
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
        <ActionBtns  formTitle={"New Contract"}  lng={lng}  data={contractsData}/>
        {contractsData && contractsData.length > 0 ? 
        <CollabsedTable lng={lng}  data={contractsData} />
        :
        <>
        <h1 className="text-center pt-8 ">{t('messages.noContracts')}</h1>
        </>
      }
       {addNew && (
        <InvoiceFormModal type={'contract'}  cars={cars}  fileName={'maintenance'} userId={userId} lng={lng}  formTitle={"New Contract"} formData={formData}  isOpen={addNew} setIsOpen={setAddNew} />
      )}
      </>
  )
}
