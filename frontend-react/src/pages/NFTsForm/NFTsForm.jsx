import React, { useState } from "react";
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
          <input type="text" className="field" placeholder="NFT Number" />
          <input type="text" className="field" placeholder="NFT Price" />
          <button className="btn">Finish</button>
        </div>
      </div>
    </div>
  );
};

export default NFTsForm;
