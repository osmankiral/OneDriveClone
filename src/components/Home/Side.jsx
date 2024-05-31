import React from "react";
import { CiUser } from "react-icons/ci";
import { GoPlus, GoTrash } from "react-icons/go";
import { HiOutlineUsers } from "react-icons/hi";
import { IoDiamondOutline } from "react-icons/io5";
import { MdOutlineSettingsBackupRestore } from "react-icons/md";
import { SlPicture } from "react-icons/sl";
import { VscFileSymlinkDirectory } from "react-icons/vsc";

const Side = () => {
  return (
    <div className="h-screen bg-[#F3F2F5] pl-4 pt-3">
        <button className="flex pl-1.5 pr-5 mt-3 py-1.5 rounded-3xl text-sm font-semibold bg-blue-700 hover:bg-blue-800 my-auto gap-1">
          <GoPlus size={24} className="my-auto text-white" />
          <span className="text-white my-auto">Yeni ekle</span>
        </button>
        <div className="mt-8 ml-3">
          <h1 className="font-semibold text-sm">Ceren Baykaloğlu</h1>
          <div className="flex mt-4 gap-3">
            <VscFileSymlinkDirectory size={19} />
            <h1 className="font-semibold text-sm">Dosyalarım</h1>
          </div>
          <div className="flex mt-4 gap-3 text-[#505050]">
            <MdOutlineSettingsBackupRestore size={20} />
            <h1 className="text-sm">En son</h1>
          </div>
          <div className="flex mt-4 gap-3 text-[#505050]">
            <SlPicture size={19} className="px-[1px]" />
            <h1 className="text-sm">Fotoğraflar</h1>
          </div>
          <div className="flex mt-4 gap-3 text-[#505050]">
            <HiOutlineUsers size={19} />
            <h1 className="text-sm">Paylaşılan</h1>
          </div>
          <div className="flex mt-4 gap-3 text-[#505050]">
            <GoTrash size={19} />
            <h1 className="text-sm">Geri dönüşüm kutusu</h1>
          </div>
          <h1 className="font-semibold text-sm mt-6">Dosyalara şununla gözat:</h1>
          <div className="flex mt-4 gap-3 text-[#505050]">
            <CiUser size={19} />
            <h1 className="text-sm">Kişiler</h1>
          </div>
        </div>
        <div className="fixed bottom-0 left-0 max-w-[240px] ml-3">
          <div className="border border-gray-400 rounded-md px-3 py-2 my-3">
            <span className="text-xs text-[#505050]">Tüm dosyalarınız ve fotoğraflarınız için depolama alanı edinin.</span>
            <div className="flex border border-gray-400 rounded-md px-3 py-1 mt-5 bg-white">
              <IoDiamondOutline className="text-blue-700 my-auto mr-3" size={17} />
              <span className="text-blue-700 my-auto text-sm">Depolama alanı satın alın</span>
            </div>
          </div>
          <div className="my-3">
            <span className="font-semibold text-sm">Depolama</span>
            <hr className="border border-gray-300 mt-3" />
            <div className="flex gap-1">
              <h1 className="text-xs text-blue-400 underline mt-1 mb-3"> &lt; 0,1 GB </h1>
              <h1 className="text-[#505050] no-underline text-xs mt-1 mb-3"> kullanılan/5 GB (%1)</h1>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Side;
