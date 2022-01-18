import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import './Navbar.css';

export default function Navbar() {
    return (
            <div className='container-nav'>
                <div className='wrapper'>
                    <div className='nav-part'>
                        <span className='language'>Navber</span>
                        <div className='search-container'>
                            <input className='input' />
                            <Search style={{ color: "gray", fontSize: '16px' }} />
                        </div>
                    </div>
                    <div className='nav-part-mid'>
                        <h1 className='logo'>Eimdadul</h1>
                    </div>
                    <div className='nav-part-end'>
                        <div className='menu-item'>
                            <Badge badgeContent={4} color="primary">
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
            </div>
    )
}
