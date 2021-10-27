import React, { useEffect, useState } from "react";
import "./AddProduct.css";
import { useDispatch, useSelector } from "react-redux";
import { Add_Product, Type } from "../../Redux/Actions/homeAction";

const initial = {
    productName: "",
    productTypeId: 0,
    productPrice: 0,
    productQty: 0,
    productImage: null
}

export default function AddProduct() {

    const dispatch = useDispatch();
    const [Data, setData] = useState(initial);
    const { types } = useSelector(state => state.TypeStore);

    useEffect(() => {
        dispatch(Type());
    }, []);

    const handle = (e) => {
        const { name, value } = e.target;
        setData({
            ...Data,
            [name]: value
        })
    }

    const handleImg = (e) => {
        if (e.target.files && e.target.files[0]) {
            const productImage = e.target.files[0];
            setData({
                ...Data,
                productImage
            });
        }
    }

    const submit = (data) => {
        dispatch(Add_Product(data));
    }
    
    return (
        <>
            <div className="container">
                <div className="row d-flex justify-content-center mt-5">
                    <div className=" col-lg-6 col-sm-12 col-md-10 p-4 shadow rounded">
                        <div className="form-group">
                            <input name="productName" onChange={(e) => handle(e)} className="form-control" type="text" placeholder="Product Name" />
                        </div>
                        <div className="form-group">
                            <select name="productTypeId" className="form-control" onChange={(e) => handle(e)} >
                                <option>Select Type</option>
                                {
                                    types.map((data, index) =>
                                        <option key={index} value={data.id}>{data.type}</option>
                                    )
                                }
                            </select>
                        </div>
                        <div className="form-group">
                            <input name="productPrice" onChange={(e) => handle(e)} className="form-control" type="number" placeholder="Product Price" />
                        </div>
                        <div className="form-group">
                            <textarea name="desc" onChange={(e) => handle(e)} className="form-control" type="text" placeholder="Description" />
                        </div>
                        <div className="form-group d-flex ">
                            <input name="file" onChange={(e) => handleImg(e)} className="form-control-file" type="file" />
                            <button onClick={() => submit(Data)} className="btn btn-info">Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}