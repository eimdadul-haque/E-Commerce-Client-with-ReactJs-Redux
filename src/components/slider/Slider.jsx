import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Carousel } from "react-bootstrap";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./Slider.css";

export default function Slider() {
    const [data, setdata] = useState([])

    useEffect(() => {
        axios.get("http://kmemon.pythonanywhere.com/api/homepage/sliders/")
            .then((res) => {
                setdata(res.data);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err, "===Error");
            })
    }, [])

    return (
        <div className='slider-container' >
            <Carousel >
                {
                    data.map((data, index) => {
                        return (
                            <Carousel.Item key={index} interval={3000}>
                                <img
                                    className="d-block w-100 slider-img "
                                    src={data.image}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>{data.title}</h3>
                                    <p>{data.text}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )
                    })
                }
            </Carousel >
        </div>
    )
}



