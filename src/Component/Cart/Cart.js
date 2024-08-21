// @flow strict
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import * as React from 'react';
import './Cart.css';

const  Cart=(props) => {
   const cart=props.cart;
   let i,total=0,shiping=0,tax=0;
   for(i=0;i<cart.length;i++){
    let product=cart[i];
    total=total+ Number(product.price);
   shiping=shiping+Number(product.shipping);
  
   }  
    tax = tax+Number((total/10).toFixed(2));
    const totalprice = (total+tax+shiping).toFixed(2);
   
  
    return (
        <div className='cart'>
            <h1>Order summary</h1>
            <h2>Order selected <FontAwesomeIcon icon= {faShoppingCart}/>:{cart.length}</h2>
            <h5>Total price:{total}</h5>
            <br/>
            <small>shiping:{shiping}</small>
            <br/>
            <small>Vat:{tax}</small>
            <br/>
            <h4>Total:{totalprice}</h4>
            <button  className='btn-clear-cart'>Review <FontAwesomeIcon icon= {faShoppingCart}/></button>
            
        </div>
    );
};

export default Cart;