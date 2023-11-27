import { currentUser } from "@clerk/nextjs";
import NavLinks from './navLinks';
import ToggleableNavBar from "./toggleableNav";
import { useTranslation } from "@/app/i18n";
const NavBar = async ({lng}) => {
  const user = await currentUser()
  if(!user) return ;
  return (
    <>
    <ToggleableNavBar lng={lng}/>
    <section className="hidden lg:flex flex-col w-[15%] mx-4 ">
       <section className="flex flex-col pt-14 max-md:mt-10">
        {/* Profile Picture */}
        <div className="user-image-wrapper w-[100px] pb-3">
        <img
          loading="lazy"
          src={user?.imageUrl}
          className="w-full h-full rounded-lg"
          alt="Profile Picture"
        />
      </div>
        {/* user's Details */}
        <h1 className="text-white text-lg font-semibold self-stretch whitespace-nowrap max-md:mt-10">
        {user?.firstName}
        </h1>
        <p className="text-white text-sm  opacity-60 self-stretch whitespace-nowrap ">
          {user?.emailAddresses[0].emailAddress}
        </p>
      </section>
     <NavLinks lng={lng}/>      
    </section>
    </> 
  );
}
export default  NavBar ;