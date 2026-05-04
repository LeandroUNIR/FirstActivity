import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PrivateRoute from "../components/PrivateRoute";
import Layout from "../components/Layout";
import Login from "../pages/Login/Login.jsx";
import Register from "../pages/Register/Register.jsx";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword.jsx";
import Landing from "../pages/Landing/Landing.jsx";
import Cart from "../pages/Cart/Cart.jsx";
import Catalog from "../pages/Catalog/Catalog.jsx";
import BookDetail from "../pages/BookDetail/BookDetail.jsx";
import Profile from "../pages/Profile/Profile.jsx";
import Checkout from "../pages/Checkout/Checkout.jsx";
import { GlobalProvider } from "../context/AuthContext/global/GlobalProvider.jsx";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <GlobalProvider>
                <Routes>

                    {/* Rutas públicas */}
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/forgotpass" element={<ForgotPassword />} />

                    {/* Rutas con layout */}
                    <Route element={<Layout />}>
                           <Route path="/" element={<Landing />} />
                           <Route path="catalog" element={<Catalog />} />
                           <Route path="cart" element={<Cart />} />
                           <Route path="bookDetail" element={<BookDetail />} />
                           <Route path="catalog/bookDetail" element={<BookDetail />} />

                           {/* PROTEGIDAS No accesibles sin usuario*/}
                        <Route element={<PrivateRoute />}>

                           <Route path="checkout" element={<Checkout />} />
                           <Route path="profile" element={<Profile />} />

                        </Route>
                    </Route>

                    {/* RUTA DEFAULT */}
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </GlobalProvider>
        </BrowserRouter>
    );
};

export default AppRouter;