import { Col, Container, Row } from "react-bootstrap"
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineFieldTime } from "react-icons/ai";
import { RiCustomerServiceLine } from "react-icons/ri";
import { GrSecure } from "react-icons/gr";



function Features() {
  return (
    <>
      <div className="features">
        <Container>
          <Row >
            <Col className="item text-center " xs={12} sm={6} lg={3} xl={3} >
              <div className="child-item" >
                <h1 className="icon"><FiShoppingCart /></h1>
                <p>Save in Cart</p>
              </div>
            </Col>
            <Col className="item text-center " xs={12} sm={6} lg={3} xl={3} >
              <div className="child-item" >
                <h1 className="icon"><AiOutlineFieldTime /></h1>
                <p>Fast shipping</p>
              </div>
            </Col>
            <Col className="item text-center " xs={12} sm={6} lg={3} xl={3} >
              <div className="child-item" >
                <h1 className="icon"><RiCustomerServiceLine /></h1>
                <p>Customer service</p>
              </div>
            </Col>
            <Col className="item text-center " xs={12} sm={6} lg={3} xl={3} >
              <div className="child-item" >
                <h1 className="icon"><GrSecure /></h1>
                <p>Secure site</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Features