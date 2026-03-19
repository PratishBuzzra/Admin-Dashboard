
import FilterProducts from "../components/Products/FilterProducts"
import ProductHeader from "../components/Products/ProductHeader"
import ProductTable from "../components/Products/ProductTable"
import UseDebounce from "../customhook/UseDebounce"
import ProductData from "./../data/ProductsData.json"
import { useEffect, useMemo, useState } from "react"
export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  status: string;
  image: string;
  createdAt: string;
}

const Products = () => {
  const [products, setProducts] = useState<Product[]>(ProductData.products)
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("")
  const [status, setStatus] = useState("");
const debouncedSearch = UseDebounce(search, 300);
  const filterProducts = useMemo(()=>{
    return products.filter((product)=>{
 const matchSearch = search === "" || product.name.toLowerCase().trim().includes(debouncedSearch.toLowerCase().trim());

      const matchCategory = category ? product.category === category : true;
      const matchStatus = status ? product.status === status : true;
      
      return matchSearch && matchCategory && matchStatus;
    })
  }, [products, search, category, status])
   const [currentPage, setCurrentPage] = useState(1)
      const productPerPage = 5;
      const totalPages = Math.ceil(filterProducts.length / productPerPage);
      const indexOfLastProduct = currentPage * productPerPage;
      const indexOfFirstProduct = indexOfLastProduct - productPerPage;
      const paginatedProduct = filterProducts.slice(indexOfFirstProduct, indexOfLastProduct)
  
    
      useEffect(()=>{
        setCurrentPage(1);
      }, [search, category, status])
  return (
    <div className="space-y-6">
      <ProductHeader setProducts={setProducts}/>
      <FilterProducts search={search} setSearch={setSearch} category={category} setCategory={setCategory} status={status} setStatus={setStatus}/>
      <ProductTable products={paginatedProduct} currentPage = {currentPage} totalPages = {totalPages} setCurrentPage = {setCurrentPage} />

    </div>
  )
}

export default Products
