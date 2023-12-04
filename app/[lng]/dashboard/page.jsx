
import NavBar from "@/components/navBar";
import Cars from "@/components/pages/cars";
import { fetchUserCars } from "@/prisma";
import { createUser } from "@/prisma/user";
import { auth, currentUser } from "@clerk/nextjs";

export default async function MainDashboardPage ({params:{lng}}){
  const { userId } = await auth()
  const user = await currentUser()
  async function createUserIfNotExists(userData) {
  
    try {
      const existingUser = await prisma.user.findUnique({
        where: {
          userId, 
        },
      });
  
      if (!existingUser) {
        const newUser = await prisma.user.create({
          data: {
            ...userData
          },
        });
  
        console.log('New user created:', newUser);
        return { success: true, message: 'New user created.' };
      } else {
        console.log('User already exists:', existingUser);
        return { success: false, message: 'User already exists.' };
      }
    } catch (error) {
      console.error('Error creating user:', error);
      return { success: false, message: 'Error creating user.' };
    }
  }
  const userData = {
    userId,
    username:user.firstName,
    email:user.emailAddresses[0].emailAddress
  }
  createUserIfNotExists(userData)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  
  const userCars =  await fetchUserCars(userId)

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

