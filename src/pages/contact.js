import React from "react";

function Contact() {
  return (
    <section className="container">
      <div className="row">
        <div className="col-md-11">
          <form>
            <div className="row">
              <div className="col-md-8">
                <h1>Contact</h1>
              </div>
            </div>
            <section className="content">
              <div className="form-group">
                <label className="contactHeader">
                  <h5>Name</h5>
                </label>
                <input
                  className="form-control information"
                  type="text"
                  placeholder="Name"
                />
              </div>
              <div className="form-group">
                <label className="contactHeader">Email address</label>
                <input
                  type="email"
                  className="form-control information"
                  placeholder="name@example.com"
                />
              </div>
              <div className="form-group">
                <label className="contactHeader">Message</label>
                <textarea
                  className="form-control information"
                  rows="3"
                ></textarea>
              </div>
              <button
                type="submit"
                id="submitContact"
                className="btn btn-primary"
              >
                Submit
              </button>
            </section>
          </form>
        </div>
      </div>
      <div className="row end">
        <div className="col-md-12"></div>
      </div>
    </section>
  );
}

export default Contact;
