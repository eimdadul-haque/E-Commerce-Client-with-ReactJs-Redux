import React from 'react';
import Announcement from "../announcement/Announcement";
import Navbar from '../navbar/Navbar';
import ProductCards from "./ProductCards";
import Newsletter from "../newsletter/Newsletter";
import Footer from '../footer/Footer';
import "./ProductList.css"

export default function ProductList() {
    return <>
        <Announcement />
        <Navbar />
        <h1 className='main-filter-title'>Dresses</h1>
        <div className='filter-container'>
            <div>
                <span className='filter-title'>Filter product by:</span>
                <select className='filter-select'>
                    <option disabled selected>Color</option>
                    <option>Red</option>
                    <option>Black</option>
                    <option>Yello</option>
                    <option>White</option>
                </select>
                <select className='filter-select'>
                    <option disabled selected>Size</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                    <option>XXL</option>
                </select>
            </div>
            <div>
                <span className='filter-title'>Sort product by:</span>
                <select className='filter-select'>
                    <option selected>Newest</option>
                    <option>Price (low)</option>
                    <option>Price (Height)</option>
                </select>
            </div>
        </div>
        <ProductCards />
        <Newsletter />
        <Footer />
    </>;
}
