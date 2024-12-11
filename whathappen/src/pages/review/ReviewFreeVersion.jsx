import { useState } from "react";
import styled from "styled-components";
import QuizCard from "./components/ReviewFreeVersionCard";
import { media } from "../../styles/MideaQuery";

const reviewNote = [
  {
    qid: 10,
    updateAt: {
      _seconds: 1733831880,
      _nanoseconds: 101000000,
    },
    isBookmark: false,
    isWrong: true,
    category: "HTML",
  },
  {
    qid: 12,
    updateAt: {
      _seconds: 1733821132,
      _nanoseconds: 385000000,
    },
    isBookmark: true,
    isWrong: true,
    category: "HTML",
  },
  {
    qid: 1,
    updateAt: {
      _seconds: 1733821132,
      _nanoseconds: 385000000,
    },
    isBookmark: true,
    isWrong: true,
    category: "HTML",
  },
];

const quiz = [
  {
    category: "HTML",
    question: "HTML은 무엇의 약자일까요?",
    correct_answer: "Hypertext Markup Language",
    incorrect_answer: [
      "Hyperlink and Text Markup Language",
      "Hypermeida Text Language",
      "High-text Markup Language",
    ],
    id: 10,
  },
  {
    category: "CSS",
    question: "요소를 화면에서 숨기는 display 속성값은 무엇인가요?",
    correct_answer: "none",
    incorrect_answer: ["hidden", "invisible", "hide"],
    id: 12,
  },
  {
    category: "HTML",
    question: "표를 만들 때 사용하는 기본 태그는 무엇인가요?",
    correct_answer: "table",
    incorrect_answer: ["tab", "grid", "tr"],
    id: 1,
  },
];

export default function ReviewFreeVersion() {
  const [activeTab, setActiveTab] = useState("wrong");
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setSelectedQuiz(null);
  };

  const handleQuestionClick = (quizId) => {
    const matchedQuiz = quiz.find((q) => q.id === quizId);

    if (matchedQuiz) {
      setSelectedQuiz([matchedQuiz]);
    }
  };

  return (
    <Container>
      <Warp>
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
            {reviewNote
              .filter((item) =>
                activeTab === "bookmark" ? item.isBookmark : item.isWrong
              )
              .map((item) => (
                <Question
                  key={item.qid}
                  onClick={() => handleQuestionClick(item.qid)}
                >
                  {item.category} 문제 {item.qid}
                </Question>
              ))}
          </Scrollbar>
        </QuestionContainer>
      </Warp>
      {selectedQuiz && <QuizCard quizzes={selectedQuiz} />}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  padding: 10rem 2rem 0;
  justify-content: center;
  width: 100%;
  max-width: 120rem;
  margin: 0 auto;

  ${media.large`
   flex-direction: column;
   align-items: center;
   padding: 5rem 2rem 0;
   max-width: 100%;
 `}
`;

const Warp = styled.div`
  width: 100%;
  max-width: 45rem;

  ${media.large`
   width: 100%;
   max-width: 100%;
 `}
`;

const TapWarp = styled.ul`
  display: flex;
  position: relative;
  width: 100%;
`;

const TapItem = styled.li`
  flex: 1;
  border: 1px solid var(--main-color);
  padding: 2.5rem 0;
  text-align: center;
  border-radius: 1rem 1rem 0 0;
  font-weight: 500;
  font-size: 1.8rem;
  background-color: ${(props) =>
    props.$isActive ? "white" : "var(--main-color)"};
  color: ${(props) => (props.$isActive ? "var(--main-color)" : "white")};
  cursor: pointer;

  ${media.large`
   padding: 2rem 0;
   font-size: 1.6rem;
 `}
`;

const WiteBox = styled.div`
  width: 49.7%;
  height: 2px;
  background-color: white;
  position: absolute;
  bottom: -1px;
  left: ${(props) => (props.$isActive ? "0.05rem" : "50%")};
  z-index: 20;
`;

const QuestionContainer = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--main-color);
  border-radius: 0 0 20px 20px;
  z-index: 10;
  background-color: white;
  width: 100%;
  height: 53rem;
  align-items: center;

  ${media.large`
   height: 33rem;
   width: 100%;
 `}
`;

const Scrollbar = styled.div`
  direction: rtl;
  overflow-y: scroll;
  padding: 2rem 3rem;
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  ${media.large`
   padding: 2rem 1.5rem;
 `}

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

const Question = styled.li`
  width: 100%;
  padding: 2rem;
  color: var(--main-color);
  font-weight: 700;
  font-size: 3rem;
  border: 1px solid var(--main-color);
  border-radius: 20px;
  text-align: center;
  cursor: pointer;

  ${media.large`
   font-size: 2.4rem;
   padding: 1.5rem;
 `}

  &:hover {
    background-color: var(--main-color);
    color: white;
  }
`;
