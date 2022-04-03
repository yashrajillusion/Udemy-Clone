
import React, { useContext } from 'react'
import {CartContext} from "../Cart/Cart"
import Rating from "@mui/material/Rating";
import "../Cart/Cart.css"
import LocalOfferIcon from '@mui/icons-material/LocalOffer';


export const Items = ({title, img , price , id, author}) => {

    const {removeItem} = useContext(CartContext)
   
  return (
    <>
       <div className='items-info'>
                    <div className='product-img'>
                        <img src={img} alt="image" />
                    </div>
                    <div className='title'>
                        <h4>{title}</h4>
                        <p>{author}</p>
                       <div className='bestseller-div'>
                           <button>Bestseller</button>
                       <div className="rating">
                       <span className="rate-num">4.3</span>
                             <Rating
                               name="read-only"
                               size="small"
                               precision={0.5}
                               value={4.5}
                               readOnly
                             />
                             <span className="rate-count">(1200)</span>
                           </div>
                       </div>
                      <div className='list'>
                      <ul className='list'>
                         <li>2.5 total hours</li>
                         <li>33 lectures</li>
                         <li>all level</li>
                       </ul>
                      </div>
                    </div>
                    <div className='add-remove-quant'>
                        <div className='btn'>
                        <button onClick={()=>removeItem(id)}>Remove</button>
                         <button>Save for Later</button>
                         <button> Move to Wishlist</button>
                        </div>
                        
                    </div>
                    <div className='price'>
                        <h3>₹{price}</h3>
                     <LocalOfferIcon className='icon-tag'/>
                    </div>
                </div>
    </>
  )
}
