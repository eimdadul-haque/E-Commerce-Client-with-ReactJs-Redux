import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import "./ProductCard.css"

export default function ProductCard({item}) {
    return (
        <div className='product-container'>
            <div className=''>
                <img className='product-image' src={item.img} />
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
