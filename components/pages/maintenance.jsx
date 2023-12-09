"use client"
import { ActionBtns } from "@/components/actionBtns";
import { Cards } from "@/components/cards";
import { CollabsedTable } from "@/components/tables";
import { useState } from "react";
import { formatDate } from "@/helper/dateNow";
import { useTranslation } from "@/app/i18n/client";
import { useSystemContext } from "@/context/context";
import { InvoiceFormModal } from "../invoicesForm";
import { generateCarsOverview } from "@/data/info";

export default function Maintenance ({ lng , cars , maintenance , userId}){
  const { addNew , setAddNew  } = useSystemContext();
  const maintenanceOverview = generateCarsOverview(maintenance, ["maintenanceType"]);
  const formData = {
    plateNumber: "",
    maintenanceType: '', 
    cost: '',
    description: '',
  }
  const requiredKeys =[
    "plateNumber",
    "maintenanceType",
    "cost"
  ]
  const { t } = useTranslation(lng , "dashboard")
  return (
    <>
    <h1>{t('titles.maintenance')}</h1>
    <div className="relative flex w-full gap-4 justify-around py-4">
      {maintenanceOverview.map((card , i )=> (
        <Cards lng={lng} card={card} key={i}/>
      ))}
      </div>
      <ActionBtns formTitle={'Maintanance Card'} lng={lng} />
      {
        !maintenance || maintenance.length == 0 ?  <h1 className="text-center pt-8">{t("messages.noMaintanence")}</h1> : <CollabsedTable  lng={lng} data={maintenance} /> 
      }
      {addNew && (
        <InvoiceFormModal type={'maintenance'} requiredKeys={requiredKeys} cars={cars} data={maintenance} fileName={'maintenance'} userId={userId} lng={lng}  formTitle={"Maintanance Card"} formData={formData}  isOpen={addNew} setIsOpen={setAddNew} />
    )}
      </>
  )
}
