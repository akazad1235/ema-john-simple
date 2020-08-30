import React from 'react';

const Cart = (props) => {
        const cart = props.cart;
        console.log(cart);
   //     const total = cart.reduce((total, pred)=> total+pred.price, 0)
        let total = 0;
        for (let i = 0; i < cart.length; i++) {
            const element = cart[i];
            total = total+element.price;
        }

    return (
        <div>
            <h1>Order Summary</h1>
             <h4>Items Ordered:{cart.length} </h4>
             <p>Total Price: {total}</p>

        </div>
    );
};

export default Cart;