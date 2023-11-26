"use client"
import { Cards } from "@/components/cards"
import { Customers as CustomersData } from "@/data/info"
import { CollabsedTable, DaynamicTable } from "@/components/tables";
import { ActionBtns } from "@/components/actionBtns";
import { useState } from "react";

const cards = [
  {title:'Total Customers',number: `120`},
  {title:'Active Customers',number: `70`, color:'green'},
  {title:'Inactive Customers',number: `50`, color:'#ff8f00'},
]
export default function Customers (){
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
  return (
    <div className="">
    <h1>Customers</h1>
    <div className="relative flex w-full gap-4 justify-around py-4">
      {cards.map((card , i )=> (
        <Cards card={card} i={i} key={i}/>
      ))}
      </div>
      <ActionBtns formTitle={"New Customer"} data={CustomersData} fileName={"Customers"} formData={formData} setFormData={setFormData} />
      <CollabsedTable data={CustomersData} />
      </div>
  )
}
