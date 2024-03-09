import { Navigate } from "react-router-dom"
import useAuth from "../custome-hooks/useAuth"
import { useState } from "react"


function ProtectedRoute({ children }) {
    // const { currentUser } = useAuth()
    const [currentUser, setCurrentUser] = useState(true)
    console.log('rout product user : ', currentUser)
    return currentUser ? children : <Navigate to={'/authentication'} />
}

export default ProtectedRoute