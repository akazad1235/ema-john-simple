import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'

const Product = (props) => {

    console.log(props);
    const {name, img, seller, price, stock} = props.product;
    return (
        <div className="product">
            <div>
                 <img src={img}/> 
            </div>
            <div style={{marginLeft:'10px'}}>
                <h5 className="product-name">{name}</h5>
                <h6>By: {seller}</h6>
                <h6>${price}</h6>
                <h6>only {stock} left in stock - order soon</h6>

                <button className="buy-button" onClick={props.handleAddProduct}><FontAwesomeIcon icon={faShoppingCart}/>Buy Now</button>
            </div>
        </div>
    );
};

export default Product;