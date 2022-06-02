import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/navbar"
import About from "./Pages/About//index"
import Portfolio from "./Pages/Portfolio/index"
import "./index.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes className="background-primary">
          <Route path="/my-portfolio/about" element={<About/>} />  
          <Route path="/about" element={<About/>} />  
          <Route path="/" element={<Portfolio/>} />  
          <Route path="/my-portfolio" element={<Portfolio/>} />  
        </Routes>  
      </div>
    </Router>
  );
}

export default App;
