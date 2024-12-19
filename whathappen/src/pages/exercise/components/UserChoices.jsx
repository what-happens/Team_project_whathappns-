import React from "react";
import useExercise from "../../../hooks/useExercise";
import BlankOption from "./BlankOption";
import { useSelector } from "react-redux";

export default function UserChoices() {
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
    <>
      {isShowAnswers && (
        <BlankOption
          choices={selectedQuestion.choices}
          q_id={selectedQuestion.q_id}
          handleOnClick={handleOnClickBlankOption}
        />
      )}
    </>
  );
}
