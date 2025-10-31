import React from "react";
import {BiPlusMedical} from 'react-icons/bi'
const UploadBtn = () => {
  return (
    <div>
      <button
        className="flex items-center   text-white font bold truncate sticky top-0 bg-[#9A1B31] py-3 px-4 rounded-full  hover:truncate-none w-12 hover:w-44"
        style={{
          transition: "all 0.7s ease-out",
          position: "sticky",
          top: "20px",
        }}
      >
        <BiPlusMedical className="block" />
        <p className="hidden md:inline absolute left-12">Add Categoreis</p>
      </button>
    </div>
  );
};

export default UploadBtn;
