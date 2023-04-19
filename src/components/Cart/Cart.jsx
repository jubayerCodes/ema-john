import React from 'react';
import './Cart.css'
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const { cart, handleClearCart, children } = props

    const totalPrice = cart.reduce((previousValue, currentValue) => previousValue + (currentValue.price * currentValue.quantity), 0)
    const totalShipping = cart.reduce((previousValue, currentValue) => previousValue + (currentValue.shipping * currentValue.quantity), 0)
    const quantity = cart.reduce((previousValue, currentValue) => previousValue + currentValue.quantity, 0)
    const tax = (totalPrice / 100) * 5
    const grandTotal = totalPrice + totalShipping + tax

    return (
        <div className='cart-container'>
            <div className="cart-top">
                <h2 className="cart-title">
                    Order Summary
                </h2>
            </div>
            <div className="cart-middle">
                <h5 className="selected-items">
                    Selected Items: {quantity}
                </h5>
                <h5 className="total-price">
                    Total Price: ${totalPrice}
                </h5>
                <h5 className="total-shipping-charge">
                    Total Shipping Charge: ${totalShipping}
                </h5>
                <h5 className="tax">
                    Tax: ${tax.toFixed(2)}
                </h5>
                <h3 className="grand-total">
                    Grand Total: ${grandTotal.toFixed(2)}
                </h3>
            </div>
            <div className="cart-bottom">
                <button className='clear-cart-btn btn' onClick={handleClearCart}>Clear Cart</button>
                {children}
            </div>
        </div>
    );
};

export default Cart;