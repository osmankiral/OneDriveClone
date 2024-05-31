import React from "react";
import { BiRename } from "react-icons/bi";
import { FaRegShareSquare } from "react-icons/fa";
import { GoCopy } from "react-icons/go";
import { GrDocumentTransfer } from "react-icons/gr";
import { IoCloseOutline } from "react-icons/io5";
import { MdOutlineArrowCircleLeft, MdOutlineCreateNewFolder } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TfiDownload } from "react-icons/tfi";

const Content = () => {
  return (
    <div className="bg-[#F3F2F5] h-screen py-4">
        <div className="bg-white mx-4 md:mx-12 border border-gray-200 rounded-lg shadow-md py-4 grid grid-cols-12 px-4">
          <div className="col-span-12 md:col-span-10 gap-6 flex flex-wrap">
            <h1 className="flex gap-1 text-md">
              <FaRegShareSquare className="my-auto" />
              <span className="text-sm my-auto">Paylaş</span>
            </h1>
            <h1 className="flex gap-1 text-md">
              <RiDeleteBin6Line className="my-auto" />
              <span className="text-sm my-auto">Sil</span>
            </h1>
            <h1 className="flex gap-1 text-md">
              <GrDocumentTransfer className="my-auto" />
              <span className="text-sm my-auto">Şuraya taşı</span>
            </h1>
            <h1 className="flex gap-1 text-md">
              <GoCopy className="my-auto" />
              <span className="text-sm my-auto">Kopyala</span>
            </h1>
            <h1 className="flex gap-1 text-md">
              <TfiDownload className="my-auto" />
              <span className="text-sm my-auto">İndir</span>
            </h1>
            <h1 className="flex gap-1 text-md">
              <BiRename className="my-auto" />
              <span className="text-sm my-auto">Yeniden adlandır</span>
            </h1>
            <h1 className="flex gap-1 text-md">
              <MdOutlineCreateNewFolder className="my-auto" />
              <span className="text-sm my-auto">Klasörden albüm oluştur</span>
            </h1>
          </div>
          <div className="col-span-12 md:col-span-2 flex gap-6">
            <div className="flex border py-1 px-3 rounded-full text-md">
              <IoCloseOutline className="my-auto" size={22} />
              <span className="my-auto text-sm">1</span>
              <span className="my-auto text-sm">Seçili</span>
            </div>
            <h1 className="flex gap-1 text-md">
              <MdOutlineArrowCircleLeft size={22} className="my-auto" />
              <span className="text-sm my-auto">Ayrıntılar</span>
            </h1>
          </div>
        </div>
        <div className="w-full md:w-80 pl-5 mt-5">
          <h1 className="text-xl font-semibold">Sizin için</h1>
          <div className="py-7 px-12 bg-white border border-gray-200 rounded-lg mt-3 shadow-md">
            <img src="accessmemoriescard.svg" alt="" />
            <h1 className="text-sm font-semibold mt-5">Anılarınıza erişin</h1>
            <h2 className="text-xs">Her cihazda, her yerde, her zaman</h2>
          </div>
        </div>
      </div>
  );
};

export default Content;
