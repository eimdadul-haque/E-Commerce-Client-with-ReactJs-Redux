import React from "react";
import ProductCart from "../pages/ProductCart/ProductCart";
import {useHistory } from "react-router-dom";

export default function (props) {
    const history = useHistory();
    
    return (
        <>
            {
                localStorage.getItem("token") ? props.component : history.push("/login")
            }

        </>
    )
}