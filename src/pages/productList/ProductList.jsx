import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetAllProduct } from '../../Redux/Actions/homeAction';
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css";

export default function ProductList() {

    const { products } = useSelector(state => state.ProductStore)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(GetAllProduct());
    }, [])

    return (

        <>
            {
                <div className="container mt-3">

                        <div className="row ">
                            {
                                products.map((data, index) => {
                                    return (
                                        <div key={index} className="d-flex justify-content-center flex-wrap  cold">
                                            <ProductCard data={data} />
                                        </div>
                                    )
                                })
                            }
                        </div>
                </div>
            }
        </>

    )

    // return (

    //     <>
    //         {
    //             <div className="container">
    //                 <div className="cardList">
    //                 {
    //                     products.map((data, index) => {
    //                         return (
    //                             <div key={index} className=" d-flex justify-content-center bg-danger" >
    //                                 <ProductCard data={data} />
    //                             </div>
    //                         )
    //                     })
    //                 }
    //             </div>
    //             </div>
    //         }
    //     </>

    // )
}
