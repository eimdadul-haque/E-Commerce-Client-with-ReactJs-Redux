import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import BlogCard from './BlogCard';
import { useDispatch } from 'react-redux';
import { getAllBlog } from '../../Redux/Actions/BlogAction';
import NotFound from '../../components/not_found/NotFound';

export default function BlogList() {

    const dispatch = useDispatch();
    const history = useHistory();
    const [blogs, setblogs] = useState([]);
    const [loding, setloding] = useState(true);

    useEffect(() => {
        dispatch(getAllBlog());
        axios.get(process.env.REACT_APP_API_LINK)
            .then(res => {
                setblogs(res.data);
                setloding(false);
            })
            .catch(err => {
                console.log("Get Error...");
            });
    }, []);

    return (
        <>
            {
                loding === true ? <NotFound /> :
                    <div className="container card-columns mt-5">
                        {
                            blogs.map((data, index) =>
                                <div key={index}>
                                    <BlogCard data={data} />
                                </div>
                            )
                        }
                    </div>
            }

        </>
    )
}
