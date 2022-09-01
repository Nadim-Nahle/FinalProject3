import React from "react";
import styled from "styled-components";

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

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.body};
  position: relative;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.text};
  width: fit-content;
`;
const Container = styled.div`
  width: 75%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;
const ImageContainer = styled.div`
  width: 15rem;
  margin: 0 1rem;
  background-color: ${(props) => props.theme.body};
  height: 100%;
  border-radius: 20px;
  cursor: pointer;

  img {
    width: 100%;
    height: 15rem;
  }
`;

const MemberComponent = ({ img, name = " ", position = " " }) => {
  return (
    <Item>
      <ImageContainer>
        <img src="" alt={name} />
      </ImageContainer>
    </Item>
  );
};
const Team = () => {
  return (
    <Section>
      <Title>Team</Title>
      <Container>
        <div>member 1</div>
        <div>member 1</div>
        <div>member 1</div>
        <div>member 1</div>
        <div>member 1</div>
        <div>member 1</div>
        <div>member 1</div>
        <div>member 1</div>
        <div>member 1</div>
      </Container>
    </Section>
  );
};

export default Team;
