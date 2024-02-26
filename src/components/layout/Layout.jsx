import FooTer from "../footer/FooTer"
import NavBar from "../header/NavBar"
import Routers from "../../routers/Routers"

function Layout() {
  return (
    <>
        <NavBar/>
        <div>
            <Routers/>
        </div>
        <FooTer/>
    </>
  )
}

export default Layout