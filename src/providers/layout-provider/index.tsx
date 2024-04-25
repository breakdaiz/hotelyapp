"use client";

import React, { ReactNode, useEffect, useState } from "react";
import Header from "./header";
import { GetCurrentUserFromMongoDB } from "@/server-actions/users";
import { message } from "antd";
import { UserType } from "@/interfaces";
import { usePathname } from "next/navigation";
import Spinner from "@/components/spinner";

function LayoutProvider({ children }: { children: ReactNode }) {
  const [loggedInUserData, setLoggedInUserData] = useState<UserType | null>(
    null
  );

  const [loading, setLoading] = useState(true);

  const pathName = usePathname();
  const isAuthRoute =
    pathName.includes("/sign-in") || pathName.includes("/sign-up");

  const getUserData = async () => {
    try {
      setLoading(true);
      const response = await GetCurrentUserFromMongoDB();
      if (response.success) {
        setLoggedInUserData(response.data);
        console.log(response.data);
      } else {
        throw new Error(response.messege);
      }
    } catch (error: any) {
      message.error(error.message);
    } finally {
      setLoading(false);
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
  if (loading) {
    return <Spinner fullHeight={true} />;
  }
  return (
    <div>
      <Header loggedInUserData={loggedInUserData} />
      <div className='px-5 lg:px-20 mt-5'> {children}</div>
    </div>
  );
}

export default LayoutProvider;
