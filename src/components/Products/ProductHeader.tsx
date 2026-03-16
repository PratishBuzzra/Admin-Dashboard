import { useState } from "react"
import ConstantHeader from "../ConstantHeader"
import AddProducts from "./AddProducts"


const ProductHeader = () => {
    const [open, setOpen] = useState(false)
  return (
    <div>
        <ConstantHeader headerTitle="Products" headerText="Manage your Products" btnText="Add Product" onClick={()=>setOpen(true)}/>
        {open && (
            <AddProducts/>
        )}
    </div>
  )
}

export default ProductHeader
