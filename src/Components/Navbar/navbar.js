import React from 'react';
import {Link } from "react-router-dom"

export default function navbar() {
  return (
  <div className="navbar absolute top-0">
    <nav className="w-full">
      <div className="float-left">
      <Link to="#top" className="absolute w-full">Ben Cyna</Link>
      </div>
    </nav>
  </div>);
}
