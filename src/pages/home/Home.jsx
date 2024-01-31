
import FooTer from "../../components/FooTer";
import NavBar from "../../components/NavBar";
import CarouselHome from "./components/CarouselHome";
import Features from "./components/Features";
import Header from "./components/Header";
import NewProducts from "./components/NewProducts";
import Motivation from "./components/motivation";

function Home() {
    return (
        <>
            <NavBar />
            <Header/>
            <CarouselHome/>
            <NewProducts/>
            <Features/>
            <Motivation/>
            <FooTer />
        </>
    );
}

export default Home;
