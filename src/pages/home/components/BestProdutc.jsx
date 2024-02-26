import { Container, Row } from "react-bootstrap"
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import ProductCard from "../../../components/UI/ProductCard";

function BestProduct({ data }) {
    const shuffledData = data.sort(() => Math.random() - 0.5);
    const randomFourItems = shuffledData.slice(0, 4);
    return (
        <Container>
            <div className="new-produts my-4">
                <div className="d-flex justify-content-between">
                    <h4 className="fw-bold">Best Products</h4>
                    <h5 className="fw-bold">
                        <Link className="nav-link" to={'/products'}>See more <FaAngleRight /></Link>
                    </h5>
                </div>
                <Row>
                    {
                        randomFourItems.map((item, index) => (
                            <ProductCard item={item} key={index}/>
                        ))
                    }
                </Row>
            </div>
        </Container>
    )
}
export default BestProduct