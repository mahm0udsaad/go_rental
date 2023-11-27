"use client"
import { ActionBtns } from "@/components/actionBtns";
import { Cards } from "@/components/cards";
import { CollabsedTable } from "@/components/tables";
import { Customers, Invoices as InvoicesData, VehicleDetails, overview  } from "@/data/info";
import { useState } from "react";
import { formatDate } from "@/helper/dateNow";
import { useTranslation } from "@/app/i18n/client";

export default  function Invoices ({ lng }){
  const [formData, setFormData] = useState({
    customerName: '',
    car:'',
    Date: formatDate(),
    price: '',
    paid: '',
    remainingDues: '',
    addtax: '',
    description: '',
  });
  const { t } = useTranslation(lng , "dashboard")

  return (
    < >
    <h1>{t('titles.invoices')}</h1>
    <div className="relative flex w-full gap-4 justify-around py-4">
      {overview.map((card , i )=> (
        <Cards lng={lng} card={card} i={i} key={i}/>
      ))}
      </div>
      <ActionBtns customers={Customers} cars={VehicleDetails} lng={lng} formTitle={"New Invoice"} data={InvoicesData} fileName={"Invoices"} formData={formData} setFormData={setFormData} />
      <CollabsedTable lng={lng} data={InvoicesData} />
      </>
  )
}
