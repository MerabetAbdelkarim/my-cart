import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
// import './DressStyle.css'; // We'll add styling here

const styles = [
    { title: 'Casual', image: 'https://www.apple.com/v/iphone/home/cb/images/meta/iphone__kqge21l9n26q_og.png' },
    { title: 'Formal', image: 'https://www.apple.com/v/iphone/home/cb/images/meta/iphone__kqge21l9n26q_og.png' },
    { title: 'Party', image: 'https://www.apple.com/v/iphone/home/cb/images/meta/iphone__kqge21l9n26q_og.png' },
    { title: 'Gym', image: 'https://www.apple.com/v/iphone/home/cb/images/meta/iphone__kqge21l9n26q_og.png' },
];

const DressStyle = () => {
    return (
        <Container className="py-5 text-center">
            <h2 className="fw-bold mb-4">BROWSE BY DRESS STYLE</h2>
            <Row className="g-4">
                <Col xs={12} sm={5} md={4} lg={4} >
                    <Card className="dress-card h-100 border-0 shadow-sm">
                        <div className="image-wrapper">
                            <Card.Img variant="top" src={"https://www.apple.com/v/iphone/home/cb/images/meta/iphone__kqge21l9n26q_og.png"} alt={""} />
                        </div>
                        <Card.Body>
                            <Card.Title className="fs-5">{"dscsd"}</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={7} md={8} lg={8} >
                    <Card className="dress-card h-100 border-0 shadow-sm">
                        <div className="image-wrapper">
                            <Card.Img variant="top" src={"https://www.apple.com/v/iphone/home/cb/images/meta/iphone__kqge21l9n26q_og.png"} alt={""} />
                        </div>
                        <Card.Body>
                            <Card.Title className="fs-5">{"sdcsdc"}</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={7} md={8} lg={8} >
                    <div className='position-relative border-5 rounded-pill shadow-lg'>
                        <h3 className="fs-5 position-absolute top-0 start-50" style={{ left: '10px' }}>{"sdcsdc"}</h3>
                        <Image src={"https://www.apple.com/v/iphone/home/cb/images/meta/iphone__kqge21l9n26q_og.png"} alt={""} className="img-fluid" />
                    </div>
                </Col>
                {/* <Col xs={12} sm={5} md={4} lg={4} >
                    <Card className="dress-card h-100 border-0 shadow-sm">
                        <div className="image-wrapper">
                            <Card.Img variant="top" src={"https://www.apple.com/v/iphone/home/cb/images/meta/iphone__kqge21l9n26q_og.png"} alt={""} />
                        </div>
                        <Card.Body>
                            <Card.Title className="fs-5">{"sdvsd"}</Card.Title>
                        </Card.Body>
                    </Card>
                </Col> */}
            </Row>
        </Container>
    );
};
export default DressStyle;
