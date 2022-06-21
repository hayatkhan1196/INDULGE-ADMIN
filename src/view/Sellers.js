import React from 'react'
import '../style/cusomters.scss'
import Sidebar from '../component/SideBarLogo/Sidebar'
import SellerList from '../component/UI/Seller/SellerList'
const Sellers = () => {
    return (
        <div className="customer_div">
        <Sidebar/>
            <SellerList/>
        </div>
    )
}
export default Sellers
