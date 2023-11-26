"use client"
import { ActionBtns } from "@/components/actionBtns";
import { Cards } from "@/components/cards";
import { CollabsedTable } from "@/components/tables";
import { Invoices as InvoicesData, overview  } from "@/data/info";
import { useState } from "react";
import { formatDate } from "@/helper/dateNow";
import { useTranslation } from "@/app/i18n/client";

export default  function Invoices ({ lng }){
  const [formData, setFormData] = useState({
    id: '',
    date: formatDate(),
    customer: '',
    amount: '',
    description: '',
    price: '',
    total: '',
    paid: '',
    debt: '',
    addtax: '',
  });
  const { t } = useTranslation(lng , "dashboard")

  return (
    <div className="">
    <h1>{t('titles.invoices')}</h1>
    <div className="relative flex w-full gap-4 justify-around py-4">
      {overview.map((card , i )=> (
        <Cards card={card} i={i} key={i}/>
      ))}
      </div>
      <ActionBtns lng={lng} formTitle={"New Invoice"} data={InvoicesData} fileName={"Invoices"} formData={formData} setFormData={setFormData} />
      <CollabsedTable data={InvoicesData} />
      </div>
  )
}
