import React from 'react';
import Announcement from '../../components/announcement/Announcement';
import Navbar from '../../components/navbar/Navbar';
import Slider from "../../components/slider/Slider";
import Catagories from "../../components/categorie/Categorie";
import ProductCards from "../../components/product/ProductCards"
import Footer from "../../components/footer/Footer";

export default function Home() {
    return (
        <>
            <Announcement />
            <Navbar />
            <Slider />
            <Catagories />
            <ProductCards />
            <Footer />
        </>
    );
}
