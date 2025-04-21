import { useEffect, useState } from "react";
import { Navbar, Container, Nav, NavDropdown, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { LuShoppingCart } from "react-icons/lu";
import { useSelector } from "react-redux";
import useAuth from "../../custome-hooks/useAuth"
import { signOut } from "firebase/auth";
import { auth } from "../../firebase.config";
import { toast } from "react-toastify";
import { LuUserCircle } from "react-icons/lu";

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

    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav);
        console.log(nav)
    }

    useEffect(() => {
        // let handleNav = () => {
        //     setNav(false)
        // }
        // document.addEventListener("mousedown", handleNav)
        document.addEventListener("click", function (event) {
            const navbar = document.getElementById("nav0bar"); // Replace with your navbar's ID
            if (!navbar.contains(event.target) && navbar.classList.contains("show")) {
                navbar.classList.remove("show");
            }
        });


    }, [])

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
            <Alert
                variant="dark"
                className="rounded-0 border-0 py-2 px-0 m-0 d-flex justify-content-center align-items-center text-center bg-black text-white"
            >
                Sign up and get 20% off on your first order.{" "}
                <Alert.Link href="#" className="text-decoration-underline text-white">Sign Up Now</Alert.Link>.
            </Alert>
            <Navbar sticky="top" id="nav0bar" className={scrolled ? 'scrolled' : ''} expand="md">
                <Container>
                    <Link className="navbar-brand logo-navbar" to="/">
                        digital<span>.Shop</span>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleNav}>
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
                            <Link className="nav-link" to="/cart">
                                <LuShoppingCart size={20} /> <span className="cart-nbr">{totalQuantity}</span>
                            </Link>
                            <NavDropdown
                                title={
                                    user ? (
                                        <img
                                            style={{ objectFit: "cover" }}
                                            src={user?.photoURL}
                                            width="35px"
                                            height="35px"
                                            className="rounded-circle"
                                            alt="User profile"
                                        />
                                    ) : (
                                        <LuUserCircle size={20}/>
                                    )
                                }
                                id="basic-nav-dropdown"
                            >
                                {user ? (
                                    <>
                                        <NavDropdown.Item as={Link} to="/dashboard">
                                            Dashboard
                                        </NavDropdown.Item>
                                        <NavDropdown.Item onClick={logout}>
                                            Logout
                                        </NavDropdown.Item>
                                    </>
                                ) : (
                                    <NavDropdown.Item as={Link} to="/authentication">
                                        Connect
                                    </NavDropdown.Item>
                                )}
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
export default NavBar;
