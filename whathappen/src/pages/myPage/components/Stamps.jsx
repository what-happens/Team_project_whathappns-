import React from "react";
import styled from "styled-components";
import { media } from "../../../styles/MideaQuery";

const StampBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 2rem;
  box-shadow:
    rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  background-color: white;
  padding: 4rem 2rem 1rem 5rem;
  width: 100rem;
  height: 429px;
  border-radius: 20px;

  ${media.medium`
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 1rem;
    width: 66rem;
    height: 11rem;
    border-radius: 1rem;
    gap: 1rem;
  `}
`;

const StampSlot = styled.div`
  aspect-ratio: 1;
  border-radius: 1rem;
  width: 16.2rem;
  height: 16.2rem;
  background-color: var(--main-color);
  box-shadow: rgba(0, 0, 0, 0.15) 5px 5px 4px;

  ${media.medium`
    max-width: 7.213rem;
    height: 7.213rem;
    border-radius: 1rem;
    margin: 0;
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
