import React, { useState, useEffect } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


const Shop = () => {

    const fist10 = fakeData.slice(0, 10);
    
    const [product, setProduct] = useState(fist10)
    const [cart, setCart] = useState([])

    useEffect(()=>{
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const previousCart = productKeys.map( existingKey => {
            const product = fakeData.find( pd => pd.key === existingKey);
            product.quantity = savedCart[existingKey];
            return product;
        })
        //console.log(productKeys);
        setCart(previousCart)
    }, [])
    const handleAddProduct = (product) => {
      //  console.log('product added', product);
      const toBeAddedKey = product.key; 
       const sameProduct = cart.find(pd => pd.key === toBeAddedKey);
       let count = 1;
       let newCart; 
       if (sameProduct) {
            count = sameProduct.quantity + 1;
           sameProduct.quantity = sameProduct.quantity + 1;
           const others = cart.filter( pd => pd.key !== toBeAddedKey );
           newCart = [...others, sameProduct];
       }else{
           product.quantity = 1;
           newCart = [...cart, product];
       }
       // const count = sameProduct.length;

        setCart(newCart);
        
        addToDatabaseCart(product.key, count);
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

                    <Cart cart={cart}>
                        <Link to = '/review'>
                                <button className="buy-button">Review Order</button>
                        </Link>
                    </Cart>

                    <p></p>
            </div>

        </div>
    );
};

export default Shop;