import { useState } from "react";
import QuizLanding from "../quizLanding/QuizLanding";
import QuizResult from "../quizResult/QuizResult";
import Quiz from "./Quiz";

function QuizPage() {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep((prev) => prev + 1); // step을 1 증가시키는 함수
  };

  return (
    <div>
      {step === 1 && <QuizLanding onNext={handleNext} />}
      {step === 2 && <Quiz onNext={handleNext} />}{" "}
      {/* Quiz 컴포넌트에 onNext 전달 */}
      {step === 3 && <QuizResult />}
    </div>
  );
}

export default QuizPage;
