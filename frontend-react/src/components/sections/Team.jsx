import React from "react";
import styled from "styled-components";

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
