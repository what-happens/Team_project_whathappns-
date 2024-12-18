import { useDispatch, useSelector } from "react-redux";
import {
  setCodeString,
  setParsed,
  setQuestions,
  setSelectedQid,
  setIsShowAnswers,
  setAnswers,
} from "../redux/learnSlice";
import { ParserFactory } from "../utils/parser";
import { useEffect } from "react";

const useExercise = () => {
  const { questions, codeString, isShowAnswers } = useSelector(
    (state) => state.learn
  );
  const dispatch = useDispatch();

  const setExerciseQuestions = (question) => {
    dispatch(setQuestions(question));
  };

  const setExerciseCode = (codeString) => {
    dispatch(setCodeString(codeString));
  };

  const setExerciseSelectedQid = (qid) => {
    dispatch(setSelectedQid(qid));
  };

  const setIsShow = (state) => {
    if (isShowAnswers === state) return;
    dispatch(setIsShowAnswers(state));
  };

  const setSelectedUserAnswer = (answer) => {
    dispatch(setAnswers(answer));
  };
  const parseExercise = async (type) => {
    const parser = ParserFactory[type];
    const parsedSegment = parser(codeString, questions);
    dispatch(setParsed(parsedSegment));
  };

  useEffect(() => {
    if (codeString !== "" && questions.length !== 0) {
      parseExercise("html");
    }
  }, [codeString, questions]);

  return {
    setExerciseCode,
    setExerciseQuestions,
    parseExercise,
    setExerciseSelectedQid,
    setIsShow,
    setSelectedUserAnswer,
  };
};

export default useExercise;
