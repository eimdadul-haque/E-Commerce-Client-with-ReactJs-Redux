import axios from 'axios';
import React, { useEffect, useState } from 'react';
import img from "../../asset/d.png";

export default function Profile() {

    const [Data, setData] = useState({});
    const [loding, setloding] = useState(true);

    useEffect(() => {
        axios.get("http://localhost:64029/api/account/profile/", {
            headers: {
                authorization: "bearer " + localStorage.getItem("token")
            }
        })
            .then(res => {
                setData(res.data);
                setloding(false);
            })
            .catch(err => {
                alert(err);
            });
    }, [])

    return (
        <>
            {
                loding === true ? "" :
                    <div className="container ">
                        <div className=" mt-5 row ">
                            <div className="col-4 shadow bg-light rounded">
                                <img src={img} style={{ width: "100%", height: "100%" }} className="" />
                            </div>
                            <div className="col-1"></div>
                            <div className="col-7 bg-light shadow rounded">
                                <ul className="pt-5">
                                    <li>
                                        <p>Name: {Data.firstName} {Data.lastName}</p>
                                    </li>
                                    <li>
                                        <p>Age: 24</p>
                                    </li>
                                    <li>
                                        <p>Gender: Male</p>
                                    </li>
                                    <li>
                                        <p>Address: Dhaka, Tangail</p>
                                    </li>
                                </ul>

                            </div>
                        </div>
                        <div className="bg-light mt-5 row shadow rounded ">
                            <div className="col-12">
                                <span className="h5">Bio: </span>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Vitae dolorum recusandae quam sequi alias hic quibusdam.
                                Cumque, a ut dignissimos, perferendis, ad pariatur dicta iste sint eligendi eveniet itaque enim.
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}
