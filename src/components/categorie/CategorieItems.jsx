import React from 'react';
import { useHistory } from 'react-router-dom';
import "./CategorieItems.css";

export default function CategorieItems({ item }) {

    const history = useHistory();
    const get_to_product = (cat) => {
        history.push("product-list/" + cat)
    }

    return (
        <div className="cate-item">
            <img src={item.img} className="cate-image" />
            <div className="cate-info">
                <h2 className="cate-title">{item.title}</h2>
                <button onClick={() => get_to_product(item.title)} className="cate-btn">Shope Now</button>
            </div>
        </div>
    )
}
