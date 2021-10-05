import { Refesh } from '../../Redux/Actions/RefeshAction';
import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

var initialState = {
    username: "",
    password: ""
}
export default function LogIn() {

    const history = useHistory();
    const dispatch = useDispatch();
    const [Info, setInfo] = useState(initialState)

    const handleSubmit = e => {
        const { name, value } = e.target;
        setInfo({
            ...Info,
            [name]: value
        });
    }

    const submit = (data) => {
        axios.post("http://localhost:64029/api/account/login", {
            email: data.username,
            password: data.password
        })
            .then(res => {
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("FN", res.data.firstName);
                localStorage.setItem("LN", res.data.lastName);
                localStorage.setItem("ExpDay", res.data.expires);
                localStorage.setItem("userId", res.data.userId);
                dispatch(Refesh(1, "Login"));
                history.push("/");
            })
            .catch(err => {
                console.log("LogIn Error...");
            })
    }

    return (
        <div className="container mt-5">
            <div className="row d-flex justify-content-center">
                <div className="col-lg-4 col-md-6 col-sm-6 ">
                    <p className="m-0 font-weight-bold text-muted">Login</p>
                    <p className="m-0 mb-3 text-muted">Get to the dashboard and start blogging</p>
                    <form>
                        <div className="form-group">
                            <input name="username" onChange={(e) => handleSubmit(e)} className="form-control" placeholder="username" value={Info.EmployeeName} />
                        </div>
                        <div className="form-group">
                            <input name="password" type="password" onChange={(e) => handleSubmit(e)} className="form-control" placeholder="password" value={Info.EmployeeOccupation} />
                        </div>
                    </form>
                    <div className="form-group">
                        <button className="btn-sm btn btn-info form-control" onClick={() => submit(Info)}>LogIn</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
