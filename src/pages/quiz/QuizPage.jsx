import QuizLanding from "../quizLanding/QuizLanding";
import Quiz from "./Quiz";
import QuizResult from "../quizResult/QuizResult";
import useQuizStep from "../../hooks/useQuizStep";

function QuizPage() {
  const { step, QuizStep } = useQuizStep();

  return (
    <>
      {step === QuizStep.LANDING && <QuizLanding />}
      {step === QuizStep.PLAYING && <Quiz />}
      {step === QuizStep.RESULT && <QuizResult />}
    </>
  );
}

export default QuizPage;
