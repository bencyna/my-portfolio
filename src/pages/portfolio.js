import React from "react";
import Details from "../Components/details";
import Project from "../Components/project";

function Portfolio() {
  return (
    <section className="container">
      <div className="row">
        <div className="col-lg-12">
          <h1>Portfolio</h1>
        </div>
      </div>
      <div className="row content">
        <div className="col-lg-12">
          <Details />
          <Project />
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
