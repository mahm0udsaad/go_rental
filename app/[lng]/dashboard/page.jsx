
import NavBar from "@/components/navBar";
import Dashboard from "@/components/pages/dashboard";

export default async function MainDashboardPage ({params:{lng}}){
  return (
    <main className="dash">
      <section className="gap-4 flex">
        <NavBar lng={lng}/>
        <section className="flex w-full sm:h-[98dvh]">
          <section className="flex-col mt-4 bg-white rounded-xl w-full lg:w-[99%] pt-8 px-4 text-blue-950 text-3xl font-semibold tracking-wide relative">
             <Dashboard lng={lng}/>
            </section>
        </section>
      </section>
    </main>
  )
}

