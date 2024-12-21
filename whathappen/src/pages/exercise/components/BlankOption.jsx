import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { media } from "../../../styles/MideaQuery";
export default function BlankOption({ choices, q_id, handleOnClick }) {
  return (
    <OptionWrapper>
      {choices.map((choice, idx) => (
        <OptionButton
          key={`${q_id}-${idx}`}
          onClick={() => handleOnClick(choice)}
        >
          {choice}
        </OptionButton>
      ))}
    </OptionWrapper>
  );
}

const OptionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1rem;
`;

const OptionButton = styled.button`
  font-size: 1.6rem;
  border-radius: 1rem;
  padding: 1rem 2rem;
  background-color: #2e5dfe;
  color: #fff;
  font-family: "Gmarket Sans";
  border: none;
  ${media.medium`
    font-size: 1.4rem
  `}
`;
BlankOption.propTypes = {
  choices: PropTypes.arrayOf(PropTypes.string).isRequired,
  q_id: PropTypes.number.isRequired,
  handleOnClick: PropTypes.func,
};
