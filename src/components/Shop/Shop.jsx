import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import { Link, useLoaderData } from 'react-router-dom';

const Shop = () => {

    const { storedCart, products } = useLoaderData()
    const [cart, setCart] = useState(storedCart)

    const handleAddToCart = (product) => {
        let newCart = []

        const exist = cart.find(pd => pd.id === product.id)
        if (exist) {
            exist.quantity = exist.quantity + 1
            const remainingProducts = cart.filter(pd => pd.id !== exist.id)
            newCart = [...remainingProducts, exist]
        } else {
            product.quantity = 1
            newCart = [...cart, product]
        }
        setCart(newCart)
        addToDb(product['id'])
    }

    const handleClearCart = () => {
        deleteShoppingCart()
        setCart([])
    }

    return (
        <section className='shop'>
            <div className="shop-container">
                <div className="products-container">
                    {products.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart} />)}
                </div>
                <div className="cart">
                    <Cart cart={cart} handleClearCart={handleClearCart} >
                        <Link to="/review"><button className='review-order-btn btn'>Review Order</button></Link>
                    </Cart>
                </div>
            </div>
        </section>
    );
}

export default Shop;