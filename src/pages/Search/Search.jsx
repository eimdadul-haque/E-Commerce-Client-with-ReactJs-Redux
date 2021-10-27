import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import "./Search.css"

export default function Search() {

    const param = useParams();
    const history = useHistory();
    const [loding, setloding] = useState(true)
    const [Data, setData] = useState([]);
    const IndividualOffer = (id) => {
        history.push("/individualOffer/" + id);
    }

    // useEffect(() => {
    //     axios.get("" + param.query)
    //         .then(res => {
    //             setData(res.data);
    //             setloding(false);
    //         })
    //         .catch(err => {
    //             window.alert(err);
    //         })
    // }, [])
    return (
        <>
            <div className="position-relative" style={{ height: "100vh", width: "100%" }}>
                <p className="match">Loding...</p>
            </div>
            {/* {loding === true ?
                <div className="position-relative" style={{ height: "100vh", width: "100%" }}>
                    <p className="match">Loding...</p>
                </div>
                :
                <>
                    {
                        Data.length === 0 ? <div className="position-relative" style={{ height: "100vh", width: "100%" }}>
                            <p className="match">No Match Found</p>
                        </div> :
                            <>
                                <div className="jumbotron">
                                    <div className="container">
                                        <p className="h1"><span className="New"> </span>Search<span className="Offers">Result</span></p>
                                    </div>
                                </div>
                                <div className="container">
                                    <div className="row mt-5">
                                        {
                                            Data.map((data, index) =>
                                                <div className="col-lg-8 my-2">
                                                    <div class="card">
                                                        <h5 class="card-header">Offers</h5>
                                                        <div class="card-body">
                                                            <h5 class="card-title"> {data.title} {data + 1} </h5>
                                                            <p class="card-text">{data.description_shot}</p>
                                                            <a onClick={() => IndividualOffer(data.id)} class="btn btn-info">Details</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                            </>
                    }

                </>
            } */}
        </>
    )
}
