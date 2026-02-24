import { useContext, type ReactNode } from "react"
import AuthContext from "../context/authContext"
import { Navigate } from "react-router-dom"


const ProtectedRoute = ({children, role}:{children: ReactNode, role: string}) => {
    const {user, isAuthenticated} = useContext(AuthContext)!
    if(!isAuthenticated) return <Navigate to="/" replace/>
    if(role && user?.role !== role) return <Navigate to ="/" replace/>

  return children
}

export default ProtectedRoute
