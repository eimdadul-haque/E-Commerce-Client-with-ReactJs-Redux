import { Facebook, Instagram, LocationCity, Mail, Map, Phone, Pinterest, YouTube } from "@material-ui/icons";
import React from "react";
import "./Footer.css"
export default function Footer() {
    return (
        <div className="footer-container">
            <div className="foot-left">
                <h1 className="foot-logo">
                    OnlineShope
                </h1>
                <div className="foot-desc">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, debitis Lorem ipsum dolor sit,
                    amet consectetur adipisicing elit.Quo quasi sequi velit harum totam magnam dolor sed vitae molestias animi.
                </div>
                <div className="foot-logo-container">
                    <div className="foot-icon" style={{ backgroundColor: "#3B5999" }}><Facebook /></div>
                    <div className="foot-icon" style={{ backgroundColor: "#E4405F" }}><Instagram /></div>
                    <div className="foot-icon" style={{ backgroundColor: "#FF3333" }}><YouTube /></div>
                    <div className="foot-icon" style={{ backgroundColor: "#E60023" }}><Pinterest /></div>
                </div>
            </div>
            <div className="foot-center">
                <h4 className="center-title">Useful Links</h4>
                <ul>
                    <li>Home</li>
                    <li>Cart</li>
                    <li>Man Fashion</li>
                    <li>Woman Fashion</li>
                    <li>Accessories</li>
                    <li>My Account</li>
                    <li>Order Tracking</li>
                    <li>Wishlist</li>
                    <li>Wishlist</li>
                    <li>Terms</li>
                </ul>
            </div>
            <div className="foot-right">
                <h4>Contact</h4>
                <div className="contact-item">
                    <Map /> Tangail Kalihati, Tangail
                </div>
                <div className="contact-item">
                    <Phone /> +88017700000
                </div>
                <div className="contact-item">
                    <Mail /> eimdadulhaque@gamil
                </div>
                <div className="payment-img">
                    <img src="https://i.ibb.co/Qfvn4z6/payment.png" />
                </div>
            </div>
        </div>
    );
}

