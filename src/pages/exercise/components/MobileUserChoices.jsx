import React from "react";
import useExercise from "../../../hooks/useExercise";
import BlankOption from "./BlankOption";
import { useSelector } from "react-redux";
import styled from "styled-components";

export default function MobileUserChoices() {
  const { selectedQid, questions } = useSelector((state) => state.exercise);
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
    <OptionSection>
      <h3>{selectedQuestion.q_title}</h3>
      <BlankOption
        choices={selectedQuestion.choices}
        q_id={selectedQuestion.q_id}
        handleOnClick={handleOnClickBlankOption}
      />
    </OptionSection>
  );
}

const OptionSection = styled.section`
  width: 100%;
  height: auto;
  padding: 2rem 0;
`;
