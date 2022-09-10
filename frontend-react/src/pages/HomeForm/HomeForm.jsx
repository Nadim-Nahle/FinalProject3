import React from "react";
import { useState } from "react";
import axios from "../../api/axios";
import "./HomeForm.css";

const ADDHOME_URL = "/addhome";

const HomeForm = () => {
  const [name, setName] = useState("");
  const [logo, setLogo] = useState("");
  const [catchphrase, setCatchphrase] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(ADDHOME_URL, {
        name,
        logo,
        catchphrase,
      });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <div className="contact-box">
        <div className="left"></div>
        <div className="right">
          <h2>Let's Create the Home Page!</h2>
          <input
            type="text"
            className="field"
            placeholder="Website Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            className="field"
            placeholder="Website Abbreviation"
            onChange={(e) => setLogo(e.target.value)}
          />
          <textarea
            placeholder="Please Enter A Catchphrase!"
            className="field"
            onChange={(e) => setCatchphrase(e.target.value)}
          ></textarea>
          <button className="btn" onClick={handleSubmit}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeForm;
