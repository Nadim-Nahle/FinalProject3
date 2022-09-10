import React, { useEffect, useState } from "react";
import "./FaqForm.css";
import axios from "../../api/axios";
import { useNavigate } from "react-router-dom";

const JWT = localStorage.getItem("JWT");
const ADDFAQ_URL = "/addfaq";

const FaqForm = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const navigate = useNavigate();

  const handleNext = async (event) => {
    event.preventDefault();
    console.log(JWT);
    try {
      const response = await axios.post(
        ADDFAQ_URL,
        { question, answer },
        {
          headers: { Authorization: `Bearer ${JWT}` },
        }
      );
      console.log(response);
    } catch (err) {
      console.log(err.response.data);
    }
  };
  const handleNewQuestion = async (event) => {
    event.preventDefault();
    console.log(JWT);
    try {
      const response = await axios.post(
        ADDFAQ_URL,
        { question, answer },
        {
          headers: { Authorization: `Bearer ${JWT}` },
        }
      );
      setQuestion("");
      setAnswer("");
      console.log(response);
    } catch (err) {
      console.log(err.response.data);
    }
  };

  return (
    <div className="container">
      <div className="contact-box">
        <div className="left"></div>
        <div className="right">
          <h2>Let's Create the Faq Page!</h2>

          <textarea
            placeholder="Please Enter A Question!"
            className="field"
            onChange={(e) => setQuestion(e.target.value)}
            value={question}
          ></textarea>
          <textarea
            placeholder="Please Enter The Answer"
            className="field"
            onChange={(e) => setAnswer(e.target.value)}
            value={answer}
          ></textarea>
          <button className="btn-blue" onClick={handleNewQuestion}>
            Add Another Question
          </button>
          <button className="btn" onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default FaqForm;
