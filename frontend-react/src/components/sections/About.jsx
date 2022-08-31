import React from "react";
import styled from "styled-components";
import Button from "../Button";
import Carousel from "../Carousel";

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.text};
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  width: 75%;
  margin: 0 auto;

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

const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};
  align-self: flex-start;
  width: 80%;
  margin 0 auto;
`;
const About = () => {
  return (
    <Section>
      <Container>
        <Box>
          <Carousel />
        </Box>
        <Box>
          <Title>Welcome To The World Cup Club.</Title>
          <SubText>
            The World Cup CLUB is a private collection of NFTs—unique digital
            collectibles. The Footballers are stored as ERC-721 tokens on the
            Ethereum blockchain and hosted on IPFS.
          </SubText>
          <SubTextLight>
            With more than 200+ hand drawn traits, each NFT is unique and comes
            with a membership to an exclusive group of successful investors.
            Join an ambitious ever-growing community with multiple benefits and
            utilities.
          </SubTextLight>
          <Button text="Join Our Discord" link="#" />
        </Box>
      </Container>
    </Section>
  );
};

export default About;
