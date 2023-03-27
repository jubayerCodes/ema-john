import React from 'react';
import './Product.css'
import productPlaceHolder from '../../assets/images/product-placeholder.png'

const Product = (props) => {

    const { handleAddToCart, product } = props
    const { img, name, price, seller, ratings } = props.product
    return (
        <div className='product'>
            <div className="product-top">
                <img src={img || productPlaceHolder} alt="" className="product-img" />
            </div>
            <div className="product-middle">
                <div className="product-info-top">
                    <h3 className="product-name">
                        {name}
                    </h3>
                    <h5 className="product-price">
                        Price: ${price}
                    </h5>
                </div>
                <div className="product-info-bottom">
                    <h6 className='seller-name'>
                        Seller: {seller}
                    </h6>
                    <h6 className="product-rating">
                        Rating: {ratings}
                    </h6>
                </div>
            </div>
            <div className="product-bottom">
                <button className='product-btn btn' onClick={() => handleAddToCart(product)}>Add to cart <i className="fa-solid fa-cart-shopping"></i></button>
            </div>
        </div>
    );
};

export default Product;