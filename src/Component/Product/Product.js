// @flow strict
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import * as React from 'react';
import './Product.css';

function Product(props) {

    return (
        <div className='product'>
            <div className='product-img'>
<img src={props.product.img} alt=''/>
            </div>
            <div className='product-name'>
            <h4>{props.product.name}</h4>
              <br/>
              <small>by:{props.product.seller}</small>
            <br/>
            <p>${props.product.price}</p>
            <p>only {props.product.stock} left in stock - order soon</p>
            <button className='main-button'
             onClick={()=>props.handleAddProduct(props.product)} > 
                <FontAwesomeIcon icon= {faShoppingCart}/> 
                add to cart</button>
            </div>
            
        </div>
    );
};

export default Product;