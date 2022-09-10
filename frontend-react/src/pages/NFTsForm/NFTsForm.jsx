import React, { useState } from "react";
import "./NFTsForm.css";

const NFTsForm = () => {
  const [image, setImage] = useState("");

  const onLoad = (fileString) => {
    setImage(fileString);
  };

  return (
    <div className="container">
      <div className="contact-box">
        <div className="left"></div>
        <div className="right">
          <h2>Let's Upload the NFTs!</h2>
          <input type="file" className="field" placeholder="Website Name" />
          <input type="text" className="field" placeholder="NFT Number" />
          <input type="text" className="field" placeholder="NFT Price" />
          <button className="btn">Finish</button>
        </div>
      </div>
    </div>
  );
};

export default NFTsForm;
