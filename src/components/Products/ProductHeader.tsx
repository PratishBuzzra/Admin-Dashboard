import { useState } from "react"
import ConstantHeader from "../ConstantHeader"
import AddProducts from "./AddProducts"

interface ProductHeaderProps {
  setProducts: React.Dispatch<React.SetStateAction<any>>
}
const ProductHeader = ({setProducts}:ProductHeaderProps) => {
    const [open, setOpen] = useState(false)
  return (
    <div>
        <ConstantHeader headerTitle="Products" headerText="Manage your Products" btnText="Add Product" onClick={()=>setOpen(true)}/>
        {open && (
            <AddProducts setOpen={setOpen} setProducts={setProducts}/>
        )}
    </div>
  )
}

export default ProductHeader
