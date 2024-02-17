import { Col, Container, Row } from "react-bootstrap"
import motivationImage from '../../../assets/home/motivation.png'

function Motivation() {
    return (
        <Container>
            <Row className="motivation align-items-center justify-content-center">
                <Col className="item align-items-md-center " xs={12} sm={12} lg={9} xl={9} >
                    <div className="content" >
                        <p>`Start your day with a smile and shop smartly online, where comfort and excitement meet`</p>
                    </div>
                </Col>
                <Col className="item " xs={6} sm={6} lg={3} xl={3} >
                    <img className="img-fluid" width={'50px'} src={motivationImage} alt=""/>
                </Col>
            </Row>
        </Container>
    )
}

export default Motivation