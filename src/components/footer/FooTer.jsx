
import {  Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function FooTer() {
    const years = new Date().getFullYear()
    return (
        <footer className="py-3">
            <Container>
                <Row>
                    <Col xs="12" sm="12" md="12" lg="4" xl="4" xxl="4">
                        <div className="logo">
                            <h2 className="logo-footer">
                                digital<span className="">.Shop</span>
                            </h2>
                            <p className="description">
                                Pellentesque suscipit fringilla libero eu ullamcorper. Cras risus
                                eros, faucibus sit amet augue id, tempus pellentesque eros. In
                                imperdiet tristique tincidunt
                            </p>
                        </div>
                    </Col>
                    <Col xs="12" sm="12" md="6" lg="4" xl="4" xxl="4">
                        <div className="pages">
                            <h6 className="title ">Pages</h6>
                            <ul>
                                <li>
                                    <Link className="link" to={"/"}>Home</Link>
                                </li>
                                <li>
                                    <Link className="link" to={"/products"}>Products</Link>
                                </li>
                                <li>
                                    <Link className="link" to={"/about"}>About us</Link>
                                </li>
                                <li>
                                    <Link className="link" to={"/favorite"}>favorite</Link>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col xs="12" sm="12" md="6" lg="4" xl="4" xxl="4">
                        <div className="sociale">
                            <h6 className="title">Sociale</h6>
                            <ul>
                                <li>
                                    <a href="https://www.facebook.com/karimkarimmerabet" target="_blank" rel="noreferrer">Facebook</a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/karim_merabet_/" target="_blank" rel="noreferrer">Instagram</a>
                                </li>
                                <li>
                                    <a href="https://wa.me/0778578282" target="_blank" rel="noreferrer">Whats app</a>
                                </li>
                                <li>
                                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=merabet.abdelkarim.dev@gmail.com" target="_blank" rel="noreferrer">digital.shop@gmail.com</a>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <div className="text-center">
                © {years} digital.Shop. All Rights Reserved.
                </div>
            </Container>
        </footer>
    );
}

export default FooTer;
