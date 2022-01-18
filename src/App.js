import './App.css';
import React from 'react';
import Navbar from './components/navbar/Navbar';
import Announcement from './components/announcement/Announcement';
import Slider from './components/slider/Slider';

function App() {
  return (
    <>
      <Announcement />
      <Navbar />
      <Slider />
    </>
  );
}
export default App;


