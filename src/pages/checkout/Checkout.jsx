import { Col, Container, Form, Row } from "react-bootstrap"
import Helmet from "../../components/helmet/Helmet"
import UpperSection from "../produts/components/UpperSection"
import { Link } from "react-router-dom"
import './checkout.css'
import { useSelector } from "react-redux"

function Checkout() {
  const totalQuantity =useSelector((state)=>state.cart.totalQuantity)
  const totalAmount =useSelector((state)=>state.cart.totalAmount)
  return (
    <>
      <Helmet title={'Checkout'}>
        <UpperSection title={'Checkout'} />
        <Container>
          <Row>
            <Col sm={12} md={8} lg={8}>
              <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Billing information</Form.Label>
                  <Form.Control type="email" placeholder="Enter your name" />
                </Form.Group>
                <Form.Control className="mb-3" type="email" placeholder="Enter your email" />
                <Form.Control className="mb-3" type="email" placeholder="Phone number" />
                <Form.Control className="mb-3" type="email" placeholder="Street address" />
                <Form.Control className="mb-3" type="email" placeholder="City" />
                <Form.Control className="mb-3" type="email" placeholder="Postal code" />
                <Form.Control className="mb-3" type="email" placeholder="Country" />
              </Form>
            </Col>
            <Col sm={12} md={4} lg={4}>
              <div className="card-payment ">
                <div className="d-flex justify-content-between"><div>Total Qty: </div> <div>{totalQuantity} items</div></div>
                <div className="d-flex justify-content-between"><div>Subtotal: </div> <div>${totalAmount}</div></div>
                <div className="d-flex justify-content-between"><div>Shipping: </div> <div>$0</div></div>
                <hr />
                <h5 className="d-flex justify-content-between"><div>Total Cost </div> <div>${totalAmount}</div></h5>
                <br />
                <button className="btn-checkout">
                  <Link to={"/"}>Checkout</Link>
                </button>
              </div>
            </Col>
          </Row>


        </Container>

      </Helmet>
    </>
  )
}

export default Checkout