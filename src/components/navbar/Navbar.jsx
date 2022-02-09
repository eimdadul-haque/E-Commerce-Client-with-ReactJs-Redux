import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
    const { carts } = useSelector(state => state.CartStore);
    const [qty, setQty] = useState(0);
    const history = useHistory();

    useEffect(() => {
        var c = 0;
        carts.forEach(element => {
            c = c + element.qty
        });
        setQty(c);
    }, [carts]);

    const to_cart = () => {
        history.push('/cart/');
    }
    return (
        <div className='container-nav'>
            <div className='wrapper'>
                <div className='nav-part'>
                    <span className='language'>Navber</span>
                    <div className='search-container'>
                        <input className='input' />
                        <Search className='search-icon' style={{ color: "gray", fontSize: '16px' }} />
                    </div>
                </div>
                <div className='nav-part-mid'>
                    <h2 className='logo'>OnlineShop</h2>
                </div>
                <div className='nav-part-end'>
                    <div onClick={() => to_cart()} className='menu-item'>
                        <Badge badgeContent={qty} color="primary">
                            <ShoppingCartOutlined />
                        </Badge>
                    </div>
                    <div className='menu-item'>
                        Register                          
                    </div>
                    <div className='menu-item'>
                        Sign Up
                    </div>
                </div>
            </div>
        </div >
    )
}
