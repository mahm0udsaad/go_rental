"use client"
import { ActionBtns } from "@/components/actionBtns";
import { Cards } from "@/components/cards";
import { CollabsedTable } from "@/components/tables";
import { maintenanceData, maintenanceOverview } from "@/data/info";
import InvoiceFormModal from "@/components/invoicesForm";
import { useState } from "react";
import { formatDate } from "@/helper/dateNow";

export default function Maintenance (){
  const [formData, setFormData] = useState({
    plate: '',
    amount: '',
    client: '',
    date: formatDate(),
    cost: '',
    Description: '',
    maintenanceType: '', 
  });
  return (
    <div className="">
    <h1>Maintanance</h1>
    <div className="relative flex w-full gap-4 justify-around py-4">
      {maintenanceOverview.map((card , i )=> (
        <Cards card={card} key={i}/>
      ))}
      </div>
      <ActionBtns formTitle={"Maintanance Card"} data={maintenanceData} fileName={'maintenance'} formData={formData} setFormData={setFormData}/>
      <CollabsedTable data={maintenanceData} />
      </div>
  )
}
