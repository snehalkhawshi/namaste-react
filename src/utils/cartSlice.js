import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state , action) => {
            // older redux state mutation is prohibited
            // const newState = [...state];
            // mutating the state 
            state.items.push(action.payload);
        } ,// reducer function  // modifies storebget access to state // modify state wrt action
        removeItem: (state) => {
            state.items.pop();
        },
        clearCart: (state) => {
            state.items.length = 0;
        }
    }
}); // function take configuration to create slice

export const {addItem , removeItem , clearCart} = cartSlice.actions;

export default cartSlice.reducer;