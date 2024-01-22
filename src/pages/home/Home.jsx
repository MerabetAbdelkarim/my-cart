import CarouselHome from "../../components/CarouselHome";
import FooTer from "../../components/FooTer";
import NavBar from "../../components/NavBar";
import Header from "./components/Header";

function Home() {
    return (
        <>
            <NavBar />
            <Header/>
            <CarouselHome/>
            <FooTer />
        </>
    );
}

export default Home;
