import { useEffect, useState } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import useAuth from "../../custome-hooks/useAuth"
import { signOut } from "firebase/auth";
import { auth } from "../../firebase.config";
import { toast } from "react-toastify";
import imageProfile from "../../assets/auth/profile.webp"

function NavBar() {
    const totalQuantity = useSelector(state => state.cart.totalQuantity)

    const [scrolled, setScrolled] = useState(false)

    const { currentUser } = useAuth()
    const user = currentUser
    const navigate = useNavigate()

    const logout = () => {
        signOut(auth).then(() => {
            toast.success('Logged out')
            navigate('/')
        }).catch(err => {
            toast.error(err.message)
        })
    }

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    return (
        <>
            <Navbar sticky="top" className={scrolled ? 'scrolled' : ''} expand="md">
                <Container>
                    <Link className="navbar-brand logo-navbar" to="/">digital<span className="">.Shop</span> </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <div className="toggler-icon top-bar"></div>
                        <div className="toggler-icon middle-bar"></div>
                        <div className="toggler-icon bottom-bar"></div>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="m-auto">
                            <Link className="nav-link" to="/">Home</Link>
                            <Link className="nav-link" to="/products">Products</Link>
                            <Link className="nav-link" to="/about">About us</Link>
                            <Link className="nav-link" to="/favorite">Favorite</Link>
                        </Nav>
                        <Nav className="d-flex">
                            <Link className="nav-link" to="/cart"><FaShoppingCart /> <span className="cart-nbr">{totalQuantity}</span>  </Link>
                            <NavDropdown className="" title={user ? <img style={{ objectFit: "cover" }} src={user?.photoURL} width={'35px'} height={'35px'} className=" rounded-circle" /> : <img style={{ objectFit: "cover" }} src={imageProfile} width={'35px'} height={'35px'} className=" rounded-circle" />} id="basic-nav-dropdown">
                                {
                                    user
                                        ?
                                        <>
                                            <NavDropdown.Item>
                                                <Link to={'/dashboard'}>Dashboard</Link>
                                            </NavDropdown.Item>
                                            <NavDropdown.Item onClick={logout}>
                                                <h6>logout</h6>
                                            </NavDropdown.Item>
                                        </>
                                        :
                                        <>
                                            <NavDropdown.Item>
                                                <Link to={'/authentication'}>Connect</Link>
                                            </NavDropdown.Item>
                                        </>
                                }
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
export default NavBar;
