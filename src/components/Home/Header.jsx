import React from "react";
import { CgMenuGridO } from "react-icons/cg";
import { CiSettings } from "react-icons/ci";
import { IoDiamondOutline } from "react-icons/io5";
import { RiQuestionMark } from "react-icons/ri";
import { VscSearch } from "react-icons/vsc";

const Header = () => {
  return (
    <div className="grid grid-cols-12 bg-[#F3F2F5]">
    <div className="flex gap-5 p-3 col-span-12 md:col-span-1">
      <CgMenuGridO color="#424242" size={24} />
      <span className="text-[#424242] text-md font-semibold">OneDrive</span>
    </div>
    <div className="col-span-12 md:col-span-9 m-auto flex bg-white border rounded-3xl pl-4 pr-4 md:pr-48 border-gray-300">
      <VscSearch className="text-gray-700 my-auto" size={18} />
      <input
        className="py-1 ml-3 placeholder-gray-500 outline-none w-full"
        type="text"
        placeholder="Her şeyi ara"
      />
    </div>
    <div className="col-span-12 md:col-span-2 flex justify-end md:justify-end mr-3 my-auto gap-7">
      <IoDiamondOutline color="#424242" size={18} className="my-auto" />
      <CiSettings color="#424242" size={22} className="my-auto" />
      <RiQuestionMark color="#424242" size={18} className="my-auto" />
      <div className="p-3 bg-white border border-gray-300 rounded-full"></div>
    </div>
    </div>
  );
};

export default Header;
