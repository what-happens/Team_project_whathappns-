import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
//문제를 props로 받아온다.
//모달은 누가 관리하는게??
export default function BlankProblem({ problem, onSelect, setIsShow }) {
  const [answer, setAnswer] = useState("");

  const handleOnClickBlank = () => {
    onSelect(problem.id);
    setIsShow(true);
  };
  console.log(answer, setAnswer, problem);
  return <BlankButton type="button" onClick={handleOnClickBlank}></BlankButton>;
}

const BlankButton = styled.button`
  margin: 2rem;
  padding: 1rem 5rem;
  background-color: #c4c4c4;
  cursor: pointer;
  border: none;
`;

BlankProblem.propTypes = {
  problem: PropTypes.shape({
    id: PropTypes.number.isRequired,
    correct_answer: PropTypes.string.isRequired,
    incorrect_answer: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
  onSelect: PropTypes.func,
  setIsShow: PropTypes.func,
};
