import React from "react";
import styled from "styled-components";

const StampContents = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  background-color: var(--main-color);
  padding: 3rem 4rem;
  width: 933px;
  height: 429px;
  border-radius: 20px;
`;
const StampSlot = styled.div`
  aspect-ratio: 1;
  border-radius: 10px;
  width: 162px;
  height: 162px;
  background-color: ${(props) => (props.filled ? "white" : "transparent")};
`;
const Stamps = () => {
  return (
    <StampContents>
      {[...Array(7)].map((_, index) => (
        <StampSlot key={index} filled={index < 3} />
      ))}
    </StampContents>
  );
};

export default Stamps;
