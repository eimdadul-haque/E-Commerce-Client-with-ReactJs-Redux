import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export default function SearchPage() {

    const [blogs, setblogs] = useState([]);
    const [loding, setloding] = useState(true)
    const history = useHistory();
    const { blog } = useSelector(state => state.FilterBlogStore)

    useEffect(() => {
        setblogs(blog);
        setloding(false);
    }, [blog]);

    const goForBlog = (id) => {
        history.push(`/blog/${id}`)
    }

    return (
        <div className="container">
            {
                loding === true ? "Loding..." :
                    <div>
                        {
                            blog.length === 0 ? "No Match Found" :
                                <>
                                    {
                                        blogs.map((data, index) => {
                                            return (
                                                <div key={index} className="col-4">
                                                    <div class="card">
                                                        <div class="card-header">
                                                            {data.blogTitle}
                                                        </div>
                                                        <div class="card-body">
                                                            <h5 class="card-title">Author: {data.author.firstName === undefined ? "" : data.author.firstName}</h5>
                                                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                                            <button onClick={() => goForBlog(data.id)} class="btn btn-primary">Details</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </>
                        }
                    </div>

            }
        </div>
    )
}
