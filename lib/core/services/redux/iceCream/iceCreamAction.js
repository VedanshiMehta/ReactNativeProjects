import { BUY_ICE_CREAM, RESTORE_ICE_CREAM } from "./iceCreamTypes";

export const buyIceCream = (qty = 0) =>{
    return{
        type: BUY_ICE_CREAM,
        payload: qty
    }
   
}

export const restoreIceCream =()=>{
    return {
     type: RESTORE_ICE_CREAM
    }
}