import ProductData from "../../data/ProductsData.json"
import { FaSearch } from "react-icons/fa";
interface FilterProps {
  search: string;
  setSearch: (value: string) => void;
  category: string;
  setCategory: (value: string) => void;
  status: string;
  setStatus: (value: string) => void;
}
const FilterProducts = ({search, setSearch, category, setCategory, status, setStatus}:FilterProps) => {
    const {categories} = ProductData
  return (
    <div className="bg-white flex flex-col md:flex-row gap-4 items-center md:justify-between p-4 shadow-lg rounded-xl border border-gray-300">
        <div className="flex items-center gap-2 border border-gray-300 px-3 py-2 w-full md:w-1/3 rounded-xl">
            <FaSearch />
            <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Search Products..." className="w-full outline-none"/>
        </div>
      <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
        <select value={category} onChange={(e)=>setCategory(e.target.value)} className="border border-gray-300 px-3 py-2 rounded-lg text-sm" >
            <option value="">All Caltegories</option>
            {
                categories.map((cat, index)=>(
                    <option value={cat} key={index}>
                        {cat}
                    </option>
                ))
            }
        </select>
        <select value={status} onChange={(e)=>setStatus(e.target.value)} className="border border-gray-300 px-3 py-2 rounded-lg text-sm">
            <option value="">All Status</option>
            <option value="active">active</option>
            <option value="low stock">low stock</option>
            <option value="out_of_stock">out_of_stock</option>
        </select>
      </div>
    </div>
  )
}

export default FilterProducts
