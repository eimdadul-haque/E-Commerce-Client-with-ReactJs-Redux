import axios from "axios";
import { ActionType } from "../ActionType";


export const BlogAction = (qurey) => async (disptch, Store) => {
    try {
        axios.get(`http://localhost:64029/api/Blog/search?query=${qurey}`)
            .then(res => {
                disptch({
                    type: ActionType.GET_FILTER_BLOG,
                    payload: res.data
                })
            })
            .catch(err => {
                console.log(err);
            })
    } catch (error) {

    }
}

export const getOneBlog =(id)=>async(dispatch, Store)=>{
    try {
        axios.get("http://localhost:64029/api/Blog/" + id)
            .then(res => {
                dispatch({
                    type: ActionType.GET_ONE_BLOG,
                    payload: res.data
                });
            })
            .catch(err => {
                console.log("Blog Get Error...");
            });
    } catch (error) {
        
    }
}

export const getAllBlog =()=>async(dispatch, Store)=>{
    try {
        axios.get("http://localhost:64029/api/Blog/")
            .then(res => {
                dispatch({
                    type: ActionType.GET_ALL_BLOGS,
                    payload: res.data
                });
            })
            .catch(err => {
                console.log("Blog Get Error...");
            });
    } catch (error) {
        
    }
}