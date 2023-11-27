
"use client"
import { useTranslation } from "@/app/i18n/client";

export const Cards = ({ card, i ,lng}) => {
  const { t } =  useTranslation(lng , "dashboard")
  const getGradientColor = (index) => {
    switch (index) {
      case 0: // All Cars
        return 'linear-gradient(90deg, #4b6cb7 0%, #182848 100%)';
      case 1: // Active Cars
        return 'linear-gradient(90deg, #fcff9e 0%, #c67700 100%)';
      case 2: // Rented Cars
        return 'linear-gradient(90deg, #9ebd13 0%, #008552 100%)';
      default:
        return 'linear-gradient(90deg, #1CB5E0 0%, #000851 100%)';
    }
  };
  return (
    <div
      style={{
        background: getGradientColor(i), // Use index i to get gradient color
      }}
      className={`my-2 justify-center text-white items-stretch text-white flex grow basis-[0%] flex-col pl-4 pr-4 py-2 rounded-xl border-solid`}
    >
      <div
        className={`text-xs font-medium leading-5 tracking-wider  whitespace-nowrap`}
      >
        {t(`dashboard.${card.title}`)}
      </div>
      <div className="justify-between items-stretch flex w-full gap-5 mt-3">
        <div className="text-xl font-bold leading-8">
          {card.number}
        </div>
      </div>
    </div>
  );
};
