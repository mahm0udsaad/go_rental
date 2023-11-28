
import NavBar from "@/components/navBar";
import Dashboard from "@/components/pages/dashboard";

export default async function MainDashboardPage ({params:{lng}}){
  return (
    <main className="dash">
      <section className="lg:gap-4 lg:flex">
        <NavBar lng={lng}/>
        <section className="flex w-full lg:h-[98dvh]">
          <section className="flex-col mt-16 lg:mt-4 bg-white rounded-xl w-full lg:w-[99%] pt-3 px-4 text-blue-950 text-3xl font-semibold relative">
             <Dashboard lng={lng}/>
            </section>
        </section>
      </section>
    </main>
  )
}

