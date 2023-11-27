"use client"
import { Cards } from "@/components/cards"
import { Customers as CustomersData } from "@/data/info"
import { CollabsedTable, DaynamicTable } from "@/components/tables";
import { ActionBtns } from "@/components/actionBtns";
import { useState } from "react";
import { useTranslation } from "@/app/i18n/client";


export default function Customers ({ lng }){
  const { t } = useTranslation(lng , "dashboard")
  const newCustomerNumber = CustomersData[CustomersData.length - 1].id + 1;
  const [formData , setFormData ] = useState({
      customerNumber: newCustomerNumber,
      customerName: '',
      idOrResidenceCard: '',
      idCardDate: '',
      placeOfIssueIDCard: '',
      nationality: '',
      driversLicenseNumber: '',
      licenseExpiryDate: '',
      placeOfIssueLicense: '',
      dateOfBirth: '',
      placeOfBirth: '',
      mobileNumber: '',
      homePhone: '',
      workPhone: '',
      homeAddress: '',
      workAddress: ''
  })
  const cards = [
    {title:t('dashboard.totalCustomers'),number: `120`},
    {title:t('dashboard.inactiveCustomers'),number: `50`},
    {title:t('dashboard.activeCustomers'),number: `70`},
  ]
  return (
    <>
    <h1>{t('titles.customers')}</h1>
    <div className="relative flex w-full gap-4 justify-around py-4">
      {cards.map((card , i )=> (
        <Cards lng={lng} card={card} i={i} key={i}/>
      ))}
      </div>
      <ActionBtns lng={lng} formTitle={"New Customer"} data={CustomersData} fileName={"Customers"} formData={formData} setFormData={setFormData} />
      <CollabsedTable lng={lng} data={CustomersData} />
      </>
  ) 
}
