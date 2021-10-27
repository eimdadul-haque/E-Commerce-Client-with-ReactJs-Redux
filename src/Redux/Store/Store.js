import { Product, Cart, Refresh, Type } from "../Reducers/homeReducer";
import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thank from "redux-thunk";

const mainReducer = combineReducers({
    ProductStore: Product,
    CartStore: Cart,
    RefreshStore: Refresh,
    TypeStore: Type
})

const localstore = localStorage.getItem(localStorage.getItem("fname")+"_cart") ? JSON.parse(localStorage.getItem(localStorage.getItem("fname")+"_cart")) : [];

const INITIAL_STAGE = {
    CartStore: {
        carts: localstore
    }
}

const composeEnhanchers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const Store = createStore(mainReducer, INITIAL_STAGE, composeEnhanchers(applyMiddleware(thank)))