import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Dashboard() {

    const [data, setdata] = useState([]);
    const [loding, setloding] = useState(true);
    let q = 0, p = 0;

    useEffect(() => {
        getAllOrder();
    }, [])

    const qty = (n, pr) => {
        console.log(n,"===n",pr,"===pr");
        q = q + n;
        p = p + pr;
    }
    console.log("===order");
    const getAllOrder = () => {
        axios.get("http://localhost:62266/api/Order/")
            .then(res => {
                console.log(res.data, "===order");
                setdata(res.data);
                setloding(false);
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div className="container mt-5">
            {
                loding === true ? "loding..." :

                    <table className="table table-bordered">
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th> Phone</th>
                            <th>Time</th>
                            <th>Type Num</th>
                            <th>Total Product </th>
                            <th>Total Price </th>
                        </tr>
                        {
                            data.map((item, index) =>
                                <>
                                    <tr>
                                        {
                                            item.orderDetails.map((data, index) =>
                                                qty(data.qty, data.product.productPrice))
                                        }
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.orderTime}</td>
                                        <td>{item.orderDetails.length}</td>
                                        <td>{q}</td>
                                        <td>{p}</td>
                                    </tr>
                                </>)
                        }
                    </table>


            }
        </div>
    )
}
