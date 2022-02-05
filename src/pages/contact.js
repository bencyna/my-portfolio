import React, { useState } from "react";
import emailjs from "emailjs-com";
import apiKeys from "../apikeys";
import "../index.css"


function Contact() {
  const [processing, setProcessing] = useState(false);
  const [formInfo, setFormInfo] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleFormChange = (e) => {
    const { name, value } = e.target;

    setFormInfo({
      ...formInfo,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setProcessing(true)
    if (
      formInfo.name.length > 1 &&
      formInfo.email.length > 1 &&
      formInfo.message.length > 1
    ) {
      emailjs
        .send(
          apiKeys.SERVICE_ID,
          apiKeys.TEMPLATE_ID,
          formInfo,
          apiKeys.USER_ID
        )
        .then(
          function (response) {
            alert(
              "You're email has gone through, I will get back to you shortly!"
            );
            setFormInfo({ name: "", email: "", message: "" });
          },
          function (error) {
            console.log(error);
            alert(
              "Sorry, there was some sort of error, please try again or email me at: benjamincyn@gmail.com"
            );
          }
        );
        setProcessing(false)
    } else {
      alert("Input fields cannot be blank");
      setProcessing(false)
    }
  };

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
                  name="name"
                  value={formInfo.name}
                  onChange={handleFormChange}
                />
              </div>
              <div className="form-group">
                <label className="contactHeader">Your Email address</label>
                <input
                  type="email"
                  className="form-control information"
                  placeholder="name@example.com"
                  name="email"
                  value={formInfo.email}
                  onChange={handleFormChange}
                />
              </div>
              <div className="form-group">
                <label className="contactHeader">Message</label>
                <textarea
                  className="form-control information"
                  rows="3"
                  name="message"
                  value={formInfo.message}
                  onChange={handleFormChange}
                ></textarea>
              </div>
              <button
                disabled={processing}
                type="button"
                id="submit"
                className="payBtn"
                onClick={onSubmit}
              >
                <span id="button-text">
                  {processing ? (
                    <div className="spinner" id="spinner"></div>
                  ) : (
                    "Submit"
                  )}
                </span>
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
