import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./OrderPage.css";
import Add from "@material-ui/icons/Add";
import Remove from "@material-ui/icons/Remove";
import IMg from "../../asset/2.jpg";
import { useSelector, useDispatch } from "react-redux";
import { Cart, Order } from '../../Redux/Actions/homeAction';
import { Link } from "react-router-dom";

const orderDetails = {
    name: "",
    email: "",
    phone: "",
    address: ""
}

export default function OrderPage() {

    var a = 0;
    const dispatch = useDispatch();
    const { carts } = useSelector(state => state.CartStore);
    useEffect(() => {
    }, [carts])

    console.log(carts,"===catrs");
    const [order, setOrder] = useState(orderDetails);

    const handleInput = (e) => {
        const { name, value } = e.target
        setOrder({
            ...order,
            [name]: value
        })

    }

    const submit = (data, carts) => {
        dispatch(Order(data, carts));
        setOrder(orderDetails);
    }

    const qty = (n, data) => {
        if (n >= 1) {
            dispatch(Cart(data, n))
        }
    }

    carts.forEach(element => {
        a = a + (element.productPrice * element.qty)
    });
    return (
        <>
            <div className="container mt-4">
                <div className="row">

                    <div className=" col-lg-8 ">

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
                                                <img src={IMg} />
                                                <div>
                                                    <p style={{ margin: '0px' }}>{data.productName}</p>
                                                    <small>{data.productPrice}</small>
                                                    <br />
                                                    <a href="#">Remove</a>
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
                        </div>
                    </div>

                    <div className=" col-lg-4 ">
                        <div className="form-group">
                            <input value={order.name} className=" form-control" placeholder="Name" name="name" onChange={(e) => handleInput(e)} />
                        </div>
                        <div className="form-group">
                            <input value={order.email} className=" form-control" placeholder="Email" name="email" onChange={(e) => handleInput(e)} />
                        </div>
                        <div className="form-group">
                            <input value={order.phone} className=" form-control" placeholder="Phone" name="phone" onChange={(e) => handleInput(e)} />
                        </div>
                        <div className="form-group">
                            <textarea value={order.address} className=" form-control" placeholder="Address" name="address" onChange={(e) => handleInput(e)} />
                        </div>
                        <div className="mt-3 d-flex justify-content-end align-content-end">
                            <div className="">
                                <Link to="/cart"><button className="Order mr-1">Back to Cart</button></Link>
                                <button className="Clear" onClick={() => submit(order, carts)}>Place Order</button>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}