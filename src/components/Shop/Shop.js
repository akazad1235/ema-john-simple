import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';


const Shop = () => {

    const fist10 = fakeData.slice(0, 10);
    
    const [product, setProduct] = useState(fist10)
    const [cart, setCart] = useState([])

    const handleAddProduct = (product) => {
       // console.log('product added', product);
        const newCart = [...cart, product];
        setCart(newCart);
    }
//    for (let i = 0; i < cart.length; i++) {
//        const element = cart[i];
//        console.log(element);
       
//    }
    return (
        <div className="shop-container">
            
            <div className="product-container">
            
                    {
                        product.map(pd => <Product 
                            handleAddProduct={handleAddProduct} 
                            showAddtoCartBtn={true}
                            product={pd}>

                            </Product>)
                    }
              
            </div>
            <div className="cart-container">

                    <Cart cart={cart}></Cart>

                    <p></p>
            </div>

        </div>
    );
};

export default Shop;