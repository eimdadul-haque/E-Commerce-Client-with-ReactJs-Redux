import React, { useEffect, useState } from 'react';
import "./ProductCard.css";
import { useHistory } from "react-router-dom";

export default function ProductCard(props) {

    const history = useHistory();
    const prosuctDetails = (id) => {
        history.push("/product-details/" + id);
    }
    return (
        <>
            <div className="card border shadow" onClick={() => prosuctDetails(props.data.id)} style={{ width: "80%", height: "300px" }}>
                <img src={"http://localhost:62266/Images/" + props.data.imageName} className=" w-100 h-75" alt="" />
                <div className="card-body p-3">
                    <div className="card-title">
                        <h5>{props.data.productName}</h5>
                    </div>
                    <div className=" card-text ">
                        <small className="text-danger">{props.data.productPrice}</small>
                    </div>
                </div>
            </div>
        </>
    )
}
