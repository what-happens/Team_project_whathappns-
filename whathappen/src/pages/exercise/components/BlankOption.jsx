import React from "react";
import PropTypes from "prop-types";
import Button from "../../../components/Button";

export default function BlankOption({ choices, q_id, handleOnClick }) {
  return choices.map((choice, idx) => (
    <Button key={`${q_id}-${idx}`} onClick={() => handleOnClick(choice)}>
      {choice}
    </Button>
  ));
}

BlankOption.propTypes = {
  choices: PropTypes.arrayOf(PropTypes.string).isRequired,
  q_id: PropTypes.number.isRequired,
  handleOnClick: PropTypes.func,
};
