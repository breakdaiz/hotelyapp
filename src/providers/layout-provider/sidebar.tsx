import { Drawer } from "antd";
import React from "react";

function Sidebar({
  setShowSideBar,
  showSideBar,
}: {
  showSideBar: boolean;
  setShowSideBar: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <Drawer
      open={showSideBar}
      onClose={() => setShowSideBar(false)}
      closable
    ></Drawer>
  );
}

export default Sidebar;
