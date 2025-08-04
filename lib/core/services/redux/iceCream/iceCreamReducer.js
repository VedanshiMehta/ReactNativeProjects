import { BUY_ICE_CREAM, RESTORE_ICE_CREAM } from "./iceCreamTypes";

const initialState={
 numOfIceCream:30
}

const iceCreamReducer = (state = initialState,action)=>{
  switch (action.type) {
    case BUY_ICE_CREAM:
        return state.numOfIceCream - action.payload >=0?{
            ...state,
            numOfIceCream: state.numOfIceCream - action.payload,
        }:state
    case RESTORE_ICE_CREAM:
        return {
            numOfIceCream:30,
        }
        
    default: return state
        
  }
}
export default iceCreamReducer