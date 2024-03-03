
import FooTer from "../footer/FooTer"
import NavBar from "../header/NavBar"
import { Outlet } from "react-router-dom"

function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <FooTer />
    </>
  )
}

export default Layout