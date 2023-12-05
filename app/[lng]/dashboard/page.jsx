
import NavBar from "@/components/navBar";
import Cars from "@/components/pages/cars";
import { auth, currentUser } from "@clerk/nextjs";

export default async function MainDashboardPage ({params:{lng}}){
  const { userId } = await auth()
  const user = await currentUser()
  const userData = {
    userId,
    username: user.firstName,
    email: user.emailAddresses[0].emailAddress,
  };
  return (
    <main className="dash">
      <section className="lg:gap-4 lg:flex">
        <NavBar lng={lng}/>
        <section className="flex w-full lg:h-[98dvh]">
          <section className="flex-col mt-16 lg:mt-4 bg-white rounded-xl w-full lg:w-[99%] pt-3 px-4 text-blue-950 text-3xl font-semibold relative">
             <Cars userId={userId} userData={userData} lng={lng} />
            </section>
        </section>
      </section>
    </main>
  )
}

