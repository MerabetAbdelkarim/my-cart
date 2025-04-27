import { Container } from "react-bootstrap";
import calvinKleinImg from "../../../assets/home/brands/calvin-klein.svg";
import gucciImg from "../../../assets/home/brands/gucci.svg";
import pradaImg from "../../../assets/home/brands/prada.svg";
import versaceImg from "../../../assets/home/brands/versace.svg";
import zaraImg from "../../../assets/home/brands/zara.svg";

function CarouselHome() {
    return (
        <div className="carousel bg-black">
            <Container>
                <div className="items">
                    <div className="item">
                        <img src={calvinKleinImg} alt="image calvinKlein brand" />
                    </div>
                    <div className="item">
                        <img src={gucciImg} alt="image gucci brand" />
                    </div>
                    <div className="item">
                        <img src={pradaImg} alt="image prada brand" />
                    </div>
                    <div className="item">
                        <img src={versaceImg} alt="image versace brand" />
                    </div>
                    <div className="item">
                        <img src={zaraImg} alt="image zara brand" />
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default CarouselHome;
