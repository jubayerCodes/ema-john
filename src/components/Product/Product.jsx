import React from 'react';
import './Product.css'

const Product = (props) => {

    const { img, name, price, seller, ratings } = props.product
    console.log(props.product);
    return (
        <div className='product'>
            <div className="product-top">
                <img src={img} alt="" className="product-img" />
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
                <button className='product-btn'>Add to cart <i class="fa-solid fa-cart-shopping"></i></button>
            </div>
        </div>
    );
};

export default Product;