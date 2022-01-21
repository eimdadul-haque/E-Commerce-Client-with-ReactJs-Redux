import React from 'react'
import { Carousel } from "react-bootstrap";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./Slider.css";

export default function Slider() {

    return (
        <div className='slider-container' >
            <Carousel >
                    <Carousel.Item  interval={3000} className='slider-container' >
                        <img
                            className="slider-img "
                            src="https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item  interval={3000} className='slider-container' style={{backgroundColor:"https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}} >
                        <img
                            className="slider-img "
                            src="https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item  interval={3000} className='slider-container' >
                        <img
                            className="slider-img "
                            src="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?cs=srgb&dl=pexels-juan-mendez-1536619.jpg&fm=jpg"
                            alt="First slide"
                        />
                    </Carousel.Item>
            </Carousel >
        </div>
    )
}



