import { useDispatch, useSelector } from "react-redux";
import {
  setCodeString,
  setParsed,
  setQuestions,
  setSelectedQid,
  setIsShowAnswers,
  setAnswers,
  setType,
  setSubCode,
  setActiveTab,
} from "../redux/exerciseSlice";
import { ParserFactory } from "../utils/parser";
import { useEffect } from "react";

const useExercise = () => {
  const { questions, codeString, isShowAnswers, type, userAnswers } =
    useSelector((state) => state.exercise);

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

  const parseExercise = (type) => {
    const parser = ParserFactory[type];
    const parsedSegment = parser(codeString, questions);
    dispatch(setParsed(parsedSegment));
  };

  const setExerciseType = (type) => {
    if (type === "html" || type === "css") {
      dispatch(setType(type));
    }
  };

  const setExerciseSubcode = (codeString) => {
    if (codeString) {
      dispatch(setSubCode(codeString));
    }
  };

  const setExerciseActiveTab = (tabType) => {
    if (tabType === "html" || tabType === "css") {
      dispatch(setActiveTab(tabType));
    }
  };

  const markedUserAnswers = () => {
    let isCorrect = true;

    const answersEntries = Object.entries(userAnswers);
    if (answersEntries.length < questions.length) {
      isCorrect = false;
      return isCorrect;
    }

    for (let i = 0; i < answersEntries.length; i++) {
      const [key, answer] = answersEntries[i];

      if (questions[key].answer !== answer) {
        isCorrect = false;
        break;
      }
    }
    return isCorrect;
  };

  useEffect(() => {
    if (codeString !== "" && questions.length !== 0) {
      parseExercise(type);
    }
  }, [codeString, questions]);

  return {
    setExerciseCode,
    setExerciseQuestions,
    parseExercise,
    setExerciseSelectedQid,
    setIsShow,
    setSelectedUserAnswer,
    setExerciseType,
    setExerciseSubcode,
    setExerciseActiveTab,
    markedUserAnswers,
  };
};

export default useExercise;
