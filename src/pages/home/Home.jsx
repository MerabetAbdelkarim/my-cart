
import CarouselHome from "./components/CarouselHome";
import Features from "./components/Features";
import Header from "./components/Header";
import NewProducts from "./components/NewProducts";
import Motivation from "./components/Motivation";
import Helmet from "../../components/helmet/Helmet";
import ProductList from "../../components/UI/ProductList";
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import products from "../../assets/data/products";
import BestProduct from "./components/BestProdutc";
import Timer from "./components/Timer";


function Home() {
    const [newProduct, setNewProduct] = useState(products)
    const [bestProduct, setBestProduct] = useState(products)
    useEffect(()=>{
        const filterdNewProduct = newProduct.filter(item => item.category === 'watch')
        setNewProduct(filterdNewProduct)
        const filterdbestProduct = bestProduct.filter(item => item.category === 'chair')
        setBestProduct(filterdbestProduct)
    },[] )
    return (
        <Helmet  title="Home">
            <Container>
                <Header />
                <CarouselHome />
                <Features />
                <NewProducts data={newProduct}/>
                <BestProduct data={bestProduct}/>
            </Container>
                <Timer/>
            <Container>
                <Motivation />
            </Container>
        </Helmet>
    );
}

export default Home;
