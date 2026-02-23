import { RiAlignItemHorizontalCenterFill } from "react-icons/ri";
import dashboarddata from "../../data/dasboarddata.json"
const TopProductTable = () => {
      const {topProducts} = dashboarddata
  return (
    <div className="bg-white shadow-2xl p-6 rounded-xl flex flex-col gap-3 h-full">
       <div className="flex items-center justify-between flex-wrap gap-4  ">
              <h3 className="flex items-center gap-3 text-lg font-bold"><span><RiAlignItemHorizontalCenterFill size={24}/></span>Top Products</h3>
              <button className="border text-sm border-gray-300 px-2 py-1 rounded ">SeeAll</button>
        </div>

        <div className="flex flex-col gap-4 overflow-x-auto">
            <table className="w-full min-w-150">
                <thead>
                    <tr>
                        <th className="text-start py-2">Products</th>
                        <th className="text-start">Stocks</th>
                        <th className="text-start">Price</th>
                        <th className="text-start">Sales</th>
                        <th className="text-start">Earnings</th>
                    </tr>
                    </thead>
                <tbody>
                    {
                        topProducts.map((item)=>(
                            <tr className="border-b border-gray-400 hover:bg-gray-100 transition">
                                <td className="py-5">{item.name}</td>
                                <td>{item.stock}</td>
                                <td>{item.price}</td>
                                <td>{item.sales}</td>
                                <td>{item.earnings}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
        
    </div>
  )
}

export default TopProductTable
