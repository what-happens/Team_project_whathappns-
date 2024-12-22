import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import useExercise from "../../../hooks/useExercise";
import UserChoices from "./UserChoices";
import { useSelector } from "react-redux";
import MobileUserChoices from "./MobileUserChoices";
export default function BlankProblem({ qid, isMobile }) {
  const { setIsShow, setExerciseSelectedQid } = useExercise();
  const { selectedQid, userAnswers, inCorrectQid } = useSelector(
    (state) => state.exercise
  );
  const handleOnClickBlank = () => {
    setIsShow(true);
    setExerciseSelectedQid(qid);
  };
  return (
    <>
      <BlankButton
        type="button"
        onClick={handleOnClickBlank}
        $isIncoreect={inCorrectQid.includes(qid)}
      >
        {userAnswers[qid]}
      </BlankButton>
      {isMobile
        ? selectedQid === qid && <MobileUserChoices />
        : selectedQid === qid && <UserChoices />}
    </>
  );
}

const BlankButton = styled.button`
  display: block;
  margin: 1rem;
  padding: 1rem 3rem;
  font-size: 1.6rem;
  background-color: ${(props) => (props.$isIncoreect ? "#D45656" : "#5672d4")};
  cursor: pointer;
  border: none;
  color: #fff;
  border-radius: 0.5rem;
  transition: background-color 0.3s;
`;

BlankProblem.propTypes = {
  qid: PropTypes.number,
  isMobile: PropTypes.bool,
};
