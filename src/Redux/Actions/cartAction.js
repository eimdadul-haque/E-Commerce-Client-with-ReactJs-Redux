import axios from "axios";
import { ActionType } from "../ActionType";


// Cart 
export const Cart = (data, qty) => async (dispatch, store) => {
    dispatch({
        type: ActionType.ADD_TO_CART,
        payload: {
            id: data.id,
            productName: data.name,
            productPrice: data.price,
            imageName: data.imageName,
            qty: qty
        }
    })
    localStorage.setItem(localStorage.getItem("fname") + "_cart", JSON.stringify(store().CartStore.carts))
}


//refreash
export const Refreash = () => async (dispatch, store) => {
    const { ref } = store().RefreshStore;
    dispatch({
        type: ActionType.REFESH,
        payload: ref + 1
    })
}

