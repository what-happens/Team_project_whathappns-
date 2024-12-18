import React from "react";
import PropTypes from "prop-types";
import Button from "../../../components/Button";
import styled from "styled-components";
export default function BlankOption({ choices, q_id, handleOnClick }) {
  return choices.map((choice, idx) => (
    <OptionButton key={`${q_id}-${idx}`} onClick={() => handleOnClick(choice)}>
      {choice}
    </OptionButton>
  ));
}

const OptionButton = styled(Button)`
  font-size: 2rem;
  border-radius: 1rem;
  padding: 1rem 3rem;
`;
BlankOption.propTypes = {
  choices: PropTypes.arrayOf(PropTypes.string).isRequired,
  q_id: PropTypes.number.isRequired,
  handleOnClick: PropTypes.func,
};
