import ChatbotLanding from "./ChatbotLanding";
import ChatbotMessages from "./ChatbotMessages";
import { useState } from "react";
import styled from "styled-components";

export default function Chatbot() {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep((prev) => prev + 1);
  };

  const handlePrev = () => {
    setStep(1);
  };

  return (
    <>
      <ChatbotWrapper>
        {step === 1 && <ChatbotLanding onNext={handleNext} />}
        {step === 2 && <ChatbotMessages onPrev={handlePrev} />}
      </ChatbotWrapper>
    </>
  );
}

const ChatbotWrapper = styled.div`
  position: fixed;
  bottom: 8.8rem;
  right: 2rem;
  z-index: 1000;
`;
