import React from 'react';
import "./Footer.css";
import OfflinePin from "@material-ui/icons/OfflineBolt";
import Facebook from "@material-ui/icons/Facebook";
import Instagram from "@material-ui/icons/Instagram";
import LinkedIn from "@material-ui/icons/LinkedIn";
import Twitter from "@material-ui/icons/Twitter";
import YouTube from "@material-ui/icons/YouTube";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Footer() {
    return (
        <>
            <div className="parent">
                <div className="container">
                    <div className="row bg pt-5 text-center">
                        <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">
                            <div className="">
                                <h4>About Us</h4>
                                <p>How to works</p>
                                <p>Testimonls</p>
                                <p>Careers</p>
                                <p>Inverstor</p>
                                <p>Terms of service</p>
                            </div>
                        </div>

                        <div className=" col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center ">
                            <div>
                                <h4>Contact Us</h4>
                                <p>Contacy</p>
                                <p>Support</p>
                                <p>Destinations</p>
                                <p>Sponsorship</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">
                            <div>
                                <h4>Videos info</h4>
                                <p>Submit videos</p>
                                <p>Agency</p>
                                <p>Influencer</p>
                            </div>
                        </div>
                        <div className=" col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">
                            <div>
                                <h4>Social Media</h4>
                                <p>Instagram</p>
                                <p>Facebook</p>
                                <p>Youtube</p>
                                <p>Twitter</p>
                            </div>

                        </div>
                    </div>

                    <div className="row bg pt-5">
                        <div className="col-lg-4 col-md-12 col-sm-12">
                            <h5 className=" text-lg-left text-sm-center">EHR <OfflinePin className="bgb" /></h5>
                        </div>

                        <div className="col-lg-4 col-md-12 col-sm-12 copyright text-center">
                            <small className="text-center bgb">EHR @ 2021</small>

                        </div>

                        <div className="col-lg-4 col-md-12 col-sm-12 text-lg-right text-sm-center">
                            <span className="bgb"><Facebook className="bgb" /></span>
                            <span className="bgb"><LinkedIn className="bgb" /></span>
                            <span className="bgb"><Instagram className="bgb" /></span>
                            <span className="bgb"><Twitter className="bgb" /></span>
                            <span className="bgb"><YouTube className="bgb" /></span>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
