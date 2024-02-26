import { Col, Container, Row } from "react-bootstrap"
import image from "../../../assets/home/clock.png"
import Clock from "../../../components/UI/Clock"
import { motion } from "framer-motion";
function Timer() {
  return (
    <>  
        <div className="timer my-4 overflow-hidden">
            <Container>
                <Row className="text-center justify-content-center">
                    <Col xs={12} sm={9} md={6} lg={4}>
                        <Clock/>
                    </Col>
                </Row>
                <Row className="overflow-hidden">
                    <Col className="" xs={6} >
                        <div className="d-flex flex-column justify-content-evenly align-items-baseline h-100">
                            <div className=" small ">
                                Limited Offers
                            </div>
                            <div className="">
                               <h3 className="large">Quality Armchair</h3> 
                            </div>
                            <p className="d-none d-md-block">Enjoy the very best of Europe on a 7-day sojourn through 6 countries and 7 capitals of culture, expertly planned and organized for you by Wanderlust.</p>
                            <motion.button whileHover={{scale: 1.1}}>Visit Stor</motion.button>
                        </div>
                        
                    </Col>
                    <Col className="text-center" xs={6} >
                        <img src={image} width={'300px'} alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    </>
  )
}

export default Timer
