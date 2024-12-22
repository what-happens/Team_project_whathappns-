import React, { useEffect, useState } from "react";
import Editor from "./components/Editor";
import QuestionDisplay from "./components/QuestionDisplay";
import styled, { keyframes } from "styled-components";
import DragableBar from "./components/DragableBar";
import { fetchJson } from "../../utils/fetchJson";
import useExercise from "../../hooks/useExercise";
import { Link, useNavigate, useParams } from "react-router-dom";
import back from "../../assets/back_link.png";
import { useBreakpoints } from "../../hooks/useBreakpoints";
import Button from "../../components/Button";
import MobileModal from "./components/MobileModal";
import ConfirmModal from "../quizResult/components/ConfirmModal";

export default function Exercise() {
  const [editorWidth, setEditorWidth] = useState(40);
  const [renderWidth, setRenderWidth] = useState(60);
  const [isShow, setIsShow] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [isShowBack, setIsShowBack] = useState(false);
  const breakpoints = useBreakpoints();
  const navigate = useNavigate();

  const {
    setExerciseCode,
    setExerciseQuestions,
    setExerciseType,
    setExerciseSubcode,
    markedUserAnswers,
  } = useExercise();

  const { stage, level } = useParams();

  const handleNext = async () => {
    const { isCorrect, isComplete } = markedUserAnswers();
    if (!isComplete) {
      setShowMessage(true);
      return;
    }

    if (!isCorrect) {
      return;
    }

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/stage/clear/${stage}/${level}`,
        {
          method: "PUT",
          credentials: "include",
        }
      );

      if (response.ok) {
        navigate("/study/finish");
      }
    } catch (error) {
      console.error("error");
    }
  };

  const handleDrag = (delta) => {
    setEditorWidth((prev) => Math.max(40, Math.min(prev + delta, 90))); // 최소 10%, 최대 90%
    setRenderWidth((prev) => Math.max(40, Math.min(prev - delta, 90))); // 나머지 영역 계산
  };

  const closeModal = () => {
    setIsShow(false);
  };

  const closeConfirmModal = () => {
    setIsShowBack(false);
  };

  const openConfirmModal = () => {
    setIsShowBack(true);
  };

  const onConfirmModal = () => {
    navigate("/study");
  };
  useEffect(() => {
    // 비동기 작업을 처리하는 함수
    const loadJsonData = async () => {
      try {
        const json = await fetchJson(stage, level, "level");

        setExerciseCode(json.default.code); // import는 .default로 접근해야 함
        setExerciseQuestions(json.default.questions);
        setExerciseType(json.default.code_type);
        setExerciseSubcode(json.default.sub_code);
      } catch (error) {
        navigate("/404");
        console.error("Error loading JSON data:", error);
      }
    };

    loadJsonData();
    // 비동기 함수 호출
  }, []);

  useEffect(() => {
    if (breakpoints.pc && isShow) {
      setIsShow(false); // pc 뷰포트로 전환되면 모달 자동 닫기
    }
  }, [breakpoints.pc, isShow]);

  useEffect(() => {
    let timer;
    if (showMessage) {
      timer = setTimeout(() => {
        setShowMessage(false);
      }, 1000); // 1초 후 메시지 숨김
    }

    return () => {
      if (timer) {
        clearTimeout(timer); // 기존 타이머 정리
      }
    };
  }, [showMessage]);

  return (
    <>
      <ExerciseHeader>
        <nav>
          <BackBtn onClick={openConfirmModal} />
        </nav>
        {!breakpoints.pc && (
          <Button onClick={() => setIsShow(true)}>정답 화면 보기</Button>
        )}
      </ExerciseHeader>
      <ExerciseContainer>
        <Editor
          width={breakpoints.pc ? editorWidth : 100}
          isMobile={!breakpoints.pc}
        />
        {breakpoints.pc && (
          <>
            <DragableBar vertical={true} onDrag={handleDrag} />
            <RightContainer style={{ width: `${renderWidth}%` }}>
              <QuestionDisplay />
            </RightContainer>
          </>
        )}
      </ExerciseContainer>
      <ExerciseFooter>
        <nav>
          <StyledLink to={`/study/${stage}/${level}`}>&lt; 이전으로</StyledLink>
        </nav>
        <MarkedBtn onClick={handleNext}>제출하기 &gt;</MarkedBtn>
      </ExerciseFooter>
      {isShow && <MobileModal closeModal={closeModal} />}
      {showMessage && (
        <MessageOverlay>
          <Message>모든 문제를 풀어주세요</Message>
        </MessageOverlay>
      )}
      {isShowBack && (
        <ConfirmModal
          isOpen={isShowBack}
          onClose={closeConfirmModal}
          onConfirm={onConfirmModal}
        />
      )}
    </>
  );
}

const ExerciseHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 8rem;
  margin: 0 auto;
  padding: 2rem;
`;

const ExerciseContainer = styled.main`
  display: flex;
  align-items: stretch;
  justify-content: center;
  margin: 0 auto;
  border-radius: 2rem;
  width: 90vw;
  max-width: 180rem;
  height: 80vh;
  /* border: 1px solid #c4c4c4; */
  overflow: hidden;
`;

const ExerciseFooter = styled.footer`
  margin: 3rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90vw;
  max-width: 180rem;
`;

const RightContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  & > :first-child,
  & > :last-child {
    flex: 1;
    min-height: 0;
  }
`;

const BackBtn = styled.button`
  width: 4rem;
  height: 4rem;
  display: inline-block;
  background-image: url(${back});
  background-size: contain;
  text-decoration: none;
  outline: none;
  border: none;
  background-color: transparent;
`;

const StyledLink = styled(Link)`
  color: #000;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.6rem;
`;

const MarkedBtn = styled(StyledLink).attrs({ as: "button" })`
  border: none;
  background-color: transparent;
  font-family: Gmarket Sans;
  cursor: pointer;
`;

const MessageOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.5);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

// 사라질 때 애니메이션
const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.9);
  }
`;

const Message = styled.div`
  background: white;
  padding: 2rem 3rem;
  border-radius: 1rem;
  font-size: 1.6rem;
  color: black;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  animation:
    ${fadeIn} 0.3s ease-out,
    ${fadeOut} 0.3s ease-in 0.7s;
  animation-fill-mode: forwards;
`;
