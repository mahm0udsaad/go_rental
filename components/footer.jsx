import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
  return (
    <div className="bg-slate-700 flex flex-col w-full items-center mt-20 pt-12 pb-5 px-5 rounded-t-2xl max-md:max-w-full max-md:mt-10">
      <div className="flex flex-col items-center max-md:mt-14 max-md:mb-8">
        <div className="flex flex-col md:flex-row w-full md:justify-between items-center gap-5 max-md:flex-wrap">
          <div className="text-zinc-100 text-base font-medium leading-6">
            Product | Features | Pricing | Resources
          </div>

          <div className="flex gap-4">
            <FiFacebook className="text-white text-xl cursor-pointer" />
            <FiTwitter className="text-white text-xl cursor-pointer" />
            <FiInstagram className="text-white text-xl cursor-pointer" />
            <FiLinkedin className="text-white text-xl cursor-pointer" />
          </div>
        </div>

        <div className="bg-slate-800 self-stretch h-px mt-6 max-md:max-w-full max-md:mt-4" />
        <div className="text-slate-300 text-center text-sm leading-6 self-center max-w-[283px] mt-6">
          <span className="block">&copy; Copyright 2022, All Rights Reserved by</span>
          <span className="font-bold"> gorental</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
