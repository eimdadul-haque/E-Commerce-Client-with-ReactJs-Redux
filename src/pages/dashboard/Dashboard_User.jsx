import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PlusOne from "@material-ui/icons/Add";
import { Refesh } from "../../Redux/Actions/RefeshAction";

export default function Deshboard() {

    const [Data, setData] = useState({});
    const { num } = useSelector(state => state.RefreshStore);
    const dispatch = useDispatch();
    const [Loding, setLoding] = useState(true);
    const history = useHistory();

    useEffect(() => {
        axios.get("http://localhost:64029/api/Dashboard/GetBlog",
            {
                headers: {
                    authorization: "bearer " + localStorage.getItem('token')
                }
            })
            .then(res => {
                setData(res.data);
                console.log(res.data, "===dash");
                setLoding(false);

            })
            .catch(err => {
                window.alert(err);
            });
    }, [num])

    const viewBlog = (id) => {
        history.push(`/blog/${id}`)
    }

    const addBlog = () => {
        history.push("/blogForm");
    }

    const deleteBlog = (id) => {
        axios.delete(`http://localhost:64029/api/Blog/${id}`, {
            headers: {
                authorization: "bearer " + localStorage.getItem("token")
            }
        })
            .then(res => {
                dispatch(Refesh(1, "Deshboard"));
            })
            .catch(err => {
                window.alert(err);
            });
    }

    return (
        <>
            {
                Loding === true ? "" :
                    <>

                        <div className="container mt-5" >
                            <div className="d-flex justify-content-end">
                                <button onClick={() => addBlog()} className="btn-sm btn btn-info mb-2"><PlusOne /> Create Blog</button>
                            </div>
                            <div style={{ height: "90vh", overflow: 'scroll' }}  >
                                <table class="table table-bordered text-center">
                                    <thead>
                                        <tr>
                                            <th scope="col">Title</th>
                                            <th scope="col">Content</th>
                                            <th>Manage</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            Data.map((data, index) => {
                                                return (
                                                    <>
                                                        <tr key={index}>
                                                            <td scope="row">{data.blogTitle}</td>
                                                            <td>{data.blogContent.slice(0, 200)}</td>
                                                            <td>
                                                                <div className="btn-group " >
                                                                    <button onClick={() => viewBlog(data.id)} className="btn btn-primary">View</button>
                                                                    <button className="btn btn-info">Edit</button>
                                                                    <button onClick={() => deleteBlog(data.id)} className="btn btn-danger">Delete</button>

                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </>
            }
        </>
    )
}
