import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
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
        const newCart = [...cart, product]
        setCart(newCart)
        addToDb(product['id'])
        console.log(cart);
    }
    return (
        <section className='shop'>
            <div className="shop-container">
                <div className="products-container">
                    {products.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart} />)}
                </div>
                <div className="cart">
                    <Cart cart={cart} />
                </div>
            </div>
        </section>
    );
}

export default Shop;