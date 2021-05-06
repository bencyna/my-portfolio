import React, { useState, useEffect } from "react";
import CSSImage from "./images/css.jpg";

function Project() {
  const [projects, setProject] = useState([
    {
      name: "Code-Noob",
      hrefApp: "https://code-noob.herokuapp.com/",
      hrefGit: "https://github.com/bencyna/codeNoob",
      bio:
        "Code noob utilises MySQL to store user data along with handlebars and express. It is a forum for people wanting to get into coding but are unsure how to begin. You can ask simple questions, make replies and find links to recourses",
      photoLocation: CSSImage,
    },
    {
      name: "Catch Source Style",
      hrefApp: "https://bencyna.github.io/Catch-Source-Style/",
      hrefGit: "https://github.com/bencyna/Catch-Source-Style",
      bio:
        "This app uses a colour and font API to upload photos which then retrieves the colours used and displays it on the page. Users can interact with their choice of fonts to see how it looks before applying it to their own code",
      photoLocation: CSSImage,
    },
    {
      name: "Employee Directory",
      hrefApp: "https://bencyna.github.io/employeeDirectory",
      hrefGit: "https://github.com/bencyna/EmployeeDirectory",
      bio:
        "This app uses a colour and font API to upload photos which then retrieves the colours used and displays it on the page. Users can interact with their choice of fonts to see how it looks before applying it to their own code",
      photoLocation: CSSImage,
    },
    {
      name: "MVC tech blog",
      hrefApp: "https://immense-headland-77196.herokuapp.com/",
      hrefGit: "https://github.com/bencyna/MVC-techBlog",
      bio:
        "This project uses sequelize and handlebars to create a webpage useful for posting commenting on tech like things. There are template handlebars used as well as partials to help include DRY code and login, logout and signups which are neccessary to perform certain functionalities",
      photoLocation: CSSImage,
    },
    {
      name: "Fitness Tracker",
      hrefApp: "https://radiant-hollows-58879.herokuapp.com/",
      hrefGit: "https://github.com/bencyna/workoutTracker",
      bio:
        "This project allows users to add their exercises for a day and view their stats afterwards, it uses mongodb as the database with use of mongoose and express packages",
      photoLocation: CSSImage,
    },
  ]);

  const [indexNum, setIndexNum] = useState(0);

  function handleClickFunction() {
    if (indexNum < projects.length - 1) setIndexNum(indexNum + 1);
    else {
      setIndexNum(0);
    }
  }

  return (
    <section className="row">
      <div className="col-lg-12">
        <div className="row" key={projects[indexNum].name}>
          <div className="col-lg-12 project">
            <h2>
              <a href={projects[indexNum].hrefApp}>{projects[indexNum].name}</a>
            </h2>
            <h6>
              <a href={projects[indexNum].hrefGit}>
                <i className="fab fa-github"></i> Github Repository
              </a>
            </h6>
            <div>
              <img
                id="cssPhoto"
                src={projects[indexNum].photoLocation}
                alt={projects[indexNum].name}
              />
            </div>
            <p className="bio">{projects[indexNum].bio}</p>
          </div>
          <button onClick={handleClickFunction}>Next Project</button>
        </div>
        );
      </div>
    </section>
  );
}

export default Project;
