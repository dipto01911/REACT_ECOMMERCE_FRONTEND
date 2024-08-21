// @flow strict
import React ,{useState,useEffect} from 'react';
import './Shop.css';
import Product from '../Product/Product';
//import fakeData from'../../fakeData ';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Cart from '../Cart/Cart';
function Shop() {

const[product,setproduct]=useState([]);
const[cart,setcart]=useState([]);
useEffect(()=>{
    fetch("https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON")
    .then(res => res.json())
    .then(data=>setproduct(data.slice(0,30)))
})

const handleAddProduct=(product)=>{
    let newcart=[...cart,product];
    setcart(newcart);
}
 
    

    return (
        <div className='shop-container'>
            <div className='product-container'>
 {
    product.map(pd => <Product product={pd} handleAddProduct={handleAddProduct} ></Product>)
 }
            </div>

            <div className='cart-container'>

     {/* <h3>order summary</h3>
     <h5>order added<FontAwesomeIcon icon= {faShoppingCart}/> {cart.length}</h5> */}

     <Cart cart={cart}></Cart>
            </div>
           
        </div>
    );
};

export default Shop;