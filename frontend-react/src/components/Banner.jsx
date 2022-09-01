import React from "react";
import styled from "styled-components";
import img1 from "../assets/Nfts/1.svg";
import img2 from "../assets/Nfts/2.svg";
import img3 from "../assets/Nfts/3.svg";
import img4 from "../assets/Nfts/4.svg";
import img5 from "../assets/Nfts/5.svg";
import img6 from "../assets/Nfts/6.svg";

const Section = styled.section`
  height: 25rem;
  width: 100vw;
  position: relative;
  border-top: 2px solid ${(props) => props.theme.text};
  border-top: 2px solid ${(props) => props.theme.text};

  background-color: ${(props) => `rgba(${props.theme.textRgba},0.9)`};

  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;
`;

const Banner = () => {
  return (
    <Section>
      <ImgConatiner>
        <img src={img1} alt="The Footballers" />
        <img src={img2} alt="The Footballers" />
        <img src={img3} alt="The Footballers" />
        <img src={img4} alt="The Footballers" />
        <img src={img5} alt="The Footballers" />
        <img src={img6} alt="The Footballers" />
      </ImgConatiner>
    </Section>
  );
};

export default Banner;
