import React from 'react';
import '../Product/Product.css'

const Cart = (props) => {
        const cart = props.cart;
      //  console.log(cart);
   //     const total = cart.reduce((total, pred)=> total+pred.price, 0)
        let total = 0;
        for (let i = 0; i < cart.length; i++) {
            const element = cart[i];
            total = total + element.price * element.quantity;
            
        }
        let shipping = 0;
        if(total > 35){
            shipping = 0;
        }
         else if(total > 15){
            shipping = 4.99;
        }else if(total >0){
            shipping = 12.99
        }
        const tax = total / 10;
        const sortaxt = tax.toFixed(2)
        
    return (
        <div>
             <h1>Order Summary</h1>
             <h4>Items Ordered:{cart.length} </h4>
             <h4>Shipping cost: {shipping}</h4>
             <h4>Taxt/vat: {sortaxt}</h4>

             <p>Total Price: {total+tax+shipping}</p>
             {
                props.children 
             }

             
        </div>
    );
};

export default Cart;