import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AdminPanel from "./pages/AdminPanel";
import Password from "./components/Login/Password";
import { useState } from "react";

function App() {
  const [email,setEmail] = useState("")
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login email={email} setEmail={setEmail}  />} />
          <Route path="/loginpassword" element={<Password email={email} />} />
          <Route path="/adminpanel" element={<AdminPanel />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
