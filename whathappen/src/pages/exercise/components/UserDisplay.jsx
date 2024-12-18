import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import useExercise from "../../../hooks/useExercise";
import BlankOption from "./BlankOption";
import { useSelector } from "react-redux";

export default function UserDisplay({ height }) {
  const { selectedQid, questions, isShowAnswers } = useSelector(
    (state) => state.learn
  );
  const { setIsShow, setSelectedUserAnswer, setExerciseSelectedQid } =
    useExercise();
  const handleOnClickBlankOption = (answer) => {
    setIsShow(false);
    setSelectedUserAnswer(answer);
    setExerciseSelectedQid(null);
  };

  const selectedQuestion = questions.find(
    (question) => question.q_id === selectedQid
  );

  return (
    <UserDisplayContainer $height={height}>
      {isShowAnswers && (
        <BlankOption
          choices={selectedQuestion.choices}
          q_id={selectedQuestion.q_id}
          handleOnClick={handleOnClickBlankOption}
        />
      )}
    </UserDisplayContainer>
  );
}

const UserDisplayContainer = styled.section`
  width: 100%;
  height: ${(props) => props.$height}%;
  border: 1px solid var(--main-color);
  border-radius: 0 0 20px 0px;
`;

UserDisplay.propTypes = {
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
