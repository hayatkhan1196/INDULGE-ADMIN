import React from 'react'
import './../style/order.scss'
// import FavourtiteOrders from '../component/FavourtiteOrders'
import OrderList from '../component/UI/Order/OrderList';
import Sidebar from '../component/SideBarLogo/Sidebar';
const Order = () => {
    return (
        <div className="order_div">
            <Sidebar />
            <OrderList />
        </div>
    )
}

export default Order
