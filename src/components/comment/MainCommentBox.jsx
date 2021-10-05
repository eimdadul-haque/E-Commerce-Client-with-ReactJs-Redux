import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AddMainComment } from '../../Redux/Actions/CommentAction';
import { Refesh } from "../../Redux/Actions/RefeshAction";

export default function MainCommentBox(props) {

    const [cmtbody, setcmtbody] = useState("");
    const dispatch = useDispatch();

    const Comment = (cmt, id) => {
        dispatch(AddMainComment(cmt, id));
        setcmtbody("");
        Refesh(1, "MainComment");
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
                    <button className="btn-sm btn btn-info" onClick={() => { Comment(cmtbody, props.blogId) }}>Submit</button>
                </div>
            </div>
        </>
    )
}
