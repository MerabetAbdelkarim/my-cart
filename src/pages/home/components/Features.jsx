import { Col, Container, Row } from "react-bootstrap"
import serviceData from "../../../assets/data/serviceData"
import {motion} from "framer-motion"

function Features() {
  return (
    <>
      <div className="features my-4">
        <Container>
          <h3 className="fw-bold">Features</h3>
          <Row >
            {serviceData.map((item, index)=>(
              <Col className="item text-center " key={index} xs={12} sm={6} lg={3} xl={3} >
                <motion.div whileHover={{ scale:1.09}} className="child-item" style={{backgroundColor:item.bg}} >
                  <h1 className="icon" style={{fontSize:'50px'}}>{item.icon}</h1>
                  <p>{item.title}</p>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Features