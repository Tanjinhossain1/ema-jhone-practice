import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState(0);
    const [price, setPrice] = useState(0)
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [cart])
    const addToCart = (product) =>{
        // console.log(product);
        // const newProduct = [...cart, product];
        const newProduct = cart + 1;
        setCart(newProduct)
        // console.log(newProduct * product.price) ;
        addPrice(product)   
    }
    const addPrice = ( product) =>{
        const newPrice = product.price + price;
        setPrice(newPrice)
    }
    return (
        <div className='main-container'>
            <div className="products-container">
                {
                    products.map(product => <Product addToCart={addToCart} key={product.id} product={product}></Product>)
                }
            </div>
            <div className="cart-container">
                <h1 className='summary'>Order Summary</h1>
                <div className='cart-container'>
                    <p>Selected Items: {cart}  </p>
                    <p>Total Price: ${price} </p>
                    <p>Total Price: $   </p>
                    <p>Total Shipping Charge: $  </p>
                    <p>Tax: $  </p>
                    <p>Grand Total: $  </p>
                </div>
            </div>
        </div>
    );
};

export default Shop;