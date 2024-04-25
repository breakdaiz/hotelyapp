import { UserType } from "@/interfaces";
import { useAuth } from "@clerk/nextjs";
import { Drawer } from "antd";
import { BedDouble, GitGraph, Home, List, User } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

function Sidebar({
  setShowSideBar,
  showSideBar,
  loggedInUserData,
}: {
  showSideBar: boolean;
  setShowSideBar: React.Dispatch<React.SetStateAction<boolean>>;
  loggedInUserData: UserType;
}) {
  const iconSize = 18;
  const router = useRouter();
  const pathName = usePathname();

  const { signOut } = useAuth();

  const onLogout = async () => {
    await signOut();
    setShowSideBar(false);
    router.push("/sign-in");
  };
  const userMenuItems: any[] = [
    {
      name: "Home",
      icon: <Home size={iconSize} />,
      isActive: pathName === "/",
      onClick: () => router.push("/"),
    },
    {
      name: "Bookings",
      icon: <List size={iconSize} />,
      isActive: pathName === "/user/bookings",
      onClick: () => router.push("/user/bookings"),
    },
    {
      name: "Profile",
      icon: <User size={iconSize} />,
      isActive: pathName === "/user/profile",
      onClick: () => router.push("/user/profile"),
    },
  ];
  const adminMenutems: any[] = [
    {
      name: "Home",
      icon: <Home size={iconSize} />,
      onClick: () => router.push("/"),
      isActive: pathName === "/",
    },
    {
      name: "Bookings",
      icon: <List size={iconSize} />,
      isActive: pathName === "/admin/bookings",
      onClick: () => router.push("/admin/bookings"),
    },
    {
      name: "Hotels",
      icon: <User size={iconSize} />,
      isActive: pathName === "/admin/hotels",
      onClick: () => router.push("/admin/hotels"),
    },
    {
      name: "Rooms",
      icon: <BedDouble size={iconSize} />,
      isActive: pathName === "/admin/rooms",
      onClick: () => router.push("/admin/rooms"),
    },
    {
      name: "Reports",
      icon: <GitGraph size={iconSize} />,
      isActive: pathName === "/admin/reports",
      onClick: () => router.push("/admin/reports"),
    },
  ];

  const menuItems: any[] = loggedInUserData.isAdmin
    ? adminMenutems
    : userMenuItems;

  return (
    <Drawer open={showSideBar} onClose={() => setShowSideBar(false)} closable>
      <div className='flex flex-col gap-14'>
        {menuItems.map((item, index) => (
          <div
            className={`flex gap-4 items-center text-gray-700 cursor-pointer  px-7 py-3 rounded ${
              item.isActive ? "bg-gray-700 text-white" : " "
            }`}
            key={index}
            onClick={() => {
              item.onClick();
              setShowSideBar(false);
            }}
          >
            {item.icon}

            <span className='mt-[2px]'>{item.name}</span>
          </div>
        ))}
        <span
          className='text-center cursor-pointer text-red-500'
          onClick={onLogout}
        >
          Logout
        </span>
      </div>
    </Drawer>
  );
}

export default Sidebar;
