import { useDispatch, useSelector } from "react-redux";
import { nextStep, prevStep, resetStep } from "../redux/quizSlice";

const useQuizStep = () => {
  const dispatch = useDispatch();
  const step = useSelector((state) => state.quiz.step); // quiz 슬라이스에서 step 상태를 가져옵니다.
  const QuizStep = useSelector((state) => state.quiz.QuizStep);

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
