"use client"
import { ActionBtns } from "@/components/actionBtns";
import { Cards } from "@/components/cards";
import { CollabsedTable } from "@/components/tables";
import { maintenanceData, maintenanceOverview } from "@/data/info";
import { useState } from "react";
import { formatDate } from "@/helper/dateNow";
import { useTranslation } from "@/app/i18n/client";

export default function Maintenance ({ lng }){
  const [formData, setFormData] = useState({
    plate: '',
    amount: '',
    client: '',
    date: formatDate(),
    cost: '',
    Description: '',
    maintenanceType: '', 
  });
  const { t } = useTranslation(lng , "dashboard")
  return (
    <div className="">
    <h1>{t('titles.maintenance')}</h1>
    <div className="relative flex w-full gap-4 justify-around py-4">
      {maintenanceOverview.map((card , i )=> (
        <Cards card={card} key={i}/>
      ))}
      </div>
      <ActionBtns lng={lng} formTitle={"Maintanance Card"} data={maintenanceData} fileName={'maintenance'} formData={formData} setFormData={setFormData}/>
      <CollabsedTable lng={lng} data={maintenanceData} />
      </div>
  )
}
