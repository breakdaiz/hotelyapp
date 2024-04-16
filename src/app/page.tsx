import { UserButton, currentUser } from "@clerk/nextjs";
import { connectMongoDB } from "../config/db";
import { GetCurrentUserFromMongoDB } from "@/server-actions/users";
import { userType } from "@/interfaces";

connectMongoDB();

export default async function Home() {
  const response: any = await GetCurrentUserFromMongoDB();
  let mongoUser: userType | null = null;

  if (response.success) {
    mongoUser = response.data;
  }
  let clerkUserId = "";
  let name = "";
  let email = "";

  // const currentUserData = await currentUser();
  // console.log(currentUserData);
  if (mongoUser) {
    clerkUserId = mongoUser.clerkUserId;
    name = mongoUser.name;
    email = mongoUser.email;
  }

  return (
    <div className='text-sm flex flex-col gap-5 p-5'>
      <h1 className='text-3xl text-gray-500 font-bold'>Homepage</h1>
      <h1>Cler user ID : {clerkUserId}</h1>
      <h1>Name: {name}</h1>
      <h1>Email : {email}</h1>
      <UserButton afterSignOutUrl='/sign-in' />
    </div>
  );
}
