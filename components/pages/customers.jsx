"use client"
import { Cards } from "@/components/cards"
import { CollabsedTable } from "@/components/tables";
import { ActionBtns } from "@/components/actionBtns";
import { useState } from "react";
import { useTranslation } from "@/app/i18n/client";
import { useSystemContext } from "@/context/context";
import { InvoiceFormModal } from "../invoicesForm";

export default function Customers ({ lng , Customers , userId}){
  const { t } = useTranslation(lng , "dashboard")
  const { addNew , setAddNew } = useSystemContext()
  const newCustomerNumber = Customers[Customers.length - 1].id + 1;
  const [formData , setFormData ] = useState({
      customerName: '',
      nationality: '',
      category: '',
      idNumber: '',
      idExpirationDate:'',
      mobile:'',
  })
  const requiredKeys = [
    "nationality",
    "customerName",
    "idNumber",
    "mobileNumber",
  ]
  const cards = [
    {title:t('totalCustomers'),number: `120`},
    {title:t('inactiveCustomers'),number: `50`},
    {title:t('activeCustomers'),number: `70`},
  ]
  return (
    <>
    <h1>{t('titles.customers')}</h1>
    <div className="relative flex w-full gap-4 justify-around py-4">
      {cards.map((card , i )=> (
        <Cards lng={lng} card={card} i={i} key={i}/>
      ))}
      </div>
      <ActionBtns lng={lng} data={Customers}  formTitle={"New Customer"} fileName={"Customers"} />
      <CollabsedTable lng={lng} data={Customers} />
        {addNew && (
          <InvoiceFormModal type={"customer"} requiredKeys={requiredKeys} userId={userId} lng={lng}   formTitle={"New Customer"} formData={formData}  isOpen={addNew} setIsOpen={setAddNew} />
      )}
      </>
  ) 
}
