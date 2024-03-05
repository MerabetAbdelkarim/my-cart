import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Product from "../pages/produts/Product";
import About from "../pages/about/About";
import Favorite from "../pages/favorite/Favorite";
import Cart from "../pages/cart/Cart";
import User from "../pages/user/User";
import Checkout from "../pages/checkout/Checkout";
import ProductDetails from "../pages/productDetails/ProductDetails";
import Layout from "../components/layout/Layout";
import Auth from "../pages/Authentication/Auth";
import ProtectedRoute from "./ProtectedRoute";

function Routers() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<User />} />
          <Route
            path="/checkout"
            element={
              <ProtectedRoute>
                <Checkout />
              </ProtectedRoute>
            } />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Route>
        <Route path="/authentication" element={<Auth />} />
      </Routes>
    </>
  )
}

export default Routers

