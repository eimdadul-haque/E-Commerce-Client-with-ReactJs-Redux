import React, { useEffect, useState } from 'react';
import "./Product.css";
import Newsletter from "../newsletter/Newsletter";
import Footer from "../footer/Footer";
import Navber from "../navbar/Navbar";
import Announcement from "../announcement/Announcement";
import { Add, Remove } from '@material-ui/icons';
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Cart } from '../../Redux/Actions/cartAction';

export default function Product() {

    const { ref } = useSelector(state => state.RefreshStore)
    const [data, setData] = useState({});
    const [qty, setQty] = useState(1);
    const dispatch = useDispatch();
    const param = useParams();

    useEffect(() => {
        axios.get("http://localhost:7901/api/Home/" + param.id)
            .then((res) => {
                setData(res.data);
            })
            .catch(err => console.log(err))
    }, [ref])

    const product_qty = (value) => {
        if (value === "desc") {
            qty > 1 && setQty(qty - 1);
        }
        else {

            setQty(qty + 1);
        }

    }

    const add_cart = (product, qty) => {
        dispatch(Cart(product, qty));
    }

    return (
        <div className='pro-page-container'>
            <Announcement />
            <Navber />
            <div className='pro-page-warpper'>
                <div className='pro-page-image-container'>
                    <img className='pro-page-image' src={'http://localhost:7901/Images/' + data.imageName} />
                </div>
                <div className='one-pro-info'>
                    <h1 className='pro-info-titile'>{data.name}</h1>
                    <p className='pro-info-desc'> {data.description} </p>
                    <span className='pro-info-price'>$ {data.price}</span>
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
                            <Remove onClick={() => product_qty("desc")} />
                            <span className='pro-amount'>{qty}</span>
                            <Add onClick={() => product_qty("Add")} />
                        </div>
                        <button onClick={() => add_cart(data, qty)} className='pro-button'>
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
