import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Cart, InitalCart, Refreash } from "../../../Redux/Actions/homeAction";
import "./Login.css";

const loginInfo = {
    username: "",
    password: ""
}
export default function Login() {

    const history = useHistory();
    const dispatch = useDispatch();
    const [Data, setData] = useState(loginInfo);
    
    const handleData = (e) => {
        const { name, value } = e.target
        setData({
            ...Data,
            [name]: value
        })
    }

    const submit = (data) => {
        axios.post("http://localhost:62266/api/Account/Login", data)
            .then(res => {
                console.log(res.data);//fname
                localStorage.setItem("token", res.data.token)
                localStorage.setItem("fname", res.data.fname)
                localStorage.setItem("lname", res.data.lname)
                dispatch(InitalCart(localStorage.getItem(localStorage.getItem("fname")+"_cart") ? JSON.parse(localStorage.getItem(localStorage.getItem("fname")+"_cart")) : []))
                dispatch(Refreash());
                history.push("/cart");
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <div className="container">
                <div className="row d-flex justify-content-center mt-5 ">
                    <div className=" col-lg-4">
                        <div className="card p-3 shadow">
                            <div className=" form-group">
                                <input name="username" className=" form-control" onChange={(e) => handleData(e)} placeholder="username" />
                            </div>
                            <div className=" form-group">
                                <input name="password" className=" form-control" onChange={(e) => handleData(e)} type="password" placeholder="password" />
                            </div>
                            <div className=" form-group">
                                <button onClick={() => submit(Data)} className="form-control btn-success">Login</button>
                            </div>
                            <p>Have't any account ? create an <Link to="/signup">account</Link> </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}