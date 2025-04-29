
import FooTer from "../footer/FooTer"
import NavBar from "../header/NavBar"
import { Outlet, useLocation } from "react-router-dom"
import AdminNavbar from "../../admin/AdminNavbar"
function Layout() {
  const location = useLocation()
  return (
    <>
      {/* {
        location.pathname.startsWith('/dashboard') ? <AdminNavbar /> : <NavBar />
      } */}
      <NavBar />
       <Outlet />
      {/* <FooTer />  */}
    </>
  )
}

export default Layout