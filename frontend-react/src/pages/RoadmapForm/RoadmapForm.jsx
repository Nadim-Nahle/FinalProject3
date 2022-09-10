import React, { useState } from "react";
import "./RoadmapForm.css";
import axios from "../../api/axios";
import { useNavigate } from "react-router-dom";

const JWT = localStorage.getItem("JWT");
const ADDROADMAP_URL = "/addroadmap";

const RoadmapForm = () => {
  const [grandopening, setGrandopening] = useState("");
  const [greatbenefits, setGreatbenefits] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(JWT);
    try {
      const response = await axios.post(
        ADDROADMAP_URL,
        { grandopening, greatbenefits },
        {
          headers: { Authorization: `Bearer ${JWT}` },
        }
      );
      console.log(response);
      navigate("/roadmapform");
    } catch (err) {
      console.log(err.response.data);
    }
  };

  return (
    <div className="container">
      <div className="contact-box">
        <div className="left"></div>
        <div className="right">
          <h2>Let's Create the Roadmap Page!</h2>

          <textarea
            placeholder="Please Enter Opening Details"
            className="field"
            onChange={(e) => setGrandopening(e.target.value)}
          ></textarea>
          <textarea
            placeholder="Please Enter Benifit Details"
            className="field"
            onChange={(e) => setGreatbenefits(e.target.value)}
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
          <button className="btn" onClick={handleSubmit}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoadmapForm;
