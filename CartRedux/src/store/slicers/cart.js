    import { createSlice, nanoid } from "@reduxjs/toolkit"

    const initialState = {
        cartItems: [],
    }

    export const cartSlice = createSlice({
        name: 'cart',
        initialState,
        reducers: {
            addItems: (state, action) => {
                const cartItem = {
                    id: nanoid(),
                    text: action.payload
                };
                state.cartItems.push(cartItem)
            },

            removeItems: (state, action) => {
                const itemIdRemove = action.payload;
                state.cartItems= state.cartItems.filter(
                    (cartItem) => cartItem.id !== itemIdRemove
                );
            }
        }

    })

    export const {addItems, removeItems} = cartSlice.actions;
    export default cartSlice.reducer;