
import NavBar from "@/components/navBar";
import Cars from "@/components/pages/cars";
import { fetchUserCars } from "@/prisma";
import { updateVehicleStatusForLateContracts } from "@/prisma/contracts";
import { createUserIfNotExists } from "@/prisma/user";
import { auth, currentUser } from "@clerk/nextjs";
import { unstable_noStore } from "next/cache";

export default async function MainDashboardPage ({params:{ lng }}){
  unstable_noStore()

  const { userId } = await auth()
  const user = await currentUser()
  if(!user || userId){
    <h1>No Enternet</h1>
  }
  const userCars =  await fetchUserCars(userId)

  const userData = {
    userId,
    username:user.firstName,
    email:user.emailAddresses[0].emailAddress
  }
await createUserIfNotExists(userData)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
  await updateVehicleStatusForLateContracts()

  return (
    <main className="dash">
      <section className="lg:gap-4 lg:flex">
        <NavBar lng={lng}/>
        <section className="flex w-full lg:h-[98dvh]">
          <section className="flex-col mt-16 lg:mt-4 bg-white rounded-xl w-full lg:w-[99%] pt-3 px-4 text-blue-950 text-3xl font-semibold relative">
             <Cars userId={userId} lng={lng} Cars={userCars?.Vehicles}/>
            </section>
        </section>
      </section>
    </main>
  )
}

