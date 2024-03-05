import { Navigate } from "react-router-dom"
import useAuth from "../custome-hooks/useAuth"


function ProtectedRoute({ children }) {
    const { currentUser } = useAuth()
    return currentUser ? { children } : <Navigate to={'/authentication'} />
}

export default ProtectedRoute