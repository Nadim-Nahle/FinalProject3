import React from "react";
import styled from "styled-components";

const Section = styled.section`
  min-height: ${(props) => `calc(100vh - ${props.theme.navHeight})`};
  width: 100vw;
  position: relative;
  background-color: ${(props) => props.theme.navHeight});
`;

const Container = styled.div`
  width: 75%;
  min-height: 80vh;
  margin: 0 auto;
  background-color: lightblue;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Home = () => {
  return (
    <Section>
      <Container>
        <Box>
          <h1>text</h1>
        </Box>
        <Box>
          <h1>video</h1>
        </Box>
      </Container>
    </Section>
  );
};

export default Home;
