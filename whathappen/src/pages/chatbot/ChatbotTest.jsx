import ChatbotLanding from "./ChatbotLanding";
import ChatbotMessages from "./ChatbotMessages";
import { useState } from "react";

export default function ChatbotTest() {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep((prev) => prev + 1);
  };

  const handlePrev = () => {
    setStep(1);
  };

  return (
    <>
      {step === 1 && <ChatbotLanding onNext={handleNext} />}
      {step === 2 && <ChatbotMessages onPrev={handlePrev} />}
    </>
  );
}
