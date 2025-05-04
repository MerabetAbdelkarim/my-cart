import { Container, Row, Col, Card, Image } from 'react-bootstrap';

import ImgOne from '../../../assets/home/image1.png';
import ImgTwo from '../../../assets/home/image2.png';
import ImgThree from '../../../assets/home/image3.png';
import ImgFour from '../../../assets/home/image4.png';

const DressStyle = () => {
    return (
        <Container className="py-5">
            <h4 className="fw-bold mb-4">BROWSE BY DRESS STYLE</h4>
            <Row className="g-4">
                <Col xs={12} sm={5} md={4} lg={4}>
                    <div className="position-relative rounded overflow-hidden shadow" style={{ height: '300px' }}>
                        <Image src={ImgOne} alt="Style One" className="w-100 h-100 object-fit-cover" />
                        <h3 className="position-absolute top-0 start-0 m-2 px-3 py-2  text-dark ">
                            Dress Style 1
                        </h3>
                    </div>
                </Col>

                <Col xs={12} sm={7} md={8} lg={8}>
                    <div className="position-relative rounded overflow-hidden shadow" style={{ height: '300px' }}>
                        <Image src={ImgTwo} alt="Style Two" className="w-100 h-100 object-fit-cover" />
                        <h3 className="position-absolute top-0 start-0 m-2 px-3 py-2  text-dark ">
                            Dress Style 2
                        </h3>
                    </div>
                </Col>

                <Col xs={12} sm={7} md={8} lg={8}>
                    <div className="position-relative rounded overflow-hidden shadow" style={{ height: '300px' }}>
                        <Image src={ImgThree} alt="Style Three" className="w-100 h-100 object-fit-cover" />
                        <h3 className="position-absolute top-0 start-0 m-2 px-3 py-2  text-dark ">
                            Dress Style 3
                        </h3>
                    </div>
                </Col>

                <Col xs={12} sm={5} md={4} lg={4}>
                    <div className="position-relative rounded overflow-hidden shadow" style={{ height: '300px' }}>
                        <Image src={ImgFour} alt="Style Four" className="w-100 h-100 object-fit-cover" />
                        <h3 className="position-absolute top-0 start-0 m-2 px-3 py-2  text-dark ">
                            Dress Style 4
                        </h3>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};
export default DressStyle;
