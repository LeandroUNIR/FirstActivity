import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Layout from "../components/Layout";



// De momento no usamos estas páginas a medida que se vayan desarrollando desomentariar
import Landing from "../pages/Landing/Landing.jsx";
import Cart from "../pages/Cart/Cart.jsx";
// import Login from "../pages/Login/Login.jsx";
// import Home from "../pages/Home/Home.jsx";
 import Catalog from "../pages/Catalog/Catalog.jsx";
// import BookDetail from "../pages/BookDetail/BookDetail.jsx";
// import Checkout from "../pages/Checkout/Checkout.jsx";
import Profile from "../pages/Profile/Profile.jsx";

const AppRouter = () => {
    return (
        <BrowserRouter>

            <Routes>
                {/* Rutas desactivadas temporalmente */}
                <Route  element={<Layout />}>
                    <Route path="/" element={<Landing />} />
                    <Route path="catalog" element={<Catalog />} />
                    <Route path="cart" element={<Cart />} />
                    {/* <Route path="login" element={<Login />} />
                    <Route path="home" element={<Home />} />

                    <Route path="book/:id" element={<BookDetail />} />
                    <Route path="checkout" element={<Checkout />} />*/
                    <Route path="profile" element={<Profile />} /> }
                </Route>

            </Routes>

        </BrowserRouter>
    );
};

export default AppRouter;