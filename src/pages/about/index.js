import React from "react";
import rockClimbing from "./rockclimbing.jpg";
import "./style.css"

function About() {
  return (
    <section className="mt-10">
      <main className="container">
        <div className="row">
          <div className="col-lg-10">
            <div className="row">
              <div className="col-lg-12">
                <h1>About me</h1>
              </div>
              <section className="row content">
                <figure className="col-lg-5">
                  <img
                    id="rockClimbing"
                    src={rockClimbing}
                    alt="Me rockclimbing"
                  />
                </figure>
                <div className="col-lg-7 bio">
                  <p>
                    As a full-stack web developer with a background in
                    psychology, I bring strong critical and logical thinking to
                    the development of web-based projects. Past work on projects
                    in groups, and individually such as the ‘CodeNoob’ app I
                    helped develop showcase my skills as a full-stack web
                    developer. Development of coding practices is highly
                    motivating as I advance my tech skills and build upon a
                    strong foundation in HTML, CSS and Javascript which I have
                    recently earned a certificate in Full Stack Web-Development
                    from Adelaide University. My enjoyment in creating and
                    designing web pages helps to keep me engaged with my work. A
                    strong team player and leader as seen in experience
                    captaining club and school sports teams, I work well with
                    people and can solve conflict effectively. Excellent
                    academic, social and project results ensure I fit in well
                    with any web-development team.
                  </p>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <br />
                  </div>
                  <div className="col-lg-12 bio">
                    <p>
                      My interests mainly include sports such as footy, tennis,
                      basketball and going bouldering/rock climbing.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div className="row end">
          <div className="col-md-12"></div>
        </div>
      </main>
      {/* <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
      crossorigin="anonymous"
    ></script>
    <footer className="footer">
      <p>@Copyright</p>
    </footer> */}
    </section>
  );
}

export default About;
