import React from 'react';
import { popularProducts } from "../../data/data";
import ProductCard from "./ProductCard";
import "./Product.css"

export default function ProductCards() {
    return (
        <div className='products-container'>
            {
                popularProducts.map((data, index) => {
                    return (
                        <ProductCard item={data} key={index} />
                    )
                })
            }
        </div>
    );
}
