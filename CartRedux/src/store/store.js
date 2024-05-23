import {configureStore} from '@reduxjs/toolkit'
import cartReducer from "./slicers/cart"

export const store = configureStore({
    reducer:{
        cart: cartReducer
    }
})