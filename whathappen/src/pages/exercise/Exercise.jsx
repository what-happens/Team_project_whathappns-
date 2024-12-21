import React, { useEffect, useState } from "react";
import Editor from "./components/Editor";
import QuestionDisplay from "./components/QuestionDisplay";
import styled from "styled-components";
import DragableBar from "./components/DragableBar";
import { fetchJson } from "../../utils/fetchJson";
import useExercise from "../../hooks/useExercise";
import { Link, useNavigate, useParams } from "react-router-dom";
import back from "../../assets/back_link.png";
import { useBreakpoints } from "../../hooks/useBreakpoints";
import Button from "../../components/Button";
import MobileModal from "./components/MobileModal";

// import Button from "../../components/Button";
export default function Exercise() {
  const [editorWidth, setEditorWidth] = useState(40);
  const [renderWidth, setRenderWidth] = useState(60);
  const [isShow, setIsShow] = useState(false);
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

  const handleNext = () => {
    if (markedUserAnswers() === false) {
      /*여기서 모달 띄우기 */
      return;
    }
    navigate("/studyfinish");
  };

  const handleDrag = (delta) => {
    setEditorWidth((prev) => Math.max(40, Math.min(prev + delta, 90))); // 최소 10%, 최대 90%
    setRenderWidth((prev) => Math.max(40, Math.min(prev - delta, 90))); // 나머지 영역 계산
  };

  const closeModal = () => {
    setIsShow(false);
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

  return (
    <>
      <ExerciseHeader>
        <nav>
          <BackLink to="/study" />
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
  width: min(90vw, 120rem); // 화면의 90% 또는 최대 120rem
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

const BackLink = styled(Link)`
  width: 4rem;
  height: 4rem;
  display: inline-block;
  background-image: url(${back});
  background-size: contain;
  text-decoration: none;
  outline: none;
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
