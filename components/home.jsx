import Link from "next/link";
import * as React from "react";
import { WebsiteNavBar } from "./websiteNavBar";
import FeatureList from "./features";
import Footer from "./footer";
import { useTranslation } from "@/app/i18n";


export default async function HomePage({ lng }) {
  const { t } = await useTranslation(lng)
  const isArabic = lng === 'ar' ;
  return (
    <div className="flex xl:max-w-5/6 mx-auto  flex-col items-center overflow-x-hidden">
        <WebsiteNavBar lng={lng}/>
        <div className="hero flex justify-around items-center w-full h-screen">
        <div className="flex flex-col items-center px-5">
        <div className="w-full max-w-[1419px] mt-64 mb-32 max-md:max-w-full max-md:my-10">
            <div className="gap-5 flex max-md:flex-col-reverse ">
            <div className="flex flex-col items-stretch sm:w-[47%]">
            <div className="flex flex-col items-stretch px-5 sm:pt-0 pt-8">
                <div className="text-zinc-900 text-2xl sm:text-5xl font-extrabold sm:leading-[66px] w-full">
                    {t("homepage.title")}
                </div>
                <Link href={`/${lng}/sign-up`} className="hover:bg-white hover:text-[#334155] border border-[#334155] transition text-white text-center text-lg font-bold leading-6 whitespace-nowrap justify-center items-center bg-slate-700 w-[197px] max-w-full mt-28 px-5 py-4 rounded-xl self-start max-md:mt-10">
                {t("homepage.cta")}
                </Link>
                </div>
            </div>
            <div className="sm:w-[50%] max-md:w-full ">
                <img
                loading="lazy"
                src="/Treasury.png"
                className="aspect-[1.44] object-contain object-center w-full overflow-hidden grow max-md:max-w-full"
                />
            </div>
            </div>
        </div>
        </div>
      </div>
      <div className="self-stretch flex w-full flex-col items-stretch max-md:max-w-full">
        <div className="flex flex-col items-center ml-4 px-0 sm:px-5 py-12 max-md:max-w-full">
          <div className="w-11/12 xl:max-w-5/6 mx-auto mt-20 mb-14 max-md:max-w-full">
            <div className="gap-5 sm:flex sm:flex-row flex-col">
              <div className="flex flex-col items-stretch sm:w-[48%]">
                <div className="flex flex-col my-auto max-md:max-w-full max-md:mt-10">
                  <div className="text-zinc-900 text-5xl font-bold sm:leading-10 ">
                    {t('features.title')}
                  </div>
                  <div className="text-zinc-700 text-base leading-7 self-stretch mt-6 max-md:max-w-full">
                    {t('features.description')}
                  </div>
                  <Link href={`/${lng}/sign-in`} className="hover:bg-white hover:text-[#334155] border border-[#334155] transition text-white text-right text-lg font-bold leading-6 whitespace-nowrap justify-center items-center bg-slate-700 w-[179px] max-w-full mt-6 px-5 py-4 rounded-xl">
                  {t('features.loginCTA')}
                  </Link>
                </div>
              </div>
               <FeatureList />
            </div>
          </div>
        </div>
        <div className="self-center w-full max-w-[1184px] mt-8 max-md:max-w-full max-md:mt-10">
        <div id="pricing" className="items-center rounded  flex flex-col px-20 max-md:px-5">
        <div className="text-gradient text-zinc-900 text-center text-4xl font-bold leading-16 bg-clip-text max-w-[566px] mt-12 max-md:max-w-full max-md:mt-10">
            <span className="text-zinc-900">{t('pricing.title')}</span>
        </div>
        <div className="text-zinc-900 text-center text-xl leading-7 whitespace-nowrap mt-4">
           {t('pricing.description')}
        </div>
        <div className={`flex ${isArabic ? 'flex-row-reverse':'w-[373px]'}  max-w-full gap-2.5 ml-14 mt-14 mb-20 max-md:my-10`}>
            <div className="justify-between items-stretch flex gap-5 mt-2.5 max-md:justify-center">
            <div className="text-zinc-900 text-base leading-5 self-start">
            {t('pricing.monthly')}{" "}
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
            <div className="text-zinc-900 text-base leading-5 whitespace-nowrap self-start">
            {t('pricing.yearly')}
            </div>
            </div>
            <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/261aca7a-9fa0-427a-86ce-2c9bca3ee4f3?apiKey=00dd475291cf4f1da724421e257168ca&"
            className="aspect-[3.21] object-contain object-center w-[106px] overflow-hidden self-stretch shrink-0 max-w-full"
            />
        </div>
        </div>
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
              <div className="items-stretch self-stretch rounded flex w-full grow flex-col mx-auto px-6 py-10 max-md:mt-6 max-md:px-5">
                <div className="text-zinc-900 text-2xl font-bold leading-8">
                  Freebie
                </div>
                <div className="text-slate-500 text-base leading-6 mt-3">
                  Ideal for individuals who need quick access to basic features.
                </div>
                <div className="items-stretch flex justify-between gap-2 mt-5">
                  <div className="text-zinc-900 text-6xl font-semibold leading-[76px] max-md:text-4xl max-md:leading-[61px]">
                    $0
                  </div>
                  <div className="text-slate-600 text-base font-light leading-6 self-center whitespace-nowrap my-auto">
                    / Month
                  </div>
                </div>
                <button className="hover:bg-slate-500  hover:text-white transition  text-blue-700 text-center text-base font-semibold leading-6 whitespace-nowrap justify-center items-center rounded border-[color:var(--primary-blue-500,#1D4ED8)] mt-6 px-5 py-3 border-[1.5px] border-solid">
                  Get Started Now
                </button>
                <div className="items-stretch flex justify-between gap-4 mt-10">
                  <div className="items-center bg-violet-100 flex aspect-square flex-col p-2 rounded-[100px]">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/68e347e1-c561-4bf8-a47c-ad29d44077cc?apiKey=00dd475291cf4f1da724421e257168ca&"
                      className="aspect-square object-contain object-center w-4 overflow-hidden"
                    />
                  </div>
                  <div className="text-zinc-900 text-base font-medium leading-6 self-center grow shrink basis-auto my-auto">
                    20,000+ of PNG & SVG graphics
                  </div>
                </div>
                <div className="items-stretch flex justify-between gap-4 mt-3">
                  <div className="items-center bg-violet-100 flex aspect-square flex-col p-2 rounded-[100px]">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/562a278f-f058-4d45-bc4b-15b2e3edf004?apiKey=00dd475291cf4f1da724421e257168ca&"
                      className="aspect-square object-contain object-center w-4 overflow-hidden"
                    />
                  </div>
                  <div className="text-zinc-900 text-base font-medium leading-6 self-center grow shrink basis-auto my-auto">
                    Access to 100 million stock images
                  </div>
                </div>
                <div className="items-stretch flex justify-between gap-4 mt-3">
                  <div className="items-center bg-gray-50 flex aspect-square flex-col p-2 rounded-[100px]">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/009cccbf-4d66-4a5c-b559-cfb6377c64fe?apiKey=00dd475291cf4f1da724421e257168ca&"
                      className="aspect-square object-contain object-center w-4 overflow-hidden"
                    />
                  </div>
                  <div className="text-slate-400 text-base font-medium leading-6 self-center grow shrink basis-auto my-auto">
                    Upload custom icons and fonts
                  </div>
                </div>
                <div className="items-stretch flex justify-between gap-4 mt-3">
                  <div className="items-center bg-gray-50 flex aspect-square flex-col p-2 rounded-[100px]">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/fcb0d271-b8a9-4c41-807f-6c4b3bb1be75?apiKey=00dd475291cf4f1da724421e257168ca&"
                      className="aspect-square object-contain object-center w-4 overflow-hidden"
                    />
                  </div>
                  <div className="text-slate-400 text-base font-medium leading-6 self-center grow shrink basis-auto my-auto">
                    Unlimited Sharing
                  </div>
                </div>
                <div className="items-stretch flex justify-between gap-4 mt-3">
                  <div className="items-center bg-gray-50 flex aspect-square flex-col p-2 rounded-[100px]">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/6259bacf-0616-4d42-918c-01aacb37cecc?apiKey=00dd475291cf4f1da724421e257168ca&"
                      className="aspect-square object-contain object-center w-4 overflow-hidden"
                    />
                  </div>
                  <div className="text-slate-400 text-base font-medium leading-6 self-center grow shrink basis-auto my-auto">
                    Upload graphics & video in up to 4k
                  </div>
                </div>
                <div className="items-stretch flex justify-between gap-4 mt-3">
                  <div className="items-center bg-gray-50 flex aspect-square flex-col p-2 rounded-[100px]">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/fb3e6799-dc77-4e6c-926c-ebb79df82bf7?apiKey=00dd475291cf4f1da724421e257168ca&"
                      className="aspect-square object-contain object-center w-4 overflow-hidden"
                    />
                  </div>
                  <div className="text-slate-400 text-base font-medium leading-6 self-center grow shrink basis-auto my-auto">
                    Unlimited Projects
                  </div>
                </div>
                <div className="items-stretch flex justify-between gap-4 mt-3">
                  <div className="items-center bg-gray-50 flex aspect-square flex-col p-2 rounded-[100px]">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/f24579f9-2a4e-49a5-b05b-8f37ef46d6d5?apiKey=00dd475291cf4f1da724421e257168ca&"
                      className="aspect-square object-contain object-center w-4 overflow-hidden"
                    />
                  </div>
                  <div className="text-slate-400 text-base font-medium leading-6 self-center grow shrink basis-auto my-auto">
                    Instant Access to our design system
                  </div>
                </div>
                <div className="items-center flex justify-between gap-4 mt-3">
                  <div className="items-center bg-gray-50 flex aspect-square flex-col my-auto p-2 rounded-[100px]">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/ad0cac0d-5e11-4883-a9d8-2678041fba36?apiKey=00dd475291cf4f1da724421e257168ca&"
                      className="aspect-square object-contain object-center w-4 overflow-hidden"
                    />
                  </div>
                  <div className="text-slate-400 text-base font-medium leading-6 self-stretch grow shrink basis-auto">
                    Create teams to collaborate on designs
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
              <div className="items-stretch self-stretch shadow-lg bg-slate-700 flex w-full grow flex-col mx-auto px-6 py-10 rounded-xl max-md:mt-6 max-md:px-5">
                <div className="text-white text-2xl font-bold leading-8">
                  Professional
                </div>
                <div className="overflow-hidden text-gray-50 text-ellipsis whitespace-nowrap text-base leading-6 mt-3">
                  Ideal for individuals who who need advanced features and tools
                  for client work.
                </div>
                <div className="items-stretch flex justify-between gap-2 mt-5">
                  <div className="text-white text-6xl font-semibold leading-[76px] max-md:text-4xl max-md:leading-[61px]">
                    $25
                  </div>
                  <div className="text-gray-50 text-base font-light leading-6 self-center whitespace-nowrap my-auto">
                    / Month
                  </div>
                </div>
                <button className="hover:bg-slate-500 hover:text-white text-blue-700 bg-white hover:bg-slate-500  hover:text-white transition text-center text-base font-semibold leading-6  justify-center items-center rounded mt-6 px-5 py-3">
                  Get Started Now
                </button>
                <div className="items-stretch flex justify-between gap-4 mt-10">
                  <div className="items-center bg-violet-100 flex aspect-square flex-col p-2 rounded-[100px]">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/fb33de50-e36b-4408-884c-4d42bb4f2ded?apiKey=00dd475291cf4f1da724421e257168ca&"
                      className="aspect-square object-contain object-center w-4 overflow-hidden"
                    />
                  </div>
                  <div className="text-white text-base font-medium leading-6 self-center grow shrink basis-auto my-auto">
                    20,000+ of PNG & SVG graphics
                  </div>
                </div>
                <div className="items-stretch flex justify-between gap-4 mt-3">
                  <div className="items-center bg-violet-100 flex aspect-square flex-col p-2 rounded-[100px]">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/e38105d7-6330-4fef-8bc8-6eb8c4fa62c0?apiKey=00dd475291cf4f1da724421e257168ca&"
                      className="aspect-square object-contain object-center w-4 overflow-hidden"
                    />
                  </div>
                  <div className="text-white text-base font-medium leading-6 self-center grow shrink basis-auto my-auto">
                    Access to 100 million stock images
                  </div>
                </div>
                <div className="items-stretch flex justify-between gap-4 mt-3">
                  <div className="items-center bg-violet-100 flex aspect-square flex-col p-2 rounded-[100px]">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/fc49f1bc-f8ab-491c-bbfb-b45fed577f9b?apiKey=00dd475291cf4f1da724421e257168ca&"
                      className="aspect-square object-contain object-center w-4 overflow-hidden"
                    />
                  </div>
                  <div className="text-white text-base font-medium leading-6 self-center grow shrink basis-auto my-auto">
                    Upload custom icons and fonts
                  </div>
                </div>
                <div className="items-stretch flex justify-between gap-4 mt-3">
                  <div className="items-center bg-violet-100 flex aspect-square flex-col p-2 rounded-[100px]">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/e5509879-d821-4b89-9d84-c33ef4ba33c6?apiKey=00dd475291cf4f1da724421e257168ca&"
                      className="aspect-square object-contain object-center w-4 overflow-hidden"
                    />
                  </div>
                  <div className="text-white text-base font-medium leading-6 self-center grow shrink basis-auto my-auto">
                    Unlimited Sharing
                  </div>
                </div>
                <div className="items-stretch flex justify-between gap-4 mt-3">
                  <div className="items-center bg-violet-100 flex aspect-square flex-col p-2 rounded-[100px]">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ca2e30a-0f6c-4337-8dc9-61749f61976e?apiKey=00dd475291cf4f1da724421e257168ca&"
                      className="aspect-square object-contain object-center w-4 overflow-hidden"
                    />
                  </div>
                  <div className="text-white text-base font-medium leading-6 self-center grow shrink basis-auto my-auto">
                    Upload graphics & video in up to 4k
                  </div>
                </div>
                <div className="items-stretch flex justify-between gap-4 mt-3">
                  <div className="items-center bg-violet-100 flex aspect-square flex-col p-2 rounded-[100px]">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/c246a50a-e0dc-4db1-996b-c0c06b360b08?apiKey=00dd475291cf4f1da724421e257168ca&"
                      className="aspect-square object-contain object-center w-4 overflow-hidden"
                    />
                  </div>
                  <div className="text-white text-base font-medium leading-6 self-center grow shrink basis-auto my-auto">
                    Unlimited Projects
                  </div>
                </div>
                <div className="items-stretch flex justify-between gap-4 mt-3">
                  <div className="items-center flex aspect-square flex-col p-2 rounded-[100px]">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/cb3d6938-9b28-48d0-a795-f014bbd8ba0f?apiKey=00dd475291cf4f1da724421e257168ca&"
                      className="aspect-square object-contain object-center w-4 overflow-hidden"
                    />
                  </div>
                  <div className="text-white text-base font-medium leading-6 self-center grow shrink basis-auto my-auto">
                    Instant Access to our design system
                  </div>
                </div>
                <div className="items-center flex justify-between gap-4 mt-3">
                  <div className="items-center flex aspect-square flex-col my-auto p-2 rounded-[100px]">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/e9175b2b-cec4-49d2-84c5-b93c4c13e0d2?apiKey=00dd475291cf4f1da724421e257168ca&"
                      className="aspect-square object-contain object-center w-4 overflow-hidden"
                    />
                  </div>
                  <div className="text-white text-base font-medium leading-6 self-stretch grow shrink basis-auto">
                    Create teams to collaborate on designs
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
              <div className="items-stretch self-stretch rounded flex w-full grow flex-col mx-auto px-6 py-10 max-md:mt-6 max-md:px-5">
                <div className="text-zinc-900 text-2xl font-bold leading-8">
                  Enterprise
                </div>
                <div className="overflow-hidden text-slate-500 text-ellipsis whitespace-nowrap text-base leading-6 mt-3">
                  Ideal for businesses who need personalized services and
                  security for large teams.{" "}
                </div>
                <div className="items-stretch flex justify-between gap-2 mt-5">
                  <div className="text-zinc-900 text-6xl font-semibold leading-[76px] max-md:text-4xl max-md:leading-[61px]">
                    $100
                  </div>
                  <div className="text-slate-600 text-base font-light leading-6 self-center whitespace-nowrap my-auto">
                    / Month
                  </div>
                </div>
                <button className="hover:bg-slate-500  hover:text-white transition text-blue-700 text-center text-base font-semibold leading-6 whitespace-nowrap justify-center items-center rounded border-[color:var(--primary-blue-500,#1D4ED8)] mt-6 px-5 py-3 border-[1.5px] border-solid">
                  Get Started Now
                </button>
                <div className="items-stretch flex justify-between gap-4 mt-10">
                  <div className="items-center bg-violet-100 flex aspect-square flex-col p-2 rounded-[100px]">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/764fe399-6546-4b6a-a281-24ec255dee06?apiKey=00dd475291cf4f1da724421e257168ca&"
                      className="aspect-square object-contain object-center w-4 overflow-hidden"
                    />
                  </div>
                  <div className="text-zinc-900 text-base font-medium leading-6 self-center grow shrink basis-auto my-auto">
                    20,000+ of PNG & SVG graphics
                  </div>
                </div>
                <div className="items-stretch flex justify-between gap-4 mt-3">
                  <div className="items-center bg-violet-100 flex aspect-square flex-col p-2 rounded-[100px]">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/fd9f59e6-93bb-4391-b9b4-456b7f2a24a3?apiKey=00dd475291cf4f1da724421e257168ca&"
                      className="aspect-square object-contain object-center w-4 overflow-hidden"
                    />
                  </div>
                  <div className="text-zinc-900 text-base font-medium leading-6 self-center grow shrink basis-auto my-auto">
                    Access to 100 million stock images
                  </div>
                </div>
                <div className="items-stretch flex justify-between gap-4 mt-3">
                  <div className="items-center bg-violet-100 flex aspect-square flex-col p-2 rounded-[100px]">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/bd5b7706-174d-45c7-9c7e-2e3be1b94104?apiKey=00dd475291cf4f1da724421e257168ca&"
                      className="aspect-square object-contain object-center w-4 overflow-hidden"
                    />
                  </div>
                  <div className="text-zinc-900 text-base font-medium leading-6 self-center grow shrink basis-auto my-auto">
                    Upload custom icons and fonts
                  </div>
                </div>
                <div className="items-stretch flex justify-between gap-4 mt-3">
                  <div className="items-center bg-violet-100 flex aspect-square flex-col p-2 rounded-[100px]">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/a715f121-a3fe-46f8-961b-78ef8b2b97b9?apiKey=00dd475291cf4f1da724421e257168ca&"
                      className="aspect-square object-contain object-center w-4 overflow-hidden"
                    />
                  </div>
                  <div className="text-zinc-900 text-base font-medium leading-6 self-center grow shrink basis-auto my-auto">
                    Unlimited Sharing
                  </div>
                </div>
                <div className="items-stretch flex justify-between gap-4 mt-3">
                  <div className="items-center bg-violet-100 flex aspect-square flex-col p-2 rounded-[100px]">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/81c2150f-d351-4470-b68b-027b7745abbd?apiKey=00dd475291cf4f1da724421e257168ca&"
                      className="aspect-square object-contain object-center w-4 overflow-hidden"
                    />
                  </div>
                  <div className="text-zinc-900 text-base font-medium leading-6 self-center grow shrink basis-auto my-auto">
                    Upload graphics & video in up to 4k
                  </div>
                </div>
                <div className="items-stretch flex justify-between gap-4 mt-3">
                  <div className="items-center bg-violet-100 flex aspect-square flex-col p-2 rounded-[100px]">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/869df408-01de-4e59-bb2b-583461495c22?apiKey=00dd475291cf4f1da724421e257168ca&"
                      className="aspect-square object-contain object-center w-4 overflow-hidden"
                    />
                  </div>
                  <div className="text-zinc-900 text-base font-medium leading-6 self-center grow shrink basis-auto my-auto">
                    Unlimited Projects
                  </div>
                </div>
                <div className="items-stretch flex justify-between gap-4 mt-3">
                  <div className="items-center bg-violet-100 flex aspect-square flex-col p-2 rounded-[100px]">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/403bd0f0-b28a-43fb-8b1c-0c12572fa2be?apiKey=00dd475291cf4f1da724421e257168ca&"
                      className="aspect-square object-contain object-center w-4 overflow-hidden"
                    />
                  </div>
                  <div className="text-zinc-900 text-base font-medium leading-6 self-center grow shrink basis-auto my-auto">
                    Instant Access to our design system
                  </div>
                </div>
                <div className="items-center flex justify-between gap-4 mt-3">
                  <div className="items-center bg-violet-100 flex aspect-square flex-col my-auto p-2 rounded-[100px]">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/4d63f55e-709b-469e-bf89-e8d30dc38478?apiKey=00dd475291cf4f1da724421e257168ca&"
                      className="aspect-square object-contain object-center w-4 overflow-hidden"
                    />
                  </div>
                  <div className="text-zinc-900 text-base font-medium leading-6 self-stretch grow shrink basis-auto">
                    Create teams to collaborate on designs
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    <Footer />
    </div>
  );
}

