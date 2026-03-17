
import FilterProducts from "../components/Products/FilterProducts"
import ProductHeader from "../components/Products/ProductHeader"
import ProductTable from "../components/Products/ProductTable"
import ProductData from "./../data/ProductsData.json"
import { useState } from "react"
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
  return (
    <div className="space-y-6">
      <ProductHeader setProducts={setProducts}/>
      <FilterProducts />
      <ProductTable products={products}/>

    </div>
  )
}

export default Products
