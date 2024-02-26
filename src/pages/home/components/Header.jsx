import { Button, Col, Container, Row } from "react-bootstrap"
import { motion } from "framer-motion"



function Header() {
    return (
        <>
            <header>
                <h2 className="title">Find the best  product for you</h2>
                <p className="paragraph">Vestibulum tempus imperdiet sem ac porttitor. Vivamus pulvinar commodo orci, suscipit porttitor velit elementum non</p>
                <div className="action">
                    <Row>
                        <Col className="o-last" md="12" lg="6">
                            <motion.Button whileTap={{ scale:1.02}} className="btn1">Shop Now</motion.Button>
                        </Col>
                        <Col className="o-first" md="6" lg="6">
                            <div className="nbrs">
                                <Row>
                                    <Col>
                                        <div className="nbr-1">
                                            <h6>26.5 k</h6>
                                            <p>Collection</p>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className="nbr-2">
                                            <h6>14 k</h6>
                                            <p>Users</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </div>
            </header>
        </>
    )
}

export default Header