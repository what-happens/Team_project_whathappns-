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
  setIncorrectQid,
} from "../redux/exerciseSlice";

const useExercise = () => {
  const { questions, isShowAnswers, userAnswers } = useSelector(
    (state) => state.exercise
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

  const parseExercise = () => {
    dispatch(setParsed());
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
    let isComplete = true;
    const wrongQids = [];
    const answersEntries = Object.entries(userAnswers);
    if (answersEntries.length < questions.length) {
      isCorrect = false;
      isComplete = false;
      return { isCorrect, isComplete };
    }

    for (let i = 0; i < answersEntries.length; i++) {
      const [key, answer] = answersEntries[i];

      if (questions[key].answer !== answer) {
        isCorrect = false;
        wrongQids.push(parseInt(key));
      }
    }
    dispatch(setIncorrectQid(wrongQids));
    return { isCorrect, isComplete };
  };

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
