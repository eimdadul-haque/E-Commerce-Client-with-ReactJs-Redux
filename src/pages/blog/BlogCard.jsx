import React from 'react';
import style from "./style.module.css";
import { useHistory } from "react-router-dom";

export default function BlogCard(props) {

    const history = useHistory();
    const spacificBlog = (id) => {
        history.push(`/blog/${id}`);
    }
    return (
        <>
            <div onClick={() => spacificBlog(props.data.id)}>
                <div className="card">
                    <img src={props.data.imageName} className="card-img-top img-fluid" />
                    <div className="card-body">
                        <div className="card-title d-flex justify-content-between flex-column">
                            <h5 className={style.textTitle}>{props.data.blogTitle}</h5>
                            <p className={style.blogCardShortDesc}>{props.data.blogContent.slice(0,90)}</p>
                            <p className={style.blogAuthor}>Author: <span className="text-warning">{props.data.author.firstName}</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
