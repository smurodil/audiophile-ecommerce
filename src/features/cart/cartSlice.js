import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        totalQuantity: 0,
        totalCartPrice: 0,
        shippingCost: 50,
    },
    reducers: {
        addItemToCart(state, { payload }){
            const newItem = payload;
            const exitingItem = state.items.find(item => item.id === newItem.id);
            state.totalQuantity += newItem.quantity;
            state.totalCartPrice += newItem.price * newItem.quantity;
            if(!exitingItem){
                state.items.push(newItem);
            }else{
                exitingItem.quantity += newItem.quantity;
                exitingItem.totalPrice += newItem.price * newItem.quantity;
            }
        },
        removeItemFromCart(state, { payload }){
            const id = payload;
            const exitingItem = state.items.find((item) => item.id === id);
            state.totalQuantity--;
            state.totalCartPrice -= exitingItem.price;
            if(exitingItem.quantity === 1){
                state.items = state.items.filter((item) => item.id !== id);
            }else{
                exitingItem.quantity--;
                exitingItem.totalPrice = exitingItem.totalPrice - exitingItem.price;
            }
        },
        incereaseCartItem(state, { payload }){
            const id = payload;
            const exitingItem = state.items.find((item) => item.id === id);
            state.totalQuantity++;
            state.totalCartPrice = state.totalCartPrice + exitingItem.price;
            if(exitingItem){
                exitingItem++
            }
        },
        clearChart(state){
            state.items = [];
            state.totalQuantity = 0;
            state.totalCartPrice = 0;
        }
    },
});

export const { addItemToCart, removeItemFromCart, incereaseCartItem, clearChart } = cartSlice.actions

export default cartSlice.reducer