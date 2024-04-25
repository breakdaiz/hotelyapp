"use client";

import React, { ReactNode, useEffect, useState } from "react";
import Header from "./header";
import { GetCurrentUserFromMongoDB } from "@/server-actions/users";
import { message } from "antd";
import { UserType } from "@/interfaces";
import { usePathname } from "next/navigation";

function LayoutProvider({ children }: { children: ReactNode }) {
  const [loggedInUserData, setLoggedInUserData] = useState<UserType | null>(
    null
  );

  const pathName = usePathname();
  const isAuthRoute =
    pathName.includes("/sign-in") || pathName.includes("/sign-up");

  const getUserData = async () => {
    try {
      const response = await GetCurrentUserFromMongoDB();
      if (response.success) {
        setLoggedInUserData(response.data);
        console.log(response.data);
      } else {
        throw new Error(response.messege);
      }
    } catch (error: any) {
      message.error(error.message);
    }
  };

  useEffect(() => {
    if (!loggedInUserData && !isAuthRoute) {
      getUserData();
    }
  });

  if (isAuthRoute) {
    return children;
  }
  return (
    <div>
      <Header loggedInUserData={loggedInUserData} />
      {children}
    </div>
  );
}

export default LayoutProvider;
