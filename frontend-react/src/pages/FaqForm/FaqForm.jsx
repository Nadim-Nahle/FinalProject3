import React from "react";
import "./FaqForm.css";
import axios from "../../api/axios";
import { useNavigate } from "react-router-dom";

const JWT = localStorage.getItem("JWT");

const FaqForm = () => {
  return (
    <div className="container">
      <div className="contact-box">
        <div className="left"></div>
        <div className="right">
          <h2>Let's Create the Faq Page!</h2>

          <textarea
            placeholder="Please Enter A Question!"
            className="field"
          ></textarea>
          <textarea
            placeholder="Please Enter The Answer"
            className="field"
          ></textarea>
          <button className="btn-blue">Add Another Question</button>
          <button className="btn">Next</button>
        </div>
      </div>
    </div>
  );
};

export default FaqForm;
