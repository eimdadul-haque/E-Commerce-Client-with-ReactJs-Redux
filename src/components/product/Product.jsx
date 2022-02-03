import React from 'react';
import "./Product.css";
import Newsletter from "../newsletter/Newsletter";
import Footer from "../footer/Footer";
import Navber from "../navbar/Navbar";
import Announcement from "../announcement/Announcement";
import { Add, Remove } from '@material-ui/icons';
export default function Product() {
    return (
        <div className='pro-page-container'>
            <Announcement />
            <Navber />
            <div className='pro-page-warpper'>
                <div className='pro-page-image-container'>
                    <img className='pro-page-image' src='https://img.pixelz.com/blog/using-product-images-on-ecommerce-site/ecommerce-product-images-laptop.jpg?w=1000' />
                </div>
                <div className='one-pro-info'>
                    <h1 className='pro-info-titile'>Laptop</h1>
                    <p className='pro-info-desc'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium eum rerum labore sint ad consequuntur iste provident cupiditate minima quae.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repellendus officia provident sequi nesciunt beatae repudiandae doloremque suscipit, ducimus blanditiis.
                    </p>
                    <span className='pro-info-price'>$ 20</span>
                    <div className='pro-filter-container'>
                        <div className='pro-filter'>
                            <span className='pro-color-title'>Color</span>
                            <div className='pro-color' style={{ background: "red" }}></div>
                            <div className='pro-color' style={{ background: "blue" }}></div>
                            <div className='pro-color' style={{ background: "Black" }}></div>
                        </div>
                        <div className='pro-filter'>
                            <span className='pro-color-title'>Size</span>
                            <select className='pro-select'>
                                <option>M</option>
                                <option>L</option>
                                <option>XL</option>
                            </select>
                        </div>
                    </div>
                    <div className='pro-filter-container'>
                        <div className='pro-amount-container'>
                            <Remove />
                            <span className='pro-amount'>1</span>
                            <Add />
                        </div>
                        <button className='pro-button'>
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>
            <Newsletter />
            <Footer />
        </div>
    );

}
