import CarouselHome from "./components/CarouselHome";
import Features from "./components/Features";
import Header from "./components/Header";
import NewProducts from "./components/NewProducts";
import Motivation from "./components/Motivation";
import Helmet from "../../components/helmet/Helmet";
import { Container } from "react-bootstrap";
import BestProduct from "./components/BestProdutc";
import Timer from "./components/Timer";
import useGetData from "../../custome-hooks/useGetData";
import DressStyle from "./components/DressStyle";

function Home() {
    const { data: products } = useGetData('products')
    const newProduct = products?.filter(item => item?.category === 'mobile')
    const bestProduct = products?.filter(item => item?.category === 'chair')

    return (
        <Helmet title="Home">
            <Header />
            <CarouselHome />
            <Features />
            <NewProducts data={newProduct} />
            <BestProduct data={bestProduct} />
            <DressStyle />
            {/* 
                <Timer />
                <Container>
                <Motivation />
                </Container> 
            */}
        </Helmet>
    );
}

export default Home;
