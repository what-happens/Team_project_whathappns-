import { useState } from "react";
import QuizLanding from "../quizLanding/QuizLanding";
import Quiz from "./Quiz";
import QuizResult from "../quizResult/QuizResult";

function QuizPage() {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep((prev) => prev + 1);
  };

  return (
    <div>
      {step === 1 && <QuizLanding onNext={handleNext} />}
      {step === 2 && <Quiz onNext={handleNext} />}{" "}
      {step === 3 && <QuizResult />}
    </div>
  );
}

export default QuizPage;
