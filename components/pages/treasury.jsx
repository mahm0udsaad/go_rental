"use client"
import { useTranslation } from "@/app/i18n/client";
import { ActionBtns } from "@/components/actionBtns";
import { Cards } from "@/components/cards";
import { CollabsedTable } from "@/components/tables";
import { createFinancialOverview } from "@/data/info";

const ContractsCards =[
  {title: 'totalRevenues' ,number: '$12,500' ,color:"green"},
  {title: 'totalExpenses' ,number: "$5400" , color:"#bb0101"},
]


export default function Treasury ({ lng ,Transactions}){
  const { t } = useTranslation(lng , "dashboard")
  const treasuryCards = createFinancialOverview(Transactions);

  return (
    <>
    <h1>{t("titles.treasury")}</h1>
    <div className="relative flex w-full gap-4 justify-around py-4">
      {treasuryCards.map((card , i )=> (
        <Cards lng={lng} card={card} key={i}/>
      ))}
      </div>
      <ActionBtns lng={lng} noAdd={true} data={Transactions } fileName={"Transactions"} />
      {Transactions && Transactions.length > 0 ? <CollabsedTable lng={lng} data={Transactions} />: <h1 className="text-center pt-8">{t('messages.noTransactions')}</h1>}
      
      </>
  )
}
