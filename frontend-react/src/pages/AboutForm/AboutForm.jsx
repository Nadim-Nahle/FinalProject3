import React, { useState } from "react";
import "./AboutForm.css";

const ADDABOUT_URL = "/addabout";

const AboutForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [details, setDetails] = useState("");
  return (
    <div className="container">
      <div className="contact-box">
        <div className="left"></div>
        <div className="right">
          <h2>Let's Create the About Page!</h2>
          <input
            type="text"
            className="field"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            placeholder="Please Enter A Description!"
            className="field"
            onChange={(e) => setDescription(e.target.value)}
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
