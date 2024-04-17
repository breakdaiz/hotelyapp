"use client";

import { UserType } from "@/interfaces";
import { User } from "lucide-react";
import React, { useState } from "react";
import Sidebar from "./sidebar";

function UserInfo({ loggedInUserData }: { loggedInUserData: UserType }) {
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <div className='p-5  border-0 border-solid border-l flex items-center gap-5 '>
      <span className='text-gray-500 text-sm'>{loggedInUserData.name}</span>
      <User
        className='cursor-pointer text-gray-500'
        onClick={() => setShowSideBar(!showSideBar)}
      />

      {showSideBar && (
        <Sidebar setShowSideBar={setShowSideBar} showSideBar={showSideBar}
        loggedInUserData={loggedInUserData}
        />
      )}
    </div>
  );
}

export default UserInfo;
