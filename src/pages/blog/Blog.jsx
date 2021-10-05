import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import MainCommentBox from "../../components/comment/MainCommentBox";
import SubComment from "../../components/comment/SubComment";
import { getOneBlog } from '../../Redux/Actions/BlogAction';
import { DeleteComment } from '../../Redux/Actions/CommentAction';
import { Refesh } from "../../Redux/Actions/RefeshAction";
import NotFound from "../../components/not_found/NotFound";
import style from "./style.module.css";

export default function Blog() {

    const { blogs } = useSelector(state => state.getAllBlogStore)
    const param = useParams();
    const dispatch = useDispatch();
    const [loding, setloding] = useState(true);
    const { num } = useSelector(state => state.RefreshStore);
    const { blog } = useSelector(state => state.getOneBlogStore);

    useEffect(() => {
        dispatch(getOneBlog(param.id))
        setloding(false);
    }, [num]);

    const Delete = (mainId, subId) => {
        if (mainId !== 0 && subId === 0) {
            dispatch(DeleteComment(mainId, 0))
        }
        else if (mainId === 0 && subId !== 0) {
            dispatch(DeleteComment(0, subId))
        }
        dispatch(Refesh(1, "Blog"));
    }

    return (
        <>
            {
                loding === true ? <NotFound /> :
                    <>
                        <div className="container mt-3">
                            <div className="d-flex justify-content-center">
                                <p className="h4">{blog.blogTitle}</p>
                            </div>
                            <div className='bg-light  row'>
                                <div className="bg-light col-12 mb-3 mt-1">
                                    <div className="container">
                                        <img src={blog.imageName} className={style.blogImg} />
                                        <p className={style.blogTitle}></ p>
                                        {/* <small>By {blog.author.firstName === undefined ? "" : <>{blog.author.firstName}{blog.createDate.slice(0, 10)}</>}</small> */}
                                        <small className="m-0">{ }</small>
                                        <div className={style.blogContent}>
                                            {blog.blogContent}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            < div className="row">
                                <div className="col-12 mt-5 ">
                                    {
                                        blog.comment === undefined ? "" :
                                            <div className="row ">
                                                <div className="col-12">
                                                    {
                                                        blog.comment.map((data, index) => {
                                                            return (
                                                                <div key={index} >
                                                                    <p className="text-muted h4" >{data.cmdBody}</p>
                                                                    <>
                                                                        {
                                                                            localStorage.getItem('token') === null ? "" :
                                                                                <>
                                                                                    {
                                                                                        data.authorId === localStorage.getItem("userId") ? <p onClick={() => Delete(data.id, 0)} className='text-danger btn' >Delete</p>
                                                                                            : <></>}
                                                                                </>
                                                                        }
                                                                    </>
                                                                    <div className=' ml-4 container'>
                                                                        {
                                                                            data.subComment.map((data, index) => {
                                                                                return (
                                                                                    <div key={index}>
                                                                                        <p key={index} className="text-muted h4" >{data.cmdBody}</p>
                                                                                        <>
                                                                                            {
                                                                                                localStorage.getItem('token') === null ? "" :
                                                                                                    <>
                                                                                                        {
                                                                                                            data.authorId === localStorage.getItem("userId") ? <p onClick={() => Delete(0, data.id)} className='text-danger btn' >Delete</p>
                                                                                                                : <></>}
                                                                                                    </>
                                                                                            }
                                                                                        </>
                                                                                    </div>
                                                                                )
                                                                            })
                                                                        }
                                                                        {
                                                                            localStorage.getItem('token') === null ? "" : <SubComment maincommentId={data.id} mincmtId={blog.id} />
                                                                        }
                                                                    </div>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                    {
                                                        localStorage.getItem('token') === null ? "" : <MainCommentBox blogId={blog.id} />
                                                    }
                                                </div>
                                            </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </>
            }
        </>
    )
}
