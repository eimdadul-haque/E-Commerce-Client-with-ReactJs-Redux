import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {Refesh} from "../../Redux/Actions/RefeshAction";

export default function SubComment(props) {

    const dispatch = useDispatch();
    const [cmtbody, setcmtbody] = useState("");
    const Comment = (cmt, id) => {
        axios.post(`http://localhost:64029/api/Comment/SubComment`, {
            cmdBody: cmt,
            maincommentId: id
        },{
            headers: {
                authorization: "bearer " + localStorage.getItem('token')            }
        })
            .then(res => {
                setcmtbody("");
                console.log(res.status);
                dispatch(Refesh(1))
            })
            .catch(err => {
                console.log(err);
            });
    }
    return (
        <>
            <div className="row">
                <div className="col-4">
                    <form>
                        <div className="form-group">
                            <input value={cmtbody} onChange={(e) => setcmtbody(e.target.value)} className="form-control" />
                        </div>
                    </form>
                </div>

                <div className="col-4">
                    <button className="btn-sm btn btn-info" onClick={() => { Comment(cmtbody, props.maincommentId) }}>Reply</button>
                </div>
            </div>
        </>
    )
}
