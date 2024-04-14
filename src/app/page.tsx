import { UserButton, currentUser } from "@clerk/nextjs";
import { Button, Input } from "antd";

export default async function Home() {
  let clerkUserId = "";
  let name = "";
  let email = "";

  const currentUserData = await currentUser();
  console.log(currentUserData);
  if (currentUserData) {
    clerkUserId = currentUserData.id;
    name = currentUserData.firstName + " " + currentUserData.lastName;
    email = currentUserData.emailAddresses[0].emailAddress;
  }

  return (
    <div className='flex flex-col items-center justify-center h-screen gap-5'>
      <h1 className='text-3xl text-gray-500 font-bold'>Hotely</h1>
      <h1>Cler user ID : {clerkUserId}</h1>
      <h1>Name: {name}</h1>
      <h1>Email : {email}</h1>
      <UserButton afterSignOutUrl='/sign-in' />
    </div>
  );
}
