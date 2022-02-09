import React, { useState, useEffect } from 'react';
import { popularProducts } from "../../data/data";
import ProductCard from "./ProductCard";
import "./Product.css"
import axiox from "axios";
import { Flag } from '@material-ui/icons';

export default function ProductCards({ cate }) {

    const [loding, setloding] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        if (cate == undefined) {
            axiox.get("http://localhost:7901/api/Home")
                .then((res) => {
                    setData(res.data);
                })
                .catch(err => console.log(err));
        }
        
        else if (cate != "dress") {
            axiox.get("http://localhost:7901/api/Home/prduct-category?category=" + cate)
                .then((res) => {
                    setData(res.data);
                })
                .catch(err => console.log(err));
        }
        else {
            axiox.get("http://localhost:7901/api/Home")
                .then((res) => {
                    setData(res.data);
                    console.log("else");
                })
                .catch(err => console.log(err));
        }
        setloding(false);
    }, [])

    return (
        <>
            {
                loding ? <></>
                    :
                    <div className='products-container'>
                        {

                            cate === undefined ? data.map((data, index) => {
                                if (index <= 7) {
                                    return (
                                        <ProductCard item={data} key={index} />
                                    )
                                }
                            }) : data.map((data, index) => {
                                return (
                                    <ProductCard item={data} key={index} />
                                )
                            })
                        }
                    </div>
            }
        </>
    );
}
