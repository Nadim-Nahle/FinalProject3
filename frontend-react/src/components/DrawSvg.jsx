import React from "react";
import styled from "styled-components";

const VectorContainer = styled.div`
  position: absolute;
  top: 0.5rem;
  left: 50%;
  transform: translate(-50%);
  width: 100%;
  height: 100%;
  overflow: hideen;

  svg{
    width:100%
    height:100%;
  }
`;

const DrawSvg = () => {
  return <VectorContainer>DrawSvg</VectorContainer>;
};

export default DrawSvg;
