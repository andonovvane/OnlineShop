import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice ({
    name: "cart",
    initialState: [
    ],
    reducers: {
        addItem: (state, action) => {
            const newItem = { ...action.payload, amount: 1 };
            const index = state.findIndex((item) => item.id === newItem.id);
            
            if (index === -1) {
                state.push(newItem);
            }
            else {
                state[index] = {
                    ...state[index],
                    amount: state[index].amount + 1
                };
            }
        },
        decreaseAmount: (state, action) => {
            const id = action.payload;
            const index = state.findIndex((item) => item.id === id);
            
            if (index !== -1) {
                if (state[index].amount > 1) {
                    state[index] = {
                    ...state[index],
                    amount: state[index].amount - 1
                };
                } else {
                state.splice(index, 1);
                }
            }
        },
        removeItem: (state, action) => {
            const id = action.payload;
            const index = state.findIndex((item) => item.id === id);

            state.splice(index, 1)
        },
        computeTotalItems: (state) => {
            return state.reduce((total, currItem) => {
            return total + currItem.amount;
            }, 0);
        },

    }
})

export const { addItem, computeTotalItems, decreaseAmount, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
