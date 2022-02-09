import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import {useHistory} from "react-router-dom";
import "./ProductCard.css"

export default function ProductCard({ item }) {

    const history = useHistory();
    const get_a_product = (id) => {
     history.push("/product/"+id);   
    }

    return (
        <div onClick={ ()=>get_a_product(item.id)} className='product-container'>
            <div className=''>
                <img className='product-image' src={"http://localhost:7901/Images/" + item.imageName} />
            </div>
            <div className='product-info'>
                <div className='product-icon'>
                    <SearchOutlined />
                </div>
                <div className='product-icon'>
                    <ShoppingCartOutlined />
                </div>
                <div className='product-icon'>
                    <FavoriteBorderOutlined />
                </div>
            </div>
        </div>
    );
}
