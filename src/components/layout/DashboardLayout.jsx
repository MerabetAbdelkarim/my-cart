
import FooTer from "../footer/FooTer"
import { Outlet } from "react-router-dom"
import AdminNavbar from "../../admin/AdminNavbar"
function DashboardLayout() {
    return (
        <>
            <AdminNavbar />
            <Outlet />
            <FooTer />
        </>
    )
}

export default DashboardLayout