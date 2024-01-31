import { Col, Container, Row } from "react-bootstrap"
import motivationImage from '../../../assets/home/motivation.png'
function Motivation() {
    return (
        
            <Container>
                <div className="motivation">
                <Row >
                    <Col className="item text-center " xs={12} sm={12} lg={9} xl={9} >
                        <div className="content" >
                            <p>"Start your day with a smile and shop smartly online, where comfort and excitement meet."</p>
                        </div>
                    </Col>
                    <Col className="item text-center " xs={6} sm={6} lg={3} xl={3} >
                        <div className="image" >
                            <img src={motivationImage} alt=""/>
                        </div>
                    </Col>
                </Row>
                </div>
            </Container>
        
    )
}

export default Motivation