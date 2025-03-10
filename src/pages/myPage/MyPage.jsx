import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Stamps from "./components/Stamps";
import DeleteConfirmModal from "./components/DeleteConfirmModal";
import { media } from "../../styles/MideaQuery";
import backGround from "../../assets/review-background-2.svg";
import loadingImg from "../../assets/loading_Img.svg";
import stageData from "../../data/stageMeta.json";

export default function MyPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const calculateProgress = (clearStages, totalLevels) => {
    const completedLevels = clearStages.reduce((sum, stage) => {
      return sum + stage.levels.length;
    }, 0);

    return (completedLevels / totalLevels) * 100;
  };

  useEffect(() => {
    const fetchUserData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/mypage`,
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
          setUserData(data.user);
        } else {
          const errorData = await response.json();
          console.error("Error:", errorData);
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleDeleteUser = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/user/delete`,
        {
          method: "DELETE",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        window.location.href = "/";
      } else {
        const errorData = await response.json();
        console.error("Error:", errorData);
      }
    } catch (error) {
      console.error("Error:", error);
    }
    setShowDeleteModal(false);
  };

  return (
    <Background>
      {isLoading && (
        <>
          <LoadingImg />
          <LoadingText>Loading....</LoadingText>
          <LoadingPage></LoadingPage>
        </>
      )}
      {!isLoading && userData && (
        <MyPageContents>
          <header>
            <h1 className="sr-only">마이페이지</h1>
            <GreetingMsg>
              <span className="greetings">안녕하세요, </span>
              <br />
              <span style={{ color: "white" }}>{userData.name} 고객님!</span>
            </GreetingMsg>
          </header>
          <StatusContents>
            <h2 className="sr-only">학습 현황</h2>
            <StatusBox>
              <StatusVal>{userData.clearStages.length}</StatusVal>
              <StatusLabel>스테이지</StatusLabel>
            </StatusBox>
            <Division />
            <StatusBox>
              <StatusVal> {userData.quizTime}</StatusVal>
              <StatusLabel>퀴즈풀이</StatusLabel>
            </StatusBox>
            <Division />
            <StatusBox>
              <StatusVal>{userData.bookmarkNum}</StatusVal>
              <StatusLabel>북마크</StatusLabel>
            </StatusBox>
          </StatusContents>
          <CourseContents>
            <StampContents>
              <h2>Stamp</h2>
              <h2 className="sr-only">스탬프 북</h2>
              <Stamps clearStages={userData.clearStages} />
            </StampContents>
            <ProgressContents>
              <h2 style={{ color: "var(--main-color)", fontWeight: "700" }}>
                기초학습 진척도
              </h2>
              {(() => {
                const progress = calculateProgress(
                  userData.clearStages,
                  stageData.total_levelnum
                );
                return (
                  <CircularProgressbar
                    value={progress}
                    text={`${Math.round(progress)}%`}
                    background={true}
                    styles={{
                      root: {
                        maxHeight: "300px",
                        maxWidth: "300px",
                        minHeight: "220px",
                        minWidth: "220px",
                      },
                      path: {
                        stroke: `var(--main-color)`,
                      },
                      text: {
                        fontSize: "1.5rem",
                        fontWeight: 700,
                        fill: "var(--main-color)",
                      },
                      background: {
                        fill: "white",
                      },
                    }}
                  />
                );
              })()}
              <DeleteButton onClick={() => setShowDeleteModal(true)}>
                회원탈퇴
              </DeleteButton>
              {showDeleteModal && (
                <DeleteConfirmModal
                  onClose={() => setShowDeleteModal(false)}
                  onDelete={handleDeleteUser}
                />
              )}
            </ProgressContents>
          </CourseContents>
        </MyPageContents>
      )}
    </Background>
  );
}

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
    width: 12rem;
    height: 12rem;
    left: 42%;
  `}
  ${media.xsmall`
    width: 10rem;
    height: 10rem;
    left: 38%;
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
    font-size: 4rem;
    left: 40%;
  `}
  ${media.xsmall`
    font-size: 3rem;
    left: 35%;
  `}
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
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
  padding-bottom: 3rem;

  ${media.large`
    background-size: cover; 
    min-height: 100%; 
  `}

  ${media.small`
    background-size: cover; 
    min-height: 100%; 
    padding-bottom: 2rem;
  `}

  ${media.xsmall`
    background-size: cover; 
    min-height: 100%;
    padding-bottom: 1.5rem;
  `}
`;

const MyPageContents = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 15rem 1rem 3rem 1rem;

  ${media.small`
    padding: 12rem 1rem 2rem 1rem;
  `}
  ${media.xsmall`
    padding: 10rem 1rem 1.5rem 1rem;
  `}
`;

const GreetingMsg = styled.div`
  font-size: 4.8rem;
  font-weight: 500;
  .greetings {
    font-weight: 300;
    color: white;
  }
  br {
    display: none;
  }
  ${media.small`
    font-size: 3.8rem;
    br {
      display: inline-block;
    }
  `}
  ${media.xsmall`
    font-size: 3rem;
  `}
`;

const StatusContents = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  padding: 2.4rem;
  width: 100%;
  height: 21.5rem;
  box-shadow:
    rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  margin: 3rem 0;
  border-radius: 2rem;

  ${media.large`
    min-width: 66rem;
    border-radius: 1rem;
  `}
  ${media.small`
    min-width: 60rem;
    height: 18rem;
    padding: 2rem;
    border-radius: 1rem;
  `}
  ${media.xsmall`
    min-width: 32rem;
    border-radius: 1rem;
    height: 15rem;
    padding: 1.5rem;
  `}
`;

const StatusBox = styled.div`
  font-size: 3.2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  ${media.small`
    font-size: 2.6rem;
    gap: 2rem;
  `}
  ${media.xsmall`
    font-size: 2rem;
    gap: 1.5rem;
  `}
`;

const StatusVal = styled.div`
  font-weight: 900;
`;

const StatusLabel = styled.h3`
  font-weight: 700;
`;

const Division = styled.div`
  height: 12.4rem;
  width: 1px;
  background-color: #c4c4c4;

  ${media.small`
    height: 8rem;
  `}
  ${media.xsmall`
    height: 8rem;
  `}
`;

const CourseContents = styled.section`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;

  h2 {
    align-self: flex-start;
    color: white;
    font-size: 4rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  ${media.large`
    flex-direction: column;
  `}

  ${media.small`
    h2 {
      font-size: 3.2rem;
    }
  `}

  ${media.xsmall`
    h2 {
      font-size: 2.8rem;
    }
  `}
`;

const StampContents = styled.section`
  flex: 1;
`;

const ProgressContents = styled.section`
  flex: 0.5;
  display: flex;
  flex-direction: column;
  border-radius: 2rem;
  background-color: white;
  box-shadow:
    rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;

  ${media.large`
    border-radius: 1rem;
    min-width: 66rem;
  `}
  ${media.small`
    min-width: 56rem;
    padding: 1.5rem;
    border-radius: 1rem;
  `}
  ${media.xsmall`
    min-width: 32rem;
    border-radius: 1rem;
    padding: 1rem;
  `}
`;

const DeleteButton = styled.button`
  align-self: flex-end;
  margin-top: 2rem;
  padding: 1rem 2rem;
  background-color: #c4c4c4;
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-size: 1.6rem;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #ff0000;
  }

  ${media.small`
    font-size: 1.4rem;
    padding: 0.8rem 1.6rem;
  `}
  ${media.xsmall`
    font-size: 1.2rem;
    padding: 0.6rem 1.2rem;
  `}
`;
