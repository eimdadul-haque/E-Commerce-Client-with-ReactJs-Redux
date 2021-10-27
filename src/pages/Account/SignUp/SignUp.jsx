import React, { useState } from 'react';
import axios from "axios";

const initial = {
    firstName: "",
    lastName: "",
    email: "",
    userName: "",
    password: "",
    confirmPassword: ""
}

export default function SignUp() {
    const [Data, setData] = useState(initial);

    const handle = (e) => {
        const { name, value } = e.target;
        setData({
            ...Data,
            [name]: value
        })
    }

    console.log(Data);

    const submit = (data) => {
        console.log(data);
        axios.post("http://localhost:62266/api/Account/signup", data)
        .then(res=>{
            
        })
        .catch(err=>{
            alert(err)
        })
    }

    return (
        <div className="container">
            <div className="row d-flex justify-content-center mt-5">
                <div className="col-lg-4 p-3 shadow rounded">
                    <div className="form-group">
                        <input onChange={(e) => handle(e)} name="firstName" className="form-control" placeholder="First Name" />
                    </div>
                    <div className="form-group">
                        <input onChange={(e) => handle(e)} name="lastName" className="form-control" placeholder="Last Name" />
                    </div>
                    <div className="form-group">
                        <input onChange={(e) => handle(e)} name="email" className="form-control" placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <input onChange={(e) => handle(e)} name="userName" className="form-control" placeholder="User Name" />
                    </div>
                    <div className="form-group">
                        <input onChange={(e) => handle(e)} name="password" className="form-control" placeholder="Password" />
                    </div>
                    <div className="form-group">
                        <input onChange={(e) => handle(e)} name="confirmPassword" className="form-control" placeholder="Confirm Password" />
                    </div>
                    <div className="form-group">
                        <button onClick={()=>submit(Data)} className="form-control btn-info" > SignUp</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
