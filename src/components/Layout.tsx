
import Sidebar from "./Sidebar"
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex min-h-screen">
         
        <Sidebar />
        <div className="flex-1 ml-20 md:ml-64 overflow-hidden ">
            <Header />
        <main className="flex-1 p-4 pt-32 md:pt-24">
           <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Layout
