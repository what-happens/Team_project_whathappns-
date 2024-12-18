import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import QuizCard from "./components/ReviewFreeVersionCard";
import { media } from "../../styles/MideaQuery";
import potato from "../../assets/hat-potato-img.svg";
import { Link } from "react-router-dom";
import loadingImg from "../../assets/loading_Img.svg";
import backGround from "../../assets/review-background-2.svg";

export default function ReviewFreeVersion() {
  const [activeTab, setActiveTab] = useState("wrong");
  const [selectedQuizId, setSelectedQuizId] = useState(null);
  const [selectedQuizCategory, setSelectedQuizCategory] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [, setError] = useState(null);
  const [reviewData, setReviewData] = useState([]);

  useEffect(() => {
    const fetchReviewData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/review`,
          {
            method: "GET",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setReviewData(data.reviewNote);
        } else {
          const errorData = await response.json();
          setError("복습노트를 불러오는데 실패했습니다");
          console.error("Error:", errorData);
        }
      } catch (error) {
        setError("서버 통신 중 오류가 발생했습니다");
        console.error("Error:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviewData();
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setSelectedQuizId(null);
  };

  const handleQuestionClick = (quiz) => {
    setSelectedQuizId(quiz.qid);
    setSelectedQuizCategory(quiz.category);
  };

  return (
    <>
      <Container>
        {isLoading && (
          <>
            <LoadingImg />
            <LoadingText>Loading....</LoadingText>
            <LoadingPage></LoadingPage>
          </>
        )}
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
              {!reviewData || reviewData.length === 0 ? (
                <NullData>
                  <Potato />
                  복습노트가 비어있습니다 ㅠㅠ
                  <StyledLink to="/quizpage">
                    <GoQuiz>퀴즈 풀러가기!</GoQuiz>
                  </StyledLink>
                </NullData>
              ) : (
                <>
                  {reviewData
                    .filter((item) => {
                      const filtered =
                        activeTab === "bookmark"
                          ? item.isBookmark
                          : item.isWrong;
                      return filtered;
                    })
                    .map((item) => {
                      return (
                        <Question
                          key={item.qid}
                          onClick={() => handleQuestionClick(item)}
                        >
                          {item.category} 문제 {item.qid}
                        </Question>
                      );
                    })}
                </>
              )}
            </Scrollbar>
          </QuestionContainer>
        </Warp>
        {selectedQuizId && (
          <QuizCard
            quizCategory={selectedQuizCategory}
            quizId={selectedQuizId}
            activeTab={activeTab}
            reviewData={reviewData}
          />
        )}
      </Container>
      <Background />
    </>
  );
}

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  z-index: -999;
  background-image: url(${backGround});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${media.medium`
    background-size: cover; 
    height: 100%; 
  `}

  ${media.small`
    background-size: cover; 
    height: 100%; 
    min-height:100vh;
  `}
`;
const LoadingPage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 20;
`;

const roll = keyframes`
  0% {

            transform: rotate(0);
  }
  100% {
            transform: rotate(360deg);
  }
`;

const LoadingImg = styled.div`
  background-image: url(${loadingImg});
  position: absolute;
  top: 33%;
  left: 45%;
  width: 15rem;
  height: 15rem;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  transform-origin: center center;
  animation: ${roll} 0.8s linear infinite;
  z-index: 30;
  ${media.small`
    left: 38%;
  `}
  ${media.medium`
    left: 41%;
  `}
  ${media.xsmall`
    left: 30%;
  `}
`;
const LoadingText = styled.p`
  position: absolute;
  top: 52%;
  left: 43%;
  font-weight: 700;
  font-size: 5rem;
  z-index: 30;
  ${media.small`
    left: 30%;
  `}
  ${media.medium`
    left: 35%;
  `}
  ${media.xsmall`
    left: 15%;
  `}
`;

const vibrate = keyframes`
  0% {
    -webkit-transform: translate(0);
            transform: translate(0);
  }
  20% {
    -webkit-transform: translate(-2px, 2px);
            transform: translate(-2px, 2px);
  }
  40% {
    -webkit-transform: translate(-2px, -2px);
            transform: translate(-2px, -2px);
  }
  60% {
    -webkit-transform: translate(2px, 2px);
            transform: translate(2px, 2px);
  }
  80% {
    -webkit-transform: translate(2px, -2px);
            transform: translate(2px, -2px);
  }
  100% {
    -webkit-transform: translate(0);
            transform: translate(0);
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const GoQuiz = styled.div`
  padding: 2rem;
  color: white;
  background-color: var(--main-color);
  text-decoration: none;
`;

const Potato = styled.div`
  margin-top: 1rem;
  width: 19rem;
  height: 15rem;
  background-image: url(${potato});
  background-size: cover;
  background-repeat: no-repeat;
  animation: ${vibrate} 0.3s linear infinite both;
`;

const NullData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  color: var(--main-color);
  gap: 5rem;
`;

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
  z-index: 15;
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
