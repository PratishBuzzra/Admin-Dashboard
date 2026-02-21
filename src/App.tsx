import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Dashboard from "./pages/Dashboard"




const App = () => {
  return (
   
    
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path='/dashboard' element={<Dashboard />}/>
        </Route>
      </Routes>
  
  )
}

export default App
