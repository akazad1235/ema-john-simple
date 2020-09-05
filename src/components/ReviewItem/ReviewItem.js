import React from 'react';
import './ReviewItem.css'

const ReviewItem = (props) => {
    //console.log(props.product);
    const {name, quantity, key} = props.product;
    return (
        

         <div className="product">
         <div>
              <p>this is prodcut image</p>
         </div>
         <div style={{marginLeft:'10px'}}>
             <h5 className="product-name">{name}</h5>
             <h6>Quantity: {quantity}</h6>
          

             <button className='buy-button' onClick= {() => props.removeProduct(key)}>Remove</button>
         </div>
     </div>
    );
};

export default ReviewItem;