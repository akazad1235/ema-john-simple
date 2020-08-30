import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Product = (props) => {
   // console.log(props.product);
    const {name, img, seller, price, stock, key} = props.product;
    return (
        <div className="product">
            <div>
                 <img src={img}/> 
            </div>
            <div style={{marginLeft:'10px'}}>
                <h5 className="product-name"><Link to={"/product/"+key}>{name}</Link></h5>
                <h6>By: {seller}</h6>
                <h6>${price}</h6>
                <h6>only {stock} left in stock - order soon</h6>

                <button className="buy-button" onClick={() => props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart}/>Buy Now</button>
            </div>
        </div>
    );
};

export default Product;