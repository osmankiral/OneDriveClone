
import { Link } from 'react-router-dom'

const Auth = ({email, setEmail}) => {
 
   
  return (
    <div className="fixed h-screen w-full bg-[#F3F2F5] py-10 px-3 md:px-10 flex items-center justify-center">
      <div className="w-[450px] mx-auto border-0.5 border-gray-400 p-12 bg-white shadow-2xl">
        <img className="mb-5" src="microsoft.svg" alt="Microsoft Logo" />
        <h1 className="font-semibold text-2xl text-[#404040] mb-7">Oturum açın</h1>
        <input value={email} onChange={(e)=>setEmail(e.target.value)} className="outline-none pr-10 border-b border-black w-full focus:border-blue-600 py-1" type="email" placeholder="E-posta, telefon veya Skype" />
        <h3 className="text-sm mt-5">Hesabınız yok mu? <span className="text-[#2F83C5] cursor-pointer hover:underline">Yeni bir hesap oluşturun!</span></h3>
        <div className="flex justify-end mt-10">
        <Link to="/loginpassword">
          <button  className="bg-[#0067B8] text-white px-10 py-1 hover:bg-blue-600">İleri</button></Link>
        </div>
      </div>
      
    </div>
  )
}

export default Auth