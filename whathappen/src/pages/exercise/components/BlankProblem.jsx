import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import useExercise from "../../../hooks/useExercise";

export default function BlankProblem({ qid }) {
  const { setIsShow, setExerciseSelectedQid } = useExercise();
  const handleOnClickBlank = () => {
    setIsShow(true);
    setExerciseSelectedQid(qid);
  };

  return <BlankButton type="button" onClick={handleOnClickBlank}></BlankButton>;
}

const BlankButton = styled.button`
  display: block;
  margin: 2rem;
  padding: 1rem 5rem;
  background-color: #c4c4c4;
  cursor: pointer;
  border: none;
`;

BlankProblem.propTypes = {
  qid: PropTypes.number,
};
