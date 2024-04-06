import { Col, Container, Form, Row } from "react-bootstrap"
import './about.css'
import aboutImg from "../../assets/about/about.jpg"
import UpperSection from "../produts/components/UpperSection";

function About() {
  return (
    <section className="about">
      <Container>
        <UpperSection title={"About"} />
        <Row className="align-items-center mt-5">
          <Col className="image">
            <img src={aboutImg} width={'600px'} alt="about image" />
          </Col>
          <Col className="content">
            <h2>WELCOME TO <span className="fw-bold">digital.Shop</span> </h2>
            <p>Parlo provide how all this mistaken idea of denouncing pleasure and sing pain was born an will give you a complete.</p>
            <h5>WE START AT 2024</h5>
            <p>Parlo provide how all this mistaken idea of denouncing pleasure and sing pain was born an will give you a complete.</p>
            <h5>WIN BEST ONLINE SHOP AT 2024</h5>
            <p>Parlo provide how all this mistaken idea of denouncing pleasure and sing pain was born an will give you a complete.</p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About