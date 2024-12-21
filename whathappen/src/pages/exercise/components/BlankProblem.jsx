import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import useExercise from "../../../hooks/useExercise";
import UserChoices from "./UserChoices";
import { useSelector } from "react-redux";
import MobileUserChoices from "./MobileUserChoices";
export default function BlankProblem({ qid, isMobile }) {
  const { setIsShow, setExerciseSelectedQid } = useExercise();
  const { selectedQid } = useSelector((state) => state.exercise);
  const handleOnClickBlank = () => {
    setIsShow(true);
    setExerciseSelectedQid(qid);
  };

  return (
    <>
      <BlankButton type="button" onClick={handleOnClickBlank} />
      {isMobile
        ? selectedQid === qid && <MobileUserChoices />
        : selectedQid === qid && <UserChoices />}
    </>
  );
}

const BlankButton = styled.button`
  display: block;
  margin: 1rem;
  padding: 1rem 5rem;
  background-color: #c4c4c4;
  cursor: pointer;
  border: none;
  transition: background-color 0.3s;
  :hover {
    background-color: #dee2e6;
  }
`;

BlankProblem.propTypes = {
  qid: PropTypes.number,
  isMobile: PropTypes.isMobile,
};
