import React from "react";
import styled, { keyframes } from "styled-components";

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
  background-color: lightblue;
  white-space: nowrap;
  box-sizing: content-box;
  margin: 2rem 0;
  display: flex;

  animation: ${move} 20s linear infinite ${(props) => props.direction};
  div {
    width: 5rem;
    height: 5rem;
    margin: 2rem;
    background-color: red;
  }
`;

const NftItem = ({ img, number, price }) => {
  return (
    <ImgContainer>
      <img src="" alt="World Cup" />
    </ImgContainer>
  );
};

const Showcase = () => {
  return (
    <Section>
      <Row direction="none">
        <div>item 1</div>
        <div>item 2</div>
        <div>item 3</div>
        <div>item 4</div>
        <div>item 5</div>
        <div>item 6</div>
      </Row>
      <Row direction="reverse">
        <div>item 1</div>
        <div>item 2</div>
        <div>item 3</div>
        <div>item 4</div>
        <div>item 5</div>
        <div>item 6</div>
      </Row>
    </Section>
  );
};

export default Showcase;
