import { Navigate, Outlet } from "react-router-dom"
import useAuth from "../custome-hooks/useAuth"


function ProtectedRoute() {
    const { currentUser } = useAuth()
    
    return currentUser ? <Outlet/> : <Navigate to={'/authentication'} />
}

export default ProtectedRoute