
import Navbar from 'react-bootstrap/Navbar';
import "./style/admin-navbar.css"
import Container from 'react-bootstrap/Container';
import { Col, Nav, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';
import { IoIosNotifications, IoIosSettings } from "react-icons/io";
import useAuth from '../custome-hooks/useAuth';
import { NavLink } from 'react-router-dom';

const AdminNavbar = () => {
    const { currentUser } = useAuth()
    const user = currentUser
    const handeSearch = () => {

    }
    const admin_navbar = [
        {
            display: 'Dashboard',
            path: '/dashboard'
        },
        {
            display: 'All-Products',
            path: '/dashboard/all-products'
        },
        {
            display: 'Orders',
            path: '/dashboard/orders'
        },
        {
            display: 'Users',
            path: '/dashboard/users'
        },
    ]

    return (
        <>
            <Navbar>
                <Container >
                    <Row className='w-100'>
                        <Col className='order-md-1' xs={7} sm={5} md={3} lg={2} >
                            <Link className="navbar-brand logo-navbar" to="/">digital<span className="">.Shop</span> </Link>
                        </Col>
                        <Col className='order-md-3' xs={5} sm={7} md={2} lg={2} >
                            <div className='d-flex justify-content-between align-items-center h-100 '>
                                <IoIosNotifications color='white' size={'20px'} />
                                <IoIosSettings color='white' size={'20px'} />
                                <div>
                                    {
                                        user ? <img style={{ objectFit: "cover" }} src={user.photoURL} width={'35px'} height={'35px'} className=" rounded-circle" /> : ''
                                    }
                                </div>
                            </div>

                        </Col>
                        <Col className='order-md-2 mt-1 mt-md-0' xs={12} sm={12} md={7} lg={8}>
                            <div className="input-search">
                                <input type="text" onChange={handeSearch} placeholder="Search" />
                                <span><CiSearch /></span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Navbar>

            <Nav variant="pills" defaultActiveKey="/home">
                {
                    admin_navbar.map((item, index) => (
                        <Nav.Item key={index}>
                            <NavLink className={navClass=>navClass.isActive?'nav-link me-2 link-active':'nav-link me-2'} to={item.path}>{item.display}</NavLink>
                        </Nav.Item>
                    )
                    )
                }
            </Nav>
        </>
    );
};

export default AdminNavbar;
