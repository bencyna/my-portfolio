import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/navbar"
import Contact from "./Pages/Contact/index"
import About from "./Pages/About//index"
import Portfolio from "./Pages/Portfolio/index"

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/contact" element={<Contact/>} />  
          <Route path="/about" element={<About/>} />  
          <Route path="/" element={<Portfolio/>} />  
        </Routes>  
      </div>
    </Router>
  );
}

export default App;
