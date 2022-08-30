import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LogoText = styled.h1`
  font-family: "Akaya Telivigala", cursive;
  font-size: ${(props) => props.theme.fontxxx1};
  color: ${(props) => props.theme.text};
`;

const Logo = () => {
  return (
    <LogoText>
      <Link to="/">W.</Link>{" "}
    </LogoText>
  );
};

export default Logo;
