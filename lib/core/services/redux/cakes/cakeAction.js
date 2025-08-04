import { BUY_CAKE, RESTORE_CAKE } from "./cakeTypes"

export const buyCake =(qty=0)=>{
    return{ 
       type: BUY_CAKE,
       payload:qty
    }
}
export const restoreCake =()=>{
    return {
     type: RESTORE_CAKE
    }
}