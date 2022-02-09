import { ActionType } from "../ActionType"

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
            return {
                ...state,
                carts: state.carts.filter((x) => x.id !== action.payload.id)
            }
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
