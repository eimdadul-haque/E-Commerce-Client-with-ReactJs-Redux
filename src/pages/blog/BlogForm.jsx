import axios from 'axios';
import React, { useEffect, useState } from 'react';


const initial = {
    blogTitle: "",
    blogContent: "",
    file: null
}

export default function BlogForm() {

    const [Data, setData] = useState(initial)

    useEffect(() => {

    }, []);

    const handleSumit = (event) => {
        const { name, value } = event.target;
        setData({
            ...Data,
            [name]: value
        })
    }

    const submit = (Data) => {

        const formData = new FormData()
        formData.append("blogTitle", Data.blogTitle);
        formData.append("blogContent", Data.blogContent);
        formData.append("file", Data.file);
        console.log(formData,"===formdata");

        axios.post("http://localhost:64029/api/Blog/",
            formData,
            {
                headers: {
                    authorization: "bearer " + localStorage.getItem('token')
                }
            },
            { 'content-type': 'multipart/form-data' })
            .then(res => {
            })
            .catch(err => {
                window.alert(err)
            })
    }

    const imageHandel = e => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setData({
                ...Data,
                file
            });
        }

    }

    return (
        <div>
            <div className="row d-flex justify-content-center">
                <div className="col-6">
                    <form className="mt-5">
                        <div className="form-group">
                            <input onChange={(e) => handleSumit(e)} name="blogTitle" className="form-control" type="text" placeholder="Blog Title" />
                        </div>
                        <div className=" form-group">
                            <textarea onChange={(e) => handleSumit(e)} name="blogContent" className="form-control" placeholder="Write Here..." />
                        </div>
                        <div className="form-group" >
                            <input onChange={(e) => imageHandel(e)} type="file" name="file" accept="image/*" />
                        </div>
                    </form>
                    <div className="form-group">
                        <button onClick={() => submit(Data)} className="btn-sm btn btn-info" style={{ width: "14%" }}>Post</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
