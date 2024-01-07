import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUser  } from "react-icons/fa";

function NavBar() {
    return (
        <>
            <Navbar className="bg-navbar" sticky="top"  expand="md">
                <Container>
                <Link className="navbar-brand logo-navbar " to="/">digital<span className="">.Shop</span> </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="m-auto">
                            <Link className="nav-link" to="/">Home</Link>
                            <Link className="nav-link" to="/products">Products</Link>
                            <Link className="nav-link" to="/about">About us</Link>
                            <Link className="nav-link" to="/favorite">Favorite</Link>
                        </Nav>
                        <Nav>
                            <Link className="nav-link" to="/cart"><FaShoppingCart /> <span className="cart-nbr">2</span>  </Link>
                            <Link className="nav-link" to="/profile"><FaUser /></Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
export default NavBar;
