import { Button, Col, Container } from "react-bootstrap"
import headerImage from '../../assets/produts/header.png'

function Test() {
    return (
        <Container>
                <div className="test row">

                    <Col xs={12} sm={12} md={9} lg={9} xl={9} >
                        <div  className="d-flex flex-column justify-content-around align-items-md-start  w-100 h-100" >
                            <h2>Get up to 50% off selected headphones</h2>
                            <Button className="btn1 btn-down ">Buy Now</Button>
                        </div>
                    </Col>
                    <Col className="d-none d-md-block"  xs={6} sm={6}  md={3} lg={3} xl={3} >
                        <img src={headerImage} width={'100%'} alt=""  />
                    </Col>

                </div>
        </Container>
    )
}

export default Test