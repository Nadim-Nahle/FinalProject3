import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";

const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxx1};
  text-transform: capitalize;
`;
const TypeWriterText = () => {
  return (
    <Title>
      Discover a new era of cool
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString("NFTs.")
            .pauseFor(2000)
            .deleteAll()
            .typeString("Collectible Items.")
            .pauseFor(2000)
            .deleteAll()
            .typeString("Ape Killers!")
            .pauseFor(2000)
            .deleteAll()
            .start();
        }}
      />
    </Title>
  );
};

export default TypeWriterText;
