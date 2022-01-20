import React from 'react';
import { popularProducts } from "../../data/data";
import Product from "./Product";
import "./Product.css"

export default function Products() {
    return (
        <div className='products-container'>
            {
                popularProducts.map((data, index) => {
                    return (
                        <Product item={data} key={index} />
                    )
                })
            }
        </div>
    );
}
