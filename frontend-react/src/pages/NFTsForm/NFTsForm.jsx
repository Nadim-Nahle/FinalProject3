import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import "./NFTsForm.css";

const ADDNFT_URL = "/addnft";
const JWT = localStorage.getItem("JWT");

const NFTsForm = () => {
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [number, setNumber] = useState("");

  const onLoad = (fileString) => {
    setImage(fileString);
  };

  const getBased64 = (file) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      onLoad(reader.result);
    };
  };

  const uploadImage = (e) => {
    const files = e.target.files;
    const file = files[0];
    getBased64(file);
  };

  const navigate = useNavigate();

  const handleFinish = async (event) => {
    event.preventDefault();
    console.log(JWT);
    try {
      const response = await axios.post(
        ADDNFT_URL,
        { picture: image, number, price },
        {
          headers: { Authorization: `Bearer ${JWT}` },
        }
      );
      console.log(response.data);
      navigate("/");
    } catch (err) {
      console.log(err.response.data);
    }
  };
  const handleNewNFT = async (event) => {
    event.preventDefault();
    console.log(JWT);
    try {
      const response = await axios.post(
        ADDNFT_URL,
        { picture: image, number, price },
        {
          headers: { Authorization: `Bearer ${JWT}` },
        }
      );
      console.log(response.data);
    } catch (err) {
      console.log(err.response.data);
    }
  };

  return (
    <div className="container">
      <div className="contact-box">
        <div className="left"></div>
        <div className="right">
          <h2>Let's Upload the NFTs!</h2>
          <input
            type="file"
            className="field"
            placeholder="Website Name"
            onChange={uploadImage}
          />
          <input
            type="text"
            className="field"
            placeholder="NFT Number"
            onChange={(e) => setNumber(e.target.value)}
          />
          <input
            type="text"
            className="field"
            placeholder="NFT Price"
            onChange={(e) => setPrice(e.target.value)}
          />
          <button className="btn-blue" onClick={handleNewNFT}>
            Add Another NFT
          </button>
          <button className="btn" onClick={handleFinish}>
            Finish
          </button>
        </div>
      </div>
    </div>
  );
};

export default NFTsForm;
