import React from "react";

const Spinner = ({ fullHeight = false }) => {
  return (
    <div
      className='flex items-center justify-center'
      style={{ height: fullHeight ? "100vh" : "auto" }}
    >
      <div className=' border-solid h-10 w-10 border-8 border-t-gray-200 animate-spin rounded-full'></div>
    </div>
  );
};

export default Spinner;
