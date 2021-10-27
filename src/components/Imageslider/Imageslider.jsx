import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.css"
import "./Imageslider.css"
import Img1 from "../../asset/slide1.jpg";
import Img2 from "../../asset/slide2.PNG";

export default function Imageslider() {

  const [data, setdata] = useState([])

  // useEffect(() => {
  //   axios.get("")
  //     .then((res) => {
  //       setdata(res.data);
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err, "===Error");
  //     })
  // }, [])

  return (
    <div >
      <Carousel >
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100 slider-img"
            src={Img1}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100 slider-img"
            src={Img2}
            alt="Third slide"
          />

          <Carousel.Caption style={{background:"none"}}>
            <h3 style={{background:"none",color:"red"}}>Third slide label</h3>
            <p style={{background:"none"}}>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel >
    </div >
  )
}

//<div >
  //<Carousel >

    //     {
    //       data.map((data, index) => {
    //         return (
    //           <Carousel.Item key={index} interval={3000}>
    //             <img
    //               className="d-block w-100 slider-img"
    //               src={data.image}
    //               alt="First slide"
    //             />
    //             <Carousel.Caption>
    //               <h3>{data.title}</h3>
    //               <p>{data.text}</p>
    //             </Carousel.Caption>
    //           </Carousel.Item>
    //         )
    //       })
    //     }