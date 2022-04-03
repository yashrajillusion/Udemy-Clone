export const reducer = (state, action)=>{
    if(action.type==="remove"){
        return {
            ... state,
            item:state.item.filter((curElem)=>{
                return curElem.id !== action.payload
            })
        }
    }
    if(action.type==='totaPrice'){
        let {totalAmount} = state.item.reuce((accum, curVal)=>{
         let {price} = curVal
         let updatedAmount = price
         accum.totalAmount+=updatedAmount
         return accum
        },
            {totalAmount:0
        })
        return {... state, totalAmount}
    }
return state
}