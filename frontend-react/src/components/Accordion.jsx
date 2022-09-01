import React from "react";

const Container = styled.div`
  cursor: pointer;
  padding: 1rem 0.5rem;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${(props) => props.theme.carouselColor};
  margin: 3rem 0;
`;
const Accordion = ({ title, children }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Reveal>{children}</Reveal>
    </Container>
  );
};

export default Accordion;
