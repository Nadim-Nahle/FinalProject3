import React, { useState } from "react";
import "./RoadmapForm.css";
import axios from "../../api/axios";
import { useNavigate } from "react-router-dom";

const RoadmapForm = () => {
  return (
    <div className="container">
      <div className="contact-box">
        <div className="left"></div>
        <div className="right">
          <h2>Let's Create the Roadmap Page!</h2>

          <textarea
            placeholder="Please Enter Opening Details"
            className="field"
          ></textarea>
          <textarea
            placeholder="Please Enter Benifit Details"
            className="field"
          ></textarea>
          <textarea
            placeholder="Please Enter Early Access Details!"
            className="field"
          ></textarea>
          <textarea
            placeholder="Please Enter New Merch Details!"
            className="field"
          ></textarea>
          <textarea
            placeholder="Please Enter Holder Rankings Details!"
            className="field"
          ></textarea>
          <button className="btn">Next</button>
        </div>
      </div>
    </div>
  );
};

export default RoadmapForm;
