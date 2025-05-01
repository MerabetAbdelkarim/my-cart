import { Container, Row, Col, Card, Image } from 'react-bootstrap';

import ImgOne from '../../../assets/home/image1.png';
import ImgTwo from '../../../assets/home/image2.png';
import ImgThree from '../../../assets/home/image3.png';
import ImgFour from '../../../assets/home/image4.png';

const DressStyle = () => {
    return (
        <Container className="py-5 text-center">
            <h2 className="fw-bold mb-4">BROWSE BY DRESS STYLE</h2>
            <Row className="g-4">
                <Col xs={12} sm={5} md={4} lg={4} >
                    <div className='position-relative border-5 rounded-pill shadow-lg'>
                        <h3 className="fs-5 position-absolute top-0 start-50" style={{ left: '10px' }}>{"sdcsdc"}</h3>
                        <Image src={ImgOne} alt={""} className="img-fluid" />
                    </div>
                </Col>
                <Col xs={12} sm={7} md={8} lg={8} >
                    <div className='position-relative border-5 rounded-pill shadow-lg'>
                        <h3 className="fs-5 position-absolute top-0 start-50" style={{ left: '10px' }}>{"sdcsdc"}</h3>
                        <Image src={ImgTwo} alt={""} className="img-fluid" />
                    </div>
                </Col>
                <Col xs={12} sm={7} md={8} lg={8} >
                    <div className='position-relative border-5 rounded-pill shadow-lg'>
                        <h3 className="fs-5 position-absolute top-0 start-50" style={{ left: '10px' }}>{"sdcsdc"}</h3>
                        <Image src={ImgThree} alt={""} className="img-fluid" />
                    </div>
                </Col>
                <Col xs={12} sm={5} md={4} lg={4} >
                    <div className='position-relative border-5 rounded-pill shadow-lg'>
                        <h3 className="fs-5 position-absolute top-0 start-50" style={{ left: '10px' }}>{"sdcsdc"}</h3>
                        <Image src={ImgFour} alt={""} className="img-fluid" />
                    </div>
                </Col>
            </Row>
        </Container>
    );
};
export default DressStyle;
