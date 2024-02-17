import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUser  } from "react-icons/fa";
import { useEffect, useState } from "react";

function NavBar() {
    const [scrolled, setScrolled]= useState(false) 
    
    useEffect(()=>{
        const onScroll =()=>{
            if (window.scrollY > 50) {
                setScrolled(true)
            }else{
                setScrolled(false)
            }
        }
        window.addEventListener("scroll", onScroll);
        return ()=> window.removeEventListener("scroll", onScroll)
    },[])

    return (
        <>
            <Navbar sticky="top" className={scrolled?'scrolled':''}   expand="md">
                <Container>
                
                <Link className="navbar-brand logo-navbar" to="/">digital<span className="">.Shop</span> </Link>
                    <Navbar.Toggle  aria-controls="basic-navbar-nav">
                        <div className="toggler-icon top-bar"></div>
                        <div className="toggler-icon middle-bar"></div>
                        <div className="toggler-icon bottom-bar"></div>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="m-auto">
                            <Link className="nav-link koko" to="/">Home</Link>
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
