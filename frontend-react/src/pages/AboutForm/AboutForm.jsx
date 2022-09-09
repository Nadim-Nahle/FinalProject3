import React from "react";
import "./AboutForm.css";

const AboutForm = () => {
  return (
    <div className="container">
      <div className="contact-box">
        <div className="left"></div>
        <div className="right">
          <h2>Let's Create the About Page!</h2>
          <input type="text" className="field" placeholder="Website Name" />
          <input
            type="text"
            className="field"
            placeholder="Website Abbreviation"
          />
          <textarea
            placeholder="Please Enter A Catchphrase!"
            className="field"
          ></textarea>
          <button className="btn">Send</button>
        </div>
      </div>
    </div>
  );
};

export default AboutForm;
