import React from 'react';
import './Product.css'
const Product = ({product,addToCart}) => {
    const {name, price, img, seller,ratings} = product
    return (
        <div className='product'>
            <img src={img} alt="" />
           <div className='text-container'>
                <p className='name'>{name}</p>
                <p className='price'>Price: {price}</p>
                <p className='seller'>seller: {seller}</p> 
                <p className='rating'>ratings: {ratings}</p> 

           </div>  
           <button onClick={()=>addToCart(product)} className='cart-btn'>
               <p>Add To Cart</p>
           </button>
        </div>
    );
};

export default Product;