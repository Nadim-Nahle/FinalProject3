import React from "react";
import styled from "styled-components";
import img1 from "../assets/Nfts/1.svg";
import img2 from "../assets/Nfts/2.svg";
import img3 from "../assets/Nfts/3.svg";
import img4 from "../assets/Nfts/4.svg";
import img5 from "../assets/Nfts/5.svg";
import img6 from "../assets/Nfts/6.svg";
import Button from "./Button";

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

const ImgConatiner = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.2;

  img {
    width: 15rem;
    height: 15rem;
  }
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  color: ${(props) => props.theme.body};
  padding: 1rem 2rem;
  z-index: 10;
  width: 35%;
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
      <Title>
        Join The <br /> World Cup club
      </Title>
      <Button text="join now" />
    </Section>
  );
};

export default Banner;
