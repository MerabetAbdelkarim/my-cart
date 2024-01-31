import { Col, Container, Row } from "react-bootstrap"
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function NewProducts() {
    return (
        <Container>
            <div className="new-produts">
                <div className="d-flex justify-content-between">
                    <h2 className="fw-bold">New Products</h2>
                    <h4 className="fw-bold">
                        <Link className="nav-link" to={'/products'}>See more <FaAngleRight /></Link>
                    </h4>
                </div>
                <Row>
                    <Col className="text-center " xs={12} sm={6} lg={3} xl={3} >
                    <h1>1</h1>
                    </Col>
                    <Col className="text-center " xs={12} sm={6} lg={3} xl={3} >
                    <h1>1</h1>
                    </Col>
                    <Col className="text-center " xs={12} sm={6} lg={3} xl={3} >
                    <h1>1</h1>
                    </Col>
                    <Col className="text-center " xs={12} sm={6} lg={3} xl={3} >
                    <h1>1</h1>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default NewProducts