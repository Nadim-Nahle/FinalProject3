import React from "react";
import "./HomeForm.css";

const ADDHOME_URL = "/addhome";

const HomeForm = () => {
  return (
    <div className="container">
      <div className="contact-box">
        <div className="left"></div>
        <div className="right">
          <h2>Let's Create the Home Page!</h2>
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
          <button className="btn">Next</button>
        </div>
      </div>
    </div>
  );
};

export default HomeForm;
