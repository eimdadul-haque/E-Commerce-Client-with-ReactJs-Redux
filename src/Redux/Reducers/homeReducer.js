import { ActionType } from "../ActionType"

//Get All Products
const INITIAL_STATE_PRODUCT = {
    products: [],
    product: {}
}

export const Product = (state = INITIAL_STATE_PRODUCT, action) => {
    switch (action.type) {
        case ActionType.GET_ALL_PRODUCT:
            return { ...state, products: action.payload }
        case ActionType.GET_ONE_PRODUCT:
            return { ...state, product: action.payload }
        default:
            return state;
    }
}

//Add To Cart
const INITIAL_STATE_CART = {
    carts: []
}
export const Cart = (state = INITIAL_STATE_CART, action) => {
    switch (action.type) {
        case ActionType.ADD_TO_CART:

            const item = action.payload;
            const isExist = state.carts.find((x) => x.id === item.id);

            if (isExist) {
                return {
                    ...state,
                    carts: state.carts.map((x) => x.id === isExist.id ? item : x)
                }
            }
            else {
                return {
                    ...state,
                    carts: [...state.carts, item]
                }
            }
        case ActionType.REMOVE_TO_CART:
            return { ...state, carts: state.carts.filter((x) => x.id !== action.payload) }
        case ActionType.REMOVE_ALL_CART:
            return { ...state, carts: [] }
        case ActionType.INITIAL_CART:
            return { ...state, carts: action.payload }
        default:
            return state;
    }
}

//Refresh
export const Refresh = (state = {
    ref: 0
}, action) => {
    switch (action.type) {
        case ActionType.REFESH:
            return {
                ...state,
                ref: action.payload
            }
        default:
            return state;
    }
}


//Type
export const Type = (state = {
    types: []
}, action) => {
    switch (action.type) {
        case ActionType.GET_ALL_TYPES:
            return {
                ...state,
                types: action.payload
            }
        default:
            return state;
    }
}