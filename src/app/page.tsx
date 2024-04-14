import { UserButton } from "@clerk/nextjs";
import { Button, Input } from "antd";

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center h-screen gap-5'>
      <h1 className='text-3xl text-gray-500 font-bold'>Hotely</h1>
      <UserButton afterSignOutUrl="/sign-in"/>
    </div>
  );
}
