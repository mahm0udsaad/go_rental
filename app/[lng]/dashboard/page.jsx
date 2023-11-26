
import NavBar from "@/components/navBar";
import PageRenderer from "@/components/currentPage";

export default async function Dashboard ({params:{lng}}){
console.log(lng);
  return (
    <main className="dash">
      <section className="gap-4 flex">
        <NavBar lng={lng}/>
        <section className="flex w-full sm:h-[98dvh]">
          <PageRenderer />
        </section>
      </section>
    </main>
  )
}

