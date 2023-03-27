import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    console.log(products);

    return (
        <section className='shop'>
            <div className="shop-container">
                <div className="products-container">
                    {products.map(product => <Product product={product} />)}
                </div>
                <div className="cart"></div>
            </div>
        </section>
    );
};

export default Shop;