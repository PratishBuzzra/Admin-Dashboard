
import { useContext, useState, type ChangeEvent, type FormEvent } from "react";
import { RiEyeCloseFill } from "react-icons/ri";
import { RxEyeOpen } from "react-icons/rx";
import {  useNavigate } from "react-router-dom";
import AuthContext from "../context/authContext";

interface LoginData {
    email: string;
    password: string;
}
const Login = () => {
    const [showPass, setShowPass] = useState<boolean>(false)
    const [data, setData] = useState<LoginData>({email: "", password: ""})
    const [error, setError] = useState<LoginData>({email: "", password: ""})
    const [loginError, setLoginError] = useState<string>("")
   const {login} = useContext(AuthContext)!
    const navigate = useNavigate();
    const validate =()=>{
        let error = {email: "", password: ""}
        if(!data.email) {
            error.email = "email is required"
        }
        if(!data.password){
            error.password = "passowrd is required"
        }
        setError(error);
        return error;
    } 

      const handleChange = (e: ChangeEvent<HTMLInputElement>)=>{
        const {name, value} = e.target;
        setData((prev)=> ({...prev, [name]: value}))
        setError((prev)=>({...prev, [name]: ""}))
        setLoginError("")
        

    }

    const handleLogin = (e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const validationErrors = validate();
        if(validationErrors.email || validationErrors.password){
            return;
        }
        const admin = {
            email: "pratish@gmail.com",
            password: "12345678",
            role: "admin",
            name: "Pratish"
        }
        if(data.email === admin.email && data.password === admin.password){
            login(admin)
            navigate("/dashboard")
        }else{
            setLoginError("invalid credentials")
        }
    }
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
       <div className="bg-white shadow-2xl rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-3">Login</h1>
        {loginError && <p className="text-red-500 text-center">{loginError}</p>}
        <form onSubmit={handleLogin}className="space-y-3 ">
            <div>
                <label className="block text-lg font-medium" htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={data.email} onChange={handleChange} placeholder="Enter Your Email" className="mt-1 w-full border border-gray-500 px-3 py-2 rounded"/>
                 {error.email && <p className="text-red-500">{error.email}</p>}
            </div>
              <div className="relative">
                <label className="block text-lg font-medium" htmlFor="password">Password</label>
                <input type={showPass ? "text" : "password"} id="password" name="password" value={data.password} onChange={handleChange} placeholder="Enter Your Password" className="mt-1 w-full border border-gray-500 px-3 py-2 rounded"/>
                <button type="button" onClick={()=>setShowPass(prev=>!prev)} className="absolute right-3 top-13 transform -translate-y-1/2">{showPass ? <RxEyeOpen size={20}/> : <RiEyeCloseFill size={20}/>}</button>
                 {error.password && <p className="text-red-500">{error.password}</p>}
            </div>
            <button className="w-full bg-black text-white py-2 mt-3 rounded hover:bg-gray-500">Login</button>
             
        </form>
        <div className="mt-4 text-sm text-center text-gray-500">
  <p>Demo Credentials:</p>
  <p>Email: pratish@gmail.com</p>
  <p>Password: 12345678</p>
</div>
       </div>
    </div>
  )
}

export default Login
