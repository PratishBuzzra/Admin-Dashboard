
import { CiUser } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import AuthContext from "../context/authContext";
import { useContext } from "react";
interface DropDownProfps {
    handleProfileDropdown: ()=>void;
}
const ProfileDropdown = ({handleProfileDropdown}:DropDownProfps) => {
 const {logout} = useContext(AuthContext)!
  return (
    <div className="absolute border border-gray-200  right-0 mt-2 w-56 bg-white shadow-lg rounded z-50">
        <div className="flex flex-col gap-5 px-8 py-4" onClick={handleProfileDropdown}>
            <div className="flex items-center gap-6">
                <span><CiUser size={20}/></span>
                <p>Account</p>
            </div>
                 <div className="flex items-center gap-6">
                <span><CiSettings  size={20}/></span>
                <p>Setting</p>
            </div>
            <button onClick={logout} className="bg-green-500/50 py-1 rounded text-white">LogOut</button>
        </div>
    </div>
  )
}

export default ProfileDropdown
