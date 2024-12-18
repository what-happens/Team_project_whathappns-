import { useDispatch, useSelector } from "react-redux";
import {
  setAnswerCode,
  setCodeString,
  setParsed,
  setQuestions,
  setSelectedQid,
} from "../redux/learnSlice";
import { ParserFactory } from "../utils/parser";
import { useEffect } from "react";

const useExercise = () => {
  const { questions, codeString } = useSelector((state) => state.learn);
  const dispatch = useDispatch();

  const setExerciseQuestions = (question) => {
    dispatch(setQuestions(question));
  };

  const setExerciseCode = (codeString) => {
    dispatch(setCodeString(codeString));
  };

  const setExerciseAnswerCode = (codeString) => {
    dispatch(setAnswerCode(codeString));
  };

  const setExerciseSelectedQid = (qid) => {
    dispatch(setSelectedQid(qid));
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
    setExerciseAnswerCode,
    setExerciseCode,
    setExerciseQuestions,
    parseExercise,
    setExerciseSelectedQid,
  };
};

export default useExercise;
