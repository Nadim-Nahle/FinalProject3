import React, { useRef } from "react";
import styled from "styled-components";
import Vector from "../Icons/Vector";

const VectorContainer = styled.div`
  position: absolute;
  top: 0.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 100%;
  overflow: hideen;
  svg {
    width: 100%;
    height: 100%;
  }
`;

const DrawSvg = () => {
  const ref = useRef(null);
  return (
    <VectorContainer>
      <Vector />
    </VectorContainer>
  );
};

export default DrawSvg;
