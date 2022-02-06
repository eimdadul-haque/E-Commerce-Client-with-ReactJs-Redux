import React, { useState, useEffect } from 'react';
import { popularProducts } from "../../data/data";
import ProductCard from "./ProductCard";
import "./Product.css"
import axiox from "axios";

export default function ProductCards() {

    const [data, setData] = useState([]);
    useEffect(() => {
        axiox.get("http://localhost:7901/api/Home")
            .then((res) => {
                setData(res.data);
            })
            .catch(err => console.log(err));
    }, [])
    return (
        <div className='products-container'>
            {
                data.map((data, index) => {
                    if (index <= 8) {
                        return (
                            <ProductCard item={data} key={index} />
                        )
                    }
                })
            }
        </div>
    );
}
