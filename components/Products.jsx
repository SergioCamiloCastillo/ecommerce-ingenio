import React from 'react';
import Product from "./Product";
const Products = ({ products }) => {
    return (
        <div className='Products'>
            <div className="Products-items">
                {products.map(product => (
                    <Product key={product.id} product={product}></Product>
                ))}
            </div>

        </div>
   
       
    );
}

export default Products;
