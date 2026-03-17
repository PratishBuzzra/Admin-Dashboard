
import { useState, type ChangeEvent, type FormEvent } from "react";
import { IoMdClose } from "react-icons/io";
import ProductData from "../../data/ProductsData.json"
import {type Product } from "../../pages/Products"
interface ProductProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}
const AddProducts = ({setOpen, setProducts}:ProductProps) => {
  const [form, setForm] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
    status: "",
    image: null
  })
  const {categories} = ProductData

   const handleChange = (e:ChangeEvent<HTMLInputElement | HTMLSelectElement>)=>{
    const {name, value, type} = e.target;
    if(type === "file"){
      const files = (e.target as HTMLInputElement).files
      if(files && files[0]){
        setForm({
        ...form, [name]: files[0]
      })

      }
      
    }else if(type === "select-one"){
      setForm({
        ...form,
        [name]: value
      })
    }
    else{
      setForm({
        ...form, [name]: value
      })
    }

   }
   const handleSubmit = (e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    const newId = Date.now()
    const newProduct = {
      id: newId,
      name: form.name,
      category: form.category,
      price: Number(form.price),
      stock: Number(form.stock),
      status: form.status,
      image: form.image ? URL.createObjectURL(form.image) : "",
      createdAt: new Date().toISOString()

    }
    setProducts(prev=> [...prev, newProduct])
    setOpen(false)

   }
  const handleCloseModal = ()=>{
    setOpen(false)
  }
  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-gray-400/30">
     <div className="bg-white p-8 w-full max-w-md rounded-xl shadow-lg">
      <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-bold ">Add New Product</h2>
      <button onClick={handleCloseModal}>
      <IoMdClose className="text-xl"/>
      </button>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <input type="file" name="image" onChange={handleChange} accept="image/*" className="border border-gray-300 text-lg p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"/>
        </div>
        <div>
          <input type="text" name="name" value={form.name} onChange={handleChange}  placeholder="Product Name" className="border border-gray-300 text-lg p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600" />
        </div>
        <div>
          <input type="number" name="price" value={form.price} onChange={handleChange} placeholder="Price" className="border border-gray-300 text-lg p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"/>
        </div>
        <div>
          <input type="number" name="stock" value={form.stock} onChange={handleChange} placeholder="Stock" className="border border-gray-300 text-lg p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"/>
        </div>
        <div>
          <select name="category" value={form.category} onChange={handleChange} className="border border-gray-300 text-lg p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600">
            <option value="">Select Category</option>
            {
              categories.map((cat, index)=>(
                <option value={cat} key={index}>
                  {cat}
                </option>
              ))
            }
          </select>
        </div>
        <div>
          <select name="status" value={form.status} onChange={handleChange} className="border border-gray-300 text-lg p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600">
            <option value="">Add Status</option>
            <option value="active">Active</option>
            <option value="low stock">Low Stock</option>
            <option value="out_of_stock">out of stock</option>
           
          </select>
        </div>
        <button className="bg-green-600 text-white text-lg rounded-lg mt-2 py-2 hover:bg-green-700 transition duration-300 w-full">Add Product</button>
      </form>
     </div>
      
    </div>
  )
}

export default AddProducts
