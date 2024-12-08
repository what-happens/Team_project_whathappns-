import React from "react";
import styled from "styled-components";
import { media } from "../../../styles/MideaQuery";

const StampContents = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  background-color: var(--main-color);
  padding: 3rem 4rem;
  width: 933px;
  height: 429px;
  border-radius: 20px;

  ${media.medium`
    grid-template-columns: repeat(7, 1fr);
    width: 100%;
  
    height: 11rem;
    border-radius: 1rem
  `}
`;
const StampSlot = styled.div`
  aspect-ratio: 1;
  border-radius: 1rem;
  width: 16.2rem;
  height: 16.2rem;
  background-color: white;
  ${media.medium`
    width: 7.213rem;
    height: 7.213rem;
    border-radius: 1rem;
  `}
`;
const Stamps = () => {
  return (
    <StampContents>
      {[...Array(7)].map((_, index) => (
        <StampSlot key={index} filled={index < 7} />
      ))}
    </StampContents>
  );
};

export default Stamps;
