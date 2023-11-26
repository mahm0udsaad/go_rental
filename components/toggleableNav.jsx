"use client"
import { useState } from 'react';
import NavLinks from './navLinks';
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const ToggleableNavBar = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <section className={`lg:hidden  ${showNav ? 'flex flex-col w-[25%] ml-4':''} `}>
      <button className={`text-white absolute top-5 left-7 text-xl z-50 ${showNav ? 'text-white':'text-black'}`} onClick={toggleNav}>
      {!showNav ? <CiMenuBurger /> : <IoMdClose />}
      </button>
      {showNav && (
        <section className="flex flex-col pt-14 max-md:mt-10">
          <NavLinks />
        </section>
      )}
    </section>
  );
};

export default ToggleableNavBar;
