import { CiDark } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
const Header = () => {
  return (
    <header className="shadow-lg px-4 md:px-8 py-4 md:py-5 ">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h2 className="md:text-xl text-lg font-bold md:mb-0 mb-2">Welcome Back Pratish</h2>
        <div className="flex items-center gap-6">
            <div className="flex gap-6 md:text-xl text-lg">
            <button><CiDark /></button>
            <button><FaSearch /></button>
            <button><IoIosNotificationsOutline /></button>
            </div>
            <div>
                <CgProfile size={28}/>
            </div>
        </div>
      </div>
    </header>
  )
}

export default Header
