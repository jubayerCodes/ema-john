import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    useEffect(() => {
        const storedCart = getShoppingCart()
        const savedCart = []

        // step 1: get addedProduct by id
        for (const id in storedCart) {
            const addedProduct = products.find(product => product['id'] === id);

            // step 2: get quantity from storeCart
            const quantity = storedCart[id]

            // step 3: set quantity to addedProduct
            if (addedProduct) {
                addedProduct.quantity = quantity

                // step 4: create an array of addedProducts
                savedCart.push(addedProduct)
            }
        }

        // step 5: set cart
        setCart(savedCart);
    }, [products])

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
    return (
        <section className='shop'>
            <div className="shop-container">
                <div className="products-container">
                    {products.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart} handleRemoveFromCart={handleRemoveFromCart} />)}
                </div>
                <div className="cart">
                    <Cart cart={cart} handleClearCart={handleClearCart} />
                </div>
            </div>
        </section>
    );
}

export default Shop;