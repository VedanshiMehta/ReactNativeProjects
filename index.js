/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './lib/src/App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
// import { configureStore } from "@reduxjs/toolkit"

// const INCREMENTED = 'INCREMENTED'
// const DECREMENTED ='DECREMENTED'

// function increament(amount = 1){
//     return {
//        type: INCREMENTED,
//        payload: amount
//     }
// }

// function decrement(amount =1){
//     return {
//        type: DECREMENTED,
//        payload: amount
//     }
// }

// const initialState ={
//     value: 0
// }

// const createReducer =(state = initialState,action)=>{
//     switch (action.type) {
//         case INCREMENTED: 
//         return state.value>=0?{
//             ...state,
//             value: state.value + action.payload
             
//         }: state
//         case DECREMENTED:
//             return state.value - action.payload >= 0?{
//                 ...state,
//                 value: state.value - action.payload
//             }:state
//         default:
//             return state
//     }


// }

// const store = configureStore({reducer:createReducer})

// const unsubscribe= store.subscribe(() => console.log('State:', store.getState()));
// store.dispatch(increament())
// store.dispatch(increament())
// store.dispatch(decrement())
// unsubscribe()