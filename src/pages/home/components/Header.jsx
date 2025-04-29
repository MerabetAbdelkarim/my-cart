import { Button, Col, Container, Row } from "react-bootstrap"
import HeaderImg from "../../../assets/home/header-img.png"

function Header() {
    return (
        <header>
            <div className="bg-yallow">
                <Container>
                    <Row className="align-items-center">
                        <Col md={6} className="text-center text-md-start">
                            <h1 className="fw-bolder display-5">
                                FIND CLOTHES<br />THAT MATCHES<br />YOUR STYLE
                            </h1>
                            <p className="text-muted my-4">
                                Browse through our diverse range of meticulously crafted garments, designed<br />
                                to bring out your individuality and cater to your sense of style.
                            </p>
                            <Button className="rounded-pill px-5" variant="dark" size="lg" >Shop Now</Button>
                            <div className="d-flex justify-content-between mt-5 text-center text-md-start">
                                <div>
                                    <h5 className="fw-bold">200+</h5>
                                    <small>International Brands</small>
                                </div>
                                <div>
                                    <h5 className="fw-bold">2,000+</h5>
                                    <small>High-Quality Products</small>
                                </div>
                                <div>
                                    <h5 className="fw-bold">30,000+</h5>
                                    <small>Happy Customers</small>
                                </div>
                            </div>
                        </Col>
                        <Col md={6} className="text-center">
                            <img
                                src={HeaderImg}
                                alt="Stylish Models"
                                className="img-fluid"
                                style={{ maxHeight: '500px' }}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        </header>
    )
}

export default Header