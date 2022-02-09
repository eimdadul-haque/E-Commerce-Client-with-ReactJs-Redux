import React, { useEffect, useState } from 'react';
import "./Cart.css";
import Announcement from '../../components/announcement/Announcement';
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { Add, Remove } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { Cart, removeCart } from "../../Redux/Actions/cartAction";

export default function Carts() {
    const { carts } = useSelector(store => store.CartStore);
    const dispatch = useDispatch();
    var Subtotal = 0;

    useEffect(() => {
    }, [carts])

    const pro_qty = (type, product, qty) => {
        if (type === "desc") {
            if (qty > 1) {
                qty = qty - 1;
            }
        } else {
            qty = qty + 1;
        }
        dispatch(Cart(product, qty))
    }

    const remove_cart = (product) => {
        dispatch(removeCart(product));
    }

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
                        {
                            carts.map((data, index) => {
                                Subtotal = Subtotal + (data.price * data.qty)
                                return (
                                    <>
                                        <div key={index} className='cart-product'>
                                            <div className='cart-product-deatail'>
                                                <img className='cart-product-image' src={"http://localhost:7901/Images/" + data.imageName} />
                                                <div className='cart-product-deatail-deatail'>
                                                    <span><b>Product:</b> {data.name}</span>
                                                    <span><b>Size:</b> 37.5</span>
                                                </div>
                                            </div>
                                            <div className='cart-pro-price-container'>
                                                <div className='cart-pro-count-container'>
                                                    <Remove onClick={() => pro_qty("desc", data, data.qty)} />
                                                    <span className='cart-pro-count'>{data.qty}</span>
                                                    <Add onClick={() => pro_qty("add", data, data.qty)} />
                                                </div>
                                                <span className='cart-pro-price'>$ {data.price * data.qty}</span>
                                            </div>
                                            <button onClick={()=>remove_cart(data)} className="remove-btn">Remove</button>
                                        </div>
                                        <hr />
                                    </>
                                )
                            })
                        }
                    </div>
                    <div className='cart-summary'>
                        <h1 className='cart-summary-title'>ORDER SUMMARY</h1>
                        <div className='cart-summary-item'>
                            <span>Subtotal</span>
                            <span>$ {Subtotal}</span>
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
                            <span>$ {Subtotal}</span>
                        </div>
                        <button className='cart-summary-btn'>CHECKOUT NOW</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
