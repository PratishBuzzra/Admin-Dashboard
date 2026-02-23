
import { useState } from "react";
import { RiEyeCloseFill } from "react-icons/ri";
import { RxEyeOpen } from "react-icons/rx";

const Login = () => {
    const [showPass, setShowPass] = useState<boolean>(false)
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
       <div className="bg-white shadow-2xl rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-3">Login</h1>
        <form action="" className="space-y-3 ">
            <div>
                <label className="block text-lg font-medium" htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Enter Your Email" className="mt-1 w-full border border-gray-500 px-3 py-2 rounded"/>
            </div>
              <div className="relative">
                <label className="block text-lg font-medium" htmlFor="password">Password</label>
                <input type={showPass ? "text" : "password"} id="password" placeholder="Enter Your Password" className="mt-1 w-full border border-gray-500 px-3 py-2 rounded"/>
                <button type="button" onClick={()=>setShowPass(prev=>!prev)} className="absolute right-3 top-13 transform -translate-y-1/2">{showPass ? <RxEyeOpen size={20}/> : <RiEyeCloseFill size={20}/>}</button>
            </div>
            <button className="w-full bg-black text-white py-2 mt-3 rounded hover:bg-gray-500">Login</button>
        </form>
       </div>
    </div>
  )
}

export default Login
