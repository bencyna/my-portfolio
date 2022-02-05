import React, { useState } from "react";
import CSSImage from "./images/css.jpg";
import codenoob from "./images/codenoob.jpg";
import empDImg from "./images/empDir.jpg";
import MVCBlog from "./images/MVCblog.jpg";
import Calendule from "./images/Calendule.jpg";

function Project() {
  const [indexNum, setIndexNum] = useState(0);
  const [projects] = useState([
    {
      name: "Calendule",
      hrefApp: "https://calendule.herokuapp.com/login",
      hrefGit: "https://github.com/bencyna/calendule",
      bio: "This project allows users to add their exercises for a day and view their stats afterwards, it uses mongodb as the database with use of mongoose and express packages",
      photoLocation: Calendule,
      styleId: "fitness",
    },
    {
      name: "Code-Noob",
      hrefApp: "https://code-noob.herokuapp.com/",
      hrefGit: "https://github.com/bencyna/codeNoob",
      bio: "Code noob utilises MySQL to store user data along with handlebars and express. It is a forum for people wanting to get into coding but are unsure how to begin. You can ask simple questions, make replies and find links to recourses",
      photoLocation: codenoob,
      styleId: "projectImages",
    },
    {
      name: "Catch Source Style",
      hrefApp: "https://bencyna.github.io/Catch-Source-Style/",
      hrefGit: "https://github.com/bencyna/Catch-Source-Style",
      bio: "This app uses a colour and font API to upload photos which then retrieves the colours used and displays it on the page. Users can interact with their choice of fonts to see how it looks before applying it to their own code",
      photoLocation: CSSImage,
      styleId: "projectImages",
    },
    {
      name: "Employee Directory",
      hrefApp: "https://bencyna.github.io/EmployeeDirectory",
      hrefGit: "https://github.com/bencyna/EmployeeDirectory",
      bio: "This application was made using react, it allows users to order their employees by name and search by name as well",
      photoLocation: empDImg,
      styleId: "projectImages",
    },
    {
      name: "MVC tech blog",
      hrefApp: "https://immense-headland-77196.herokuapp.com/",
      hrefGit: "https://github.com/bencyna/MVC-techBlog",
      bio: "This project uses sequelize and handlebars to create a webpage useful for posting commenting on tech related topics. This project uses bcrypt for authentication",
      photoLocation: MVCBlog,
      styleId: "projectImages",
    },
  ]);

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
                id={projects[indexNum].styleId}
                src={projects[indexNum].photoLocation}
                alt={projects[indexNum].name}
              />
            </div>
            <p className="bio">{projects[indexNum].bio}</p>
          </div>
          <div className="nextBtn">
            <button
              type="submit"
              id="nextProject"
              className="btn btn-primary"
              onClick={handleClickFunction}
            >
              Next Project
            </button>
          </div>
        </div>
        );
      </div>
    </section>
  );
}

export default Project;
