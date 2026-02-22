import { MdDashboard } from "react-icons/md";
import { FiShoppingBag } from "react-icons/fi";
import { BiSolidNotepad } from "react-icons/bi";
import { FaRegUser, FaUserCircle } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import { RiMenuFold3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { useState } from "react";
const sideItems = [
  {id: 1, to: '/dashboard', icon: <MdDashboard size={24} />, label: 'Dashboard' },
  {id:2, to: '/products', icon: <FiShoppingBag size={24} />, label: 'Products' },
  {id:3, to: '/orders', icon: <BiSolidNotepad size={24} />, label: 'Orders' },
  {id:4, to: '/customers', icon: <FaRegUser size={24} />, label: 'Customers' },
  {id:5, to: '/support', icon: <MdSupportAgent size={24} />, label: 'Support' },
];
const Sidebar = () => {
    const [open, setOpen] = useState<boolean>(true)

  return (
    <>
    {
        open && (
            <div className="fixed top-0 left-64 right-0 bottom-0 bg-black md:hidden z-50" onClick={()=>setOpen(false)}
            />
        )
    }
    <aside className={`fixed top-0 left-0 bg-white h-screen shadow-lg transition-transform px-3 py-4 flex flex-col  ${open ? 'w-64' : 'w-20 '} md:w-64 z-50`}>
        <div className="flex items-center justify-between ">
            <h1 className={`text-xl font-bold ${open ? 'block' : 'hidden'} md:block`} >Admin Dashboard</h1>
            <button onClick={()=>setOpen(!open)} className="text-xl font-bold cursor-pointer md:hidden"> {open ? <IoMdClose />: <RiMenuFold3Fill size={24} className="ml-3"/> } </button>
        </div>
        <ul className="flex-1 space-y-6 pt-6 text-gray-500">
            {sideItems.map((item)=>(
                <NavLink key={item.id} to={item.to} className={({isActive})=> `flex items-center gap-4 px-3 ${isActive ? "bg-gray-300 text-black p-2 rounded-lg": ''}`} onClick={()=>setOpen(false)}>
                    <span>{item.icon}</span>
                    <h3 className={`text-lg ${open ? 'block' : 'hidden'} md:block`}>{item.label}</h3>
                </NavLink>
            ))}
        </ul>
        <div className="flex px-3 py-2 items-center gap-4 ">
            <span><FaUserCircle size={24}/></span>
            <h3 className={`font-bold text-xl ${open ? 'block' : 'hidden'} md:block` }>My Profile</h3>
        </div>
      
    </aside>
    </>
  )
}

export default Sidebar
