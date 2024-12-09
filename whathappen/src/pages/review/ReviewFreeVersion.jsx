import { useState } from "react";
import styled from "styled-components";
import QuizCard from "./components/ReviewFreeVersionCard";

const quiz = [
  {
    id: 0,
    category: "HTTP",
    question: "HTML은 무엇의 약자일까요?",
    correct_answer: "Hypertext Markup Language",
    incorrect_answer: [
      "Hyperlink and Text Markup Language",
      "Hypermeida Text Language",
      "High-text Markup Language",
    ],
  },
  {
    id: 1,
    category: "HTTP",
    question: "HTML은 무엇의 약자일까요?",
    correct_answer: "Hypertext Markup Language",
    incorrect_answer: [
      "Hyperlink and Text Markup Language",
      "Hypermeida Text Language",
      "High-text Markup Language",
    ],
  },
  {
    id: 2,
    category: "HTTP",
    question: "HTML은 무엇의 약자일까요?",
    correct_answer: "Hypertext Markup Language",
    incorrect_answer: [
      "Hyperlink and Text Markup Language",
      "Hypermeida Text Language",
      "High-text Markup Language",
    ],
  },
];

export default function ReviewFreeVersion() {
  const [activeTab, setActiveTab] = useState("wrong");
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleQuestionClick = (quizId) => {
    const selected = quiz.find((q) => q.id === quizId);
    setSelectedQuiz([selected]);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "2rem",
        padding: "10rem 0 0 0",
        justifyContent: "center",
      }}
    >
      <Container>
        <TapWarp>
          <TapItem
            onClick={() => handleTabClick("wrong")}
            $isActive={activeTab === "wrong"}
          >
            틀린문제
          </TapItem>
          <TapItem
            onClick={() => handleTabClick("bookmark")}
            $isActive={activeTab === "bookmark"}
          >
            북마크
          </TapItem>
          <WiteBox $isActive={activeTab === "wrong"} />
        </TapWarp>
        <QuestionContainer>
          <Scrollbar>
            {quiz.map((item) => (
              <Question
                key={item.id}
                onClick={() => handleQuestionClick(item.id)}
              >
                {item.category} 문제 {item.id + 1}
              </Question>
            ))}
          </Scrollbar>
        </QuestionContainer>
      </Container>
      {selectedQuiz && <QuizCard quizzes={selectedQuiz} />}
    </div>
  );
}

const Container = styled.div``;
const TapWarp = styled.ul`
  display: flex;
  position: relative;
  width: 45rem;
`;

const TapItem = styled.li`
  flex: 1;
  border: 1px solid var(--main-color);
  padding: 2.5rem 0;
  text-align: center;
  border-radius: 10px 10px 0 0;
  font-weight: 500;
  font-size: 18px;
  background-color: ${(props) =>
    props.$isActive ? "white" : "var(--main-color)"};
  color: ${(props) => (props.$isActive ? "var(--main-color)" : "white")};
  cursor: pointer;
`;

const WiteBox = styled.div`
  width: 22.45rem;
  height: 2px;
  background-color: white;
  position: absolute;
  bottom: -1px;
  left: ${(props) => (props.$isActive ? "0.05rem" : "22.45rem")};
  z-index: 20;
`;

const Scrollbar = styled.div`
  direction: rtl;
  overflow-y: scroll;
  padding: 2rem 3rem 2rem 3rem;
  margin: 2rem 0 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > * {
    direction: ltr;
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-button:vertical:single-button:start {
    background-color: rgb(239, 239, 239);
    height: 8px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &::-webkit-scrollbar-button:vertical:single-button:start::before {
    content: "▲";
    font-size: 10px;
    color: black;
  }

  &::-webkit-scrollbar-button:vertical:single-button:end {
    background-color: rgb(239, 239, 239);
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #8c8c8c;
  }

  &::-webkit-scrollbar-track {
    border-radius: 6px;
  }
`;

const QuestionContainer = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--main-color);
  border-radius: 0 0 20px 20px;
  z-index: 10;
  background-color: white;
  max-width: 45rem;
  height: 50rem;
  align-items: center;
`;

const Question = styled.li`
  width: 35rem;
  padding: 2rem;
  color: var(--main-color);
  font-weight: 700;
  font-size: 3rem;
  border: 1px solid var(--main-color);
  border-radius: 20px;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: var(--main-color);
    color: white;
  }
`;
