import axios from "axios";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { useSelector } from "react-redux";

export default function ProductByType() {

    const param = useParams();
    const [data, setData] = useState([]);
    const [Loding, setLoding] = useState(true);
    const { ref } = useSelector(state => state.RefreshStore);

    useEffect(() => {
        getPro(param.cat_id);
        setLoding(false);
    }, [ref])

    const getPro = (id) => {
        axios.get("http://localhost:62266/api/Home/get-by-category/" + id)
            .then(res => {
                setData(res.data);
            })
            .catch(err => {
                alert(err)
            })
    }

    return (
        <>
            {
                Loding === true ? <h1>Loding...</h1> :
                    <div className="container card-columns">
                        {
                            data.map((data, index) =>
                                <ProductCard key={index} data={data} />
                            )
                        }
                    </div>
            }
        </>
    )
}