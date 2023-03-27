import React from 'react';
import './Cart.css'

const Cart = () => {
    return (
        <div className='cart-container'>
            <div className="cart-top">
                <h2 className="cart-title">
                    Order Summary
                </h2>
            </div>
            <div className="cart-middle">
                <h5 className="selected-items">
                    Selected Items: 5
                </h5>
                <h5 className="total-price">
                    Total Price: $5000
                </h5>
                <h5 className="total-shipping-charge">
                    Total Shipping Charge: $450
                </h5>
                <h5 className="tax">
                    Tax: $51
                </h5>
                <h3 className="grand-total">
                    Grand Total: $45555
                </h3>
            </div>
            <div className="cart-bottom">
                <button className='clear-cart-btn btn'>Clear Cart</button>
                <button className='review-order-btn btn'>Review Order</button>
            </div>
        </div>
    );
};

export default Cart;