import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    let [products, setProducts] = useState([]);
    let [cart, setCart] = useState([]);
    let [price, setPrice] = useState([])
    let [charges, setCharges] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [cart])
    const addToCart = (product) =>{
        const newProduct = [...cart, product];
        setCart(newProduct)
        addPrice(product)   
    }
    const addPrice = ( product) =>{
        const newPrice = (product.price) + +(price);
        setPrice(newPrice)
        charge(newPrice)
    }
    const charge = newPrice =>{
        if(newPrice > 1000){
            const newCharge = 10;
            setCharges(newCharge)
        }
        else{
            const oldCharge = 0;
            setCharges(oldCharge)
        }
    }
    const totalTax = () =>{
        const total = price + charges;
        return total / 10;
    }
    const setTax = totalTax()
    const grandTotal =()=>{
        return price + charges + setTax;
    }
    const setGrandTotal = grandTotal()
   
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
                    <p>Selected Items: {cart.length}  </p>
                    <p>Total Price: ${price} </p>                
                    <p>Total Shipping Charge: ${charges}  </p>
                    <p>Tax: ${setTax}  </p>
                    <p>Grand Total: ${setGrandTotal}  </p>
                    <button>Clear Cart</button>
                </div>
            </div>
        </div>
    );
};
export default Shop;