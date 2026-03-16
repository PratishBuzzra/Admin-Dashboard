import ProductData from "../../data/ProductsData.json"
import { FaSearch } from "react-icons/fa";
const FilterProducts = () => {
    const {categories} = ProductData
  return (
    <div className="bg-white flex flex-col md:flex-row gap-4 items-center md:justify-between p-4 shadow-lg rounded-xl border border-gray-300">
        <div className="flex items-center gap-2 border border-gray-300 px-3 py-2 w-full md:w-1/3 rounded-xl">
            <FaSearch />
            <input type="text" placeholder="Search Products..." className="w-full outline-none"/>
        </div>
      <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
        <select className="border border-gray-300 px-3 py-2 rounded-lg text-sm" >
            <option value="">All Caltegories</option>
            {
                categories.map((cat, index)=>(
                    <option value={cat} key={index}>
                        {cat}
                    </option>
                ))
            }
        </select>
        <select className="border border-gray-300 px-3 py-2 rounded-lg text-sm">
            <option value="">All Status</option>
            <option value="">Active</option>
            <option value="">Low Stock</option>
            <option value="">Out of Stock</option>
        </select>
      </div>
    </div>
  )
}

export default FilterProducts
