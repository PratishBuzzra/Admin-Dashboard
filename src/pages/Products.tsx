
import FilterProducts from "../components/Products/FilterProducts"
import ProductHeader from "../components/Products/ProductHeader"
import ProductTable from "../components/Products/ProductTable"


const Products = () => {
  return (
    <div className="space-y-6">
      <ProductHeader />
      <FilterProducts />
      <ProductTable />

    </div>
  )
}

export default Products
