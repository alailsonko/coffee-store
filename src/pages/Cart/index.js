import React from 'react'

import Aside from './../../components/Aside'

import "./styles.css"

function Cart() {
    return (
        <div className="container-cart-grid">
            <Aside />
            <div className="main-cart-grid">
            </div>
            <div className="main-aside-cart-grid">
            </div>
        </div>
    )
}

export default Cart;
