import React from 'react';
import "./Cart.css";
import Announcement from '../../components/announcement/Announcement';
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { Add, Remove } from "@material-ui/icons";
export default function Cart() {
    return (
        <div className='cart-container'>
            <Announcement />
            <Navbar />
            <div className='cart-wrapper'>
                <h1 className='cart-title'>Your Cart</h1>
                <div className='cart-top'>
                    <button className='cart-top-btn-top'>
                        Continue shoping
                    </button>
                    <button className='cart-top-btn-bottom'>
                        Checkout
                    </button>
                </div>
                <div className='cart-bottom'>
                    <div className='cart-info'>
                        <div className='cart-product'>
                            <div className='cart-product-deatail'>
                                <img className='cart-product-image' src='https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A' />
                                <div className='cart-product-deatail-deatail'>
                                    <span><b>Product:</b> JESSIE THUNDER SHOES</span>
                                    <span> <b>ID:</b> 93813718293</span>
                                    <span><b>Size:</b> 37.5</span>
                                </div>
                            </div>
                            <div className='cart-pro-price-container'>
                                <div className='cart-pro-count-container'>
                                    <Add />
                                    <span className='cart-pro-count'>2</span>
                                    <Remove />
                                </div>
                                <span className='cart-pro-price'>$ 20</span>
                            </div>
                        </div>
                        <hr />
                        <div className='cart-product'>
                            <div className='cart-product-deatail'>
                                <img className='cart-product-image' src='https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A' />
                                <div className='cart-product-deatail-deatail'>
                                    <span><b>Product:</b> JESSIE THUNDER SHOES</span>
                                    <span> <b>ID:</b> 93813718293</span>
                                    <span><b>Size:</b> 37.5</span>
                                </div>
                            </div>
                            <div className='cart-pro-price-container'>
                                <div className='cart-pro-count-container'>
                                    <Add />
                                    <span className='cart-pro-count'>2</span>
                                    <Remove />
                                </div>
                                <span className='cart-pro-price'>$ 20</span>
                            </div>
                        </div>
                    </div>
                    <div className='cart-summary'>
                        <h1 className='cart-summary-title'>ORDER SUMMARY</h1>
                        <div className='cart-summary-item'>
                            <span>Subtotal</span>
                            <span>$ 80</span>
                        </div>
                        <div className='cart-summary-item'>
                            <span>Estimated Shipping</span>
                            <span>$ 5.90</span>
                        </div>
                        <div className='cart-summary-item'>
                            <span>Shipping Discount</span>
                            <span>$ -5.90</span>
                        </div>
                        <div className='cart-summary-item' style={{ fontSize: "24px", fontWidth: "500" }}>
                            <span>Total</span>
                            <span>$ 80</span>
                        </div>
                        <button className='cart-summary-btn'>CHECKOUT NOW</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
