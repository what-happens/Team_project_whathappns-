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
  width: 100%;
  height: 429px;
  border-radius: 20px;

  ${media.large`
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 1rem;
    width: 100%;
    height: 11rem;
    border-radius: 1rem;
    gap: 1rem;
  `}

  ${media.small`
    height: 9rem;
    padding: 1.5rem 0.8rem;
    gap: 0.8rem;
  `}

  ${media.xsmall`
    height: 7rem;
    padding: 1rem 0.5rem;
    gap: 0.5rem;
  `}
`;

const StampSlot = styled.div`
  aspect-ratio: 1;
  border-radius: 1rem;
  width: 16.2rem;
  height: 16.2rem;
  background-color: var(--main-color);
  box-shadow: rgba(0, 0, 0, 0.15) 5px 5px 4px;
  @media (max-width: 1280px) {
    width: 12.2rem;
    height: 12.2rem;
  }
  @media (max-width: 1020px) {
    width: 10.2rem;
    height: 10.2rem;
  }

  ${media.large`
    max-width: 7.213rem;
    height: 7.213rem;
    border-radius: 1rem;
    margin: 0;
  `}

  ${media.small`
    max-width: 5.5rem;
    height: 5.5rem;
    border-radius: 0.8rem;
  `}

  ${media.xsmall`
    max-width: 4rem;
    height: 4rem;
    border-radius: 0.6rem;
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
