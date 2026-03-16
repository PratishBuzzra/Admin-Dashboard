import { RiAlignItemHorizontalCenterFill } from "react-icons/ri";
import ProductData from "../../data/ProductsData.json"
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import Pagination from "../Pagination";
import { useState } from "react";
const ProductTable = () => {
    const {products} = ProductData
    const [currentPage, setCurrentPage] = useState(1)
    const productPerPage = 5;
    const totalPages = Math.ceil(products.length / productPerPage);
    const indexOfLastProduct = currentPage * productPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productPerPage;
    const currentProduct = products.slice(indexOfFirstProduct, indexOfLastProduct)

    const handlePrevPage = ()=>{
        if(currentPage > 1){

            setCurrentPage((prev)=>prev-1)
        }
    }
    
    const handleNextPage = ()=>{
        if(currentPage < totalPages){

            setCurrentPage((prev)=>prev+1)
        }
    }
  return (
    <div className="bg-white shadow-2xl p-6 rounded-xl flex flex-col gap-3 h-full border border-gray-300">
           <div>
                  <h3 className="flex items-center gap-3 text-lg font-bold"><span><RiAlignItemHorizontalCenterFill size={24}/></span>Products</h3>
            </div>
    
            <div className="flex flex-col gap-4 overflow-x-auto">
                <table className="w-full min-w-150 text-sm">
                    <thead>
                        <tr>
                            <th className="text-start p-4">Products</th>
                            <th className="text-start p-4">Category</th>
                            <th className="text-start p-4">Price</th>
                            <th className="text-start p-4" >Stock</th>
                            <th className="text-start p-4">Status</th>
                            <th className="text-start p-4">Actions</th>
                        </tr>
                        </thead>
                    <tbody>
                        {
                            currentProduct.map((item)=>(
                                <tr key={item.id} className="border-b border-gray-400 hover:bg-gray-100 transition">
                                   
                                    <td className="p-4 flex items-center gap-3">
                                        <img className="w-10 h-10 rounded-lg object-cover" src={item.image} alt={item.image} />
                                        <p className="font-semibold">{item.name}</p>
                                        </td>
                                    <td className="p-4">{item.category}</td>
                                    <td className="p-4">${item.price}</td>
                                    <td className="p-4">{item.stock}</td>
                                    <td className="p-4"><span className={`px-2 py-1 rounded-xl text-sm shadow-xl ${item.status === "active" ? "bg-green-300/30 text-green-500" : item.status ==="out_of_stock" ? "bg-red-300 text-red-800" : "bg-yellow-300 text-yellow-800"}`}>{item.status}</span></td>
                                    <td className="p-4">
                                        <button className="p-2"><FaRegEdit className="text-green-500 text-lg" /></button>
                                        <button className="p-2"><MdDeleteForever className="text-red-500 text-lg"/></button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <Pagination handlePrevPage={handlePrevPage} currentPage={currentPage} handleNextPage={handleNextPage} totalPages={totalPages}/>
            </div>
            
        </div>
  )
}

export default ProductTable
