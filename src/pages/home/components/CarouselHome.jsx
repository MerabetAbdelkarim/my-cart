import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import appleImg from "../../../assets/home/brands/apple.svg";
import chanelImg from "../../../assets/home/brands/chanel.svg";
import hpImg from "../../../assets/home/brands/hp.svg";
import lacosteImg from "../../../assets/home/brands/lacoste.svg";
import nbaImg from "../../../assets/home/brands/nba.svg";
import nikeImg from "../../../assets/home/brands/nike.svg";
import reebokImg from "../../../assets/home/brands/reebok.svg";
import { Container } from "react-bootstrap";


function CarouselHome() {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 4,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    return (

    <>
        <Container>
            <Carousel
                className="my-5"
                autoPlay
                customTransition="all 15s linear"
                infinite
                pauseOnHover={false}
                responsive={responsive}
                arrows={false}
                rewind={true}
            >
                <div className="item">
                    <img src={appleImg} alt="image apple brand" />
                </div>
                <div className="item">
                    <img src={chanelImg} alt="image chanel brand" />
                </div>
                <div className="item">
                    <img src={hpImg} alt="image hp brand" />
                </div>
                <div className="item">
                    <img src={lacosteImg} alt="image lacoste brand" />
                </div>
                <div className="item">
                    <img src={nbaImg} alt="image nba brand" />
                </div>
                <div className="item">
                    <img src={nikeImg} alt="image nike brand" />
                </div>
                <div className="item">
                    <img src={reebokImg} alt="image reebok brand" />
                </div>
            </Carousel>
        </Container>
    </>
  )
}

export default CarouselHome