"use client";

import React, { ReactNode, useEffect, useState } from "react";
import Header from "./header";
import { GetCurrentUserFromMongoDB } from "@/server-actions/users";
import { message } from "antd";
import { UserType } from "@/interfaces";

function LayoutProvider({ children }: { children: ReactNode }) {
  const [loggedInUserData, setLoggedInUserData] = useState<UserType | null>(null);
  const getUserData = async () => {
    try {
      const response = await GetCurrentUserFromMongoDB()
      if (response.success) {
        setLoggedInUserData(response.data);
        console.log(response.data);
      }
      else {
        throw new Error(response.messege);
      }
    } catch (error: any) {
      message.error(error.message)
      
    }
  };

  useEffect(() => {
    if (!loggedInUserData) {
      getUserData();
    }
  });
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default LayoutProvider;
