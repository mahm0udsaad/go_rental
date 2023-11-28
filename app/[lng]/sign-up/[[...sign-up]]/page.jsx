import { SignUp } from "@clerk/nextjs";
export default function Page() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
    <h1 className="text-4xl font-bold">sign up</h1>
    <SignUp />
    </div>
  )
}