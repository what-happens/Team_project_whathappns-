import QuizLanding from "./components/QuizLanding";
import Quiz from "./components/Quiz";
import QuizResult from "./components/QuizResult";
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
