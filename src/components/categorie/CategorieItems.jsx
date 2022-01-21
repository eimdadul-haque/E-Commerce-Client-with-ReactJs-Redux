import React from 'react';
import "./CategorieItems.css";

export default function CategorieItems({ item }) {
    return (
        <div className="cate-item">
            <img src={item.img} className="cate-image" />
            <div className="cate-info">
                <h2 className="cate-title">{item.title}</h2>
                <button className="cate-btn">Shope Now</button>
            </div>
        </div>
    )
}
