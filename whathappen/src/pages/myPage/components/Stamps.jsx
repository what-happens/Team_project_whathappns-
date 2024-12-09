import React from "react";
import styled from "styled-components";
import { media } from "../../../styles/MideaQuery";

const StampBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  background-color: var(--main-color);
  padding: 4rem 2rem 1rem 5rem;
  width: 93rem;
  height: 429px;
  border-radius: 20px;

  ${media.medium`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 1rem;
    width: 66rem;
    height: 11rem;
    border-radius: 1rem;
  `}
`;

const StampSlot = styled.div`
  aspect-ratio: 1;
  border-radius: 1rem;
  width: 16.2rem;
  height: 16.2rem;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.15) 5px 5px 4px;
  ${media.medium`
    max-width: 7.213rem;
    height: 7.213rem;
    border-radius: 1rem;
    margin: 0.9rem;
  `}
`;
const Stamps = () => {
  return (
    <StampBox>
      {[...Array(7)].map((_, index) => (
        <StampSlot key={index} filled={index < 7} />
      ))}
    </StampBox>
  );
};

export default Stamps;
