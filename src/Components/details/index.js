import React from "react";

function Details() {
  return (
    <div className="row information">
      <div className="col-lg-3">
        <address>
          {" "}
          <i className="fas fa-signature"></i> Benjamin Cyna
        </address>
      </div>
      <div className="col-lg-4">
        <address>
          <i className="fas fa-envelope-square"></i> benjamincyna@gmail.com
        </address>
      </div>
      <div className="col-lg-3">
        <address>
          <i className="fas fa-phone"></i> 0430653816
        </address>
      </div>
      <div className="col-lg-2">
        <span title="Veiw Resume" className="columns colourDisplay is-mobile">
          <button id="resume">
            <a href="asset/resume.pdf.pdf">
              <i className="far fa-file"></i>
            </a>
          </button>
        </span>
      </div>
      <div className="col-lg-5 linkedIn">
        <a href="https://www.linkedin.com/in/bencyna567/">
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>
      </div>
      <div className="col-lg-7 github">
        <a href="https://github.com/bencyna/">
          <i className="fab fa-github"></i> Github
        </a>
      </div>
    </div>
  );
}

export default Details;
