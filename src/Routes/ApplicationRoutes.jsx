import React from "react";
import { Routes, Route } from "react-router-dom";
import Order from '../view/Order';
// import Feedback from '../view/Feedback';
import Sellers from '../view/Sellers';
import ProductList from '../component/UI/Products/ProductList';
import AllUserList from '../component/UI/AllUserList/AllUserList';
import ProtectedRoute from './ProtectedRoute';
import Login from '../component/Login/Login';
const ApplicationRoutes = () => {


    return (
        <>
            <Routes>
                <Route exact path="/" element={<Login />} />
                <Route element={<ProtectedRoute />}>
                    <Route path="/Users" element={<AllUserList />} />
                    <Route path="/Users" element={<AllUserList />} />
                    <Route path="/products" element={<ProductList />} />
                    <Route path="/sellers" element={<Sellers />} />
                    <Route path="/order" element={<Order />} />
                    {/* <Route path="/feedback" element={<Feedback />} /> */}
                </Route>


            </Routes>
        </>
    );
};

export default ApplicationRoutes;