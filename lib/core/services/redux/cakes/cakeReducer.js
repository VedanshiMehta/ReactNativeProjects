import { BUY_CAKE, RESTORE_CAKE } from "./cakeTypes";

const initialState ={
    numOfCakes: 10
}
const cakeReducer = (state=initialState,action)=>{
    switch (action.type) {
        case BUY_CAKE:
            return state.numOfCakes - action.payload >=0 ?{
                ...state,
                numOfCakes: state.numOfCakes - action.payload,
            }:state

        case RESTORE_CAKE:
            return {
                numOfCakes: 10,
            }
    
        default:
            return state;
    }
}

export default cakeReducer