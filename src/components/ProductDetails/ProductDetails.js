import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetails = () => {
    let { productKey } = useParams();

    const product =  fakeData.find((pd => pd.key ===productKey))
   // console.log(product);

    return (
        <div>
            
            <Product product={product} showAddtoCartBtn ={false}></Product>

        </div>
    );
};

export default ProductDetails;