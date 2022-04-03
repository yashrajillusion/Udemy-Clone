import React, { useContext } from 'react'
import { Items } from '../Cart/Items'
import './Cart.css'
import CloseIcon from '@mui/icons-material/Close';

import {CartContext} from "./Cart"

export const ContextCart = () => {
    
    const {item} = useContext(CartContext)
  return (
     <>
       <h1 className='heading'>Shopping Cart</h1>
      <div className='cart-body'>
      <div className='main'>
     
     <div className='cart-items'>
         <p>Courses in Cart</p>
         <div className='cart-items-container'>
           {
               item.map((curItem)=>{
                   return <Items key={curItem.id} {...curItem}/>
               })
           }
         </div>
    
     </div>
     <div className='total-div'>
    <div className='total-price'>
        <p>Total:  </p> 
         <h1>₹6,997</h1>  
         
           
             {/* <span>{totalAmount}</span> */}
         </div>
         <div className='checkOutButton'>
             <button><h4>checkout</h4></button>
         </div>
         <div className='promotion'>
             <h4>Promotions</h4>
             <div className='promotion-div'>
             <CloseIcon className='closeicon'/>
             <p><span>KEEPLEARNING </span>is applied</p>
             </div>
             <div className='inputbtn'>
             <input type="text" className='input' placeholder='Enter Coupon'/>
             <button className='applybtn'>Apply</button>
             </div>
           
         </div>
         <div className='last-div'>
                 <p>
                 Buy now, pay later for orders of $25 and over
                 </p>
                 <img className='klarna' src="	https://www.udemy.com/staticx/udemy/images/v8/klarna-logo.svg" alt="klarna" />
                 <img className='afterPay'src="https://www.udemy.com/staticx/udemy/images/v8/afterpay-logo.svg" alt="after pay" />
             </div>
    </div>
    
   
 </div>
     {/* <div>
        <p className='heading'>Recently wishlisted</p>
        <div className='wishlist-container'>
           {
               item.map((curItem)=>{
                   return <Items key={curItem.id} {...curItem}/>
               })
           }
         </div>
     </div> */}
      </div>

     </>
  )
}
