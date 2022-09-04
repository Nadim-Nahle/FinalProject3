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
import MyConfetti from "../MyConfetti";

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

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;
const Container = styled.div`
  width: 75%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 64em) {
    width: 80%;
  }
  @media (max-width: 48em) {
    width: 90%;
    justify-content: center;
  }
`;
const ImageContainer = styled.div`
  width: 15rem;
  margin: 0 1rem;
  background-color: ${(props) => props.theme.carouselColor};

  border: 1px solid ${(props) => props.theme.text};
  border-radius: 20px;
  cursor: pointer;

  img {
    width: 100%;
    height: 15rem;
  }
`;

const Item = styled.div`
  width: calc() (20rem- 4vw);
  padding: 1rem 0;
  color: ${(props) => props.theme.body};
  margin: 2rem 1rem;
  position: relative;
  z-index: 5;

  border: 2px solid ${(props) => props.theme.text};
  border-radius: 20px;
  backdrop-filter: blue(4px);

  &:hover {
    img {
      transform: translateY(-2rem) scale(1.2);
      transition: all 0.3 ease;
    }
  }

  @media (max-width: 64em) {
    width: 70vw;
  }
`;

const Name = styled.h2`
  font-size: ${(props) => props.theme.fontlg};
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  color: ${(props) => props.theme.text};
  margin: 1rem;
`;
const Position = styled.h2`
  font-size: ${(props) => props.theme.fontmd};
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
  color: ${(props) => `rgba(${props.theme.textRgba},0.9)`};
  font-weight: 400;
`;

const MemberComponent = ({ img, name = " ", position = " " }) => {
  return (
    <Item>
      <ImageContainer>
        <img src={img} alt={name} />
      </ImageContainer>
      <Name>{name}</Name>
      <Position>{position}</Position>
    </Item>
  );
};
const Team = () => {
  return (
    <Section id="team">
      <MyConfetti />
      <Title>Team</Title>
      <Container>
        <MemberComponent img={img1} name={"Jhon"} position="Founder" />
        <MemberComponent img={img2} name={"Jane"} position="Co-founder" />
        <MemberComponent img={img3} name={"Anonymous"} position="Director" />
        <MemberComponent img={img4} name={"Anonymous"} position="Manager" />
        <MemberComponent img={img5} name={"Anonymous"} position="Artist" />
        <MemberComponent img={img6} name={"Anonymous"} position="Developer" />
        <MemberComponent img={img7} name={"Anonymous"} position="Designer" />
        <MemberComponent img={img8} name={"Anonymous"} position="Developer" />
        <MemberComponent
          img={img9}
          name={"Anonymous"}
          position="Blockchain expert"
        />
      </Container>
    </Section>
  );
};

export default Team;
