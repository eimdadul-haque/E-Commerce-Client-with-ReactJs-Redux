
import './App.css';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import RouteComponent from './route/RouteComponent';
import Navber from './components/navigation/Navber';
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navber />
        <RouteComponent />
      </Router>
    </>
  );
}
export default App;


