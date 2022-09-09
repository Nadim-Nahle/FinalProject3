import React from "react";
import "./AboutForm.css";

const AboutForm = () => {
  return (
    <div className="container">
      <div className="contact-box">
        <div className="left"></div>
        <div className="right">
          <h2>Let's Create the About Page!</h2>
          <input type="text" className="field" placeholder="Title" />

          <textarea
            placeholder="Please Enter A Description!"
            className="field"
          ></textarea>
          <textarea
            placeholder="Please Enter Any Other Details!"
            className="field"
          ></textarea>
          <button className="btn">Next</button>
        </div>
      </div>
    </div>
  );
};

export default AboutForm;
