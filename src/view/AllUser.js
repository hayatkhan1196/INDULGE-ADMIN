import React from 'react'
import '../style/order.scss'
import FavourtiteOrders from '../component/FavourtiteOrders'
import OrderList from '../component/OrderList';
import Sidebar from '../component/Sidebar';
import AllUserList from '../component/AllUserList';
const AllUser = () => {
    return (
        <div className="order_div">
        <Sidebar/>
        <AllUserList/>
        </div>
    )
}

export default AllUser