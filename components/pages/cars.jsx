"use client"
import { CollabsedTable} from "@/components/tables";
import { Cards } from "@/components/cards";
import { ActionBtns } from "@/components/actionBtns";
import { CarsOverview, VehicleDetails } from "@/data/info";
import { useState } from "react";
import { useTranslation } from "@/app/i18n/client";


export default function Cars ({ lng }){
  const { t } = useTranslation(lng , "dashboard")
  const formData = {
    plateNumber: "",
    brand: "",
    vehicleType: "",
    meter: 0,
    manufactureYear: 0,
    color: "",
    extraHourPrice: 0.00,
    dailyRent: 0.00,
    weeklyRent: 0.00,
    monthlyRent: 0.00,
    insuranceCompany: "",
    registrationType: "",
    fuelType: "",
    extraKilometerPrice: 0.00,
    dailyKilometerLimit: 0.00
  }
  return (
    <>
    <h1>{t('titles.cars')}</h1>
    <div className="relative flex w-full gap-4 justify-around py-4">
      {CarsOverview.map((card , i )=> (
        <Cards lng={lng} card={card} i={i} key={i}/>
      ))}
      </div>
      <ActionBtns lng={lng} formTitle={"New Car"} data={VehicleDetails} fileName={'Cars'} formData={formData}  />
      <CollabsedTable cars={true} lng={lng} data={VehicleDetails} />
      </>
  )
}
