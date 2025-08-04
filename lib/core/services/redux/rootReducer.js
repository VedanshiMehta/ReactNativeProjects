import { combineReducers } from "@reduxjs/toolkit";
import cakeReducer from "./cakes/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";


const rootReducer = combineReducers({
        cake: cakeReducer,
        iceCream:iceCreamReducer
})

export default rootReducer