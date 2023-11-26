import { useTranslation } from '@/app/i18n';
import React from 'react';
import { FiTruck, FiCalendar, FiDollarSign, FiBarChart } from 'react-icons/fi'; // Importing icons from react-icons library

const FeatureList = async () => {
  const { t } = await useTranslation()
  const renderIcon = (iconName) => {
    switch (iconName) {
      case 'FiTruck':
        return <FiTruck className="text-4xl mb-4" />;
      case 'FiCalendar':
        return <FiCalendar className="text-4xl mb-4" />;
      case 'FiDollarSign':
        return <FiDollarSign className="text-4xl mb-4" />;
      case 'FiBarChart':
        return <FiBarChart className="text-4xl mb-4" />;
      default:
        return null;
    }
  };
  return (
    <div className="border w-full sm:w-1/2 border-[color:var(--gray-200,#E4E4E7)] shadow-2xl flex flex-col w-full mx-auto pt-3.5 pb-10 rounded-xl border-solid max-md:mt-10">
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/2cb26ff4-b5ea-43ca-8c87-73933246892c?apiKey=00dd475291cf4f1da724421e257168ca&"
      className="aspect-[4.4] object-contain object-center w-11 overflow-hidden max-w-full mx-3.5 max-md:mx-2.5"
    />
    <div className="bg-zinc-100 self-stretch shrink-0 h-px mt-3 max-md:max-w-full" />
    <div className="container mx-auto mt-8">
    {t('features.list', { returnObjects: true }).map((feature, index) => (
      <div key={index} className="mb-3 flex justify-around mx-8">
        {renderIcon(feature.icon)} 
        <div className='w-5/6'>
          <h1 className="text-xl font-bold mb-2">{feature.title}</h1>
          <p className="text-gray-600 text-sm">{feature.description}</p>
        </div>
      </div>
    ))}
    </div>
  </div>
  );
};

export default FeatureList;
