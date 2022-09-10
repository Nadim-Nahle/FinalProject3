import React, { useState } from "react";
import "./AboutForm.css";
import axios from "../../api/axios";
import { useNavigate } from "react-router-dom";

const ADDABOUT_URL = "/addabout";
const JWT = localStorage.getItem("JWT");

const AboutForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [details, setDetails] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(JWT);
    try {
      const response = await axios.post(
        ADDABOUT_URL,
        { title, description, details },
        {
          headers: { Authorization: `Bearer ${JWT}` },
        }
      );
      console.log(response);
      navigate("/aboutform");
    } catch (err) {
      console.log(err.response.data);
    }
  };

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
            onChange={(e) => setDetails(e.target.value)}
          ></textarea>
          <button className="btn" onClick={handleSubmit}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutForm;
