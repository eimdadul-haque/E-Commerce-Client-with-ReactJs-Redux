import { Product, Cart, Refresh, Type } from "../Reducers/cartReducer";
import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thank from "redux-thunk";

const mainReducer = combineReducers({
    CartStore: Cart,
    RefreshStore: Refresh
})

//const localstore = localStorage.getItem(localStorage.getItem("fname")+"_cart") ? JSON.parse(localStorage.getItem(localStorage.getItem("fname")+"_cart")) : [];

const INITIAL_STAGE = {
    CartStore: {
        carts: []
    }
}

const composeEnhanchers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const Store = createStore(mainReducer, INITIAL_STAGE, composeEnhanchers(applyMiddleware(thank)))