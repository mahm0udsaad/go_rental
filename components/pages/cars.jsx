"use client"
import { CollabsedTable, StaticTable } from "@/components/tables";
import { Cards } from "@/components/cards";
import { ActionBtns } from "@/components/actionBtns";
import { CarsOverview, VehicleDetails } from "@/data/info";
import { useState } from "react";
import { t } from "i18next";
import { useTranslation } from "@/app/i18n/client";

export default function Cars ({lng}){
  const { t } = useTranslation(lng , "dashboard")
  const [formData, setFormData] = useState({
      Plate: "",
      Brand: "",
      VehicleType: "",
      Meter: 0,
      ManufactureYear: 0,
      Color: "",
      ExtraHourPrice: 0.00,
      DailyRent: 0.00,
      WeeklyRent: 0.00,
      MonthlyRent: 0.00,
      InsuranceCompany: "",
      RegistrationType: "",
      FuelType: "",
      ExtraKilometerPrice: 0.00,
      DailyKilometerLimit: 0.00
  });
  return (
    <div className="">
    <h1>{t('titles.cars')}</h1>
    <div className="relative flex w-full gap-4 justify-around py-4">
      {CarsOverview.map((card , i )=> (
        <Cards card={card} i={i} key={i}/>
      ))}
      </div>
      <ActionBtns lng={lng} formTitle={"New Car"} data={VehicleDetails} fileName={'Cars'} formData={formData} setFormData={setFormData} />
      <CollabsedTable data={VehicleDetails} />
      </div>
  )
}
