"use client"
import { CiExport } from "react-icons/ci";
import { LuFilter } from "react-icons/lu";
import { IoIosAdd } from "react-icons/io";
import { exportToExcel } from "@/helper/dateNow";
import InvoiceFormModal from "@/components/invoicesForm";
import { useState } from "react";
import { useTranslation } from "@/app/i18n/client";

export const ActionBtns = ({lng ,  data , fileName , formData , setFormData  ,noAdd , formTitle}) =>{
  const [addNew , setAddNew ] = useState(false)
  const isAr = lng === "ar"
  const { t } = useTranslation(lng , "dashboard")
    return (
      <>
        <div className={`relative flex ${isAr ? "":"justify-end"} text-lg text-white w-full  gap-0.5 mx-5 mt-7 max-md:justify-center max-md:mr-2.5`}>
        <button className="hover:opacity-50 flex items-center justify-center text-black border border-[color:var(--light-gray-light-gray-2,#DDE2E4)] bg-white p-4 mt-2 py-1 rounded-md border-solid self-start cursor-pointer">
          <LuFilter className="w-6 h-6 mr-2" />
          <span className="text-sm">{t("actions.filter")}</span>
        </button>
        <button
        onClick={()=>exportToExcel(data , fileName)}
        className="hover:opacity-50 flex items-center justify-center text-black border border-[color:var(--light-gray-light-gray-2,#DDE2E4)] bg-white p-4 mt-2 py-1 rounded-md border-solid self-start cursor-pointer">
          <CiExport className="w-6 h-6 mr-2" />
          <span className="text-sm">{t("actions.export")}</span>
        </button>
        {!noAdd && <button
        onClick={()=> setAddNew(true)}
        className="hover:opacity-50 flex items-center justify-center bg-blue-500 p-4 mt-2 py-1 rounded-md self-start cursor-pointer"
      >
        <IoIosAdd className="w-6 h-6 mr-2" />
        <span className="text-sm">{t("actions.addNew")}</span>
      </button>}
      </div>
      {addNew && (
        <InvoiceFormModal formTitle={formTitle} formData={formData} setFormData={setFormData} isOpen={addNew} setIsOpen={setAddNew} />
      )}
      </>
    )
}