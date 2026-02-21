import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Dashboard from "./pages/Dashboard"
import Products from "./pages/Products"
import Orders from "./pages/Orders"
import Customers from "./pages/Customers"
import Support from "./pages/Support"




const App = () => {
  return (
   
    
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path='/dashboard' element={<Dashboard />}/>
         <Route path='/products' element={<Products />}/>
          <Route path='/orders' element={<Orders />}/>
           <Route path='/customers' element={<Customers />}/>
           <Route path='/support' element={<Support />}/>
        </Route>
      </Routes>
  
  )
}

export default App
