import React from "react";
import styled, { keyframes } from "styled-components";

import img1 from "../../assets/Nfts/1.svg";
import img2 from "../../assets/Nfts/2.svg";
import img3 from "../../assets/Nfts/3.svg";
import img4 from "../../assets/Nfts/4.svg";
import img5 from "../../assets/Nfts/5.svg";
import img6 from "../../assets/Nfts/6.svg";
import img7 from "../../assets/Nfts/7.svg";
import img8 from "../../assets/Nfts/8.svg";
import img9 from "../../assets/Nfts/9.svg";
import img10 from "../../assets/Nfts/10.svg";
import img11 from "../../assets/Nfts/11.svg";
import img12 from "../../assets/Nfts/12.svg";
import img13 from "../../assets/Nfts/13.svg";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.text};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const move = keyframes`
  
  0%{ transform: translateX(100%)  };
  100%{ transform: translateX(-100%)}
`;
const Row = styled.div`
  white-space: nowrap;
  box-sizing: content-box;
  margin: 2rem 0;
  display: flex;

  animation: ${move} 20s linear infinite ${(props) => props.direction};
`;

const ImgContainer = styled.div`
  width: 15rem;
  margin: 0 1rem;
  background-color: ${(props) => props.theme.body};
  height: 50%;
  border-radius: 20px;
  cursor: pointer;

  img {
    width: 100%;
    height: 10rem;
  }
`;

const NftItem = ({ img, number = 0, price = 0 }) => {
  return (
    <ImgContainer>
      <img src={img} alt="World Cup" />
    </ImgContainer>
  );
};

const Showcase = () => {
  return (
    <Section>
      <Row direction="none">
        <NftItem img={img1} />
        <NftItem img={img2} />
        <NftItem img={img3} />
        <NftItem img={img4} />
        <NftItem img={img5} />
      </Row>
      <Row direction="reverse">
        <NftItem img={img1} />
        <NftItem img={img2} />
        <NftItem img={img3} />
        <NftItem img={img4} />
        <NftItem img={img5} />
      </Row>
    </Section>
  );
};

export default Showcase;
