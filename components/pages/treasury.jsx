"use client"
import { useTranslation } from "@/app/i18n/client";
import { ActionBtns } from "@/components/actionBtns";
import { Cards } from "@/components/cards";
import { CollabsedTable } from "@/components/tables";
import { Transactions  } from "@/data/info";
const ContractsCards =[
  {title: 'Total Revenue' ,number: '$12,500' ,color:"green"},
  {title: 'Total Expenses ' ,number: "$5400" , color:"#bb0101"},
]
export default function Treasury ({ lng }){
  const { t } = useTranslation(lng , "dashboard")

  return (
    <div className="">
    <h1>{t("titles.treasury")}</h1>
    <div className="relative flex w-full gap-4 justify-around py-4">
      {ContractsCards.map((card , i )=> (
        <Cards card={card} key={i}/>
      ))}
      </div>
      <ActionBtns lng={lng} noAdd={true} data={Transactions } fileName={"Transactions"} />
      <CollabsedTable data={Transactions } />
      </div>
  )
}
