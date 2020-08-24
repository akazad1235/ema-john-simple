import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';


const Shop = () => {

    const fist10 = fakeData.slice(0, 10);
    
    const [product, setProduct] = useState(fist10)

    const handleAddProduct = () => {
        console.log('product added');
    }
   
    return (
        <div className="shop-container">
            
            <div className="product-container">
            
                    {
                        product.map(pd => <Product 
                            handleAddProduct={handleAddProduct} 
                            product={pd}>

                            </Product>)
                    }
              
            </div>
            <div className="cart-container">
                    <h1>Cart Container</h1>
            </div>

        </div>
    );
};

export default Shop;