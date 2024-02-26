import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Product from "../pages/produts/Product";
import About from "../pages/about/About";
import Favorite from "../pages/favorite/Favorite";
import Cart from "../pages/cart/Cart";
import User from "../pages/user/User";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import Checkout from "../pages/checkout/Checkout";
import ProductDetails from "../pages/productDetails/ProductDetails";

function Routers() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<User />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/product-details" element={<ProductDetails />} />
      </Routes>
    </>
  )
}

export default Routers