import { CiTimer } from "react-icons/ci";
import dashboarddata from "../../data/dasboarddata.json"
const RecentActivities = () => {
     const {recentActivity} = dashboarddata
  return (
    <div className="shadow-2xl p-6 rounded-xl flex flex-col gap-3 bg-white">
      <div className="flex items-center justify-between flex-wrap gap-4  ">
       <h3 className="flex items-center gap-3 text-lg font-bold"><span><CiTimer size={24}/></span>Recent Activity</h3>
       <button className="border border-gray-300 px-2 py-1 rounded ">SeeAll</button>
      </div>
      <div className="flex flex-col gap-4">
      
           {
            recentActivity.map((item)=>(
                <div key={item.id} className="flex justify-between items-center border border-gray-300 px-4 py-3 rounded-xl flex-wrap text-sm gap-4 shadow-lg">
                <div className="flex flex-col flex-wrap gap-1">
                    <p>{item.title}</p>
                    <p className="text-xs">{item.subtitle}  <span className=" text-gray-500">{item.date}</span></p>
                </div>
                <div>
                    <button className={`px-2 py-1 rounded-xl text-sm shadow-xl ${item.type === "order" ? "bg-green-300/30 text-green-500" : item.type ==="alert" ? "bg-red-300/30 text-red-500" : item.type === "promo" ? "bg-blue-300/30 text-blue-500" : "bg-yellow-300/30 text-yellow-500"}`}>{item.status}</button>
                </div>
                </div>
            ))
           }

        
      </div>
    </div>
  )
}

export default RecentActivities
