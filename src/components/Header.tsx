import { CiDark } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaSearch } from "react-icons/fa";

import { useContext } from "react";
import AuthContext from "../context/authContext";
import pratishimg from "/pb.jpg"
const Header = () => {
 const {user} = useContext(AuthContext)!
  return (
    <header className="shadow-lg px-4 md:px-8 py-4 md:py-5 ">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h2 className="md:text-xl text-lg font-bold md:mb-0 mb-2">Welcome Back {user?.name.split(" ")[0]}</h2>
        <div className="flex items-center gap-6">
            <div className="flex gap-6 md:text-xl text-lg">
            <button><CiDark size={28}/></button>
            <button><FaSearch /></button>
            <button><IoIosNotificationsOutline size={26}/></button>
            </div>
            <div>
                <img src={pratishimg}  className="w-12 h-12 rounded-full" alt={user?.name} />
            </div>
        </div>
      </div>
    </header>
  )
}

export default Header
