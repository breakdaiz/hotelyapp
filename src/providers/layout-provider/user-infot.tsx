import { UserType } from "@/interfaces";
import React from "react";

function UserInfo({ loggedInUserData }: { loggedInUserData: UserType }) {
  return (
    <div className='p-5 border-0 border-l '>
      <span className='text-gray-500 text-sm'>{loggedInUserData.name}</span>
    </div>
  );
}

export default UserInfo;
