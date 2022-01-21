import React from 'react'
import CategorieItems from './CategorieItems'
import { categories } from "../../data/data";
import "./CategorieItems.css";

export default function Categorie() {
    return (
        <div className='cate-container'>
            {
                categories.map((item, index) =>
                        <CategorieItems item={item} key={index} />
                    )
            }
        </div>
    )
}
