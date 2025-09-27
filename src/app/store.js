

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";

import themeReducer from "./features/themeSlice"


const loadState = () => {
    try {
        const serializedState = localStorage.getItem("cart");
        return serializedState ? JSON.parse(serializedState) : undefined;
    } catch (err) {
        return undefined;
    }
};


const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state.cart);
        localStorage.setItem("cart", serializedState);
    } catch (err) {
        console.error("Could not save state", err);
    }
};

const preloadedState = {
    cart: loadState() || { items: [] }
};

const store = configureStore({
    reducer: {
        cart: cartReducer,
        theme: themeReducer


    },
    preloadedState,
});

store.subscribe(() => {
    saveState(store.getState());
});

export default store;
