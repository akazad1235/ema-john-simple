import React from 'react';
import './ReviewItem.css'

const ReviewItem = (props) => {
    //console.log(props.product);
    const {name, quantity, key} = props.product;
    return (
        <div>
            <li>{name}</li>
            <p>Quantity: {quantity}</p>
            <button className='btn-color' onClick= {() => props.removeProduct(key)}>Remove</button>
        </div>
    );
};

export default ReviewItem;