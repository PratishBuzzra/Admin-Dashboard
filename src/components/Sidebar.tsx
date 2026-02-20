import { MdDashboard } from "react-icons/md";
import { FiShoppingBag } from "react-icons/fi";
import { BiSolidNotepad } from "react-icons/bi";
import { FaRegUser, FaUserCircle } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import { RiMenuFold3Fill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
const sideItems = [
  {id: 1, to: '/dashboard', icon: <MdDashboard size={24} />, label: 'Dashboard' },
  {id:2, to: '/Products', icon: <FiShoppingBag size={24} />, label: 'Products' },
  {id:3, to: '/orders', icon: <BiSolidNotepad size={24} />, label: 'Orders' },
  {id:4, to: '/customers', icon: <FaRegUser size={24} />, label: 'Customers' },
  {id:5, to: '/support', icon: <MdSupportAgent size={24} />, label: 'Support' },
];
const Sidebar = () => {

  return (
    <aside className="fixed top-0 left-0 z-50 w-64 h-screen shadow-lg transition-transform px-3 py-4 flex flex-col">
        <div className="flex items-center justify-between ">
            <h1 className="text-xl font-bold" >Admin Dashboard</h1>
            <button className="text-xl font-bold cursor-pointer"><RiMenuFold3Fill /></button>
        </div>
        <ul className="flex-1 space-y-1 pt-6 text-gray-500">
            {sideItems.map((item)=>(
                <NavLink key={item.id} to={item.to} className="flex items-center gap-4 px-3 py-2">
                    <span>{item.icon}</span>
                    <h3 className="text-lg ">{item.label}</h3>
                </NavLink>
            ))}
        </ul>
        <div className="flex px-3 py-2 items-center gap-4 ">
            <span><FaUserCircle size={24}/></span>
            <h3 className="font-bold text-xl">My Profile</h3>
        </div>
      
    </aside>
  )
}

export default Sidebar
