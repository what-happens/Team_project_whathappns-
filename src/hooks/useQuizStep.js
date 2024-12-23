import { useDispatch, useSelector } from "react-redux";
import { nextStep, prevStep, resetStep } from "../redux/quizSlice";

const useQuizStep = () => {
  const dispatch = useDispatch();

  const { step, QuizStep } = useSelector((state) => state.quiz);

  const moveNext = () => {
    dispatch(nextStep()); // 다음 단계로 이동
  };

  const movePrev = () => {
    dispatch(prevStep()); // 이전 단계로 이동
  };

  const resetQuiz = () => {
    dispatch(resetStep()); // 퀴즈 단계 초기화
  };

  return {
    step,
    moveNext,
    movePrev,
    resetQuiz,
    QuizStep,
  };
};

export default useQuizStep;
