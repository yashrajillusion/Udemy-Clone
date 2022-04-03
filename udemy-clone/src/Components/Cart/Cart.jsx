import React, { createContext, useEffect, useReducer } from 'react'
import {products} from "../Products/Products"
import {reducer} from "../reducer"
import {ContextCart} from "./ContextCart"



export const CartContext = createContext()

const initialState = {
    item:products,
    totalAmount:0,
    totalItem:0,
}

export const Cart = () => {
  
    const [state, dispatch] = useReducer(reducer, initialState)

    const removeItem=(id)=>{
       return dispatch({
           type:"remove",
           payload:id
       })
    }

    useEffect(()=>{
       dispatch({
           type:"totalPrice"
       },[state.item]) 
    })
    
    
  return (
    <>
    <CartContext.Provider value={{... state, removeItem}}>
    <ContextCart/>
    </CartContext.Provider>
    
    
    </>
  )
}

