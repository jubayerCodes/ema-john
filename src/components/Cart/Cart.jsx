import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart, storedCart } = props

    const totalPrice = cart.reduce((previousValue, currentValue) => previousValue + currentValue.price, 0)
    const totalShipping = cart.reduce((previousValue, currentValue) => previousValue + currentValue.shipping, 0)
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
                    Selected Items: {cart.length}
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
                <button className='clear-cart-btn btn'>Clear Cart</button>
                <button className='review-order-btn btn'>Review Order</button>
            </div>
        </div>
    );
};

export default Cart;