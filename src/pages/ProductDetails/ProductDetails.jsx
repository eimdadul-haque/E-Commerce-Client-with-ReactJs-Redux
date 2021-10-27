import React, { useEffect, useState } from 'react';
import "./ProductDetails.css";
import IMG from "../../asset/2.jpg";
import Add from "@material-ui/icons/Add";
import Remove from "@material-ui/icons/Remove";
import { Row } from 'react-bootstrap';
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../ProductCard/ProductCard";
import { Cart, GetAllProduct, GetOneProduct } from '../../Redux/Actions/homeAction';

export default function ProductDetails() {

    const param = useParams();
    const history = useHistory();
    const [Qty, setQty] = useState(1);
    const [loding, setloding] = useState(true);
    const dispatch = useDispatch();
    const { product, products } = useSelector(state => state.ProductStore);


    useEffect(() => {
        dispatch(GetAllProduct());
        dispatch(GetOneProduct(param.id));
        setloding(false);
    }, [param])

    const qty = (n) => {
        if (Qty < 1) {
            setQty(1);
        }
        else {
            setQty(Qty + n);
        }
    }

    const addCart = (data, qty) => {
        dispatch(Cart(data, qty))
    }

    return (
        <>
            {
                loding === true ? "Loding..." :
                    <>
                        <div className="container">
                            <div className=" row mt-5 d-flex justify-content-center">
                                <div className="col-lg-5 col-md-6 col-sm-12 ">
                                    <div className="img-box">
                                        <img src={"http://localhost:62266/Images/" + product.imageName} />
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-6 col-sm-12">
                                    <div className=" mt-lg-5  mt-lg-2 ">
                                        <h2 className="">{product.productName}</h2>
                                        <h4 className="">${product.productPrice * Qty}</h4>
                                        <div className="qty mt-3">
                                            <button onClick={() => qty(-1)}><Remove /></button>
                                            <input value={Qty} />
                                            <button onClick={() => qty(+1)}><Add /></button>
                                        </div>

                                        <small >
                                            <p className=" text-justify mt-4">
                                                <span className="font-weight-bold">Product Description: </span>
                                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint,
                                                ipsam! Deserunt minima recusandae impedit repellendus!. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit adipisci exercitationem ratione. Deserunt blanditiis quasi sed ab nemo. Soluta labore libero officia accusantium possimus quod dolorem nihil sapiente, sequi facilis illo quo dolores aliquam eaque recusandae velit cum consequatur sint eligendi harum ducimus. Nisi delectus, minima numquam corrupti at pariatur.
                                            </p>
                                        </small>
                                    </div>
                                    <div >
                                        <button className="btn btn-danger rounded-0 mr-1">Buy Now</button>
                                        <button onClick={localStorage.getItem("token") ? () => addCart(product, Qty) : () => history.push("/login")} className="btn btn-info rounded-0">Add To Cart</button>
                                    </div>
                                </div>
                            </div>


                            <div className="row d-flex justify-content-center mt-5 font-weight-bolder">
                                <div className="col-lg-10">
                                    <div className="row">
                                        <h5 className="ml-3">Related Product</h5>
                                    </div>
                                </div>
                            </div>

                            <div className="row d-flex justify-content-center mt-3">
                                <div className="col-lg-10">
                                    <div className="row">
                                        {
                                            products.map((data, index) =>
                                                index <= 7 ? <div className="col-lg-3 col-md-6 col-sm-12 mt-1">
                                                    <ProductCard data={data} />
                                                </div> : <></>
                                            )
                                        }

                                    </div>
                                </div>
                            </div>

                        </div>
                    </>
            }
        </>
    )
}



{/* <div className="container pt-4">
            <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12 ">
                    <div className="image-box">
                        <img src={IMG} alt="" />
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 ">
                    <div className="innerRow pt-lg-5">
                        <h2 className="pb-2">Red T-Shirt</h2>
                        <h4 className="pb-2">$500.00</h4>
                        <div className="pb-2 qty">
                            <button onClick={() => qty(-1)}><Remove /></button>
                            <input value={Qty} />
                            <button onClick={() => qty(+1)}><Add /></button>
                        </div>

                        <small >
                            <p className="pt-2">
                                <span className="font-weight-bold">Product Description: </span>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint,
                                ipsam! Deserunt minima recusandae impedit repellendus!. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit adipisci exercitationem ratione. Deserunt blanditiis quasi sed ab nemo. Soluta labore libero officia accusantium possimus quod dolorem nihil sapiente, sequi facilis illo quo dolores aliquam eaque recusandae velit cum consequatur sint eligendi harum ducimus. Nisi delectus, minima numquam corrupti at pariatur.
                            </p>
                        </small>
                        <div >
                            <button className="buy">Buy Now</button>
                            <button className="cart">Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}