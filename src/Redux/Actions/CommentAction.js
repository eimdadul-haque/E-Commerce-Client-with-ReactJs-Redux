import axios from "axios";
import { Refesh } from "./RefeshAction";


export const AddMainComment = (cmt, id) => async (dispatch, Store) => {
    try {
        if (cmt != null) {
            axios.post(`http://localhost:64029/api/Comment/MainComment`, {
                cmdBody: cmt,
                blogModelId: id
            }, {
                headers: {
                    authorization: "bearer " + localStorage.getItem('token')
                }
            })
                .then(res => {
                    dispatch(Refesh(1))
                })
                .catch(err => {
                    console.log(err);
                });
        }
    } catch (error) {

    }
}

export const DeleteComment = (mainId, subId) => async (dispatch, Store) => {
    try {
        axios.delete(`http://localhost:64029/api/Comment/DeleteComment?mainId=${mainId}&subId=${subId}`, {
            headers: {
                authorization: "bearer " + localStorage.getItem('token')
            }
        })
            .then(res => {
                dispatch(Refesh(1));
            })
            .catch(err => {
                console.log(err);
            });
    } catch (err) {

    }

}