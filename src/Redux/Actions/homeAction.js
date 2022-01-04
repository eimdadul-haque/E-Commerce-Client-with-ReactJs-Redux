import axios from "axios";
import { ActionType } from "../ActionType";

export const GetAllProduct = () => async (dispatch, store) => {
    axios.get("http://localhost:62266/api/Home")
        .then(res => {
            dispatch({
                type: ActionType.GET_ALL_PRODUCT,
                payload: res.data
            })
        })
        .catch();
}


export const GetOneProduct = (id) => async (dispatch, store) => {
    try {
        const res = await axios.get("http://localhost:62266/api/Product/" + id);
        dispatch({
            type: ActionType.GET_ONE_PRODUCT,
            payload: res.data
        })
            .catch();
    } catch (error) {

    }
}


// Cart 
export const Cart = (data, qty) => async (dispatch, store) => {
    dispatch({
        type: ActionType.ADD_TO_CART,
        payload: {
            id: data.id,
            productName: data.productName,
            productPrice: data.productPrice,
            imageName: data.imageName,
            qty: qty
        }
    })
    localStorage.setItem(localStorage.getItem("fname") + "_cart", JSON.stringify(store().CartStore.carts))
}

//Remove from cart
export const removeCart = (id) => async (dispatch, store) => {
    dispatch({
        type: ActionType.REMOVE_TO_CART,
        payload: id
    })
    localStorage.setItem(localStorage.getItem("fname") + "_cart", JSON.stringify(store().CartStore.carts))
}

//Remove all from cart
export const removeallCart = () => async (dispatch, store) => {
    dispatch({
        type: ActionType.REMOVE_ALL_CART,
        payload: ""
    })
}

//Inital cart
export const InitalCart = (data) => async (dispatch, store) => {
    dispatch({
        type: ActionType.INITIAL_CART,
        payload: data
    })
}

//Order
export const Order = (data, products) => async (dispatch, store) => {
    var res = await axios.post(process.env.REACT_APP_ORDER, {
        name: data.name,
        email: data.email,
        phone: data.phone,
        address: data.address,
        products: products,
    }, {
        headers: {
            authorization: "bearer " + localStorage.getItem('token')
        }
    });
}

//refreash
export const Refreash = () => async (dispatch, store) => {
    const { ref } = store().RefreshStore;
    dispatch({
        type: ActionType.REFESH,
        payload: ref + 1
    })
}

//Add Product
export const Add_Product = (Data) => async (dispatch, store) => {

    const formData = new FormData();
    formData.append("productName", Data.productName);
    formData.append("productTypeId", Data.productTypeId);
    formData.append("productPrice", Data.productPrice);
    formData.append("productQty", Data.productQty);
    formData.append("productImg", Data.productImage);

    const res = await axios.post("http://localhost:62266/api/Product", formData,
        {
            "content-Type": "multipart/form-data"
        });
}

//Type
export const Type = () => async (dispatch, store) => {
    const res = await axios.get("http://localhost:62266/api/ProductType");
    dispatch({
        type: ActionType.GET_ALL_TYPES,
        payload: res.data
    })
}