import { CiDark } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaSearch } from "react-icons/fa";

import { useContext, useEffect, useRef, useState } from "react";
import AuthContext from "../context/authContext";
import pratishimg from "/pb.jpg"
import ProfileDropdown from "./ProfileDropdown";
const Header = () => {
 const {user} = useContext(AuthContext)!
 const [showDropDown, setShowDropDown] = useState(false)
 const dropdownRef = useRef<HTMLDivElement>(null)
 useEffect(()=>{
  const handleClickOutside = (event: MouseEvent)=>{
    if(dropdownRef.current && !dropdownRef.current.contains(event.target as Node)){
      setShowDropDown(false);
    }
  }
  document.addEventListener("mousedown", handleClickOutside);
  return ()=>{
    document.removeEventListener("mousedown", handleClickOutside)
  }
 }, []);
  return (
    <header className="fixed w-full bg-white z-50 shadow-lg px-4 md:px-8 py-4 md:py-5 ">
      <div className="flex flex-col md:flex-row justify-between items-center mr-15 md:mr-0">
        <h2 className="md:text-xl font-bold md:mb-0 mb-2">Welcome Back {user?.name.split(" ")[0]}</h2>
        <div className="flex items-center gap-6 md:mr-60">
            <div className="flex gap-6 md:text-xl text-lg">
            <button><CiDark size={28}/></button>
            <button><FaSearch /></button>
            <button><IoIosNotificationsOutline size={26}/></button>
            </div>
            <div className="relative" ref={dropdownRef}>
                <img src={pratishimg} onClick={()=>setShowDropDown(prev => ! prev)}  className=" w-12 h-12 rounded-full" alt={user?.name} />
                 {showDropDown && <ProfileDropdown handleProfileDropdown={()=>setShowDropDown(prev => ! prev)}/>}
            </div>
        </div>
      </div>
    </header>
  )
}

export default Header
