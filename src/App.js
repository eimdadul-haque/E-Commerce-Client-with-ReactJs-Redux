import './App.css';
import React from 'react';
import Navbar from './components/navbar/Navbar';
import Announcement from './components/announcement/Announcement';
import Slider from './components/slider/Slider';
import Categorie from './components/categorie/Categorie';
import Products from './components/product/Products';
import Newsletter from './components/newsletter/Newsletter';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Announcement />
      <Navbar />
      <Slider />
      <Categorie />
      <Products />
      <Newsletter />
      <Footer />
    </>
  );
}
export default App;


