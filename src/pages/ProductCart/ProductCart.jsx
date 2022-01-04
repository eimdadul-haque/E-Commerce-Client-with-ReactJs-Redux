import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./ProductCart.css";
import Add from "@material-ui/icons/Add";
import Remove from "@material-ui/icons/Remove";
import IMg from "../../asset/2.jpg";
import { useSelector, useDispatch } from "react-redux";
import { Cart, removeCart } from '../../Redux/Actions/homeAction';
import { Link } from "react-router-dom";
export default function ProductCart() {

    var a = 0;
    const dispatch = useDispatch();
    const { carts } = useSelector(state => state.CartStore);

    useEffect(() => {
    }, [carts])

    const qty = (n, data) => {
        if (n >= 1) {
            dispatch(Cart(data, n))
        }
    }

    const removeitem = (id) => {
        dispatch(removeCart(id))
    }

    if (carts.length === 0) {
        return (
            <div className="position-relative" style={{ height: "100vh", width: "100%" }}>
                <p className="empty">Your cart is empty, Back to<Link to="/"> home</Link></p>
            </div>
        )
    }

    carts.forEach(element => {
        a = a + (element.productPrice * element.qty)
    });

    return (
        <>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-lg-12">
                        <table >
                            <tr className="table-row" >
                                <th>Product</th>
                                <th>Quantity</th>
                                <th>Subtotal</th>
                            </tr>
                            {
                                carts.map((data, index) =>
                                    <tr key={index} >
                                        <td>
                                            <div className='cart-info'>
                                                <img src={"http://localhost:62266/Images/" + data.imageName} />
                                                <div>
                                                    <p style={{ margin: '0px' }}>{data.productName}</p>
                                                    <small>${data.productPrice}</small>
                                                    <br />
                                                    <a onClick={() => removeitem(data.id)}>Remove</a>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="qty mt-3">
                                                <button onClick={() => qty(data.qty - 1, data)}><Remove /></button>
                                                <input value={data.qty} />
                                                <button onClick={() => qty(data.qty + 1, data)}><Add /></button>
                                            </div>
                                        </td>
                                        <td>{data.productPrice * data.qty}</td>
                                    </tr>
                                )
                            }

                        </table>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-lg-12 d-flex justify-content-end align-content-end">
                        <table className="subtotal-table" >
                            <tr >
                                <td>Subtotal</td>
                                <td>{a}</td>
                            </tr>
                            <tr>
                                <td>Discount</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td>Total</td>
                                <td>{a + 5}</td>
                            </tr>
                        </table>
                    </div>
                    <div className="col-lg-12 mt-5 d-flex justify-content-end align-content-end">
                        <div className="">
                            <button className="Clear">Clear Cart</button>
                            <Link to="/order"><button className="Order">Checkout</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
