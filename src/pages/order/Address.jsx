import React from 'react';
import { Button, ButtonGroup, Container, Grid, IconButton } from "@material-ui/core";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Announcement from "../../components/announcement/Announcement";
import { Add, Delete, Edit } from '@material-ui/icons';
import "./Address.css";
import axios from 'axios';

export default function Address() {

    const checkout = () => {
        // axios.get("http://localhost:7901/api/Checkout/")
        //     .then(() => { })
        //     .catch(() => { })
    }

    return (
        <>
            <Announcement />
            <Navbar />
            <Container className="mt-5">
                <Grid container spacing={4}>
                    <Grid item lg={8}>
                        <div className="card">
                            <div className="card-header font-weight-bold">
                                Shipping address
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <div className=' d-flex justify-content-between justify-content-center'>
                                    <div>
                                        <ButtonGroup variant="text" aria-label="text button group">
                                            <IconButton className='text-info' >
                                                <Edit />
                                            </IconButton>
                                            <IconButton className='text-success'>
                                                <Add />
                                            </IconButton>
                                        </ButtonGroup>
                                    </div>
                                    <IconButton className='text-danger' aria-label="delete">
                                        <Delete />
                                    </IconButton>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-content-center p-2">
                                <Button variant="text"><span className='text-danger font-weight-bold'>Go Back To Home</span></Button>
                                <button onClick={() => checkout()} className='btn btn-outline-warning'>
                                    Confirm Order
                                </button>
                            </div>
                        </div>
                    </Grid>
                    <Grid item lg={4}>
                        <div className="card" style={{ width: "18rem" }}>
                            <div className=" card-header font-weight-bold">
                                Checkout Summary
                            </div>
                            <div className=" d-flex justify-content-between align-content-center">
                                <span className="p-2">Subtotal   </span>
                                <span className="p-2">1000</span>
                            </div>
                            <div className=" d-flex justify-content-between align-content-center">
                                <span className="p-2">Shipping</span>
                                <span className="p-2">1000</span>
                            </div>
                            <div className=" d-flex justify-content-between align-content-center">
                                <span className="p-2">Total 1050</span>
                                <span className="p-2">1000</span>
                            </div>
                            <div className=" font-weight-bold rounded-bottom bg-info d-flex justify-content-between align-content-center">
                                <span className="p-2"> Payable Total</span>
                                <span className="p-2">1050</span>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </>
    )
}
