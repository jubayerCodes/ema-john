import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import './Review.css'
import { useLoaderData } from 'react-router-dom';
import ReviewProduct from '../ReviewProduct/ReviewProduct';
import { addToDb, deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Review = () => {
    const { storedCart } = useLoaderData()
    const [cart, setCart] = useState(storedCart)

    const handleRemoveFromCart = (product) => {
        let newCart = []
        const remainingProducts = cart.filter(pd => pd.id !== product.id)
        newCart = [...remainingProducts]
        setCart(newCart)
        removeFromDb(product.id)
    }

    const handleClearCart = () => {
        deleteShoppingCart()
        setCart([])
    }

    const handleChangeQuantity = (product, newQuantity) => {
        let newCart = [...cart]

        const exist = cart.find(pd => pd.id === product.id)
        exist.quantity = newQuantity
        const existIndex = newCart.indexOf(exist);
        newCart.splice(existIndex, 1, exist);

        setCart(newCart)
        addToDb(product['id'], newQuantity)
    }

    return (
        <section className='review'>
            <div className="review-container">
                <div className="review-products">
                    {cart.map(product => <ReviewProduct key={product.id} product={product} handleRemoveFromCart={handleRemoveFromCart} handleChangeQuantity={handleChangeQuantity}></ReviewProduct>)}
                </div>
                <div className="cart">
                    <Cart cart={cart} handleClearCart={handleClearCart}></Cart>
                </div>
            </div>
        </section>
    );
};

export default Review;